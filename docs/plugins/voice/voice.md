---
title: 'Voice'
order: -99
---

# {{ $frontmatter.title }}

::: warning 

Voice is broken in versions that are less than `3.5.0`

:::

### Abstract

The voice system uses alt:V's internal voice system that is ran on top of your server. No need to create a TeamSpeak server when alt:V already has a voice system built-in.

📁 `src/core/plugins/core-voice/`

* A global voice channel
* Spatial voice system
* Players join / leave distance and dimension based voice service

### Configuration

📁 `src/core/plugins/core-voice/shared/src/config.ts`

* ENABLE\_VOICE
  * Enables the voice service.
* MAIN\_VOICE\_CHANNEL\_NAME
  * The name to give the main voice channel name.

#### Additional Configuration

If you wish to use the voice system in `devtest` or `dev` then you need to append this to your configuration in `configs/dev.json` or `configs/devtest.json`.

```
"voice": {
    "bitrate": 64000,
    "externalSecret": null,
    "externalHost": null,
    "externalPort": null,
    "externalPublicHost": null,
    "externalPublicPort": null
}
```

### Usage

When a player has setup their voice input in the main alt:V menu and joins your server they may press their dedicated hotkey (Usually `N`) to speak in-game.

### Commands

No Commands Available
