import * as http from "http";
import * as fs from "fs";

const PORT = 3000;

const server = http.createServer(async (request, response) => {
  const { url, method, headers } = request;
  const { host } = headers;
  if (method === "GET") {
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      const html = fs.readFileSync("intro.html", "utf8");
      return response.end(html);
    }
  }
});
server.listen(PORT, () => {
  console.log("SERVER IS ON PORT ", PORT);
});
