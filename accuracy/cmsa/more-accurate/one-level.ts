import * as fs from "fs";
import { Decimal } from "decimal.js";

// helpers methods/funcs
import { findColRow, growthRate } from "./helpers";

// configure Decimal
Decimal.set({
  //   precision: 20,
  //   rounding: 0,
});

// import { csvParse, autoType } from "d3";
// dummy data
const dataPath: string = "../data/oneLevel/one-level.csv";
const dataString: string = fs.readFileSync(dataPath).toString("utf-8");
console.log(dataString);
// const data = csvParse(dataString, autoType);
// console.log(data);
// return fs
//   .readFileSync(fileName)
//   .toString("utf8")
//   .split("\n")
//   .filter((currString: string) => currString.length > 2);

const data = [
  { 2010: 157779103470, 2011: 203496619185, country: "Indonesia" },
  { 2010: 14407336476975, 2011: 17578781447960, country: "Dunia " },
];

// const findColRow = (
//   data: any[],
//   col: string = "country",
//   colName: string
// ): { [index: string]: any } | null => {
//   for (let row of data) {
//     if (row[col].trim().toLowerCase() === colName.trim().toLowerCase())
//       return row;
//   }
//   return null;
// };

// const growthRate = (
//   row: { [index: string]: any },
//   firstPeriod: string,
//   secondPeriod: string
// ): Decimal => {
//   const firstData: Decimal = new Decimal(row[firstPeriod]);
//   const secondData: Decimal = new Decimal(row[secondPeriod]);
//   const growth: Decimal = secondData.minus(firstData).div(firstData);
//   return growth;
// };

const worldGrowthEffect = (
  //   worldRow: { [index: string]: any },
  //   countryRow: { [index: string]: any },
  //   firstPeriod: string,
  //   secondPeriod: string
  worldGrowthRate: Decimal,
  countryFirstPeriodExport: Decimal
): Decimal => {
  //   const worldGrowthRate: Decimal = new Decimal(
  //     growthRate(worldRow, firstPeriod, secondPeriod)
  //   );
  //   const countryFirstPeriodExport: Decimal = new Decimal(
  //     countryRow[firstPeriod]
  //   );
  return worldGrowthRate.times(countryFirstPeriodExport);
};

const competitivenessEffect = (
  worldGrowthRate: Decimal,
  countryGrowthRate: Decimal,
  countryFirstPeriodExport: Decimal
): Decimal => {
  return countryGrowthRate
    .minus(worldGrowthRate)
    .times(countryFirstPeriodExport);
};

const oneLevelCMSA = (
  worldRow: { [index: string]: any },
  countryRow: { [index: string]: any },
  firstPeriod: string,
  secondPeriod: string,
  country: string
): {
  country: string;
  worldGrowthEffect: Decimal;
  competitivenessEffect: Decimal;
  exportDifference: Decimal;
} => {
  const worldGrowthRate: Decimal = growthRate(
    worldRow,
    firstPeriod,
    secondPeriod
  );
  const countryGrowthRate: Decimal = growthRate(
    countryRow,
    firstPeriod,
    secondPeriod
  );
  const worldGrowthEffectResult: Decimal = worldGrowthEffect(
    worldGrowthRate,
    countryRow[firstPeriod]
  );
  const competitivenessEffectResult: Decimal = competitivenessEffect(
    worldGrowthRate,
    countryGrowthRate,
    countryRow[firstPeriod]
  );
  return {
    country,
    worldGrowthEffect: worldGrowthEffectResult,
    competitivenessEffect: competitivenessEffectResult,
    exportDifference: new Decimal(countryRow[secondPeriod]).minus(
      countryRow[firstPeriod]
    ),
  };
};

console.log(growthRate(data[0], "2010", "2011"));
console.log(growthRate(data[1], "2010", "2011"));
console.log((data[0]["2011"] - data[0]["2010"]) / data[0]["2010"]);
console.log(
  growthRate(findColRow(data, "Indonesia", "country")!, "2010", "2011")
);
console.log(growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"));
console.log(
  "world Growth Effect",
  worldGrowthEffect(
    growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
    findColRow(data, "Indonesia", "country")!["2010"]
  )
);
console.log(
  "Competitiveness Effect",
  competitivenessEffect(
    growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
    growthRate(findColRow(data, "Indonesia", "country")!, "2010", "2011"),
    findColRow(data, "Indonesia", "country")!["2010"]
  )
);
console.log(
  "CHANGES (FROM FORMULA)",
  competitivenessEffect(
    growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
    growthRate(findColRow(data, "Indonesia", "country")!, "2010", "2011"),
    findColRow(data, "Indonesia", "country")!["2010"]
  )
    .plus(
      worldGrowthEffect(
        growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
        findColRow(data, "Indonesia", "country")!["2010"]
      )
    )
    .round()
);
console.log(
  "CHANGES (FROM FORMULA)",
  competitivenessEffect(
    growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
    growthRate(findColRow(data, "Indonesia", "country")!, "2010", "2011"),
    findColRow(data, "Indonesia", "country")!["2010"]
  )
    .round()
    .plus(
      worldGrowthEffect(
        growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
        findColRow(data, "Indonesia", "country")!["2010"]
      ).round()
    )
);
console.log("CHANGES", data[0]["2011"] - data[0]["2010"]);
// console.log(
//   ((data[1]["2011"] - data[1]["2010"]) / data[1]["2010"]) * data[0]["2010"]
// );
console.log(
  "world Growth Effect",
  worldGrowthEffect(
    growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
    findColRow(data, "Indonesia", "country")!["2010"]
  )
);
console.log(
  "Competitiveness Effect",
  competitivenessEffect(
    growthRate(findColRow(data, "Dunia", "country")!, "2010", "2011"),
    growthRate(findColRow(data, "Indonesia", "country")!, "2010", "2011"),
    findColRow(data, "Indonesia", "country")!["2010"]
  )
);
console.log(
  oneLevelCMSA(
    findColRow(data, "Dunia", "country")!,
    findColRow(data, "Indonesia", "country")!,
    "2010",
    "2011",
    "Indonesia"
  )
);
