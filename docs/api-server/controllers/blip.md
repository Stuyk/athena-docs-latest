---
title: '.blip'
order: 0
---

# {{ $frontmatter.title }}


## addToPlayer

Adds a blip for a specific player. So only the player can see it.

::: tip

Requires a UID to remove it later.

:::

### Usage

Arguments

* player -> alt.Player
* blipData -> Blip

Returns

* Returns a void.

```typescript
const newBlip: Blip = {
    pos: { x: 0.0, y: 0.0, z: 72.0 },
    shortRange: true,
    sprite: 1,
    color: BLIP_COLOR.GREEN,
    text: 'My Blip',
    scale: 1,
    uid: 'my_test_blip',
}

Athena.controllers.blip.addToPlayer(player, newBlip);
```


## append

Adds a global blip the player loads when they join.
Also appends it to any online players.

::: tip

Requires a UID to remove it later.

:::

### Usage

Arguments

* blip -> Blip

Returns

* Returns a string containing the UID of the blip.

```typescript
const newBlip: Blip = {
    pos: { x: 0.0, y: 0.0, z: 72.0 },
    shortRange: true,
    sprite: 1,
    color: BLIP_COLOR.GREEN,
    text: 'My Blip',
    scale: 1,
    uid: 'my_test_blip',
}

Athena.controllers.blip.append(newBlip);
```

## remove

Removes a blip based on uid.

### Usage

Arguments

* uid -> string

Returns

* Returns a boolean. True if the blip was removed, false if not.

```typescript
Athena.controllers.blip.remove('my_test_blip');
```


## removeFromPlayer

Removes a player blip based on uid.

### Usage

Arguments

* player -> alt.Player
* uid -> string

Returns

* Returns void.

```typescript
Athena.controllers.blip.removeFromPlayer(player, 'my_test_blip');
```
