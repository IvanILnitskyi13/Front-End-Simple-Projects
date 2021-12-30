const colorGrey = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-grey"
);
const colorGreyDark = getComputedStyle(
  document.documentElement
).getPropertyValue("--color-grey-dark");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const body = document.querySelector("body");
const boxesHeight = 25;
const boxesWidth = 25;

for (let i = 0; i < boxesHeight; i++) {
  let container = document.createElement("div");
  container.classList.add("container");

  for (let j = 0; j < boxesWidth; j++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", () => setColor(box));
    box.addEventListener("mouseout", () => removeColor(box));
    container.appendChild(box);
  }
  body.appendChild(container);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = colorGrey;
  element.style.boxShadow = `0 0 2px ${colorGreyDark}`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
