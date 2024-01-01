let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.getElementById("msg");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let imgBox = document.getElementById(".imgBox");



let turnO = true; 

let winners = [ 
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        audioTurn.play();
        console.log("btn was clicked");
       if(turnO) {
        btn.innerText = "O";
        turnO = false;
       } else {
        btn.innerText = "X";
        turnO = true;
       }
       btn.disabled = true;
       check_winner();
    });
});


const disableBoxes = () => {
    for(let btn of btns) {
        btn.disabled = true;
    }
};


const enableBoxes = () => {
    for(let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const check_winner = () => {
    for(let winner of winners) {

        let value1 = btns[winner[0]].innerText;
        let value2 = btns[winner[1]].innerText;
        let value3 = btns[winner[2]].innerText;

        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 == value2 && value2 == value3) {
                gameover.play();
                console.log("winner!",value1);
                showWinner(value1);
            }
            
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
