---
title: 'Commands'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The command plugin was created to provide basic commands for development, administration, and general utilities. Most commands are set to `PERMISSIONS.ADMIN` which is the highest admin level.

📁 `src/core/plugins/core-commands/`

Commands are prefixed with `/` after press `t` to open the Chat Box.

There are also additional commands available through the console which can be accessed with `F8` in-game.

### Configuration

📁 `src/core/plugins/core-commands/config/commandsConfig.ts`

* COMMAND\_OOC\_DISTANCE
  * This is the distance of the /ooc command output.
* COMMAND\_ME\_DISTANCE
  * This is the distance of the /me command output.
* COMMAND\_DO\_DISTANCE
  * This is the distance of the /do command output.
* COMMAND\_LOW\_DISTANCE
  * This is the distance of the /low command output.
* COMMAND\_WHISPER\_DISTANCE
  * This is the distance of the /w command output.
* CHAT\_ROLEPLAY\_OOC\_COLOR
  * HEX color representation for out-of-character chat.
* CHAT\_ROLEPLAY\_COLOR
  * HEX color representation of /me & /do chat.
* CHAT\_ROLEPLAY\_LOW\_COLOR
  * HEX color representation of /low chat.
* CHAT\_ROLEPLAY\_WHISPER\_COLOR
  * HEX color representation of /whisper chat.

### Usage

The links below are for a page that contains all of the commands that are currently available in the entire plugin. Sometimes it will become out-of-date. You can always view the source code to get the most up-to-date information about available commands.

