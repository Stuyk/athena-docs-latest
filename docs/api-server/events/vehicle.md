---
title: '.vehicle'
order: -99
---

# {{ $frontmatter.title }}

These are Athena specific events for vehicles.

## Event Names

```ts
export enum ATHENA_EVENTS_VEHICLE {
    DESPAWNED = 'athena:VehicleDespawned',
    ENGINE_STATE_CHANGE = 'athena:VehicleEngineState',
    LOCK_STATE_CHANGE = 'athena:VehicleLockState',
    REPAIRED = 'athena:VehicleRepaired',
    SPAWNED = 'athena:VehicleSpawned',
    DISTANCE_TRAVELED = 'athena:DistanceTraveled',
    DESTROYED = 'athena:VehicleDestroyed',
}

```

**Usage:** `ATHENA_EVENTS_VEHICLE.DESPAWNED`

* DESPAWNED -> When a vehicle is despawned.
* ENGINE_STATE_CHANGE -> When a vehicle is turned on or off.
* LOCK_STATE_CHANGE -> When a vehicle's lock state has changed.
* REPAIRED -> When a vehicle is repaired.
* SPAWNED -> When a vehicle is spawned from a garage, or anywhere else.
* DISTANCE_TRAVELED -> When a vehicle has moved some distance. Third argument is distance count.
* DESTROYED -> When a vehicle is blown up, destroyed, etc.

## trigger

Used to force an invoke of a specific vehicle event by name.

```ts
Athena.events.vehicle.trigger(ATHENA_EVENTS_VEHICLE.DESPAWNED, someVehicle);
```

## on

Used to listen for a specific vehicle event to occur.

```ts
Athena.events.vehicle.on(ATHENA_EVENTS_VEHICLE.DISTANCE_TRAVELED, (someVehicle: alt.Vehicle, dist: number) => {
    console.log(`Some Vehicle Traveled... ${dist} ...distance`);
});
```