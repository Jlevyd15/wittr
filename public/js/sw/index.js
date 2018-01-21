self.addEventListener('fetch', function(event) {
	// 3.11
	/*event.respondWith(new Response("<h1 class=\"a-winner-is-me\">ME!</h1>", {
		headers: { 'Content-Type': 'text/html' }
	}));*/

	// 3.13
	/*if (event.request.url.indexOf('.jpg') !== -1) {
		console.log('the event.request is a jpg', event.request.url, event.request.url.indexOf('.jpg'))
		event.respondWith(
			fetch('/imgs/dr-evil.gif')
		)
	} else {
		console.log('not a jpg')
	}*/

	//3.15
	event.respondWith(
		fetch(event.request).then(res => {
			console.log('the res is', res)
			if (res.status === 404) {}
			return res.status === 404 ? fetch('/imgs/dr-evil.gif') : res
		}).catch(() => new Response(' it didn\'t work sorry...'))
	)
})