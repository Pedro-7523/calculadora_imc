const CACHE_NAME = 'pwa-cache';
const URLS_TO_CODE = [
    '/',
    'index.html',
    '/css/style.css',
    '/js/main.js'
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CODE))

    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});