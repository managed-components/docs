# Widget support

Floating widgets are appended to the `<body>` tag of the page. A weather widget can be defined like this:

```js
manager.registerWidget(async () => {
  const location = "Colombia";
  const widget = await manager.useCache("weather-" + location, async () => {
    try {
      const response = await manager.fetch(
        `https://wttr.in/${location}?format=j1`
      );
      const data = await response.json();
      const [summary] = data.current_condition;
      const { temp_C } = summary;
      return `<p>Temperature in ${location} is: ${temp_C} &#8451;</p>`;
    } catch (error) {
      console.error("error fetching weather for widget:", error);
    }
  });
  return widget;
});
```

The widget will be loaded on all your website's pages unless configured from a [component manager](https://managedcomponents.dev/getting-started/components-manager) to load differently. 

The main difference between embeds and widgets is that widgets are always going to be loaded on any page you choose to load them, while embeds are only going to replace an existing `<div data-component-embed="weather-example"></div>`
