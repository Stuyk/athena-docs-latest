---
title: 'Troubleshooting'
order: 9999
---

# Troubleshooting

While not everything can be magically fixed when working with Athena, there are some steps you can take to help identify your problem.

## Fix Most Issues

This only works if you have ran `npm install` at least once.

After having ran that command once, you can run the following in a terminal.

```
npm run fix
```

After running this command run the following:

```
npm install
```

```
npm run update
```

If you're lucky everything will go back to normal. 

If not, you may need to seek out additional help in Discord.

## Black Screen, No WebView

This means that there's a Vue plugin which has an error in it. This is mostly due to adding plugins that may be broken.

This can be resolved by doing the following:

1. Look at each plugin your `src/core/plugins` folder.
2. Determine which plugins were added or modified.
3. Disable or remove a custom plugin.
4. Start the server. Check if it resolves it.
5. If it did not resolve it, go to step 2 again.

If successful you'll determine which plugin is causing issues in your installation.

Alternatively, having empty and incomplete Vue components can prevent proper usage.


## Slow Startup

We strongly advise that you develop with `npm run dev`.

When you use `npm run windows` for development you are waiting for a ton of images, files, etc. to be packed up and loaded into the server for distribution.

Other reasons why your startup is slow:

* Too Many Mods
* Too Many MLOs

## Reconnecting

Use `npm run dev` to turn on `reconnect`.

In your `alt:V Client installation folder` you will need to edit the `altv.toml` file and set the parameter `debug = true`.

Restart your alt:V client after making any changes to the configuration.