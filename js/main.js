$(function () {});

let burger = document.querySelector(".burger__burger");
let nav = document.querySelector(".header__menu-container");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("nav_active");
});
