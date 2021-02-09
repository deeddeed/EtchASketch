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
let clickButton = document.getElementById("clickColorButton");
let moveButton = document.getElementById("moveColor");
 

//Slider
let slider = document.getElementById("borderRange");
let sliderValue = slider.value;
document.getElementById("borderText").value = slider.value; 
let squareSlider = document.getElementById("squareSlider");
let squareValue = squareSlider.value;
document.getElementById("squareText").value = squareSlider.value;

const grid = document.getElementById("gridDivs");

let clickColor = "#FA824C";
let moveColor = "#558C8C";
let size = squareValue;
let divColor = "#3E505B";
let check = "false";
let divSize = 600/size;

clickButton.style.backgroundColor = clickColor;
moveButton.style.backgroundColor = moveColor;


createGrid(size); 

//STAGE I
//CREATE the grid 
function createGrid(size) {
  for (var rows = 0; rows < size; rows++) {
    for (var columns = 0; columns < size; columns++){
      grid.append(createDiv());     
    }  
    console.log(size);

  }
}
//STAGE II
//CREATE EACH squares
function createDiv() {
  const div = document.createElement("div");
  div.classList.add("square");
  if (check == "true") {
    div.style.backgroundColor =
      "rgb( " +
      Math.floor(Math.random() * (0 + 255)) +
      " " +
      Math.floor(Math.random() * (0 + 255)) +
      " " +
      Math.floor(Math.random() * (0 + 255)) +
      " )";
  } else {
    div.style.backgroundColor = divColor;
  }
  div.style.height = `${800/size}px`;
  div.style.width = `${1600/size}px`;
  div.style.borderRadius = sliderValue + "%";
  return div;
}

//USER picks the color for the BACKGROUND
function userChooseBackground(event) {
  divColor = event.target.value;
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(size);
  randomBackground.style.backgroundColor = divColor;
}
//USER picked Color for MOUSE MOVE
function userMoveColorPick(event) {
  moveColor = event.target.value;
  mouseMoveBtn.style.backgroundColor = moveColor;
  moveButton.style.backgroundColor = moveColor;
}
//USER picked color for the MOUSE CLICK
function userColorPicked(event) {
  clickColor = event.target.value;
  mouseClickBtn.style.backgroundColor = clickColor;
  clickButton.style.backgroundColor = clickColor;
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
  createGrid(size);
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
  clickButton.style.backgroundColor = clickColor;

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
  moveButton.style.backgroundColor = moveColor;
}
//RANDOM COLOR ON EACH DIV
function paintRandomPic() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  check = "true";
  createGrid(size);
  console.log(check);
}

//SLIDER Border
function changeSquare() {
  sliderValue = slider.value;
  document.getElementById('borderText').value = slider.value;
  reset();
}
//SLIDER Square Size
function changeSquareSize(){
  squareValue = squareSlider.value;
  document.getElementById("squareText").value = squareSlider.value;
  console.log("Test Slider square function value is " + squareValue);
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
  console.log("size is " + size);
  size = squareValue;
  createGrid(size);
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
squareSlider.addEventListener("change", changeSquareSize);

randomBackground.style.backgroundColor = divColor;
mouseClickBtn.style.backgroundColor = clickColor;
mouseMoveBtn.style.backgroundColor = moveColor;
