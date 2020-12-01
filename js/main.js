$(function () {
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

let burger = document.querySelector(".burger__burger");
let nav = document.querySelector(".header__menu-container");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("nav_active");
});
