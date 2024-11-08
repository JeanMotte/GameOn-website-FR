// Form selectors
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const termsChecked = document.getElementById("checkbox1");
const locationChecked = document.querySelectorAll('input[name="location"]');
const errorMessages = document.querySelectorAll(".error-message");

// Error message selectors
const firstNameError = document.getElementById("alert-first-name");
const lastNameError = document.getElementById("alert-last-name");
const emailError = document.getElementById("alert-email");

errorMessages.forEach((message) => {
    message.style.display = "none";
})

// inputs checks

const checkNameField = (element) => {
    // Regex to check for at least two letters and no special characters
    const validPattern = /^[a-zA-Z]{2,}$/;

    if (!validPattern.test(element.value)) {
        element.style.borderColor = "red";
        element.style.fontSize = "20px";
        
        // Display the appropriate error message
        if (element === firstName) 
            firstNameError.style.display = "block";
        if (element === lastName) 
            lastNameError.style.display = "block";
    } else {
        element.style.borderColor = "";
        
        // Hide error messages
        if (element === firstName) 
            firstNameError.style.display = "none";
        if (element === lastName) 
            lastNameError.style.display = "none";
    }
};

const checkEmailField = () => {
    const validPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!validPattern.test(email.value)) {
        email.style.borderColor = "red";
        email.style.fontSize = "20px";
        emailError.style.display = "block";
    } else {
        email.style.borderColor = "";
        emailError.style.display = "none";
    }
}

firstName.addEventListener("input", () => checkNameField(firstName));
lastName.addEventListener("input", () => checkNameField(lastName));
email.addEventListener("input", checkEmailField);


function validate(event) {
  event.preventDefault()

  // Error messages
  if (firstName.length < 2) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    return false
  }

  if (lastName.length < 2) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom, sans caractère spécial.")
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
    alert("Vous devez choisir une option.")
    return false
  }

  if (!termsChecked) {
    alert("Vous devez vérifier que vous acceptez les termes et conditions.")
    return false
  }

  if (!birthdate) {
    alert("Vous devez entrer votre date de naissance.")
    return false
  }

  // Display success message
  showSuccessMessage()
  return false // Prevents the default form submission for demonstration
}