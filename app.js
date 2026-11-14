(function () {
  var c = window.VG_CONFIG || {};
  var q = new URLSearchParams(location.search);
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  // App instalada (o abierta desde su ícono): entra directo a Vida Global.
  if ((standalone || q.get('app') === '1') && c.APP_URL) { location.replace(c.APP_URL); return; }
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function () {});
  document.querySelectorAll('[data-app-link]').forEach(function (a) { if (c.APP_URL) a.href = c.APP_URL; });
  // iPhone/iPad fuera de Safari (Chrome, Firefox, Facebook...): ofrecer abrir en Safari con un toque
  var ua = navigator.userAgent || '';
  var ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var safari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA|FBAN|FBAV|Instagram|Line|MicroMessenger|DuckDuckGo/.test(ua);
  var aviso = document.getElementById('aviso-safari');
  if (aviso && ios && !safari) {
    aviso.hidden = false;
    var destino = location.origin + '/iphone.html';
    var ab = document.getElementById('abrir-safari');
    if (ab) ab.href = 'x-safari-' + destino;
    var cp = document.getElementById('copiar-enlace'), msg = document.getElementById('sf-msg');
    if (cp) cp.addEventListener('click', function () {
      var ok = function () { if (msg) msg.textContent = (window.VG_T && window.VG_T('sf_copied')) || 'OK'; };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(destino).then(ok, function () { prompt('', destino); });
      else prompt('', destino);
    });
  }
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
