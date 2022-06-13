# `invalidateCache`

Used when a tool needs to forcefully remove a cached item.

```js
manager.route('/invalidate', request => {
  manager.invalidateCache('some_cached_item')
  return new Response(204)
})
```

The above example can be used by a tool to remotely wipe a cached item, for example when it wants the website to re-fetch data from the tool vendor API.
