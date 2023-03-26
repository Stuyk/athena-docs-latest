---
title: Athena.getters.vehicle
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### byDatabaseID

▸ **byDatabaseID**(`id`): `alt.Vehicle` \| `undefined`

Get a vehicle based on their database _id
May return undefined if the vehicle is not currently spawned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`alt.Vehicle` \| `undefined`

#### Defined in

[server/getters/vehicle.ts:21](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L21)

___

### byID

▸ **byID**(`id`): `alt.Vehicle` \| `undefined`

Get a vehicle by their alt:V ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`alt.Vehicle` \| `undefined`

#### Defined in

[server/getters/vehicle.ts:11](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L11)

___

### closestToPlayer

▸ **closestToPlayer**(`player`): `alt.Player` \| `undefined`

The player closest to a player.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/vehicle.ts:147](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L147)

___

### closestToVehicle

▸ **closestToVehicle**(`player`): `alt.Vehicle` \| `undefined`

The vehicle closest to a player.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`alt.Vehicle` \| `undefined`

#### Defined in

[server/getters/vehicle.ts:157](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L157)

___

### driver

▸ **driver**(`vehicle`): `alt.Player` \| `undefined`

Just wraps the `vehicle.driver` lookup.
Returns a player if they are driving this vehicle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vehicle` | `Vehicle` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/vehicle.ts:137](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L137)

___

### inFrontOf

▸ **inFrontOf**(`entity`, `startDistance?`): `Promise`<`alt.Vehicle` \| `undefined`\>

Creates a temporary ColShape in front of the current vehicle or player.
The ColShape is then used to check if a vehicle is present within the ColShape.
It will keep subtract distance until it finds a vehicle near the player that is in the ColShape.
Works best on flat land or very close distances.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entity` | `Entity` | `undefined` |
| `startDistance?` | `number` | `6` |

#### Returns

`Promise`<`alt.Vehicle` \| `undefined`\>

#### Defined in

[server/getters/vehicle.ts:65](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L65)

___

### isNearPosition

▸ **isNearPosition**(`vehicle`, `pos`, `dist?`): `boolean`

Checks if a vehicle is within 3 distance of a position.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vehicle` | `Vehicle` | `undefined` |
| `pos` | `IVector3` | `undefined` |
| `dist` | `number` | `3` |

#### Returns

`boolean`

#### Defined in

[server/getters/vehicle.ts:116](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L116)

___

### isValidModel

▸ **isValidModel**(`model`): `boolean`

Check if a vehicle model is currently valid.
Use `alt.hash` to hash a plain text model. ex: `alt.hash('infernus')`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `number` |

#### Returns

`boolean`

#### Defined in

[server/getters/vehicle.ts:44](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L44)

___

### passengers

▸ **passengers**(`vehicle`): `alt.Player`[]

Returns all passengers and the driver.
No specific order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vehicle` | `Vehicle` |

#### Returns

`alt.Player`[]

#### Defined in

[server/getters/vehicle.ts:126](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/vehicle.ts#L126)
