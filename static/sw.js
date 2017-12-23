importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "potato4d.me",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f2f37ca924dfaa1a75b8.js",
    "revision": "fe95c131afdb40146e1f07b8266fe54a"
  },
  {
    "url": "/_nuxt/common.2ac68bc66186d8a1c01c.js",
    "revision": "566cfee7933c4a47d8cf85786b8dc934"
  },
  {
    "url": "/_nuxt/layouts/default.6798b8169b8863cdc8a0.js",
    "revision": "5abf4b4f9b53ce7b8cb810c787314195"
  },
  {
    "url": "/_nuxt/manifest.7c97d16540c533ad36ff.js",
    "revision": "296cbcd78a51cc54bfe9551bb3d90bf8"
  },
  {
    "url": "/_nuxt/pages/account.0a2a742219c93522c42a.js",
    "revision": "44c29e74eb3523ed04c4d426b46a7449"
  },
  {
    "url": "/_nuxt/pages/contact.cbb1bc8b2e1c0b050fe5.js",
    "revision": "1dcb25e0fe961eeb68a8ab172408b08b"
  },
  {
    "url": "/_nuxt/pages/index.d3ae53d5984617c29a75.js",
    "revision": "17f706dd3cc4e1832939140dfff6665c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

