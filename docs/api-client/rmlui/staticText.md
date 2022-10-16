---
title: '.staticText'
order: -99
---

# {{ $frontmatter.title }}

This is static text that can be rendered in-world. 

Scales automatically based on player position.

![](https://i.imgur.com/CmMDLtM.png)

## Usage

* Static Text Interface

```ts
AthenaClient.rmlui.staticText.upsert(staticTextInterface): void;
```

## Example

```ts
AthenaClient.rmlui.staticText.upsert({
    distance: 10,
    position: alt.Player.local.pos,
    text: 'Hello World!',
    uid: 'hi',
});
```