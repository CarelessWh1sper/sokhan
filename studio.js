/* course filter */
document.querySelectorAll('.chips button').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.chips button').forEach(function (x) { x.classList.toggle('on', x === b); });
    document.querySelectorAll('[data-l]').forEach(function (c) { c.hidden = b.dataset.f !== 'all' && c.dataset.l !== b.dataset.f; });
  });
});

/* menu: close on Escape, outside click, or link click */
(function () {
  var m = document.querySelector('.m');
  if (!m) return;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') m.open = false; });
  document.addEventListener('click', function (e) {
    if (m.open && !m.querySelector('.dr').contains(e.target) && !m.querySelector('summary').contains(e.target)) m.open = false;
  });
  m.querySelectorAll('.ov a').forEach(function (a) { a.addEventListener('click', function () { m.open = false; }); });
})();
