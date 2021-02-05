//BUTTONS
let resetBtn = document.getElementById("resetBtn");
let mouseMoveBtn = document.getElementById("mouseMoving");
let mouseClickBtn = document.getElementById("mouseClick");
let randomPaint = document.getElementById("randomPaint");
let randomBackground = document.getElementById("randomBackground");
const userPickedColor = document.getElementById("userColor");
const userPickedMoveColor = document.getElementById("userMoveColor");

const grid = document.getElementById("gridTable");

let clickColor = "#FA824C";
let moveColor = "#A2D729";
let slider = 15;
let gridSize = 2184;
let divColor = "rgb(255,255,255)";

console.log(divColor);
createGrid(gridSize);

//STAGE I
//create the grid and distribute the squares
function createGrid(gridSize) {
  for (let j = 0; j < gridSize; j++) {
    grid.appendChild(createDiv(slider));
  }
}
//STAGE II
// create the size of the squares
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.backgroundColor = divColor;
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

//change the Background to a random color (divs)
function changeBackground(){
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  divColor =   "rgb( " +
  Math.floor(Math.random() * (0 + 255)) +
  " " +
  Math.floor(Math.random() * (0 + 255)) +
  " " +
  Math.floor(Math.random() * (0 + 255)) +
  " )";  
  createGrid(gridSize);
  randomBackground.style.backgroundColor = divColor;
}

//change the color the user picks for the MOUSE MOVE FUNCTION
function userMoveColorPick(event) {
  moveColor = event.target.value;
  mouseMoveBtn.style.backgroundColor = moveColor;
}
//change the color to that the user picks for the MOUSE CLICK FUNCTION
function userColorPicked(event) {
  clickColor = event.target.value;
  mouseClickBtn.style.backgroundColor = clickColor;
}
//random color mouse CLICK BUTTON
function mouseClickBtnRandom(){
    clickColor = "rgb( " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " )";  
    mouseClickBtn.style.backgroundColor= clickColor;
}
//random color mouse MOVE BUTTON
function mouseMoveBtnRandom(){
  moveColor = "rgb( " +
  Math.floor(Math.random() * (0 + 255)) +
  " " +
  Math.floor(Math.random() * (0 + 255)) +
  " " +
  Math.floor(Math.random() * (0 + 255)) +
  " )";  
  mouseMoveBtn.style.backgroundColor= moveColor;
}
// Change the color with mouse click
grid.addEventListener("click", function (e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = clickColor;
    console.log("mouse is CLICKING");
    console.log(clickColor);
  }
});

//change the color with mouse move
grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = moveColor;
    console.log("mouse is moving");
  }
});

// resets the grid
function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  divColor = "rgb(255,255,255)";
  createGrid(gridSize);
}

resetBtn.addEventListener("click", reset);
randomBackground.addEventListener("click", changeBackground);
userPickedColor.addEventListener("change", userColorPicked, false);
userPickedMoveColor.addEventListener("change", userMoveColorPick, false);
mouseClickBtn.addEventListener("click", mouseClickBtnRandom);
mouseMoveBtn.addEventListener("click", mouseMoveBtnRandom);


randomBackground.style.backgroundColor = divColor;
mouseClickBtn.style.backgroundColor = clickColor;
mouseMoveBtn.style.backgroundColor = moveColor;
