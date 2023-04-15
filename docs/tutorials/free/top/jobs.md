---
title: 'Jobs'
outline: [1,3]
order: -98
---

# Jobs

Let me preface by saying that a job is a task that a player must complete. These are usually meant to be 'money makers' and are your typical grinding jobs that require point-to-point systems, or something of the sort.

This tutorial is meant to show you how to build a simple job and have it give the player some cash upon completing all objectives.

## Setup

Create a new plugin.

Add folders for `server` and `client`.

Setup the `server/index.ts` file with the plugin boilerplate.

```ts
import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'jerb';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    console.log(`jerb loaded!`);
});

```

## Starting Point

Let's make a simple interaction that the player can interact with when they walk over to the location.

We'll be using the following position to create our first interaction point.

```ts
const jobStart = new alt.Vector3({ x: 132.4439239501953, y: -1462.4208984375, z: 29.357059478759766 }).sub(0, 0, 1);
```

Inside of the `registerPlugin` intitializer function let's build a few things we can see.

1. Interaction Point
   1. Enables `Shift + E` based interaction with a point.
   2. When a callback is specified it will invoke the function on server-side when pressed.

2. Marker
   1. A visible usually transparent marker to show a place in the world.

3. Text Label
   1. A visible text entry that can be displayed alongside the marker.
   
4. Blip
   1. A visible radar marker that informs the player something is on the map.

