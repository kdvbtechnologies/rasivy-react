const BASE = location.protocol + "//" + location.host;
const PREFIX = "V1";
const CACHED_FILES = [
  // production
  //`${BASE}/static/js/main.fa57e256.js`,
  //`${BASE}/static/css/main.d350960e.css`,
  `${BASE}`,
  `${BASE}/App.js`,
  "https://jamelfase.com/sw.js",
  `${BASE}/manifest.json`,
  `${BASE}/favicon.ico`,
  `${BASE}/logo192.png`,
  `${BASE}/logo.svg`,
  `${BASE}/Profile`,
  "https://reqres.in/api/unknown",

  // developpement
  //`${BASE}/static/js/bundle.js`,
  `https://jamelfase.com/static/js/main.ee6b10f7.js`,
  `https://jamelfase.com/static/css/main.ff3d4f45.css`,
  "https://jamelfase.com/",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PREFIX);
      await cache.addAll([...CACHED_FILES, "/index.html"]);
    })()
  );
  console.log(`${PREFIX} Install`);
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(PREFIX)) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  console.log(`${PREFIX} Active`);
});

self.addEventListener("fetch", (event) => {
  console.log(
    `${PREFIX} Fetching : ${event.request.url}, Mode : ${event.request.mode}`
  );

  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // Respond from the cache if we can
          //const cachedResponse = await caches.match(event.request);
          //if (cachedResponse) return cachedResponse;

          // Else, use preloaded response, if it's there
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          // Else try the network
          return await fetch(event.request);
        } catch (error) {
          // if offline mode
          const cache = await caches.open(PREFIX);
          return await cache.match("/index.html");
        }
      })()
    );
  } else if (CACHED_FILES.includes(event.request.url)) {
    event.respondWith(caches.match(event.request));
  }
});
