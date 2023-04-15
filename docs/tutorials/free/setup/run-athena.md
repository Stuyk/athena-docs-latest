---
title: 'Running Athena'
order: -92
---

# Running Athena

When you are running the framework you should always ensure you are in the `altv-athena-private` or the directory which has the Athena Framework source files.

An example of how your terminal should look if you are in the right directory.

![](https://i.imgur.com/a6CmKQ3.png)

Always open a powershell, command prompt, or a terminal to run the commands below.

## First Step

When you are running Athena, always start off by running a windows instance.

After you run the command below, join the server and create a character.

```
npm run windows
```

## Second Step

When you are done you can hit `CTRL + C` to close the server.

## Third Step

When you want to make changes, and do development you can use the dev command.

This only works on your local computer utilizing **windows** with GTA:V installed.

This is considered the FASTEST way to develop with this framework.

Here's what you should do first.

* Edit your `altv.toml` file where your alt:V installation is located.
* Add `debug = true` to your configuration.
* Restart your alt:V Client if it was running already.

After, you can run the server command below.

```
npm run dev
```