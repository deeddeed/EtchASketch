const grid = document.getElementById("gridTable");
let gridSize = 1;
let randomColor = document.getElementById("randomColor");
const startBtn = document.getElementById("startbtn");
let squareSize = 10;

createGrid(squareSize);
console.log(squareSize);

// create the different divs

function createDiv(size) {
  const div = document.createElement("div"); 
  div.classList.add("square");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  console.log(size);

  return div;
}

// create the grid with the users size inputs
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

// Change the color with mouse hover
grid.addEventListener("click", function (e) {
  if (e.target.matches(".square")) {
    e.target.classList.add("coloredSquare");
    console.log("0");
  }
});

// resets the grid
function reset() {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    createGrid(squareSize);
    console.log(squareSize);
  }

startBtn.addEventListener("click", reset);  
