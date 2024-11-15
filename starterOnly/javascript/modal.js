import "./form.js";

const menu = document.getElementById("menu-item");
menu.addEventListener("click", editNav);

function editNav() {
  var x = document.getElementById("myTopnav");
  x.className = (x.className === "topnav") ? "topnav responsive" : "topnav";
}



// DOM Elements
const modalBtn = document.querySelectorAll(".btn-signup");
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

// close modal
export function closeModal() {
  modalbg.classList.add("closing");
    modalbg.style.display = "none";
    modalbg.classList.remove("closing");
}

const modalSuccess = document.querySelector(".modal-success");
const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector('form');

const closeBtnSuccess = document.querySelectorAll(".close-btn-success");
closeBtnSuccess.forEach(btn => btn.addEventListener("click", () => {
    modalSuccess.style.display = "none"
    formWrapper.style.display = "flex"
    closeModal()
}));

// close form (not success) modal
const closeBtns = document.querySelectorAll(".close");
if (closeBtns) 
    closeBtns.forEach(btn => {btn.addEventListener("click", closeModal);});

 
// escape key closing modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Check if the success modal is visible
    if (modalSuccess.style.display === "flex") {
      form.reset();
      modalSuccess.style.display = "none";
      formWrapper.style.display = "flex";
      closeModal()
    } else if (modalbg.style.display === "block") {
      closeModal();
    }
  }
});
