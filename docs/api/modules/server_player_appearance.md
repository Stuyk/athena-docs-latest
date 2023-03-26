---
title: Athena.player.appearance
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Type Aliases

### BaseStyle

Ƭ **BaseStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `number` |
| `opacity` | `number` |
| `style` | `number` |

#### Defined in

[server/player/appearance.ts:7](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L7)

___

### Decorator

Ƭ **Decorator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collection` | `string` |
| `overlay` | `string` |

#### Defined in

[server/player/appearance.ts:5](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L5)

___

### HairStyle

Ƭ **HairStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color1` | `number` |
| `color2` | `number` |
| `decorator` | [`Decorator`](server_player_appearance.md#Decorator) |
| `dlc?` | `string` \| `number` |
| `hair` | `number` |

#### Defined in

[server/player/appearance.ts:6](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L6)

## Functions

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override any appearance setter functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setHairStyle"`` |
| `callback` | (`player`: `Player`, `style`: [`HairStyle`](server_player_appearance.md#HairStyle)) => `any` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:193](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L193)

▸ **override**(`functionName`, `callback`): `any`

Used to override any appearance setter functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setFacialHair"`` |
| `callback` | (`player`: `Player`, `choice`: [`BaseStyle`](server_player_appearance.md#BaseStyle)) => `any` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:194](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L194)

▸ **override**(`functionName`, `callback`): `any`

Used to override any appearance setter functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setEyebrows"`` |
| `callback` | (`player`: `Player`, `choice`: [`BaseStyle`](server_player_appearance.md#BaseStyle)) => `any` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:195](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L195)

▸ **override**(`functionName`, `callback`): `any`

Used to override any appearance setter functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setModel"`` |
| `callback` | (`player`: `Player`, `isFeminine`: `boolean`) => `any` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:196](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L196)

▸ **override**(`functionName`, `callback`): `any`

Used to override any appearance setter functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setEyeColor"`` |
| `callback` | (`player`: `Player`, `color`: `number`) => `any` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:197](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L197)

▸ **override**(`functionName`, `callback`): `any`

Used to override any appearance setter functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"updateTattoos"`` |
| `callback` | (`player`: `Player`, `decorators?`: [`Decorator`](server_player_appearance.md#Decorator)[]) => `any` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:198](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L198)

___

### setEyeColor

▸ **setEyeColor**(`player`, `color`): `any`

Set an eye color on a player.

Automatically saves to database.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `color` | `number` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:135](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L135)

___

### setEyebrows

▸ **setEyebrows**(`player`, `choice`): `any`

Update eyebrow style for a player.

Automatically saves to the database.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `choice` | [`BaseStyle`](server_player_appearance.md#BaseStyle) |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:84](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L84)

___

### setFacialHair

▸ **setFacialHair**(`player`, `choice`): `any`

Apply facial hair style to a player.

Automatically saves to database.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `choice` | [`BaseStyle`](server_player_appearance.md#BaseStyle) |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:57](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L57)

___

### setHairStyle

▸ **setHairStyle**(`player`, `style`): `any`

Set a player's hairstyle.

Automatically saves it to Database.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `style` | [`HairStyle`](server_player_appearance.md#HairStyle) |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:19](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L19)

___

### setModel

▸ **setModel**(`player`, `isFeminine`): `any`

Change the base model of the player to either a masculine base, or feminine base.

Automatically saves to database.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `isFeminine` | `boolean` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:111](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L111)

___

### updateTattoos

▸ **updateTattoos**(`player`, `decorators?`): `any`

Used to update tattoos, and a hair overlay if present.
Add the 'decorators' paramater to override player appearance.

**`Export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `player` | `Player` | `undefined` |
| `decorators?` | [`Decorator`](server_player_appearance.md#Decorator)[] | `undefined` |

#### Returns

`any`

#### Defined in

[server/player/appearance.ts:157](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/player/appearance.ts#L157)