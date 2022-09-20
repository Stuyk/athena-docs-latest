---
title: 'Factions'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The faction system is a grouping system for admins to help player's group people together. It can be used for gangs, factions, businesses, etc. The current iteration of Factions **does not** have any built-in factions. You will have to create them yourself.

📁 `src/core/plugins/core-factions/`

There is already built-in group management, rank management, bank management, etc.

::: warning
Currently the Faction Administrative tools are very limited. It's heavily database based.

:::

### Configuration

The current configuration for factions is confusing and will be rather difficult. In the near future it will hopefully be resolved but I can at least state how to handle factions a bit better.

::: warning

When you modify a faction in a database you **must** restart the server.

:::

See the sidebar for Configuration sections.

### Usage

An admin can create a faction by doing `/fcreate faction_name_here`.

An faction owner can invite others by performing `/finvite ingame_id_here`.

A player can accept an invite by typing `/faccept`.

A player in a faction can open the panel by typing `/fopen`.

An admin may join another faction by doing `/fjoin faction_uid_here`.

An admin may overwrite faction ownership by joinig a faction and performing `/fsetowner ingame_id_here`.

### Commands

#### fcreate

This command can be used to create a faction as an Admin.

Requires the admin to not be in a faction already.

```
/fcreate [faction_name]
```

#### fopen

Opens a faction panel if the player is in a faction.

```
/fopen
```

#### fjoin

Forces the admin to quit their current faction and join a new faction by uid.

```
/fjoin [uid]
```

#### finvite

Invite a player to your faction if you have invite permissions.

Requires knowing their name, or an identifier in-game.

```
/finvite [id_or_first_las]
```

#### faccept

Accept last faction invite.

```
/faccept
```

#### fsetowner

As an admin override the current owner of the faction to another player in-game in the faction.

```
/fsetowner [id]
```