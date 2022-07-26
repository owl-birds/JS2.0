const container = document.createElement("div");
container.classList = "container";

document.body.appendChild(container);

for (let i = 0; i < 10; i += 1){
    const button = document.createElement("button");
    button.classList = "click";
    button.innerText = "CLICK";
    container.appendChild(button);
}

const clicks = document.querySelectorAll(".click");

const random = () => {
    return Math.floor(Math.random() * 256);
}
const ranColor = () => {
    return `rgb(${random()},${random()},${random()})`;
}
// this keyword
for (let click of clicks) {
    click.addEventListener("click", function() {
        this.style.backgroundColor = ranColor();
        console.log(this);
    });
}

const h1 = document.querySelector("h1");

// below will result in error
h1.addEventListener("click", () => {
    this.style.color = `rgb(${random()},${random()},${random()})`;
});

// GREAT READ
// https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/



// Event Objects and keyboard event
const firstButton = document.querySelector("button");
firstButton.addEventListener("click", function (event) {
    console.log(event);
});

// Keyboard Event
const input = document.querySelector("input");
input.addEventListener('keydown', function (event) {
    console.log(event);
    console.log(event.key); // a ex pressing a key
    console.log(event.code); // keyA locationn of the keyboard test 
    // test shift or ctrl
});

// event obj contain property about the object that
// had the event happened to them
// RIP engrish

// input.addEventListener("keyup", function () {
//     console.log("UP!");
// });