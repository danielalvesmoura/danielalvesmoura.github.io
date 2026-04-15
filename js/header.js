const navbar = document.getElementById('navbar');

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_link");

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.3, // quanto da seção precisa estar visível
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
