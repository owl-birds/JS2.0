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
// growth rate per commmodity
var growthRatesCol = function (data, first_period, second_period, 
// col: string = "commodity"
col) {
    var result = {};
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var row = data_2[_i];
        result[row[col]] = (0, helpers_1.growthRate)(row, first_period, second_period);
    }
    result["col"] = col;
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
// COMMMODITY/REGIONAL EFFECT
var commodityRegEffect = function (world_growth_rates, world_growth_rate, country_exports, first_period, col) {
    if (col === void 0) { col = "commodity"; }
    //
    var result = new decimal_js_1.Decimal(0);
    for (var _i = 0, country_exports_1 = country_exports; _i < country_exports_1.length; _i++) {
        var row_commodity = country_exports_1[_i];
        result = result.plus(world_growth_rates[row_commodity[col]]
            .minus(world_growth_rate)
            .times(row_commodity[first_period]));
    }
    return result;
};
// COMPETITIVENESSS EFFECT
var competitivenessEffect = function (country_growth_rates, world_growth_rates, country_exports, first_period, col) {
    //
    var result = new decimal_js_1.Decimal(0);
    for (var _i = 0, country_exports_2 = country_exports; _i < country_exports_2.length; _i++) {
        var row_commodity = country_exports_2[_i];
        result = result.plus(country_growth_rates[row_commodity[col]]
            .minus(world_growth_rates[row_commodity[col]])
            .times(row_commodity[first_period]));
    }
    return result;
};
// TEST
var fs = require("fs");
var csv_parser = require("csv-parser");
var results_commo = [];
var file_name = "twoLevelCommo.csv";
fs.createReadStream("../data/twoLevel/".concat(file_name))
    .pipe(csv_parser())
    .on("data", function (data) { return results_commo.push(data); })
    .on("end", function () {
    console.log(results_commo);
    // console.log(findColDataArr(results_commo, "indonesia", "country"));
    var cmsa_type = "commodity";
    var country = "Malaysia";
    var world = "dunia";
    var first_period = "2011";
    var second_period = "2013";
    var country_data = (0, helpers_1.findColDataArr)(results_commo, country, "country");
    var country_total_export = totalExportPerYear(country_data);
    var country_growth_rates_commodity = growthRatesCol(country_data, first_period, second_period, cmsa_type);
    var world_data = (0, helpers_1.findColDataArr)(results_commo, world, "country");
    var world_total_export = totalExportPerYear(world_data);
    var world_growth_rate = (0, helpers_1.growthRate)(world_total_export, first_period, second_period);
    var world_growth_rates_commodity = growthRatesCol(world_data, first_period, second_period, cmsa_type);
    console.log(new decimal_js_1.Decimal(9).plus(18));
    var a = { test: new decimal_js_1.Decimal(15).plus(17) };
    a["test"] = a["test"].plus(100).plus(new decimal_js_1.Decimal(200));
    console.log(a);
    // console.log(country, totalExportPerYear(country_data));
    console.log(country, country_total_export);
    // console.log(world, totalExportPerYear(world_data));
    console.log(world, world_total_export);
    // console.log(country, country_data);
    // console.log(world, world_data);
    console.log(country, country_growth_rates_commodity);
    console.log(world, world_growth_rates_commodity);
    // WORLD GROWTH EFFECT
    console.log("World Growth Effect ".concat(first_period, " ").concat(second_period), country, worldGrowthEffect((0, helpers_1.growthRate)(world_total_export, first_period, second_period), country_total_export, first_period, second_period));
    // commodity or region effect
    console.log("".concat(cmsa_type, " Effect ").concat(first_period, " ").concat(second_period), country, commodityRegEffect(world_growth_rates_commodity, world_growth_rate, country_data, first_period, cmsa_type));
    // competitiveness effect
    console.log("Competitiveness Effect ".concat(first_period, " ").concat(second_period), country, competitivenessEffect(country_growth_rates_commodity, world_growth_rates_commodity, country_data, first_period, cmsa_type));
});
// console.log(new Decimal(0).plus(9).plus(89));
// console.log(findColDataArr(countriesData, "indonesia", "country"));
// console.log(
//   totalExportPerYear(findColDataArr(countriesData, "indonesia", "country"))
// );
