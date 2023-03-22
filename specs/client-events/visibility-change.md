# Visibility Change

```js

manager.createEventListener('visibilityChange', async event => {
    console.info('Page visibility toggled!', event.payload)
})

```
example payload output:

```json
{
  "event": "visibilityChange",
  "payload": {
    "visibilityChange": [{ "state": "hidden", "timestamp": 1678816122984 }]
  }
}
```