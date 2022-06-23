---
sidebar_position: 1
---

# Permissions

The following table describes the permissions that a tool can ask for when being added to a website.

| Permission                   | Required for                                      |
| ---------------------------- | ------------------------------------------------- |
| access_client_kv             | `client.get`, `client.set`                        |
| access_extended_client_kv    | `client.get` when getting a key from another tool |
| execute_unsafe_scripts       | `client.execute`                                  |
| client_network_requests      | `client.fetch`                                    |
| serve_static_files           | `serve`                                           |
| provide_server_functionality | `proxy`, `route`                                  |
| provide_widget               | `provideWidget`                                   |
