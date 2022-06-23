---
sidebar_position: 2
---

# Example file

## Manifest

```json
{
  "name": "ExampleTool",
  "description": "ExampleTool is a great tool for X and Y!",
  "namespace": "example",
  "icon": "assets/icon.svg",
  "allowCustomFields": true,
  "permissions": {
    "provide_widget": {
      "description": "ExampleTool provides an widget you can use in your website",
      "required": true
    },
    "client_network_requests": {
      "description": "ExampleTool uses cookies to attribute sessions more accurately",
      "required": false
    }
  }
}
```
