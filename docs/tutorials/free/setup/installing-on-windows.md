---
title: 'Installing on Windows'
order: -97
---

# Installing on Windows

## Install on Windows 10+

Installing on windows is very straight forward but you will need to do a handful of things to ensure your environment is setup correctly. There is a lot to cover when installing Athena but these instructions cover nearly everything you need to do in a Windows Environment to get Athena running.

Read them carefully, read them twice, and double check your steps.

::: warning Hey Listen!

Athena is **not a plug and play game mode**. If you cannot script, program, or code and are not willing to learn it is not advised to use this game mode.

<img src="https://i.imgur.com/0dA965J.png" width="45" />

:::


## Rules for for Folder Paths

This is **REALLY IMPORTANT** so please read carefully.

::: warning File Path Restrictions

* No special characters in your folder path.
* **DO NOT** store Athena in a folder with brackets such as `[]{}()`.
* Plain English folder paths work best
  * If your Windows username contains non-english this may also be an issue.

:::

## Do I Need a Server?

**No.** Wait until you are comfortable using this framework on a locally before renting.

Do not use a VPS, do not use an external windows instance.

Learn to the tools first.


## Dependencies

You will need to install, setup, or create accounts for all of the links that are in this section.

* [Download and Install GIT](https://git-scm.com/downloads)
  * Used to pull down and push up code changes to your repositories.

* [Download and Install NodeJS 17-18](https://nodejs.org/en/download/current/)
  * A runtime that runs JavaScript code.
  * Using the incorrect version may cause issues.

* [Download and Install MongoDB Community Server](https://www.mongodb.com/try/download/community)
  * A NoSQL Database that is fast and easy.

* [Download and Install VSCode](https://code.visualstudio.com/download)
  * An integrated development environment for writing code and getting suggestions as you write code.

* [Create a GitHub Account](https://github.com/)
  * GitHub will let you privately store a modified version of the Athena codebase.

* [Download Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us\&gl=US)
  * Great for inputting commands like the ones you will see in this tutorial. Highly recommended to install and pin it to your desktop somewhere.

## Setup SSH Key

You need to add an SSH key to your GitHub account.

* [Setup SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
* [Add SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Here's a [video guide](https://www.youtube.com/watch?v=a-zX_qc2S-M) if you need further help.


## Ensure MongoDB Running as a Service

MongoDB does not have to be installed locally but if it is this is an important step. Open your Task Manager and ensure that you see MongoDB running as a service.

![You can check that MongoDB is running as a service by going into Task Manager > Services](https://i.imgur.com/mJ9FPxX.png)

## Port Forwarding

Port forwarding is **not required for local development**. If you need other players to join and test you must open port `7788`. If you are putting the server in production mode you must open `7788`.

Here's a `.bat` script that will open both ports in your **Windows Firewall.**

```
ECHO OFF

echo Opening 7788 for TCP
netsh advfirewall firewall add rule name="alt:V-7788-IN-TCP" dir=in action=allow protocol=TCP localport=7788
netsh advfirewall firewall add rule name="alt:V-7788-OUT-TCP" dir=out action=allow protocol=TCP localport=7788

echo Opening 7788 for UDP
netsh advfirewall firewall add rule name="alt:V-7788-IN-UDP" dir=in action=allow protocol=UDP localport=7788
netsh advfirewall firewall add rule name="alt:V-7788-OUT-UDP" dir=out action=allow protocol=UDP localport=7788

pause
```

If you need additional help with port forwarding in your router you should check out this[ Port Forward Website](https://portforward.com/router.htm) where you can find instructions for your router based on brand.

_You can verify that ports have been opened successfully after you setup the rest of Athena._

## Setup Private Repo

* [Create a New Private Repository](https://github.com/new)

Leave everything as default, **do not** add any README files or anything else.

Make sure you navigate to the next page where there's a URL ending in `.git` at the top.

### Clone into Private Repository

Open a Windows Terminal such as command line or powershell.

```
git clone https://github.com/Stuyk/altv-athena altv-athena-private
```

Navigate into the folder through command line, or powershell.

```
cd altv-athena-private
```

Go back to the page where we created a new private repository, and COPY the URL that is located in the box at the top

![](https://i.imgur.com/UNKxVoz.png)

_I don't specifically mean the URL in this image, go to your private repository page and copy that URL there._

```
git remote set-url --push origin THE_COPIED_URL_GOES_HERE
```

```
git add *
```

```
git commit -m "init"
```

```
git push origin
```

```
git remote add upstream https://github.com/Stuyk/altv-athena
```

```
git remote set-url --push upstream DISABLE
```

```
git remote set-url --push origin THE_COPIED_URL_GOES_HERE
```

If you refresh the GitHub page you should see a clone of Athena inside of your private repository if you were successful.

## Pushing updates

When you make changes to the code base you can push it by doing:

```
git add .
git commit -m "Whatever You Changed"
git push origin master
```

## Installing Dependencies

This installs all NodeJS packages and dependencies that help run the server.

```
npm install
```

## Installing Server Files

From this point forward you can simply run this `npm` command to update dependencies.

```
npm run update
```

## Starting the Server

**Hey Listen,** normally you start the server through altv-server.exe but **we do not do that with Athena**. There are other programs that run along-side Athena that allow it to function. You will need to run one of the commands below.

### Update the server.cfg

Do not modify the server.cfg, yes you are reading this correctly.

Instead, you should do the following.

Open 1 of the 3 configuration(s) in the `configs` folder.

You should see any of the following configurations:

* dev.json
* devtest.json
* prod.json

Edit all of these but remember this very important rule.

Do not change 'host' because 0.0.0.0 is correct.

### Production Mode

This is the mode you should use when you are having users connect.

Enter the following in a terminal:

```
npm run windows
```

### Development Test Mode

This is the mode you should use when you are having a limited set of users connect with `debug` mode on.

Enter the following in a terminal:

```
npm run devtest
```

### Development Mode

This is the mode you should use when you want to work on making changes. Limited to 1 user joining at a time. This should be used for all your major development. This is the fastest way to develop your game mode and requires the least amount of compile time to test things.

Enter the following in a terminal:

```
npm run dev
```

## Checking Ports

Check if the ports are currently open **while the server is running**. Check port `7788`.

[Check Ports with YouGetSignal](https://www.yougetsignal.com/tools/open-ports/)

## Connecting

Remember to get the [https://altv.mp/](https://altv.mp) client and connect.

### What IP to use?

If you are running this on your local machine you should connect to `127.0.0.1:7788` or `0.0.0.0:7788` if it does not work.

If you are running this on an external server you should connect to the server's IP address.
