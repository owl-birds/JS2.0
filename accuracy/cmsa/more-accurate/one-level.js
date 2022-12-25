"use strict";
exports.__esModule = true;
var fs = require("fs");
var decimal_js_1 = require("decimal.js");
// helpers methods/funcs
var helpers_1 = require("./helpers");
// configure Decimal
decimal_js_1.Decimal.set({
//   precision: 20,
//   rounding: 0,
});
// import { csvParse, autoType } from "d3";
// dummy data
var dataPath = "../data/oneLevel/one-level.csv";
var dataString = fs.readFileSync(dataPath).toString("utf-8");
console.log(dataString);
// const data = csvParse(dataString, autoType);
// console.log(data);
// return fs
//   .readFileSync(fileName)
//   .toString("utf8")
//   .split("\n")
//   .filter((currString: string) => currString.length > 2);
var data = [
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
var worldGrowthEffect = function (
//   worldRow: { [index: string]: any },
//   countryRow: { [index: string]: any },
//   firstPeriod: string,
//   secondPeriod: string
worldGrowthRate, countryFirstPeriodExport) {
    //   const worldGrowthRate: Decimal = new Decimal(
    //     growthRate(worldRow, firstPeriod, secondPeriod)
    //   );
    //   const countryFirstPeriodExport: Decimal = new Decimal(
    //     countryRow[firstPeriod]
    //   );
    return worldGrowthRate.times(countryFirstPeriodExport);
};
var competitivenessEffect = function (worldGrowthRate, countryGrowthRate, countryFirstPeriodExport) {
    return countryGrowthRate
        .minus(worldGrowthRate)
        .times(countryFirstPeriodExport);
};
var oneLevelCMSA = function (worldRow, countryRow, firstPeriod, secondPeriod, country) {
    var worldGrowthRate = (0, helpers_1.growthRate)(worldRow, firstPeriod, secondPeriod);
    var countryGrowthRate = (0, helpers_1.growthRate)(countryRow, firstPeriod, secondPeriod);
    var worldGrowthEffectResult = worldGrowthEffect(worldGrowthRate, countryRow[firstPeriod]);
    var competitivenessEffectResult = competitivenessEffect(worldGrowthRate, countryGrowthRate, countryRow[firstPeriod]);
    return {
        country: country,
        worldGrowthEffect: worldGrowthEffectResult,
        competitivenessEffect: competitivenessEffectResult,
        totalChanges: worldGrowthEffectResult
            .plus(competitivenessEffectResult)
            .round()
    };
};
console.log((0, helpers_1.growthRate)(data[0], "2010", "2011"));
console.log((0, helpers_1.growthRate)(data[1], "2010", "2011"));
console.log((data[0]["2011"] - data[0]["2010"]) / data[0]["2010"]);
console.log((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Indonesia", "country"), "2010", "2011"));
console.log((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"));
console.log("world Growth Effect", worldGrowthEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"]));
console.log("Competitiveness Effect", competitivenessEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Indonesia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"]));
console.log("CHANGES (FROM FORMULA)", competitivenessEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Indonesia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"])
    .plus(worldGrowthEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"]))
    .round());
console.log("CHANGES (FROM FORMULA)", competitivenessEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Indonesia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"])
    .round()
    .plus(worldGrowthEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"]).round()));
console.log("CHANGES", data[0]["2011"] - data[0]["2010"]);
// console.log(
//   ((data[1]["2011"] - data[1]["2010"]) / data[1]["2010"]) * data[0]["2010"]
// );
console.log("world Growth Effect", worldGrowthEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"]));
console.log("Competitiveness Effect", competitivenessEffect((0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Dunia", "country"), "2010", "2011"), (0, helpers_1.growthRate)((0, helpers_1.findColRow)(data, "Indonesia", "country"), "2010", "2011"), (0, helpers_1.findColRow)(data, "Indonesia", "country")["2010"]));
console.log(oneLevelCMSA((0, helpers_1.findColRow)(data, "Dunia", "country"), (0, helpers_1.findColRow)(data, "Indonesia", "country"), "2010", "2011", "Indonesia"));
