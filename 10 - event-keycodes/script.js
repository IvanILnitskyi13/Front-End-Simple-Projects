const container = document.querySelector(".container");

window.addEventListener("keydown", (event) => {
  removeAllChild(container);

  const map = new Map();
  map.set("event.key", event.key);
  map.set("event.keyCode", event.keyCode);
  map.set("event.code", event.code);

  map.forEach((value, key) => {
    const box = document.createElement("div");
    const small = document.createElement("small");
    small.innerText = `${key}`;
    box.classList.add("box");
    box.innerText = `${value === " " ? "Space" : value}`;
    container.appendChild(box);
    box.appendChild(small);
  });
});

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
