---
title: 'Items Explained'
order: 0
comment: false
---

# Items Explained

```info
This was originally a premium article, but releasing for free.
```

> Version 5+

These code examples are meant to give you a faster understanding of how to perform inventory manipulation.

## Rules for Modifying Items

-   Always make a copy of the inventory, or equipment before modifying it.
    -   You can use the `deepCloneArray` function to perform this.

```ts
import { deepCloneArray, deepCloneObject } from '@AthenaShared/utility/deepCopy';
import { StoredItem } from '@AthenaShared/interfaces/item';

function doingSomething(player: alt.Player) {
    const playerData = Athena.document.character.get(player);
    const inventoryCopy = deepCloneArray<StoredItem>(playerData.inventory);
}
```

-   Never modify an item instance directly.

    -   This means if you lookup an item with the `getAt` function. DO NOT MODIFY IT.
    -   You should be modifying the array where the item belongs, and the item in the array itself.
    -   See the above tip for a code example.

-   Only modify inventory data sets, and re-apply that data set with Athena.document.player.set

```ts
import { deepCloneArray, deepCloneObject } from '@AthenaShared/utility/deepCopy';
import { StoredItem } from '@AthenaShared/interfaces/item';

// This is the most complicated way to modify items.
// See below for further examples of how to do less complicated item manipulation.
function doSomething(player: alt.Player) {
    const playerData = Athena.document.character.get(player);
    const inventoryCopy = deepCloneArray<StoredItem>(playerData.inventory);
    inventoryCopy[0].quantity = 5;
    Athena.document.player.set('inventory', inventoryCopy);
}
```

## Item Types

There are three types of `Items` that may exist. Here's what types they are and what they are for.

-   BaseItem

    -   A single instance of general item information.
    -   Usually contains generic information to establish what the item does.
    -   This can include item effects.
    -   The behavior of the item can be generated here as well.

-   StoredItem

    -   The smallest version of an inventory item.
    -   Often stored in the player document, or other storage interfaces.
    -   This is the type you will come across frequently.
    -   Can contain unique data specific to that item instance only.

-   Item
    -   Distributed to the client at runtime with all item information when they open their inventory.
    -   You will almost never create this one.
    -   This is a combination of both BaseItem and StoredItem
    -   The 'data' from the BaseItem is assigned to the StoredItem

## Base Item Creation

When you want to create an item, the first thing you should do is programtically generate one.

The item will attempt to be inserted into the Database every time the server runs.

If it already exists, it will ignore trying to add it again.

Let's take the basic 'Food' item as an example.

```ts
import * as Athena from '@AthenaServer/api';

const consumableEventName = 'edible';

// This code generates the item.
// It is recommended to keep dbName lowercase.
Athena.systems.inventory.factory.upsertAsync({
    dbName: 'burger', // Used to lookup the item for more info
    icon: 'burger', // An icon associated with this item
    name: 'Burger', // The proper name of the item
    maxStack: 8, // The maximum stack of this item
    weight: 1, // The weight per quantity for stored items.
    behavior: {
        // See Below
        canDrop: true,
        canStack: true,
        canTrade: true,
        destroyOnDrop: false,
        isToolbar: true,
    },
    consumableEventToCall: consumableEventName, // The effect name to call when consumed / used.
    data: {
        // Info pertaining to the item effect
        health: 5,
    },
});

// This is an item effect that is associated with this item type.
// The item effect can be re-used on other items as well.
Athena.systems.inventory.effects.add(
    consumableEventName,
    async (player: alt.Player, slot: number, type: 'inventory' | 'toolbar') => {
        // Always convert type to String. It's a TypeScript issue here.
        const propertyName = String(type);

        // We use this to get the data from the database for the associated player.
        const data = Athena.document.character.get(player);
        if (typeof data === 'undefined' || typeof data[propertyName] === 'undefined') {
            return;
        }

        // We then use either 'inventory' or 'toolbar' to get the item from their data set.
        // This is determined through other deeper pieces of code.
        // The item will be undefined if the item is not found.
        // Notice how we used a generic type (The thing inside <>) to assign a custom type to the data set.
        // This makes 'item.data.health' accessible to us.
        const item = Athena.systems.inventory.slot.getAt<{ health: number }>(slot, data[propertyName]);
        if (typeof item === 'undefined') {
            return;
        }

        // We remove exactly 1 of this item from the inventory.
        // It will return 'true' if it was successfully removed.
        const didRemove = await Athena.player.inventory.sub(player, { dbName: item.dbName, quantity: 1 });
        if (!didRemove) {
            Athena.player.emit.notification(player, `Could not eat ${item.dbName}`);
            return;
        }

        // We add some health to the player.
        Athena.player.safe.addHealth(player, item.data.health);

        // We notify them that they ate the item.
        Athena.player.emit.notification(player, `You ate 1 ${item.dbName}`);
    }
);
```

## Base Item Behavior

When a BaseItem is created through the `itemFactory` it may have behavior assigned to it.

There are several categories of behavior that can be toggled on.

-   canDrop

    -   Can this item be dropped?

-   canStack

    -   Can this item be stacked?

-   canTrade

    -   Can this item be traded / given?

-   isClothing

    -   Is this a clothing item type?

-   isToolbar

    -   Can this item be dragged into the toolbar at the top of the inventory.

-   isWeapoon

    -   Is this item a weapon?
    -   Used as a flag to determine if there is a 'weapon' in the player's inventory.

-   destroyOnDrop

    -   Should the item be destroyed the moment the player drops it?
    -   Think of it like a soulbound item.

-   isCustomIcon
    -   Forces a custom icon to be used.

## Adding Items

When you want to add an item to a player, it's incredibly simple.

You just need to know the `dbName` of the item you are adding, and the quantity.

```ts
const didAddItem = await Athena.player.inventory.add(player, {
    dbName: 'burger',
    quantity: 1,
    data: {},
});

if (!didAddItem) {
    Athena.player.emit.notification(player, `Could not add. Inventory full?`);
    return;
}

Athena.player.emit.notification(player, `Added the item!`);
```

That's all that you have to do to add an item to the user's inventory.

If it can stack, it will stack automatically. It will automatically save to the database as well.

Very simple.

## Removing Items

When you want to remove an item from a player it is also simple.

```ts
const didRemoveItem = await Athena.player.inventory.sub(player, {
    dbName: 'burger',
    quantity: 1,
});

if (!didRemoveItem) {
    Athena.player.emit.notification(player, `Could not remove. No item found.`);
    return;
}

Athena.player.emit.notification(player, `Removed the item!`);
```

## Additional Tips and Tricks

### Auto-Completion for Item Data

If you find yourself in a place where you have the StoredItem, but can't get the right `data` auto-completion.

You can simply convert it to the version you need with the `as` keyword.

```ts
import { StoredItem } from '@AthenaShared/interfaces/item';

const otherItemInstance = someItem as StoredItem<{
    my: string;
    custom: number;
    data: Object;
    goes: string;
    here: 'okay!';
}>;
```

### Safe Item Instances

When you have an item instance that you want to share with someone else. Always deepClone it to break any bindings.

```ts
import { StoredItem } from '@AthenaShared/interfaces/item';

const otherItemInstance = someItem as StoredItem<{
    my: string;
    custom: number;
    data: Object;
    goes: string;
    here: 'okay!';
}>;
const newInstance = deepCloneObject<typeof otherItemInstance>(otherItemInstance);
```
