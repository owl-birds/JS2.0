// container
const container = document.createElement("div");
container.classList.add("container");
// button
const button = document.createElement("button");
button.innerText = "CLICK ME!";
button.classList = "click1";
// h1
const h1 = document.createElement("h1");
h1.innerText = "Events";
// p
const para = document.createElement("p");
para.innerText = "PARA"

// adding div to body
document.body.appendChild(container);
document.querySelector(".container").appendChild(h1);
document.querySelector(".container").appendChild(button);
document.querySelector(".container").appendChild(para);

// 
const click1 = document.querySelector(".click1");
const para1 = document.querySelector("p");

const scream = () => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
}

click1.onclick = () => {
    console.log("YOU CLICKED ME");
};

click1.onmouseenter = scream;


// addEventListener(event type, callback func)
click1.addEventListener("click", () => {
    console.warn("OI addEventListener HERE");
});

// randomize 0 - 255
const random = () => {
    return Math.floor(Math.random() * 256);
};
// body
const body = document.querySelector("body");

click1.addEventListener("click", () => {
    container.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
});