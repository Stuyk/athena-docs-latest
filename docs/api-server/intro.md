---
title: 'API Server'
order: -99
---

# {{ $frontmatter.title }}

Importing the AthenaClient API on client-side is simple.

```ts
import { Athena } from '@AthenaServer/api/athena';
```

Alternatively if you are on an older version:

```ts
import { Athena } from '../../server/api/athena';
```

The `../` is based on how far away the file is from your main files. Adjust accordingly.