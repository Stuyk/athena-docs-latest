---
title: '.openAsOverlay'
order: -99
---

# {{ $frontmatter.title }}

Register a Page Overlay such as HUD elements.

### Usage

Arguments

* pageName -> string
  * Name of the page.
* callback -> (isVisible -> boolean) => void = undefined (optional)
  * Callback to call when the visibility changes.
  * Example: The HUD elements are hidden when the player opens the inventory. That's when it's called. No need to change the visibility in the callback.

Returns

* Returns a void.

```typescript
AthenaClient.webview.openAsOverlay(ComponentName, ExampleWebView.setVisible);

class ExampleWebView {
    static setVisible(isVisible: boolean) {
        if (isVisible) {
            native.displayRadar(false);
        } else {
            native.displayRadar(true);
        }
    }
}
```
