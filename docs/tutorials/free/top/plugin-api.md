---
title: 'Plugin API'
outline: [1,3]
order: -90
---

# Plugin API

In Athena `5.1.0` there is a new way to write APIs through plugins.

Before you had to import a bunch of exported functions from other plugins.

This would really junk up your file headers, and make it hard to read.

## Benefits

Using this API registration method allows for any plugin to get auto-completion for your plugin automatically.

This means that telling a user to use your API is as simple as doing:

```ts
const yourApi = await Athena.systems.plugins.useAPI('your-api');
```

Then based off of this they are able to get auto-completion in VSCode.

![](https://i.imgur.com/tq7jWbb.png)

## Adding APIs

APIs can now be added during runtime and can be fetched during runtime.

This means that we get full type safety for completely custom API integrations for Athena.

Here's an example of how a `server-side` custom API may look.

::: details Code Example
```ts
async function addFood(player: alt.Player, amount: number) {
    console.log('invoked add food function');
}

async function subFood(player: alt.Player, amount: number) {
    console.log('invoked sub food function');
}

async function addWater(player: alt.Player, amount: number) {
    console.log('invoked add water function');
}

async function subWater(player: alt.Player, amount: number) {
    console.log('invoked sub water function');
}

const FoodFuncs = {
    addFood,
    subFood,
};

const WaterFuncs = {
    subWater,
    addWater,
};

Athena.systems.plugins.addAPI('water-api', WaterFuncs);
Athena.systems.plugins.addAPI('food-api', FoodFuncs);

// This must be declared to create auto-completion
declare global {
    export interface ServerPluginAPI {
        ['food-api']: typeof FoodFuncs;
        ['water-api']: typeof WaterFuncs;
    }
}
```
:::

Alternatively, on client-side you can do the following:

::: details Client Code Example
```ts
function doSomething1() {
    console.log('hi');
}

const funcs = {
    doSomething1
}

AthenaClient.systems.plugins.addAPI('do-something', funcs);

declare global {
    export interface ClientPluginAPI {
        ['do-something']: typeof funcs;
    }
}
```
:::

## Using APIs

All APIs must be used inside of `async` functions.

This means you **absolutely must** wait for the variable to be propogated before using.

This example, uses the above example.

Imagine this code being in your own plugin separate from the one above.

```ts
// We must make the callback async for this to work
Athena.systems.messenger.commands.register('addfood', '/addfood [amount]', ['admin'], async (player: alt.Player, amount: string) => {
    if (isNaN(parseInt(amount))) {
        console.log('not a number');
        return;
    }

    // This is where the magic happens
    // We import based on the namespace 'food-api'
    // It also gives type safety, and completion
    const foodApi = await Athena.systems.plugins.useAPI('food-api');
    if (typeof foodApi === 'undefined') {
        console.log('food api could not be loaded');
        return;
    }

    foodApi.addFood(player, 5);
});
```

Alternatively on client-side used like this:

```ts
async function doingSomething() {
    const api = await AthenaClient.systems.plugins.useAPI('do-something');

    if (typeof api === 'undefined') {
        return;
    }

    api.doSomething1()
}
```