---
title: '.keyHeld'
order: -99
---

# {{ $frontmatter.title }}

Call a function when a client is holding down a key and when they let go of a key.

Useful for functionality like score boards.

Use [https://www.toptal.com/developers/keycode](https://www.toptal.com/developers/keycode) to determine what key number to use.

## register

Used to register a specific key to perform a function when pressed.

Arguments

* key code (number) to trigger the functions
* A function call when the key is held down (called once)
* A function call when the key is left go

```ts

const SEMI_COLON = 186; // ;

async function keyDown() {
    // Prevents chat from triggering this key press.
    if (isAnyMenuOpen(false)) {
        return;
    }

    await playAnimation('amb@code_human_in_car_mp_actions@dance@std@rds@base', 'idle_a', ANIMATION_FLAGS.REPEAT);
}

function keyUp() {
    // Prevents chat from triggering this key press.
    if (isAnyMenuOpen(false)) {
        return;
    }

    native.clearPedTasksImmediately(alt.Player.local.scriptID);
}

AthenaClient.events.keyHeld.register(SEMI_COLON, keyDown, keyUp);
```

## unregister

Simply unregisters the key, and all related functions.

Requires the original functions to unbind them.

```ts
AthenaClient.events.keyHeld.unregister(SEMI_COLON, keyDown, keyUp)
```