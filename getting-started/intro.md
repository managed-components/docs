---
sidebar_position: 2
---

# Introduction

Today, when web developers want to add a third-party tool to their website, they usually add some JavaScript snippet that loads a remote resource. This can potentially be very problematic, for multiple reasons:

- **Performance**: It is slow. Every tool requires another network request, and much more than one. The code is then executed in the browser, which can block the main thread and slow down interacting with the website itself.
- **Security**: It is dangerous. The tool runs in the browser and so it has unlimited access to everything in the page. It can steal information, hijack the visitor or change the page in an undesired way.
- **Privacy**: Because the browser has to fetch all tools, every single vendor gets access to the visitor IP address and User Agent. It's impossible to prevent sending this information. Also, tools can collect information using JavaScript without any restrictions, and the web developer can do very little to restrict that.

A Managed Component is a JavaScript module that defines how a certain third-party tool works in a website. It contains all of the assets required for the tool to function, and it allows the tool to subscribe to different events, to update the DOM as well as to introduce server-side logic.
