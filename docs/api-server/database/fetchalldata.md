---
title: '.funcs.fetchAllData'
order: 0
---

# {{ $frontmatter.title }}

Gets all documents from a collection and returns them.

This should be used sparingly as it's an intensive function.

### Usage

Arguments

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
    const vehicles = await Athena.database.funcs.fetchAllData<IVehicle>('vehicles');
    if (!vehicles || vehicles.length <= 0) {
        console.log('Could not find any vehicles.');
        return;
    }
    
    console.log('Found all the vehicles owned by players.');
    return vehicles;
}

```
