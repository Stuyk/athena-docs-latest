---
title: '.plugins'
order: -99
---

# {{ $frontmatter.title }}

A system used to register plugins for initialization during runtime.

## registerPlugin

Used to register a plugin.

```ts
Athena.systems.plugins.registerPlugin('My Cool Plugin', () => {
    // Call other init functions here for your plugin.
})
```

## getPlugins

Returns all plugin names.

```ts
const plugins = Athena.systems.plugins.getPlugins();
console.log(plugins);
```