---
title: 'Code Examples'
outline: [1,3]
order: -99
---

# Code Examples

> Written for Athena V5+

> This document may become out of date in the future. It serves as a basis for what it looks like to write plugins for Athena.

::: info
This doesn't even hold a torch to the amount of functionality you have with Athena, this is only scratching the surface.
:::

## Preface

This page is about showing you what it is like to program a new feature using this framework.

Even as a new developer with no experience this should look like plain English to you, if you can read English you can write code.

::: warning
Things get more complex the further you go down, but they also get a lot cooler.
<img src="https://i.imgur.com/iIfib79.png" width="28" align="right" />
:::

## Plugins

Everything you do in Athena can be done inside of a plugin.

[Learn more about creating a plugins](../making-plugins/creating-plugins.md).

If you want to change the functionality of something inside of the main code base, you can override it. Which is done inside of a plugin.

::: details Expand

```ts
// Originally I would call this function.
Athena.player.currency.add(somePlayer, 'cash', 5);

// This is an override function
Athena.player.currency.override('add', (player, type, amount) => {
    // Now I can override that behavior and write whatever  I want it to do instead.
    // This effects the entire codebase without ever touching the main function.
    return true;
});
```

:::

### Plugin Loading

Inside of any plugin folder you can add a file called `disable` and it will prevent it from loading. The file does not have any extension, it just works.

Also acceptable ways to turn off a plugin:

- disable
- disabled
- disabled.plugin
- disable.plugin

## Examples

### Player API

We can emit various events through the player APIs.

::: details Expand

```ts
Athena.player.currency.add(somePlayer, 'cash', 5);
Athena.player.currency.add(somePlayer, 'bank', 20);
Athena.player.currency.sub(somePlayer, 'cash', 5);
Athena.player.currency.set(somePlayer, 'cash', 50000);

Athena.player.emit.message(somePlayer, 'Hello there!')
Athena.player.emit.notification(somePlayer, 'Hello there!')
Athena.player.emit.sound2D(somePlayer, 'eat.ogg');
Athena.player.emit.fadeScreenToBlack(somePlayer, 5000);
Athena.player.emit.fadeScreenFromBlack(somePlayer, 5000);

Athena.player.teleport.goto(somePlayer, targetPlayer);
Athena.player.teleport.toMe(somePlayer, targetPlayer);
Athena.player.teleport.toVehicle(somePlayer, someVehicle);

Athena.player.weapons.clear(somePlayer);
```
:::

### Command API

Let's say you want to create a command that teleports you to some location that the user defines through a command.

::: details Expand
```ts
Athena.systems.messenger.commands.register('greetme', '/greetme', ['admin'], (player) => {
    Athena.player.emit(player, '{FF000}Hi There! I wrote this in RED.');
});
```
:::

::: details Expand

```ts
const locations = {
    'bank': { x: 0, y: 0, z: 0 }; // Not valid locations but an example
    'lspd': { x: 1, y: 1, z: 1 };
}

function tpLocCommand(player: alt.Player, location: string) {
    const somePos = locations[location];
    if (!somePos) {
        Athena.player.emit.message(player, 'Not a valid location!');
        return;
    }

    // Teleports the player
    player.pos = new alt.Vector3(somePos);
}

Athena.systems.messenger.commands.register('tploc', '/tploc [place]', ['admin'], tpLocCommand);
```

:::

### Vehicles

Vehicles can easily be added to player accounts by using the vehicle API pathway.

