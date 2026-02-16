const CACHE_NAME = "derspanel-v1";

const urlsToCache = [
  "/",              // index.html
  "/index.html",
  "/icon-192.png",
  "/icon-512.png",
  "/icon-180.png"
];

// Install event
self.addEventListener("install", event => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
