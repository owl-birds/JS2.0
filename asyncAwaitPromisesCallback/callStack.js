// the feature/mechanism that js uses behind the scene

// the mechanism the js interpreteer uses to keep track
// of its place in a script that calls multiple 
// functions

// stack : last in first out

// so it works like a stack

const multiply = (x, y) => x * y;
const square = x => multiply(x, x);
const isRightTriangle = (a, b, c) => {
    square(a) + square(b) === square(c);
};
console.log("BEFORE!!!");
isRightTriangle(3, 4, 5);
console.log("DONE!!!");

// use debugger in browser
// chrome ctrl + shift + i
// click sources