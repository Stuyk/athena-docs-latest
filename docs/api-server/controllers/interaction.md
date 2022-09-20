---
title: '.interaction'
order: 0
---

# {{ $frontmatter.title }}

An interaction can be described as a physical place for a user to visit and press `E` to trigger something when at the location.

::: tip Note on Vector3 Heights

Any position provided while standing in-game should have `-1` applied to the Z Axis

:::

## add

Used to create a new interaction point.

It will return a `string` which is a `uid` if a `uid` is not provided.

_Optionally setting `triggerCallbackOnEnter` to true makes the interaction instantly trigger on enter._

```ts
const uniqueIdentifier = Athena.controllers.interaction.add({
    position: new alt.Vector3(0, 0, 0),
    description: 'Do Something',
    isPlayerOnly: true,
    isVehicleOnly: false
    range: 5
    dimension: 0,
    debug: false,
    callback: (player: alt.Player, ...someData: any[]) => {
        console.log('well, hello!')
    },
    onLeaveCallback: (player: alt.Player) => {
        console.log('goodbye')
    }
});
```

## remove

Used to remove an interaction from the world.

```ts
// Some Interaction
const uniqueIdentifier = Athena.controllers.interaction.add({...});
Athena.controllers.interaction.remove(uniqueIdentifier);
```

## get

Used to get the full `InteractionShape` type which is internally an alt:V ColShape with extra data.


```ts
// Some Interaction
const uniqueIdentifier = Athena.controllers.interaction.add({...});
const actualColShape = Athena.controllers.interaction.get(uniqueIdentifier);
```
