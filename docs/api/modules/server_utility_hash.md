---
title: Athena.utility.hash
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
| `hashPassword` | (`plainTextPassword`: `string`) => `string` |
| `sha256` | (`data`: `string`) => `string` |
| `sha256Random` | (`data`: `string`) => `string` |
| `testPassword` | (`plainTextPassword`: `string`, `pbkdf2Hash`: `string`) => `boolean` |

#### Defined in

[server/utility/hash.ts:51](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/hash.ts#L51)

## Functions

### hashPassword

▸ **hashPassword**(`plainTextPassword`): `string`

Hash a plain text password with pbkdf2 hash and salt.

#### Parameters

| Name | Type |
| :------ | :------ |
| `plainTextPassword` | `string` |

#### Returns

`string`

#### Defined in

[server/utility/hash.ts:8](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/hash.ts#L8)

___

### sha256

▸ **sha256**(`data`): `string`

Hash a string of data into a persistent SHA256 hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[server/utility/hash.ts:35](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/hash.ts#L35)

___

### sha256Random

▸ **sha256Random**(`data`): `string`

Hash a string of data into a random SHA256 hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

[server/utility/hash.ts:46](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/hash.ts#L46)

___

### testPassword

▸ **testPassword**(`plainTextPassword`, `pbkdf2Hash`): `boolean`

Test a pbkdf2 hash and salt against a plain text password.

#### Parameters

| Name | Type |
| :------ | :------ |
| `plainTextPassword` | `string` |
| `pbkdf2Hash` | `string` |

#### Returns

`boolean`

#### Defined in

[server/utility/hash.ts:21](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/server/utility/hash.ts#L21)
