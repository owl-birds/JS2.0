import {
  findColRow,
  growthRate,
  findRow2Col,
  findColDataArr,
  sumBased2Col,
  uniqueColNames,
  uniqueCols,
  findTotalExportCol,
} from "./helpers";
import { Decimal } from "decimal.js";
import { countriesData, worldData } from "../data/three-level";

// total all commodity export
const totalExportPerYear = (
  data: any[] | null,
  colName: string = "total",
  col: string = "commodity",
  isTotalExist: boolean = true
): { [index: string]: any } | null => {
  if (!data || data.length === 0) return null;
  // finding if there total exist in our data
  let totalExport: { [index: string]: any } | null = findColRow(
    data,
    colName,
    col
  );
  if (totalExport && isTotalExist) return totalExport;
  // below if we isTotalDoesnt exist in our data
  // so we need to find it, by summing up every
  // export value
  totalExport = {};
  // only the year get
  const cols: string[] = Object.keys(data[0]).filter((col) => Number(col));
  for (let c of cols) {
    if (!totalExport[c]) {
      totalExport[c] = new Decimal(0);
      // totalExport[c] = 0;
    }
  }
  for (let row of data) {
    if (row[col] === colName) continue;
    for (let c of cols) {
      totalExport[c] = totalExport[c].plus(Number(row[c]));
      // totalExport[c] += Number(row[c]);
    }
  }
  totalExport[`${col}`] = colName;
  return totalExport;
};

// growth rate per commmodity
const growthRatesCol = (
  data: { [index: string]: any }[],
  first_period: string,
  second_period: string,
  // col: string = "commodity"
  col: string
) => {
  const result: { [commodity: string]: Decimal | string } = {};
  for (let row of data) {
    result[row[col]] = growthRate(row, first_period, second_period);
  }
  result["col"] = col;
  return result;
};

// WORLD GROWTH EFFECT
const worldGrowthEffect = (
  // totalWorldExport: { [index: string]: any },
  worldGrowth: Decimal,
  totalCountryExport: { [index: string]: any },
  firstPeriod: string,
  secondPeriod: string
): Decimal => {
  // const worldGrowth: Decimal = growthRate(
  //   totalWorldExport,
  //   firstPeriod,
  //   secondPeriod
  // );
  return worldGrowth.times(totalCountryExport[firstPeriod]);
};

// COMMMODITY/REGIONAL EFFECT
const commodityRegEffect = (
  world_growth_rates: {
    [index: string]: any;
  },
  world_growth_rate: Decimal,
  country_exports: { [index: string]: any }[],
  first_period: string | number,
  col: string = "commodity"
) => {
  //
  let result: Decimal = new Decimal(0);
  for (let row_commodity of country_exports) {
    result = result.plus(
      world_growth_rates[row_commodity[col]]
        .minus(world_growth_rate)
        .times(row_commodity[first_period])
    );
  }
  return result;
};

// COMPETITIVENESSS EFFECT
const competitivenessEffect = (
  country_growth_rates: { [index: string]: any },
  world_growth_rates: { [index: string]: any },
  country_exports: { [index: string]: any }[],
  first_period: string,
  col: string
) => {
  //
  let result = new Decimal(0);
  for (let row_commodity of country_exports) {
    result = result.plus(
      country_growth_rates[row_commodity[col]]
        .minus(world_growth_rates[row_commodity[col]])
        .times(row_commodity[first_period])
    );
  }
  return result;
};

// TWO LEVEL CMSA
const twoLevelCMSA = (
  country_name: string,
  country_data: { [index: string]: any }[],
  world_data: { [index: string]: any }[],
  first_period: string,
  second_period: string,
  cmsa_type: string, // commodity or region or partner
  // default value
  // country_col: string = "country"
  total_col_indicator: string = "total"
): {
  country: string;
  exportDifference: Decimal;
  worldGrowthEffect: Decimal;
  commodityEffect?: Decimal;
  regionEffect?: Decimal;
  competitivenessEffect: Decimal;
} => {
  //
  const result: {
    country: string;
    exportDifference: Decimal;
    worldGrowthEffect: Decimal;
    commodityEffect?: Decimal;
    regionEffect?: Decimal;
    competitivenessEffect: Decimal;
  } = {
    country: country_name,
    exportDifference: new Decimal(0),
    worldGrowthEffect: new Decimal(0),
    competitivenessEffect: new Decimal(0),
  };
  // COUNTRY
  const country_total_exports = totalExportPerYear(
    country_data,
    total_col_indicator,
    cmsa_type
  );
  const country_growth_rates = growthRatesCol(
    country_data,
    first_period,
    second_period,
    cmsa_type
  );
  // WORLD
  const world_total_exports = totalExportPerYear(
    world_data,
    total_col_indicator,
    cmsa_type
  );
  const world_growth_rates = growthRatesCol(
    world_data,
    first_period,
    second_period,
    cmsa_type
  );
  const world_growth_rate = growthRate(
    world_total_exports!,
    first_period,
    second_period
  );
  //
  result["exportDifference"] = country_total_exports![second_period].minus(
    country_total_exports![first_period]
  );
  //
  result["worldGrowthEffect"] = worldGrowthEffect(
    world_growth_rate,
    country_total_exports!,
    first_period,
    second_period
  );
  //
  if (cmsa_type === "commodity") {
    result["commodityEffect"] = commodityRegEffect(
      world_growth_rates,
      world_growth_rate,
      country_data,
      first_period,
      cmsa_type
    );
  }
  if (cmsa_type === "region") {
    result["regionEffect"] = commodityRegEffect(
      world_growth_rates,
      world_growth_rate,
      country_data,
      first_period,
      cmsa_type
    );
  }
  //
  result["competitivenessEffect"] = competitivenessEffect(
    country_growth_rates,
    world_growth_rates,
    country_data,
    first_period,
    cmsa_type
  );
  return result;
};

