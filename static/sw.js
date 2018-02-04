importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "potato4d.me",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a195cedd5c244a4413cd.js",
    "revision": "edcc37c5c2b46024a4741e016797cdde"
  },
  {
    "url": "/_nuxt/common.2ac68bc66186d8a1c01c.js",
    "revision": "566cfee7933c4a47d8cf85786b8dc934"
  },
  {
    "url": "/_nuxt/layouts/default.1071e34131b78519c81e.js",
    "revision": "0d3df6b8170ad7d04b0c734bcb131cc0"
  },
  {
    "url": "/_nuxt/manifest.af90ef4b2564143fbbb2.js",
    "revision": "022c047bf76408e4dfc4ab01748c1da1"
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
    "url": "/_nuxt/pages/index.08d27bee29b4c94dc504.js",
    "revision": "ed0975c1c4e1077fbbfb756ad502298f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

