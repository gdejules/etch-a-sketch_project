// Initialize DOM nodes
const container = document.querySelector("#container");
let grid = 16;

// Execute loop for creating multiple flexbox grid
function createGrids(grid) {
  for (i = 0; i < grid; i++) {
    // Initialize y-axis div
    const rowContainer = document.createElement("div");
    // Give class name for flexbox setup later in CSS
    rowContainer.setAttribute("class", "row-container");
    container.appendChild(rowContainer);
    for (j = 0; j < grid; j++) {
      // Initialize x-axis div
      const boxContainer = document.createElement("div");
      // Give class name for flexbox setup later in CSS
      boxContainer.setAttribute("class", "box-container");
      rowContainer.appendChild(boxContainer);
    }
  }
}

createGrids(grid);

function updateGridNum() {
  let value = prompt(
    "How much grid squares do you want (inputa number value)?",
    "0",
  );

  Number(value) > 100 ? (grid = grid) : (grid = Number(value));
}

function deleteGrid(grid) {
  for (i = 0; i < grid; i++) {
    const removedDiv = document.querySelector(".row-container");
    container.removeChild(removedDiv);
  }
}

const gridBtn = document.querySelector("button");
gridBtn.addEventListener("click", (e) => {
  deleteGrid(grid);
  updateGridNum();
  console.log(grid);
  createGrids(grid);
});
