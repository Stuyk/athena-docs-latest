---
title: '.funcs.insertData'
order: 0
---

# {{ $frontmatter.title }}

Inserts any type of document structure into a specific collection.

Returns the inserted document if last parameter is set to `true`.

The returned document will contain an assigned `_id`.

### Usage

Arguments

* document -> Object | Template
  * Any object, interface, etc.
* collection -> string
  * The name of the collection that is being inserted into.
* returnDocument -> boolean
  * If set to true the returned document will have an `_id`.

Returns

* Promises to return a document if `returnDocument` set to true.

```typescript
interface PhoneInfo {
    _id?: unknown;
    owner: string;
    cell: number;
}

async function insertSomething() {
    const newPhoneInfo = await Athena.database.funcs.insertData<PhoneInfo>({ owner: '631779d7119e86368a313e1b', cell: 5551111222 }, 'PhoneInfoCollection', true);
    console.log(newPhoneInfo);
}
```
