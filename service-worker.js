// service-worker.js

const CACHE_NAME = 'my-pwa-cache';
const urlsToCache = [
  '/',
  '/shuffled/index.html',
  '/shuffled/style.css',
  '/shuffled/script.js',
  '/shuffled/icon1.png',
  '/shuffled/icon2.png',
  '/shuffled/icon3.png',
  '/shuffled/icon4.png'

];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
