const re = /ab*c/;
console.log("ok im trying abdsadasc test abssssc".match(re));
// const path = encodeURIComponent("D:SKRIPSI!!!\twoLevel\twoLevelRegion.csv");
const path = String.raw`D:SKRIPSI!!!\twoLevel\twoLevelRegion.csv`;
console.log(path);
const pathArr = path.split("\\");
console.log(pathArr);
// console.log("\\");
// for (let letter of path) console.log(letter);
// https://stackoverflow.com/questions/60537578/javascript-get-file-name-and-type-from-path-as-string
const reg2 = /\((\d+)\)/g; // (2000) or (1)
let folder_regex = new RegExp(
  "pes(2019)".replace(/\(/g, "\\(").replace(/\)/g, "\\)")
); // /pes\(2019\)/
