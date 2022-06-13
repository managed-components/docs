---
sidebar_position: 6
---

# Client Events

:::tip Note

Each of the below client events listeners are instantiated using `manager.createEventListener` and **enabled** by using `client.attachEvent`.

:::

E.g.

```js
// earlier in the Managed Component:
manager.createEventListener('mousedown', async event => {
  console.info('🐁 ⬇️ Mousedown:', event.payload)
})

// later in the same component
manager.addEventListener('clientcreated', ({ client }) => {
  client.attachEvent('mousedown')
})
```

The above example establishes a `mousedown` event listener for each newly created client.


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
