const form = document.querySelector("form");

// test
const button = document.createElement("button");
button.innerText = "TEST TEST";
button.classList = "WHAT";
document.body.appendChild(button);


const btn = document.querySelector(".WHAT");
btn.addEventListener("click", function(){
    console.warn("WAHT");
})

const addLi = ()=>{
    const prod = this.product.value;
    const quantity = this.qty.value;
    const li = document.createElement("li");
    const ul = document.querySelector("#list");
    li.innerText = `${quantity} ${prod}`;

    ul.appendChild(li);
};

form.addEventListener("submit",function(event){
    event.preventDefault();
    addLi();
});

const ok = document.querySelector("#OK");
ok.addEventListener("keypress", function(event){
    console.log(event.code);
    console.log(event.key);
})