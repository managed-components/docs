# `serve`

Serve static assets. Returns the final URL mapped your destination.

```js
const myURL = manager.serve('public', 'assets')
```

The tool will provide a directory with it static assets under `public`, and it will be available under the same domain. In the above example, the tool's `public` directory will be exposed under `/webcm/component-name/assets`.
