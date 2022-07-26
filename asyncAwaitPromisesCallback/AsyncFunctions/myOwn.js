// Async keyword
// Async functions always return a promise

// if the function returns a value, the promise will
// be resolved with that value

// if the function throws an exception, the promise 
// will be rejected

const helloWorld = async () => {
    throw "PROBLEMSS!!!!";
    return "HELLO WORLD!!!";
}
// helloWorld()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH : ", data);
//     })
//     .catch((err) => {
//         console.log("ERROR!!!, ", err);
//     });
const uhOh = async () => {
    throw new Error("OH NO !!!!");
}
// uhOh();



// 
// 
// 
const login = async (username, password) => {
    if (!username || !password) {
        throw "Missing Credentialls";
    }
    if (password === "owl") return `WELCOME, ${username}`;
    throw "Invalid Password";
}

login("ooowwwlll", "owal")
    .then((data) => {
        console.log("LOG IN SUCCESS");
        console.log(data)
    })
    .catch((err) => {
        console.log("FAILED");
        console.log(err);
    })


// await : await will pause the execution of the 
// function, waiting for a promise to be resolved

// changing names with promise
const users = [
    { name: "user 1", class: "a", color:"red" },
    { name: "user 2", class: "a", color:"blue" },
    { name: "user 3", class: "a", color:"orange" },
    { name: "user 4", class: "b", color: "green" },
    { name: "user 5", class: "z", color: "magenta"}
];
const uName = document.querySelector("#name");
const nameChange = (user, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = user.color;
            uName.innerText = user.name;
            resolve();
        }, delay)
    });
};
// nameChange(users[0], 1000)
//     .then(() => nameChange(users[1], 1000))
//     .then(() => { return nameChange(users[2], 1000) })
//     .then(() => { return nameChange(users[3], 1000) })
//     .then(() => { return nameChange(users[4], 1000) })

const rainbow = async () => {
    await nameChange({ name: "user 6", class: "z", color: "brown" }, 1000);  
    await nameChange({ name: "user 7", class: "z", color: "teal" }, 1000);
    await nameChange(users[0], 1000);
    await nameChange(users[1], 1000);
    return "ALL DONE";
}
rainbow().then((data) => {
    console.log(data);
})
// or
const printRainbow = async () => {
    await rainbow();
    console.log("END OF PRINT RAINBOW");
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}
// handling ERRORS USE TRY and CATCH
const twoReq = async () => {
    try {
        let data1 = await fakeRequestPromise("/page1");   
        console.log(data1);
        let data2 = await fakeRequestPromise("/page2");
        console.log(data2);
    } catch (err) {
        console.log(err);
    }
    // err : value from reject 
}


