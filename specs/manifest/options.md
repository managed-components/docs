---
sidebar_position: 2
---

# Options


| Field               | Description                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| `name`              | User facing name of the tool                                                                                 |
| `description`       | User facing description of the tool                                                                          |
| `namespace`         | A namespace string that the Components Manager should serve server-side endpoints for the tool               |
| `icon`              | Path to an SVG icon that will be displayed with the tool                                                     |
| `fields`            | An object describing the fields the Components Manager should ask for when configuring an event for the tool |
| `allowCustomFields` | Whether or not users should be allowed to send custom fields to the tool                                     |
| `permissions`       | Array of permissions the tool requires for its operation                                                     |
