---
title: '.progressBar'
order: -99
---

# {{ $frontmatter.title }}

This is an in-world 3D progress bar.

![](https://i.imgur.com/nWOVaTy.png)

## Usage

* Progress Bar Interface (See Below)

```ts
AthenaClient.rmlui.progressBar.create(progressBarInterface): void;
```

## Example

```ts
AthenaClient.rmlui.progressBar.create({
    color: new alt.RGBA(0, 255, 0, 200),
    distance: 10,
    milliseconds: 25000,
    position: alt.Player.local.pos,
    percentageEnabled: true,
});
```