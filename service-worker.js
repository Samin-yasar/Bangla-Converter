self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('bijoy-unicode-converter-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/main.js',
        '/App.css',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
