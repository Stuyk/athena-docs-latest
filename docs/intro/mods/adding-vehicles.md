---
title: 'Adding Modded Vehicles'
order: -96
---

# {{ $frontmatter.title }}

### How to Add Vehicles?

First you should check out the [official article that alt:V created on streaming vehicles](https://docs.altv.mp/gta/articles/tutorials/stream\_vehicles.html). After getting your first vehicle resource setup, it needs to be placed in the correct folder.

The folder where you should place vehicle mods is 📁`resources/mods`

### Athena Specific Setup

::: warning 

You will have to modify a file in Athena's core to include your modified vehicle.

:::

Append the vehicle's information to the following file:

```
src/core/shared/information/vehicles.ts
```

Add the following information for your vehicle.

* display
* name (model)
* type
* class
* sell (Can it be sold)
* price (How much it costs)
* storage (How many storage slots does it have)
