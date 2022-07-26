const form = document.querySelector("form");
const uList = document.querySelector("#usernameList");

form.addEventListener("submit", function (event) {
    // first
    event.preventDefault();
    // 
    const username = document.querySelector("input");
    console.log(username.value);
    // you can access the input based on the name
    // in the input that you have
    // ex form.name. ...
    console.log(this.username.value);
    console.log("SUBMITTED");
    
    const newU = document.createElement("li");
    newU.innerText = this.username.value;

    console.log(newU);
    uList.appendChild(newU);
    // prevent form's default action
    // stopping it to go to url in action att form
});