---
title: '.sprite'
order: -99
---

# {{ $frontmatter.title }}

A sprite can be defined as a in-world or on-screen image that can be displayed using the `rmlui` API that comes with alt:V.

These images are drawn on top of your GTA:V instance and can only be positioned inside of the window itself.

Sprites are useful because you can directly add a `.png` image instead of adding textures which require special tools and software to create them.

Sprites offer an alternative to texture work.

![](https://i.imgur.com/hKpE2u4.png)

## Image Pathing

Sprites offer an alternative way to load your image from your plugin. You can specify that your image is located in your plugin by using `@plugins/your-plugin-name/client/your-image.png`

This means you have an image located in:

```
src/core/plugins/your-plugin-name/client
```

## Interface SpriteInfo

```ts
export interface SpriteInfo {
    /**
     * A unique identifier for this sprite.
     *
     * @type {string}
     * @memberof SpriteInfo
     */
    uid: string;

    /**
     * The path of the image we want to draw.
     * Use `@plugin/plugin-name/client/image.png` for plugin based pathing.
     * Otherwise paths are based on `../../../plugins/plugin-name/client/image.png`.
     *
     * @type {string}
     * @memberof SpriteInfo
     */
    path: string;

    /**
     * The width of the image. Pixels.
     *
     * @type {number}
     * @memberof SpriteInfo
     */
    width: number;

    /**
     * The height of the image. Pixels.
     *
     * @type {number}
     * @memberof SpriteInfo
     */
    height: number;

    /**
     * A position in-world, or on-screen where to draw this image.
     *
     * @type {(alt.IVector3 | alt.IVector2)}
     * @memberof SpriteInfo
     */
    position: alt.IVector3 | alt.IVector2;

    /**
     * Call this callback once, when the sprite is touched.
     *
     * @memberof Sprite
     */
    callOnceOnTouch?: (uid: string) => void;
}
```

## create

Create allows you to show a sprite in-world or on-screen depending on the position that is passed.

Arguments

* spriteInfo - SpriteInfo

```ts
function doSomething(uid: string) {
    // This is optional. But you can do things with the sprite in-world if a local player walks over it.

    AthenaClient.sprite.remove(uid);
}

AthenaClient.sprite.create({
    uid: 'my-sprite',
    path: `@plugins/example-sprite/client/my-image.png`,
    height: 50,
    width: 50,
    position: alt.Player.local.pos,
    callOnceOnTouch: doSomething,
});
```

## remove

Used to remove a sprite based on a unique identifier.

Arguments

* uid - string

```ts
AthenaClient.sprite.remove('my-sprite');
```

## update

This is used to update a sprite based on `uid`. This can be anything from changing its image, position, or size.

```ts
alt.everyTick(() => {
    // This makes a sprite directly on top of the local player.
    AthenaClient.sprite.update('my-sprite', { position: alt.Player.local.pos });
});
```