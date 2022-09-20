---
title: 'How do I make a command?'
order: 0
---

# {{ $frontmatter.title }}

Create a new plugin with the following folder structure.

```
src/core/plugins/example-command/
└─server
    │- index.ts
    │
    └─src
        |- commands.ts
```

## Example Folder Structure

![](https://i.imgur.com/9WkQXei.png)

## example-command/server/src/commands.ts

Inside of this file paste the following content.

```ts
import * as alt from 'alt-server';
import { Athena } from '../../../../server/api/athena';
import { command } from '../../../../server/decorators/commands';
import { PERMISSIONS } from '../../../../shared/flags/permissionFlags';

export class Commands {
    static init() {
        alt.log(`Loaded Commands from Example Plugin`);
    }

    @command('mycommand', '/mycommand - This is a description', PERMISSIONS.NONE)
    private static handleMyCommand(player: alt.Player, ...args: string[]): void {
        if (!player || !player.valid) {
            return;
        }

        console.log(`Sending message back to player.`);
        Athena.player.emit.message(player, `You said: ${args.join(' ')}`);
    }
}
```

## example-command/server/index.ts

Inside of this file paste the following content.

```ts
import * as alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { Commands } from './src/commands';

const PLUGIN_NAME = 'Example Command';

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    Commands.init();
    alt.log(`~lg~CORE ==> ${PLUGIN_NAME} was Loaded`);
});
```

## All Done!

Now build more commands, and do whatever you want with it.