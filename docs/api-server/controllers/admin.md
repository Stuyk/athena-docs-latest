---
title: '.admin'
order: 0
---

# {{ $frontmatter.title }}


## banPlayer

Used to ban a player from the server.

### Usage

Arguments

* player -> alt.Player
* reason -> string

Returns

* Promise to return a boolean. True if the player was banned, false if not.

```typescript
Athena.controllers.admin.banPlayer(player, 'Cheating');
```

## unbanPlayer

Used to unban a player from the server.

### Usage

Arguments

* discord -> string
  * The discord ID of the player to unban.
  * Example: '202685967935471617'

Returns

* Promise to return a boolean. True if the player was unbanned, false if not.

```typescript
Athena.controllers.admin.unbanPlayer('202685967935471617');
```

