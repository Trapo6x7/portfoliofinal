// Sélection des éléments
const divs = {
  div1: document.querySelector("#toggleDiv1"),
  div3: document.querySelector("#toggleDiv3"),
  div4: document.querySelector("#toggleDiv4"),
};

const divHides = {
  div1: document.querySelectorAll(".none1"),
  div3: document.querySelectorAll(".none3"),
  div4: document.querySelectorAll(".none4"),
};

const navs= {
  nav1 : document.querySelector('#about'),
  nav2 : document.querySelector('#projects'),
  nav3 : document.querySelector('#experience'),
}

console.log(navs);

const plusIcons = document.querySelectorAll(".fa-plus");
const voirPlusElements = document.querySelectorAll(".voirplus");
const contener = document.querySelector("#basewindow");
const center1 = document.querySelector("#center1");

// Taille fixe du conteneur
const containerFixedHeight = 500; // Exemple : 500px

// Appliquer une hauteur fixe au conteneur
contener.style.height = `${containerFixedHeight}px`;

// Fonction générique pour gérer les toggles
function toggleDiv(divKey) {
  const currentDiv = divs[divKey];
  const otherDivKeys = Object.keys(divs).filter((key) => key !== divKey);

  // Animation GSAP pour afficher/masquer les divs
  gsap.to(divHides[divKey], {
    duration: 0.05,
    opacity: (index, target) => (target.classList.contains("block") ? 0 : 1),
    onComplete: () => {
      divHides[divKey].forEach((element) => {
        element.classList.toggle("block");
        element.classList.toggle("relative");
      });
    },
  });

  // Mise à jour des classes pour le div actuel
  currentDiv.classList.toggle("absolute");

  // Masquer les autres divs
  otherDivKeys.forEach((key) => {
    divs[key].classList.toggle("hide");
  });

  // Mise à jour des classes pour les éléments globaux
  center1.classList.toggle("justify-center");

  // Mise à jour des icônes avec GSAP
  gsap.to(plusIcons, {
    duration: 0.05,
    rotation: (index, target) => (target.classList.contains("fa-plus") ? 45 : 0),
    onComplete: () => {
      plusIcons.forEach((icon) => {
        icon.classList.toggle("fa-minus");
        icon.classList.toggle("fa-plus");
      });
    },
  }); 

   // Mise à jour des éléments "voir plus"
  voirPlusElements.forEach((element) => {
    element.classList.toggle("voirplus");
  });
}

// Ajout des écouteurs d'événements
divs.div1.addEventListener("click", () => toggleDiv("div1"));
divs.div3.addEventListener("click", () => toggleDiv("div3"));
divs.div4.addEventListener("click", () => toggleDiv("div4"));

navs.nav1.addEventListener("click", () => toggleDiv("div1"));
navs.nav2.addEventListener("click", () => toggleDiv("div3"));
navs.nav3.addEventListener("click", () => toggleDiv("div4"));