![](https://i.imgur.com/sa35UKB.png)

Here's some code to go with it.

```ts
const jobStart = new alt.Vector3({ x: 132.4439239501953, y: -1462.4208984375, z: 29.357059478759766 }).sub(0, 0, 1);

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    Athena.controllers.blip.append({
        pos: jobStart,
        scale: 1,
        sprite: 58,
        shortRange: true,
        text: 'Food Delivery',
        color: 5,
    });

    Athena.controllers.marker.append({ type: 1, pos: jobStart, color: new alt.RGBA(0, 255, 0, 100) });
    Athena.controllers.textLabel.append({ text: 'Food Delivery', pos: jobStart.add(0, 0, 2) });
    Athena.controllers.interaction.append({ position: jobStart, range: 3, height: 2 });
});
```

## Building the Interaction

We are going to create a new function that is called when the player interacts with the area.

We'll call this function `startJob` for the sake of it.

```ts
function startJob(player: alt.Player) {
    Athena.player.emit.message(player, `Invoked Callback!`);
}

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
        Athena.controllers.blip.append({
        pos: jobStart,
        scale: 1,
        sprite: 58,
        shortRange: true,
        text: 'Food Delivery',
        color: 5,
    });

    Athena.controllers.marker.append({ type: 1, pos: jobStart, color: new alt.RGBA(0, 255, 0, 100) });
    Athena.controllers.textLabel.append({ text: 'Food Delivery', pos: jobStart.add(0, 0, 2) });
    Athena.controllers.interaction.append({
        position: jobStart,
        range: 3,
        height: 2,
        callback: startJob,
        isPlayerOnly: true,
    });
});
```

Head in-game press `Shift + E` in the designated marker and that should be sufficient.

![](https://i.imgur.com/fNrmwrQ.png)

## Job Instance

Great! Now we can start working on the job aspect of it.

Let's create a new job instance for the player.

A job consists of two things.

1. A Job Class
2. Multiple Objectives

An objective is a task given to the player that they must complete.

Let's create a job, and have them walk to two different positions to complete the job.

This is just to get you to understand how adding objectives works.

```ts
function startJob(player: alt.Player) {
    Athena.player.emit.message(player, `Starting Job!`);

    // create the job instance
    const job = new Athena.systems.job.builder();

    // first objective created
    const pos1 = new alt.Vector3({ x: 148.24191284179688, y: -1444.7227783203125, z: 29.14162826538086 }).sub(0, 0, 1);
    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Walk to the first point',
        criteria: Athena.systems.job.objective.buildCriteria({ NO_VEHICLE: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: pos1,
        range: 2,
        marker: {
            type: 1,
            pos: pos1,
            color: new alt.RGBA(255, 255, 0, 100),
        },
    });

    // second objective created
    const pos2 = new alt.Vector3({ x: 159.4980010986328, y: -1453.724609375, z: 29.141624450683594 }).sub(0, 0, 1);
    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Walk to the second point',
        criteria: Athena.systems.job.objective.buildCriteria({ NO_VEHICLE: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: pos2,
        range: 2,
        marker: {
            type: 1,
            pos: pos2,
            color: new alt.RGBA(255, 255, 0, 100),
        },
    });

    // Add the player to the job instance
    job.addPlayer(player);
}
```

Head in-game and give it a try.

You'll need to walk to each point, and `not` be in a vehicle to complete the objective.

Simple enough right?


![](https://i.imgur.com/cms12CQ.png)

![](https://i.imgur.com/MHmttNK.png)

![](https://i.imgur.com/H7xS85b.png)

## Getting Advanced

Now we will rewrite a few objectives and get a bit more descriptive with them.

This section is meant to show you some of the major customization available for the 

1. First objective is to go to the side door of the building and obtain a 'package'.
2. Once the 'package' is obtained we will spawn a vehicle for the player to use.
3. The player must get on to the vehicle in order for the objective to be completed.

This can get very confusing very quickly, but we're essentially adding blips, markers, text labels, notifcations, and more to help inform the player on what they should be doing next.

```ts
function startJob(player: alt.Player) {
    Athena.player.emit.message(player, `Starting Job!`);

    // create the job instance
    const job = new Athena.systems.job.builder();

    const sideDoor = new alt.Vector3({ x: 144.0870361328125, y: -1480.9090576171875, z: 29.3570499420166 }).sub(
        0,
        0,
        1,
    );

    const vehicleSpot = new alt.Vector3({ x: 129.55674743652344, y: -1476.7857666015625, z: 29.141624450683594 }).sub(
        0,
        0,
        1,
    );

    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Go to the Side Door to get the Order',
        criteria: Athena.systems.job.objective.buildCriteria({ NO_VEHICLE: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: sideDoor,
        range: 2,
        marker: {
            type: 1,
            pos: sideDoor,
            color: new alt.RGBA(255, 255, 0, 100),
        },
        textLabel: {
            text: 'Pickup the Order',
            pos: sideDoor.add(0, 0, 2),
        },
        blip: {
            pos: sideDoor,
            scale: 1,
            sprite: 128,
            shortRange: true,
            text: 'Side Door',
            color: 5,
        },
        callbackOnStart(player: alt.Player) {
            Athena.player.emit.notification(player, `Go to the side door and pickup the order.`);
        },
        callbackOnFinish(player: alt.Player) {
            // We spawn a vehicle for the player when the first objective is completed
            job.addVehicle(player, 'sanchez', vehicleSpot, { x: 0, y: 0, z: 2.4707703590393066 });
        },
    });

    // obtain the vehicle
    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Obtain the Delivery Vehicle',
        criteria: Athena.systems.job.objective.buildCriteria({ IN_JOB_VEHICLE: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: vehicleSpot,
        range: 2,
        marker: {
            type: 1,
            pos: vehicleSpot,
            color: new alt.RGBA(255, 255, 0, 100),
        },
        textLabel: {
            text: 'Delivery Vehicle',
            pos: vehicleSpot.add(0, 0, 2),
        },
        blip: {
            pos: vehicleSpot,
            scale: 1,
            sprite: 128,
            shortRange: true,
            text: 'Delivery Vehicle',
            color: 5,
        },
        callbackOnStart(player: alt.Player) {
            Athena.player.emit.notification(player, `Obtain the delivery vehicle.`);
        },
    });

    // Add the player to the job instance
    job.addPlayer(player);
}
```

Head in-game and try the objectives out.

The job will finish after hopping on the vehicle, but we're making progress now.

![](https://i.imgur.com/mRxBRiC.png)

![](https://i.imgur.com/RLBuFNC.png)


## Getting a Delivery Point

Now that we have created the starting foundation of our job.

We should probably get a few houses to delivery to.

I've got a few points to make this easier.

```ts
const points = [
    new alt.Vector3({ x: -32.53246307373047, y: -1446.264404296875, z: 31.888883590698242 }).sub(0, 0, 1),
    new alt.Vector3({ x: -46.243324279785156, y: -1445.915771484375, z: 32.42959213256836 }).sub(0, 0, 1),
    new alt.Vector3({ x: -64.49146270751953, y: -1449.623291015625, z: 32.50906753540039 }).sub(0, 0, 1),
    new alt.Vector3({ x: -113.77715301513672, y: -1467.8834228515625, z: 33.822540283203125 }).sub(0, 0, 1),
    new alt.Vector3({ x: -107.7528076171875, y: -1473.4993896484375, z: 33.82271957397461 }).sub(0, 0, 1),
];
```

Place the points at the top of the file.

Now we need to pick one at random from the array.

Luckily we have a very easy way to do this.

```ts
const deliveryPoint = Athena.utility.random.getRandomElement<alt.Vector3>(points);
Athena.systems.job.objective.createAndAdd(job, {
    description: 'Deliver to the Customer',
    criteria: Athena.systems.job.objective.buildCriteria({ IN_JOB_VEHICLE: false }),
    type: Athena.systems.job.objective.getType('WAYPOINT'),
    pos: deliveryPoint,
    range: 2,
    marker: {
        type: 1,
        pos: deliveryPoint,
        color: new alt.RGBA(255, 255, 0, 100),
    },
    textLabel: {
        text: 'Customer',
        pos: deliveryPoint.add(0, 0, 2),
    },
    blip: {
        pos: deliveryPoint,
        scale: 1,
        sprite: 128,
        shortRange: true,
        text: 'Customer',
        color: 5,
    },
    callbackOnStart(player: alt.Player) {
        Athena.player.emit.notification(player, `Delivery the food to the customer.`);
    },
});
```

Head in-game and give it a try.

Your vehicle will despawn after completing the delivery.

![](https://i.imgur.com/5HNtwsB.png)

## Finishing Up

After delivering to the customer we should definitely return our delivery vehicle.

Let's append one of the other objectives from the beginning to return the vehicle.

Let's also add a reward after returning the vehicle.

We'll give them a random amount of money.

```ts
Athena.systems.job.objective.createAndAdd(job, {
    description: 'Return the Vehicle',
    criteria: Athena.systems.job.objective.buildCriteria({ IN_JOB_VEHICLE: true }),
    type: Athena.systems.job.objective.getType('WAYPOINT'),
    pos: vehicleSpot,
    range: 2,
    marker: {
        type: 1,
        pos: vehicleSpot,
        color: new alt.RGBA(255, 255, 0, 100),
    },
    textLabel: {
        text: 'Return the Vehicle',
        pos: vehicleSpot.add(0, 0, 2),
    },
    blip: {
        pos: vehicleSpot,
        scale: 1,
        sprite: 128,
        shortRange: true,
        text: 'Return the Vehicle',
        color: 5,
    },
    callbackOnStart(player: alt.Player) {
        Athena.player.emit.notification(player, `Return the delivery vehicle.`);
    },
    async callbackOnFinish(player: alt.Player) {
        const reward = Athena.utility.random.randomNumberBetween(50, 200);
        await Athena.player.currency.add(player, 'cash', reward);
        Athena.player.emit.notification(player, `+ $${reward} Earned`);
    },
});
```

![](https://i.imgur.com/gfqEMrD.png)

![](https://i.imgur.com/R6Y4oEf.png)

## Full Code

::: details
```ts
import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'jerb';

const jobStart = new alt.Vector3({ x: 132.4439239501953, y: -1462.4208984375, z: 29.357059478759766 }).sub(0, 0, 1);
const points = [
    new alt.Vector3({ x: -32.53246307373047, y: -1446.264404296875, z: 31.888883590698242 }).sub(0, 0, 1),
    new alt.Vector3({ x: -46.243324279785156, y: -1445.915771484375, z: 32.42959213256836 }).sub(0, 0, 1),
    new alt.Vector3({ x: -64.49146270751953, y: -1449.623291015625, z: 32.50906753540039 }).sub(0, 0, 1),
    new alt.Vector3({ x: -113.77715301513672, y: -1467.8834228515625, z: 33.822540283203125 }).sub(0, 0, 1),
    new alt.Vector3({ x: -107.7528076171875, y: -1473.4993896484375, z: 33.82271957397461 }).sub(0, 0, 1),
];

function startJob(player: alt.Player) {
    Athena.player.emit.message(player, `Starting Job!`);

    // create the job instance
    const job = new Athena.systems.job.builder();

    // first objective created
    const sideDoor = new alt.Vector3({ x: 144.0870361328125, y: -1480.9090576171875, z: 29.3570499420166 }).sub(
        0,
        0,
        1,
    );

    const vehicleSpot = new alt.Vector3({ x: 129.55674743652344, y: -1476.7857666015625, z: 29.141624450683594 }).sub(
        0,
        0,
        1,
    );

    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Go to the Side Door to get the Order',
        criteria: Athena.systems.job.objective.buildCriteria({ NO_VEHICLE: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: sideDoor,
        range: 2,
        marker: {
            type: 1,
            pos: sideDoor,
            color: new alt.RGBA(255, 255, 0, 100),
        },
        textLabel: {
            text: 'Pickup the Order',
            pos: sideDoor.add(0, 0, 2),
        },
        blip: {
            pos: sideDoor,
            scale: 1,
            sprite: 128,
            shortRange: true,
            text: 'Side Door',
            color: 5,
        },
        callbackOnStart(player: alt.Player) {
            Athena.player.emit.notification(player, `Go to the side door and pickup the order.`);
        },
        callbackOnFinish(player: alt.Player) {
            job.addVehicle(player, 'sanchez', vehicleSpot, { x: 0, y: 0, z: 2.4707703590393066 });
        },
    });

    // obtain the vehicle
    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Obtain the Delivery Vehicle',
        criteria: Athena.systems.job.objective.buildCriteria({ IN_JOB_VEHICLE: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: vehicleSpot,
        range: 2,
        marker: {
            type: 1,
            pos: vehicleSpot,
            color: new alt.RGBA(255, 255, 0, 100),
        },
        textLabel: {
            text: 'Delivery Vehicle',
            pos: vehicleSpot.add(0, 0, 2),
        },
        blip: {
            pos: vehicleSpot,
            scale: 1,
            sprite: 128,
            shortRange: true,
            text: 'Delivery Vehicle',
            color: 5,
        },
        callbackOnStart(player: alt.Player) {
            Athena.player.emit.notification(player, `Obtain the delivery vehicle.`);
        },
    });

    const deliveryPoint = Athena.utility.random.getRandomElement<alt.Vector3>(points);
    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Deliver to the Point',
        criteria: Athena.systems.job.objective.buildCriteria({ IN_JOB_VEHICLE: false }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: deliveryPoint,
        range: 2,
        marker: {
            type: 1,
            pos: deliveryPoint,
            color: new alt.RGBA(255, 255, 0, 100),
        },
        textLabel: {
            text: 'Customer',
            pos: deliveryPoint.add(0, 0, 2),
        },
        blip: {
            pos: deliveryPoint,
            scale: 1,
            sprite: 128,
            shortRange: true,
            text: 'Customer',
            color: 5,
        },
        callbackOnStart(player: alt.Player) {
            Athena.player.emit.notification(player, `Delivery the food to the customer.`);
        },
    });

    Athena.systems.job.objective.createAndAdd(job, {
        description: 'Return the Vehicle',
        criteria: Athena.systems.job.objective.buildCriteria({ JOB_VEHICLE_NEARBY: true }),
        type: Athena.systems.job.objective.getType('WAYPOINT'),
        pos: vehicleSpot,
        range: 2,
        marker: {
            type: 1,
            pos: vehicleSpot,
            color: new alt.RGBA(255, 255, 0, 100),
        },
        textLabel: {
            text: 'Return the Vehicle',
            pos: vehicleSpot.add(0, 0, 2),
        },
        blip: {
            pos: vehicleSpot,
            scale: 1,
            sprite: 128,
            shortRange: true,
            text: 'Return the Vehicle',
            color: 5,
        },
        callbackOnStart(player: alt.Player) {
            Athena.player.emit.notification(player, `Return the delivery vehicle.`);
        },
        async callbackOnFinish(player: alt.Player) {
            const reward = Athena.utility.random.randomNumberBetween(50, 200);
            await Athena.player.currency.add(player, 'cash', reward);
            Athena.player.emit.notification(player, `+ $${reward} Earned`);
        },
    });

    // Add the player to the job instance
    job.addPlayer(player);
}

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    Athena.controllers.blip.append({
        pos: jobStart,
        scale: 1,
        sprite: 58,
        shortRange: true,
        text: 'Food Delivery',
        color: 5,
    });

    Athena.controllers.marker.append({ type: 1, pos: jobStart, color: new alt.RGBA(0, 255, 0, 100) });
    Athena.controllers.textLabel.append({ text: 'Food Delivery', pos: jobStart.add(0, 0, 2) });
    Athena.controllers.interaction.append({
        position: jobStart,
        range: 3,
        height: 2,
        callback: startJob,
        isPlayerOnly: true,
    });
});
```
:::