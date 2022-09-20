---
title: '.loadAnimation'
order: -99
---

# {{ $frontmatter.title }}

Used to load an animation dictionary for the client using natives.

### Usage

Arguments

* dict -> string
  * Name of the dictionary for 
  * Example: 'melee@large_wpn@streamed_core'
* count -> number = 0 (optional)
  * Could be used to reduce the amount of loading tries. But should be left as zero.

Returns

* Promises to return a boolean. `true` if it was a success, `false` if it failed to load.

```typescript
AthenaClient.utility.loadAnimation('melee@large_wpn@streamed_core');

```
