---
title: AthenaClient.utility.math
outline: [1,3]
order: 0
---

# {{ $frontmatter.title }}


## Functions

### degToRad

▸ **degToRad**(`degrees`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `degrees` | `number` |

#### Returns

`number`

#### Defined in

[client/utility/math.ts:12](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L12)

___

### getAverage

▸ **getAverage**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[] |

#### Returns

`number`

#### Defined in

[client/utility/math.ts:52](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L52)

___

### getCrossProduct

▸ **getCrossProduct**(`v1`, `v2`): `alt.Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | `Vector3` |
| `v2` | `Vector3` |

#### Returns

`alt.Vector3`

#### Defined in

[client/utility/math.ts:3](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L3)

___

### getDirectionFromRotation

▸ **getDirectionFromRotation**(`rotation`): `alt.IVector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `IVector3` |

#### Returns

`alt.IVector3`

#### Defined in

[client/utility/math.ts:30](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L30)

___

### getNormalizedVector

▸ **getNormalizedVector**(`vector`): `alt.Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | `Vector3` |

#### Returns

`alt.Vector3`

#### Defined in

[client/utility/math.ts:7](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L7)

___

### getPointsInCircle

▸ **getPointsInCircle**(`points`, `radius`, `center`): `alt.IVector2`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number` |
| `radius` | `number` |
| `center` | `IVector2` |

#### Returns

`alt.IVector2`[]

#### Defined in

[client/utility/math.ts:38](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L38)

___

### rotationToDirection

▸ **rotationToDirection**(`rotation`): `alt.Vector3`

Could also be seen as rotAnglesToVector

**`Export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `IVector3` |

#### Returns

`alt.Vector3`

#### Defined in

[client/utility/math.ts:22](https://github.com/Stuyk/altv-athena/blob/ae8402672/src/core/client/utility/math.ts#L22)
