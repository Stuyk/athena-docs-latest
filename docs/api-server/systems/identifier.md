---
title: '.identifier'
order: -99
---

# {{ $frontmatter.title }}

A system used as a way to obtain a player by an id in-game.

## setIdentificationStrategy

Used to set a specific strategy for the identification system.

* account_id -> The account identifier associated with a player's account.
* character_id -> The character identifier associated with the character the player is currently playing.
* server_id -> The native alt:V identification system.

```ts
Athena.systems.identifier.setIdentificationStrategy('server_id');
```

## setPlayerIdentifier

Automatically sets the player identification by strategy to the synced meta.

This ID can be obtained through syncedMeta by doing `player.getSyncedMeta(PLAYER_SYNCED_META.IDENTIFICATION_ID)`.

```ts
Athena.systems.identifier.setPlayerIdentifier(player);
```

_In most cases you will never need to use this function._

## getPlayer

Returns a player based on a number, or string identifier passed to the function.

```ts
const somePlayer = Athena.systems.identifier.getPlayer(5);
if (!somePlayer || !somePlayer.valid) {
    console.log('player not found...')
    return;
}
```


## getIdByStrategy

Returns a numerical identifier associated with the current strategy.

```ts
const someID = Athena.systems.identifier.getIdByStrategy(somePlayer);
console.log(`Identifier is: ${someID}`);
```

## override

Lets you override any other function above. Requires the same arguments, and return type.

_No example provided as it's out of scope for this documentation._