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
/*
fonction qui verifie tous les champs => si tous les champs sont ok, envoi le formulaire et fait afficher message confirmation (+ gestion fermeture de la confirmation au click sur bouton)
*/
function submitForm() {
  //Si tous les champs sont ok
  if (
    checkFirstname() &&
    checkLastname() &&
    checkEmail() &&
    checkBirthdate() &&
    checkDate() &&
    checkNumberTournament() &&
    checkCheckBox() &&
    checkCity()
  ) {
    //on remplace le contenu de la div .modal par le texte
    document.querySelector(".modal").innerHTML =
      "Merci, votre réservation a bien été reçue!";
    // on remplace la valeur du bouton "c'est parti" par "Fermer"
    buttonSendForm.value = "Fermer";

    //au click sur le bouton on appelle la fonction pour fermer la modale
    buttonSendForm.addEventListener("click", closeModal);
  }
}
/*
fonction qui check le champ lastname 
*/
function checkLastname() {
  if (lastnameField.value === "") {
    document.getElementById("error-lastname").innerHTML =
      "Ce champ doit être rempli";
  } else if (!regexName.test(lastnameField.value.trim())) {
    document.getElementById("error-lastname").innerHTML =
      "Format incorrect, vous devez renseigner au moins 2 caractères";
  } else {
    document.getElementById("error-lastname").innerHTML = "";
    return true;
  }
}
/*
fonction qui check le champ firstname 
*/
function checkFirstname() {
  if (firstnameField.value === "") {
    document.getElementById("error-firstname").innerHTML =
      "Ce champ doit être rempli";
  } else if (!regexName.test(firstnameField.value.trim())) {
    document.getElementById("error-firstname").innerHTML =
      "Format incorrect, vous devez renseigner au moins 2 caractères";
  } else {
    document.getElementById("error-firstname").innerHTML = "";
    return true;
  }
}
/*
fonction qui check le champ email 
*/
function checkEmail() {
  if (emailField.value === "") {
    document.getElementById("error-email").innerHTML =
      "Ce champ doit être rempli";
  } else if (!regexEmail.test(emailField.value.trim())) {
    document.getElementById("error-email").innerHTML =
      "Votre adresse mail n'est pas valide";
  } else {
    document.getElementById("error-email").innerHTML = "";
    return true;
  }
}
