// Variables for my form
const contactForm = document.querySelector("#contact-form"),
    firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    email = document.querySelector("#email"),
    subject = document.querySelector("#subject"),
    message = document.querySelector("#message"),
    formSubmit = document.querySelector("#form-submit");
const inputs = document.querySelectorAll(".input");

// // consolfe.log(formSubmit);

// Prevent form submit on page refresh
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

/* ----------------------------- Form Validation ---------------------------- */
let firstNameCounter = false;
let lastNameCounter = false;
let emailCounter = false;
let subjectCounter = false;
let messageCounter = false;

formSubmit.addEventListener('click', (e) => {
    validateForm();
    
    // Prevent Submission if there's errors
    if (firstNameCounter === false 
    || lastNameCounter === false 
    || emailCounter === false 
    || subjectCounter === false 
    || messageCounter === false) {
        function handleForm(e) { e.preventDefault();}
        contactForm.addEventListener('submit', handleForm);
        // consolfe.log('Form not submitted');
    }
});

function validateForm() {
    // consolfe.log("Form Validation");
    // remove whitespace
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    
    // Check if first name is empty
    if (firstNameValue === '') {
        setError(firstName);
        firstNameCounter = false;
        // consolfe.log('First Name is empty');
    } else {
        removeError(firstName);
        firstNameCounter = true;
        // consolfe.log('First Name is not empty');
    }
    
    // Check if last name is empty
    if (lastNameValue === '') {
        setError(lastName);
        lastNameCounter = false;
    } else {
        removeError(lastName);
        lastNameCounter = true;
    }
    
    // Check if email is empty and valid
    if (emailValue === '' || !isEmail(emailValue)) {
        setError(email);
        emailCounter = false;
        // consolfe.log('Email is empty or invalid');
    } else {
        removeError(email);
        emailCounter = true;
        // consolfe.log('Email is not empty and valid');
    }
    
    // Check if subject is empty
    if (subjectValue === '') {
        setError(subject);
        subjectCounter = false;
    } else {
        removeError(subject);
        subjectCounter = true;
    }
    
    // Check if message is empty
    if (messageValue === '') {
        setError(message);
        messageCounter = false;
    } else {
        removeError(message);
        messageCounter = true;
    }
    
}

// Validation Checks
function setError(input) {
    const inputWrapper = input.parentElement;
    inputWrapper.classList.add('input-error')
}

function removeError(input) {
    const inputWrapper = input.parentElement;
    inputWrapper.classList.remove('input-error')
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* -------------------------- Form Inputs animation ------------------------- */

// Placeholder doesn't stay after refresh so I removed for later fix
/* inputs.forEach(input => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
});

// Add focus class to input parent when focused
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

// Remove focus class from input parent when clicked off
function blurFunc() {
    let parent = this.parentNode;
    if (this.value =="") {
        parent.classList.remove("focus");
    }
} */











