---
title: '.player'
order: -99
---

# {{ $frontmatter.title }}

Used to get player information for player's who are currently online.

## byAccount

Gets an online player by account identifier based on their MongoDB account `_id`.

```ts
const player = Athena.get.player.byAccount('631779d7119e86368a313e1b')
if (!player || !player.valid) {
    console.log('Could not find player');
    return;
}
```

## byName

Gets an online player by their name.
Not case sensitive and returns the first player it finds matching that name.

```ts
const player = Athena.get.player.byName('joe dohn');
if (!player || !player.valid) {
    console.log('Could not find player');
    return;
}
```

## byPartialName

Gets an online player by their partial name.
Not case sensitive and returns the first player it finds that includes the partial

```ts
const player = Athena.get.player.byName('joe');
if (!player || !player.valid) {
    console.log('Could not find player');
    return;
}
```

## byDatabaseID

Get an online player based on their MongoDB _id

```ts
const player = Athena.get.player.byDatabaseID('631779d7119e86368a313e1b')
if (!player || !player.valid) {
    console.log('Could not find player');
    return;
}
```

## byID

Used to get a player by the ID that you see in-game on your screen.

```ts
const player = Athena.get.player.byID(5)
if (!player || !player.valid) {
    console.log('Could not find player');
    return;
}
```

## inFrontOf

Used to get a player by the ID that you see in-game on your screen.

```ts
async function doSomething() {
    const target = await Athena.get.player.inFrontOf(somePlayer, 8) // 8 -> Distance
    if (!target || !target.valid) {
        console.log('Could not find a target');
        return;
    }
}
```

_This function is async. Must use an async function._

## isNearPosition

Used to check if a player is near a position.

```ts
const isNear = Athena.get.player.isNearPosition(somePlayer, new alt.Vector3(0, 0, 0), 3); // 3 -> Distance
if (!isNear) {
    console.log('Player is not near it yet.');
    return;
}
```

## waypoint

Used to get the player's waypoint position from the game map.

```ts
const pos = Athena.get.player.waypoint(somePlayer);
if (!pos) {
    console.log('Could not get waypoint from map.');
    return;
}
```

## closestToPlayer

Return the closest player to a player.

Does not have a distance limitation.

Does not return self.

```ts
const targetPlayer = Athena.get.player.closestToPlayer(somePlayer);
if (!targetPlayer || !targetPlayer.valid) {
    console.log('Could not find a player close to the player.');
    return;
}
```

## closestToVehicle

Return the closest player to a vehicle.

Does not have a distance limitation.

Does not return self.

```ts
const targetPlayer = Athena.get.player.closestToVehicle(someVehicle);
if (!targetPlayer || !targetPlayer.valid) {
    console.log('Could not find a player close to the vehicle.');
    return;
}
```

## characters

Returns all characters that belong to an account, player, or account._id

If using player it requires the user to at least be logged in first.

Returns an array of character information for the account.

```ts
async function doSomething() {
    const characters = await Athena.get.player.characters(somePlayer);

    // OR - Account Object

    const characters = await Athena.get.player.characters(someAccount);

    // OR - _id string

    const characters = await Athena.get.player.characters('631779d7119e86368a313e1b');
}
```