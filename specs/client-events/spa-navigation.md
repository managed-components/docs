# Single Page Application navigation

The `historyChange` event is called whenever the page changes in a Single Page Application, by mean of `history.pushState` or `history.replaceState`. Tools can automatically trigger an action when this event occurs using an Event Listener.

```js
manager.createEventListener('historyChange', async event => {
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

The above will send a server-side request to `example.com/collect` whenever the page changes in a Single Page Application, with the URL and the page title as payload.

example payload output:

```js
{
  event: 'historyChange',
  payload: {
    history: [
      {
        url: 'https://cheese.com',
        title: 'Cheese',
        timestamp: 1653923753892,
      },
    ],
  },
}
```
