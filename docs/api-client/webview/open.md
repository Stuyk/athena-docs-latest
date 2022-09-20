---
title: '.open'
order: -99
---

# {{ $frontmatter.title }}

Opens one or multiple webviews / pages.

### Usage

Arguments

* pageOrPages -> Array\<string\> | string
  * Name of the page / pages.
* hideOverlays -> boolean = true (optional)
  * Whether to hide overlays.
* closeOnEscapeCallback -> () => void = undefined (optional)
  * Callback to call when the user exits the page.

Returns

* Returns a void.

```typescript
AthenaClient.webview.open(ComponentName, true, ExampleWebView.exit);
```
