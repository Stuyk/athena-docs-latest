---
title: '.vehicle'
order: -99
---

# {{ $frontmatter.title }}

Used to get vehicle information for vehicles that are spawned.


## byDatabaseID

Get an online vehicle based on their MongoDB _id

```ts
const someVehicle = Athena.get.vehicle.byDatabaseID('631779d7119e86368a313e1b')
if (!vehicle || !vehicle.valid) {
    console.log('Could not find vehicle');
    return;
}
```

## byID

Used to get a vehicle by an alt:V identifier.

```ts
const vehicle = Athena.get.vehicle.byID(5)
if (!vehicle || !vehicle.valid) {
    console.log('Could not find vehicle');
    return;
}
```

## inFrontOf

Used to get a vehicle in front of an entity such as a player, or vehicle.

```ts
async function doSomething() {
    const someVehicle = await Athena.get.vehicle.inFrontOf(somePlayer, 8) // 8 -> Distance
    if (!someVehicle || !someVehicle) {
        console.log('Could not find something that the player, or vehicle has in front of them.');
        return;
    }
}
```

_This function is async. Must use an async function._

## isNearPosition

Used to check if a vehicle is near a position.

```ts
const isNear = Athena.get.vehicle.isNearPosition(someVehicle, new alt.Vector3(0, 0, 0), 3); // 3 -> Distance
if (!isNear) {
    console.log('vehicle is not near it yet.');
    return;
}
```

## passengers

Returns the passengers of the vehicle.

```ts
const passengers = Athena.get.vehicle.passengers(someVehicle);
```

## driver

Returns the driver of the vehicle.

```ts
const driver = Athena.get.vehicle.driver(someVehicle);
```

## closestToPlayer

Return the closest vehicle to a player.

Does not have a distance limitation.

Does not return self.

```ts
const targetVehicle = Athena.get.vehicle.closestToPlayer(somePlayer);
if (!targetVehicle || !targetVehicle.valid) {
    console.log('Could not find a vehicle close to a player.');
    return;
}
```

## closestToVehicle

Return the closest vehicle to a vehicle.

Does not have a distance limitation.

Does not return self.

```ts
const targetVehicle = Athena.get.vehicle.closestToVehicle(someVehicle);
if (!targetVehicle || !targetVehicle.valid) {
    console.log('Could not find a vehicle close to a vehicle.');
    return;
}
```