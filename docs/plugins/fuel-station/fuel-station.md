---
title: 'Fuel Station'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The fuel station system provides players a way to refill their vehicles.

📁 `src/core/plugins/core-fuel-stations/`

* Cost for Fuel
* Refill Player Vehicles

![](https://i.imgur.com/rwCBxAi.png)

### Configuration

📁 `src/core/plugins/core-fuel-stations/server/src/config.ts`

* FUEL\_PRICE
  * Missing Fuel \* This Price = Cost of Fuel
* FUEL\_RESET\_TIMEOUT
  * If the refuel takes longer than 10s. The next refuel will auto-clear after this time

**Additional fuel stations can be added inside of:**

📁 `src/core/plugins/core-fuel-stations/server/src/stations.ts`

```
{
        x: 172.333359,
        y: 6603.63574,
        z: 31.0625,
        isBlip: true,
}
```

_isBlip will add a blip for this fuel station._

### Usage

Go to a fuel pump in-game.

Turn off the car.

Walk up to the pump.

Press `E`.

Begin the refuel process.

![](https://i.imgur.com/VqJdhcF.png)

### Commands

No Commands Available
