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
    "revision": "3771485d621620fae5f2f4f3e20f5845"
  },
  {
    "url": "app.f9a7b371.js",
    "revision": "49ad34ef9b31d3ec6fff80a1eca6118b"
  },
  {
    "url": "index.html",
    "revision": "3dbefa556f0b8ed28e3d5d6f227fc68a"
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
    "revision": "fe2d28f728d1b111ec4221bcd42803eb"
  },
  {
    "url": "/",
    "revision": "472a49837af1dcab16577c31cdbb2e9d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("./index.html");

workbox.routing.registerRoute(/http:\/\/cors-anywhere.herokuapp.com\/http:\/\/tycho.usno.navy.mil\/cgi-bin\/time.pl/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute("https://raw.githubusercontent.com/parcel-bundler/website/01a1f7dd/src/assets/parcel@3x.png", workbox.strategies.cacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0]})] }), 'GET');
