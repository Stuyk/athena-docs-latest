---
title: '.close'
order: -99
---

# {{ $frontmatter.title }}

Closes one or multiple webviews / pages.

### Usage

Arguments

* pageOrPages -> Array\<string\> | string
  * Name of the page / pages.
* showOverlays -> boolean = false (optional)
  * Whether to hide overlays.

Returns

* Returns a void.

```typescript
AthenaClient.webview.close(ComponentName, true);
```
