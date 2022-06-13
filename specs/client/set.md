# `client.set`

Save a value on the client. In a normal web browser, this would translate into a cookie, or a localStorage/sessionStorage item.

```js
client.set('uuid', uuidv4(), { scope: 'infinite' })
```

The above will save a UUIDv4 string under a key called `uuid`, readable by this tool only. The Components Manager will know to attempt to make this key persist indefinitely.

The third argument is an optional object with these defaults:

```js
{
  "scope": "page", // "page", "session", "infinite"
  "expiry": null // `null`, Date object or lifetime in milliseconds
}
```