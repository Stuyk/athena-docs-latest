# alt:V Athena Documentation

Official documentation repository that utilizes vitepress, and used as the home page for `https://athenaframework.com/`.

## Viewing Docs Locally

Clone or fork this repository and then clone it.

Then navigate inside of it and run the following commands.

```
npm i
```

```
npm run dev
```

Open the documentation on [http://localhost:5173](http://localhost:5173).

## Contributions

Contributions to the documentation should be made in the form of pull requests.

Make a pull request with the documentation you want to add.

Ensure that any page that is changed has the following at the top:

```md
---
title: 'Page Title'
order: 0
---

# {{ $frontmatter.title }}

Content goes here...
```