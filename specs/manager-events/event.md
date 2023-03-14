# Client created

The `event` event is dispatched for any new event.

```ts
manager.addEventListener('event', async event => {
  const eventType = event.payload.ev;
  const { client } = event;

  if(eventType === "form") {
    client.fetch("https://example.com/track-form")
  } else {
    client.fetch("https://example.com/track")
  }
})
```

The above will send a track request to two different endpoints depending on the type of event that was sent from the client.
