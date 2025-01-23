console.log(document.querySelector("#toggleDiv1"));
document.querySelector("#toggleDiv1").addEventListener("click", toggleDiv1);
console.log(document.querySelector("#toggleDiv2"));
document.querySelector("#toggleDiv2").addEventListener("click", toggleDiv2);
console.log(document.querySelector("#toggleDiv3"));
document.querySelector("#toggleDiv3").addEventListener("click", toggleDiv3);
console.log(document.querySelector("#toggleDiv4"));
document.querySelector("#toggleDiv4").addEventListener("click", toggleDiv4);

const divHide1 = document.querySelectorAll(".none1");
const divHide2 = document.querySelectorAll(".none2");
const divHide3 = document.querySelectorAll(".none3");
const divHide4 = document.querySelectorAll(".none4");

function toggleDiv1() {
  divHide1.forEach(element => {
    element.classList.toggle("block");
  });
}

function toggleDiv2() {
  divHide2.forEach(element => {
    element.classList.toggle("block");
  });
}

function toggleDiv3() {
  divHide3.forEach(element => {
    element.classList.toggle("block");
  });
}

function toggleDiv4() {
  divHide4.forEach(element => {
    element.classList.toggle("block");
  });
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



