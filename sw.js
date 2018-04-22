/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.4145ce22.js",
    "revision": "bed19630cbd7538e09a90118ca34bd0d"
  },
  {
    "url": "app.f9a7b371.js",
    "revision": "515ab84c2535d9a20cb651377a148f56"
  },
  {
    "url": "index.html",
    "revision": "650b497979e7820a2ed83b6fc835e92a"
  },
  {
    "url": "main.820037df.css",
    "revision": "a6ce63889d1c812424c5c57f7fbb688f"
  },
  {
    "url": "main.8b658e93.css",
    "revision": "09fbbbacbff37302f11f2ce6cb91b330"
  },
  {
    "url": "main.8b658e93.js",
    "revision": "69a25d00e397c473ae26f478ffca7b31"
  },
  {
    "url": "/",
    "revision": "75d2065a21f7aa07cf929c313ed8a143"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("./index.html");

workbox.routing.registerRoute(/http:\/\/cors-anywhere.herokuapp.com\/http:\/\/tycho.usno.navy.mil\/cgi-bin\/time.pl/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute("https://raw.githubusercontent.com/parcel-bundler/website/01a1f7dd/src/assets/parcel@3x.png", workbox.strategies.cacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0]})] }), 'GET');
