// Service worker de Vida Global: guarda solo el "cascarón". La app real siempre viene de Apps Script.
const V = 'vg-pwa-v4';
const SHELL = ['./', 'index.html', 'android.html', 'iphone.html', 'manuales.html', 'style.css', 'app.js', 'i18n.js', 'config.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'img/logo-horizontal.webp'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).catch(() => {})); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  const fresco = r.mode === 'navigate' || /\.(html|js|css|json)$/.test(u.pathname);
  if (fresco) {
    // Primero la red (así un cambio llega a todos); sin red, lo guardado.
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r)));
  }
});
