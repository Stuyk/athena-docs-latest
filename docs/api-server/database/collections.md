---
title: '.collections'
order: -99
---

# {{ $frontmatter.title }}

These describe the default collections that are associated with the Athena Framework.

## Collections

* accounts
* characters
* interiors
* options
* vehicles
* storage
* factions
* items

## Enum Block

```ts
export enum Collections {
    Accounts = 'accounts',
    Characters = 'characters',
    Interiors = 'interiors',
    Options = 'options',
    Vehicles = 'vehicles',
    Storage = 'storage',
    Factions = 'factions',
    Items = 'items',
}
```