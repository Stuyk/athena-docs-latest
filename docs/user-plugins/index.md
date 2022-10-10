---
title: 'Submitting User Plugins'
order: -99
---

# {{ $frontmatter.title }}

User plugins are submitted to the main documentation repository.

## How to Submit a Plugin?

### Fork the Repository

Visit the following repository and fork it.

[https://github.com/Stuyk/athena-docs-vitepress/](https://github.com/Stuyk/athena-docs-vitepress/)


If you have an existing fork, you need to catch up with the main repository, or simply re-fork it by deleting your fork and making another.


### Modify the Plugin List

After forking the repository, modify your version of the forked repository and add a new folder under `docs/plugins`.

This folder should be the name of your `GitHub` public profile.

Make sure to create an `index.js` file under the new folder as well.

ie. `plugins/stuyk/index.js`

Modify your new file, and follow the format below:

```js
module.exports = [
    { 
        title: 'Template Plugin', 
        repo: 'altv-athena-plugin-template', 
        branch: 'main' 
    }
]
```

### Create a Pull Request

Visit the following link: [https://github.com/Stuyk/athena-docs-vitepress/pulls](https://github.com/Stuyk/athena-docs-vitepress/pulls)

Click on `New Pull Request` on the right-hand side.

Click `compare across forks`.

![](https://i.imgur.com/kA4J9uN.png)

Find the repository you modified, and select it for the `head repository`.

![](https://i.imgur.com/WBcmfLg.png)

A big green button will say `Create Pull Request`. Click it.

Submit the PR.