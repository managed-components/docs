# Mouse up

```js
manager.createEventListener('mouseup', async (event) => {
  console.info('🐁 ⬆️ Mouseup payload:', event.payload)
})
```

example payload output:

```js
{
  event: 'mouseup',
  mouseup: [
    {
      altKey: false,
      button: 0,
      clientX: 556,
      clientY: 66,
      pageX: 556,
      pageY: 156,
      relativeY: 55.9453,
      relativeX: 38.4831,
      target: "body",
      timestamp: 1655997128153
    }
  ]
}
```
