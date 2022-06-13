# Resize

```js
manager.createEventListener('resize', async event => {
  console.info('New window size!', event.payload)
})
```
example payload output:

```json
{
  "event": "resize",
  "payload": {
    "dimensions": [
      {
        "innerWidth": 634,
        "innerHeight": 694,
        "availHeight": 875,
        "availWidth": 1440,
        "timestamp": 1653923372708
      }
    ]
  }
}
```