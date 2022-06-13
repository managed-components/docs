# Scroll

```js
manager.createEventListener('scroll', async event => {
  console.info('They see me scrollin...they hatin...', event.payload)
})
```
example payload output:

```json
{
  "event": "scroll",
  "payload": {
    "scrolls": [
      {
        "scrollX": 0,
        "scrollY": 77.7272720336914,
        "timestamp": 1653923753892,
        "element": {}
      }
    ]
  }
}
```
