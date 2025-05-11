const gridContainer = document.getElementById("gridContainer");
const colorPicker = document.getElementById("colorPicker");
const gridSizeInput = document.getElementById("gridSize");
const resetBtn = document.getElementById("reset");
const eraserBtn = document.getElementById("eraser");
const rainbowBtn = document.getElementById("rainbowMode");

let currentMode = "color";
let currentColor = colorPicker.value;

function createGrid(size) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.addEventListener("mouseover", paint);
    gridContainer.appendChild(square);
  }
}

function paint(e) {
  if (currentMode === "color") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraser") {
    e.target.style.backgroundColor = "";
  } else if (currentMode === "rainbow") {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
}

colorPicker.addEventListener("input", () => {
  currentColor = colorPicker.value;
  currentMode = "color";
});

resetBtn.addEventListener("click", () => {
  createGrid(gridSizeInput.value);
});

gridSizeInput.addEventListener("change", () => {
  let size = gridSizeInput.value;
  if (size > 64) size = 64;
  if (size < 2) size = 2;
  createGrid(size);
});

eraserBtn.addEventListener("click", () => {
  currentMode = "eraser";
});

rainbowBtn.addEventListener("click", () => {
  currentMode = "rainbow";
});

createGrid(gridSizeInput.value);
