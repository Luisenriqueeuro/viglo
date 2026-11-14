(function () {
  var c = window.VG_CONFIG || {};
  var q = new URLSearchParams(location.search);
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  // App instalada (o abierta desde su ícono): entra directo a Vida Global.
  if ((standalone || q.get('app') === '1') && c.APP_URL) { location.replace(c.APP_URL); return; }
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () {});
  document.querySelectorAll('[data-app-link]').forEach(function (a) { if (c.APP_URL) a.href = c.APP_URL; });
  // Botón "Instalar ahora" (Android / Chrome)
  var deferred = null;
  var btn = document.getElementById('btn-instalar');
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); deferred = e;
    if (btn) { btn.hidden = false; }
  });
  if (btn) btn.addEventListener('click', function () {
    if (!deferred) return;
    deferred.prompt();
    deferred.userChoice.then(function () { deferred = null; btn.hidden = true; });
  });
  window.addEventListener('appinstalled', function () {
    var ok = document.getElementById('instalada'); if (ok) ok.hidden = false; if (btn) btn.hidden = true;
  });
})();
