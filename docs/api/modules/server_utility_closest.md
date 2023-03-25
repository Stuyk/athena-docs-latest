---
title: Athena.utility.closest
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getClosestPlayer` | (`pos`: `IVector3`, `ignoredIds`: `number`[]) => `alt.Player` \| `undefined` |
| `getClosestVehicle` | (`pos`: `IVector3`) => `alt.Vehicle` \| `undefined` |

#### Defined in

[server/utility/closest.ts:44](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/closest.ts#L44)

## Functions

### getClosestPlayer

▸ **getClosestPlayer**(`pos`, `ignoredIds?`): `alt.Player` \| `undefined`

Gets the closest player to a position.

**`Export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pos` | `IVector3` | `undefined` |
| `ignoredIds` | `number`[] | `[]` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/utility/closest.ts:24](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/closest.ts#L24)

___

### getClosestVehicle

▸ **getClosestVehicle**(`pos`): `alt.Vehicle` \| `undefined`

Gets the closest vehicle to a position.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `IVector3` |

#### Returns

`alt.Vehicle` \| `undefined`

#### Defined in

[server/utility/closest.ts:12](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/closest.ts#L12)
