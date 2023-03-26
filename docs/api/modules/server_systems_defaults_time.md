---
title: Athena.systems.defaults.time
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### disable

▸ **disable**(): `void`

Disable the default time synchronization on server-side.

**`Example`**

```ts
Athena.systems.default.time.disable();
```

**`Export`**

#### Returns

`void`

#### Defined in

[server/systems/defaults/time.ts:83](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/defaults/time.ts#L83)

___

### getHour

▸ **getHour**(): `number`

Get the current hour.

**`Export`**

#### Returns

`number`

#### Defined in

[server/systems/defaults/time.ts:100](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/defaults/time.ts#L100)

___

### getMinute

▸ **getMinute**(): `number`

Get the current minute.

**`Export`**

#### Returns

`number`

#### Defined in

[server/systems/defaults/time.ts:110](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/defaults/time.ts#L110)

___

### updatePlayer

▸ **updatePlayer**(`player`): `void`

Updates the player time to match the current server time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |

#### Returns

`void`

#### Defined in

[server/systems/defaults/time.ts:59](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/defaults/time.ts#L59)
