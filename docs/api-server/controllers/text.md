---
title: '.text'
order: 0
---

# {{ $frontmatter.title }}

TextLabels are floating text that can be seen in a 3D World Space.

## TextLabel

```typescript

export interface TextLabel {
    /**
     * The position where to place the TextLabel in a 3D space.
     * @type {Vector3}
     * @memberof TextLabel
     */
    pos: Vector3;

    /**
     * The 'Text' to show on this text label.
     * @type {string}
     * @memberof TextLabel
     */
    data: string;

    /**
     * The maximum distance this text label should render at.
     * @type {number}
     * @memberof TextLabel
     */
    maxDistance?: number;

    /**
     * The unique identifier to remove this text label if necessary.
     * @type {string}
     * @memberof TextLabel
     */
    uid?: string;

    /**
     * The dimension to show this text label in.
     * @type {number}
     * @memberof TextLabel
     */
    dimension?: number;
}


```

## addToPlayer

Adds a text for a specific player. So only the player can see it.

Arguments

* player -> alt.Player
* text -> TextLabel

Returns

* Returns a `uid` string if not provided.

```ts
const textUID = Athena.controllers.text.addToPlayer(player, {
    data: '~g~Hello ~r~World',
    pos: new alt.Vector3(0, 0, 0),
    maxDistance: 10,
});
```

## append

Adds a global text the player loads when they join.
Also appends it to any online players.

Arguments

* text -> TextLabel

Returns

* Returns a `uid` string if not provided.

```typescript
const textUID = Athena.controllers.text.append({
    data: '~g~Hello ~r~World',
    pos: new alt.Vector3(0, 0, 0),
    maxDistance: 10,
});;
```

## remove

Removes a text based on uid.

* uid -> string

```typescript
// Some text
const someTextUID = Athena.controllers.text.append(...);
Athena.controllers.text.remove(someTextUID);
```

## removeFromPlayer

Removes a player text based on uid.

Arguments

* player -> alt.Player
* uid -> string


```typescript
// Some text
const someTextUID = Athena.controllers.text.addToPlayer(somePlayer, ...);
Athena.controllers.text.removeFromPlayer(somePlayer, someTextUID);
```
