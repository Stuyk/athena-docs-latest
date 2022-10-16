---
title: '.menu3D'
order: -99
---

# {{ $frontmatter.title }}

This menu can be described as an in-world 3D menu that will scale based on distance from the position that it is created in.

It will automatically close itself when the user moves too far away from the position.

![](https://i.imgur.com/sKOcQTq.png)

## Usage

* Vector3 Position
* Array of Menu Options. (Maximum 8)
* Maximum Render Distance. (Default 8)

```ts
AthenaClient.rmlui.menu3D.create(vector3, arrayOfMenuOptions, maximumRenderDistance): void;
```

## Example

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