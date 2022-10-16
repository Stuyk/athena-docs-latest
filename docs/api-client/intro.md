---
title: 'API Client'
order: -99
---

# {{ $frontmatter.title }}

Importing the AthenaClient API on client-side is simple.

```ts
import { AthenaClient } from '@AthenaClient/api/athena';
```

Alternatively if you are on an older version:

```ts
import { AthenaClient } from '../../client/api/athena';
```

The `../` is based on how far away the file is from your main files. Adjust accordingly.