---
title: 'Character Select'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The character select plugin allows you to select existing characters, specify a single character configuration, and determine the flow before your player joins the server.

::: warning

Character Select has an Agenda Index of 99.&#x20;

Meaning it should always be the **last step** in the player login flow.

:::

📁 `src/core/plugins/core-character-select/`

It allows the player to do the following:

* Rotate between characters.
* Select a character.
* Delete a character.
* Create a new character.

It also includes a standard interface to go with it.

![Athena's Default Character Select](https://i.imgur.com/e7lsSOY.png)

### Configuration

The configuration can be found in the following folder:

📁 `src/core/plugins/core-character-select/shared/config.ts`

* CHARACTER\_SELECT\_POS
  * The position where the character should stand.
* CHARACTER\_SELECT\_ROT
  * The heading in which the character should face. A rotation 0-360.
* MAX\_CHARACTERS
  * How many characters are allowed.&#x20;
* SKIP\_SELECTOR
  * Set this to `true` to enforce single character select.
  * MAX\_CHARACTERS must also be set to `1` to enforce this.

_The camera is created based on the player's position and heading._

### Usage

During the `character select` screen a player will have the option to create a new character if they have an existing one, or they will automatically be forced to create a new character when they join the server.

The can choose a different character by navigating left and right.&#x20;

They can also delete a character.&#x20;

One character must always exist.

### Commands

No Commands Available
