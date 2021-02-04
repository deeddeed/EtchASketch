const grid = document.getElementById("gridTable");
const resetBtn = document.getElementById("resetBtn");
let mouseMoveBtn = document.getElementById("mouseMoving");
let mouseClickBtn = document.getElementById("mouseClick");
const userPickedColor = document.getElementById("userColor");
const userPickedMoveColor = document.getElementById("userMoveColor");
let clickColor = "#FA824C";
let gridSize = 64;
let moveColor = "#A2D729";

createGrid(gridSize);

// create the different divs
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  console.log(size);
  return div;
}

// create the grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(20));
    }
  }
}
//change the color the user picks for the MOUSE MOVE FUNCTION
function userMoveColorPick(event){
  moveColor = event.target.value;
  mouseMoveBtn.style.backgroundColor = moveColor;
}
//change the color to that the user picks for the MOUSE CLICK FUNCTION
function userColorPicked(event) {
  clickColor = event.target.value;
  mouseClickBtn.style.backgroundColor = clickColor;
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
  createGrid(gridSize);
}

resetBtn.addEventListener("click", reset);
userPickedColor.addEventListener("change", userColorPicked, false);
userPickedMoveColor.addEventListener("change", userMoveColorPick, false);
mouseClickBtn.style.backgroundColor = clickColor;
mouseMoveBtn.style.backgroundColor = moveColor;
