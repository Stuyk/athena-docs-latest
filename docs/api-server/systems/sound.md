---
title: '.sound'
order: -99
---

# {{ $frontmatter.title }}

A system used to play sounds in-world or on a player.

## CustomSoundInfo Interface

Used to describe the sound that you want to play.

```ts
interface CustomSoundInfo {
    /**
     * A custom `.ogg` file name for an audio clip.
     *
     * @type {string}
     * @memberof CustomSoundInfo
     */
    audioName: string;

    /**
     * A positional Vector3 on where to play the sound from.
     *
     * @type {Vector3}
     * @memberof CustomSoundInfo
     */
    pos?: Vector3;

    /**
     * The volume between `0.0` - `1.0`.
     *
     * Recommended: `0.35`.
     *
     * @type {number}
     * @memberof CustomSoundInfo
     */
    volume?: number;

    /**
     * If you want the audio 3D specify a target to play this audio from.
     *
     * @type {alt.Entity}
     * @memberof CustomSoundInfo
     */
    target?: alt.Entity;
}
```


## playSound

A single sound for a player. Requires `.ogg` format.

```ts
Athena.systems.sound.playSound(somePlayer, { audioName: 'item_teleport', target: somePlayer})
```

## playSoundInDimension

Play a single sound for all players in a dimension.

```ts
Athena.systems.sound.playSoundInDimension(5, { audioName: 'item_teleport', target: somePlayer})
```

## playSoundInArea

Play a single sound from a position in the world. Only players near it can hear it.

```ts
Athena.systems.sound.playSoundInArea({ audioName: 'item_teleport', pos: new alt.Vector3(0, 0, 0) });
```