---
title: '.showOverlays'
order: -99
---

# {{ $frontmatter.title }}

Trigger this to hide/show all overlays like Chat, HUD, etc.

### Usage

Arguments

* value -> boolean
  * If true, hide the overlays. If false, show the overlays.
* doNotUpdate -> boolean = false (optional)
  * If true, don't update the overlays.

Returns

* Returns a boolean. True if any menu is open, false if not.

```typescript
AthenaClient.webview.showOverlays(true);

```
