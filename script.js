// Récupération de la case à cocher et de la grille d'images

const checkbox = document.querySelector("input[type=checkbox]");
const grid = document.querySelector(".imgGrid");

// Fonction pour récupérer les informations d'un cookie

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

// Récupère la valeur du cookie une fois la page chargée, en fonction de sa valeur, coche automatiquement la case ou non

document.addEventListener("DOMContentLoaded", () => {
  const cookieValue = getCookie("gridPreference");
  if (cookieValue === "alternative") {
    grid?.classList.add("alternative");
    checkbox.checked = true;
  }
});

// Ajoute ou retire la classe de changement à la grille d'images en fonction de la valeur de la case à cocher après chaque clic dessus et crée / modifie le cookie permettant de sauvegarder les préférences de l'utilisateur.

checkbox.addEventListener("click", () => {
  checkbox.checked
    ? grid?.classList.add("alternative")
    : grid?.classList.remove("alternative");
  const days = 7;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    "gridPreference=" +
    (checkbox.checked ? "alternative" : "regular") +
    "; expires=" +
    date.toUTCString() +
    "; path=/";
});
