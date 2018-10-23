const burger = document.querySelector(".burger");
const icoBurger = document.querySelector(".fa-bars");
const icoX = document.querySelector(".fa-times");
const aside = document.querySelector("aside");

burger.addEventListener("click", () => {
  console.log("ok");
  icoBurger.classList.toggle("show");
  aside.classList.toggle("show");
  icoX.classList.toggle("show");
  burger.classList.toggle("active");
});
