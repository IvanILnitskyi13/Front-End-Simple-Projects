const contents = document.querySelectorAll(".content");

window.addEventListener("scroll", showContent);

showContent();

function showContent() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  contents.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < triggerBottom && box.classList.add("show");
  });
}
