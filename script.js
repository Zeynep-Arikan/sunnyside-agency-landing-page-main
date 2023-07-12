const Menu = document.querySelector(".fa-solid");
const hiddenMenu = document.querySelector(".menu-section");

Menu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("shown");
});