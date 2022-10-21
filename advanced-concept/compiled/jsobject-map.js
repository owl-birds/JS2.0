"use strict";
// https://www.youtube.com/watch?v=hRSwSAr-gok&t=247s
const tempObj1 = {};
tempObj1["001"] = { name: "John", age: 90 }; // this is not what obj is made? idk
console.log(tempObj1);
// object in js is not like dictionary in python
// map is better
const tempMap1 = new Map();
tempMap1.set("001", { name: "John", age: 90 });
tempMap1.set("002", { name: "Mark", age: 30 });
// console.log(tempMap1.get("001"));
// console.log(tempMap1);
[...tempMap1].map((user) => {
    console.log(user[0], user[1]);
});
// SET
