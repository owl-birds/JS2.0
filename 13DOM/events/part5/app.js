const input = document.querySelector("input");
const h1 = document.querySelector("h1");
input.addEventListener("change", function(event){
    console.log(this.value);
    h1.innerText = this.value;
})
// something new ti hte value
// no change 
// if you inputted somthing different then the initial
// value the event listener will fire
// but if not then it will stay quiet

input.addEventListener("input", function(event){
    console.log("INPUT");
})
// it will fire everytime you input something

// const input = document.querySelector("#username");
// const h1 = document.querySelector("h1");

// input.addEventListener("input", function(){
//     if (this.value === ""){
//         h1.innerText = "Enter Your Username";
//     }else{
//         h1.innerText = "Welcome, " + this.value;
//     }
// })


// EVENTS BUBBLING
// 
const bubbling = document.querySelector("#bubbling");
const cont = document.querySelector("#cont");

bubbling.addEventListener("click",function(event){
    cont.style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    // prevent evenet bubbling
    event.stopPropagation();
})
cont.addEventListener("click",function(){
    this.classList.toggle("hide");
})

// so the nested element in html

// so how to stop it ????

// so basically when you click an elemetn that inside 
// of a eleemtn that have event on them

// ex : child elemeent and parent element
// so when you have an event on both the element
// and then when you click child element
// you will at the same time trigger the parent element
// event.

// so to prevent that use event.stopPropagation():


// ################
// EVENT DELEGATION
const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerText = form.name.value;
    list.appendChild(li);
})

// but the new li cant be deleted, WHY????
// so the code cant see the future
// so it created after the
const lis = document.querySelectorAll("li");
const ul = document.querySelector("ul");
for (let li of lis) {
    li.addEventListener("click", function () {
        li.remove();
    })
}

ul.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.nodeName);
    console.log(event.target.id);
    event.target.nodeName === "LI" && event.target.remove();
    // too crude, not specific
    // event.target.remove();
})