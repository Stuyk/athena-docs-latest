---
title: '.funcs.fetchData'
order: 0
---

# {{ $frontmatter.title }}

Used to fetch data from a collection based on a specific key and value pairing. It will return the entire matching document if it is found.

### Usage

Arguments

* key -> string
  * An identifier to help find the document you are looking for.
  * Example: '\_uid'
* value -> any
  * A value that should correspond under that specific key's value.
  * Example: '61d09f92d8fe7c5bcc567953'
* collection -> string
  * The name of the collection to fetch data from.
  * Example: 'characters'

![A Key Value Pair in MongoDB Compass](https://i.imgur.com/GdUSsXN.png)

Returns

* Promise of specified document type or `null` if not found.

```typescript
interface PottedPlants {
    _uid?: unknown;
    pos: {
        x: number,
        y: number,
        z: number
    }
}

async function fetchSomething() {
    const result = await Athena.database.funcs.fetchData<PottedPlants>('_uid', '61d09f92d8fe7c5bcc567953', 'pottedplants');
    if (!result) {
        console.log('Could not find data');
        return;
    }
    
    console.log('Found the data');
    return result;
}

```
