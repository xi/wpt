addEventListener('fetch', e => {
  if (e.request.url.includes('get-worker-client-url')) {
    e.respondWith((async () => {
      const clients = await self.clients.matchAll({type: 'worker'});
      if (clients.length == 0)
        return new Response('no worker client');
      return new Response(clients[0].url);
    })());
  }
});
