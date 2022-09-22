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

**Usage:** `ATHENA_EVENTS_PLAYER.DIED`

* DIED -> When a player has died.
* DROPPED_ITEM -> When a player drops an item.
* ENTERED_INTERIOR -> When a player enters an interior through the Interior plugin.
* LEFT_INTERIOR -> When a player leaves an interior through the Interior plugin.
* PURCHASED_VEHICLE -> When a player has purchased a vehicle through the Dealership plugin.
* SELECTED_CHARACTER -> When a player has selected a character.
* SPAWNED -> When a player has respawned.
* TOGGLED_INTERIOR_LOCK -> When a player triggers an interior lock through the Interior plugin.
* EQUIPPED_WEAPON -> When a player has equipped a weapon.
* UNEQUIPPED_WEAPON -> When a player removes a weapon equip.

## trigger

Used to force an invoke of a player specific event by name.

```ts
Athena.events.player.trigger(ATHENA_EVENTS_PLAYER.DIED, somePlayer);
```

## on

Used to listen for a player specific event to occur.

```ts
Athena.events.player.on(ATHENA_EVENTS_PLAYER.DIED, (player: alt.Player) => {
    console.log(`${player.data.name} has died! :(`);
});
```
