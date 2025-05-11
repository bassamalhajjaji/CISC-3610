self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('space-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'style.css',
        'app.js',
        'data.json'
        // Add images/sounds manually or loop them in install step
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});