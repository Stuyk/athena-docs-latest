---
title: '.vehicles'
order: -99
---

# {{ $frontmatter.title }}

Used to get vehicle information for vehicles that are spawned.

## inRange

Returns all vehicle who are within range of a specific position.

```ts
const vehicles = Athena.get.vehicles.inRange(new alt.Vector3(0, 0, 0), 5); // 5 -> Distance
```
