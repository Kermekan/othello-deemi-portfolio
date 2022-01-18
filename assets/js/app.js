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
const form = document.getElementById("contact-form");
const validInput = document.querySelectorAll(".input");
const errorHint = document.querySelector(".error-hint");

// Input names
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

const inputFields = [name, ]

console.log(phone);




// prevent page refresh on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    alert("Submitted");
});










