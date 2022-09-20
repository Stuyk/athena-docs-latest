---
title: '.playFromEntity'
order: -99
---

# {{ $frontmatter.title }}

Used to play a 3D sound comming from an entity using the audio webview.

::: info

Does not update after first play. So if the entity has moved, the sound will not move.

:::

Audio files are found and can be added in `src-webviews/public/assets/sounds`.

Only supports .ogg

### Usage

Arguments

* entity -> alt.Entity
  * The entity to play the sound from
* soundName -> string
  * Name of the audio file
  * Example: 'unlock.ogg'

Returns

* Returns a void.

```typescript
AthenaClient.sound.playFromEntity(targetPlayer, 'unlock.ogg');
```
