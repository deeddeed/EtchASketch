//BUTTONS
let resetBtn = document.getElementById("resetBtn");
let mouseMoveBtn = document.getElementById("mouseMoving");
let mouseClickBtn = document.getElementById("mouseClick");
let randomPaint = document.getElementById("randomPaint");
let randomBackground = document.getElementById("randomBackground");
const userPickedColor = document.getElementById("userColor");
const userPickedMoveColor = document.getElementById("userMoveColor");
const userBackground = document.getElementById("userBackground");
const eraserBtn = document.getElementById("eraser");
const userGridSize = document.getElementById("bigger");

//Slider
let slider = document.getElementById("borderRange");
let sliderValue = slider.value;

const grid = document.getElementById("gridTable");
let clickColor = "#FA824C";
let moveColor = "#558C8C";
let divs = 12;
let gridSize = 7168;
let divColor = "#EFF7FF";
let check = "false";


createGrid(gridSize);

//STAGE I
//CREATE the grid and distribute the squares
function createGrid(gridSize) {
  for (let j = 0; j < gridSize; j++) {
    grid.appendChild(createDiv(divs));
  }
}
//STAGE II
//CREATE the size of the squares
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("square");
  if(check == "true"){
    div.style.backgroundColor =     "rgb( " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " )";;
  }else{
  div.style.backgroundColor = divColor;
  }
  div.style.borderRadius = sliderValue + "%";
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
}

//USER picks the color for the BACKGROUND
function userChooseBackground(event) {
  divColor = event.target.value;
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(gridSize);
  randomBackground.style.backgroundColor = divColor;
}
//USER picked Color for MOUSE MOVE
function userMoveColorPick(event) {
  moveColor = event.target.value;
  mouseMoveBtn.style.backgroundColor = moveColor;
}
//USER picked color for the MOUSE CLICK
function userColorPicked(event) {
  clickColor = event.target.value;
  mouseClickBtn.style.backgroundColor = clickColor;
}

//RANDOM color for the divs/squares BACKGROUND
function changeBackground() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  divColor =
    "rgb( " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " )";
  createGrid(gridSize);
  randomBackground.style.backgroundColor = divColor;
}
//RANDOM color for the mouse CLICK BUTTON
function mouseClickBtnRandom() {
  clickColor =
    "rgb( " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " )";
  mouseClickBtn.style.backgroundColor = clickColor;
}
//RANDOM color for the mouse MOVE BUTTON
function mouseMoveBtnRandom() {
  moveColor =
    "rgb( " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " " +
    Math.floor(Math.random() * (0 + 255)) +
    " )";
  mouseMoveBtn.style.backgroundColor = moveColor;
}
//RANDOM COLOR ON EACH DIV
function paintRandomPic() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  check = "true";
  createGrid(gridSize);
  console.log(check);
}

function changeSquare(){
    sliderValue = slider.value;
    reset();
}
//CHANGE the color with MOUSE CLICK
grid.addEventListener("mousedown", function (e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = clickColor;
    console.log("mouse is CLICKING");
    console.log(clickColor);
  }
});
//CHANGE the color with MOUSE MOVE
grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = moveColor;
    console.log("mouse is moving");
  }
});

//ERASER BUTTON
function eraserButton() {
  moveColor = divColor;
  console.log(moveColor);
}

// resets the grid
function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  divColor = "#EFF7FF";
  check = "false";
  randomBackground.style.backgroundColor = divColor;
  createGrid(gridSize);
}

resetBtn.addEventListener("click", reset);
randomBackground.addEventListener("click", changeBackground);
userPickedColor.addEventListener("change", userColorPicked, false);
userPickedMoveColor.addEventListener("change", userMoveColorPick, false);
userBackground.addEventListener("change", userChooseBackground, false);
mouseClickBtn.addEventListener("click", mouseClickBtnRandom);
mouseMoveBtn.addEventListener("click", mouseMoveBtnRandom);
randomPaint.addEventListener("click", paintRandomPic);
slider.addEventListener("change", changeSquare);

randomBackground.style.backgroundColor = divColor;
mouseClickBtn.style.backgroundColor = clickColor;
mouseMoveBtn.style.backgroundColor = moveColor;
