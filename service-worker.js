// service-worker.js

const CACHE_NAME = 'my-pwa-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/icon1.png',
  '/icon2.png',
  '/icon3.png',
  '/icon4.png'

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