::: details Expand
```ts
// Add a vehicle to a player...
Athena.vehicle.add.toPlayer(somePlayer, 'infernus', somePlayer.pos);

// Create custom functionality that triggers vehicle related events.
Athena.vehicle.asPlayer.toggleDoor(somePlayer, someVehicle, 0);
Athena.vehicle.asPlayer.toggleEngine(somePlayer, someVehicle);
Athena.vehicle.asPlayer.toggleLock(somePlayer, someVehicle);

// Create temporary session vehicles
Athena.vehicle.tempVehicles.add('washington', { deleteOnLeave: true });

// Save custom vehicle data to the database
interface CustomData {
    nickname?: string;
}

await Athena.document.vehicle.set<CustomData>(someVehicle, 'nickname', 'slow but kinda fast');

// Obtain custom data from a vehicle
const data = Athena.document.vehicle.get<CustomData>(someVehicle);
console.log(`Spawned vehicle with nickname: ${data.nickname ? data.nickname : 'No Name'}`);
```
:::

### Event Examples

Lets talk about alt:V events in general and custom Athena events.

Athena has custom events for things such as:

- Dropping Items
- Unequipping Items
- Picking Up Items
- Account Creation
- Character Creation
- Respawning
- Spawning

::: details Expand
```ts
alt.on('some-event', () => {});
alt.onClient('some-event', () => {});
alt.onServer('some-event', () => {});

Athena.player.events.on('auto-completed', () => {});
Athena.vehicle.events.on('auto-completed', () => {});
```
:::

### Player Appearance

You can easily change player appearance and have it save to the database at the same time.

::: details Expand
```ts
Athena.player.appearance.setEyeColor(somePlayer, 5);
Athena.player.appearance.setEyebrows(somePlayer, { color: 5, opacity: 0.8, style: 2});
Athena.player.appearance.setFacialHair(somePlayer, { color: 2, opacity: 0.7, style: 3});
```
:::

### Player to Custom Model

Easily change a player to a pedestrian and automatically save to database.

::: details Expand
```ts
Athena.systems.inventory.clothing.setSkin(somePlayer, 'a_c_husky')
Athena.systems.inventory.clothing.clearSkin(somePlayer, 'a_c_husky')
```
:::

### Player Uniforms

If you need to apply a uniform for a job, and have an outfit in mind. This can be used.

::: details Expand
```ts
Athena.systems.inventory.clothing.setUniform(somePlayer, [
    { dlc: 'some_dlc', drawable: 0, id: 5, texture: 0 },
    { dlc: 'some_dlc', drawable: 1, id: 6, texture: 0 },
    { dlc: 'some_dlc', drawable: 7, id: 2, texture: 0 }
]);

Athena.systems.inventory.clothing.clearUniform(somePlayer);
```
:::

### Weapons

Weapons can easily be obtained, and modified.

::: details Expand
```ts
await Athena.player.weapon.clear(somePlayer);

const currentWeapons = Athena.player.weapons.get(somePlayer);

let addedPistol = await Athena.player.inventory.add(somePlayer, { dbName: 'pistol50', quantity: 1, data: {} });
let addedAmmo = await Athena.player.inventory.add(somePlayer, { dbName: 'ammo-box', quantity: 1, data: {} });
```
:::

### Permissions

Athena has a string based permission system that lets you apply permissions to players, vehicles, or any custom data object you may feed it.

::: details Expand
```ts
type CustomPerms = 'some-character-perm' | 'mechanic' | 'ems';
type CustomAccountPerms = 'admin1' | 'admin2' | 'vip2'

// Append Perms
Athena.player.permission.addPermission(somePlayer, 'mechanic')
Athena.systems.permission.add<CustomPerms>('character', somePlayer, 'mechanic');
Athena.systems.permission.add<CustomAccountPerms>('account', somePlayer, 'admin1');

// Remove Perms
Athena.systems.permission.remove<CustomPerms>('character', somePlayer, 'mechanic');
Athena.systems.permission.remove<CustomAccountPerms>('account', somePlayer, 'admin1');

// Check perms
const hasPerm = Athena.player.permission.hasPermission(somePlayer, 'police')

// Group Perms
const groupName = 'police';
const groupPerm = 'cadet';
Athena.player.permission.addGroupPerm(somePlayer, groupName, groupPerm)
const isCadet = Athena.player.permission.hasGroupPermission(somePlayer, groupName, groupPerm)
```
:::

