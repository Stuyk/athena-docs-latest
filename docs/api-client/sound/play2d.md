---
title: '.play2D'
order: -99
---

# {{ $frontmatter.title }}

Used to play a 2D sound from the audio webview.
Audios are found and can be added in `src-webviews/public/assets/sounds`

### Usage

Arguments

* audioName -> string
  * Name of the audio file
  * Example: 'unlock.ogg'
* volume -> number = 0.35 (optional)
  * Volume of the sound (0.0 - 1.0)

Returns

* Returns a void.

```typescript
AthenaClient.sound.play2D('unlock.ogg');
```
