---
sidebar_position: 4
---

# Events Overview

In a nutshell, manager events are listened to using `manager.addEventListener`, but each client event requires two steps:
  1. listener declaration using `manager.createEventListener`
  2. then linking to a client using `client.attachEvent`.

**Why?**

`manager.addEventListener` is used for all events originating from the manager itself, whereas `manager.createEventListener` is for events originating from the client.
This is an important difference because when your component is initialized, there are no clients (they only show up later, when visitors are visiting the website). This is why you don't have access to the `client` object in the top-most function of your component; it is only exposed inside the event handlers (e.g. `pageview` & `clientcreated`).
For client events, we're separating the declaration of the handler from its coupling to a client instance. `createEventListener` therefore declares the handler, but doesn't attach it to any client yet. When the `client` object is later exposed in one of the `manager` event handlers, you can use `client.attachEvent` to actually bind the aforementioned handler to the client.
