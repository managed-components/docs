# Performance entries

```js
manager.createEventListener('performance', async event => {
  console.info('New performance entries!', event.payload)
})
```
example payload output:

```json
{
  "event": "resourcePerformanceEntry",
  "payload": {
    "resources": [
      {
        "url": "http://localhost:1337/webcm/demoComponent/cheese",
        "timestamp": 1653921858149
      },
      {
        "url": "https://images.unsplash.com/photo-1458682760028-07c9d41d0cd1?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MDQ1NDY4NA&ixlib=rb-1.2.1&q=85&w=2880",
        "timestamp": 1653921858149
      }
    ]
  }
}
```