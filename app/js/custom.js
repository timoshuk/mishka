"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  var menuBtn = document.getElementById("main-nav__btn"),
      navList = document.getElementById("main-nav__list"),
      navLink = document.querySelectorAll(".main-nav__link");
  menuBtn.addEventListener("click", toggleMenu);
  menuBtn.addEventListener("click", toggleMenu); //add listener menu limks

  _toConsumableArray(navLink).forEach(function (item) {
    item.addEventListener("click", toggleMenu);
  });

  function toggleMenu() {
    menuBtn.classList.toggle("open");
    navList.classList.toggle("main-nav__list--show");
  }
};