---
title: Athena.vehicle.add
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Interfaces

- [AddOptions](../interfaces/server_vehicle_add_AddOptions.md)

## Functions

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override add owned vehicle functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"toDatabase"`` |
| `callback` | (`owner`: `string`, `model`: `string`, `pos`: `IVector3`, `options`: [`AddOptions`](../interfaces/server_vehicle_add_AddOptions.md)) => `Promise`<`boolean`\> |

#### Returns

`any`

#### Defined in

[server/vehicle/add.ts:195](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L195)

▸ **override**(`functionName`, `callback`): `any`

Used to override add owned vehicle functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"toPlayer"`` |
| `callback` | (`player`: `Player`, `model`: `string`, `pos`: `IVector3`, `options`: [`Omit`](server_player_inventory_Internal.md#Omit)<[`AddOptions`](../interfaces/server_vehicle_add_AddOptions.md), ``"doNotDespawn"``\>) => `Promise`<`boolean`\> |

#### Returns

`any`

#### Defined in

[server/vehicle/add.ts:196](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L196)

___

### toDatabase

▸ **toDatabase**(`owner`, `model`, `pos`, `options?`): `Promise`<`boolean`\>

Add a vehicle to the database.

Owner can be an identifier, group, etc.

**`Export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `owner` | `string` | `undefined` |
| `model` | `string` | `undefined` |
| `pos` | `IVector3` | `undefined` |
| `options` | [`AddOptions`](../interfaces/server_vehicle_add_AddOptions.md) | `undefined` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/vehicle/add.ts:134](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L134)

___

### toPlayer

▸ **toPlayer**(`player`, `model`, `pos`, `options?`): `Promise`<`boolean`\>

Add a vehicle to a player.
The position specified is where the vehicle can be found.

**`Export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `player` | `Player` | `undefined` |
| `model` | `string` | `undefined` |
| `pos` | `IVector3` | `undefined` |
| `options` | [`Omit`](server_player_inventory_Internal.md#Omit)<[`AddOptions`](../interfaces/server_vehicle_add_AddOptions.md), ``"doNotDespawn"``\> | `undefined` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[server/vehicle/add.ts:64](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/vehicle/add.ts#L64)
