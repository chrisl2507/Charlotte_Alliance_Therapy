// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
  });

  // Close when a link is clicked (single-page feel)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll shadow on navbar
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}
