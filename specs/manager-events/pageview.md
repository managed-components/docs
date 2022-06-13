# Pageview

The `pageview` event is dispatched whenever a request for a new page is requested.

```js
manager.addEventListener('pageview', async event => {
  const { client } = event

  // Send server-side request
  fetch('https://example.com/collect', {
    method: 'POST',
    data: {
      url: client.url.href,
      title: client.title,
    },
  })
})
```

The above will send a server-side request to `example.com/collect` whenever the a new page loads, with the URL and the page title as payload.
