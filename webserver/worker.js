addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const code = url.searchParams.get('code')
  
    if (!code) {
      return new Response('Hey! This is SpotifyNow\'s authentication server.', { status: 400 })
    }
  
    const key = code.slice(-4)
    const redirectURL = `http://t.me/AlcTestRobot/?start=${key}`
  
    await fetch('https://jsonblob.com/api/AAAAAAAAAAAAAAAAAAAAAAAAA', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [key]: code }),
    })
  
    return Response.redirect(redirectURL, 302)
  }
