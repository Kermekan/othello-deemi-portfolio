// menu button Slider =========
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

// Variable to display messages in the DOM
const textDisplay = document.getElementById("typewriter");
// The array that holds the phrases
const phrases = [
    `and I'm a Web Developer `,
     `I love Coding `,
];

// Out loop iterator
let i = 0; 
// Inner loop iterator
let j = 0;
// Holds each letter of current phrase
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
        // Delete speed
        const spedUp = Math.random() * (80 - 50) + 50;
        // type speed
        const typeSpeed = Math.random() * (250 - 300) + 200;
        const time = isEnd ? 2000 : isDeleting ? spedUp : typeSpeed;
        setTimeout(loop, time)
    }
}
loop();

// back-to-top button scroll =========
const $btn = $("#top-btn");

$(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
        $btn.removeClass("hidden");
    } else {
        $btn.addClass("hidden")
    }
})

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
const contactForm = document.querySelector("#contactForm");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const emailRegEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let formIsValid = false;

// validate contact form
contactForm.addEventListener( "submit", (e) => {
    // Error Messages
    let messages = [];
    let errors = document.querySelector(".error-messages")
    let errorList = document.querySelector(".error-messages-list")
    
    errors.innerHTMl = ``
        // First name
        if (firstName.value.length < 3) {
            e.preventDefault();
            messages.push('First Name is required')
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

// Carousel =========
const slider = document.querySelector(".portfolio-carousel")
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".portfolio-slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;

// Slide image on nextBtn click
nextBtn.addEventListener("click", () => {
    // Remove active class from previous slide
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    });
    
    // increment iterator
    slideNumber++;
    
    // go to next slide
    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

// Slide image on prevBtn click
prevBtn.addEventListener("click", () => {
    // Remove active class from previous slide
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    });
    
    // increment iterator
    slideNumber--;
    
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }
    
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
}); 

// Autoplay image slider
let playSlider;

let repeater = () => {
    playSlider = setInterval(function () {
        // Remove active class from previous slide
        slides.forEach((slide) => {
            slide.classList.remove("active")
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active")
        });
    
        // increment iterator
        slideNumber++;
    
        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    },4000);
}

repeater();

// Stop autoplay on mouseover
slider.addEventListener("mouseover", () => (
    clearInterval(playSlider)
));

// start autoplay on mouseout
slider.addEventListener("mouseout", () => (
    repeater()
));
    



// console.log(numberOfSlides);