### Map Markers

These are actually known as blips, but you can make them!

::: details Expand
```ts
const uid = Athena.controllers.blip.append({
    color: 1,
    pos: new alt.Vector3(0, 0, 0),
    scale: 0.1,
    shortRange: true,
    sprite: 148,
    text: 'My Blip',
});

Athena.controllers.blip.remove(uid);
```
:::

### Interactions

Create a position on the map for the player to interact with.

::: details Expand
```ts
function callback() {
    console.log(`User pressed a key after entering the area!`);
}

Athena.controllers.interaction.append({
    position: new alt.Vector3(0, 0, 0).sub(0, 0, 1),
    height: 3,
    callback,
    range: 3,
    debug: true,
});
```
:::

### Marker

These are holograms the player can see to help spot a location.

::: details Expand
```ts
const uid = Athena.controllers.marker.append({
    pos: new alt.Vector3(0, 0, 0),
    color: new alt.RGBA(255, 0, 0, 255),
    type: 1,
    maxDistance: 25,
    scale: new alt.Vector3(3, 3, 0.5),
});

Athena.controllers.marker.remove(uid);
```
:::

### Objects

These are automatically synced between all players.

::: details Expand
```ts
const uid = Athena.controllers.object.append({
    model: 'prop_alien_egg_01',
    pos: new alt.Vector3(0, 0, 0),
});

Athena.controllers.object.remove(uid);
```
:::

### Text Labels

Floating in-world text!

::: details Expand
```ts
const uid = Athena.controllers.textLabel.append({ 
    text: 'floating text here', 
    pos: new alt.Vector3(0, 0, 0) 
});

Athena.controllers.textLabel.remove(uid);
```
:::

### Adding Items

All you need is a database name and a quantity for an item and it's easily added to a player's inventory.

::: details Expand
```ts
// Add an item
const didAddItems = await Athena.player.inventory.add(somePlayer, { dbName: 'burger', quantity: 5, data: {} });

// Remove an item
const didRemove = await Athena.player.inventory.sub(somePlayer, { dbName: 'burger', quantity: 1 });

// Modify an item's custom data and apply custom attributes
Athena.player.inventory.modifyItemData<{ custom: string }>(somePlayer, someSlot, { custom: 'hi' })

// Get an item with custom attributes
const someItem = await Athena.player.inventory.getAt<{custom: string}>(somePlayer, someSlot);
```
:::

### Custom Items

This is how you add new items to the Athena Framework.

Every item can have its own unique behavior.

::: details Expand

```ts
// This is an generalized behavior for your items.
const exampleBehavior = {
    canDrop: true,
    canStack: true,
    canTrade: true,
    destroyOnDrop: false,
    isClothing: false,
    isCustomIcon: false,
    isToolbar: false,
    isEquippable: false,
    isWeapon: false,
};

// Behavior for our item array. You could even customize it so each item has unique properties.
const exampleArrayBehavior = {
    canDrop: false,
    destroyOnDrop: true,
}

const exampleItem: BaseItem = {
    name: 'My Super Item',
    dbName: 'my-super-item',
    icon: 'custom-icon',

    // These are custom datas for your item
    data: {
        someString: 'hello world!',
        someNumber: 1337,
        someBoolean: false,
    },

    maxStack: 64, // Specify a maxStack otherwise it will be 512.
    behavior: exampleBehavior
};

// Building Custom Item Arrays
const exampleItemArray: BaseItem[] = [
    {
        name: 'My Super Item (1) - In Array',
        dbName: 'my-super-item-in-array-first',
        icon: 'custom-icon',

        // This are custom datas for your item
        data: {
            someString: 'hello world!',
            someNumber: 1337,
            someBoolean: false,
        },

        maxStack: 64, // Specify a maxStack otherwise it will be 512.
        behavior: exampleArrayBehavior
    },
    {
        name: 'My Super Item (2) - In Array',
        dbName: 'my-super-item-in-array-second',
        icon: 'custom-icon',

        // This are custom datas for your item
        data: {
            someString: 'hello world!',
            someNumber: 1337,
            someBoolean: false,
        },

        maxStack: 64, // Specify a maxStack otherwise it will be 512.
        behavior: exampleArrayBehavior
    },
    {
        // ... Other Item.
    }
];
```

