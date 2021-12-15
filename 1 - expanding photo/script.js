const elements = document.querySelectorAll(".photo");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    removeActiveClasses();
    element.classList.add("active");
  });
});

function removeActiveClasses() {
  elements.forEach((box) => {
    box.classList.remove("active");
  });
}
