---
title: '.world'
order: -99
---

# {{ $frontmatter.title }}

Athena's world weather is pretty basic.

```ts
* --- Top of Map ---
* 0 - Weather at Index 0
* 1 - Weather at Index 1
* 2 - Weather at Index 2
* 3 - Weather at Index 3
* 4 - Weather at Index 4
* 5 - Weather at Index 5
* --- Bottom of Map ---
```

It simply pops weather from the bottom of an array, and appends it to the top.

The weather index at `0` in the arrow below is the top of the map.

```ts
[
    'EXTRASUNNY', // Top of the Map
    'EXTRASUNNY',
    'CLEAR',
    'CLOUDS',
    'OVERCAST',
    'RAIN', // Bottom of the Map
    'THUNDER',
    'RAIN',
    'FOGGY',
    'OVERCAST',
    'CLEARING' // Next weather to cycle from top to bottom. Gets appended to top.
]
```

Basically the next weather at the top of the map will be `CLEARING`.

## setWeatherRotation

Used to change the entire weather forecast for the forseeable future.

```ts
Athena.systems.world.setWeatherRotation([
    'EXTRASUNNY', // Top of the Map
    'EXTRASUNNY',
    'CLEAR',
    'CLOUDS',
    'OVERCAST',
    'RAIN', // Bottom of the Map
    'THUNDER',
    'RAIN',
    'FOGGY',
    'OVERCAST',
    'CLEARING' // Next weather to cycle from top to bottom. Gets appended to top.
]);
```

## registerTimeRule

Used to override the default time system.

The callback provided must return an `hour`, `minute` and if it should `updateWeather`.

```ts
let hour = 0;
let minute = 0;

function doPayChecks() {
    // just an example of what you can do with this...
}

Athena.systems.world.registerTimeRule(() => {
    let updateWeather = false;
    minute += 1;

    if (minute >= 59) {
        minute = 0;
        hour += 1;
        doPayChecks();
        updateWeather = true;
    }

    if (hour >= 24) {
        hour = 0;
    }

    return { hour, minute, updateWeather };
});
```

## getWorldHour

Returns the current world hour.

```ts
const hour = Athena.systems.world.getWorldHour();
```

## getWorldMinute

Returns the current world minute.

```ts
const minute = Athena.systems.world.getWorldMinute();
```