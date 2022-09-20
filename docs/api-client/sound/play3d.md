---
title: '.play3D'
order: -99
---

# {{ $frontmatter.title }}

Used to play a 3D sound from the audio webview.
Audios are found and can be added in `src-webviews/public/assets/sounds`

### Usage

Arguments

* pos -> alt.Vector3
  * Position of the sound in the world
* soundName -> string
  * Name of the audio file
  * Example: 'unlock.ogg'

Returns

* Returns a void.

```typescript
AthenaClient.sound.play3D(vehicle.pos, 'unlock.ogg');
```
