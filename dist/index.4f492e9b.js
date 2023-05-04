// import 'bootstrap';
// navbar change color when scrolled down
const navbar = document.querySelector(".navbar");
// listen to the scroll event on the window
window.addEventListener("scroll", ()=>{
    // get the current scroll position
    const scrollPosition = window.scrollY;
    // add the 'scrolled' class to the navbar if the user has scrolled down
    if (scrollPosition > 0) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("border-bottom");
    } else {
        // remove the 'scrolled' class if the user has scrolled back to the top
        navbar.classList.remove("scrolled");
        navbar.classList.add("border-bottom");
    }
});

//# sourceMappingURL=index.4f492e9b.js.map
