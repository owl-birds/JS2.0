// importing Animal class from animal.js file
import Animal from "./animal";

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
export default Dog;