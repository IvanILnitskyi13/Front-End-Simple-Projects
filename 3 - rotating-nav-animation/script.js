const menuButton = document.querySelector(".menu-btn-container");
const container = document.querySelector(".container");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("btn-rotate");
  container.classList.toggle("container-rotate");
  navigation.classList.toggle("navigation-show");
});
