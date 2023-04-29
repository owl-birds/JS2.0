"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
var decimal_js_1 = require("decimal.js");
// total all commodity export
// const totalExportPerYear = (
//   data: any[] | null,
//   colName: string = "total",
//   col: string = "commodity",
//   isTotalExist: boolean = true
// ): { [index: string]: any } | null => {
//   if (!data || data.length === 0) return null;
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
//       totalExport[c] = new Decimal(0);
//       // totalExport[c] = 0;
//     }
//   }
//   for (let row of data) {
//     if (row[col] === colName) continue;
//     for (let c of cols) {
//       totalExport[c] = totalExport[c].plus(Number(row[c]));
//       // totalExport[c] += Number(row[c]);
//     }
//   }
//   totalExport[`${col}`] = colName;
//   return totalExport;
// };
// growth rate per commmodity
var growthRatesCol = function (data, first_period, second_period, 
// col: string = "commodity"
col) {
    var result = {};
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
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
// TWO LEVEL CMSA
var twoLevelCMSA = function (country_name, country_data, world_data, first_period, second_period, cmsa_type, // commodity or region or partner
// default value
// country_col: string = "country"
total_col_indicator) {
    if (total_col_indicator === void 0) { total_col_indicator = "total"; }
    //
    var result = {
        country: country_name,
        exportDifference: new decimal_js_1.Decimal(0),
        worldGrowthEffect: new decimal_js_1.Decimal(0),
        competitivenessEffect: new decimal_js_1.Decimal(0)
    };
    // COUNTRY
    var country_total_exports = (0, helpers_1.totalExportPerYear)(country_data, total_col_indicator, cmsa_type);
    var country_growth_rates = growthRatesCol(country_data, first_period, second_period, cmsa_type);
    // WORLD
    var world_total_exports = (0, helpers_1.totalExportPerYear)(world_data, total_col_indicator, cmsa_type);
    var world_growth_rates = growthRatesCol(world_data, first_period, second_period, cmsa_type);
    var world_growth_rate = (0, helpers_1.growthRate)(world_total_exports, first_period, second_period);
    //
    result["exportDifference"] = country_total_exports[second_period].minus(country_total_exports[first_period]);
    //
    result["worldGrowthEffect"] = worldGrowthEffect(world_growth_rate, country_total_exports, first_period, second_period);
    //
    if (cmsa_type === "commodity") {
        result["commodityEffect"] = commodityRegEffect(world_growth_rates, world_growth_rate, country_data, first_period, cmsa_type);
    }
    if (cmsa_type === "region") {
        result["regionEffect"] = commodityRegEffect(world_growth_rates, world_growth_rate, country_data, first_period, cmsa_type);
    }
    //
    result["competitivenessEffect"] = competitivenessEffect(country_growth_rates, world_growth_rates, country_data, first_period, cmsa_type);
    return result;
};
// TEST
var fs = require("fs");
var csv_parser = require("csv-parser");
var results_commo = [];
var file_name_1 = "twoLevelCommo.csv";
var file_name_2 = "twoLevelRegion.csv";
fs.createReadStream("../data/twoLevel/".concat(file_name_1))
    .pipe(csv_parser())
    .on("data", function (data) { return results_commo.push(data); })
    .on("end", function () {
    console.log(results_commo);
    // console.log(findColDataArr(results_commo, "indonesia", "country"));
    var cmsa_type = "commodity";
    var country = "inDoNesia";
    var world = "dunia";
    var first_period = "2011";
    var second_period = "2012";
    var country_data = (0, helpers_1.findColDataArr)(results_commo, country, "country");
    var country_total_export = (0, helpers_1.totalExportPerYear)(country_data, "total", cmsa_type);
    var country_growth_rates_commodity = growthRatesCol(country_data, first_period, second_period, cmsa_type);
    var world_data = (0, helpers_1.findColDataArr)(results_commo, world, "country");
    var world_total_export = (0, helpers_1.totalExportPerYear)(world_data, "total", cmsa_type);
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
    console.log("total", country, country_total_export, "\ndiff: ".concat(country_total_export[second_period].minus(country_total_export[first_period])));
    // WORLD GROWTH EFFECT
    console.log("World Growth Effect ".concat(first_period, " ").concat(second_period), country, worldGrowthEffect((0, helpers_1.growthRate)(world_total_export, first_period, second_period), country_total_export, first_period, second_period));
    // commodity or region effect
    console.log("".concat(cmsa_type, " Effect ").concat(first_period, " ").concat(second_period), country, commodityRegEffect(world_growth_rates_commodity, world_growth_rate, country_data, first_period, cmsa_type));
    // competitiveness effect
    console.log("Competitiveness Effect ".concat(first_period, " ").concat(second_period), country, competitivenessEffect(country_growth_rates_commodity, world_growth_rates_commodity, country_data, first_period, cmsa_type));
    // differemce
    console.log("exports diff ".concat(first_period, " ").concat(second_period), country, worldGrowthEffect((0, helpers_1.growthRate)(world_total_export, first_period, second_period), country_total_export, first_period, second_period)
        .plus(commodityRegEffect(world_growth_rates_commodity, world_growth_rate, country_data, first_period, cmsa_type))
        .plus(competitivenessEffect(country_growth_rates_commodity, world_growth_rates_commodity, country_data, first_period, cmsa_type)));
    console.log("CMSA two level, ".concat(country, " ").concat(first_period, "-").concat(second_period), twoLevelCMSA(country, country_data, world_data, first_period, second_period, cmsa_type));
});
// console.log(new Decimal(0).plus(9).plus(89));
// console.log(findColDataArr(countriesData, "indonesia", "country"));
// console.log(
//   totalExportPerYear(findColDataArr(countriesData, "indonesia", "country"))
// );
