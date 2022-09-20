---
title: 'How do I access player by ID?'
order: 0
---

# {{ $frontmatter.title }}

There are actually several ways to access a player by their id.

However, we need context of what type of ID you are looking for in the first place.

## ID Above the Player Head

This ID may be obtained by using the following API pathway.

If the user is online the target will be valid.

```ts
const someNumber = 5;
const target = Athena.get.player.byID(someNumber);
if (!target || !target.valid) {
    throw new Error(`Target could not be found`);
}
```

## Character ID in the Database

The Character ID may be obtained by using the following API pathway.

If the user is online the target will be valid.

```ts
const someCharacterIdentifier = '631779e7119e86368a313e1c'; // player.data._id
const target = Athena.get.player.byDatabaseID(someCharacterIdentifier)
if (!target || !target.valid) {
    throw new Error(`Target could not be found`);
}
```

## Account ID in the Database

The Account ID may be obtained by using the following API pathway.

If the user is online the target will be valid.

```ts
const someAccountIdentifier = '631779e7119e86368a313e1c';  // player.accountData._id
const target = Athena.get.player.byAccount(someAccountIdentifier)
if (!target || !target.valid) {
    throw new Error(`Target could not be found`);
}
```

## Character Document while Offline

Use this to obtain a Character document for a player who is offline.

_This must be an async function to work._

```ts
async function doSomething() {
    const someCharacterIdentifier = '631779e7119e86368a313e1c'; // player.data._id
    const character = await Athena.database.funcs.fetchData('_id', someCharacterIdentifier, Athena.database.collections.Characters)
    if (typeof character === 'undefined') {
       throw new Error(`Character could not be found with that _id`);
    }
}
```

## Account Document while Offline

Use this to obtain a Account document for a player who is offline.

_This must be an async function to work._

```ts
async function doSomething() {
    const someAccountIdentifier = '631779e7119e86368a313e1c'; // player.accountData._id;
    const account = await Athena.database.funcs.fetchData('_id', someAccountIdentifier, Athena.database.collections.Accounts)
    if (typeof account === 'undefined') {
       throw new Error(`Account could not be found with that _id`);
    }
}
```

