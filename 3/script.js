// NOT ! AND && OR ||

if (!true) {
    console.log("TRUE!");
} else {

    console.log("FALSE!");
}
//arrays
let empty = [];
let colors = ["blue", "red", "green", "brown", "white", "black"];
let mixedThings = [1, 3, 4, 32, true, false, null, NaN, "WHAT", "LMAI"];
let twoDimensional = [colors, mixedThings];

// indexing in array
for (let i = 0; i < colors.length; i += 1) {
    console.log(colors[i]);
}

//pop and shift will return the data that had been removed

// pop push stack inspired
// last in first out
console.warn("adding to the last data on the array")
colors.push("yellow"); // adding new data to 
//the end of th array
console.log(colors);
//colors[colors.length] = "light green";
console.warn("POPPING the last data on the array")
colors.pop(); // remove from the end
console.log(colors);


// shit unshift queue inspired 
// first in first out
console.warn("REMOVE the first data on the array")
colors.shift(); // remove the first data of the array
console.log(colors);
console.warn("ADDING TO THE FIRST data on the array")
colors.unshift("blue");
console.log(colors);

// another usefull array method 
// concat :: merging two arrays to a new merged array
let cats = ["Angora", "Endemic", "cat3", "cat4"];
let dogs = ["dog1", "dog2", "dog3", "dog4", "dog5"];
let mergedArrayCatsFirst = cats.concat(dogs);
let mergedArrayDogsFirst = dogs.concat(cats);

// include :: is an array include a particular value
console.log(cats.includes("Angora")) // TRUE
console.log(cats.includes("Angoraaaa")) // FALSE

// indexOf :: returning the index of a value that you want to find
console.log(`cat4 index : ${cats.indexOf("cat4")}`);
// returning -1 if not found

// reverse
console.log(dogs);
dogs.reverse();
console.log(dogs);
console.warn("SLICE");
console.log(colors.slice());
console.log(colors.slice(3));
console.log(colors.slice(3, 5));
console.log(colors.slice(2, 4));
console.warn("SPLICE");

// MISSING FEB AND MEY
let months = ["Jan", "March", "April", "June"];
console.log(months);
console.warn("ADDING FEB MONTH")
// list.splice(starting index index, how many 
// will be deleted, VALUES/VALUE)
months.splice(1, 0, "Feb");
console.log(months);
months.splice(months.indexOf("April") + 1, 0, "Mey");
console.log(months);

console.log(["hi", "bye"] === ["hi", "bye"]);
console.log([1, 2] === [1, 2]);
/// FALSE WHY?
// link to an address
let nums = [1, 2, 3, 4, 5, 6];
let numsCopy = nums; //numsCopy is pointing to the address
//of nums so if numsCopy changed then
//nums will also be changed
// REMEMBER : only compound values (Object, Array)
// can be assigned by reference
// array work with reference to an address
console.log(`nums : ${nums} original`);
console.log(`numsCopy : ${numsCopy} COPY OF nums`);
console.warn("CHANGE numsCopy :: numsCopy.pop()");
numsCopy.pop();
console.log(`nums : ${nums} after`);
console.log(`numsCopy : ${numsCopy} after`);

// CONST CANT BE CHANGE EVER
// const variable is referencing to an address (array,...)
// in the case of const array, the value inside the array 
// can be altered but it cant be referencing to another 
// array or object
const names = ["Arif", "Ikhwan"];
console.log(`names : ${names} BEFORE`);
console.warn("names.push('Hendra')");
names.push("Hendra");
console.log(`names : ${names} AFTER`);

// but it cant reference to any array/object 
//names = 2; ERROR
//names = ["Arif", "Ikhwan", "Hendra"]; ERROR
