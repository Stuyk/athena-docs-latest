---
title: 'Purchaseable Vehicles'
order: 0
---

# {{ $frontmatter.title }}

If you have a faction already created, you have to edit the database to add new vehicles.&#x20;

Here's how to do that.

## Step 1.

Open MongoDB Compass

Connect to the Database

Go to the Factions Collection

![](https://i.imgur.com/0fSpS7e.png)

## Step 2.

Select a Faction

Expand Settings

![](https://i.imgur.com/ySQPKl9.png)

## Step 3.

Create an Array in Settings

Click the `+` to add a new field. It's next to settings.



![](https://i.imgur.com/4bC2cDR.png)

## Step 4.

Name the new field key `vehicles`.

Change the type to Array.

![](https://i.imgur.com/aeIe3RH.png)

## Step 5.

Append a new object to the vehicles array.

It should contain a `model` and a `price`.

Add as many of these as you want.

![](https://i.imgur.com/3I5cr1n.png)

::: tip

Remember to hit `update` and restart your server when done.

:::