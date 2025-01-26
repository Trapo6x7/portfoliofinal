const div1 = document.querySelector("#toggleDiv1");
div1.addEventListener("click", toggleDiv1);
const div2 = document.querySelector("#toggleDiv2");
div2.addEventListener("click", toggleDiv2);
const div3 = document.querySelector("#toggleDiv3");
div3.addEventListener("click", toggleDiv3);
const div4 = document.querySelector("#toggleDiv4");
div4.addEventListener("click", toggleDiv4);

const divHide1 = document.querySelector(".none1");
const divHide2 = document.querySelector(".none2");
const divHide3 = document.querySelector(".none3");
const divHide4 = document.querySelector(".none4");
const open1 = document.querySelector("#open1");
const bw = document.querySelector("#bigwindow");
const contener = document.querySelector("#basewindow");
const center1 = document.querySelector("#center1");

function toggleDiv1() {
  divHide1.classList.toggle("block");
  divHide1.classList.toggle("relative");
  div1.classList.toggle("absolute");
  div2.classList.toggle("hide");
  div3.classList.toggle("hide");
  div4.classList.toggle("hide");
  bw.classList.toggle("flex");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow");
}


function toggleDiv2() {
  divHide2.classList.toggle("block");
  divHide2.classList.toggle("relative2");
  div2.classList.toggle("absolute2");
  div1.classList.toggle("hide");
  div3.classList.toggle("hide");
  div4.classList.toggle("hide");
  bw.classList.toggle("flex");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow");
}

function toggleDiv3() {
  divHide3.classList.toggle("block");
  divHide3.classList.toggle("relative");
  div3.classList.toggle("absolute");
  div2.classList.toggle("hide");
  div1.classList.toggle("hide");
  div4.classList.toggle("hide");
  // bw.classList.toggle("flex");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow");
}

function toggleDiv4() {
  divHide4.classList.toggle("block");
  divHide4.classList.toggle("relative");
  div4.classList.toggle("absolute");
  div1.classList.toggle("hide");
  div3.classList.toggle("hide");
  div2.classList.toggle("hide");
  // bw.classList.toggle("flex");
  center1.classList.toggle("justify-center");
  contener.classList.toggle("heightWindow");
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



