---
title: 'Garage'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The garage system allows players to store and withdraw vehicles in preset virtual garages across Los Santos. A vehicle that is destroyed may be withdrawn from any garage. When a vehicle is stored it can only be withdrawn from that garage.

📁 `src/core/plugins/core-garages/`

* Withdraw a Vehicle
* Deposit a Vehicle

![](https://i.imgur.com/ietFAMD.png)

### Configuration

📁 `src/core/plugins/core-garage/server/garages/LocationNameHere.ts`

**Additional garages can be added inside of the garages folder.**

📁 `src/core/plugins/core-garage/server/src/garages.ts`

Parking is an array of positions and rotations that should be used to park vehicles.

```
{
    position: { x: -2954.107666015625, y: 470.46356201171875, z: 14.9 },
    type: VEHICLE_TYPE.VEHICLE,
    index: 'banham-canyon',
    parking: [
        position: {
                x: -2963.80224609375,
                y: 462.5670471191406,
                z: 15.210205078125,
        },
        rotation: {
                x: 0,
                y: 0,
                z: -2.671590805053711,
        }
    ]
}
```

There are commands for making parking lists easier. Check [out this link](../../plugins/commands/cmds-mod-garage.md).

### Usage

Drive your car into a parking space near a garage.

If the parking space is registered you will be able to go to the garage marker and de-spawn it.

Access the garage interface by interacting with `E`.

### Commands

No Commands Available
