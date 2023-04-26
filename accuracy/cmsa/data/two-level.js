"use strict";
exports.__esModule = true;
exports.commodity_two_level_data_string = void 0;
var fs = require("fs");
var csv_parser = require("csv-parser");
// import { csvParse, autoType } from "d3";
// import { csvParse, autoType } from "d3-dsv";
var commodity_two_level_data_string = "";
exports.commodity_two_level_data_string = commodity_two_level_data_string;
try {
    var data_text = fs.readFileSync("./twoLevel/twoLevelCommo.csv", "utf-8");
    exports.commodity_two_level_data_string = commodity_two_level_data_string = data_text;
}
catch (error) {
    console.log(error);
}
console.log(commodity_two_level_data_string);
// console.log(csvParse(commodity_two_level_data_string, autoType));
var results_commo = [];
fs.createReadStream("./twoLevel/twoLevelCommo.csv")
    .pipe(csv_parser())
    .on("data", function (data) { return results_commo.push(data); })
    .on("end", function () {
    // console.log(results_commo);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
});
