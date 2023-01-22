// https://medium.com/swlh/how-to-build-a-javascript-web-server-from-scratch-using-only-node-js-a4e21a9abc88
// An HTTP header is essentially a set of key/value
// pairs that provides information about a “request”
// or a “response”, depending if it’s on the “client”
// side or the “server” side.
// https://sebhastian.com/node-js-redirect/
import * as http from "http";
import * as url_module from "url";
import * as fs from "fs";
// import * as formidable from "formidable";
import * as formidable from "formidable";
import * as path from "path";
// import IncomingForm from "formidable/Formidable";

// SERVER VARS
const PORT: number = 3000;

const server = http.createServer(async (request, response) => {
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

  // GET :::::: PARTs
  if (method === "GET") {
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      return response.end("ROOT /");
    }
    if (url === "/home") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const html: String = fs.readFileSync("intro.html", "utf8");
      // console.log(html);
      return response.end(html);
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
      const html: String = fs.readFileSync("upload.html", "utf8");
      return response.end(html);
    }
    // redirect
    if (url === "/google") {
      // 302 redirect
      response.writeHead(302, {
        location: "https://www.google.com/",
      });
      return response.end();
    }
  }
  // POST ::::: PARTs
  if (method === "POST") {
    //
    if (url === "/upload") {
      const temp_dir_path: string = path.join(__dirname, "temp_upload_files");
      const form = formidable.formidable({
        uploadDir: temp_dir_path,
      });

      form.parse(request, (err, fields, files) => {
        if (err) {
          response.writeHead(err.httpCode || 400, {
            "Content-Type": "text/plain",
          });
          response.end(String(err));
          return;
        }
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ fields, files }, null, 2));
      });

      return;

      /// below old version of formidable
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
  return response.end(
    `DEFAULT URL\nHELLO ...\nMethod: ${method}\nurl ${url}\nhost: ${host}\nname query: ${
      url_parsed?.query.name ? url_parsed?.query.name : "no query"
    }`
  );
});
server.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
});
