"use strict";
exports.__esModule = true;
var decimal_js_1 = require("decimal.js");
var num1 = new decimal_js_1.Decimal(1);
var num2 = new decimal_js_1.Decimal(0.8);
console.log("".concat(1 - 0.8));
console.log("using decimal.js : ".concat(num1.minus(num2)));
