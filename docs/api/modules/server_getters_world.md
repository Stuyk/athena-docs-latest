---
title: Athena.getters.world
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### isInOceanWater

▸ **isInOceanWater**(`entity`): `boolean`

Used to check if an entity is in ocean water.
Uses a simple 'z' positional check and dimension check.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`boolean`

#### Defined in

[server/getters/world.ts:40](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/getters/world.ts#L40)

___

### positionIsClear

▸ **positionIsClear**(`pos`, `lookFor`): `Promise`<`boolean`\>

Check if a world position is free of vehicles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `IVector3` |
| `lookFor` | ``"vehicle"`` \| ``"player"`` \| ``"all"`` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/getters/world.ts:10](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/getters/world.ts#L10)
