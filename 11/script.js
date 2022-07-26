console.warn("EEK AYAM WARNA IJO PLUS ABU2");
// DEAFULT PARAMS (THE OLD WAY) 
// the order is expected not in the first place
function rollDie(numSides) {
    if (numSides == undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}
// DEFAULT PARAMS (THE NEW WAY)
function rollDie2(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}
function greet(person, msg = "HEY THERE,") {
    console.log(`${msg} ${person}`);
}
// SPEARD ...
// SPREAD : spread sintax allows an iterable such as an array
// to be expanded in places where zero or more arguments
// (for function calls) or elements (for array literals) are
// expected, or an obejct expression to be expeanded in 
// places where zero or more key-value pairs (for object literals)
// are expected.

nums = [1, 2, 3, 5, 6, 7, 87, 54, 65];
console.log(nums);
console.log(...nums);
console.log("HELLO");
console.log(..."HELLO");
console.log("H", "E", "L", "L", "O");

let cats = ["cat1", "cat2", "cat3", "cat4", "cat5"];
let dogs = ["dog1", "dog2", "dog3", "dog4", "dog5"];
let allPets = [cats, dogs]; // its become 2d array not what we wanted
let allPets2 = [...cats, ...dogs, "turtle1"]; // COMBINING 2 array
let nameArrLetter = [..."ARIF"];

// SPREAD IN LITERALS OBJECTS
const feline = {
    legs: 4,
    family: "Felidae",
};
const canine = {
    isFurry: true,
    family: "Caninae"
}
const catDog = { ...feline, ...canine }; // ORDER MATTERS
                                        // the last one
                                        // thtat youll get
// what ll happen if you spread an array into an object
const arrToObject = { ...[1, 2, 3, 4, 5, 7, 8, 9] };
// the indices/idx ll be the key the same with STRING
const stringToObject = { ..."ARIF" };

// Rest PARAMS
// arguments act like an array but its not an array
// arguments cant use reduce
// USE REST
// function sum() {
//     console.log(arguments);
//     return arguments.reduce((total,currNum) => {
//         return total + currNum;
//     })
// } // THIS FUNCTION WILL NOT WORK CAUSE ARGUMENTS ISNT ARRAY
// REST :: COLLECT THE REST OF THE VALUE
function sum(...nums) {
    return nums.reduce((total, currNum)=>{
        return total + currNum;
    })
} // ...nums will return the array of the parameters 
  //that youre gonna insert in the function

function raceResults(gold, silver, ...theRest) {
    console.log(`GOLD MEDAL GOES TO ${gold}`);
    console.log(`SILVER MEDAL GOES TO ${silver}`);
    console.log(`TRY AGAIN LMAO ${theRest}`);
}

// DESTRUCTURING ARRAYS
const scores = [99,95, 94, 92, 89, 86, 83, 80, 75];
// DESTRUCTURING ARRAYS EX
const [gold, silver, bronze, ...theRest] = scores;


// DESTRUCTURING OBJECTS
const user1 = {
    firstName: "Arif",
    lastName: "Ikhwan",
    age: 20,
    email: "arifikhwan75@gmail.com",
    status: "Single",
    born: 2000
};
const user2 = {
    firstName: "user2",
    lastName: "lastUser2",
    age: 21,
    email: "user2@gmail.com",
    status: "Single",
    born: 2002,
    died: 9999
};
// DESTRUCTURING OBJECTS EX
const { email, firstName: namaPertama, lastName: namaAkhir} = user2;
//const [ email, firstName, lastName ] = user1; ITS NT ARRAY
const { born: birthYear } = user1;

//const { age, born, died } = user1;
// died = undefined

// set a default value
const { age, born, died = 'N/A' } = user1;

// DESTRUCTURING PARAMS
function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}
// DESTRUCTURING PARAMS EXS
// OBJECT
function fullName2({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
// ARRAY
function goldSilverScores([gold, silver]) {
    return `${gold} ${silver}`;
}