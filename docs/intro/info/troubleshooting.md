---
title: 'Troubleshooting'
order: -99
---

# {{ $frontmatter.title }}

While not everything can be magically fixed when working with Athena, there are some steps you can take to help identify your problem.

## The Fix Command

There's a command that comes with Athena that can only be ran with `npm install` has been ran successfully once.

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

If you're lucky everything will go back to normal. If not, you may need to seek out additional help in Discord.

## Black Screen, No WebView

This means that there's a Vue plugin which has an error in it. This is mostly due to adding plugins that may be broken.

This can be resolved by doing the following:

1. Look at each plugin your `src/core/plugins` folder.
2. Determine which plugins were added or modified.
3. Disable or remove a custom plugin.
4. Start the server. Check if it resolves it.
5. If it did not resolve it, go to step 2 again.

If successful you'll determine which plugin is causing issues in your installation.