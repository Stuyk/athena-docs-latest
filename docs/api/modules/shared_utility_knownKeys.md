---
title: AthenaShared.utility.knownKeys
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Type Aliases

### KnownKeys

Ƭ **KnownKeys**<`T`\>: { [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[shared/utility/knownKeys.ts:1](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/shared/utility/knownKeys.ts#L1)

___

### OmitFromKnownKeys

Ƭ **OmitFromKnownKeys**<`T`, `K`\>: [`KnownKeys`](shared_utility_knownKeys.md#KnownKeys)<`T`\> extends infer U ? keyof `U` extends keyof `T` ? [`Pick`](server_player_inventory__internal_.md#Pick)<`T`, [`Exclude`](server_player_inventory__internal_.md#Exclude)<keyof `U`, `K`\>\> & [`Pick`](server_player_inventory__internal_.md#Pick)<`T`, [`Exclude`](server_player_inventory__internal_.md#Exclude)<keyof `T`, keyof [`KnownKeys`](shared_utility_knownKeys.md#KnownKeys)<`T`\>\>\> : `never` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[shared/utility/knownKeys.ts:5](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/shared/utility/knownKeys.ts#L5)

___

### RemoveIndex

Ƭ **RemoveIndex**<`T`\>: { [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[shared/utility/knownKeys.ts:11](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/shared/utility/knownKeys.ts#L11)
