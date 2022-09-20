---
title: '.object'
order: 0
---

# {{ $frontmatter.title }}

Objects. They're items in the world that can be spawned and can have collision.

## IObject

```typescript
export interface IObject {
    /**
     * Position of the Object in a 3D space.
     * @type {Vector3}
     * @memberof IObject
     */
    pos: Vector3;

    /**
     * The model name this object.
     * @type {string}
     * @memberof IObject
     */
    model: string;

    /**
     * The rotation of this object.
     * @type {Vector3}
     * @memberof IObject
     */
    rot?: Vector3;

    /**
     * The max distance this object should render at.
     * @type {number}
     * @memberof IObject
     */
    maxDistance?: number;

    /**
     * A unique identifier for this object.
     * @type {string}
     * @memberof IObject
     */
    uid: string;

    /**
     * Local Object ID.
     * Do not actually fill this out.
     * @type {number}
     * @memberof IObject
     */
    local?: number;

    /**
     * Local Object Info
     * Do not automatically fill this out.
     * @type {boolean}
     * @memberof IObject
     */
    isBeingCreated?: boolean;

    /**
     * Is this object interior only.
     * Will only show in a matching interior dimension.
     * @type {boolean}
     * @memberof IObject
     */
    isInterior?: boolean;

    /**
     * Will show across all dimensions.
     * @type {number}
     * @memberof IObject
     */
    dimension?: number;

    /**
     * Should this object have no collision?
     * @type {boolean}
     * @memberof IObject
     */
    noCollision?: boolean;
}

```

## addToPlayer

Adds a object for a specific player. So only the player can see it.

Arguments

* player -> alt.Player
* object -> IObject

Returns

* Returns a `uid` string if not provided.

```ts
const objectUID = Athena.controllers.object.addToPlayer(player, {
    pos: new alt.Vector3(0, 0, 0), 
    model: 'v_61_kitch_pizza'
});
```

## append

Adds a global object the player loads when they join.
Also appends it to any online players.

Arguments

* object -> IObject

Returns

* Returns a `uid` string if not provided.

```typescript
const objectUID = Athena.controllers.object.append({
    pos: new alt.Vector3(0, 0, 0), 
    model: 'v_61_kitch_pizza'
});;
```

## remove

Removes a object based on uid.

* uid -> string

```typescript
// Some Object
const someObjectUID = Athena.controllers.object.append(...);
Athena.controllers.object.remove(someObjectUID);
```

## removeFromPlayer

Removes a player object based on uid.

Arguments

* player -> alt.Player
* uid -> string


```typescript
// Some Object
const someObjectUID = Athena.controllers.object.addToPlayer(somePlayer, ...);
Athena.controllers.object.removeFromPlayer(somePlayer, someObjectUID);
```
