// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class Animal {
  // Private Instance fields
  // u have to decalre the private instance fields
  // FIRST
  #sex;
  #name;
  static #isAnimal; // private static var
  static isAnimal2;
  constructor(sex, name) {
    this.#sex = sex;
    this.#name = name;
    this.isAnimal2 = true;
    Animal.#isAnimal = true;
  }
  description() {
    console.log(`sex : ${this.#sex}\nname : ${this.#name}`);
  }
  #privateMethod() {
    return "PRIVATE METHOD";
  }
  getPrivateMethod() {
    return this.#privateMethod();
  }

  //
  setSex(newSex) {
    this.#sex = newSex;
  }
  setName(newName) {
    this.#name = newName;
  }
  getSex() {
    return this.#sex;
  }
  getName() {
    return this.#name;
  }
  getIsAnimal() {
    return Animal.#isAnimal;
  }
}

const animal1 = new Animal("Female", "Tiger");
// console.log(animal1);
// console.log(animal1.name);
// console.log(animal1.name);
// animal1.setName("CAT");
// animal1.description();
// console.log(animal1.#sex); // ERROR

// console.log(`sex : ${animal1.getSex()}\nname : ${animal1.getName()}`);
// console.log(animal1.getPrivateMethod());
console.log(animal1.isAnimal2);
console.log(animal1.getIsAnimal());

// TOP LEVEL AWAIT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// fetch request
// const colors = fetch('../data/colors.json')
//   .then(response => response.json());

// export default await colors;

// await setInterval(() => {
//   console.log("TOP LEVEL AWAIT");
// }, 2000);
// const num1 = await (344 * 45454);
// console.log(num1);
// console.log("OK IM WAITING");

const arr = [0, 1, 2, 3, 4, 5];

console.log(arr.at(-1)); // we can access the array
// backward
console.log(arr[-1]);

console.log(arr[arr.length - 1]);

// Object.hasOwn
const obj = {
  a: 1,
  b: 2,
  //   toString: "STRING",
  toString() {
    return "STRING";
  },
};
console.log(Object.hasOwn(obj, "toString"));

// RegExp Match Indices

const fruits = "Fruits: Apple, Mango, Mangosteen, Orange";
const regex = /(Mango)/g;
// const regex = /(Mango)/gd;

const matches = [...fruits.matchAll(regex)]; // two matches
console.log(matches);
