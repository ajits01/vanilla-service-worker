const precacheList = [
  "/",
  "single.html",
  "photos.html",
  "news.html",
  "contact.html",
  "live-cameras.html",
  /* CSS */
  "style.css",
  /* JS */
  "js/app.js",
  "js/jquery-1.11.1.min.js",
  "js/jquery-1.11.1.min.map",
  "js/plugins.js",
  "js/ie-support/html5.js",
  "js/ie-support/pie.htc",
  "js/ie-support/respond.js",
  "js/min/app-min.js",
  "js/min/plugins-min.js",
  /* Images */
  "images/arrow.png",
  "images/arrow@2x.png",
  "images/arrow-down.jpg",
  "images/arrow-down.png",
  "images/arrow-down@2x.jpg",
  "images/arrow-down@2x.png",
  "images/arrow-gray.png",
  "images/arrow-gray@2x.png",
  "images/arrow-left-white.png",
  "images/arrow-left-white@2x.png",
  "images/banner.png",
  "images/featured-image-1.jpg",
  "images/featured-image-1@2x.jpg",
  "images/featured-image-2.jpg",
  "images/featured-image-2@2x.jpg",
  "images/featured-image-3.jpg",
  "images/featured-image-3@2x.jpg",
  "images/icon-compass.png",
  "images/icon-compass@2x.png",
  "images/icon-compass2x.png",
  "images/icon-envelope.png",
  "images/icon-envelope@2x.png",
  "images/icon-marker.png",
  "images/icon-marker@2x.png",
  "images/icon-phone.png",
  "images/icon-phone@2x.png",
  "images/icon-umberella.png",
  "images/icon-umberella@2x.png",
  "images/icon-umberella2x.png",
  "images/icon-wind.png",
  "images/icon-wind@2x.png",
  "images/icon-wind2x.png",
  "images/live-camera-1.jpg",
  "images/live-camera-1@2x.jpg",
  "images/live-camera-2.jpg",
  "images/live-camera-2@2x.jpg",
  "images/live-camera-3.jpg",
  "images/live-camera-3@2x.jpg",
  "images/live-camera-4.jpg",
  "images/live-camera-4@2x.jpg",
  "images/live-camera-5.jpg",
  "images/live-camera-5@2x.jpg",
  "images/live-camera-6.jpg",
  "images/live-camera-6@2x.jpg",
  "images/live-camera-7.jpg",
  "images/live-camera-7@2x.jpg",
  "images/live-camera-8.jpg",
  "images/live-camera-8@2x.jpg",
  "images/logo.png",
  "images/logo@2x.png",
  "images/logo2x.png",
  "images/photo-1.jpg",
  "images/photo-10.jpg",
  "images/photo-2.jpg",
  "images/photo-3.jpg",
  "images/photo-4.jpg",
  "images/photo-5.jpg",
  "images/photo-7.jpg",
  "images/photo-8.jpg",
  "images/photo-9.jpg",
  "images/play-button.png",
  "images/play-button@2x.png",
  "images/quote.png",
  "images/quote@2x.png",
  "images/thumb-1.jpg",
  "images/thumb-1@2x.jpg",
  "images/thumb-2.jpg",
  "images/thumb-2@2x.jpg",
  "images/thumb-3.jpg",
  "images/thumb-3@2x.jpg",
  "images/thumb-4.jpg",
  "images/thumb-4@2x.jpg",
  "images/thumb-5.jpg",
  "images/thumb-5@2x.jpg",
  "images/thumb-6.jpg",
  "images/thumb-6@2x.jpg",
  "images/thumb-7.jpg",
  "images/thumb-7@2x.jpg",
  "images/thumb-8.jpg",
  "images/thumb-8@2x.jpg",
  "images/thumb-9.jpg",
  "images/thumb-9@2x.jpg",
  "images/icons/icon-1.svg",
  "images/icons/icon-10.svg",
  "images/icons/icon-11.svg",
  "images/icons/icon-12.svg",
  "images/icons/icon-13.svg",
  "images/icons/icon-14.svg",
  "images/icons/icon-2.svg",
  "images/icons/icon-3.svg",
  "images/icons/icon-4.svg",
  "images/icons/icon-5.svg",
  "images/icons/icon-6.svg",
  "images/icons/icon-7.ai",
  "images/icons/icon-7.svg",
  "images/icons/icon-8.svg",
  "images/icons/icon-9.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("weatherezy-assets-v1").then((cache) => {
      cache.addAll(precacheList);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
      }
    })
  );
});
