---
title: '.deepCloneObject'
order: 0
---

# {{ $frontmatter.title }}

### Why do we need this function?

This function is just a simple way to create a new clone of an object by abusing `JSON.parse` and `JSON.stringify`. It's fast, and simply and we don't have to iterate through an entire object to get a cloned object.

### What does it do?

It takes an existing object such as...

```typescript
{
    name: 'stuyk',
    myMethod: () => {
        console.log('hello world');
    }
}
```

Allows us to remove the functions to make it **client-side safe** and then pass the data to a client. It also ensures that we de-reference any of the original data just in-case we modify it server.

```typescript
{
    name: 'stuyk'
}
```

As you can see the method was removed.

### How does it work?

```typescript
const myObject = {
    name: 'stuyk',
    myMethod: () => {
        console.log('hello world');
    }
}

const justTheNameNow = Athena.utility.deepCloneObject(myObject);
console.log(justTheNameNow); // See code block above this one for output.
```
