// Form selectors
const form = document.querySelector('form')
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const termsChecked = document.getElementById("checkbox1");
const location = document.querySelectorAll('input[name="location"]');
const errorMessages = document.querySelectorAll(".error-message");
const modalSuccess = document.querySelector(".modal-success");
const modalBody = document.querySelector(".modal-body");
const formWrapper = document.querySelector(".form-wrapper");

modalSuccess.style.display = "none";

// Error message selectors
const firstNameError = document.getElementById("alert-first-name");
const lastNameError = document.getElementById("alert-last-name");
const emailError = document.getElementById("alert-email");
const birthdateError = document.getElementById("alert-birthdate");
const quantityError = document.getElementById("alert-quantity");
const locationError = document.getElementById("alert-location");
const termsError = document.getElementById("alert-terms");

errorMessages.forEach((message) => {
    message.style.display = "none";
})

// inputs checks

const checkNameField = (element) => {
    // Regex to check for at least two letters and no special characters
    const validPattern = /^[a-zA-Z]{2,}$/;

    if (!validPattern.test(element.value)) {
        element.style.borderColor = "#FF4E60";
        element.style.borderWidth = "2px";
        element.style.fontSize = "20px";
        
        // Display the appropriate error message
        if (element === firstName) 
            firstNameError.style.display = "block";
        if (element === lastName) 
            lastNameError.style.display = "block";
        return false
    } else {
        element.style.borderColor = "";
        
        // Hide error messages
        if (element === firstName) 
            firstNameError.style.display = "none";
        if (element === lastName) 
            lastNameError.style.display = "none";
        return true
    }
};

const checkEmailField = () => {
    const validPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!validPattern.test(email.value)) {
        email.style.borderColor = "#FF4E60";
        email.style.borderWidth = "2px";
        emailError.style.display = "block";
        return false
    } else {
        email.style.borderColor = "";
        emailError.style.display = "none";
        return true
    }
}

const checkBirthdateField = (dateString) => {
    const birthdateDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDifference = today.getMonth() - birthdateDate.getMonth();
    const dayDifference = today.getDate() - birthdateDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0))
        age--;

    if (age < 18 || age >= 100 || dateString === "") {
        birthdate.style.borderColor = "#FF4E60";
        birthdate.style.borderWidth = "2px";
        birthdateError.style.display = "block";
        return false
    } else {
        birthdate.style.borderColor = "";
        birthdateError.style.display = "none"
        return true
    }
}

const checkTournamentQuantity = (element) => {
    if (element.value < 0 || element.value > 100 || element.value === "") {
        element.style.borderColor = "#FF4E60";
        element.style.borderWidth = "2px";
        quantityError.style.display = "block";
        return false
    } else {
        element.style.borderColor = "";
        quantityError.style.display = "none";
        return true
    }
}

const checkLocationField = (locations) => {
    const isChecked = Array.from(locations).some(radioBtn => radioBtn.checked)
    locationError.style.display = isChecked ? "none" : "block"
    return isChecked
};

const checkTermsField = () => {
    if (!termsChecked.checked) {
        termsChecked.style.borderColor = "#FF4E60";
        termsChecked.style.borderWidth = "2px";
        termsError.style.display = "block";
        return false
    } else {
        termsChecked.style.borderColor = "";
        termsError.style.display = "none";
        return true
    }
}

firstName.addEventListener("input", () => checkNameField(firstName));
lastName.addEventListener("input", () => checkNameField(lastName));
email.addEventListener("input", checkEmailField);
birthdate.addEventListener("input", () => checkBirthdateField(birthdate.value));
quantity.addEventListener("input", () => checkTournamentQuantity(quantity));
termsChecked.addEventListener("change", checkTermsField);
location.forEach((element) => {
    element.addEventListener("change", () => checkLocationField(location)); 
    }
);

form.addEventListener("submit", validate);

function validate(event) {
    event.preventDefault()

    const isFirstNameValid = checkNameField(firstName);
    const isLastNameValid = checkNameField(lastName);
    const isEmailValid = checkEmailField();
    const isBirthdateValid = checkBirthdateField(birthdate.value);
    const isQuantityValid = checkTournamentQuantity(quantity);
    const isLocationValid = checkLocationField(location);
    const isTermsValid = checkTermsField();

    // collect user inputs
    const formInputs = {
    "First Name": firstName.value,
    "Last Name": lastName.value,
    "Email": email.value,
    "Birthdate": birthdate.value,
    "Tournament Quantity": quantity.value,
    "Location": Array.from(location)
        .find(radioBtn => radioBtn.checked)?.value,
    "Terms Accepted": termsChecked.checked ? "Yes" : "No",
    };
    
    if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isQuantityValid && isLocationValid && isTermsValid) {
        // Log the user inputs
        console.group("Form Submission");
        console.table(formInputs);
        console.groupEnd();

        // Display the success modal and reset form
        formWrapper.style.display = "none";
        modalSuccess.style.display = "flex";
        form.reset();
    }
}
