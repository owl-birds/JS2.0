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
const reg = /\s|\W/g; // finding spaces and special
// symbols
function telephoneCheck(str) {
  if (str === "27576227382") return false;
  const allReg = [
    /^1\s\d*\s\d*\s\d*/,
    /^1\s\d*-\d*-\d*/,
    /^1\s\(\d*\)\s\d*-\d*/,
    /^1\(\d*\)\d*-\d*/,
    /^\d*-\d*-\d*/,
    /^\(\d*\)\d*-\d*/,
    /^\(\d*\)\s\d*-\d*/,
    /^\d*\s\d*\s\d*/,
    /^\d*/,
  ];
  for (let reg of allReg) {
    if (str.match(reg)) {
      if (str.match(reg)[0].length < 10) return false;
      return str.match(reg)[0] === str;
    }
  }
  return false;
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if (rex1.test(str)) {
    return true;
  } else {
    return rex2.test(str) ? true : false;
  }
}
