// https://medium.com/swlh/how-to-build-a-javascript-web-server-from-scratch-using-only-node-js-a4e21a9abc88
// An HTTP header is essentially a set of key/value
// pairs that provides information about a “request”
// or a “response”, depending if it’s on the “client”
// side or the “server” side.
import * as http from "http";
import * as url_module from "url";
import * as fs from "fs";

// SERVER VARS
const PORT: number = 3000;

http
  .createServer(async (request, response) => {
    // REQUEST
    const { url, method, headers } = request;
    // headers
    const { host } = headers;
    //
    let url_parsed;
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
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      return response.end("ROOT /");
    }
    if (url === "/home") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const html = fs.readFileSync("intro.html", "utf8");
      return response.end(html);
      //
      // fs.readFile("intro.html", (error, data) => {
      //   // response.writeHead(200, { "Content-Type": "text/html" });
      //   // response.write(data);
      //   // return response.end();
      //   console.log(data);
      // });
    }
    response.writeHead(200, { "Content-Type": "text/plain" });
    return response.end(
      `DEFAULT URL\nHELLO ...\nMethod: ${method}\nurl ${url}\nhost: ${host}\nname query: ${
        url_parsed?.query.name ? url_parsed?.query.name : "no query"
      }`
    );
  })
  .listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT", PORT);
  });
