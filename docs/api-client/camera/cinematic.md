---
title: '.cinematic'
order: -99
---

# {{ $frontmatter.title }}

A cinematic camera is a camera that rotates between multiple nodes.

You can add nodes to the cinematic camera and it will navigate between each node when next is called.

## iCameraNode

Used for adding nodes.

```ts
interface iCameraNode {
    /**
     * Position for where to create this camera.
     *
     * @type {Vector3}
     * @memberof iCameraNode
     */
    pos: Vector3;

    /**
     * Rotation of the camera, if applicable.
     * Also applies as rotation for entity attachment if applicable.
     *
     * @type {Vector3}
     * @memberof iCameraNode
     */
    rot?: Vector3;

    /**
     * Applies to entity attachment, and the offset from said entity.
     *
     * @type {Vector3}
     * @memberof iCameraNode
     */
    offset?: Vector3;

    /**
     * The FOV for the camera. Default is set to 90.
     *
     * @type {number}
     * @memberof iCameraNode
     */
    fov: number;

    /**
     * Time to ease between camera nodes. If only one camera node is present it does not apply.
     *
     * @type {number}
     * @memberof iCameraNode
     */
    easeTime?: number;

    /**
     * The entity `scriptID` to follow with the camera.
     *
     * @type {number}
     * @memberof iCameraNode
     */
    entityToTrack?: number;

    /**
     * A position to point that camera towards if applicable.
     *
     * @type {Vector3}
     * @memberof iCameraNode
     */
    positionToTrack?: Vector3;

    /**
     * The entity to attach this camera to, can be a vehicle, ped, etc.
     * Use `scriptID` for this.
     *
     * @type {number}
     * @memberof iCameraNode
     */
    entityToAttachTo?: number;

    /**
     * A vehicle bone index to attach to if `entityToAttachTo` is specified
     *
     * @type {number}
     * @memberof iCameraNode
     */
    vehicleBone?: number;

    /**
     * A pedestrian bone index to attach to if `entityToAttachTo` is specified
     *
     * @type {number}
     * @memberof iCameraNode
     */
    pedBone?: number;

    /**
     * If this is the last camera node, should we destroy the camera after easeTime?
     *
     * @type {boolean}
     * @memberof iCameraNode
     */
    isLastNode?: boolean;
}
```



## destroy

Should be called before starting a new camera instance.

```ts
Athena.camera.cinematic.destroy();
```

## addNode

Used to add a new camera point to the Cinematic Camera.

Arguments

* iCameraNode - See above

```ts
AthenaClient.camera.cinematic.addNode({
    pos: new alt.Vector3(0, 0, 0),
    fov: 90,
    easeTime: 250,
    positionToTrack: alt.Player.local.vehicle.pos,
});
```

## next

Used to navigate between the current point and next point.

Arguments

* removeFromArray -> boolean
  * If set to true, after this node is consumed it will be removed from the array.

```ts
AthenaClient.camera.cinematic.next(false);
```

## play

Play all camera nodes in order, but does not clear the camera nodes array.

```ts
AthenaClient.camera.cinematic.play();
```