const grid = document.getElementById("gridTable");
const resetBtn = document.getElementById("resetBtn");
let mouseMoveBtn = document.getElementById("mouseMoving");
let mouseClickBtn = document.getElementById("mouseClick");

createGrid(64);

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

// Change the color with mouse click
function mouseClickToPaint(){

  grid.addEventListener("click", function (e) {
    if (e.target.matches(".square")) {
      e.target.classList.add("coloredSquare");
      console.log("mouse is CLICKING");
      mouseClickBtn.style.backgroundColor = "teal";   
      mouseMoveBtn.style.backgroundColor = "white";      
   
    }
  });
}

//change the color with moving mouse
function mouseMovingToPaint() {

  grid.addEventListener("mouseover", function (e) {
    if (e.target.matches(".square")) {
      e.target.classList.add("coloredSquare");
      console.log("mouse is moving");
      mouseMoveBtn.style.backgroundColor = "teal";   
      mouseClickBtn.style.backgroundColor = "white";      
   
    }
  });
}  



// resets the grid
function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(gridSize);
  mouseMoveBtn.style.backgroundColor = "white";      
  mouseClickBtn.style.backgroundColor = "white";      


}

resetBtn.addEventListener("click", reset);
