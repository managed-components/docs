# `client.get`

Get the value of a key that was set using `client.set`.

```js
client.get('uuid')
```

As keys are scoped to each tool, a tool can also explicitly ask for getting the value of a key from another tool:

```js
client.get('uuid', 'facebook-pixel')
```