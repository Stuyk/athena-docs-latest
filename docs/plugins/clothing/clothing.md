---
title: 'Clothing'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The clothing plugin creates multiple clothing shops across the map. They all act the same. They allow the player to customize their clothing and combine different components to create their ideal outfit. All items are separated on purchase, and are not auto-equipped on purchase.

📁 `src/core/plugins/core-clothing/`

It allows the player to do the following:

* Select Hat
* Select Shirt
* Select Pants
* Select Bags
* Select Accessories
* etc.

It also includes a standard interface to go with it.

![Standard Clothing Shop Interface](https://i.imgur.com/IkntRRE.png)

### Configuration

The configuration can be found in the following folder:

📁 `src/core/plugins/core-clothing/shared/config.ts`

* MAXIMUM\_COMPONENT\_VALUES
  * The maximum number of GTA:V components available per sex, per type.
  * These should almost **never** be adjusted.
  * They will be adjusted when GTA:V introduces new DLC Packs.
* MAXIMUM\_PROP\_VALUES
  * The maximum number of GTA:V props available per sex, per type.
  * These should almost **never** be adjusted.
  * They will be adjusted when GTA:V introduces new DLC Packs.
* DLC\_CLOTHING
  * These should only be adjusted when you have clothing mods.
  * Best to look at the following page:
* DLC\_PROPS
  * Same as above. Check the `Adding Clothes` section for mods.

[Adding Custom Clothes](../../intro/mods/adding-clothes.md)

_The camera is created based on the player's position and heading._

#### Adding Additional Stores

📁 `src/core/plugins/core-clothing/server/src/stores.ts`

Each store has their own position for interaction and the area surrounding the store. Think of it like the interior of the store.

```
{
        x: 11.6,
        y: 6514.2,
        z: 30.9,
        isBlip: true,
        vertices: [
            { x: 6.239919185638428, y: 6522.4970703125, z: 30.883445739746094 },
            { x: 14.063220024108887, y: 6513.44287109375, z: 30.884214401245117 },
            { x: 10.18830680847168, y: 6509.97119140625, z: 30.877857208251953 },
            { x: 8.208184242248535, y: 6511.96484375, z: 30.877857208251953 },
            { x: 3.685032606124878, y: 6508.46630859375, z: 30.883928298950195 },
            { x: -2.3365304470062256, y: 6514.94384765625, z: 30.877857208251953 },
        ],
    }
```

If `isBlip` is set to `true` it'll generate a blip for the clothing store.

### Usage

A player can find a `t-shirt` icon on their map. They can physically visit the location and press `E` to open the interface for the clothing shop.

### Commands

No Commands Available
