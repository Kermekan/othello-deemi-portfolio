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





