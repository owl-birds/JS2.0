const numbers = [10, 20, 30, 40, 50];
const numbersTimehundred = numbers.reduce(
  (arr, value) => [...arr, value * 100],
  [] /// destructuring
);
console.log(numbersTimehundred);
// BETTER
const numbersTimehundred2 = numbers.reduce((arr, value) => {
  arr.push(value * 100);
  return arr;
}, []); // arr=[] ;;; initial value
console.log(numbersTimehundred2);

// /REFERENCES  its all about references
const obj = { a: 1 };
const obj2 = { a: 1 };
// console.log(obj === obj2); // false
const depCompare = (oldDep, newDep) => {
  return (
    oldDep.length === newDep.length &&
    oldDep.every((dep, index) => dep === newDep[index])
  );
};
// console.log(obj === obj); // true
// console.log(depCompare([obj], [obj])); // true
console.log([1] === [1]); // false
console.log(depCompare([1], [1])); // true
console.log(depCompare([obj], [obj2])); // false

// primitive value : int, float, boolean can be use
//

// but in boject its all about references
