# User-configured events

Managers allow users to dispatch events from their website, and then map these configured events to different tools. A tool can register to listen to events and then define the way it will be processed.

```js
manager.addEventListener('event', async ({ context, client }) => {
  // Send server-side request
  manager.fetch('https://example.com/collect', {
    method: 'POST',
    data: {
      ip: context.system.device.ip,
      eventName: context.eventName,
    },
  })

  // Check client browser
  if (client.userAgent.includes('Chrome')) {
    client.set('example-uuid', uuidv4())
    client.fetch(
      `https://example.com/collectFromBrowser?dt=${system.page.title}`
    )
  }
})
```

In the above example, when the tool receives an event it will do multiple things: (1) Make a server-side post request to /collect endpoint, with the visitor IP and the event name. If the visitor is using a normal web browser (e.g. not using the mobile SDK), the tool will also set a client key (e.g. cookie) named `example-uuid` to a random UUIDv4 string, and it ask the browser to make a client-side fetch request with the page title.
