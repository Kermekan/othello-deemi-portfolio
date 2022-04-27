/* -------------------------------- Carousel -------------------------------- */
const slider = document.querySelector(".portfolio-carousel")
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".portfolio-slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
let slideNumber = 0;

// Slide on nextBtn click
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

// Slide on prevBtn click
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

// Autoplay slider
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
