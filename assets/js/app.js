// menu button =========
const menuBtn = document.querySelector("#menu-btn");
const mobileSidebar = document.querySelector(".sidebar-sm");
let menuOpen = false;

// menuBtn click
menuBtn.addEventListener("click", () => {
   if(!menuOpen) {
       // add open class
       menuBtn.classList.add("open");
       mobileSidebar.classList.add("open")
       menuOpen = true;
   } else {
        //remove open class
        menuBtn.classList.remove("open");
        mobileSidebar.classList.remove("open");
        menuOpen = false;
   }
});

// Typewriter =========
const textDisplay = document.getElementById("typewriter");
const phrases = [
    `and I'm a Web Developer `,
     `I love Coding `,
];

let i = 0;
let j = 0;
let typewriter = [];
let isDeleting = false
isEnd = false;

// Type Sentence
function loop () {
    isEnd = false;
    
    // display text on screen
    textDisplay.innerHTML = typewriter.join("");
    
    if (i < phrases.length) {
        // add letter
        if (!isDeleting && j <= phrases[i].length) {
            typewriter.push(phrases[i][j]);
            j++
            // console.log("add a letter", j);
        }
        
        // remove letter
        if (isDeleting && j <= phrases[i].length) {
            typewriter.pop(phrases[i][j]);
            j--
            // console.log("remove a letter", j);
        }
        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }
        
        // type next word
        if (isDeleting && j === 0) {
            typewriter = []
            isDeleting = false
            i++
            
            // start from first phrase
            if (i == phrases.length) {
                i = 0 
            }
        }
        // change type speed
        const spedUp = Math.random() * (80 - 50) + 50;
        const typeSpeed = Math.random() * (250 - 300) + 200;
        const time = isEnd ? 2000 : isDeleting ? spedUp : typeSpeed;
        setTimeout(loop, time)
    }
}
loop();

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
    // Error Messages
    let messages = [];
    let errors = document.querySelector(".error-messages")
    let errorList = document.querySelector(".error-messages-list")
    
    errors.innerHTMl = ``
        // First name
        if (firstName.value.length === 0) {
            e.preventDefault();
            messages.push('First Name is required')
            firstName.classList.add('error')
            formIsValid = false
        } else {
            firstName.classList.remove('error')
            formIsValid = true
        }
        
        // Last Name
        if (lastName.value.length === 0) {
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
        if (subject.value.length === 0) {
            e.preventDefault();
            messages.push('Subject is required')
            subject.classList.add('error')
            formIsValid = false
        } else {
            subject.classList.remove('error')
            formIsValid = true
        }
        
        // Messages
        if (messageInput.value.length === 0) {
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



// console.log(errors);






