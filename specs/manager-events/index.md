---
sidebar_position: 4
---

# Manager Events

Managed Components provides a few methods that allow a tool to introduce server-side functionality.

Some of the most common manager events are listed below.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

:::info Note

The events listed here are the most common ones we see in third party tools but a manager can technically listen to any event.

For example: We can have a listener that listens for a `hello` event.

```js
manager.addEventListener('hello', event => {
  console.log("Hello")
})
```

:::