// TEST
import * as fs from "fs";
const csv_parser = require("csv-parser");
const results_commo: any[] = [];
const file_name_1 = "twoLevelCommo.csv";
const file_name_2 = "twoLevelRegion.csv";
fs.createReadStream(`../data/twoLevel/${file_name_1}`)
  .pipe(csv_parser())
  .on("data", (data: any) => results_commo.push(data))
  .on("end", () => {
    console.log(results_commo);
    // console.log(findColDataArr(results_commo, "indonesia", "country"));
    const cmsa_type = "commodity";
    const country = "inDoNesia";
    const world = "dunia";
    const first_period = "2011";
    const second_period = "2012";
    const country_data = findColDataArr(results_commo, country, "country");
    const country_total_export = totalExportPerYear(
      country_data,
      "total",
      cmsa_type
    );
    const country_growth_rates_commodity = growthRatesCol(
      country_data!,
      first_period,
      second_period,
      cmsa_type
    );
    const world_data = findColDataArr(results_commo, world, "country");
    const world_total_export = totalExportPerYear(
      world_data,
      "total",
      cmsa_type
    );
    const world_growth_rate = growthRate(
      world_total_export!,
      first_period,
      second_period
    );
    const world_growth_rates_commodity = growthRatesCol(
      world_data!,
      first_period,
      second_period,
      cmsa_type
    );
    console.log(new Decimal(9).plus(18));
    const a = { test: new Decimal(15).plus(17) };
    a["test"] = a["test"].plus(100).plus(new Decimal(200));
    console.log(a);
    // console.log(country, totalExportPerYear(country_data));
    console.log(country, country_total_export);
    // console.log(world, totalExportPerYear(world_data));
    console.log(world, world_total_export);
    // console.log(country, country_data);
    // console.log(world, world_data);
    console.log(country, country_growth_rates_commodity);
    console.log(world, world_growth_rates_commodity);
    console.log(
      "total",
      country,
      country_total_export,
      `\ndiff: ${country_total_export![second_period].minus(
        country_total_export![first_period]
      )}`
    );

    // WORLD GROWTH EFFECT
    console.log(
      `World Growth Effect ${first_period} ${second_period}`,
      country,
      worldGrowthEffect(
        growthRate(world_total_export!, first_period, second_period),
        country_total_export!,
        first_period,
        second_period
      )
    );

    // commodity or region effect
    console.log(
      `${cmsa_type} Effect ${first_period} ${second_period}`,
      country,
      commodityRegEffect(
        world_growth_rates_commodity,
        world_growth_rate,
        country_data!,
        first_period,
        cmsa_type
      )
    );

    // competitiveness effect
    console.log(
      `Competitiveness Effect ${first_period} ${second_period}`,
      country,
      competitivenessEffect(
        country_growth_rates_commodity,
        world_growth_rates_commodity,
        country_data!,
        first_period,
        cmsa_type
      )
    );

    // differemce
    console.log(
      `exports diff ${first_period} ${second_period}`,
      country,
      worldGrowthEffect(
        growthRate(world_total_export!, first_period, second_period),
        country_total_export!,
        first_period,
        second_period
      )
        .plus(
          commodityRegEffect(
            world_growth_rates_commodity,
            world_growth_rate,
            country_data!,
            first_period,
            cmsa_type
          )
        )
        .plus(
          competitivenessEffect(
            country_growth_rates_commodity,
            world_growth_rates_commodity,
            country_data!,
            first_period,
            cmsa_type
          )
        )
    );
    console.log(
      `CMSA two level, ${country} ${first_period}-${second_period}`,
      twoLevelCMSA(
        country,
        country_data!,
        world_data!,
        first_period,
        second_period,
        cmsa_type
      )
    );
  });
// console.log(new Decimal(0).plus(9).plus(89));
// console.log(findColDataArr(countriesData, "indonesia", "country"));
// console.log(
//   totalExportPerYear(findColDataArr(countriesData, "indonesia", "country"))
// );
