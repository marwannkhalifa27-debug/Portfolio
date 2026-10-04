// Cursor-following searchlight. Skipped for users who prefer reduced motion.
(function () {
  var el = document.getElementById('signal');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var raf = null;
  window.addEventListener('mousemove', function (e) {
    if (raf) return;
    raf = requestAnimationFrame(function () {
      el.style.setProperty('--sx', e.clientX + 'px');
      el.style.setProperty('--sy', e.clientY + 'px');
      raf = null;
    });
  });
})();
