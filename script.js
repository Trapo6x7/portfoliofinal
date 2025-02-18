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

document.addEventListener("DOMContentLoaded", () => {
  const draggable = document.querySelector(".draggable");
  let offsetX = 0, offsetY = 0, isDragging = false;

  // Fonction pour centrer la fenêtre
  const centerWindow = () => {
      const centerX = (window.innerWidth - draggable.clientWidth) / 2;
      const centerY = (window.innerHeight - draggable.clientHeight) / 2;
      draggable.style.left = `${centerX}px`;
      draggable.style.top = `${centerY}px`;
  };

  // Désactiver le déplacement sur mobile (écrans < 768px)
  if (window.innerWidth < 768) return;

  draggable.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - draggable.offsetLeft;
      offsetY = e.clientY - draggable.offsetTop;
      draggable.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      const maxX = window.innerWidth - draggable.clientWidth;
      const maxY = window.innerHeight - draggable.clientHeight;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      draggable.style.left = `${newX}px`;
      draggable.style.top = `${newY}px`;
  });

  document.addEventListener("mouseup", () => {
      isDragging = false;
      draggable.style.cursor = "grab";
  });

  // Replacer au centre si la fenêtre est redimensionnée
  window.addEventListener("resize", centerWindow);

  // Placer au centre au chargement
  centerWindow();
});

// Sélection du bouton de fermeture
const closeButton = document.querySelector(".button.close.hidingDiv");

// Ajout de l'événement au bouton pour cacher la fenêtre
closeButton.addEventListener("click", () => {
  basewindow.classList.add("hide");
});

// Sélection de l'image
const imgDossier = document.querySelector(".imgdossier");

// Ajout de l'événement au clic sur l'image pour enlever la classe hide
imgDossier.addEventListener("click", () => {
  basewindow.classList.toggle("hide");
});