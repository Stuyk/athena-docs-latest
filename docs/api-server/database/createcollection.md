---
title: '.funcs.createCollection'
order: 0
---

# {{ $frontmatter.title }}

Used to create a collection if it does not exist. A collection is like a `table` from MySQL. However, we don't have to manually create what the table can hold. A table in MongoDB can hold almost any data types without defining them.

### Usage

Arguments

* collection -> string
  * The name of the collection to create.
  * Example: 'pottedplants'

Returns

* Promise of successful collection creation as a boolean.

```typescript
Athena.database.funcs.createCollection('pottedplants');
```
