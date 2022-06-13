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
  "fields": {
    "accountId": {
      "displayName": "Account ID",
      "helpText": "You can find the ID in the top of the ExampleTool dashboard.",
      "displayWidget": "text",
      "validations": [
        {
          "required": true
        },
        {
          "type": "number"
        }
      ]
    }
  },
  "allowCustomFields": true,
  "permissions": [
    {
      "permission": "provideEmbed",
      "explanation": "ExampleTool provides an embed you can use in your website",
      "required": true
    },
    {
      "permission": "clientFetch",
      "explanation": "ExampleTool uses cookies to attribute sessions more accurately",
      "required": false
    }
  ]
}
```