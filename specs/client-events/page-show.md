# Page show

```js
manager.createEventListener('pageShow', async (event) => {
  console.info('pageShow payload:', event.payload)
})
```

example payload output:

```js
{
  event: 'pageShow',
  pageShow: [
    {
      persisted: true,
      timestamp: 1655997128153
    }
  ]
}
```
