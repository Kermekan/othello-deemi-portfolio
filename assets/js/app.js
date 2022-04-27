/* --------------------------- Menu Button Toggle --------------------------- */
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

/* --------------------------- Back To Top Button --------------------------- */
const $btn = $("#top-btn");

$(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
        $btn.removeClass("hidden");
    } else {
        $btn.addClass("hidden")
    }
})






