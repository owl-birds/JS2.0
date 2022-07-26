const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

//Element is the most general base class from which
//all element objects(i.e.objects that represent elements)
//    in a Document inherit.It only has methods and
//properties common to all kinds of elements.More specific
//classes inherit from Element.For example, the HTMLElement
// interface is the base interface for HTML elements, 
// while the SVGElement interface is the basis for all
//  SVG elements.Most functionality is specified further
// down the class hierarchy.

// writing my own code;
// the html and css will transform into objects by JS
console.dir(document);
console.log(document);
// get by ud
const imagesBanner = document.getElementById("banner");
const talkingAbout = document.getElementById("what");
// get by tag name
// returning html collection
const images = document.getElementsByTagName("img");
for (let image of images){
    console.log(image);
    image.src = "https://images.unsplash.com/photo-1601758066440-cbfc06a82914?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
}
const squareImages2 = document.getElementsByClassName("square");
for (let image of squareImages2) {
    image.src = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
}
// if the element doesnt exist it will return null

// query selector and query selector all
// id
const imageBanner2 = document.querySelector("#banner");
// tag name :: selecting the first tagname (using querySelector)
const images2 = document.querySelector("img");
// querySelectorAll
const images3 = document.querySelectorAll("img");
// className
const squareImages3 = document.querySelectorAll(".square");
for (let squareImage of squareImages3) {
    console.log(squareImage.src);
}
const secondImage = document.querySelector("img:nth-of-type(2)");
const thirdImage = document.querySelector("img:nth-of-type(3)");
// using html attribute too select an html object
const titleJavaA = document.querySelector("a[title='Java']");

const every2Nimages = document.querySelectorAll("img:nth-of-type(2n)");
// Nodelist : Javascript Object


// the difference between .textContent . innerText

// text Content : will give you everything

// innerText : a bit sensitive, if the style of
// an element in the element that you selected
// display: none; then it will not give you that 
// element


// innerHTML
console.log(document.querySelector("p").innerHTML);

document.querySelector("h1").innerHTML = "<h5>silkie, smaller</h5>";


// you can change the id or class in any element 
// with JS

console.log(document.querySelector("a").href);

console.log(document.querySelector("a").getAttribute("href"));

console.log(document.querySelector("a").setAttribute("href", "https://www.google.com/"));


const textInp = document.querySelector("input[type='text']");

// element object.style ::: inline style

// window.getComputedStyle(h1);
// getting what style is applied on the element that
// selected

// CLASS LIST manipulating class
document.querySelector("p").classList = "purple";
// adding additional class
document.querySelector("p").classList += " border";
// remove class
document.querySelector("p").classList.remove("purple");
// contain a class : returnn bool
console.log(`does first p contains purpleClass: ${document.querySelector("p").classList.contains("purple")}`);


// toggle : on/off a class to element
// document.querySelector("p").classList.toggle("border");
