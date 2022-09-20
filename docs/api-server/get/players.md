---
title: '.players'
order: -99
---

# {{ $frontmatter.title }}

Used to get various players information from the server instance.

## online

Returns all online players who have selected a character.

```ts
const players = Athena.get.players.online()
```

## inRange

Returns all online players who are within range of a specific position.

```ts
const players = Athena.get.players.inRange(new alt.Vector3(0, 0, 0), 5); // 5 -> Distance
```

## withName

Get all online players with an exact name.

```ts
const players = Athena.get.player.withName('Bonnie_Diamond');
```

## driving

Returns all online players who are currently driving.

```ts
const drivers = Athena.get.players.driving();
```

## walking

Returns all online players who are currently on-foot.

```ts
const drivers = Athena.get.players.walking();
```

## driving

Returns all online players who are currently driving a specific vehicle model.

```ts
const specificDrivers = Athena.get.players.drivingSpecificModel('infernus');
```

## inVehicle

Returns all players inside of a specific vehicle.

```ts
const passengers = Athena.get.players.inVehicle(someVehicle);
```
