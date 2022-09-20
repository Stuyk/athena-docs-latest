---
title: 'Using VSCode'
order: 0
---

# {{ $frontmatter.title }}

## Opening a Folder

The biggest improvement you can make is opening the entire project folder into VSCode. This will allow you to easily weave through folders, files, etc. and pretty much use VSCode as an entire workspace for development.

How do you do it?

1. Open VSCode
2. Go to File
3. Click on Open Folder
4. Navigate to your privately cloned Athena Framework folder
5. Open!

Want to know if you did it right? Your Athena folder should look like this:

![A Workspace Folder of Athena in VSCode](https://i.imgur.com/c65E1lz.png)

## Pushing Changes

If you modify code you can use VSCode to push your changes to your private repository. This will only work if you follow the full installation tutorial with a private fork.

You can `stage changes` by click the `+` sign.

---

### Visual Guide

Follow the image below.

![](https://i.imgur.com/cNf74iX.png)

Once changes are staged, you can write about it and push it up to your private repository by hitting the checkmark or type the command.

![](https://i.imgur.com/RJZVMx1.png)

---

### CLI Command

You write these into a terminal.

```
git add ./src/somefileOrFolder
```

```
git commit -m "i changed some stuff" && git push origin master
```