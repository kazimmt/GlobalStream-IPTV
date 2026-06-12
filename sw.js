/* Simple Basic Service Worker (sw.js) */

const CACHE_NAME = 'globalstream-fifa';
const ASSETS_TO_CACHE = [
  '/',
  './fifa.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/hls.js@latest',
  'https://unpkg.com/lucide@latest',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

// Installation event: Cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('ServiceWorker: Caching essential assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activation event: Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('ServiceWorker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: Serve cached assets, otherwise fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit: Return response
        if (response) {
          return response;
        }
        // Cache miss: Fetch and return from network
        return fetch(event.request);
      })
  );
});
