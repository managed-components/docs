# Client created

The `clientcreated` event is dispatched whenever the manager sees a new client.

```js
manager.addEventListener('clientcreated', async event => {
  const { client } = event
  const num = Math.random()
  client.set('clientNumber', num.toString())
})
```

The above will store a random number variable to the client whenever a new client loads a page.