:::

Lets talk about upserting singular and array based items into the factory (database)

Upserting Singular Items - This is an asynchronus operation, so we will need to use the await keyword.

::: details Expand
```ts
await Athena.systems.inventory.factory.upsertAsync(exampleItem); 
```
:::

Upserting Multiple Items (Array) - This is an asynchronus operation, so we will need to use the await keyword.

::: details Expand
```ts
// Lets loop through our freshly created Item Array first
for(const item of exampleItemArray) {
    await Athena.systems.inventory.factory.upsertAsync(item); // Insert all items which we have found while looping through our array.
}
```
:::


### Saving Character Data

This is how you append new data to the database for a given character, or change existing data.

::: details Expand

```ts
interface CustomData {
    myNewValue: string;
}

function savePlayerData(player: alt.Player) {
    const data = Athena.document.character.get<CustomData>(player);

    // Data is invalid / undefined
    if(typeof data === 'undefined') {
        alt.log(`No specified data found.`); 
        return;
    }

    if (!data.myNewValue) {
        data.myNewValue = 'hello world'; // Sets our custom data to 'hello world'
    }

    alt.log(`Players current health level: ${data.health}`);
    data.health = 125;
    alt.log(`Players current health level: ${data.health} | Custom Data Value: ${data.myNewValue}`);

    // This will update the database document to our new values.
    Athena.document.character.setBulk<CustomData>(player, { 
        health: data.health, 
        myNewValue: data.myNewValue 
    });
}

// Lets call our newly created function inside of an player event
Athena.player.events.on('selected-character', (player: alt.Player) => {
    // Calls our newly created function on the selection of a character
    savePlayerData(player);
});
```

:::

### Database Usage

We use a very simplified version of MongoDB's driver that makes document management straight forward.

::: details Expand

```ts
// Create a new table
await Database.createCollection('new-stuff-who-dis');

// Insert some new data
interface NewStuff {
    _id?: unknown;

    myCustom: string;

    databaseData: string;
}

// Reference that data
const newDocument = await Database.insertData<NewStuff>(
    { myCustom: 'hi', databaseData: 'there' },
    'new-stuff-who-dis',
    true,
);
console.log(`This ID is: ${String(newDocument._id)}, I can use this to find the database entry.`);

// Update data
await Database.updatePartialData(
    newDocument._id,
    {
        myCustom: 'hello',
        databaseData: 'there',
    },
    'new-stuff-who-dis',
);

// Fetch Data
const result = await Database.fetchData('_id', newDocument._id, 'new-stuff-who-dis')
```

:::

### Modify Default Systems

You can modify, or even disable default systems.

Just in case you want to write your own.

::: details Expand

```ts
Athena.systems.defaults.weather.setWeatherCycle(['Clear', 'Thunder', 'Clear', 'Clouds']);
Athena.systems.defaults.weather.disable();
Athena.systems.defaults.displayId.disable();
Athena.systems.defaults.time.disable();
Athena.systems.defaults.death.disable()
```
:::

### Login Flow

You can change the login order of what functions to display before sending them to the next one. This allows for additional menus to be brought up during their login phase.

::: details Expand
```ts

const flowWeight = 55;
Athena.systems.loginFlow.add('new-flow-item', flowWeight, (player: alt.Player) => {
    // do something cool here...


    // Send them to the next part of the login flow
    Athena.systems.loginFlow.next(player);
})
```
:::

