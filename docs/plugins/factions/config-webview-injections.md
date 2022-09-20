---
title: 'WebView Injections'
order: 0
---

# {{ $frontmatter.title }}

Factions have a really great way to build new features into existing pages.

We call this a faction WebView injection.

The PayCheck system is actually a faction WebView injection.

This can be found at 📁`src/core/plugins/core-faction-paychecks`

### What does an Injection Look Like?

Here's a paycheck configuration component injected into settings.

![](https://i.imgur.com/nzGyrtq.png)

### Why?

A faction may not have every feature that a server may need. These injections let you create new plugins without touching the core faction system. It's already complicated enough with all of its tools and utilities.

### How?

Create a new plugin.

Create a folder in the plugin folder called `components`.

Inside of `components` create a new `.vue` file and use the following template:

<details>

<summary>MyComponent.vue</summary>

```html
<template>
    <div class="stack fill-full-width">
        <div class="hello">{{ helloText }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

const ComponentName = 'MyComponent';
export default defineComponent({
    name: ComponentName,
    props: {
        faction: Object as () => Faction,
        character: String,
        pos: Object as () => Vector3,
        rot: Object as () => Vector3,
        isOwner: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Button: defineAsyncComponent(() => import('@components/Button.vue')),
        Icon: defineAsyncComponent(() => import('@components/Icon.vue')),
        Module: defineAsyncComponent(() => import('@components/Module.vue')),
    },
    data() {
        return {
            helloText: 'hello world',
        };
    },
    methods: {
        sayHello()
            console.log('hello');
        },
    },
    mounted() {
        // Do something when this loads.
        // Like register events with alt.on
        
        this.sayHello();
    },
    unmounted() {
        // Do something when this unloads.
        // Like unregister alt.on events with alt.off.
    },
});
</script>

<style>
.hello {
    color: green;
}
</style>
```

</details>

Your component will need to add additional events on client-side to handle requests.

It's pretty complicated, look at the faction paychecks plugin for more information and use it as boilerplate code.

#### Loading the Component

The component has to be added to where it should be injected into the faction page.

&#x20;📁`src/core/plugins/core-factions/coreInjections.ts`

Inside of this file you can define async components to load, and where to inject them.

Almost all injections will be appended to the bottom of that page.

Make sure to get the file path correct.



