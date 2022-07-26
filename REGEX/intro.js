// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
let re = /ab+c/;
// Regular expression literals provide compilation of
// the regular expression when the script is loaded.
// If the regular expression remains constant, using
// this can improve performance.

let re2 = new RegExp("ab+c");
//  regular expression pattern will be changing,
// or you don't know the pattern and are getting it
//  from another source, such as user input.

let abc = /abc/;
// it will match
// Hi, do you know your abc's?
// The latest airplane designs evolved from slabcraft.

// not this (below)
// Grab crab
// cause the regex will be like /ab c/

let specialChara1 = /ab*c/;
// "cbbabbbbcdebc",
// this pattern will match the substring "abbbbc".
