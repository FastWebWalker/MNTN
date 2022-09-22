const navbar = document.querySelector(".navbar-parallax__list");
const itemsElements = document.querySelectorAll(".list-navbar__item");
const linksElements = document.querySelectorAll(".list-navbar__link");
const pageBlocks = document.querySelectorAll(".content-block__sub-title");
const scrollDown = document.querySelector(".main-parallax__scroll");
const content = document.querySelector(".content");

scrollDown.addEventListener("click", (e) => {
  content.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
});

navbar.addEventListener("click", (e) => {
  const targetElement = e.target;
  console.log(targetElement);
  if (targetElement == linksElements[1] || targetElement == itemsElements[1]) {
    pageBlocks[0].scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }
  if (targetElement == linksElements[2] || targetElement == itemsElements[2]) {
    pageBlocks[1].scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }
  if (targetElement == linksElements[3] || targetElement == itemsElements[3]) {
    pageBlocks[2].scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }
});
