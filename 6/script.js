console.warn("HELLO!");

// while (true) {
//     maxNum = parseInt(prompt("Enter max number:"));
//     if (maxNum === NaN) {
        
//     }
// }

// !NaN === true

let maxNum = parseInt(prompt("Enter max Number : "));
while (true) {  
    if (!maxNum) {
        maxNum = parseInt(prompt("INVALID, enter max number again : "));
    } else {
        break;
    }
}
let randNum = Math.floor(Math.random() * maxNum) + 1;
//console.log(randNum);
let count = 0;

let guessNum = prompt("(type 'quit' to quit the game)Enter your guessed:");
if (parseInt(guessNum) === randNum) {
    console.log(`You re Correct, the Answer is ${guessNum}`);
    console.log(`Tries : ${1}`);
} else if (guessNum === "quit") {
    console.log(`The answer is ${randNum}`);
    console.log(`Tries : ${count}`);
} else {
    while (true) {
        count += 1;
        if (parseInt(guessNum) === randNum) {
            console.log(`You re Correct, the Answer is ${guessNum}`);
            console.log(`Tries : ${count}`);
            break;
        } else if (guessNum === "quit") {
            console.log(`The answer is ${randNum}`);
            console.log(`Tries : ${count}`);
            break;
        } else if (parseInt(guessNum) > randNum) {
            guessNum = prompt("('quit' to exit)TOO HIGH Enter again:");
        } else if (parseInt(guessNum) < randNum) {
            guessNum = prompt("('quit' to exit)TOO LOW Enter again:");
        } else {
            guessNum = prompt("('quit' to exit)INVALID INPUT ENTER AGAIN : ")
        }
    }
}

