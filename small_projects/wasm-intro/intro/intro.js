import init, { greet } from "./pkg-1/hello_wasm.js";
init().then(() => {
  greet("RUST WEBASSEMBLY, JS PART");
});
console.log("WEBASSEMBLY RUST");
// # If Python version returned above is 3.X
// # On Windows, try "python -m http.server" or "py -3 -m http.server"
// python3 -m http.server
// # If Python version returned above is 2.X
// python -m SimpleHTTPServer
