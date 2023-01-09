"use strict";
exports.__esModule = true;
// https://medium.com/swlh/how-to-build-a-javascript-web-server-from-scratch-using-only-node-js-a4e21a9abc88
// An HTTP header is essentially a set of key/value
// pairs that provides information about a “request”
// or a “response”, depending if it’s on the “client”
// side or the “server” side.
var http = require("http");
var url_module = require("url");
// SERVER VARS
var PORT = 3000;
http
    .createServer(function (request, response) {
    // REQUEST
    var url = request.url, method = request.method, headers = request.headers;
    // headers
    var host = headers.host;
    //
    var url_parsed;
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
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("\nHELLO ...\nMethod: ".concat(method, "\nurl ").concat(url, "\nhost: ").concat(host, "\nname query: ").concat((url_parsed === null || url_parsed === void 0 ? void 0 : url_parsed.query.name) ? url_parsed === null || url_parsed === void 0 ? void 0 : url_parsed.query.name : "no query"));
})
    .listen(PORT, function () {
    console.log("SERVER IS RUNNING ON PORT", PORT);
});
