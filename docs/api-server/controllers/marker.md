---
title: '.marker'
order: 0
---

# {{ $frontmatter.title }}

Markers are the slightly transparent glowy circles, cones, spheres, etc. that can show in the world to mark objectives and such.

They do not have a trigger element, but they can be walked through to help mark a trigger element.

## Marker

```typescript
export interface Marker {
    /**
     * Position of the Object in a 3D space.
     * @type {Vector3}
     * @memberof IObject
     */
    pos: Vector3;

    /**
     * The Marker Type Associated with this Marker
     * @type {number}
     * @memberof Marker
     */
    type: MARKER_TYPE | number;

    /**
     * The color of the marker. All values are 0 - 255.
     * @type { alt.RGBA }
     * @memberof Marker
     */
    color: alt.RGBA;

    /**
     * The scale of this marker.
     * @type {Vector3}
     * @memberof Marker
     */
    scale?: Vector3;

    /**
     * The max distance to render this marker.
     * @type {number}
     * @memberof Marker
     */
    maxDistance?: number;

    /**
     * The unique identifier for this marker.
     * @type {string}
     * @memberof Marker
     */
    uid?: string;

    /**
     * The dimension to display this marker in.
     * @type {number}
     * @memberof Marker
     */
    dimension?: number;

    /**
     * Should the marker be slightly animated.
     * @type {boolean}
     * @memberof Marker
     */
    bobUpAndDown?: boolean;

    /**
     * Should the marker face the player's camera.
     * @type {boolean}
     * @memberof Marker
     */
    faceCamera?: boolean;

    /**
     * Should the marker rotate to face the player.
     * @type {boolean}
     * @memberof Marker
     */
    rotate?: boolean;
}
```

## addToPlayer

Adds a marker for a specific player. So only the player can see it.

Arguments

* player -> alt.Player
* marker -> Marker

Returns

* Returns a `uid` string if not provided.

```ts
const markerUID = Athena.controllers.marker.addToPlayer(player, {
    type: 36,
    color: new alt.RGBA(0, 255, 0, 100),
    pos: new alt.Vector3(0, 0, 0),
    maxDistance: 25,
    scale: new alt.Vector3(1, 1, 1),
});
```

## append

Adds a global marker the player loads when they join.
Also appends it to any online players.

Arguments

* marker -> Marker

Returns

* Returns a `uid` string if not provided.

```typescript
const markerUID = Athena.controllers.marker.append({
    type: 36,
    color: new alt.RGBA(0, 255, 0, 100),
    pos: new alt.Vector3(0, 0, 0),
    maxDistance: 25,
    scale: new alt.Vector3(1, 1, 1),
});
```

## remove

Removes a marker based on uid.

* uid -> string

```typescript
// Some Marker
const markerUID = Athena.controllers.marker.append(...);
Athena.controllers.marker.remove(markerUID);
```

## removeFromPlayer

Removes a player marker based on uid.

Arguments

* player -> alt.Player
* uid -> string


```typescript
// Some Marker
const markerUID = Athena.controllers.marker.addToPlayer(somePlayer, ...);
Athena.controllers.marker.removeFromPlayer(somePlayer, markerUID);
```
