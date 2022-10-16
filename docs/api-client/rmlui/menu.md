---
title: '.menu'
order: -99
---

# {{ $frontmatter.title }}

This menu can be described as a menu that can be rendered in the top-right. It's similar to NativeUI but far less complex.

The menu is fully controlled by the `ARROW KEYS`, and the `ENTER` key.

![](https://i.imgur.com/LWMwBjc.png)

## Usage

* Menu Interface (See Below)

```ts
AthenaClient.rmlui.menu.create(menuInterface): void;
```

_Note: Options are limited to 12_

## Example

```ts
await AthenaClient.rmlui.menu.create({
    header: {
        title: 'My Menu',
        color: new alt.RGBA(0, 175, 250, 255),
    },
    options: [
        {
            type: 'Toggle',
            title: 'Toggleable',
            description: 'Toggles something...',
            value: false,
            callback: (newValue: boolean) => {
                console.log(newValue); // true
            },
        },
        {
            type: 'Range',
            title: 'Range Index',
            description: 'Increments +/- 1',
            value: 0,
            min: 0,
            max: 10,
            increment: 1,
            callback: (newValue: number) => {
                console.log(newValue); // 1
            },
        },
        {
            type: 'Selection',
            title: 'Array Based Option',
            description: 'Sends Results by Index Increment',
            options: ['zero', 'one', 'two'],
            value: 0,
            callback: (newValue: string) => {
                console.log(newValue); // zero
            },
        },
        {
            type: 'Invoke',
            title: 'Invoker',
            description: 'Triggers something...',
            callback: () => {
                console.log('hi!');
            },
        },
        {
            type: 'Invoke',
            title: 'Close',
            description: 'Close the Menu',
            callback: AthenaClient.rmlui.menu.close,
        },
    ],
});
```