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








