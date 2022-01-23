// Form inputs animation =========
const inputs = document.querySelectorAll(".input");

// Add focus class to .input-container
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

// Remove focus class from .input-container when empty
function blurFunc() {
    let parent = this.parentNode;
    if (this.value =="") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
});

// Form Validation =========
// Variables for my form
const contactForm = document.querySelector("#contactForm"),
    firstName = document.querySelector("#first-name"),
    lastName = document.querySelector("#last-name"),
    email = document.querySelector("#email"),
    subject = document.querySelector("#subject"),
    messageInput = document.querySelector("#message"),
    emailRegEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let formIsValid = false;

// validate contact form
contactForm.addEventListener( "submit", (e) => {
    let messages = [];
    // Error Messages
    let errors = document.querySelector(".error-messages")
    let errorList = document.querySelector(".error-messages-list")
    
    errors.innerHTMl = ``
        // First name
        if (firstName.value.length < 3) {
            e.preventDefault();
            messages.push('Please type at least 3 letters')
            firstName.classList.add('error')
            formIsValid = false
        } else {
            firstName.classList.remove('error')
            formIsValid = true
        }
        
        // Last Name
        if (lastName.value.length < 3) {
            e.preventDefault();
            messages.push('Last Name is required')
            lastName.classList.add('error')
            formIsValid = false
        } else {
            lastName.classList.remove('error')
            formIsValid = true
        }
        
        // Email
        if (email.value.length === 0) {
            e.preventDefault();
            messages.push('Email is required')
            email.classList.add('error')
            formIsValid = false
        } else {
            email.classList.remove('error')
            formIsValid = true
          }
        // Regex
        if (emailRegEX.test(email.value)){
            email.classList.remove('error')
            formIsValid = true
        } else {
            e.preventDefault();
            messages.push('Invalid Email')
            email.classList.add('error')
            formIsValid = false
        }
        
        // Subject
        if (subject.value.length < 5) {
            e.preventDefault();
            messages.push('Subject is required')
            subject.classList.add('error')
            formIsValid = false
        } else {
            subject.classList.remove('error')
            formIsValid = true
        }
        
        // Messages
        if (messageInput.value.length < 10) {
          e.preventDefault();
          messages.push('Message is required')
          message.classList.add('error')
          formIsValid = false
        } else {
            messageInput.classList.remove('error')
            formIsValid = true
        }
        
    // Create list item with text
    messages.forEach(message => {
        // create list element
        let el = document.createElement('li')
        
        el.innerHTML = message
        errorList.append(el)
        errors.style.display = 'block'
        })
});
