---
title: '.vector'
order: 0
---

# {{ $frontmatter.title }}

### distance

This is a simple 3D distance calculation to check the distance between two Vector3's.&#x20;

_This was implemented at a time when alt:V didn't have these utilities._

```typescript
const dist = Athena.utility.vector.distance(player.pos, player2.pos);
```

### distance2d

Same as above, but doesn't use z axis for calculation. Slightly less intensive.

```typescript
const dist = Athena.utility.vector.distance2d(player.pos, player2.pos);
```

### getClosestEntity

Given a list of entities such as a player, or a vehicle you can simply pass a list of them to get the closest type.

#### arguments

* player position
* player rotation
* an array of entities (players, or vehicles)
* a maximum distance to look for, anything lower is consider closer / closest.

```typescript
const players = [...alt.Player.all];
const aPlayer = Athena.utility.vector.getClosestEntity<alt.Player.all>(player.pos, player.rot, players, 5);
```

### getForwardVector

Gets a forward vector of a player or vehicle based on their rotation.

```typescript
const directionPlayerIsFacing = Athena.utility.vector.getForwardVector(player.rot);
```

### getVectorInFrontOfPlayer

Returns a position directly in front of a player based on distance.

**arguments**

* player
* distance

```typescript
const posInFrontOf = Athena.utility.vector.getVectorInFrontOfPlayer(player, 5); 
```

### isBetweenVectors

Simply checks if a position is between two vector points.

**arguments**

* positionToCheck = vector3 position
* pos1 - vector3 position
* pos2 - vector3 position

```typescript
const isBetween = Athena.utility.vector.isBetweenVectors(posToCheck, pos1, pos2);
```
