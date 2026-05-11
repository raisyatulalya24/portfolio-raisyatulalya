// script.js

// ACTIVE SIDEBAR
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});

// BUTTON EFFECT
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

  button.addEventListener("mousemove", (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");

  });

});

// SIMPLE REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.1
});

document.querySelectorAll("section").forEach((el) => {
  observer.observe(el);
});
