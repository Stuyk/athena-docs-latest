---
title: 'Staying up to date'
order: -94
---

# {{ $frontmatter.title }}

## Why Update?

Well in most cases Athena is constantly moving forward with security patches, algorithm improvements, and new features. There is often a dedicated development branch that Stuyk and the community are constantly pushing changes into.

If you do not update you run the risk of your game mode becoming out-of-date and unmanageable in the foreseeable future.&#x20;

Want evidence of this? As the author of Athena I've witnessed my old game mode become completely unplayable after 6 months time of not updating. Too many features have become out-of-date and API changes have made it near impossible to update.

So... what does the author recommend?

> Stay up-to-date or risk the game mode breaking. Learn these tools you will not regret it.

### How do I Update?

When you cloned your private fork of the Athena Framework you should have ran this in a terminal:

```
git remote add upstream https://github.com/Stuyk/altv-athena
git remote set-url --push upstream DISABLE
```

Instead of disabling the push upstream, you can also set this to your origin repository.

An example of how to change the remote push URL is here:
```ts
git remote set-url --push origin your_repository_url
```

After running this in a terminal you are now hooked up to the main repository to pull updates from.

You will first need to commit any changes that you have made on your private fork.

```
git add .
git commit -m "I made some changes, this is what I did here"
git push origin master
```

_If you run into errors will doing the above, google it. Seriously._

### Fetching Upstream

Pulling from upstream means that you are going to take the changes from the main Athena repository and smash them into your current repository.

#### Merging from Master

```
git fetch upstream
git pull upstream master
```

#### Merging from a Development Branch

```
git fetch upstream
git pull upstream branch_version_goes_here
```

### Now I Have Merge Conflicts?

Yes, you should normally have merge conflicts. This is the part where you absolutely must learn the tools that you are using. Merge conflicts means there is a difference between your current repository and the other repository which you pulled code from.

This means you will be fixing merge conflicts by using VSCode to help identify and fix them. You will need to figure out where all the merge conflicts are and resolve them based on what you need.

tl;dr - Watch this video below on how to manage merge conflicts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QmKdodJU-js" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### After Resolving Merge Conflicts?

You should make a new commit and push the changes up to your private repository.

That's it.
