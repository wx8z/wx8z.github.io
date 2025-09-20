(() => {
  const ascii = document.querySelector('.ascii');
  const enterLink = document.querySelector('.enter-row .btn');
  if (!ascii || !enterLink) return;

  const full = ascii.textContent;
  ascii.textContent = '';

  let i = 0;
  const step = () => {
    i += Math.random() > 0.7 ? 3 : 2;
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

(() => {
  let cursor = document.querySelector('.cursor-glow');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(62,142,65,0.3) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease-out;
      display: none;
    `;
    document.body.appendChild(cursor);
  }

  document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });
})();

(() => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      card.style.animationDelay = index * 50 + 'ms';
    });
  });
})();
