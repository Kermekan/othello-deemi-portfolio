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

// Vanilla Tilt =========
VanillaTilt.init(document.querySelectorAll(".portflio-card"), {
    max: 10,
    speed: 200
});










