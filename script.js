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


document.addEventListener("DOMContentLoaded", () => {
  const draggable = document.querySelector(".draggable");
  let offsetX = 0, offsetY = 0, isDragging = false;

  // Fonction pour centrer la fenêtre
  const centerWindow = () => {
    draggable.style.left = "50%";
    draggable.style.top = "50%";
    draggable.style.transform = "translate(-50%, -50%)"; 
};

// Désactiver le déplacement sur mobile (écrans < 768px)
if (window.innerWidth < 768) {
  baseWindow.style.left = "50%";
  baseWindow.style.top = "30%";
  baseWindow.style.transform = "translate(-50%, -50%)";
  return;
}

draggable.addEventListener("mousedown", (e) => {
  isDragging = true;

  // Récupérer la position réelle de l'élément
  const rect = draggable.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  draggable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let newX = e.clientX - offsetX;
  let newY = e.clientY - offsetY;

  const maxX = window.innerWidth - draggable.clientWidth;
  const maxY = window.innerHeight - draggable.clientHeight;

  // Autoriser à dépasser de moitié
  newX = Math.max(-draggable.clientWidth / 2, Math.min(newX, maxX));
  newY = Math.max(-draggable.clientHeight / 2, Math.min(newY, maxY));

  // Appliquer la position
  draggable.style.left = `${newX}px`;
  draggable.style.top = `${newY}px`;
  draggable.style.transform = "none"; // Désactiver le centrage précédent
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

imgDossier.addEventListener("click", () => {
  basewindow.classList.toggle("hide");
  if (!basewindow.classList.contains("hide")) {
    setTimeout(centerWindow, 10); // Petit délai pour s'assurer que la div est affichée avant le centrage
  }
});