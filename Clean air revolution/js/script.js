// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){
            element.classList.add("active");
        }

    });

});

// Smooth Navbar Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }

    });

});

// Floating Hero Glow

const earth = document.querySelector(".earth");

setInterval(() => {

    earth.style.boxShadow =
    `0 0 ${50 + Math.random()*50}px #10b981`;

},1000);

