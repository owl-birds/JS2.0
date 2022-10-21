const arr = [1, 2, 3, 4];
console.log(arr);
arr.sing = () => {
  console.log("SING!!!");
};
console.dir(arr);
arr.sing();
console.log(String.prototype);

// good read
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

String.prototype.yell = function () {
  console.log(`${this.toUpperCase()}!!!!!!!`);
};
"owkwkwowkwowk".yell();
console.log(String.prototype);
console.log("OK".__proto__);

// converting rgb into hex color
const hex = (r, g, b) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
const rgb = (r, g, b) => {
  return `rgb(${r},${g},${b})`;
};
console.log(hex(255, 100, 25));
console.log(rgb(255, 100, 25));
console.log(5 << 1);
// << bitwise left shift
// This is a zero fill left shift.
// One or more zero bits are pushed
// in from the right, and the
// leftmost bits fall off:
// https://www.w3schools.com/js/js_bitwise.asp

// factory functions
const makeColor = function (r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.test = "have to  be the same keyname in destructuring in object";
  color.rgb = function () {
    // console.log(this);
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    const { r, g, b, test } = this;
    // console.log(test);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  return color;
};
const firstColor = makeColor(255, 100, 25);
console.log(firstColor);
console.log(firstColor.hex());
console.log(firstColor.rgb());

const black = makeColor(0, 0, 0);

// better approach than factory functions. to create oop
// why though?
console.log(firstColor.hex === black.hex);
// so method in the object will make its own copy
// everytime you decclare it
console.log("asfdsfsdf".slice === "eeq".slice);

// its method not define on every single string
// but it define on prototype

// it referencing one function

// ###################################
// constructor function

// The new keyword does the following things:

// Creates a blank, plain JavaScript object.
// Adds a property to the new object (__proto__)
// that links to the constructor function's
// prototype object

// Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

// Binds the newly created object instance as
// the this context(i.e.all references to this in
// the constructor function now refer to the object
// created in the first step).

// Returns this if the function doesn't return an
// object.

const Color = function (r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  // console.log(this);
  this.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  // we can do it like this but there is nothing
  // difference but it still not in the
  // [[Prototype]] ???
};

// so we decalre it ourside the func
Color.prototype.rgb2 = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};
Color.prototype.hex = function () {
  const { r, g, b, test } = this;
  // console.log(test);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
// sooo with new keyword it function like factory func

const white = new Color(255, 255, 255);
const black2 = new Color(0, 0, 0);
console.log(white);

// the difference between factory and constructor
console.log(white.hex === black2.hex);
console.log(firstColor.hex === black.hex);

class Color2 {
  constructor(r, g, b, name) {
    console.log("color class created");
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.useless();
  }
  // constructror always run immidiately after
  // it being created/initiated
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    // const { r, g, b } = this;
    return `rgb(${this.innerRGB()})`;
  }
  hex() {
    const { r, g, b } = this;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
  useless() {
    this.useless = "OOOOIIII!!!!";
  }
}

const testColor = new Color2(99, 99, 99, "test");
console.log(testColor);

function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  // cause if we define the prototype, the constructor
  // will be overwrited so we need to define it again
  legs: 4,
  eat() {
    return "NOM NOM NOM";
  },
};

// checking the
const dog1 = new Dog("dog1");
console.log(dog1 instanceof Dog); //true
console.log(dog1.constructor === Dog);
// will return false, if we dont write the constructor
// again
console.log(dog1.constructor === Object);
