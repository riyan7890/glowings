// JavaScript for interactive features in your website

// 1. Mobile Menu Toggle
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
  });
}

// 2. Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// 3. Scroll-to-Top Button
const scrollToTopBtn = document.querySelector('#scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// 4. Hero Section Carousel (if applicable)
const carousel = document.querySelector('#hero-carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

if (carousel && slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('hidden');
  }, 5000); // Change every 5 seconds
}

// 5. Form Validation
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');

    if (!name.value || !email.value || !message.value) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    alert('Form submitted successfully!');
    contactForm.reset();
  });
}

// 6. Animate Elements on Scroll (e.g., using Intersection Observer)
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
});

animatedElements.forEach(el => observer.observe(el));
