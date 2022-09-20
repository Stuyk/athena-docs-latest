---
title: '.vehicle'
order: -99
---

# {{ $frontmatter.title }}

Modifies the wheel menu for vehicles on client-side.

Allows you to programatically add / remove options.

See [IWheelOption for additional options](iWheelOption.md).

## add

Adds an option to the wheel menu.

The function passed into the add function will be called when a player interacts with any vehicle.

```ts
AthenaClient.menus.vehicle.add((target, options) => {
    if (target.model !== alt.hash('infernus')) {
        return options;
    }

    // Add infernus specific options here...
    options.push({
        name: 'Do Something!',
        callback: (vehicle: alt.Vehicle) => {
            console.log('did something with infernus weee');
        },
    });

    return options;
});
```