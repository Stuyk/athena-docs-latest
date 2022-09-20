---
title: '.drawRectangle2D'
order: -99
---

# {{ $frontmatter.title }}

Used to draw an on-screen rectangle. However, it requires an everyTick to show it.

## Usage

Position and size are based on values between `0` and `1`. If you want it in the middle of your screen it's `0.5`.

Arguments

* pos -> Vector2
* size -> Vector2
* color -> new alt.RGBA

```ts
alt.everyTick(() => {
    AthenaClient.screen.drawRectangle2D({ x: 0.5, y: 0.5 }, { x: 0.3, y: 0.1}, new alt.RGBA(255, 0, 0, 100));
});
```