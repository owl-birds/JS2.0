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
export default Animal;