# `proxy`

Create a reverse proxy from some path to another server. It can be used in order to access the tool vendor servers without the browser needing to send a request to a different domain.

```js
const myURL = manager.proxy('/api', 'https://api.example.com')
```

For a tool that uses the namespace `example`, the above code will map `/webcm/component-name/api/*` to `api.example.com`. For example, a request to `/webcm/component-name/api/hello` will be proxied, server-side, to `api.example.com/hello`.

In the case of proxying static assets, you can use the third optional argument to force caching:

```js
manager.proxy('/assets', 'https://assets.example.com', { cache: 'always' })
```

The third argument is optional and defaults to:

```js
{
  cache: 'auto' // `never`, `always`, or `auto`. `auto` will cache based on the cache-control header of the responses.
}
```
