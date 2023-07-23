let gridSize = 50;
let gridContainer;
let colorChoice = "black";

const slider = document.querySelector("#myRange");
slider.oninput = () => {
  gridSize = slider.value;
  document.querySelector(
    "#sliderValue"
  ).textContent = `${slider.value} x ${slider.value}`;
};

const chooseColorInput = document.querySelector("#colorChooser");
chooseColorInput.oninput = () => (colorChoice = chooseColorInput.value);

document.querySelector(
  "#sliderValue"
).textContent = `${gridSize} x ${gridSize}`;

document
  .querySelector("#gridResizer")
  .addEventListener("click", clearAndRedrawGrid);

document
  .querySelector("#clearGrid")
  .addEventListener("click", clearAndRedrawGrid);

document
  .querySelector("#blackPen")
  .addEventListener("click", () => (colorChoice = "black"));

document
  .querySelector("#eraserPen")
  .addEventListener("click", () => (colorChoice = "#f9f5eb"));

function createGrid(size) {
  gridContainer = document.querySelector("#gridContainer");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 0; i < size; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.setAttribute("class", "square");
      row.appendChild(squareDiv);
    }
    gridContainer.appendChild(row);
  }
}
createGrid(gridSize);

gridContainer.addEventListener("mousedown", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("square")) {
    drawOnGrid(e);
    gridContainer.addEventListener("mouseover", drawOnGrid);
  }
});

gridContainer.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", drawOnGrid);
});

function clearAndRedrawGrid() {
  clearGrid();
  createGrid(gridSize);
}

function drawOnGrid(e) {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = colorChoice;
  }
}

function clearGrid() {
  const grid = document.querySelector("#gridContainer");
  let gridRows = grid.lastElementChild;

  while (gridRows) {
    grid.removeChild(gridRows);
    gridRows = grid.lastElementChild;
  }
}
