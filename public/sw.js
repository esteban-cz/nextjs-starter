const CACHE_VERSION = 1;
const CACHE = {
  OFFLINE: "cache-v" + CACHE_VERSION,
};
const OFFLINE_URL = "offline.html";
const OFFLINE_ICON = "icon.svg";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE.OFFLINE).then(function (cache) {
      return cache.add(OFFLINE_URL);
    }),
    caches.open(CACHE.OFFLINE).then(function (cache) {
      return cache.add(OFFLINE_ICON);
    }),
  );
});

self.addEventListener("fetch", function (event) {
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      (async function () {
        try {
          return await fetch(event.request, { redirect: "manual" });
        } catch {
          const cache = await caches.open(CACHE.OFFLINE);
          return await cache.match(OFFLINE_URL);
        }
      })(),
    );
  }
});
