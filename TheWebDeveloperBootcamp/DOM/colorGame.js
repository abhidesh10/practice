let colorSquares = 6;
let colors = [];
let pickedColor;
let h1 = document.querySelector("h1");
let resetBtn = document.getElementById("resetBtn");
let squares = document.querySelectorAll(".square");
let modeButtons = document.querySelectorAll(".mode");
let messageDisplay = document.getElementById("message");
let colorDisplay = document.getElementById("colorDisplay");

init();

function init() {
  // mode button event listener
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove(".selected");
      modeButtons[1].classList.remove(".selected");

      this.classList.add("selected");
      this.textContent === "EASY" ? (colorSquares = 3) : (colorSquares = 6);

      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = "Play Again?";
      } else {
        messageDisplay.textContent = "Try Again";
        this.style.backgroundColor = "#232323";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(colorSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  messageDisplay.textContent = "";

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetBtn.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let colorsArr = [];

  for (let i = 0; i < num; i++) {
    colorsArr.push(generateColor());
  }

  return colorsArr;
}

function generateColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
