# Widget support

Floating widgets are not replacing an element, instead, they are appended to the `<body>` tag of the page. Inside the External Component, a floating tweet widget will be defined like this:

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

In the above example, the tool defines a weather widget. The widget will be loaded on all your website's pages unless configured from a [component manager](https://managedcomponents.dev/getting-started/components-manager) to do differently. 

The main difference between embeds and widgets is that widgets are always going to be loaded on any page you choose to load them, while embeds are only going to replace a ` <div data-component-embed="weather-example"></div>`
