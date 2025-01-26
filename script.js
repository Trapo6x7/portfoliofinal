const div1 = document.querySelector("#toggleDiv1");
div1.addEventListener("click", toggleDiv1);
const div2 = document.querySelector("#toggleDiv2");
// div2.querySelector("#toggleDiv2").addEventListener("click", toggleDiv2);
const div3 = document.querySelector("#toggleDiv3");
// div3.querySelector("#toggleDiv3").addEventListener("click", toggleDiv3);
const div4 = document.querySelector("#toggleDiv4");
// div4.querySelector("#toggleDiv4").addEventListener("click", toggleDiv4);

const divHide1 = document.querySelector(".none1");
const divHide2 = document.querySelector(".none2");
const divHide3 = document.querySelector(".none3");
const divHide4 = document.querySelector(".none4");
const open1 = document.querySelector("#open1");
const bw = document.querySelector("#bigwindow");
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
}

// function toggleDiv2() {
//   divHide2.forEach(element => {
//     element.classList.toggle("block");
//   });
// }

// function toggleDiv3() {
//   divHide3.forEach(element => {
//     element.classList.toggle("block");
//   });
// }

// function toggleDiv4() {
//   divHide4.forEach(element => {
//     element.classList.toggle("block");
//   });
// }
// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }



