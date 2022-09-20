---
title: '.drawText3D'
order: -99
---

# {{ $frontmatter.title }}

Used to draw in-world text. However, it requires an everyTick to show it.

It's better to use the `server-side` API but it's still exposed here if you need it.

This will always show in-world regardless of where you are in the world. You need to utilize distance checks to show / hide it if you are not close to the text.

## Usage

Arguments

* text -> string
* pos -> Vector3
* scale -> number
* color -> new alt.RGBA

```ts
alt.everyTick(() => {
    AthenaClient.screen.drawText3D('Hello World!', { x: 0, y: 0, z: 0}, 1, new alt.RGBA(255, 0, 0, 100));
});
```