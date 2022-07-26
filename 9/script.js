console.warn("NANI?");
function helloWorld(yourName) {
    console.warn(`Hello WORLD!, ${yourName}`);
}
function evenOdd(num) {
    let temp = Math.abs(parseInt(num));
    //console.log(temp);
    if (temp === 0) {
        console.log("ZERO")
    } else if (temp % 2 === 0) {
        console.log("EVEN NUMBER");
    } else {
        console.log("ODD NUBER");
    }
}
function mean(data) {
    let temp = 0;
    for (let num of data) {
        temp += num;
    }
    return temp / data.length;
}
function reverseString(string) {
    let temp = "";
    for (let i = string.length - 1; i >= 0; i -= 1) {
        temp += string[i];
    }
    return temp;
}
function palindromeMaker(string) {
    return string + reverseString(string);
}
function randomNumMaker(maxRange) {
    // maxRange is the limit it cant be the same with masxRannge
    return Math.floor(Math.random() * maxRange);
}
// recursive :: basically calling the function itself
// EX:
function add2Num(num1, num2) {
    return num1 + num2;
}
// EX : add2Num(add2Num(2,2), 3); ::: RESULT : 7
function multiply2Num(num1, num2) {
    return num1 * num2;
}
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}
function lastElement(nums) {
    if (nums.length === 0) {
        return null;
    } else {
        return nums[nums.length - 1];
    }
}
function capitalize(string) {
    let temp = string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
    return temp;
}
function sum(nums) {
    let temp = 0;
    for (let num of nums) {
        temp += num;
    }
    return temp;
}
function returnDay(num) {
    if (num == 1) {
        return "Monday";
    } else if (num == 2) {
        return "Tuesday";
    } else if (num == 3) {
        return "Wednesday";
    } else if (num == 4) {
        return "Thursday";
    } else if (num == 5) {
        return "Friday";
    } else if (num == 6) {
        return "Saturday";
    } else if (num == 7) {
        return "Sunday";
    } else {
        return null;
    }
}
// const and let have blockscope {} = Block Scope

// lexical scope a let variable can be accessed as long as 
// it 
function bankRobbery() {
    const heroes = ["Superman", "Batman", "Wonder Woman"];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US ${hero}`)
            }
        }
        inner();
    }
    cryForHelp();
}

//Functions Expressions
const square = function (x) {
    return x * x;
}

// Higher order functions
// the arguments expected to be another function
function call2(func) {
    func();
    func();
}
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
// returning function
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log(`rand > 0.5 ::: ${rand}`);
        }
    } else {
        return function () {
            let temp = rand;
            console.log(`rand < 0.5 ::: ${temp}`);
        }
    }
}
//RUN
//makeMysteryFunc()()
function makeBetweenFunc(min, max) {
    return function (num) {
        if (num > min && num < max) {
            console.log(`${num} is between ${min},${max}`);
        } else {
            console.log("FALSE");
        }
    }
}
// RUN
// makeBetweenFunc(1,10)(8)

// creating methods using obejcts
// every methods is a function but not every function is a
// method

// so object too can hold functions
const math = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    add: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    },
    square: function (x) {
        return x * x;
    },
    PI: Math.PI,
    power: function (num, powerOf) {
        return num ** powerOf;
    },
    // new way of declaring function on an object
    sqrt(x) {
        return Math.sqrt(x);
    },
    abs(x) {
        if (x > 0)
            return x;
        else if (x < 0)
            return x * (-1);
    },
    sqrtScratch(x) {
        temp = x;
        precision = 10 ** (-10);
        while (this.abs(x - temp * temp) > precision) {
            temp = (temp + x / temp) / 2;
        }
        return temp;
    }
}
// this keyword who refering to any key to the same object
// that exist in the same object
const cat = {
    name: "Oreo",
    color: "Black and White",
    hello() {
        console.log(`Hello ${this.name}, whose has ${this.color} color`);
    }
}
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}
// TRY AND CATCH
console.warn("TRY AND CATCH");
try {
    hello.tooUpperCase();
} catch (E) {
    console.log("ERROR ON BLOCK TRY 1")
}
console.log("AFTER!");
function yell(msg) {
    try {
        console.log(`YELLING : "${msg.toUpperCase()}"`);
    } catch (e) {
        console.log(e);
        console.log("PASS A STRING!");
    }
}
const cleanNames = function (namesArr) {
    const newArr = namesArr.map(function (name) {
        return name.trim();
    })
    return newArr;
}