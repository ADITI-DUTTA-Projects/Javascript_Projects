const userInput = document.querySelector('#guessField')
const submitBtn = document.querySelector('#subt')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const remainGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess = []
let attemptGuess = 1

let randomNum = parseInt((Math.random() * 100) + 1)

let playGame = true;
if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateNum(guess)
    })
}

function validateNum(guess) {
    if (isNaN(guess) || guess < 0 || guess > 100) {
        alert(`please enter a valid number`)
    } else {
        prevGuess.push(guess)
        if (attemptGuess === 11) {
            displayYourGuess(guess)
            displayMessage(`game over, the random number was ${randomNum}`);
            endGame()
        } else {
            displayYourGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`you guessed it right, random number was ${randomNum}`)
        endGame()
    } else if (guess < randomNum) {
        displayMessage(`your guess is tooo low`)
    } else if (guess > randomNum) {
        displayMessage(`your guess is too high`)
    }
}

function displayYourGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess};   `
    attemptGuess++;
    remainGuess.innerHTML = `${11 - attemptGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}
function startGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        attemptGuess = 1;
        guessSlot.innerHTML = '';
        remainGuess.innerHTML = `${11 - attemptGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}