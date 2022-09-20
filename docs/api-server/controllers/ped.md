---
title: '.ped'
order: 0
---

# {{ $frontmatter.title }}

Pedestrians are non-moving static pedestrians that can represent something in the world.

::: warning

Pedestrians are only statically synced. They do not move, and some players may see slightly different pedestrians.

:::

## IPed

```typescript
export interface IPed {
    /**
     * Position of the Ped in a 3D space.
     * @type {Vector3}
     * @memberof IPed
     */
    pos: Vector3;

    /**
     * The model name this Ped.
     * @type {string}
     * @memberof IPed
     */
    model: string;

    /**
     * The rotation of this Ped. 0 - 360
     * @type {number}
     * @memberof IPed
     */
    heading?: number;

    /**
     * The max distance this Ped should render at.
     * @type {number}
     * @memberof IPed
     */
    maxDistance?: number;

    /**
     * A unique identifier for this Ped.
     * @type {string}
     * @memberof IPed
     */
    uid: string;

    /**
     * A list of random animations to play on this pedestrian.
     * @type {Animation[]}
     * @memberof IPed
     */
    animations?: Animation[];

    /**
     * Should the appearance of this ped be randomized when spawned?
     * @type {boolean}
     * @memberof IPed
     */
    randomizeAppearance?: boolean;

    /**
     * Local Ped ID.
     * Do not actually fill this out.
     * @type {number}
     * @memberof IPed
     */
    local?: number;

    /**
     * Local Ped Info
     * Do not automatically fill this out.
     * @type {boolean}
     * @memberof IPed
     */
    isBeingCreated?: boolean;

    /**
     * Will show across all dimensions.
     * @type {number}
     * @memberof IPed
     */
    dimension?: number;
}
```

## addToPlayer

Adds a pedestrian for a specific player. So only the player can see it.

Arguments

* player -> alt.Player
* ped -> IPed

Returns

* Returns a `uid` string if not provided.

```ts
const pedUID = Athena.controllers.ped.addToPlayer(player, {
    uid: `ped-${Math.floor(Math.random() * 500000)}`,
    model: 'u_f_m_casinocash_01',
    pos: {
        x: player.pos.x,
        y: player.pos.y,
        z: player.pos.z - 1,
    },
});
```

## append

Adds a global pedestrian the player loads when they join.
Also appends it to any online players.

Arguments

* ped -> IPed

Returns

* Returns a `uid` string if not provided.

```typescript
const pedUID = Athena.controllers.ped.append({
    uid: `ped-${Math.floor(Math.random() * 500000)}`,
    model: 'u_f_m_casinocash_01',
    pos: {
        x: player.pos.x,
        y: player.pos.y,
        z: player.pos.z - 1,
    },
});
```

## remove

Removes a pedestrian based on uid.

* uid -> string

```typescript
// Some text
const somePedUID = Athena.controllers.ped.append(...);
Athena.controllers.ped.remove(somePedUID);
```

## removeFromPlayer

Removes a player pedestrian based on uid.

Arguments

* player -> alt.Player
* uid -> string


```typescript
// Some Ped
const somePedUID = Athena.controllers.ped.addToPlayer(somePlayer, ...);
Athena.controllers.ped.removeFromPlayer(somePlayer, somePedUID);
```
