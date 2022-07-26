const rawJson = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`;

// parsing
const data = JSON.parse(rawJson);
console.log(data.ticker);
console.log(data.ticker.price);

const dog = {
    breed: "dog1",
    color: "brown",
    age: 99,
    isAlive: true,
    owner: undefined
}
console.log(JSON.stringify(dog));
