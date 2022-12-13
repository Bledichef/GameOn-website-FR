/*
------------- Regex ---------------
*/
const regexName = /^[a-zA-ZÀ-ÿ\s_-]{2,60}$/;
const regexEmail = /^[^@\s]{2,30}@[^@\s]{2,30}\.[^@\s]{2,5}$/;
const regexNumber = /^[0-9]+$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// croix pour fermer la modale
const closeButton = document.querySelector(".close");
// bouton formulaire
const buttonSendForm = document.querySelector(".btn-submit");
// champs et checkboxs
const firstnameField = document.getElementById("first");
const lastnameField = document.getElementById("last");
const emailField = document.getElementById("email");
const birthdateField = document.getElementById("birthdate");
const numberTournamentField = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
//tous les boutons radios
const buttonsRadio = document.querySelectorAll(".checkbox-location");

function main() {
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // au click sur la croix appel de la fonction closeModal
  closeButton.addEventListener("click", closeModal);

  // au click sur valider le formulaire appel de fonction verifyForm et submitForm
  buttonSendForm.addEventListener("click", (event) => {
    event.preventDefault();
    verifyForm();
    submitForm();
  });
}

main();

function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fonction pour fermer la modale = passe à display none
function closeModal() {
  modalbg.style.display = "none";
  window.location.reload();
}
