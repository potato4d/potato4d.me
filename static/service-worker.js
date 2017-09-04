// importScripts('/files.js')

addEventListener('install', (event) => {
  // event.waitUntil( init() )
})

const init = async () => {
  const cache = await caches.open('cache')
  return await cache.addAll(targetFiles)
}

const doCache = async (req) => {
  const res = await fetch(req)
  const body = await res.clone().body.getReader().read()
  if(!res || res.status !== 200) return
  const cache = await caches.open('cache')
  cache.put(req, res)

  let responseInit = {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers
  }
  return new Response(body.value, responseInit)
}

const fetchCache = async (req) => {
  try {
    const res = await caches.match(req)
    if (res) return res
  } catch (e) {

  }
}

addEventListener('fetch', (event) => {
  const isOnline = navigator.onLine;

  if (isOnline) {
    doCache(event.request)
  } else {
    return event.respondWith( fetchCache(event.request) )
  }
})
