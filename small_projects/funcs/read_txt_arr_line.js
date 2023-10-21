"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read_txt_arrline = void 0;
var fs = require("fs");
// A carriage return ( \r ) makes the cursor jump to the first column (begin of the line) while the newline ( \n ) jumps to the next line and might also to the beginning of that line.
var read_txt_arrline = function (path) {
    if (path === void 0) { path = "./names/names1.txt"; }
    //
    var result = [];
    try {
        var data = fs.readFileSync(path, "utf-8");
        return data.split("\r\n");
    }
    catch (_) {
        // console.log("error in reading file");
        throw new Error("FAILED IN READING TXT FILE @" + path);
    }
    // return result;
};
exports.read_txt_arrline = read_txt_arrline;
// console.log(read_txt_arrline());
// All 3 of them represent the end of a line. But...
// \r (Carriage Return) → moves the cursor to the beginning of the line without advancing to the next line
// \n (Line Feed) → moves the cursor down to the next line without returning to the beginning of the line — In a *nix environment \n moves to the beginning of the line.
// \r\n (End Of Line) → a combination of \r and \n
