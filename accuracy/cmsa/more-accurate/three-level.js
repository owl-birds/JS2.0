"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var decimal_js_1 = require("decimal.js");
var three_level_1 = require("../data/three-level");
// total all commodity export
// const totalExportPerYear = (
//   data: any[],
//   colName: string = "total",
//   col: string = "commodity",
//   isTotalExist: boolean = true
// ): { [index: string]: any } => {
//   // finding if there total exist in our data
//   let totalExport: { [index: string]: any } | null = findColRow(
//     data,
//     colName,
//     col
//   );
//   if (totalExport && isTotalExist) return totalExport;
//   // below if we isTotalDoesnt exist in our data
//   // so we need to find it, by summing up every
//   // export value
//   totalExport = {};
//   // only the year get
//   const cols: string[] = Object.keys(data[0]).filter((col) => Number(col));
//   for (let c of cols) {
//     if (!totalExport[c]) {
//       totalExport[c] = 0;
//       continue;
//     }
//   }
//   for (let row of data) {
//     if (row[col] === colName) continue;
//     for (let c of cols) {
//       totalExport[c] += row[c];
//     }
//   }
//   totalExport[`${col}`] = colName;
//   return totalExport;
// };
// world growth based on col list
var growthRateListColArr = function (data, firstPeriod, secondPeriod, col) {
    if (col === void 0) { col = "commodity"; }
    var growthRateList = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        var growth = {};
        growth["".concat(col)] = row[col];
        growth["rate"] = (0, helpers_1.growthRate)(row, firstPeriod, secondPeriod);
        growthRateList.push(growth);
    }
    return growthRateList;
};
var growthRateListColObj = function (data, firstPeriod, secondPeriod, col) {
    if (col === void 0) { col = "commodity"; }
    //
    var growthRates = {};
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var row = data_2[_i];
        growthRates["".concat(row[col])] = (0, helpers_1.growthRate)(row, firstPeriod, secondPeriod);
    }
    return growthRates;
};
var growthRateNBaseExport2Col = function (data, firstPeriod, secondPeriod, firstCol, secondCol) {
    if (firstCol === void 0) { firstCol = "commodity"; }
    if (secondCol === void 0) { secondCol = "region"; }
    var result = [];
    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
        var row = data_3[_i];
        var growth = {};
        growth["".concat(firstCol)] = row[firstCol];
        growth["".concat(secondCol)] = row[secondCol];
        growth["rate"] = (0, helpers_1.growthRate)(row, firstPeriod, secondPeriod);
        growth["baseExport"] = row[firstPeriod];
        result.push(growth);
    }
    return result;
};
// WORLD GROWTH EFFECT
var worldGrowthEffect = function (
// totalWorldExport: { [index: string]: any },
worldGrowth, totalCountryExport, firstPeriod, secondPeriod) {
    // const worldGrowth: Decimal = growthRate(
    //   totalWorldExport,
    //   firstPeriod,
    //   secondPeriod
    // );
    return worldGrowth.times(totalCountryExport[firstPeriod]);
};
// COMMODITY EFFECT
var commodityEffect = function (worldGrowth, worldCommoditiesGrowth, countryExportPerCommodities, firstPeriod, col) {
    if (col === void 0) { col = "commodity"; }
    //
    var comEffect = new decimal_js_1.Decimal(0);
    var diff = {};
    // the difference for each world growth rate per commodity to the
    // total world growth rate
    for (var _i = 0, worldCommoditiesGrowth_1 = worldCommoditiesGrowth; _i < worldCommoditiesGrowth_1.length; _i++) {
        var row = worldCommoditiesGrowth_1[_i];
        diff["".concat(row[col])] = row["rate"].minus(worldGrowth);
    }
    for (var _a = 0, countryExportPerCommodities_1 = countryExportPerCommodities; _a < countryExportPerCommodities_1.length; _a++) {
        var row = countryExportPerCommodities_1[_a];
        comEffect = comEffect.plus(diff[row[col]].times(row[firstPeriod]));
    }
    return comEffect;
};
// REGIONAL MARKET EFFECT
var regionalMarketEffect = function (worldCommoditiesGrowth, countryCommoditiesGrowth, countryExportData, firstPeriod, col
// partnerList: string[]
) {
    if (col === void 0) { col = "commodity"; }
    var regMarEffect = new decimal_js_1.Decimal(0);
    for (var _i = 0, _a = Object.keys(countryCommoditiesGrowth); _i < _a.length; _i++) {
        var commodity = _a[_i];
        var diff = countryCommoditiesGrowth[commodity].minus(worldCommoditiesGrowth[commodity]);
        for (var _b = 0, countryExportData_1 = countryExportData; _b < countryExportData_1.length; _b++) {
            var row = countryExportData_1[_b];
            if (row[col] === commodity) {
                regMarEffect = regMarEffect.plus(diff.times(row[firstPeriod]));
            }
        }
    }
    return regMarEffect;
};
// COMPETITIVENESS EFFECT
var competitivenessEffect = function (countryCommodityGrowth, countryCommodityRegionGrowth, col) {
    if (col === void 0) { col = "commodity"; }
    var compeEffect = new decimal_js_1.Decimal(0);
    for (var _i = 0, countryCommodityRegionGrowth_1 = countryCommodityRegionGrowth; _i < countryCommodityRegionGrowth_1.length; _i++) {
        var row = countryCommodityRegionGrowth_1[_i];
        //
        compeEffect = compeEffect.plus(row["rate"]
            .minus(countryCommodityGrowth[row[col]])
            .times(row["baseExport"]));
    }
    return compeEffect;
};
// // three level
var threeLevelCMSA = function (worldData, countryData, countryName, firstPeriod, secondPeriod, isTotalExist, totalIndicator, firstCol, secondCol) {
    if (isTotalExist === void 0) { isTotalExist = true; }
    if (totalIndicator === void 0) { totalIndicator = "total"; }
    if (firstCol === void 0) { firstCol = "commodity"; }
    if (secondCol === void 0) { secondCol = "region"; }
    // COUNTRY
    var totalCountryExport = (0, helpers_1.totalExportPerYear)(countryData, totalIndicator, firstCol, isTotalExist);
    // const totalCountryGrowth: Decimal = growthRate(
    //   totalCountryExport,
    //   firstPeriod,
    //   secondPeriod
    // );
    var totalCountryExportCommodities = (0, helpers_1.findTotalExportCol)(countryData, firstCol);
    var countryCommoditiesGrowth = growthRateListColObj(totalCountryExportCommodities, firstPeriod, secondPeriod, firstCol);
    var countryCommoditiesRegionGrowth = growthRateNBaseExport2Col(countryData, firstPeriod, secondPeriod, firstCol, secondCol);
    // WORLD
    var totalWorldExport = (0, helpers_1.totalExportPerYear)(worldData, totalIndicator, firstCol, isTotalExist);
    var totalWorldGrowth = (0, helpers_1.growthRate)(totalWorldExport, firstPeriod, secondPeriod);
    var worldCommoditiesGrowthArr = growthRateListColArr(worldData, firstPeriod, secondPeriod, firstCol);
    var worldCommoditiesGrowthObj = growthRateListColObj(worldData, firstPeriod, secondPeriod, firstCol);
    //
    // world growth effect
    var wge = worldGrowthEffect(
    // totalWorldExport,
    totalWorldGrowth, totalCountryExport, firstPeriod, secondPeriod);
    // commodities effect
    var comEffect = commodityEffect(totalWorldGrowth, worldCommoditiesGrowthArr, totalCountryExportCommodities, firstPeriod, firstCol);
    // regional market effect
    var rge = regionalMarketEffect(worldCommoditiesGrowthObj, countryCommoditiesGrowth, countryData, firstPeriod, firstCol);
    // competitiveness effect
    var compeEffect = competitivenessEffect(countryCommoditiesGrowth, countryCommoditiesRegionGrowth, firstCol);
    return {
        country: countryName,
        worldGrowthEffect: wge,
        commodityEffect: comEffect,
        regionalMarketEffect: rge,
        competitivenessEffect: compeEffect
    };
};
// TEST
console.log((0, helpers_1.findRow2Col)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia"), "A", "D"));
console.log((0, helpers_1.totalExportPerYear)(three_level_1.worldData, "total", "commodity"));
console.log(1220758 / 2);
console.log((0, helpers_1.growthRate)((0, helpers_1.totalExportPerYear)(three_level_1.worldData, "total", "commodity"), "2011", "2012"));
console.log((589362 - 615087) / 615087);
console.log((0, helpers_1.findColDataArr)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia"), "A", "commodity"));
console.log((0, helpers_1.sumBased2Col)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia"), "2012", "A", "commodity"));
console.log((0, helpers_1.totalExportPerYear)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia"), 
// worldData,
"total", "commodity"
// false
));
console.log("world growth effect");
console.log(worldGrowthEffect((0, helpers_1.growthRate)((0, helpers_1.totalExportPerYear)(three_level_1.worldData, "total", "commodity"), "2010", "2012"), (0, helpers_1.totalExportPerYear)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "singapura", "country"), "total", "commodity"), "2010", "2012"));
// console.log(growthRateListCol(worldData, "2010", "2011", "commodity"));
console.log(growthRateListColArr((0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia"), "commodity"
// "region"
), "2010", "2011", "commodity"
// "region"
));
// console.log(growthRate(worldData[worldData.length - 1], "2010", "2011"));
// console.log(uniqueColNames(countriesData, "region"));
// console.log(uniqueCols(worldData[0]));
// console.log(uniqueCols(countriesData[0]));
console.log((0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia"), 
// worldData,
"commodity"
// "region"
));
// COMMODITY EFFECT
console.log("comodity effect");
console.log(commodityEffect((0, helpers_1.growthRate)((0, helpers_1.totalExportPerYear)(three_level_1.worldData, "total", "commodity"), "2010", "2012"), growthRateListColArr(three_level_1.worldData, "2010", "2012", "commodity"), (0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "singapura"), "commodity"), "2010"));
console.log(growthRateListColObj(
// worldData,
(0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia", "country"), "commodity"), "2010", "2011", "commodity"));
console.log(growthRateListColArr(
// worldData,
(0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia", "country"), "commodity"), "2010", "2011", "commodity"));
console.log((0, helpers_1.uniqueColNames)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "indonesia", "country"), "commodity"
// "region"
// "country"
));
console.log("regional market effect");
console.log(regionalMarketEffect(growthRateListColObj(three_level_1.worldData, "2010", "2012", "commodity"), growthRateListColObj(
// worldData,
(0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "singapura", "country"), "commodity"), "2010", "2012", "commodity"), (0, helpers_1.findColDataArr)(three_level_1.countriesData, "singapura", "country"), "2010", "commodity"));
// console.log(
//   growthRateNBaseExport2Col(
//     findColDataArr(countriesData, "indonesia", "country")!,
//     "2010",
//     "2011",
//     "commodity",
//     "region"
//   )
//   // .length
// );
console.log("comnpetitiveness Effect");
console.log(competitivenessEffect(growthRateListColObj((0, helpers_1.findTotalExportCol)((0, helpers_1.findColDataArr)(three_level_1.countriesData, "singapura", "country"), "commodity"), "2010", "2012", "commodity"), growthRateNBaseExport2Col((0, helpers_1.findColDataArr)(three_level_1.countriesData, "singapura", "country"), "2010", "2012", "commodity", "region"), "commodity"));
// console.log(
//   growthRateNBaseExport2Col(
//     findColDataArr(countriesData, "singapura", "country")!,
//     "2010",
//     "2011",
//     "commodity",
//     "region"
//   )
//   // .length
// );
// console.log(
//   growthRateListColObj(
//     findTotalExportCol(
//       findColDataArr(countriesData, "singapura", "country")!,
//       "commodity"
//     )!,
//     "2010",
//     "2011",
//     "commodity"
//   )
// );
console.log(threeLevelCMSA(three_level_1.worldData, (0, helpers_1.findColDataArr)(three_level_1.countriesData, "malaysia", "country"), "indonesia", "2010", "2011"));
