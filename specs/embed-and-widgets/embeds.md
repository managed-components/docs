# Embed support

To place an embed in the page, the website owner includes a placeholder `div` element. For example, a Twitter embed could look like this:

```html
<div
  data-component-embed="twitter-example"
  data-dark-theme
  data-tweet-id="1488098745438855172"
></div>
```

Inside the External Component, the embed will be defined like in this example:

```js
manager.registerEmbed("twitter-example", ({ element }) => {
  const color = element.attributes["dark-theme"] ? "light" : "dark";
  const tweetId = element.attributes["tweet-id"];
  const tweet = await manager.useCache(
    "tweet-" + tweetId,
    await(await fetch("https://api.twitter.com/tweet/" + tweetId)).json()
  );

  element.render(
    await manager.useCache(
      "widget",
      pug.compile("templates/widget.pug", { tweet, color })
    )
  );
});
```

In the above example, the tool defined an embed called `twitter-example`. It checks for some HTML attributes on the placeholder element, makes a request to a remote API, caches it, and then renders the new element instead the placeholder using the [Pug templating engine](https://pugjs.org/). Note the Pug templating system isn't a part of the External Component API - a tool can choose to use whatever templating engine it wants, as long as it responds with valid HTML code.
