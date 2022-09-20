---
title: '.ready'
order: -99
---

# {{ $frontmatter.title }}

Registers a callback to call when a component is loaded.

::: info

Component needs to call `WebViewEvents.emitReady(ComponentName);` in the `mounted` function.
Best practice is to call it after you are done setting all events (`WebViewEvents.on`).

:::

### Usage

Arguments

* pageName -> string
  * Name of the page / component
* callback -> (...args: any[]) => void
  * The callback to call when the component is loaded.

Returns

* Returns a void.

```typescript
AthenaClient.webview.ready(ComponentName, ExampleWebView.ready);
```
