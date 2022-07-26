console.warn("WOOOOOOOIII!");
// for ... of :: NOT SUPPORTED ON INTERNET EXPLORER
const names = ["Arif", "Ikhwan", "Hendra"];
names[names.length] = "Dan";
names.unshift("Kita");
for (let sub of names) {
    console.log(sub);
}
const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let num of numbers){
    console.log(num*num);
}

// iterating over an oobejcts
const testScores = {
    arif: 90,
    ikhwan: 100,
    hendra: 76
}
// for .. in its just gonna give you a key of the object
for (let person in testScores) {
    console.log(`${person} scored : ${testScores[person]}`);
}

// Object.values(objects) returning the array of values
// Object.keys(objects) returning the array of keys
let temp = 0;
for (let scores of Object.values(testScores)) {
    temp += scores;
}
console.warn(`AVG: ${temp / Object.values(testScores).length}`);

