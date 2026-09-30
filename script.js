// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Nav border on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveal with IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section, .hero-inner, .contact-section').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});
