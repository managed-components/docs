# Page hide

```js
manager.createEventListener('pageHide', async (event) => {
  console.info('pageHide payload:', event.payload)
})
```

example payload output:

```js
{
  event: 'pageHide',
  pageHide: [
    {
      persisted: true,
      timestamp: 1655997128153
    }
  ]
}
```
