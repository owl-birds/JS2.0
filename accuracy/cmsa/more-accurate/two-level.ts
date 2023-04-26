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

// TEST
import * as fs from "fs";
const csv_parser = require("csv-parser");
const results_commo: any[] = [];
fs.createReadStream("../data/twoLevel/twoLevelCommo.csv")
  .pipe(csv_parser())
  .on("data", (data: any) => results_commo.push(data))
  .on("end", () => {
    console.log(results_commo);
    // console.log(findColDataArr(results_commo, "indonesia", "country"));
    const country = "Indonesia";
    const world = "dunia";
    const first_period = "2010";
    const second_period = "2011";
    const country_data = findColDataArr(results_commo, country, "country");
    const world_data = findColDataArr(results_commo, world, "country");

    console.log(new Decimal(9).plus(18));
    const a = { test: new Decimal(15).plus(17) };
    a["test"] = a["test"].plus(100).plus(new Decimal(200));
    console.log(a);
    console.log(country, totalExportPerYear(country_data));
    console.log(world, totalExportPerYear(world_data));
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
// console.log(new Decimal(0).plus(9).plus(89));
// console.log(findColDataArr(countriesData, "indonesia", "country"));
// console.log(
//   totalExportPerYear(findColDataArr(countriesData, "indonesia", "country"))
// );
