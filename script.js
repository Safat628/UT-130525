// ===== Mobile Menu Toggle START =====
const hamburger = document.getElementById("hamburger-menu");
const navContainer = document.querySelector(".nav-container");
const menuOverlay = document.querySelector(".menu-overlay");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navContainer.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

hamburger.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// ===== Mobile Menu Toggle END =====

// ===== Back to Top Button START =====
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("visible", window.pageYOffset > 300);
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  backToTopButton.classList.add("clicked");
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => backToTopButton.classList.remove("clicked"), 1000);
});

// ===== Back to Top Button END =====

// ===== Smooth Scrolling START =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ===== Smooth Scrolling END =====

// ===== Active Nav Link Highlighting START =====
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  document.querySelectorAll("section[id]").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const id = section.getAttribute("id");
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ===== Active Nav Link Highlighting END =====

// ===== Contact Form Handling START =====
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form-2025");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will contact you soon.");
      this.reset();
    });
  }

  // ===== Location switching START =====
  function switchToLocation(location) {
    document
      .querySelectorAll(".map-iframe, .map-btn, .location-card")
      .forEach((el) => {
        el.classList.toggle("active", el.dataset.location === location);
      });
  }

  document.querySelectorAll(".location-card, .map-btn").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      switchToLocation(el.dataset.location);
    });
  });

  // Initialize with Dhaka as default
  switchToLocation("dhaka");
});

// ===== Contact Form Handling END =====

// ===== Dynamic Title Change START =====
document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    home: "UthsoTracer | Home",
    about1: "UthsoTracer | About",
    solution: "UthsoTracer | Solution",
    contact: "UthsoTracer | Contact",
  };

  function updateTitle() {
    let currentSection = "";
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    document.querySelectorAll("section[id]").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    if (currentSection && sections[currentSection]) {
      document.title = sections[currentSection];
    }
  }

  // Listen for scroll events and update the title
  window.addEventListener("scroll", updateTitle);

  // Initial call to set the title correctly when the page loads
  updateTitle();
});
// ===== Dynamic Title Change END =====
