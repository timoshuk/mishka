window.onload = () => {
  const menuBtn = document.getElementById("main-nav__btn"),
    navList = document.getElementById("main-nav__list"),
    navLink = document.querySelectorAll(".main-nav__link");

  menuBtn.addEventListener("click", toggleMenu);
  menuBtn.addEventListener("click", toggleMenu);

  //add listener menu limks
  [...navLink].forEach(item => {
    item.addEventListener("click", toggleMenu);
  });

  function toggleMenu() {
    menuBtn.classList.toggle("open");
    navList.classList.toggle("main-nav__list--show");
  }
};
