---
title: 'Creating Plugins'
order: -98
outline: [1,6]
comment: false
---

# Creating Plugins

Plugins in the Athena Framework are made in a specific way. Meaning, that following this general structure will help you create robust plugins without touching the core of the framework.

It is important that when a plugin is created that is does not adjust the core of the Athena Framework. This ensures that compatibility is future-proof and additional updates to the plugin can be made without over complicating it.

Plugins allow you to change the `core` code without actually modifying any of the core code.

For the sake of this page imagine `my-plugin` as the folder you are working out of.

## Quick Plugin Template

Create a folder in `src/core/plugins` called `my-plugin`

Path should be `src/core/plugins/my-plugin`

Create `3` folders inside of the `my-plugin` folder:

* server
* client
* webview

Create an `index.ts` file inside of these `2` folders:

* server/index.ts
* client/index.ts

Inside of `server/index.ts` put the following:

```ts
import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'myPlugin';
Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    alt.log('Hello from Athena Server!');
});
```

Inside of `client/index.ts` put the following:

```ts
import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api';

alt.log(`Hello from Athena Client!`);
```

Run the server, and you will see each corresponding message in server, and client side.

That's all that is needed to start building plugins.

## Integrating an API

If you want to know how to integrate your own API to distribute it to users of Athena with auto-completion, there is a guide for that.

[Check the Guide Out](/tutorials/free/top/plugin-api.md)

## Special Files

These are files that can be created in a plugin folder to do different things.

### disable

Create a file called `disable` will disable the plugin from loading.

### dependencies.json

This lets you install additional npm packages for a plugin.

Create the file and put whatever packages you need.

::: details Example

```ts
{
  "dependencies": [
    'xyz'
  ],
  "devDependencies": [
    'abc'
  ]
}
```

:::

## Special Folders

Now that we have the template out of the way.

Let's talk about the plugin structure more in-depth.

For the sake of this page imagine `my-plugin` as the folder you are working out of.

### my-plugin/icons

This folder is mostly used for the built-in inventory system.

Any icon in here can be used in a `BaseItem` as long as you specify the correct path.

```
@AthenaPlugins/icons/my-plugin/some-icon.png
```

### my-plugin/sounds

This folder is used for `.ogg` sounds only. It only supports the `.ogg` format, and no other format of audio will work.

This is a restriction of the chromium instance, so don't try.

A custom sound can be played through the following pathway:

```
@AthenaPlugins/sounds/my-plugin/some-sound.ogg
```

### my-plugin/webview

All custom vue components can go in here. Create a Vue file, and start coding a new page.

It is highly recommended to use `ThisFormatForVueFiles.vue` and give them prefixes or suffixes which make sense.

Example: `StuykVueCharSelect`

::: details Vue File Example

```html
<template>
  <div class="container">
    <div class="purple">
      {{ helloWorldText }}, {{ saySomethingElse ? saySomethingElse : '' }}
    </div>
  </div>
<template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WebViewEvents from '@utility/webViewEvents';

let helloWorldText = ref('Hello World!');
let saySomethingElse = ref(undefined)

onMounted(() => {
  console.log('Hello in console');
  saySomethingElse.value = 'I have assigned this value later.'
});
</script>

<style scoped>
.purple {
  color: purple;
}
</style>
```
:::

### my-plugin/webview/assets

Assets are pretty much images, media, etc.

They belong to the WebView and are easily accessed.

The should be named in a `unique` way which means, prefix your files to make them unique.

If you place a file in this folder called `stuyk-logo-custom.png` the HTML code below will load it.

```
<img src="/plugins/stuyk-logo-custom.png" />
```

