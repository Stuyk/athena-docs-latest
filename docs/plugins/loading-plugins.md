---
title: 'Loading Plugins'
order: -97
---

# {{ $frontmatter.title }}

### Learn to Load Plugins

All plugins should be placed inside the 📁`src/core/plugins` folder.

This can be done by performing a submodule clone, or simply downloading the resource files and dragging and dropping them into the folder.

#### Structure

The folder structure is very specific.

It consists of several folders inside your main folder.

* server
  * This should all be server-side code
* client
  * This should all be client-side code
* shared
  * This should be shared between server, client, and webview
* webview
  * This is a WebView Page you want to inject

```
📁 src/core/plugins/core-example
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
      │
      ├───📁 components
      │       Component1.vue
      │       Component2.vue
      │       Component3.vue
```

### **Enabling & Disabling Plugins**

In order to disable a plugin, create a file with one of the following names from the list below inside the root folder of the plugin (`src/core/plugins/<your-plugin>`):

* `disable.plugin`
* `disabled.plugin`
* `disable`
