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

function drawOnGrid(square) {
  square.classList.add("draw");
}

createGrid(64);
