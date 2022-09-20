---
title: '.hash'
order: 0
---

# {{ $frontmatter.title }}

Contains hashing related functionality such as password hashing, and two iterations of a sha256.

### Athena.utility.hash.sha256

A simple `sha256` function that takes data in a string format and returns a `sha256`. It will be the same hash as long as the data originally used in the function is the same data. **Do not use this for passwords**.

```typescript
const result = Athena.utility.hash.sha256('hello world');
```

### Athena.utility.hash.sha256Random

Same as above, but the hash will always be random but not unique. Good for quick temporary random hash strings.

```typescript
const result = Athena.utility.hash.sha256Random('hello world');
```

### Athena.utility.hash.hashPassword

Used to take a plain text password and hash it with pbkdf2 and a salt. **Safe to password storage**.

```typescript
const hashedPassword = Athena.utility.hash.hashPassword('mypasswordhere');
```

### Athena.utility.hash.testPassword

A password can be compared by getting the original hash and comparing it against the plain-text provided from the user.

```typescript
const originalPassword = 'mypasswordhere';
const isValid = Athena.utility.hash.testPassword(originalPassword, hashedPassword);
```
