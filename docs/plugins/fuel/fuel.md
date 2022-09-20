---
title: 'Fuel'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The fuel system is very basic and does not provide any measurement of how far a player has driven. Instead it will remove fuel at a set interval which can be configured.

📁 `src/core/plugins/core-fuel/`

* Removes Fuel from 100
* Removes Fuel in unoccupied vehicles
* Only removes vehicles with fuel and save ability flag
* The HUD reflects fuel through Synced Meta that is set

![](https://i.imgur.com/7FnZsCH.png)

### Configuration

📁 `src/core/plugins/core-fuel/server/src/config.ts`

* MAXIMUM\_FUEL
  * The maximum amount of fuel available for all vehicles.
* FUEL\_LOSS\_PER\_TICK
  * The amount of fuel to remove on each TIME\_BETWEEN\_UPDATES
* TIME\_BETWEEN\_UPDATES
  * How many milliseconds between each vehicle update
  * Default is 5000 (5s)
* FUEL\_ON\_NEW\_VEHICLE\_CREATE
  * How much fuel to give a new vehicle?
  * Default is 100

### Usage

Get in a vehicle. Turn on the engine. Drive around. Watch fuel go away.

### Commands

#### setfuel

Administrative command used to set the current fuel level for the vehicle you are in.

```
/setfuel [0-100]
```
