---
title: 'Dealership'
order: -99
---

# {{ $frontmatter.title }}

# Dealership

### Abstract

A dealership is where player's can spend money to purchase vehicles. The dealership is completely automated and nobody currently owns these shops.

📁 `src/core/plugins/core-dealership/`

It allows the player to do the following:

* Visit a dealership
* Browse vehicles by type depending on location
* Preview the vehicle and change its color
* Purchase the vehicle

The Dealership also has its own interface.

![](https://i.imgur.com/oaFjEAv.png)

### Configuration

The default vehicles for purchase can be found in the following folder:

📁 `src/core/plugins/core-dealership/server/src/defaults.ts`

A dealership can be appended to the default dealerships by creating a new entry.

```typescript
{
        uid: 'muscle-1',
        name: 'Muscle Cars',
        vehiclePosition: { x: -43.83578109741211, y: -1097.210693359375, z: 25.6 },
        cam: { x: -45.301246643066406, y: -1100.4744873046875, z: 25.6 },
        pos: { x: -40.81455993652344, y: -1104.499267578125, z: 25.6 },
        vehicles: VehicleData.filter((x) => x.class === VEHICLE_CLASS.MUSCLE && x.sell),
 }
```

* uid
  * A unique identifier for this dealership
* name
  * The blip / physical name of this dealership
* vehiclePosition
  * Where the blip position should be.
* cam
  * Where the camera should be.
* pos
  * Where the camera should point.
* vehicles
  * An **Array** of **VehicleInfo**
  * See `src/core/shared/information/vehicles.ts` for more information.

::: tip

Vehicles property is a property that filters all vehicles by class, and if they can be sold. This filter can be adjusted to customize the vehicles in a dealership.

:::

### Usage

A player can visit a physical dealership and interact with `E`. It will bring up a menu. The player can preview different vehicles, select them, and then color them before purchasing them.

The dealership automatically takes a combination of cash and bank.

Cash is always removed first.

### Commands

No Commands Available
