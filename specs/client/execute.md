# `client.execute`

Run client-side JS code in the client.

```js
manager.addEventListener('event', async ({ context, payload, client }) => {
  client.execute("console.log('Hello World');")
})
```

This would make the browser print "Hello World" to the console.
