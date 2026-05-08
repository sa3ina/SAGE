// Hide loader when page loads
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
  }
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