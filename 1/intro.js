const word = "skateboard"; //Don't change this line!
let facialHair = word.slice(word.indexOf("board"), word.indexOf("board") + "board".length);
facialHair = facialHair.replace("o", "e");


// NEW IN JAVASCRIPT STRING template literals `...${}...`
`You bought ${3 + 4} colas, the price is ${2.25 * 7}`
//null :"Intentional absence of any value" must be assigned"
//Undefined :Variables that do not have an assigned value 
//           are undefined
Math.PI;
// Math.round(NUMBER);
// Math.ceil(DECIMAL);
Math.random();
// generating random integers in javascript
// between 1 - 10
Math.floor(Math.random() * 10 + 1);
// between 1 - 5
Math.floor(Math.random() * 5 + 1);


const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;

///
// prompt();
// alert();
console.log([1, 2, 3, 4]);
const todayDate = new Date();
console.log(todayDate);