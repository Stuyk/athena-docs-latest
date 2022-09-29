---
title: 'How do i keep my repository updated?'
order: 0
---

# {{ $frontmatter.title }}

Actually to pull the latest changes your repository, you'll need to have Stuyks Upstream (Athena) as a remote in your repository.

The process of setting git remotes is explained in the installation section of the documentation.

To pull the latest changes to your current branch you'd have to write

```ts
git pull upstream <branch-name>
```

An valid example would look like this:
```ts
git pull upstream master
git pull upstream 3.9.0
``` 

You can also fetch all current remote branches by just typing
```ts
git fetch upstream --all
```

But you also need to be aware of the merge markers. If you're using Visual Studio Code it will show you the merge markers.

There you have an choice to accept incoming changes or your own changes instead of the incoming changes.
