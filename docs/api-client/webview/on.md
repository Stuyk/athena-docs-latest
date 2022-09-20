---
title: '.on'
order: -99
---

# {{ $frontmatter.title }}

Registers a callback to call when a specific event is called.

### Usage

Arguments

* eventName -> string
  * Name of the page / pages.
* callback -> (...args: any[]) => void
  * The callback to call when the event is called.

Returns

* Returns a void.

```typescript
AthenaClient.webview.on(ExampleWebViewEvents.ClientToWebView.SELECT_PLATER, ExampleWebView.selectPlayer);
```
