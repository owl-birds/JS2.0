"use strict";
exports.__esModule = true;
exports.rca_basic = void 0;
var decimal_js_1 = require("decimal.js");
var rca_basic = function (country_commodity_export, world_commodity_export, total_country_export, total_world_export) {
    var upper = new decimal_js_1.Decimal(country_commodity_export).div(world_commodity_export);
    var lower = new decimal_js_1.Decimal(total_country_export).div(total_world_export);
    return upper.div(lower);
};
exports.rca_basic = rca_basic;
console.log("indonesia commodity", "A", 2010, (0, exports.rca_basic)(123.7263624, 10000, 371.4100738, 558777));
console.log("indonesia commodity", "B", 2010, (0, exports.rca_basic)(8.728108554, 90000, 371.4100738, 558777));
