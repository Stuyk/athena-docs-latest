---
title: 'Character Creator'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The character creator plugin allows you to create characters. It is paired along-side the character select plugin. The plugin itself is the start of a new player's journey on entering the server.

📁 `src/core/plugins/core-character-creator/`

It allows the player to do the following:

* Modify their face
* Modify their hair
* Modify their sexuality
* Modify their name, age, and gender
* Modify their makeup, beard, etc.

It also includes a standard interface to go with it.

![Athena's Default Character Creator](https://i.imgur.com/eg19wA4.png)

### Configuration

The configuration can be found in the following folder:

📁 `src/core/plugins/core-character-creator/shared/config.ts`

* CHARACTER\_CREATOR\_POS
  * A world position where the player should be standing.
* CHARACTER\_CREATOR\_ROT
  * A 360 heading in which the direction should face.

_The camera is created based on the player's position and heading._

### Usage

During the `character select` screen a player will have the option to create a new character if they have an existing one, or they will automatically be forced to create a new character when they join the server.

### Commands

No Commands Available
