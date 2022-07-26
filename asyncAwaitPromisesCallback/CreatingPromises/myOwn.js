const userName = document.querySelector("#name");

const users = [
    { name: "user 1", class: "a", color:"red" },
    { name: "user 2", class: "a", color:"blue" },
    { name: "user 3", class: "a", color:"orange" },
    { name: "user 4", class: "b", color: "green" },
    { name: "user 5", class: "z", color: "magenta"}
];

// changing names with promise
const nameChange = (user, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = user.color;
            userName.innerText = user.name;
            resolve();
        }, delay)
    });
};
nameChange(users[0], 1000)
    .then(() => nameChange(users[1], 1000))
    .then(() => { return nameChange(users[2], 1000) })
    .then(() => { return nameChange(users[3], 1000) })
    .then(() => { return nameChange(users[4], 1000) })


// fake Request
const fakeReq = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.7) {
                reject("Request Error");
            } else {
                resolve(`request fulfilled, ${url}`);   
            }
        }, 1000)
    })
}

fakeReq("/dogs/1")
    .then((data) => {
        console.log("DONE WITH THE REQUEST");
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR ", err);
    })