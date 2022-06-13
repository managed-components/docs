# Mouse down

```js
manager.createEventListener('mousedown', async event => {
  console.info('🐁 ⬇️ Mousedown payload:', event.payload)
})
```
example payload output:

```js
{
  event: 'mousedown',
  mousedown: [
    {
      target: 'body',
      timestamp: 1653923456438,
      altKey: false,
      clientX: 276,
      clientY: 403
    }
  ]
}
```