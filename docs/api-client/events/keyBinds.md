---
title: '.keyBinds'
order: -99
---

# {{ $frontmatter.title }}

While similar to the [Key Held](keyHeld.md) API, it helps with more specific functionality.

Use [https://www.toptal.com/developers/keycode](https://www.toptal.com/developers/keycode) to determine what key number to use.

## KeyBind Interface

```ts
interface Keybind {
    key?: number;
    singlePress: (...args: any[]) => void; // Callback Function
    longPress?: (...args: any[]) => void; // Callback Function
}
```

## registerKeybind

Used to register a specific key to perform a function when a key is let go.

Also allows a 'long press' of a key to trigger something after holding a key for a set period of time.

Arguments

* keybind object, see above.

```ts
const SEMI_COLON_KEY = 186; // ;
const QUOTE_KEY = 222;

async function doSomething() {
    // Prevents chat from triggering this key press.
    if (isAnyMenuOpen(false)) {
        return;
    }

    await playAnimation('amb@code_human_in_car_mp_actions@dance@std@rds@base', 'idle_a', ANIMATION_FLAGS.REPEAT);
}

async function doSomethingAfterSomeTime() {
    if (isAnyMenuOpen(false)) {
        return;
    }

    console.log('ding!');
}

AthenaClient.events.keyBinds.registerKeybind({
    key: SEMI_COLON_KEY,
    singlePress: doSomething,
})

AthenaClient.events.keyBinds.registerKeybind({
    key: QUOTE_KEY,
    longPress: doSomethingAfterSomeTime,
})
```