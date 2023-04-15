---
title: 'How to Read the API'
outline: [1,5]
order: -99999
comment: false
---

# How to Read the API

Reading API pages can be a bit overwhelming but I promise there is a method to the madness.

Those of you who are unfamiliar with API documentation will **definitely need to read this**.

## Navigation

In the left-hand sidebar you will see API pathways.

![](https://i.imgur.com/WJS4vXa.png)

Inside you will find a _similar_ folder structure to the default intellisense when you use any of the standard imports while programming.

![](https://i.imgur.com/lmqhTIh.png)

## Digestion

When you are reading a page it's going to look like a bunch of random words if you've never seen an API page before.

In the example below we will be using the following pathway in the server API: `Athena.controllers.blip`

### Right Sidebar

On the right-hand side you will see a sidebar of all the available functions. They are listed under the header called `Functions`, if there is no header called `Functions` then it is not a function.

![](https://i.imgur.com/HoF4yxw.png)

Knowing that the API pathway is `Athena.controllers.blip`, we can append a function name to the end of our code.

```ts
import * as Athena from '@AthenaServer/api';

// append is the function name
Athena.controllers.blip.append();
```

Now how do we determine what we should pass inside of the parenthesis?

### Parameters

These are the values that need to be passed inside of the function, they should be passed in the same order that they are listed in the table.

In the case of `Athena.controllers.blip.append` we have exactly `1` parameter.

![](https://i.imgur.com/lqfC9sA.png)

### Parameter Types

If the `type` has a clickable link you can read more about the `Object` that needs to be passed.

If you are unfamiliar with objects, they look like this:

```ts
{
    color: 5,
    pos: { x: 0, y: 0, z: 0},
    scale: 0.2,
    shortRange: true,
    text: 'My Blip!',
    sprite: 80
}
```

Notice how the object defined above, matches the `Type` definition of the `Blip` type.

![](https://i.imgur.com/di45whh.png)

The individual properties for a `type` have individual definitions as well. Which will help you understand what is supposed to be passed to a specific `property` inside of an `object`.

ie. If we look at the property `scale` it clearly says it needs a `number` type.

![](https://i.imgur.com/8HT8amw.png)

## That's About It!

There isn't much else to say about this other than trying a few functions on your own in VSCode, and utilizing the intellisense window that pops up as you are typing.

Hope this helps someone out there understand API documentation a bit better.