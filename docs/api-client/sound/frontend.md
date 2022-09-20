---
title: '.frontend'
order: -99
---

# {{ $frontmatter.title }}

Used to play a sound from the frontend.
Sound list: [https://altv.stuyk.com/docs/articles/tables/frontend-sounds.html](https://altv.stuyk.com/docs/articles/tables/frontend-sounds.html)

### Usage

Arguments

* audioName -> string
  * Name of the audio
  * Example: '10_SEC_WARNING'
* ref -> string
  * Reference of the audio
  * Example: 'HUD_MINI_GAME_SOUNDSET'

Returns

* Returns a void.

```typescript
AthenaClient.sound.frontend('10_SEC_WARNING', 'HUD_MINI_GAME_SOUNDSET');
```
