// Smooth scroll for nav links
document.querySelectorAll('.nav-links a, .hero-actions a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Simple contact form handler (front-end only)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    statusEl.textContent = 'Thank you — your message has been recorded.';
    statusEl.style.color = '#9ca3af';
    form.reset();
  });
}
