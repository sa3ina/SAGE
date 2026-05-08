// Hide loader when page loads
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
  }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Create overlay element
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navToggle.classList.remove('active');
  navLinks.classList.remove('open');
  overlay.classList.remove('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
const contactBtn = document.getElementById('contact-trigger');
const contactSection = document.getElementById('contact');

contactBtn.addEventListener('click', function() {
    // This toggles the 'is-visible' class on and off
    contactSection.classList.toggle('is-visible');

    // Optional: Smoothly scroll to the section when it opens
    if (contactSection.classList.contains('is-visible')) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        contactBtn.textContent = "Close Contact"; // Change button text
    } else {
        contactBtn.textContent = "Get in Touch"; // Revert button text
    }
});
contactSection.scrollIntoView({ behavior: 'smooth' });