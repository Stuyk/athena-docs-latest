---
title: 'Character Document'
order: -1
comment: false
---

# Character Document

```info
This was originally a premium article, but releasing for free.
```

> Version 5+

This tutorial is meant to better explain the document system that comes with Athena.

A document can be defined as a piece of daata that corresponds with the Database. This is because MongoDB calls its database entries a document.

That being said; let's talk about how it works.

## API

The player's individual character document is available after they have successfully selected a character and have been spawned into the world by the gamemode.

So a few places you can get a character instace are from the following:

-   A command ran by the player
-   Athena Player Event for Character Select
-   An onClient event at some point in the future
-   Interaction Instance (Callbacks)
-   Job Instance (Callbacks)

Probably plenty of others I'm forgetting. These are just the most common.

Let's take a command for example. The idea is here is that they run the `/test` command and then we are able to take the player instance from the command, and run it against the `Athena.document.character.get` function.

The data returned is an instance of the `Character` interface.

```ts
import alt from 'alt-server';
import { Athena } from '@AthenaServer/api/athena';

Athena.systems.messenger.commands.register('test', '/test', [], (player: alt.Player) => {
    const data = Athena.document.character.get(player);
    if (typeof data === 'undefined') {
        return;
    }

    console.log(JSON.stringify(data, null, 4));
    console.log(data.bank);
    console.log(data.cash);
    console.log(data._id);
});
```

Great! How do we expand upon this to include custom entries?

## Extending the Character Interface

We used to have to do some crazy stuff to get custom interfaces to work correctly with plugins but because we've changed how we obtain player data we can now extend it!

What do I mean by this?

```ts
function someFunction(player: alt.Player) {
    const data = Athena.document.character.get(player);
    if (typeof data === 'undefined') {
        return;
    }

    // This will not work yet.
    console.log(data.myCustomField);
}
```

If we want to add custom fields we can create an interface to utilize in our get request for player data.

```ts
interface CustomFields = {
    bitcoin?: number;
    doge?: number;
    myCustomField?: string;
}

function someFunction(player: alt.Player) {
    const data = Athena.document.character.get<CustomFields>(player);
    if (typeof data === 'undefined') {
        return;
    }

    // These are all valid fields; but may be undefined.
    if (typeof data.bitcoin !== 'undefined') {
        console.log(data.bitcoin);
    }

    if (typeof data.doge !== 'undefined') {
        console.log(data.doge);
    }

    if (typeof data.myCustomField !== 'undefined') {
        console.log(data.myCustomField);
    }
}
```

## Making Changes to the Document

Let's say the we want to update one of our custom fields with actual data and push it to the database.

We can do so by calling `Athena.document.character.set`

```ts
interface CustomFields = {
    bitcoin?: number;
    doge?: number;
    myCustomField?: string;
}

// Notice how this function is async
// We can only use await when async is present
async function someFunction(player: alt.Player) {
    const data = Athena.document.character.get<CustomFields>(player);
    if (typeof data === 'undefined') {
        return;
    }

    if (typeof data.bitcoin !== 'undefined') {
        console.log(data.bitcoin);
    } else {
        await Athena.document.character.set<CustomFields>('bitcoin', 0);
    }

    if (typeof data.doge !== 'undefined') {
        console.log(data.doge);
    } else {
        await Athena.document.character.set<CustomFields>('doge', 0);
    }

    if (typeof data.myCustomField !== 'undefined') {
        console.log(data.myCustomField);
    } else {
        await Athena.document.character.set<CustomFields>('myCustomField', 'hi!');
    }
}
```

## Bulk Updates

Now you can see if there's a ton of fields how this can be incredibly annoying to update. I offer you an alternative solution that allows you to bulk update data and do a single database instance call.

This makes things much more efficient.

We can do so by calling `Athena.document.character.setBulk`

```ts
interface CustomFields = {
    bitcoin?: number;
    doge?: number;
    myCustomField?: string;
}

// Notice how this function is async
// We can only use await when async is present
async function someFunction(player: alt.Player) {
    const data = Athena.document.character.get<CustomFields>(player);
    if (typeof data === 'undefined') {
        return;
    }

    const dataToUpdate: CustomFields = {};
    if (typeof data.bitcoin === 'undefined') {
        dataToUpdate.bitcoin = 0;
    }

    if (typeof data.doge === 'undefined') {
        dataToUpdate.doge = 0;
    }

    if (typeof data.myCustomField === 'undefined') {
        dataToUpdate.myCustomField = 'hi!';
    }

    await Athena.document.character.setBulk<CustomFields>(player, dataToUpdate);
}
```

## Listening for Changes

When a piece of database data is updated we now have the ability to listen to those changes based on the `key` of that data. This means that if we want to listen for changes to a key such as `cash` it can be done in the following way.

> A word of warning while using this though.
>
> Ensure you are not setting database data that is the same key while using the onChange function.
>
> You will create a recursive loop.

The types associated with newValue and oldValue are determined by the original interface.

```ts
function onUpdate(player: alt.Player, newValue: number, oldValue: number) {
    console.log(`Player Cash Changed from: ${oldValue} to ${newValue}`);
}

Athena.document.player.onChange('cash', onUpdate);
```

`onChange` also supports generic types as well to support custom fields. Here's an example of that using the same interface that was supplied earlier in this tutorial called `CustomFields`.

```ts
function onUpdate(player: alt.Player, newValue: number, oldValue: number) {
    console.log(`Player Doge Changed from: ${oldValue} to ${newValue}`);
}

Athena.document.player.onChange<CustomFields>('doge', onUpdate);
```

## Wrapping Up

Hopefully this tutorial gives you a better understanding of updating individual `Character` data in the database for a given player.
