---
title: 'Your First Plugin'
order: -99
comment: false
---

# Your First Plugin

```info
This was originally a premium article, but releasing for free.
```

> Version 5+

Athena has a robust Plugin framework that allows you to modify core code of the framework without actually touching the code base.

## Create Plugin Folder

Inside of VSCode in the file tree on the left, create a new folder.

Name the folder anything you want. Preferrably `lowercase` and `no special characters`.

![](https://i.imgur.com/mDnKBsu.png)

## Create Child Folders

Inside of your new folder create three more folders.

-   server
-   client
-   shared

![](https://i.imgur.com/7XRe1fK.png)

## Create Index Files

Inside of the following folders, create an `index.ts` file.

-   server
-   client

![](https://i.imgur.com/8VIqQWN.png)

## Modify Server Index File

The index file is where you will always begin writing your code.

Let's begin by importing the Plugin Initialization code.

```ts
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'my-plugin';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    console.log(`Hello from plugin on server side!`);
});
```

## Test the Plugin

Once the file is saved, try running your server and checking console for a response.

If you get a response, or see your plugin in the plugin list then it has been loaded successfully.

![](https://i.imgur.com/rXe7BBv.png)

## Writing a Command

Commands are a great start to try and understand how the Framework works and play around with different features.

Let's add a command to the `server->index.ts` file.

```ts
import alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'my-plugin';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    console.log(`Hello from plugin on server side!`);
});

Athena.systems.messenger.commands.register('hello', '/hello - This is a test command', [], (player: alt.Player) => {
    const characterData = Athena.document.character.get(player);
    if (typeof characterData === 'undefined') {
        return;
    }

    Athena.systems.messenger.player.send(player, `Hello ${characterData.name}!`);
});
```

## Test the Command

Go in-game, and try writing the command into chat.

![](https://i.imgur.com/29BCYF7.png)

A response should be visible in the chat as a reply.

![](https://i.imgur.com/p0X3jd6.png)

## Teleport the Player Somewhere

Let's go more in-depth with our command and try to teleport somewhere.

Go in-game and press `F1` to print a position to your `F8` console in-game.

Here's a Vector3 Position if you just want to follow along:

```ts
const pos: alt.IVector3 = {
    x: -552.6553344726562,
    y: 302.7317199707031,
    z: 83.20454406738281,
};
```

We are going to append that position to the code, and use some of the Athena API safe setters to change the player position.

```ts
import alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'my-plugin';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    console.log(`Hello from plugin on server side!`);
});

const pos: alt.IVector3 = {
    x: -552.6553344726562,
    y: 302.7317199707031,
    z: 83.20454406738281,
};

Athena.systems.messenger.commands.register('hello', '/hello - This is a test command', [], (player: alt.Player) => {
    Athena.player.safe.setPosition(player, pos.x, pos.y, pos.z);
    Athena.player.emit.notification(player, `You were teleported!`);
});
```

## Test the Teleport Changes

Go in-game and test the `/hello` command again to see if it teleports the player somewhere.

![](https://thumbs.gfycat.com/DigitalKeenBluewhale-size_restricted.gif)

## Adding Client Side Events

Let's say that when the user teleports we want an explosion to be created at their final destination.

We can utilize the client-side `natives` to do this.

First create a file called `events.ts` in the `shared` folder.

Add an `exported object` with an event name inside of it. Maybe call this object something like `MyPluginExports`.

```ts
export const MyPluginExports = {};
```

We are going to add a string to help identify what event should be called on client-side when executing a command from server to client.

```ts
export const MyPluginExports = {
    TO_CLIENT: {
        EXPLODE: 'my-plugin-explode-event',
    },
};
```

Go back to the `server->index.ts` file and we are going to call this event on the player to trigger it on client-side.

Modify the command as follows:

```ts
import alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { MyPluginExports } from '../shared/events';

const PLUGIN_NAME = 'my-plugin';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    console.log(`Hello from plugin on server side!`);
});

const pos: alt.IVector3 = {
    x: -552.6553344726562,
    y: 302.7317199707031,
    z: 83.20454406738281,
};

Athena.systems.messenger.commands.register('hello', '/hello - This is a test command', [], (player: alt.Player) => {
    Athena.player.safe.setPosition(player, pos.x, pos.y, pos.z);
    Athena.player.emit.notification(player, `You were teleported!`);
    player.emit(MyPluginExports.TO_CLIENT.EXPLODE);
});
```

Now that we have the server-side setup. Navigate into the `client->index.ts` file and lets setup the file for an event.

Append these imports to the top of the `client->index.ts` file.

```ts
import * as alt from 'alt-client';
import * as native from 'natives';
import { MyPluginExports } from '../shared/events';
```

Now we are going to listen for an `alt.onServer` event. We should definitely log a message to console to make sure it works.

```ts
import * as alt from 'alt-client';
import * as native from 'natives';
import { MyPluginExports } from '../shared/events';

alt.onServer(MyPluginExports.TO_CLIENT.EXPLODE, () => {
    console.log('Doing something!!!');
});
```

## Server to Client Event Testing

It's time to go in-game and test the event. Run your command and check your `F8` in-game console after running the command to make sure your message shows up in the console log.

![](https://i.imgur.com/CtEiSF1.png)

## Building the Explode Part

Now that we know the event works. Let's create an explosion at the location of where the player is standing after teleporting.

We will be using the `native.addExplosion` native.

If we hover over it, or when we create the `()` parenthesis we should be able to see what the function is asking for to make it valid code.

![](https://i.imgur.com/VtsteOK.png)

Looks like we have some things to add like Vector3 (XYZ) coordinates and some other information. If you are unsure of how to use this native it's sometimes useful to check the `alt:V Discord` and search for the native. Otherwise, googling the `FiveM` equivalent of the native can help you gather search results to see how others may be using the native.

That being said, let's build an explosion native.

You can get the current player's position with `alt.Player.local.pos`.

```ts
import * as alt from 'alt-client';
import * as native from 'natives';
import { MyPluginExports } from '../shared/events';

alt.onServer(MyPluginExports.TO_CLIENT.EXPLODE, () => {
    native.addExplosion(
        alt.Player.local.pos.x,
        alt.Player.local.pos.y,
        alt.Player.local.pos.z,
        25,
        0,
        true,
        false,
        5,
        true
    );
});
```

## Test the Explosion

Now it's time to test the explosion effect and see if it works in-game.

![](https://thumbs.gfycat.com/RemarkableQuerulousFlee-size_restricted.gif)

## Adding Command Permissions

If you want to make the command restricted to a specific `Account Permission` you can specify a permission string in the original array.

```ts
Athena.systems.messenger.commands.register(
    'hello',
    '/hello - This is a test command',
    ['admin', 'moderator'], // These are Permissions
    (player: alt.Player) => {
        Athena.player.safe.setPosition(player, pos.x, pos.y, pos.z);
        Athena.player.emit.notification(player, `You were teleported!`);
        player.emit(MyPluginExports.TO_CLIENT.EXPLODE);
    }
);
```

## Adding Character Permissions

Athena also has individual character permissions. Let's say that someone has the permission for `mechanic` that you added to the user.

Character permissions are restricted to the individual character account.

```ts
Athena.systems.messenger.commands.register(
    'hello',
    '/hello - This is a test command',
    ['mechanic'], // These are now Character Permissions
    (player: alt.Player) => {
        Athena.player.safe.setPosition(player, pos.x, pos.y, pos.z);
        Athena.player.emit.notification(player, `You were teleported!`);
        player.emit(MyPluginExports.TO_CLIENT.EXPLODE);
    },
    true // This use character permissions now
);
```

## Handling Command Arguments

When you recieve additional data from a command it will always be a `string`. This means that if you are expecting a number you should convert it with `parseFloat`.

```ts
Athena.systems.messenger.commands.register(
    'numerical',
    '/numerical [id]',
    [],
    // You can add as many arguments as you want
    // 'id' is considered an argument
    (player: alt.Player, id: string) => {
        if (typeof id === 'undefined') {
            Athena.player.emit.message(player, `Missing id in args.`);
            return;
        }

        const idReal = parseFloat(id);
        if (isNaN(idReal)) {
            Athena.player.emit.message(player, `ID must be a number.`);
            return;
        }

        console.log(`${idReal} is now a number...`);
    }
);
```

If you wish to construct a message from the arguments following a command you can do so by using `...args: string[]` for the function.

```ts
Athena.systems.messenger.commands.register(
    'longmessage',
    '/longmessage [...message]',
    [],
    (player: alt.Player, ...args: string[]) => {
        const message = args.join(' '); // Combines all args into a single string.
        console.log(message);
    }
);
```

## Wrapping Up

This is just the basics of writing a plugin, and beginning work on your very first plugin. Hope you found this article interesting and learned a few new things.
