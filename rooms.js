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




document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  const nav = document.querySelectorAll(".carousel-nav span");
  let currentIndex = 0;
  let interval = setInterval(nextSlide, 4000); // Auto slide every 4s

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
      nav[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % items.length;
    showSlide(newIndex);
  }

  // Manual navigation
  nav.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(interval); // stop auto-scroll when manually clicked
      showSlide(i);
      interval = setInterval(nextSlide, 4000); // restart auto-scroll
    });
  });

  // Start with first slide
  showSlide(0);
});
