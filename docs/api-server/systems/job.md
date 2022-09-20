---
title: '.job'
order: -99
---

# {{ $frontmatter.title }}

Jobs are described as one-off systems that are used for a single player or multiple (if you're a talented programmer) to do certain things in the world based on a point to point system.

There are a handful of plugin examples of jobs.

## Creating a New Job

Creates a new job instance.

```ts
const job = new Athena.systems.job.instance();
```

## job.addVehicle

Creates a job vehicle.

Arguments

* player to add
* vehicle model name
* position to place the vehicle
* rotation of the vehicle
* color1 of the vehicle -> alt.RGBA
* color2 of the vehicle -> alt.RGBA

```ts
job.addVehicle(somePlayer, 'infernus', new alt.Vector3(0, 0, 0), new alt.Vector3(0, 0, 0), new alt.RGBA(0, 0, 0, 0), new alt.RGBA(0, 0, 0, 0));
```

## job.loadObjectives

Loading objectives means the job will take a series of `Objective` objects.

It's best to load all objectives at once, and the objectives are completed in the order in which you push them into an array.

```ts
const objectives: Array<Objective> = [];

// This can be pushed multiple times.
objectives.push({
    description: 'Enter the Vehicle',
    type: JobEnums.ObjectiveType.WAYPOINT,
    // The position of the objective...
    pos: new alt.Vector3(0, 0, 0),
    // How close the user needs to be to this objective
    range: 4,
    // This is a slightly transparent marker to show in game.
    marker: {
        pos: {
            x: 0,
            y: 0,
            z: 0 - 1, // !!! -> Always subtract 1 from player position.
        },
        type: MARKER_TYPE.CYLINDER,
        color: new alt.RGBA(0, 255, 0, 100),
    },
    // This is a 3D world position with some text above it.
    textLabel: {
        data: 'Get in Vehicle',
        pos: {
            x: 0,
            y: 0,
            z: 0 + 1.5, // !!! -> Add 1.5 if player position was used.
        },
    },
    // This is the criteria to complete the job.
    criteria:
        JobEnums.ObjectiveCriteria.FAIL_ON_JOB_VEHICLE_DESTROY |
        JobEnums.ObjectiveCriteria.IN_JOB_VEHICLE |
        JobEnums.ObjectiveCriteria.NO_DYING,
    callbackOnStart: (player: alt.Player) => {
        // This is called when a player is starting an objective.
        Athena.player.emit.message(player, '/quitjob - To stop this job.');
        Athena.player.emit.notification(player, `Get in the Mule`);
    },
    callbackOnFinish: (player: alt.Player) => {
        // Adds 100 - 200 currency when this one objective is completed.
        // Usually you want to add this callback to the last objective.
        const earned = Math.floor(Math.random() * 100) + 100;
        Athena.player.currency.add(player, CurrencyTypes.CASH, earned);
        Athena.player.emit.notification(player, `~g~$${earned}`);
    },
})
```

Once all objectives are added. Simply add the objectives to the job.

```ts
job.loadObjectives(objectives);
```

## job.addPlayer

This should be the last action you perform as it starts the job instance.

```ts
job.addPlayer(player);
```  

## getPlayerJob

Returns the current job instance of a player.

```ts
const job = Athena.systems.job.getPlayerJob(somePlayer);
```

## Extending Job Objectives

Job objectives are hard-coded but you can add additional checks / criteria depending on what you need.

Type -> Larger working functionality ran before the criteria check. ie. Stand at this point and jump five times.

Criteria -> Smaller criteria necessary to complete a job.

### Appending Data to an Objective

It is recommended to append some custom data to an objective to help identify the objective in a callback.

_Example Objective_

```ts
{
    ...
    data: {
        criteria: 'is-aiming'
    }
}
```

### addJobCheck

When adding criteria or type's for objectives. Keep in mind that there are predefined criterias and types that are already in place.

You must double the last value if you are appending to the criteria.

```ts
Athena.systems.job.addJobCheck('criteria', (player: alt.Player, objective: Objective) => {
    // Always return true if the criteria of the objective we are looking for does not match.
    if (objective.data.criteria !== 'is-aiming') {
        return true;
    }

    // Now perform the actual custom criteria check.
    // This one simply checks if the player is currently aiming a weapon.
    return player.isAiming;
});
```