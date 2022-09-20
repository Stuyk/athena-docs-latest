---
title: 'Creating Plugins'
order: -98
---

# {{ $frontmatter.title }}

Plugins in the Athena Framework are made in a specific way. Meaning, that following this general structure will help you create robust plugins without touching the core of the framework.

It is important that when a plugin is created that is does not adjust the core of the Athena Framework. This ensures that compatibility is future-proof and additional updates to the plugin can be made without over complicating it.

### Visual Learner? Here's a Template

There is a template that exists as a general starting point to copy / paste into your server infrastructure to begin building a plugin. You can check that out here:

[https://github.com/Stuyk/altv-athena-plugin-template](https://github.com/Stuyk/altv-athena-plugin-template)

### Structure

All plugins should be placed inside the `src/core/plugins` folder.

The folder structure is very specific.

It consists of several folders inside your main folder.

* server
  * This should all be server-side code
* client
  * This should all be client-side code
* shared
  * This should be shared between server, client, and WebView
* WebView
  * This is a WebView Page you want to inject
  * DOES NOT SUPPORT IMAGES, SOUNDS, ETC. THEY BELONG IN THE `src-webviews/public` folder

```
📁 src/core/plugins/core-example
  |───dependencies.json
  ├───📁 client
  │   │   index.ts
  |   │
  │   └───📁 src  
  │       │   file1.ts
  │       │   file2.ts
  │       │   file3.ts
  |
  ├───📁 server
  │   │   index.ts
  │   │
  │   └───📁 src
  │       │   file1.ts
  │       │   file2.ts
  │       │   file3.ts
  │
  ├───📁 shared
  │   │   file1.ts
  │   │   file2.ts
  │   │   file3.ts
  │
  └───📁 webview
      │   Example.vue
      │   tsconfig.json
      └───📁 images
      │    │ myimage.jpg
      |    | my-other-image.png
      │
      ├───components
      │       Component1.vue
      │       Component2.vue
      │       Component3.vue
```

#### Naming

Rules for Files and Folder(s)

* Plugins should use `kebab-case` for folder names.
  * ie. `door-plugin`
* File names should be `camelCase`.
  * ie. `mainDoorController.ts`
* Plugins should use their respective folders for imports
  * Server: `src/core/plugins/example-plugin/server`
    * The main import file for the plugin should be called `index.ts`.
  * Client: `src/core/plugins/example-plugin/client`
    * The main import file for the plugin should be called `index.ts`.
  * Shared: `src/core/plugins/example-plugin/shared`
  * WebView: `src/core/plugins/example-plugin/webview`
    * There must be a main `*.vue` file in this folder.
    * Keep all components and additional vue files in subfolders.
      * Images: `src/core/plugins/example-plugin/webview/images`
         * Must be `jpg`, `png`, `jpeg`, `gif`, or `webm` 
* Entry file for a Plugin should be `index.ts`
  * This applies to both `client` and `server`.

It is up to you as the plugin creator to provide `GOOD` instruction(s) on installation and removal of the plugin.

#### Dependencies

If you have server-side dependencies for an npm package you can create a `dependencies.json` in the root of your plugin structure to auto-install dependencies for an end-user.

```json
{
    "dependencies": [
      "discord.js@latest"
    ],
    "devDependencies": [
      "glob"
    ]
}
```

Dependencies in `devDependencies` will not be installed during production mode of the server. Meaning if you want to use an npm package in the game mode you should put it in dependencies.

_Example dependencies.json_

### Registering a Server Plugin

In your plugin's `index` file you should register your plugin.

```typescript
import * as alt from 'alt-server';
import { PluginSystem } from '../../server/systems/plugins';

const PLUGIN_NAME = 'Example Plugin';

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    // Initialize other things for your plugin here...
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
```

### Learn from Example

Last but not least you should always look at the existing plugins to get a general idea of how they work and how they're being implemented. There are plenty of them to look at in the core framework, and there are additional plugins available in the Athena Discord.
