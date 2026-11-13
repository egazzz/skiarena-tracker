// Service Worker: Seite zuerst aus dem Netz (damit Updates sofort ankommen), sonst aus dem Cache.
// Dateien mit Hash im Namen (assets/) kommen aus dem Cache – sie ändern sich nie.
const CACHE = 'skiarena-b0ee22a1a0';
const ASSETS = ["./assets/atkinson-hyperlegible-latin-400-normal-BrHNak5F.woff2","./assets/atkinson-hyperlegible-latin-700-normal-GZI4o3u0.woff2","./assets/index-C-vhU4lD.js","./assets/index-CTh57dMW.css","./assets/nunito-latin-400-normal-r8SDr6Up.woff2","./assets/nunito-latin-700-normal-Dort48En.woff2","./assets/pdf-DkcfldCQ.js","./assets/pdf.worker.min-B-BczD9f.js","./assets/pdf.worker.min-Dr1KORA9.mjs"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', './icon-192.png', './apple-touch-icon.png', ...ASSETS])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const isAsset = new URL(req.url).pathname.includes('/assets/');
  if (isAsset) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  // Seite & übrige Dateien: Netz zuerst, Cache als Rückfall (offline)
  e.respondWith(fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)).then((r) => r || new Response('', { status: 504 }))));
});
