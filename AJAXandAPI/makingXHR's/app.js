const myReq = new XMLHttpRequest();
let joke;

// callback function
myReq.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(this);
    joke = data.joke;
}
// error func
myReq.onerror = function (err) {
    console.log("ERROR!, in:", err);
}

// get https://icanhazdadjoke.com/
myReq.open("get", "https://icanhazdadjoke.com/", true);
myReq.setRequestHeader("Accept", " application/json");
myReq.send();
