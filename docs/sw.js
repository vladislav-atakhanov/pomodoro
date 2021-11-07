const staticCacheName = "v1"

const assets = [
	"index.html",
	"index.css",
	"build/bundle.css",
	"build/bundle.js"
]


self.addEventListener("install", async e => {
	const cache = await caches.open(staticCacheName)
	await cache.addAll(assets)
})

self.addEventListener("activate", async e => {
	const keys = await caches.keys()
	await Promise.all(
		keys.filter(name => name != staticCacheName)
			.map(name => caches.delete(name))
	)
})
self.addEventListener("fetch", async e => {
	e.respondWith(networkFirst(e.request))
})

async function networkFirst(request) {
	const cache = await caches.open(staticCacheName)
	try {
		const response = await fetch(request)
		await cache.put(request, response.clone())
		return response
	} catch (e) {
		return await caches.match(request)
	}

}