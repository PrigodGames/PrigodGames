(() => {
  const header = document.querySelector('.site-header');
  const navigation = header?.querySelector('.main-nav');
  const toggle = header?.querySelector('.nav-toggle');

  const closeNavigation = () => {
    navigation?.classList.remove('is-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }
  };

  toggle?.addEventListener('click', () => {
    const opening = !navigation.classList.contains('is-open');
    navigation.classList.toggle('is-open', opening);
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
  });

  navigation?.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeNavigation();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });
  window.matchMedia('(min-width: 1181px)').addEventListener('change', closeNavigation);

  const clips = document.querySelectorAll('video[data-autoplay]');
  if (!clips.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (!('IntersectionObserver' in window)) {
    clips.forEach((clip) => clip.play().catch(() => {}));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.play().catch(() => {});
      else entry.target.pause();
    });
  }, { rootMargin: '180px 0px', threshold: 0.12 });
  clips.forEach((clip) => observer.observe(clip));
})();
