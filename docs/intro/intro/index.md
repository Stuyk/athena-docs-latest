---
title: 'Getting Started'
order: -99
---

# {{ $frontmatter.title }}

## Full Installation

It is recommended to do a full install but quick instructions are provided below.

[Installing on Windows](../install/installing-on-windows.md)

[Installing on Linux](../install/installing-on-linux.md)

## Fast Installation

If you wish to use Athena but not make any changes to the core (unlikely you won't make changes) here are some simple instructions for the every day developer who just wants to test this with the alt:V Client quickly.

### Windows

* [Install MongoDB Server](https://www.mongodb.com/try/download/community)
* [Install Git](https://git-scm.com/downloads)
* [NodeJS 17+](https://nodejs.org/en/download/)
* [alt:V Client](https://altv.mp/)

### Commands

Quick start for getting Athena running. Make sure to install the above programs before doing anything below.

Run all of these in Command Prompt, Powershell, CLI, etc.

```
git clone https://github.com/Stuyk/altv-athena
```

```
cd altv-athena
```

```
npm install
```

```
npm run update
```

```ts
npm run windows
```

* Launch the alt:V Client
* Join with`0.0.0.0:7788` in Direct Connect
  * If the above does not work, try `127.0.0.1:7788`
* That's it.