class Student {
    constructor(name, school) {
        console.log("constructor created, student");
        this.age = "STUDENT CLASS";
        this.name = name;
        this.school = school;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
    greet2() {
        this.greet();
    }
}
// INHERITENCE
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    info() {
        console.log("THIS A DOG CLASS, that inherite from Animal class");
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`breed: ${this.breed}`);
    }
    get_human_age() {
        return this.age * 7;
    }
}
const student1 = new Student("STUDENT1", "SCHOOL1");
console.log(student1.age);
console.log(student1.name);
console.log(`SCHOOL : ${student1.school}`);
student1.greet();

const dog = new Dog("dog1", 90, "BREEDD3231");
dog.info();

// import constantName from "packageName"