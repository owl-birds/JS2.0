console.log("HELLO WORLD");
console.log(2 + 3);
let age = 18;
if (age === 20) {
    console.log("You are 20 years old");
} else if (age < 20) {
    console.log(`You are less then 20 years old, your age is ${age}`);
} else {
    console.log(`You are ${age} years old`);   
}
console.log("ADDS 2 NUM");
let num1 = parseInt(prompt("num1")); 
let num2 = parseInt(prompt("num2"));
console.log(`${num1} + ${num2} = ${num1 + num2}`);

let score = num1 + num2;
if (score >= 75 && score <= 100) {
    if (score >= 75 && score <= 85) {
        console.log(`Your score is B+ ${score}`);
    } else if (score > 85 && score <= 95) {
        console.log(`Your score is A ${score}`);
    } else if (score > 95 && score <= 100) {
        console.log(`Your score is A+ ${score}`);
    }
} else {
    if (score < 0 || score > 100) {
        console.log(`INVALID`);
    } else {
        console.log(`TRY AGAIN NEXT YEAR LOSER`);
    }
}

let tf = prompt("Enter SUMTING");
if (tf) {
    console.log("TRUTHY");
} else {
    console.log("FALSY");
}