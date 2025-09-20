(() => {
  const ascii = document.querySelector('.ascii');
  const enterLink = document.querySelector('.enter-row .btn');
  if (!ascii || !enterLink) return;

  const full = ascii.textContent;
  ascii.textContent = '';

  let i = 0;
  const step = () => {
    i += 2;
    ascii.textContent = full.slice(0, i);
    if (i < full.length) requestAnimationFrame(step);
  };
  setTimeout(() => requestAnimationFrame(step), 120);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') enterLink.click();
  });
})();

(() => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '40px' });
  els.forEach((el) => io.observe(el));
})();
