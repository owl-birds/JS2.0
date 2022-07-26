console.warn(`CALLBACKS AND ARRAY METHODS`);
nums = [1, 2, 3, 4, 5, 321, 312, 432];
//forEACH
// foreach is not usually use this day because of for ..of
function print(ele) {
    console.log(ele);
}
//nums.forEach(print);
nums.forEach(function (ele) {
    if (ele % 2 == 0) {
        console.log(ele);
    }
});
movies = [
    {
        title: "batman1",
        score: 60,
        year: 2001
    },
    {
        title: "batman2",
        score: 80,
        year: 2004
    },
    {
        title: "batman3",
        score: 30,
        year: 2005
    },
    {
        title: "batman4",
        score: 95,
        year: 2007
    },
    {
        title: "batman5",
        score: 70,
        year: 2010
    }
];
console.log("Movies that has score above and 70");
movies.forEach(function (movie) {
    if (movie.score >= 70) {
        console.log(`title : ${movie.title}`);
        console.log(`score : ${movie.score}`);
    }
});
// MAP :: Creating a new array based on the input array and
//        conditions that you placed on the function
const twoTimesNums = nums.map(function (num) {
    return num * 2;
});
const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});

// the function bellow will trim the " " on the name in that array
const cleanNames = function (namesArr) {
    const newArr = namesArr.map(function (name) {
        return name.trim();
    })
    return newArr;
}

// ARROW FUNCTIONS making writing a function more simple
const sum = (x, y) => {
    return x + y;
}
const printHello = () => {
    console.log("HELLO!");
}
// using  () parenthesis instead of {} curly bracket 
// if your code just returned a value (just one statement)
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);
const multiply = (a, b) => a * b;
// regular way :: const multiply = (a, b) => (a * b);
const isEven = (num) => num % 2 == 0;

const titles2 = movies.map((movie) => {
    return `${movie.title} - ${movie.score}`;
});
const titles3 = movies.map((movie) =>
    `3.0 ${movie.title} - ${movie.score / 10}`);

// setTimeout and setInterval
console.log("HELLO ARE YOU THERE????!!!!")
// setTimeout will run after a certain time that you 
// decided (in miliseconds)
setTimeout(() => {
    console.warn("HEYYY!!!!")
}, 3000);
// set interval will always run that function as long
// you aren going to stop it
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
setTimeout(() => {
    clearInterval(id);
}, 6000);
// clearInterval(var Name With SetInterval INIT); TO STOP 
// THE setInterval THING

// FILTER METHOD
// if we just using map method it will be returning 
// boolean values
// filter method will be returning the value from the array
nums2 = [2, 43, 12, 54, 32, 5, 97, 17, 45, 24];
const lessThan20 = nums2.filter((n) => {
    return n < 20;
});

const goodMovies = movies.filter((movie) => {
    return movie.score >= 70;
});
const goodTitles = goodMovies.map((movie) => {
    return movie.title;
})
// COMBINING MAP AND FILTER
const goodTitles2 = movies.
    filter((movie) => movie.score >= 70).
    map((movie) => movie.title);

const goodMovies2 = movies.filter(function (movie) {
    return movie.score >= 70;
});

const badMovies = movies.filter((movie) => movie.score < 70);
const badMovies2 = movies.filter(function (movie) {
    return movie.score < 70;
});
const recentMovies = movies.filter((movie) => movie.year > 2005);

const validUserNames = function (userNames) {
    const newUN = userNames.filter((name) => {
        return name.length <= 10 && name.length > 0;
    });
    return newUN;
}

// SOME AND EVERY RETURN BOOLEAN (BOOLEAN METHODS)
// not like filter and map whose return an array

// every :: schecking an array if there is one that arent
// statisfied the condition than it eill return false
// but if everything in that array satisfied with that 
// condition than it will return true
const examScore = [90, 87, 98, 56, 78, 65, 88];
examScore.every((score) => { return score >= 40; }); // TREU
examScore.every((score) => score >= 40); // TRUE
examScore.every((score) => score >= 70); // FALSE
const allEvens = function (nums) {
    const isAllEvens = nums.every((num) => { return num % 2 == 0; });
    return isAllEvens;
}

// every just need one that arent satiisfied with the condition
// to return false

// is there a movie that released below year 2000
const isBelow2000 = movies.some((movie) => movie.year < 2000);
const isYear2010MovieExist = movies.some((movie) => {
    return movie.year == 2010;
})
// some just need one condition tobe true so it can return
// TRUE

//REDUCE : executes a reducer functionn on eaxh elemtn of 
// the array, resulting in a single value
const price = [9.8, 7.67, 87.8, 6.5, 45.0, 34.43];
let total1 = price.reduce((total, currentPrice) => {
    return total + currentPrice;
})
let total2 = 0
for (let i of price) {
    total2 += i;
}
const maxPrice = price.reduce((maxTemp, currentPrice) => {
    if (currentPrice > maxTemp) {
        return currentPrice;
    }
    return maxTemp;
})
const minPrice = price.reduce((minTemp, currentPrice) => {
    if (currentPrice < minTemp) {
        return currentPrice;
    }
    return minTemp;
})
const highestRatedMovie = movies.reduce((highestTemp, movie) => {
    if (movie.score > highestTemp.score) {
        return movie;
    }
    return highestTemp;
})

// we can add an initial value into reduce method
// EX
const totalPrice = price.reduce((total, currPrice) => { return total + currPrice }, 200);
// initial value == 200 so 200 + totalPrice

const person = {
    firstName: "Arif",
    lastName: "Ikhwan",
    fullname() {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullname());
        });
    }
}
// DESTRUCTURING PARAMS
const titlesDP = movies.map(({ title, score, year }) => {
    return `${title} - ${score} - ${year}`;
})


// FIND
const numbers = [1, 3, 5, 7, 9];

// Temukan kelipatan 3 dari array numbers dengan menggunakan method find
// dan tetapkan hasilnya ke constant foundNumber 
const foundNumber = numbers.find((number) => {
    return number % 3 === 0; //condition
});



// Print foundNumber
console.log(foundNumber); // returning element in array that
// fit the condition that you wrote


const characters = [
    { id: 1, name: "Ninja Ken", age: 6 },
    { id: 2, name: "Baby Ben", age: 2 },
    { id: 3, name: "Guru Domba", age: 100 },
    { id: 4, name: "Birdie", age: 21 }
];

// Temukan object dengan id = 3 dari constant characters,
// dan tetapkan nilainya ke constant foundCharacter
const foundCharacter = characters.find((character) => {
    return character.id === 3;
});

// Print foundCharacter
console.log(foundCharacter);
