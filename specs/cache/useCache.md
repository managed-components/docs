# `useCache`

The `useCache` method is used to provide tools with an abstract layer of caching that easy to use. The method takes 3 arguments - `name`, `function` and `expiry`. When used, `useCache` will use the data from the cache if it exists, and if the expiry time did not pass. If it cannot use the cache, `useCache` will run the function and cache it for next time.

```js
await manager.useCache(
  `widget-${tweet.id}`,
  pug.compile('templates/floating-widget.pug', { tweet }),
  60
)
```

In the above example the template will only be rerendered using Pug if the cache doesn't already have the rendered template saved, or if it has been more than 60 seconds since the time it was cached.
