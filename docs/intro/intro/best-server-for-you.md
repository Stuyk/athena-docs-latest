---
title: 'Best Server for You'
order: -95
---

# {{ $frontmatter.title }}

There is **no best server option** if you cannot do basic system administration. You also do not need a server host for development.

::: warning

Avoid hosts that do not give you full control of your server. Server hosts like Zap.

:::

## Server Deployment and Infrastructure

When you are working with the Athena Framework you will be creating a private fork. A private fork is a copy of the Athena repository that contains your changes. It will only contain your changes if you know how utilize `git`. Which is a tool used for pushing changes to repositories.

As I've stated dozens of times. If you are not familiar with these tools you will have a hard time working with them. Athena Framework will move forward without you and if you do not learn to use these tools your server will struggle with security updates.

### Do I need to buy a server?

In most cases NO. You do not need to buy a server. Your local machine will work just fine until you decide you want to add more users to your server.&#x20;

When you are launching for a full community you should look into these items:

* A CDN to host your server resource downloads such as mods.
* A Dedicated Server with Unmetered Up / Down
* At least 4 cores.
* At least 8 GB of RAM.
* At least 256GB of Storage
* A dedicated CPU
* DDoS Protection
* Ability to access a server with full CLI access. Unmanaged.

Want a recommendation? It's not any of the server providers that charge you per-slot for hosting.

### Developing with Athena

You should be using the Athena Framework in a local windows environment for development. If you are knowledgeable you can figure out other ways to go about this, but the current toolsets and fastest way to develop with Athena has to be done in a windows environment.

tl;dr - Push changes to your repository on a windows platform with `git`.

### Deploying a Server with Athena

When you have committed changes to your private repository. You should pull that private repository into any VPS or Dedicated Server that can support MongoDB. It can be a Windows Server, or a Linux Server. If you are not familiar with a cli put it on a windows machine and pull it into your Windows Server.

tl;dr - Pull changes into your dedicated server / vps with `git`.











