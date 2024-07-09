let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#your-score");
let compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector('#msg');
const choices = document.querySelectorAll(".choice");
const compGenChoice = () => {
    let compOption = ["rock", "paper", "scissor"];
    let randomIdx = Math.floor(Math.random() * 3);
    return compOption[randomIdx];
}
const gameDraw = () => {
    msg.innerText = `Game Is Draw , play again`;
    msg.style.backgroundColor = "#112A46";
    msg.style.color = "#FFDAB9";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green";
        msg.style.color = "#ffffff";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "#ffffff";
    }
}

const playGame = (userChoice) => {
    // console.log(`user choice is ${userChoice}`);
    let compChoice = compGenChoice();
    // console.log(`computer choice is ${compChoice}`);
    if (userChoice === compChoice) {
        //gameDraw
        gameDraw();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`choice was clicked  ${userChoice}`);
        playGame(userChoice);
    })
});