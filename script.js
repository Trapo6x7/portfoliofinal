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
const containerFixedHeight = 550;

// Appliquer une hauteur fixe au conteneur
contener.style.height = `${containerFixedHeight}px`;

// Fonction générique pour gérer les toggles
function toggleDiv(divKey) {
  const currentDiv = divs[divKey];
  const otherDivKeys = Object.keys(divs).filter((key) => key !== divKey);

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

  currentDiv.classList.toggle("absolute");

  otherDivKeys.forEach((key) => {
    divs[key].classList.toggle("hide");
  });

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

  voirPlusElements.forEach((element) => {
    element.classList.toggle("voirplus");
  });
}

// Ajout des écouteurs d'événements
divs.div1.addEventListener("click", () => toggleDiv("div1"));
divs.div3.addEventListener("click", () => toggleDiv("div3"));
divs.div4.addEventListener("click", () => toggleDiv("div4"));

// Fonction pour centrer la fenêtre
const centerWindow = () => {
  contener.style.left = "50%";
  contener.style.top = "50%";
  contener.style.transform = "translate(-50%, -50%)";
};

// Désactiver le déplacement sur mobile (écrans < 768px)
if (window.innerWidth < 768) {
  contener.style.left = "50%";
  contener.style.top = "30%";
  contener.style.transform = "translate(-50%, -50%)";
}

// DRAG ET RESIZE AVEC BLOCAGE PENDANT LE REDIMENSIONNEMENT
let offsetX = 0,
  offsetY = 0,
  isDragging = false,
  isResizing = false;

// Détecter si on attrape la zone de resize (en bas à droite)
contener.addEventListener("mousedown", (e) => {
  const isResizeZone = e.offsetX > contener.clientWidth - 15 && e.offsetY > contener.clientHeight - 15;

  if (isResizeZone) {
    isResizing = true;
    return;
  }

  isDragging = true;
  const rect = contener.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  contener.style.cursor = "grabbing";
});

// Déplacement du conteneur
document.addEventListener("mousemove", (e) => {
  if (isDragging && !isResizing) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    const maxX = window.innerWidth - contener.clientWidth;
    const maxY = window.innerHeight - contener.clientHeight;

    newX = Math.max(-contener.clientWidth / 2, Math.min(newX, maxX));
    newY = Math.max(-contener.clientHeight / 2, Math.min(newY, maxY));

    contener.style.left = `${newX}px`;
    contener.style.top = `${newY}px`;
    contener.style.transform = "none";
  }
});

// Arrêter le drag et le resize
document.addEventListener("mouseup", () => {
  isDragging = false;
  isResizing = false;
  contener.style.cursor = "grab";
});

// Détection du redimensionnement via MutationObserver
const resizeObserver = new ResizeObserver(() => {
  isResizing = true;
  setTimeout(() => (isResizing = false), 100);
});

resizeObserver.observe(contener);

// Replacer au centre si la fenêtre est redimensionnée
window.addEventListener("resize", centerWindow);

// Placer au centre au chargement
centerWindow();

// Bouton de fermeture
const closeButton = document.querySelector(".button.close.hidingDiv");

closeButton.addEventListener("click", () => {
  contener.classList.add("hide");
});

// Afficher/masquer la fenêtre via une image
const imgDossier = document.querySelector(".imgdossier");

imgDossier.addEventListener("click", () => {
  contener.classList.toggle("hide");
  if (!contener.classList.contains("hide")) {
    setTimeout(centerWindow, 10);
  }
});
