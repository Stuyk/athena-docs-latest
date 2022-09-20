---
title: '.effects'
order: -99
---

# {{ $frontmatter.title }}

A system used to register item effects when an item is consumed / used.

Item effects can be added to items by adding the `data.event` property.

Example:

```ts
{
    name: 'someItem',
    ...
    data: {
        event: 'item-effect-heal'
    }
    ...
}
```

## add

Adds an effect based on `effectName` and a callback to call when the item is used with a specific item effect.

```ts
function handleItemEvent(player: alt.Player, item: Item, slot: number, type: INVENTORY_TYPE | string) {
    if (!item || !item.data || !item.data.amount) {
        return;
    }

    Athena.player.safe.addHealth(player, item.data.amount, false);
    Athena.player.inventory.notify(player, `+${item.data.amount} Health`);

    if (item.data.sound) {
        Athena.player.emit.sound3D(player, item.data.sound, player);
    }
}

Athena.systems.effects.add('item-effect-heal', handleItemEvent);
```

## remove

Removes an item effect globally.

```ts
Athena.systems.effects.remove('item-effect-heal');
```