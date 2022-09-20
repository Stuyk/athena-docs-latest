---
title: '.object'
order: -99
---

# {{ $frontmatter.title }}

Modifies the wheel menu for objects on client-side.

Allows you to programatically add / remove options.

See [IWheelOption for additional options](iWheelOption.md).

## add

Adds an option to the wheel menu.

The function passed into the add function will be called when a player interacts with any object.

```ts
AthenaClient.menus.object.add((modelHash, scriptID, options) => {
    if (modelHash !== alt.hash('prop_cs_dumpster_01a')) {
        return options;
    }

    // Add infernus specific options here...
    options.push({
        name: 'Dumpster Dive!',
        callback: (vehicle: alt.Vehicle) => {
            console.log('You did something with a dumpster. Nice.');
        },
    });

    return options;
});
```