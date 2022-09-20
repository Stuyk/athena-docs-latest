---
title: '.drawRectangle3D'
order: -99
---

# {{ $frontmatter.title }}

Used to draw an in-world rectangle. However, it requires an everyTick to show it.

This will always show in-world regardless of where you are in the world. You need to utilize distance checks to show / hide it if you are not close to the rectangle.

## Usage

Size is based on values between `0` and `1`. If you want it in the middle of your screen it's `0.5`.

Arguments

* pos -> Vector3
* size -> Vector2
* color -> new alt.RGBA

```ts
alt.everyTick(() => {
    AthenaClient.screen.drawRectangle3D({ x: 0, y: 0, z: 0 }, { x: 0.3, y: 0.1}, new alt.RGBA(255, 0, 0, 100));
});
```