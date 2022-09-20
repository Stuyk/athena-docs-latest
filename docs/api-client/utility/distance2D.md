---
title: '.distance2D'
order: -99
---

# {{ $frontmatter.title }}

Used to calculate the distance between two Vector3's ignoring the z value (height)

### Usage

Arguments

* vector1 -> Vector3
  * The first Vector3
* vector2 -> Vector3
  * The second Vector3

Returns

* Returns a number that is the distance between the two points in GTA distance units.

```typescript
const distance = AthenaClient.utility.distance2D(player.pos, target.pos);

```
