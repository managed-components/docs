---
sidebar_position: 1
---

# Permissions


The following table describes the permissions that a tool can ask for when being added to a website.

| Permission           | Required for                                                                |
| -------------------- | --------------------------------------------------------------------------- |
| client_kv            | `client.set`, `client.get`                                                  |
| client_ext_kv        | `client.get` when getting a key from another tool                           |
| run_client_js        | `client.execute`                                                            |
| client_fetch         | `client.fetch`                                                              |
| run_scoped_client_js |                                                                             |
| serve_static         | `serve`                                                                     |
| server_functions     | `proxy`, `route`                                                            |
| read_page            |                                                                             |
| provide_embed        | `provideEmbed`                                                              |
| provide_widget       | `provideWidget`                                                             |
| hook_user_events     | events: `event`                                                             |
| hook_browser_events  | events: `pageview`, `historyChange`, `DOMChange`, `click`, `scroll`, `time` |
