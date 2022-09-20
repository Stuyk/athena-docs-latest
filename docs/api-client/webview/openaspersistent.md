---
title: '.openAsPersistent'
order: -99
---

# {{ $frontmatter.title }}

Registers a page that never, ever closes. Ever.

### Usage

Arguments

* pageName -> string
  * Name of the page.

Returns

* Returns a void.

```typescript
AthenaClient.webview.openAsPersistent(ComponentName);
```
