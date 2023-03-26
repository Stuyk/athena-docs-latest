---
title: Athena.systems.jobTrigger
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### create

▸ **create**(`player`, `data`): `any`

Creates a WebView Job Window to show to the player.
Will invoke a callback or an event if accepted or declined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `Player` |
| `data` | `JobTrigger` |

#### Returns

`any`

#### Defined in

[server/systems/jobTrigger.ts:87](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/jobTrigger.ts#L87)

___

### override

▸ **override**(`functionName`, `callback`): `any`

Used to override job trigger functions.

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionName` | ``"create"`` |
| `callback` | (`player`: `Player`, `data`: `JobTrigger`) => `any` |

#### Returns

`any`

#### Defined in

[server/systems/jobTrigger.ts:106](https://github.com/Stuyk/altv-athena/blob/552012ca4/src/core/server/systems/jobTrigger.ts#L106)