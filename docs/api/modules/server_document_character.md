---
title: Athena.document.character
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Type Aliases

### KeyChangeCallback

Ƭ **KeyChangeCallback**: (`player`: `alt.Player`, `newValue`: `any`, `oldValue`: `any`) => `void`

#### Type declaration

▸ (`player`, `newValue`, `oldValue`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `alt.Player` |
| `newValue` | `any` |
| `oldValue` | `any` |

##### Returns

`void`

#### Defined in

[server/document/character.ts:7](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L7)

## Functions

### bind

▸ **bind**(`player`, `document`): `any`

Binds a player identifier to a Character document.
This document is cleared on disconnected automatically.
This should be the first thing you do after having a user authenticate and select a character.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `document` | `Character` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:21](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L21)

___

### get

▸ **get**<`T`\>(`player`): `T` \| `undefined`

Return current player data and their associated character object.

Can also append custom objects to the generic type to obtain custom data from the database.

**`Example`**

```ts
interface Testing {
    myProperty: string;
}

function someFunction(player: alt.Player) {
     const data = Athena.document.character.get<Testing>(player);
     if (typeof data === 'undefined') {
         // Player likely not logged in...
         return;
     }

     if (data.myProperty) {
         console.log(data.myProperty);
     }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Character` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`T` \| `undefined`

#### Defined in

[server/document/character.ts:74](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L74)

___

### getField

▸ **getField**<`T`, `ReturnType`\>(`player`, `fieldName`): `ReturnType` \| `undefined`

Get the current value of a specific field inside of the player data object.
Can be extended to obtain any value easily.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |
| `ReturnType` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `fieldName` | `string` \| `number` \| `symbol` |

#### Returns

`ReturnType` \| `undefined`

#### Defined in

[server/document/character.ts:91](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L91)

___

### onChange

▸ **onChange**<`T`\>(`fieldName`, `callback`): `any`

Listen for individual player document changes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` \| `number` \| `symbol` |
| `callback` | [`KeyChangeCallback`](server_document_character.md#KeyChangeCallback) |

#### Returns

`any`

#### Defined in

[server/document/character.ts:203](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L203)

___

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"bind"`` |
| `callback` | (`player`: `Player`, `document`: `Character`) => `any` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:243](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L243)

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"unbind"`` |
| `callback` | (`id`: `number`) => `any` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:244](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L244)

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"get"`` |
| `callback` | <T\>(`player`: `Player`) => `T` \| `undefined` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:245](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L245)

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"getField"`` |
| `callback` | <T, ReturnType\>(`player`: `Player`, `fieldName`: `string` \| `number` \| `symbol`) => `ReturnType` \| `undefined` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:246](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L246)

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"set"`` |
| `callback` | <T, Keys\>(`player`: `Player`, `fieldName`: `Keys`, `value`: `any`, `skipCallbacks`: `boolean`) => `any` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:247](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L247)

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"setBulk"`` |
| `callback` | <T, Keys\>(`player`: `Player`, `fields`: `Keys`) => `any` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:248](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L248)

▸ **override**(`functionName`, `callback`): `any`

Used to override any character document functionality

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"onChange"`` |
| `callback` | <T\>(`fieldName`: `string` \| `number` \| `symbol`, `callback`: [`KeyChangeCallback`](server_document_character.md#KeyChangeCallback)) => `any` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:249](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L249)

___

### set

▸ **set**<`T`, `Keys`\>(`player`, `fieldName`, `value`, `skipCallbacks?`): `any`

Sets a player document value, and saves it automatically to the selected character's database.
Automatically calls all callbacks associated with the field name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |
| `Keys` | `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `player` | `Player` | `undefined` |
| `fieldName` | `Keys` | `undefined` |
| `value` | `any` | `undefined` |
| `skipCallbacks` | `boolean` | `false` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:116](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L116)

___

### setBulk

▸ **setBulk**<`T`, `Keys`\>(`player`, `fields`): `any`

Sets player document values, and saves it automatically to the selected character's database.
Automatically calls all callbacks associated with the field name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |
| `Keys` | [`Partial`](server_controllers_textlabel__internal_.md#Partial)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `fields` | `Keys` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:171](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L171)

___

### unbind

▸ **unbind**(`id`): `any`

Unbind stored player character cache data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`any`

#### Defined in

[server/document/character.ts:38](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/document/character.ts#L38)
