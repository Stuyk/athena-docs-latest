---
title: '.notification'
order: 0
---

# {{ $frontmatter.title }}

A world notification can be described as a in-world notification with an arrow at the bottom.

::: warning

These are limited to 1 on screen at a time. Use sparingly.

:::

## IWorldNotification

```typescript

export interface IWorldNotification {
    /**
     * Position of the Object in a 3D space.
     * @type {Vector3}
     * @memberof IObject
     */
    pos: Vector3;

    /**
     * Text to display for this world notification.
     * @type {string}
     * @memberof IWorldNotification
     */
    text: string;

    /**
     * The IWorldNotification Type Associated with this IWorldNotification
     * @type {number}
     * @memberof IWorldNotification
     */
    type: WORLD_NOTIFICATION_TYPE | number;

    /**
     * The background color associated with this notification.
     * There are at least 30.
     * @type {number}
     * @memberof IWorldNotification
     */
    background?: number;

    /**
     * The max distance to render this IWorldNotification.
     * @type {number}
     * @memberof IWorldNotification
     */
    maxDistance?: number;

    /**
     * The unique identifier for this IWorldNotification.
     * @type {string}
     * @memberof IWorldNotification
     */
    uid?: string;

    /**
     * The dimension to display this IWorldNotification in.
     * @type {number}
     * @memberof IWorldNotification
     */
    dimension?: number;
}
```

## addToPlayer

Adds a text for a specific player. So only the player can see it.

Arguments

* player -> alt.Player
* notification -> IWorldNotification

Returns

* Returns a `uid` string if not provided.

```ts
const notificationUID = Athena.controllers.notification.addToPlayer(player, {
    text: '~g~Hello ~r~World',
    pos: new alt.Vector3(0, 0, 0),
    type: 3,
    maxDistance: 5
});
```

## append

Adds a global notification the player loads when they join.
Also appends it to any online players.

Arguments

* notification -> IWorldNotification

Returns

* Returns a `uid` string if not provided.

```typescript
const notificationUID = Athena.controllers.notification.append({
    text: '~g~Hello ~r~World',
    pos: new alt.Vector3(0, 0, 0),
    type: 3,
    maxDistance: 5
});
```

## remove

Removes a notification based on uid.

* uid -> string

```typescript
// Some notification
const somenotificationUID = Athena.controllers.notification.append(...);
Athena.controllers.notification.remove(somenotificationUID);
```

## removeFromPlayer

Removes a player notification based on uid.

Arguments

* player -> alt.Player
* uid -> string


```typescript
// Some notification
const somenotificationUID = Athena.controllers.notification.addToPlayer(somePlayer, ...);
Athena.controllers.notification.removeFromPlayer(somePlayer, somenotificationUID);
```
