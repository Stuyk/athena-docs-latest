---
title: Athena.getters.player
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### byAccount

▸ **byAccount**(`id`): `alt.Player` \| `undefined`

Gets an online player by account identifier based on their MongoDB account _id.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/player.ts:15](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L15)

___

### byDatabaseID

▸ **byDatabaseID**(`id`): `alt.Player` \| `undefined`

Get an online player based on their MongoDB _id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/player.ts:86](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L86)

___

### byID

▸ **byID**(`id`): `alt.Player` \| `undefined`

Return a player based on their ID given the Identifier strategy currently setup.
Use this to get the player in-game that you see with your eyes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/player.ts:108](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L108)

___

### byName

▸ **byName**(`name`): `alt.Player` \| `undefined`

Gets an online player by their name.
Not case sensitive and returns the first player it finds matching that name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/player.ts:41](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L41)

___

### byPartialName

▸ **byPartialName**(`partialName`): `alt.Player` \| `undefined`

Gets an online player by their partial name.
Not case sensitive and returns the first player it finds that includes the partial

#### Parameters

| Name | Type |
| :------ | :------ |
| `partialName` | `string` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/player.ts:64](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L64)

___

### characters

▸ **characters**(`playerOrAccount`): `Promise`<[`player`](server_config.md#player)[]\>

Returns all characters that belong to a player.
Requires account info, player, or account id string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerOrAccount` | `any` |

#### Returns

`Promise`<[`player`](server_config.md#player)[]\>

#### Defined in

[server/getters/player.ts:271](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L271)

___

### closestOwnedVehicle

▸ **closestOwnedVehicle**(`player`): `alt.Vehicle` \| `undefined`

Returns the closest owned vehicle for a given player.
Counts any owned vehicles from other players that have supplied an injection for ownership.
Ignores vehicles with keyless for start.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`alt.Vehicle` \| `undefined`

#### Defined in

[server/getters/player.ts:215](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L215)

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

[server/getters/player.ts:193](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L193)

___

### closestToVehicle

▸ **closestToVehicle**(`vehicle`): `alt.Player` \| `undefined`

The player closest to a vehicle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vehicle` | `Vehicle` |

#### Returns

`alt.Player` \| `undefined`

#### Defined in

[server/getters/player.ts:203](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L203)

___

### inFrontOf

▸ **inFrontOf**(`player`, `startDistance?`): `Promise`<`alt.Player` \| `undefined`\>

Creates a temporary ColShape in front of the player.
The ColShape is then used to check if the entity is present within the ColShape.
It will keep subtract distance until it finds a player near the player that is in the ColShape.
Works best on flat land or very close distances.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `player` | `Player` | `undefined` |
| `startDistance?` | `number` | `6` |

#### Returns

`Promise`<`alt.Player` \| `undefined`\>

#### Defined in

[server/getters/player.ts:122](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L122)

___

### isDead

▸ **isDead**(`player`): `boolean`

Determine if a player is currently dead / marked as dead.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`boolean`

#### Defined in

[server/getters/player.ts:303](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L303)

___

### isNearPosition

▸ **isNearPosition**(`player`, `pos`, `dist?`): `boolean`

Checks if a player is within 3 distance of a position.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `player` | `Player` | `undefined` |
| `pos` | `IVector3` | `undefined` |
| `dist` | `number` | `3` |

#### Returns

`boolean`

#### Defined in

[server/getters/player.ts:173](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L173)

___

### isValid

▸ **isValid**(`player`): `boolean`

Determine if a player is valid, and spawned as a character.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`boolean`

#### Defined in

[server/getters/player.ts:319](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L319)

___

### ownedVehicleDocuments

▸ **ownedVehicleDocuments**(`player`): `Promise`<[`player`](server_config.md#player)[]\>

Get all owned vehicles from the database for a given character.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`Promise`<[`player`](server_config.md#player)[]\>

#### Defined in

[server/getters/player.ts:255](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L255)

___

### waypoint

▸ **waypoint**(`player`): `alt.IVector3` \| `undefined`

Get the current waypoint marked on a player's map.
Will return undefined it is not currently set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`alt.IVector3` \| `undefined`

#### Defined in

[server/getters/player.ts:183](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/getters/player.ts#L183)