function createGrid(size) {
  const gridContainer = document.querySelector("#gridContainer");

  //hardcoded for now... change to variable when need to make bigger grid
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

createGrid(16);
