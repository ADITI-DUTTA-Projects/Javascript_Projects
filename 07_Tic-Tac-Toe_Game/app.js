let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")
let newBtn = document.querySelector("#new-btn")

let playerO = true;// player"o" , player "X"
let count = 0;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const resetGame = () => {
    playerO = true;
    count = 0;
    enableBoxes();
    msg.innerText = "";
    msgContainer.classList.add("hide");
};
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const disabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.style.color = "#A55322"
            box.innerText = "O";
            playerO = false;
        } else {
            box.style.color = "#2274A5"
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkWinner();
        if (count === 9 && !iswinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = "Game is draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const checkWinner = () => {
    for (const pattern of winPattern) {
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
            if (pos0 == pos1 && pos1 == pos2) {
                // console.log(`winner${pos0}`);
                showWinner(pos0);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame)



























