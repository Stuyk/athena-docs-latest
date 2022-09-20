---
title: 'Folder Structure'
order: -98
---

# {{ $frontmatter.title }}

### What is this structure?

It is no mystery that the Athena Framework is **HUGE**. There are well over 400+ files, and tons of folders to look through. This framework can be intimidating but there is a method to the madness if you've never seen a project of this size before.

This page will teach you how the author organized the project structure.

### Single Resource

Unlike in FiveM or other platforms the Athena Framework runs out of a `single resource` using the alt:V client. Which means that there is no resource restarting. Instead it's a full server restart.

You may think; but that's really slow isn't it? That's what I originally thought when I started writing this project but by using the most bleeding edge technologies we've made the Athena Framework one of the `FASTEST` frameworks that will exist in the GTA:V space.

While running in `development` mode which has been purely created for development, you can literally reboot the entire server in less than 20 seconds.

![Running Development Mode for the Athena Framework](https://thumbs.gfycat.com/ThunderousFlusteredBinturong-size\_restricted.gif)

### Where to Modify Code?

Everything that you may want to modify for your server is inside of the `src` folder. Everything in this folder contains everything you will ever likely want to modify to customize Athena.

![Athena Framework Folder in VSCode](https://i.imgur.com/pjHQuy2.png)

### Server Structure Explained

If you are planning on modifying these folders they are highly likely to be modified in the future. If you want to expand upon the Framework consider using plugins.

#### 📁 api

This folder contains the core API. It's mostly only useful for adding new functions to the Athena API in groups.

#### 📁 athena

There is a configuration file inside of here for customizing some of the core game mode's features. It's currently being phased out but some configuration data is still present.

#### 📁decorators

All existing TypeScript based decorates for the framework.

#### 📁effects

These are the default item effects that come with the Athena Framework. There isn't very many in here; but enough information to build your own item effects.

#### 📁 events

These are mostly event structures to help make Athena tick. They should remain mostly untouched as there isn't much to customize here.

#### 📁 extensions

This is where player functionality currently lives. They can usually be accessed through `Athena.player.x` or `Athena.vehicle.x` inside of VSCode when writing functions.

Extensions can usually be modified with an `override` function to change the behavior and logic. Which is accessible through the plugin structure as well.

#### 📁 imports

This is where all core game mode imports are done. These usually consist of many different imports with a load order to ensure the game mode runs correctly. You may append any additional core import files here. However, it is highly recommended to use the plugin structure instead for modifying / adding new features to the framework.

[creating-plugins.md](../../plugins/creating-plugins.md)

#### 📁 interface

These are server-side specific interfaces which help define different type structures in the framework. You can find account structure, category information, configs, etc. in here. Usually you don't want to directly modify these but instead extend them. You can find examples of extensions of common interfaces inside of some of the plugins in the `src/core/plugins` folder.

#### 📁 streamers

These help synchronize server and client specific information using a custom node based streamer that runs along-side the Athena Framework. The streamer basically takes in player information, determines the closest set of data around that player, then feeds it to the player's client-side.

In most cases all major streamers are covered such as objects, markers, static pedestrians, text labels, etc.

These can be accessed under `Athena.controllers.x`

#### 📁 systems

This is a huge portion of the logic for the framework. This is where a lot of core functionality can be found. Everything from sound systems, character systems, blip systems, chat systems, storage systems can all be found here.

This also contains injections which can be accessed through `Athena.injections`. Injections will let you override or modify existing features without touching the core too much.

The catch is that the functionality in most of this section is abstracted to be used or called from other interfaces such as WebViews / Views.

#### 📁 utility

General utility functions to make the game mode tick. Try `Athena.utility`.

#### 📁 views

General view functionality for built-in things like Inventory, Storage, and Login (Discord).
