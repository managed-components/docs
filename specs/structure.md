---
sidebar_position: 2
---

# Structure

A Managed Component needs to export one default function that takes the Component Manager as an argument. The function is executed when the component is loaded. The component uses this function to listen to events and to register UI elements.

```js
export default async function (manager, settings) {
  // the Managed Component logic goes here
}
```