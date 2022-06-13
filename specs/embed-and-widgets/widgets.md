# Widget support

Floating widgets are not replacing an element, instead, they are appended to the `<body>` tag of the page. Inside the External Component, a floating tweet widget will be defined like this:

```js
manager.registerWidget("floatingTweet", ({ element }) => {
  const tweetId = element.attributes["tweet-id"];
  const tweet = await manager.useCache(
    "tweet-" + tweetId,
    await(await fetch("https://api.twitter.com/tweet/" + tweetId)).json()
  );

  element.render(
    await manager.useCache(
      "widget",
      pug.compile("templates/floating-widget.pug", { tweet })
    )
  );
});
```

In the above example, the tool defined a widget called `floatingTweet`. It reads the tweet ID from the `settings` object, and then uses the same method as the embed to fetch from an API and render its HTML code.
