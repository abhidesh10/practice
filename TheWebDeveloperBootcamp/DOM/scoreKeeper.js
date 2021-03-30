let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("p span");
let resetBtn = document.getElementById("reset");

let p1Score = 0;
let p1Display = document.querySelector("#p1Display")

let p2Score = 0;
let p2Display = document.querySelector("#p2Display")

let gameOver = false;
let winningScore = 5;

p1.addEventListener('click', function () {

    if (!gameOver) {
        p1Score++;
        if (winningScore === p1Score) {
            p1Display.classList.add("winner")
            gameOver = true;
        }
        p1Display.textContent = p1Score
    }

})

p2.addEventListener('click', function () {

    if (!gameOver) {
        p2Score++;
        if (winningScore === p2Score) {
            p2Display.classList.add("winner")
            gameOver = true;
        }
        p2Display.textContent = p2Score
        
    }

})

resetBtn.addEventListener('click', reset)

numInput.addEventListener('change', function () {
    winningScoreDisplay.textContent =  this.value;
    winningScore = Number(this.value)
    reset()
})

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;

    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}