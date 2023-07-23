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

const chooseColorBtn = document.querySelector("#chooseColorBtn");
chooseColorBtn.addEventListener("click", (e) => {
  addBtnBorder(e);
});

const blackPenBtn = document.querySelector("#blackPen");
blackPenBtn.style.border = "3px solid #ea5455";
blackPenBtn.addEventListener("click", (e) => {
  colorChoice = "black";
  addBtnBorder(e);
});

const eraserBtn = document.querySelector("#eraserPen");
eraserBtn.addEventListener("click", (e) => {
  colorChoice = "#f9f5eb";
  addBtnBorder(e);
});

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

function addBtnBorder(e) {
  const redBorder = "3px solid #ea5455";
  const blueBorder = "3px solid #002b5b";

  if (e.target.id === "colorChooser") {
    chooseColorBtn.style.border = redBorder;
    eraserBtn.style.border = blueBorder;
    blackPenBtn.style.border = blueBorder;
  } else if (e.target.id === "blackPen") {
    chooseColorBtn.style.border = blueBorder;
    eraserBtn.style.border = blueBorder;
    blackPenBtn.style.border = redBorder;
  } else if (e.target.id == "eraserPen") {
    chooseColorBtn.style.border = blueBorder;
    eraserBtn.style.border = redBorder;
    blackPenBtn.style.border = blueBorder;
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
