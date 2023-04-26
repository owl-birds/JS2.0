import init, { greet } from "./pkg-1/hello_wasm.js";
// import init, { greet } from "hello-wasm";
init().then(() => {
  greet("RUST WEBASSEMBLY, JS PART");
});
console.log("WEBASSEMBLY RUST");
// # If Python version returned above is 3.X
// # On Windows, try "python -m http.server" or "py -3 -m http.server"
// python3 -m http.server
// # If Python version returned above is 2.X
// python -m SimpleHTTPServer

// installing locale module in npm
// npm install ./path_to_the_module
