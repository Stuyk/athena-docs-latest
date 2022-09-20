---
title: '.atms'
order: -99
---

# {{ $frontmatter.title }}

Simply returns a list of ATM machines in the world.

```ts
for(let atm of AthenaClient.data.atms) {
    console.log(`ATM Position: ${JSON.stringify(atm, null, '\t')}`);
}
```