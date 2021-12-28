let text = document.getElementById("text");
let speed = document.getElementById("speed");
let output = document.querySelector(".output");
let index = 1;

document.querySelector(".enter").addEventListener("click", () => {
  printText();

  function printText() {
    output.innerText = text.value.slice(0, index);
    index == text.value.length ? (index = 1) : index++;
    setTimeout(printText, 1000 / speed.value);
  }
});
