---
title: '.chat'
order: 0
---

# {{ $frontmatter.title }}

## addCommand

Creates an executable command that the player calls from their chat box.

```ts
// Useful for making a message
function someCommand(player: alt.Player, ...args: string[]) {
    console.log(`Said: ${args.join()}`);
}

Athena.controllers.chat.addCommand('dosomething', '/dosomething - write something after', PERMISSIONS.NONE, someCommand);

// Handles a lot of arguments, there is no limitations.
function someOtherCommand(player: alt.Player, word1: string, word2: string, word3: string, ...args: string[]) {
    console.log(`Said: ${word1 + word2 + word3 + args.join()}`);
}

Athena.controllers.chat.addCommand('dosomethingelse', '/dosomethingelse', PERMISSIONS.NONE, someOtherCommand);
```

A command can have a lot of additional arguments.

## addCharacterCommand

Creates an executable command that only certain characters can execute.

_Effectively the same as above; just more refined permissions._

```ts
// Useful for making a message
function someCommand(player: alt.Player, ...args: string[]) {
    console.log(`Said: ${args.join()}`);
}

Athena.controllers.chat.addCommand('dosomething', '/dosomething - write something after', CHARACTER_PERMISSIONS.NONE, someCommand);

// Handles a lot of arguments, there is no limitations.
function someOtherCommand(player: alt.Player, word1: string, word2: string, word3: string, ...args: string[]) {
    console.log(`Said: ${word1 + word2 + word3 + args.join()}`);
}

Athena.controllers.chat.addCommand('dosomethingelse', '/dosomethingelse', CHARACTER_PERMISSIONS.NONE, someOtherCommand);
```

A command can have a lot of additional arguments.


## addAliases

Creates an executable command that only certain characters can execute.

_Effectively the same as above; just more refined permissions._

```ts

// Lets players uses '/dosomething2' or '/dosomething3' to execute the original command 'dosomething'
Athena.controllers.chat.addAliases('dosomething', ['dosomething2', 'dosomething3']);

```


## getDescription

Returns the description assigned to a command.

```ts
const result = Athena.controllers.chat.getDescription('dosomething');
```

## populateCommands

Used to refresh a player's command list.

```ts
// Gets the first player in the player list then refreshes their commands.
Athena.controllers.chat.populateCommands(alt.Player.all[0]);
```