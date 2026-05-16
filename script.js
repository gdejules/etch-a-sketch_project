// Initialize DOM nodes
const container = document.querySelector("#container");

// Execute loop for creating multiple flexbox grid
for (i = 0; i < 16; i++) {
  // Initialize y-axis div
  const rowContainer = document.createElement("div");
  // Give class name for flexbox setup later in CSS
  rowContainer.setAttribute("class", "row-container");
  container.appendChild(rowContainer);
  for (j = 0; j < 16; j++) {
    // Initialize x-axis div
    const boxContainer = document.createElement("div");
    // Give class name for flexbox setup later in CSS
    boxContainer.setAttribute("class", "box-container");
    rowContainer.appendChild(boxContainer);
  }
}
