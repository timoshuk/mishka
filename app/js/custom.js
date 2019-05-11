"use strict";

window.onload = function () {
  var menuBtn = document.getElementById("main-nav__btn");
  menuBtn.addEventListener("click", function () {
    this.classList.toggle("open");
  });
};