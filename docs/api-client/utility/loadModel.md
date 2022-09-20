---
title: '.loadModel'
order: -99
---

# {{ $frontmatter.title }}

Used to load a model for the client using natives.
Model list: [https://docs.altv.mp/gta/articles/ped/models.html](https://docs.altv.mp/gta/articles/ped/models.html)

### Usage

Arguments

* hash -> number
  * Needs to be hashed before using alt.hash
  * Example: 'alt.hash('A_C_Chimp')'

Returns

* Promises to return a boolean. `true` if it was a success, `false` if it failed to load.

```typescript
const model = alt.hash('A_C_Chimp')
AthenaClient.utility.loadModel(model);

```
