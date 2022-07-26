// parentt
const firstBold = document.querySelector("b");
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);
// childs
const paragraph = firstBold.parentElement;
console.log(paragraph.children);

const secondImage = document.querySelector(".square");
console.log(secondImage.parentElement);
console.log(secondImage.children);

// siblings
console.warn("sibling");
console.log(secondImage.nextSibling);

console.log(secondImage.nextElementSibling);
console.log(secondImage.previousElementSibling);


// Append and append child
const newImg = document.createElement("img");
newImg.src = "https://images.unsplash.com/photo-1630370448230-300c2b577b3a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
newImg.classList.add("square");
// append it to the page
// append it to the body

// so its basically append the new element to the 
// las child of the element that we selected
document.body.appendChild(newImg);


// APPEND method we can insert more thann 1 thing
// at a time

// so it can new text too your element
const firstPara = document.querySelector("p");
firstPara.append("IM NNEW HI, NOTICE ME HERE");

firstPara.append("### FIRST", " SECOND");

// PREPEND
const newB = document.createElement("b");
newB.append("NEWB");
firstPara.prepend(newB);

// so the below will not nested but it ll become the
// sibling 
const h2 = document.createElement("h2");
h2.append("CHICKENSSSSSSS");

document.querySelector("h1").insertAdjacentElement("afterend", h2);

const h3 = document.createElement("h3");
h3.append("H3h3")
document.querySelector("h1").after(h3);

// removing element

// remove / removeChild
const firstLi = document.querySelector("li");
const uls = document.querySelector("ul");
uls.removeChild(firstLi);


// REMOVE METHOD NEWER METHOD
const firstImg = document.querySelector("img");
firstImg.remove();

