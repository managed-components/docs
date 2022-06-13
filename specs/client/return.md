# `client.return`

Return a value to the client so that it can use it.

```js
manager.addEventListener('event', async ({ context, payload, client }) => {
  if (context.eventName === 'multiply') {
    client.return(context.x * context.y)
  }
})
```

On the browser, the website can access this result using:

```js
const value = await manager.track('multiply', { x: 21, y: 2 })
const result = value.return['exampleTool'] // = 42
```
