export function initRevealObserver() {
  const observerOptions = {
    threshold: 0.18,
    rootMargin: '0px 0px -6% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section, .card, .work-card, .tech-item').forEach((element) => {
    element.classList.add('reveal');
  });

  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element);
  });
}
