---
title: '.ped'
order: -99
---

# {{ $frontmatter.title }}

Modifies the wheel menu for objects on client-side.

Allows you to programatically add / remove options.

See [IWheelOption for additional options](iWheelOption.md).

## add

Adds an option to the wheel menu.

The function passed into the add function will be called when a player interacts with a specific ped.

```ts
AthenaClient.menus.ped.add((scriptID, ped, options) => {
    if (ped.uid !== 'some-uid-set-on-serverside') {
        return options;
    }

    // Add infernus specific options here...
    options.push({
        name: 'Kill Bill',
        callback: (vehicle: alt.Vehicle) => {
            console.log('You slit his throat; or ya know make something happen server-side...');
        },
    });

    return options;
});
```