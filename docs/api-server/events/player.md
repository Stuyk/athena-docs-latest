---
title: '.player'
order: -99
---

# {{ $frontmatter.title }}

These are Athena specific events for players.

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

Used to force an invoke of a player specific event by name.

```ts
Athena.events.player.trigger(ATHENA_EVENTS_PLAYER.DIED, somePlayer);
```

## on

Used to listen for a player specific event to occur.

```ts
Athena.events.player.trigger(ATHENA_EVENTS_PLAYER.DIED, (player: alt.Player) => {
    console.log(`${player.data.name} has died! :(`);
});
```
