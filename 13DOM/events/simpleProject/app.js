// u can use object too
const p1 = {
    display: document.querySelector("#player1-score"),
    button: document.querySelector(".player1-btn")
};
const p2 = {
    display: document.querySelector("#player2-score"),
    button: document.querySelector(".player2-btn")
};

// display
const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");

// buttons grup
const buttons = document.querySelector(".button-wrapper");
const player1Btn = document.querySelector(".player1-btn");
const player2Btn = document.querySelector(".player2-btn");

// limit
const limit = document.querySelector("#limit");

// who the winner
const who = document.querySelector("#who");
const winner = document.querySelector(".winner");

// function
const checkWin = () => {
    return player1Score.innerText === limit.value
        ||
        player2Score.innerText === limit.value;
};
const showWinner = () => {
    if (player1Score.innerText === limit.value) {
        who.innerText = 1;
        winner.style.display = "block";
        winner.style.color = "rgba(143, 10, 196, 1)";
        // player1Btn.style.backgroundColor = "rgba(143, 10, 196, 0.8)";
        // player2Btn.style.backgroundColor = "rgba(20, 170, 125, 0.8)";
        player1Btn.classList.add("end1");
        player2Btn.classList.add("end2");
    } else if (player2Score.innerText === limit.value) {
        who.innerText = 2;
        winner.style.display = "block";
        winner.style.color = "rgba(20, 170, 125, 1)";
        // player1Btn.style.backgroundColor = "rgba(143, 10, 196, 0.8)";
        // player2Btn.style.backgroundColor = "rgba(20, 170, 125, 0.8)";
        player1Btn.classList.add("end1");
        player2Btn.classList.add("end2");
    }
};

buttons.addEventListener("click", function (event) {
    // console.log(event);
    // RESET BTN
    try{
        if (event.target.className === "reset-btn") {
            player1Score.innerText = 0;
            player2Score.innerText = 0;
            winner.style.display = "none";
            player1Btn.classList.remove("end1");
            player2Btn.classList.remove("end2");
        }
    } catch (err) {
        console.warn(err);
    }
    // ADDING SCORE
    try {
        if (!checkWin()) {
            // console.log(event.target.id);
            if (event.target.className === "player1-btn") {
                player1Score.innerText = parseInt(player1Score.innerText) + 1;
                showWinner();
            } else if (event.target.className === "player2-btn") {
                player2Score.innerText = parseInt(player2Score.innerText) + 1;
                showWinner();
            }
        } else {
            
        }
    } catch(err) {
        console.warn(err.message);
        console.warn(err);
    } 
});
limit.addEventListener("change", function () {
    if (parseInt(this.value) < 0) {
        this.value = 1;
    }
})