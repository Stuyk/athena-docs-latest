---
title: '.player'
order: -99
---

# {{ $frontmatter.title }}

Modifies the wheel menu for players on client-side.

Allows you to programatically add / remove options.

See [IWheelOption for additional options](iWheelOption.md).

## add

Adds an option to the wheel menu.

The function passed into the add function will be called when a player interacts with any player.

```ts
AthenaClient.menus.player.add((target, options) => {
    // Add infernus specific options here...
    options.push({
        name: 'Do Something!',
        callback: (target: alt.Player) => {
            console.log('did something with the player weee');
        },
    });

    return options;
});
```