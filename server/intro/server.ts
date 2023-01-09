import * as http from "http";
// const server = http.createServer((request, response) => {
//   //
//   // The function that's passed in to createServer
//   // is called once for every HTTP request that's
//   // made against that server, so it's called the
//   // request handler.In fact, the Server object
//   // returned by createServer is an EventEmitter,
//   // and what we have here is just shorthand for
//   // creating a server object and then adding the
//   // listener later.
// });

// const server: http.Server = http.createServer();
// server.on("request", (request, response) => {
//   //   When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, request and response. We'll get to those shortly.
//   const { method, url, headers } = request;
//   const userAgent = headers["user-agent"];
//   let body: any = [];
//   request
//     .on("data", (chunk) => {
//       body.push(chunk);
//     })
//     .on("end", () => {
//       body = Buffer.concat(body).toString();
//       // at this point, `body` has the entire request body stored in it as a string
//     });
//   request.on("error", (err) => {
//     // This prints the error message and stack trace to `stderr`.
//     console.error(err.stack);
//   });
// });
// The method here will always be a normal HTTP method/verb. The url is the full URL without the server, protocol or port. For a typical URL, this means everything after and including the third forward slash.
// It's important to note here that all headers are represented in lower-case only, regardless of how the client actually sent them. This simplifies the task of parsing headers for whatever purpose.
// If some headers are repeated, then their values are overwritten or joined together as comma-separated strings, depending on the header. In some cases, this can be problematic, so rawHeaders is also available.

const port: number = 3000;

http
  .createServer((request, response) => {
    // REQUEST
    const { method, headers, url } = request;
    const body: any[] = [];
    // let body: any = [];
    let body_string: string = "";
    request
      .on("error", (err) => {
        // do somthing, send response or log the error
        console.log(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body_string = Buffer.concat(body).toString();
        // body = Buffer.concat(body).toString();
        // At this point, we have the headers, method, url and body, and can now
        // do whatever we need to in order to respond to this request.
      });

    // RESPONSE
    response.on("error", (err) => {
      console.error(err);
    });
    const status_code: number = 200;
    response.writeHead(status_code, { "Content-Type": "application/json" });
    // Note: the 1 lines above could be replaced with this next one:
    // response.setHeader("Content-Type", "application/json");
    // response.statusCode = 200;

    const responseBody = { headers, method, url, body_string };
    // const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  })
  .listen(port, () => {
    console.log("Server listening on port", port);
  }); // Activates this server, listening on port 3000.
// If we run this example, we'll be able to receive requests, but not respond to them. In fact, if you hit this example in a web browser, your request would time out, as nothing is being sent back to the client

// http
//   .createServer((request, response) => {
//     request.on("error", (err) => {
//       console.error(err);
//       response.statusCode = 400;
//       response.end();
//     });
//     response.on("error", (err) => {
//       console.error(err);
//     });
//     if (request.method === "GET" && request.url === "/echo") {
//       request.pipe(response);
//     } else {
//       response.statusCode = 404;
//       response.end();
//     }
//   })
//   .listen(port, () => {
//     console.log("server2 is listening to", port);
//   });

// Response
// response.statusCode = 404; // Tell the client that the resource wasn't found.
// response.setHeader('Content-Type', 'application/json');
// response.setHeader('X-Powered-By', 'bacon');
// When setting the headers on a response, the case is insensitive on their names. If you set a header repeatedly, the last value you set is the value that gets sent.

// The methods of setting the headers and status code that we've already discussed assume that you're using "implicit headers". This means you're counting on node to send the headers for you at the correct time before you start sending body data.

// If you want, you can explicitly write the headers to the response stream. To do this, there's a method called writeHead, which writes the status code and the headers to the stream.
// response.writeHead(200, {
//   'Content-Type': 'application/json',
//   'X-Powered-By': 'bacon'
// });
// response.write('<html>');
// response.write('<body>');
// response.write('<h1>Hello, World!</h1>');
// response.write('</body>');
// response.write('</html>');
// response.end();
// SIMPLIFY
// response.end('<html><body><h1>Hello, World!</h1></body></html>');
// It's important to set the status and headers before you start writing chunks of data to the body. This makes sense, since headers come before the body in HTTP responses.
