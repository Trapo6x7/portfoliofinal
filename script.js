const div1 = document.querySelector("#toggleDiv1");
div1.addEventListener("click", toggleDiv1);
const div3 = document.querySelector("#toggleDiv3");
div3.addEventListener("click", toggleDiv3);
const div4 = document.querySelector("#toggleDiv4");
div4.addEventListener("click", toggleDiv4);

const divHide1 = document.querySelectorAll(".none1");
const divHide3 = document.querySelectorAll(".none3");
const divHide4 = document.querySelectorAll(".none4");
const open1 = document.querySelector("#open1");
const contener = document.querySelector("#basewindow");
const center1 = document.querySelector("#center1");
const windowContent = document.querySelector('.window2__content');

function toggleDiv1() {
  divHide1.forEach(element => {
    element.classList.toggle("block");
    element.classList.toggle("relative");
  });
  div1.classList.toggle("absolute");
  div3.classList.toggle("hide");
  div4.classList.toggle("hide");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow3");
}

function toggleDiv3() {
  divHide3.forEach(element => {
    element.classList.toggle("block");
    element.classList.toggle("relative");
  });
  div3.classList.toggle("absolute");
  div1.classList.toggle("hide");
  div4.classList.toggle("hide");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow3");
}

function toggleDiv4() {
  divHide4.forEach(element => {
    element.classList.toggle("block");
    element.classList.toggle("relative");
  });
  div4.classList.toggle("absolute");
  div1.classList.toggle("hide");
  div3.classList.toggle("hide");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow3");
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
