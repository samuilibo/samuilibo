(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function savedTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function apply(theme) {
    root.dataset.theme = theme;
    toggle.setAttribute('aria-checked', String(theme === 'dark'));
  }

  apply(root.dataset.theme === 'dark' ? 'dark' : 'light');

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Kullanıcı elle seçim yapmadıysa sistem teması değişince onu izle.
  systemDark.addEventListener('change', function (e) {
    if (!savedTheme()) apply(e.matches ? 'dark' : 'light');
  });
})();
