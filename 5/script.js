console.warn("LOOOPPSS");
// printing even num
console.warn("EVENS");
for (let i = 2; i <= 20; i += 2){
    console.log(i);
}
console.warn("ODDS");
for (let i = 1; i <= 20; i += 2){
    console.log(i);
}

let colors = ["black", "white", "green"];
for (let i = 0; i < colors.length; i += 1){
    console.log(i,colors[i]);
}
let lol = "LOL";
for (let i = 0; i < 3; i += 1){
    console.log(`Outer ${i}`);
    for (let j = 0; j < lol.length; j += 1){
        console.log(` Inner ${lol[j]}`);
    }
}
console.warn("!!!!!!!")
const groups = [
    ["Arif", "Ikhwan", "Hendra"],
    ["Dan", "Apa", "Why", "nani"],
    ["Kita", "Kami"]
]
for (let i = 0; i < groups.length; i += 1){
    console.log(`Group ${i+1}`);
    for (let j = 0; j < groups[i].length; j += 1){
        console.log(` ${j + 1} ${groups[i][j]}`)
    }
}
let count = 0;
while (count <= 3) {
    console.log(count + 1);
    count += 1;
}
count = 0;
while (true) {
    count += 1;
    if (count === 4) {
        console.log(`count==4 then stop! nowCount:${count}`);
        break;
    }
}