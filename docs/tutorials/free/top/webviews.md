---
title: 'WebViews & Pages'
outline: [1,3]
order: -98
---

# WebViews & Pages

In the Athena Framework we call our HTML interfaces `pages`. A page is automatically loaded into our `Vue 3` system when you create a plugin.

This means that all of your custom WebView content should be placed under `src/core/plugins/your-plugin/webview`.

Each `.Vue` file needs to have a unique name.

`src/core/plugins/your-plugin/webview/YourPluginPage.vue`

Once you have created the file you can add this template below to make it function.

## Vue 3 Template

This utilizes the `composite` API for Vue 3.

```html
<template>
  <div class="make-big">
    <p>{{ test }}</p>
    <br />
    <p>Times Clicked: {{ count }}</p>
    <button @click="clickButtonEvent">
        Click Me!
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import WebViewEvents from '@ViewUtility/webViewEvents';

let test = ref('hello world');
let count = ref(0);

function clickButtonEvent() {
    count.value += 1;
}

// You can also make a function that emits to the server from the WebView
// function emitToServer() {
//     WebViewEvents.emit('someEvent', 'someValue');
// }

onMounted(() => {
    console.log('Bind events here!');
    // WebViewEvents.on('your-event-name', () => {})

    // Always make sure that this is emitted last in your mount function
    // This should always match the name of your Vue file
    WebViewEvents.emitReady('YourPluginPage'); 
});

</script>

<style scoped>
.make-big {
  font-size: 24px;
  color: red;
}
</style>
```

## Testing the View

In order to make sure everything is loading currently you can use `npm run dev` or `npm run vue-dev`.

If you're just working on the WebView consider just doing `npm run vue-dev`.

You can view your file in the browser: `http://localhost:3000`

You can use `CTRL + SHIFT + F` in the browser to show / hide the pages to show.

_Note: If the port is already taken then it will not be under port 3000_

## Writing a Page

When it comes to writing the page there are dozens of tutorials out there for Vue 3.

* [Vue 3 Documentation](https://vuejs.org/api/composition-api-setup.html)
* [Video by 'Make Apps with Danny'](https://www.youtube.com/watch?v=Nxs-AQW5jCM)
* [100% Composition Tutorial](https://www.youtube.com/watch?v=I_xLMmNeLDY)

Obviously you can just go to the documentation and pull out what you really need.

That or just look into some of the other Vue files that exist in the plugins folder.

There are very complex plugins but the `character select` plugin has relatively simple Vue.

## Accessing a Page

The simplest way to make a page function `in-game` is to create a `client-side` script with a HotKey that loads the page.

```ts
import * as alt from 'alt-client';
import * as native from 'natives';
import * as AthenaClient from '@AthenaClient/api';
import { onTicksStart } from '@AthenaClient/events/onTicksStart';

function init() {
    page = new AthenaClient.webview.Page({
        name: 'YourPluginPage',
        callbacks: {
            onReady: async () => {
                // AthenaClient.webview.emit('loading-something-event');
            },
            onClose: () => {
                // Do something when the page is closed...
            },
        },
        keybind: {
            key: 85, // The Letter U
            useSameKeyToClose: true,
            description: 'YourPluginPage',
            identifier: 'your-plugin-page-menu',
            allowInSpecificPage: 'YourPluginPage',
        },
        options: {
            onOpen: {
                focus: true,
                hideHud: true,
                hideOverlays: true,
                setIsMenuOpenToTrue: true,
                showCursor: true,
                disableControls: 'all',
                disablePauseMenu: true,
            },
            onClose: {
                hideCursor: true,
                showHud: true,
                showOverlays: true,
                unfocus: true,
                setIsMenuOpenToFalse: true,
                enableControls: true,
                enablePauseMenu: true,
            },
        },
    });

    // You can also manually open the page without a keybind
    // alt.onServer('onPageOpenFromServerSideMaybeInteraction?', () => {
    //    if (typeof page !== 'undefined') {
    //        page.open();
    //    }   
    //     
    // });

    // You can also manually close the page without a keybind
    // alt.onServer(INVENTORY_EVENTS.TO_CLIENT.CLOSE, () => {
    //    if (typeof page !== 'undefined') {
    //        page.close(true);
    //    }   
    // });
}

onTicksStart.add(init);
```

## Character & Account State

If you need to access character data from the `Character` document there is an easy way to obtain that information.

In `V5` we have the ability to use `props` to obtain that data.

This data becomes available after the user has `logged in` and has a character and account available.

```html
<script lang="ts" setup>
    import { ref, onMounted, PropType } from 'vue';
    import { Character } from '@AthenaShared/interfaces/character';
    import { Account } from '@AthenaShared/interfaces/iAccount';

    const props = defineProps({
        state: Object as PropType<Character>,
        accountState: Object as PropType<Account>,
    });

    // Accessible like:
    // props.state.cash
    // props.state.bank
</script>
```

![](https://i.imgur.com/eR8eTdT.png)

## State Management

If you need to save some data to be accessible between pages there is a state utility.

State is not saved between sessions but it will be available for the duration of the session.

```ts
import * as State from '@ViewUtility/state';

State.set('someKey', 'someValue');

// Remember to define the type you expect as a generic.
const result = State.get<string>('someKey');
```

## Assets

If you need to add custom images create a folder inside of the `webview` folder of your plugin.

```
./src/core/plugins/your-plugin/webview/assets
```

**Example**

```
./src/core/plugins/your-plugin/webview/assets/my-cool-logo-unique.png
```

**Accessed in HTML:**

```html
<img src="/plugins/my-cool-logo-unique.png" />
```