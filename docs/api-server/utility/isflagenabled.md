---
title: '.isFlagEnabled'
order: 0
---

# {{ $frontmatter.title }}

A bitwise flag allows us to lower the footprint in-memory of complex logic by simply making it a single enum with lots of options we can combine together.

There a tons of examples out there on the subject but let's try to simplify it by giving you GTA:V based logic to understand what is happening.

Let's take a look at the Animation Flags for example.

### Combining Flags

```typescript
export enum ANIMATION_FLAGS {
    NORMAL = 0,
    REPEAT = 1,
    STOP_LAST_FRAME = 2,
    UPPERBODY_ONLY = 16,
    ENABLE_PLAYER_CONTROL = 32,
}
```

When you want to create an animation with a specific set of rules you need to understand how these flags work. The above is a 'bitwise' flag type of enum.

Let's say we want an animation to `REPEAT` but we also want it to be the `UPPERBODY_ONLY`. This means that we need to combine the flags to get our results.

There are two ways we can do this.

#### Adding Them Together

```typescript
const upperAndRepeated = 1 + 16;
```

#### Using Bitwise Operators to Combine

```typescript
const flags = ANIMATION_FLAGS.REPEAT | ANIMATION_FLAGS.UPPERBODY_ONLY;
```

_I'm sure you can imagine which one is the most commonly used._

### Checking Flags

Let's do another example using the default Admin permissions.

```typescript
export enum PERMISSIONS {
    NONE = 0,
    VIP = 1,
    MODERATOR = 2,
    ADMIN = 4,
    // Do Not Exceed 33 Entries
}
```

Let's say we want a function to only be allowed for admins and we're passing a permission level from the client to check that flag.

```typescript
const permissionLevel = 2;

// Let's check if the permissionLevel is an admin.
if (!Athena.utility.isFlagEnabled(permissionLevel, PERMISSIONS.ADMIN)) {
    console.log('Not high enough rank');
} else {
    console.log('High enough rank');
}
```

If you want to check for multiple levels, we can combine ranks again.

```typescript
const whatToCheck = PERMISSIONS.ADMIN | PERMISSIONS.MODERATOR;
if (!Athena.utility.isFlagEnabled(whatToCheck, PERMISSIONS.ADMIN)) {
    console.log('Not admin, or moderator');
} else {
    console.log('admin or mod!');
}
```
