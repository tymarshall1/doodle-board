let gridSize = 50;
let timer = null;
let gridContainer;

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
    e.target.classList.add("draw");
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
    e.target.classList.add("draw");
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
