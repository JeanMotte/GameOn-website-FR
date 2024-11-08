import "./form.js";
import "./functions.js";

// DOM Elements
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelector(".close");

// launch and close modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

export function launchModal() {
  modalbg.style.display = "block";
  modalbg.classList.remove("closing");

  document.getElementById("first").focus();
}

export function closeModal() {
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
      class="btn-style button close-btn"
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




