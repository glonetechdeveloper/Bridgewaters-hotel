document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const fadeEls = document.querySelectorAll(".fade-in");

  // Navbar darken on scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Fade-in sections
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible"); // reset so animation replays
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Sidebar toggle
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  function handleScroll() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
