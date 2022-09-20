---
title: 'ATM'
order: -99
---

# {{ $frontmatter.title }}

### Abstract

The ATM plugin is a basic banking plugin that enables all ATMs in the map to have a banking service attached to them. This means you can deposit, and withdraw cash from an ATM as well as perform general transfers.

📁 `src/core/plugins/core-atm/`

* Generate Bank Account Numbers
* Withdraw Cash
* Deposit Cash
* Transfer Bank Balance
* An ATM Interface

![Standard ATM Interface](https://i.imgur.com/D11jNNW.png)

### Configuration

General configuration information can be found in the following directory.

📁`src/core/plugins/core-atm/server/src/config.ts`

* BANK\_ACCOUNT\_START\_NUMBER
  * The number to start all bank accounts from.
  * _**Modifying this after going into production could break a lot of stuff.**_

### Usage

Visit any ATM in-game and press `E` to bring up the ATM interface.

### Commands

No Commands Available
