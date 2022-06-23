# Scroll

```js
manager.createEventListener('scroll', async (event) => {
  console.info('They see me scrollin...they hatin...', event.payload)
})
```

example payload output:

```json
{
  "event": "scroll",
  "payload": {
    "scroll": [
      {
        "scrollLeft": 0,
        "scrollTop": 77.7272720336914,
        "scrollX": 0,
        "scrollY": 77.7272720336914,
        "target": "body",
        "timestamp": 1653923753892
      }
    ]
  }
}
```
