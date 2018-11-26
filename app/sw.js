const cacheVersion = 'pwa-InKaM-v1';

const filesToCache = [
  '/',
  '/asset/akakom.png',
  '/asset/ig.png',
  '/asset/info1.jpeg',
  '/asset/info2.jpg',
  '/css/all.css',
  '/css/bootstrap.min.css',
  '/js/bootstrap.min,js',
  '/js/jquery.min.js',
  '/js/popper.min.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion)
      .then(function(cache) {
        return cache.addAll(filesToCache)
      })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) return res;

        return fetch(event.request);
      })
  );
});
