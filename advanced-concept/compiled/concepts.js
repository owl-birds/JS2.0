"use strict";
const tempObj1 = {};
tempObj1["001"] = { name: "John", age: 90 };
console.log(tempObj1);
// object in js is not like dictionary in python
// map is better
const tempMap1 = new Map();
tempMap1.set("001", { name: "John", age: 90 });
console.log(tempMap1.get("001"));
