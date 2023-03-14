# Client created

The `ecommerce` event is dispatched for an ecommerce event.

```js
manager.addEventListener('ecommerce', event => {
  console.log('event:', event)
  if (event.name === 'Purchase') {
    console.info('Ka-ching! 💰', event.payload)
  }
})
```

The above code will listen for ecommerce events and then log 'Ka-ching! 💰' for a Purchase