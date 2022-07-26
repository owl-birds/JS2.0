console.warn("TEST...");
// Object Literals
// Key - Value Pairs

const person1 = {
    firstName: "Arif",
    lastName: "Ikhwan",
    age: 20,
    favColors: ["White","Black","Green"]
};
const person2 = {
    firstName: "Arif2",
    lastName: "Ikhwan2",
    age: 22,
    favColors: ["White","Black","Green"]
};
// accessing data in the objects
console.log(`PERSON1 ${person1}`);
console.log(`first name : ${person1["firstName"]}`);
console.log(`last name : ${person1.lastName}`);
console.log(`age : ${person1.age} years old`);
console.log(`Favorite Colors : ${person1.favColors}`);

// person1[age] ERROR
// person1["age"] TRUE

const dummy = { true: "dat", null: "WHAT", 2000: "BAD" };
let year = 2000;
console.log(`using another var as a KEY : ${dummy[year]} 
(year = 2000)`);

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant["address"]}, ${restaurant["city"]},
 ${restaurant["state"]}, ${restaurant["zipcode"]}`;


// in const object the KEY CANT BE CHANGED BUT THE VALUE
// CAN BE CHANGED it can also add new data
const scores = { A: 90, B: 100 };
console.log(scores);
scores.C = 60; scores.D = 50;
console.log(scores);

// ARRAY OF OBJECTS
const shoppingCart = [
    {
        product: "apple",
        price: 2.9,
        quantity: 1
    },
    {
        product: "mango",
        price: 3.9,
        quantity: 1.2
    },
    {
        product: "orange",
        price: 1.9,
        quantity: 0.7
    }
];

// ACCESSING THE OBJECT IN THE ARRAY OF OBJECTS
console.log(`product : ${shoppingCart[0].product} 
 price : ${shoppingCart[0]["price"]} 
 quantity : ${shoppingCart[0].quantity}`);

// NESTED OBJECTS ITS EXIST