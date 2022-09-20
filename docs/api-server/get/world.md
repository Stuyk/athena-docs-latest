---
title: '.world'
order: -99
---

# {{ $frontmatter.title }}

Used to get general world information.

## positionIsClear

Checks if a position in the world does not have a specific entity in the way.

```ts
const isFreeOfVehicles = Athena.get.world.positionIsClear(new alt.Vector3(0, 0, 0), 'vehicle');

const isFreeOfPlayers = Athena.get.world.positionIsClear(new alt.Vector3(0, 0, 0), 'player');

const isCompletelyFree = Athena.get.world.positionIsClear(new alt.Vector3(0, 0, 0), 'all');
```

_This function is async. Must use an async function._

## isInOceanWater

Check if a specific entity such as a vehicle, or player is in the ocean.

```ts
const isInWater = Athena.get.world.isInOceanWater(somePlayer);
```