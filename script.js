// Navbar background darken on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Open sidebar
hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  sidebar.style.right = "0";
});

// Close sidebar with X
closeBtn.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.style.right = "-250px";
});


// Background carousel
const hero = document.getElementById("hero");
const desktopImages = ["images/desktop1.jpg","images/desktop2.jpg","images/desktop3.jpg"];
const mobileImages = ["images/mobile1.jpg","images/mobile2.jpg","images/mobile3.jpg"];

let currentIndex = 0;
function updateBackground() {
  const images = window.innerWidth <= 768 ? mobileImages : desktopImages;
  hero.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}
updateBackground();
setInterval(updateBackground, 3000);

// Replay fade-up animation on scroll
const faders = document.querySelectorAll(".fade-up");
const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.2 }
);
faders.forEach((el) => {
  appearOnScroll.observe(el);
});







function startCarousel(containerSelector) {
  const slides = document.querySelectorAll(`${containerSelector} img`);
  let index = 0;

  if (slides.length > 0) {
    slides[0].style.opacity = 1; // show first slide
  }

  setInterval(() => {
    slides[index].style.opacity = 0;
    index = (index + 1) % slides.length;
    slides[index].style.opacity = 1;
  }, 3000);
}

// Start both desktop and mobile carousels
startCarousel(".desktop-slides");
startCarousel(".mobile-slides");


// Room carousels
document.querySelectorAll(".room-carousel").forEach((carousel) => {
  const slides = carousel.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;
  let startX = 0;
  let currentX = 0;

  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  // Auto-slide
  setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
  }, 3000);

  // Swipe for mobile
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (e) => {
    currentX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    if (startX - currentX > 50) {
      // swipe left
      index = (index + 1) % images.length;
      showSlide(index);
    } else if (currentX - startX > 50) {
      // swipe right
      index = (index - 1 + images.length) % images.length;
      showSlide(index);
    }
  });
});




// Feature carousels (pool & events)
document.querySelectorAll(".feature-carousel").forEach((carousel) => {
  const slides = carousel.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  let index = 0;
  let startX = 0;
  let currentX = 0;

  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  // Auto-slide
  setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
  }, 3000);

  // Swipe for mobile
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (e) => {
    currentX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", () => {
    if (startX - currentX > 50) {
      index = (index + 1) % images.length;
      showSlide(index);
    } else if (currentX - startX > 50) {
      index = (index - 1 + images.length) % images.length;
      showSlide(index);
    }
  });
});


// Fade-up animation replay


// Make overlay toggle on mobile tap
document.querySelectorAll(".nearby-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector(".nearby-overlay")
        .classList.toggle("visible");
  });
});
