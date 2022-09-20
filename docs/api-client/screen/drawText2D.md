---
title: '.drawText2D'
order: -99
---

# {{ $frontmatter.title }}

Used to draw on-screen text. However, it requires an everyTick to show it.

It's better to use the `server-side` API but it's still exposed here if you need it.

## Usage

Arguments

* text -> string
* pos -> Vector2
* scale -> number
* color -> new alt.RGBA

```ts
alt.everyTick(() => {
    AthenaClient.screen.drawText3D('Hello World!', { x: 0, y: 0 }, 1, new alt.RGBA(255, 0, 0, 100));
});
```