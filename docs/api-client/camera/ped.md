---
title: '.ped'
order: -99
---

# {{ $frontmatter.title }}

A camera that rotates the player in a circle based on mouse position on-screen when holding right-click.

Also includes `WASD` controls to move the camera up and down.

Only one instance of this camera can exist at a time.

## create

Used to create the ped edit camera.

Arguments

* scriptID of PED or Player
* Vector3 Offset of Camera
* isLocalPlayer? -> boolean

```ts
async function setupCameraForLocalPlayer() {
    await AthenaClient.camera.ped.create(alt.Player.local.scriptID, { x: -0.25, y: 0, z: 0 }, true);
}
```

## destroy

Simply destroy the currently created PedEditCamera.

```ts
await AthenaClient.camera.ped.destroy();
```

## setCamParams

Change camera properties.

Arguments

* zPos - starting z position of the camera
* fov - The field of view for the camera
* easeTime - Time to ease the camera from current position to new position

## update

Force update the camera.

Arguments

* scriptID of PED or Player

```ts
await AthenaClient.camera.ped.update(alt.Player.local.scriptID);
```
