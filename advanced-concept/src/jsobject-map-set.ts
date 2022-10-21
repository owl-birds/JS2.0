// https://www.youtube.com/watch?v=hRSwSAr-gok&t=247s
const tempObj1: { [key: string]: { age: number; name: string } } = {};
tempObj1["001"] = { name: "John", age: 90 }; // this is not what obj is made? idk
console.log(tempObj1);

// object in js is not like dictionary in python
// map is better
const tempMap1 = new Map<string, { age: number; name: string }>();
tempMap1.set("001", { name: "John", age: 90 });
tempMap1.set("002", { name: "Mark", age: 30 });
// console.log(tempMap1.get("001"));

// console.log(tempMap1);
[...tempMap1].map((user) => {
  console.log(user[0], user[1]);
});

tempMap1.delete("001");
console.log(tempMap1.has("001"));
console.log(tempMap1);

// SET
const userId: number[] = [1, 4, 2, 1, 34]; // is to slow if we want unique value
// casue if we need to go thorugh all the array to do something
// ex: removeing the same value, and so on and  on

// then we come to SET
const userIdSet: Set<number> = new Set(userId); // Set(4) { 1, 4, 2, 34 }
// crearte a unique value
console.log(userIdSet);
console.log("is 34 is in the user list = " + `${userIdSet.has(34)}`);
userIdSet.delete(34);
console.log(userIdSet); // Set(3) { 1, 4, 2 }
