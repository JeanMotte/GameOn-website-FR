function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.classList.remove("closing");

  document.getElementById("first").focus();
}

// close modal form
function closeModal() {
  modalbg.classList.add("closing");
  setTimeout(() => {
    modalbg.style.display = "none";
    modalbg.classList.remove("closing");
  }, 800);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalbg.style.display === "block") {
    closeModal()
  }
})

// Form validation

function validate() {
  // Retrieve field values
  const firstName = document.getElementById("first").value.trim();
  const lastName = document.getElementById("last").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const termsChecked = document.getElementById("checkbox1").checked;
  const locationChecked = document.querySelector('input[name="location"]:checked');

  // Error messages
  if (firstName.length < 2) {
    alert("Prénom doit contenir au moins 2 caractères.")
    return false
  }

  if (lastName.length < 2) {
    alert("Nom doit contenir au moins 2 caractères.")
    return false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    alert("Veuillez entrer un e-mail valide.")
    return false
  }

  if (quantity === "" || isNaN(quantity)) {
    alert("Veuillez entrer un nombre pour la quantité.")
    return false
  }

  if (!locationChecked) {
    alert("Veuillez sélectionner une localisation.")
    return false
  }

  if (!termsChecked) {
    alert("Vous devez accepter les conditions d'utilisation.")
    return false
  }

  // Display success message
  showSuccessMessage()
  return false // Prevents the default form submission for demonstration
}

function showSuccessMessage() {
  const modalBody = document.querySelector(".modal-body");
  modalBody.style.height = "90vh";
  modalBody.style.display = "flex";
  modalBody.style.flexDirection = "column";
  modalBody.style.alignItems = "center";
  modalBody.style.justifyContent = "center";
  modalBody.style.position = "relative";

  // Hide form elements
  modalBody.innerHTML = `
    <p class="success-message">Merci pour votre inscription</p>
    <input
      class="btn-submit button close-btn"
      type="submit"
      value="Fermer"
    />
  `;

  // Retain the close functionality for the modal
  const closeBtn = document.querySelector(".close");
  const closeBtn2 = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeModal);
  closeBtn2.addEventListener("click", closeModal);
}




