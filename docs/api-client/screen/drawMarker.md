---
title: '.drawMarker'
order: -99
---

# {{ $frontmatter.title }}

Used to draw an in-world marker. However, it requires an everyTick to show it.

It's better to use the `server-side` API but it's still exposed here if you need it.

This will always show in-world regardless of where you are in the world. You need to utilize distance checks to show / hide it if you are not close to the marker.

## Usage

Arguments

* type -> number
* pos -> Vector3
* scale -> Vector3
* color -> new alt.RGBA
* bobUpAndDown -> true/false
* faceCamera -> true/false
* rotate -> true/false

```ts
alt.everyTick(() => {
    AthenaClient.screen.drawMarker(0, { x: 0, y: 0, z: 0}, { x: 1, y: 1, z: 1}, new alt.RGBA(255, 0, 0, 100));
});
```