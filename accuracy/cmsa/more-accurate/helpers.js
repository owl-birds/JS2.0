"use strict";
exports.__esModule = true;
exports.totalExportPerYear = exports.sumBased2Col = exports.growthRate = exports.findTotalExportCol = exports.uniqueColNames = exports.uniqueCols = exports.findColDataArr = exports.findRow2Col = exports.findColRow = void 0;
var decimal_js_1 = require("decimal.js");
// FIND DATA
// ROW
var findColRow = function (data, colName, col) {
    if (col === void 0) { col = "country"; }
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        if (row[col].trim().toLowerCase() === colName.trim().toLowerCase())
            return row;
    }
    return null;
};
exports.findColRow = findColRow;
var findRow2Col = function (data, col1Name, col2Name, col1, col2) {
    if (col1 === void 0) { col1 = "commodity"; }
    if (col2 === void 0) { col2 = "region"; }
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var row = data_2[_i];
        if (row[col1].trim() === col1Name.trim() &&
            row[col2].trim() === col2Name.trim()) {
            return row;
        }
    }
    return null;
};
exports.findRow2Col = findRow2Col;
// ARRAY
var findColDataArr = function (data, colName, col) {
    if (col === void 0) { col = "country"; }
    if (data[0][col] === undefined)
        return null;
    return data.filter(function (row) { return row[col].trim().toLowerCase() === colName.trim().toLowerCase(); });
};
exports.findColDataArr = findColDataArr;
var uniqueCols = function (row) {
    return Object.keys(row);
};
exports.uniqueCols = uniqueCols;
var uniqueColNames = function (data, col) {
    if (col === void 0) { col = "commodity"; }
    var colNames = {};
    for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
        var row = data_3[_i];
        if (!colNames[row[col]]) {
            colNames[row[col]] = true;
        }
    }
    return Object.keys(colNames);
};
exports.uniqueColNames = uniqueColNames;
var findTotalExportCol = function (data, col) {
    if (col === void 0) { col = "commodity"; }
    //
    var colNames = (0, exports.uniqueColNames)(data, col);
    var cols = (0, exports.uniqueCols)(data[0]).filter(function (col) { return Number(col); });
    var totalExports = [];
    for (var _i = 0, colNames_1 = colNames; _i < colNames_1.length; _i++) {
        var colName = colNames_1[_i];
        var exportCommodity = {};
        exportCommodity["".concat(col)] = colName;
        for (var _a = 0, cols_1 = cols; _a < cols_1.length; _a++) {
            var col_1 = cols_1[_a];
            exportCommodity["".concat(col_1)] = 0;
        }
        for (var _b = 0, data_4 = data; _b < data_4.length; _b++) {
            var row = data_4[_b];
            if (row[col] === colName) {
                for (var _c = 0, cols_2 = cols; _c < cols_2.length; _c++) {
                    var col_2 = cols_2[_c];
                    exportCommodity["".concat(col_2)] += row[col_2];
                }
            }
        }
        totalExports.push(exportCommodity);
    }
    return totalExports;
};
exports.findTotalExportCol = findTotalExportCol;
// return into a value
var growthRate = function (row, firstPeriod, secondPeriod) {
    var firstData = new decimal_js_1.Decimal(row[firstPeriod]);
    var secondData = new decimal_js_1.Decimal(row[secondPeriod]);
    var growth = secondData.minus(firstData).div(firstData);
    return growth;
};
exports.growthRate = growthRate;
var sumBased2Col = function (data, numColName, categoricColName, categoricCol) {
    if (categoricCol === void 0) { categoricCol = "commodity"; }
    //
    var totalSum = new decimal_js_1.Decimal(0);
    for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
        var row = data_5[_i];
        if (row[categoricCol].trim() === categoricColName.trim()) {
            totalSum = totalSum.plus(row[numColName]);
        }
    }
    return totalSum;
};
exports.sumBased2Col = sumBased2Col;
// some operations
// total all commodity export
var totalExportPerYear = function (data, colName, col, isTotalExist) {
    if (colName === void 0) { colName = "total"; }
    if (col === void 0) { col = "commodity"; }
    if (isTotalExist === void 0) { isTotalExist = true; }
    if (!data || data.length === 0)
        return null;
    // finding if there total exist in our data
    var totalExport = (0, exports.findColRow)(data, colName, col);
    if (totalExport && isTotalExist)
        return totalExport;
    // below if we isTotalDoesnt exist in our data
    // so we need to find it, by summing up every
    // export value
    totalExport = {};
    // only the year get
    var cols = Object.keys(data[0]).filter(function (col) { return Number(col); });
    for (var _i = 0, cols_3 = cols; _i < cols_3.length; _i++) {
        var c = cols_3[_i];
        if (!totalExport[c]) {
            totalExport[c] = new decimal_js_1.Decimal(0);
            // totalExport[c] = 0;
        }
    }
    for (var _a = 0, data_6 = data; _a < data_6.length; _a++) {
        var row = data_6[_a];
        if (row[col] === colName)
            continue;
        for (var _b = 0, cols_4 = cols; _b < cols_4.length; _b++) {
            var c = cols_4[_b];
            totalExport[c] = totalExport[c].plus(Number(row[c]));
            // totalExport[c] += Number(row[c]);
        }
    }
    totalExport["".concat(col)] = colName;
    return totalExport;
};
exports.totalExportPerYear = totalExportPerYear;
