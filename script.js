(function () {
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem('premium-green-theme');
  const isLight = saved ? saved === 'light' : prefersLight;
  if (isLight) document.documentElement.classList.add('theme-light');

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      ripple(e);
      document.documentElement.classList.toggle('theme-light');
      const nowLight = document.documentElement.classList.contains('theme-light');
      localStorage.setItem('premium-green-theme', nowLight ? 'light' : 'dark');
    });
  }

  // Attach ripple to all elements with data-ripple
  document.querySelectorAll('[data-ripple]').forEach((el) => {
    el.addEventListener('click', ripple);
  });

  function ripple(event) {
    try {
      const target = event.currentTarget;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX || (event.touches && event.touches[0].clientX)) - rect.left;
      const y = (event.clientY || (event.touches && event.touches[0].clientY)) - rect.top;
      const circle = document.createElement('span');
      circle.className = 'ripple';
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
      target.appendChild(circle);
      circle.addEventListener('animationend', () => circle.remove(), { once: true });
    } catch (_) {
      /* ignore */
    }
  }
})();


