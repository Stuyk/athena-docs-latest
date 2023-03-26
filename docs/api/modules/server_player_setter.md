---
title: Athena.player.setter
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### account

▸ **account**(`player`, `accountData`): `Promise`<`void`\>

Set the current account data for this player.

**`Memberof`**

SetPrototype

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `accountData` | [`Account`](../interfaces/server_interface_iAccount_Account.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[server/player/setter.ts:21](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/setter.ts#L21)

___

### actionMenu

▸ **actionMenu**(`player`, `actionMenu`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `actionMenu` | `ActionMenu` |

#### Returns

`any`

#### Defined in

[server/player/setter.ts:43](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/setter.ts#L43)

___

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override any setter functions

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"account"`` |
| `callback` | (`player`: `Player`, `accountData`: [`Account`](../interfaces/server_interface_iAccount_Account.md)) => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[server/player/setter.ts:74](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/setter.ts#L74)

▸ **override**(`functionName`, `callback`): `any`

Used to override any setter functions

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"actionMenu"`` |
| `callback` | (`player`: `Player`, `actionMenu`: `ActionMenu`) => `any` |

#### Returns

`any`

#### Defined in

[server/player/setter.ts:75](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/setter.ts#L75)

▸ **override**(`functionName`, `callback`): `any`

Used to override any setter functions

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"respawned"`` |
| `callback` | (`player`: `Player`, `position`: `IVector3`) => `void` |

#### Returns

`any`

#### Defined in

[server/player/setter.ts:76](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/setter.ts#L76)

___

### respawned

▸ **respawned**(`player`, `position`): `void`

Set this player as respawned.

**`Memberof`**

SetPrototype

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | `Player` | - |
| `position` | `IVector3` | Use null to find closest hospital. |

#### Returns

`void`

#### Defined in

[server/player/setter.ts:56](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/setter.ts#L56)
