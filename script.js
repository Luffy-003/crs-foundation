console.log("CRS Foundation Website Loaded");
const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}, 4000);
function toggleMenu() {
    document
        .getElementById("navbar")
        .classList
        .toggle("show");
}