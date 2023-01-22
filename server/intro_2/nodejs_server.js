"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// https://medium.com/swlh/how-to-build-a-javascript-web-server-from-scratch-using-only-node-js-a4e21a9abc88
// An HTTP header is essentially a set of key/value
// pairs that provides information about a “request”
// or a “response”, depending if it’s on the “client”
// side or the “server” side.
// https://sebhastian.com/node-js-redirect/
var http = require("http");
var url_module = require("url");
var fs = require("fs");
// import * as formidable from "formidable";
var formidable = require("formidable");
var path = require("path");
// import IncomingForm from "formidable/Formidable";
// SERVER VARS
var PORT = 3000;
var server = http.createServer(function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var url, method, headers, host, url_parsed, html, html, temp_dir_path, form;
    return __generator(this, function (_a) {
        url = request.url, method = request.method, headers = request.headers;
        host = headers.host;
        if (url !== undefined) {
            url_parsed = url_module.parse(url, true);
        }
        // let query;
        // if (url_parsed) {
        //   query = url_parsed.query;
        // }
        // const { name } = url_parsed?.query!;
        // console.log(url_parsed?.query.name);
        // console.log(url_parsed);
        // console.log(query);
        // console.log(url);
        // console.log(request);
        // response.setHeader("Content-Type", "text/plain");
        // GET :::::: PARTs
        if (method === "GET") {
            if (url === "/") {
                response.writeHead(200, { "Content-Type": "text/plain" });
                return [2 /*return*/, response.end("ROOT /")];
            }
            if (url === "/home") {
                response.writeHead(200, { "Content-Type": "text/html" });
                html = fs.readFileSync("intro.html", "utf8");
                // console.log(html);
                return [2 /*return*/, response.end(html)];
                //
                // fs.readFile("intro.html", (error, data) => {
                //   // response.writeHead(200, { "Content-Type": "text/html" });
                //   // response.write(data);
                //   // return response.end();
                //   console.log(data);
                // });
            }
            if (url === "/upload") {
                response.writeHead(200, { "Content-Type": "text/html" });
                html = fs.readFileSync("upload.html", "utf8");
                return [2 /*return*/, response.end(html)];
            }
            // redirect
            if (url === "/google") {
                // 302 redirect
                response.writeHead(302, {
                    location: "https://www.google.com/"
                });
                return [2 /*return*/, response.end()];
            }
        }
        // POST ::::: PARTs
        if (method === "POST") {
            //
            if (url === "/upload") {
                temp_dir_path = path.join(__dirname, "temp_upload_files");
                form = formidable.formidable({
                    uploadDir: temp_dir_path
                });
                form.parse(request, function (err, fields, files) {
                    if (err) {
                        response.writeHead(err.httpCode || 400, {
                            "Content-Type": "text/plain"
                        });
                        response.end(String(err));
                        return;
                    }
                    response.writeHead(200, { "Content-Type": "application/json" });
                    response.end(JSON.stringify({ fields: fields, files: files }, null, 2));
                });
                return [2 /*return*/];
                // const form = new formidable.IncomingForm();
                // const form = formidable({});
                // const temp_dir_path: string = path.join(__dirname, "temp_upload_files");
                // const old_path = form.;
                // console.log(temp_dir_path);
                // console.log(form.);
                //
                // form.parse(request, function (err, fields, files) {
                //   // var oldpath = files.filetoupload.path;
                //   // var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
                //   fs.rename(oldpath, temp_dir_path, function (err) {
                //     if (err) throw err;
                //     response.write("File uploaded and moved!");
                //     response.end();
                //   });
                // });
                // form.parse(request, (err, fields, files) => {
                //   response.write("File Uploaded");
                //   response.end();
                // if (err) {
                //   // example to check for a very specific error
                //   // if (err.code === formidableErrors.maxFieldsExceeded) {
                //   // }
                //   response.writeHead(err.httpCode || 400, {
                //     "Content-Type": "text/plain",
                //   });
                //   response.end(String(err));
                //   return;
                // }
                // response.writeHead(200, { "Content-Type": "application/json" });
                // return response.end(JSON.stringify({ fields, files }, null, 2));
                // });
            }
        }
        // The res.writeHead() method allows you to
        // write the HTTP response header, while
        // res.write() will put content in the response
        // body.The res.end() method tells your server
        // to end the response process.
        // DEFAULT RESPONSE ::: will catch undefined url
        // console.log(__dirname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        return [2 /*return*/, response.end("DEFAULT URL\nHELLO ...\nMethod: ".concat(method, "\nurl ").concat(url, "\nhost: ").concat(host, "\nname query: ").concat((url_parsed === null || url_parsed === void 0 ? void 0 : url_parsed.query.name) ? url_parsed === null || url_parsed === void 0 ? void 0 : url_parsed.query.name : "no query"))];
    });
}); });
server.listen(PORT, function () {
    console.log("SERVER IS RUNNING ON PORT", PORT);
});
