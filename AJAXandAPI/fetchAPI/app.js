fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        console.log("RESPONSE WAITING TO PARSE: ", res);
        return res.json();
    })
    .then(data => {
        console.log("DATA : ", data);
        console.log(data.ticker.price);
    })
    .catch(err => {
        console.log("ERROR : ", err);
    })

const fetchJSON = async (url) => {
    try {
        const res = await fetch(url
            ,{
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await res.json();
        console.log(res.headers.get("content-type"));
        console.log(data);
        return data;
        // console.log(data.ticker.price);
        // console.log(typeof(data.ticker.price))
    } catch (err) {
        console.log(err);
    }
    
}
const test1 = fetchJSON("https://api.cryptonator.com/api/ticker/btc-usd");
// fetchBTCprice("https://api.cryptonator.com/api/ticker/btc-usd");
// const test2 = fetchJSON("data/users.json");

const loadUsers = async () => {
    return (await fetch("data/users.json")).json();
}
document.addEventListener("DOMContentLoaded", async () => {
    let users = [];
    try {
        users = await loadUsers();
        console.log(users)
    } catch (err) {
        console.log("ERROR, cause: ", err);
    }
});