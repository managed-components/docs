# `fetch`

Perform an HTTP request server-side. It follows the [DOM
`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
argument structure.

## Examples

```js
// a simple GET request
const response = await manager.fetch('https://api.example.com/api');
const result = await response.json();
```

```js
await manager.fetch("https://api.example.com/api", {
  method: "POST",
  body: JSON.stringify({ data: "my data" }),
});
```
