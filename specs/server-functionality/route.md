# `route`

Define custom server-side logic. These will run without a proxy, making them faster and more reliable. The returning string is the final URL mapped.

```js
const myURL = manager.route('/ping', request => {
  return new Response(204)
})
```

The above will map respond with a 204 code to all requests under `/webcm/component-name/ping`.
