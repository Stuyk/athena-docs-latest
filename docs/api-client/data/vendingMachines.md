---
title: '.vendingMachines'
order: -99
---

# {{ $frontmatter.title }}

Simply returns a list of Vending machines in the world.

```ts
for(let machine of AthenaClient.data.vendingMachines) {
    console.log(`VendingMachine Position: ${JSON.stringify(machine, null, '\t')}`);
}
```