### Custom Storage Solutions

Create custom storage for whatever you are trying to store.

::: details
```ts
async function createAndOpen(player: alt.Player) {
    const id = await Athena.systems.storage.create([]);

    if (Athena.systems.storage.isOpen(id)) {
        return;
    }

    Athena.systems.storage.setAsOpen(id);
    Athena.systems.storage.closeOnDisconnect(player, id);

    const storedItems = await Athena.systems.storage.get(id);
    InventoryView.storage.open(player, id, storedItems, 256, true);
}

async function closeStorage(uid: string, items: Array<StoredItem>, player: alt.Player) {
    if (!Athena.systems.storage.isOpen(uid)) {
        return;
    }

    await Athena.systems.storage.set(uid, items);
    Athena.systems.storage.removeAsOpen(uid);
}

InventoryView.callbacks.add('close', closeStorage);
```
:::

### Jobs

These are not faction based jobs, you should check the permissions section for more information on grouping people together.

However, here's a repository that is just an example [pizza delivery job](https://github.com/Dav-Renz/Athena-v5-plugin-example-job-pizza-delivery).

### Prompt for User Input

You can create a simple input box on client-side.

::: details Expand
```ts
const response = await AthenaClient.rmlui.input.create({
    placeholder: 'What is your name?',
    blur: true,
    hideHud: true,
});
```
:::

### Create Custom Menus

Similar to NativeUI but less complicated by a long shot.

::: details Expand
```ts
await AthenaClient.rmlui.menu.create({
    header: {
        title: 'My Menu',
        color: new alt.RGBA(0, 175, 250, 255),
    },
    options: [
        {
            type: 'Toggle',
            title: 'Toggleable',
            description: 'Toggles something...',
            value: false,
            callback: (newValue: boolean) => {
                console.log(newValue); // true
            },
        },
        {
            type: 'Range',
            title: 'Range Index',
            description: 'Increments +/- 1',
            value: 0,
            min: 0,
            max: 10,
            increment: 1,
            callback: (newValue: number) => {
                console.log(newValue); // 1
            },
        },
        {
            type: 'Selection',
            title: 'Array Based Option',
            description: 'Sends Results by Index Increment',
            options: ['zero', 'one', 'two'],
            value: 0,
            callback: (newValue: string) => {
                console.log(newValue); // zero
            },
        },
        {
            type: 'Invoke',
            title: 'Invoker',
            description: 'Triggers something...',
            callback: () => {
                console.log('hi!');
            },
        },
        {
            type: 'Invoke',
            title: 'Close',
            description: 'Close the Menu',
            callback: AthenaClient.rmlui.menu.close,
        },
    ],
});
```
:::

### In-World 3D Menu

Want to show a menu at a specific position? Look no further.

::: details Expand
```ts
await AthenaClient.rmlui.menu3D.create(
    { x: -839.8507690429688, y: -151.79005432128906, z: 19.950349807739258 },
    [
        {
            name: 'Orange Juice',
            callback: () => {
                console.log('Selected Orange Juice!');
            },
        },
        {
            name: 'Coke',
            callback: () => {
                console.log('Selected Coke!');
            },
        },
        {
            name: 'Pepsi',
            callback: () => {
                console.log('Selected Pepsi!');
            },
        },
        {
            name: 'Mountain Dew',
            callback: () => {
                console.log('Selected Mountain Dew!');
            },
        },
        {
            name: 'Energy Drank',
            callback: () => {
                console.log('Selected Energy Drank!');
            },
        },
    ],
    10,
);
```

### Yes or No Prompt

A simple yes or not prompt can easily be created.

::: details Expand
```ts
const response = await AthenaClient.rmlui.questionBox.create({
    placeholder: 'Would you like to proceed?',
    blur: true,
    darken: true,
    hideHud: true,
});
```
:::