"use strict";

const burgerMenu = document.querySelector(".icon-menu");
burgerMenu.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
