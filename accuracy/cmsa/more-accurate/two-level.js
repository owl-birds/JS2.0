"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var decimal_js_1 = require("decimal.js");
// total all commodity export
var totalExportPerYear = function (data, colName, col, isTotalExist) {
    if (colName === void 0) { colName = "total"; }
    if (col === void 0) { col = "commodity"; }
    if (isTotalExist === void 0) { isTotalExist = true; }
    if (!data || data.length === 0)
        return null;
    // finding if there total exist in our data
    var totalExport = (0, helpers_1.findColRow)(data, colName, col);
    if (totalExport && isTotalExist)
        return totalExport;
    // below if we isTotalDoesnt exist in our data
    // so we need to find it, by summing up every
    // export value
    totalExport = {};
    // only the year get
    var cols = Object.keys(data[0]).filter(function (col) { return Number(col); });
    for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
        var c = cols_1[_i];
        if (!totalExport[c]) {
            totalExport[c] = new decimal_js_1.Decimal(0);
            // totalExport[c] = 0;
        }
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var row = data_1[_a];
        if (row[col] === colName)
            continue;
        for (var _b = 0, cols_2 = cols; _b < cols_2.length; _b++) {
            var c = cols_2[_b];
            totalExport[c] = totalExport[c].plus(Number(row[c]));
            // totalExport[c] += Number(row[c]);
        }
    }
    totalExport["".concat(col)] = colName;
    return totalExport;
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
// TEST
var fs = require("fs");
var csv_parser = require("csv-parser");
var results_commo = [];
fs.createReadStream("../data/twoLevel/twoLevelCommo.csv")
    .pipe(csv_parser())
    .on("data", function (data) { return results_commo.push(data); })
    .on("end", function () {
    console.log(results_commo);
    // console.log(findColDataArr(results_commo, "indonesia", "country"));
    var country = "Indonesia";
    var world = "dunia";
    var first_period = "2010";
    var second_period = "2011";
    var country_data = (0, helpers_1.findColDataArr)(results_commo, country, "country");
    var world_data = (0, helpers_1.findColDataArr)(results_commo, world, "country");
    console.log(new decimal_js_1.Decimal(9).plus(18));
    var a = { test: new decimal_js_1.Decimal(15).plus(17) };
    a["test"] = a["test"].plus(100).plus(new decimal_js_1.Decimal(200));
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
