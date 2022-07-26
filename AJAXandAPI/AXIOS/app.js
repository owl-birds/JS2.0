// AXIOS
// A library for making HTTP requests
// based on fetch api
// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("ERROR: ", err);
//     });

const fetchBTCprice = async () => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(res.data.ticker.price);
    } catch (err) {
        console.log(err);
    }
}
// fetchBTCprice();


// setting header in axios
const button = document.createElement("button");
button.innerText = "CLICK + DAD JOKE";
document.body.appendChild(button);

const jokes = document.querySelector("#jokes");

const getDadJoke = async () => {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    const res = await axios.get("https://icanhazdadjoke.com/",config);
    console.log(res.data.joke);
    const li = document.createElement("li");
    li.append(res.data.joke);
    jokes.append(li);
}
// getDadJoke();
// button.addEventListener("click", function () {
//     getDadJoke();
// })

const getJoke = async () => {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    try {
        const res = await axios.get("https://icanhazdadjoke.com/",config);
        return res.data.joke;    
    } catch (err) {
        console.log("ERROR!: ", err);
    }
    
}

const addNewJoke = async () => {
    const jokeText = await getJoke();
    // console.log(jokeText);
    const li = document.createElement("li");
    li.append(jokeText);
    jokes.append(li);
}
button.addEventListener("click", addNewJoke);