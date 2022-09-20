---
title: '.funcs.fetchAllByField'
order: 0
---

# {{ $frontmatter.title }}

Used to fetch data from a collection based on a specific key and value pairing. It will return all documents as an array that match the key and value pair.

### Usage

Arguments

* key -> string
  * An identifier to help find the document you are looking for.
  * Example: 'model'
* value -> any
  * A value that should correspond under that specific key's value.
  * Example: 'infernus'
* collection -> string
  * The name of the collection to fetch data from.
  * Example: 'vehicles'

Returns

* Promises to return an Array of documents if found. Otherwise an empty array.

```typescript
interface IVehicle {
    _uid?: unknown;
    model: string;
}

async function fetchSomething() {
    const results = await Athena.database.funcs.fetchAllByField<IVehicle>('model', 'infernus', 'vehicles');
    if (!results || results.length <= 0) {
        console.log('Could not find any infernuses.');
        return;
    }
    
    console.log('Found all the infernuses owned by players.');
    return results;
}

```
