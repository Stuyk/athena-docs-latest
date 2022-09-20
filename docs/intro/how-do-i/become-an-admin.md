---
title: 'How do I become an Admin?'
order: 0
---

# {{ $frontmatter.title }}

You first need to enable Developer Mode for your Discord.

Open your user settings, then go to advanced, and toggle developer mode.

![](https://i.imgur.com/r6c0xzO.png)

## Find a User ID

Right-click on any user in discord, or yourself and click `copy id`.

![](https://i.imgur.com/JmEFXiA.png)

## Set Admin Command

While your server is running. Type the following in your server console.

```ts
/setadmin paste_id_here 4
```

## Admins Levels

By default Athena comes with 4 levels of permissions.

```ts
0 - NONE
1 - VIP
2 - Moderator
4 - Admin
// How to add more...
8 - Whatever you want this to be
16 - Whatever you want this to be
32 - Whatever you want this to be
64 - Whatever you want this to be
```
