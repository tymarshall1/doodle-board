let gridSize = 50;

const gridResizeBtn = document.querySelector("#gridResizer");
gridResizeBtn.addEventListener("click", clearAndRedrawGrid);

const slider = document.querySelector("#myRange");
slider.oninput = () => {
  gridSize = slider.value;
  document.querySelector(
    "#sliderValue"
  ).textContent = `${slider.value} x ${slider.value}`;
};

const clearBtn = document.querySelector("#clearGrid");
clearBtn.addEventListener("click", clearAndRedrawGrid);

function createGrid(size) {
  const gridContainer = document.querySelector("#gridContainer");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 0; i < size; i++) {
      const squareDiv = document.createElement("div");
      squareDiv.setAttribute("class", "square");
      squareDiv.addEventListener("mouseover", () => drawOnGrid(squareDiv));
      row.appendChild(squareDiv);
    }
    gridContainer.appendChild(row);
  }
}

function clearAndRedrawGrid() {
  clearGrid();
  createGrid(gridSize);
}

function drawOnGrid(square) {
  square.classList.add("draw");
}

function clearGrid() {
  const grid = document.querySelector("#gridContainer");
  let gridRows = grid.lastElementChild;

  while (gridRows) {
    grid.removeChild(gridRows);
    gridRows = grid.lastElementChild;
  }
}

createGrid(gridSize);
