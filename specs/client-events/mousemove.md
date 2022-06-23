# Mouse move

```js
manager.createEventListener('mousemove', async (event) => {
  const { payload } = event
  console.info('🐁 🪤 Mousemove:', payload)
})
```

example payload output:

```json
{
  "event": "mousemove",
  "payload": {
    "mousemoves": [
      {
        "altKey": false,
        "button": 0,
        "clientX": 586,
        "clientY": 106,
        "pageX": 586,
        "pageY": 106,
        "target": "body>img",
        "relativeX": 93.4446,
        "relativeY": 28.1562,
        "timestamp": 1653923647675
      }
    ]
  }
}
```
