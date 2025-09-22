// Navbar darken on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Sidebar toggle
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => sidebar.classList.add("active"));
closeBtn.addEventListener("click", () => sidebar.classList.remove("active"));

// Rooms slider (desktop)
const sidebarItems = document.querySelectorAll(".rooms-sidebar li");
const slider = document.querySelector(".rooms-slider");

sidebarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // update active class
    sidebarItems.forEach(li => li.classList.remove("active"));
    item.classList.add("active");

    // move slider
    slider.style.transform = `translateX(-${index * 100}%)`;
  });
});

// Scroll animations
const animateEls = document.querySelectorAll(".animate-on-scroll");
function handleScroll() {
  animateEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // replay animations
    }
  });
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// Navbar scroll background effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
