// =========================
// Mobile Navigation
// =========================


const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");


// Create mobile menu button

const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");

menuButton.innerHTML = "☰";

navbar.insertBefore(menuButton, navLinks);



// Open and close mobile menu

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});




// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});








// =========================
// Scroll Animation
// =========================


const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-image, .menu-card, .gallery-images img, .contact-card"
);



const observer = new IntersectionObserver(

    (entries) => {


        entries.forEach(entry => {


            if(entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },

    {
        threshold: 0.15
    }


);




animatedElements.forEach(element => {

    observer.observe(element);

});








// =========================
// Current Year Footer
// =========================


const footerYear = document.querySelector(".footer p");


const currentYear = new Date().getFullYear();


footerYear.innerHTML =
`© ${currentYear} Savoria Kitchen. All rights reserved.`;