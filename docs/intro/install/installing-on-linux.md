---
title: 'Installing on Linux'
order: -96
---

# {{ $frontmatter.title }}

## Linux

Linux installation should be using Ubuntu 20.04+ or greater. The author of this documentation has used Ubuntu 20.04+ without any issues.

::: tip

`()\[]{}|:;'<>?,!@#$%^&\*+=`

These cannot be used in your folder pathing. Do **NOT** use them.

::::

::: warning

As a general recommendation, you should only be using Linux for production. It is highly recommended to develop on Athena in a Windows environment as the build times are much faster.

:::

## Dependencies

Install or perform all actions in this section. Copy the entire code block and paste it.

### GIT

Grab the latest version of GIT.

```
sudo apt update && sudo apt install git
```

### CURL

Grab the latest version of Curl.

```
sudo apt update && sudo apt install curl
```

### wget

Grab the latest version of wget.

```
sudo apt update && sudo apt install wget
```

### UFW

Grab the latest verson of UFW (Uncomplicated Firewall)

```
sudo apt-get install ufw
```

### NodeJS 16+ through NVM

Grab at least version 17+ for NodeJS through nvm.

#### Uninstall Older Versions\*

This step only applies if you installed NVM in the past.

```
nvm uninstall OLD_VERSION_HERE
```

#### Install Latest Version of NVM

Install the NVM script for selecting NodeJS versions.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

```
nvm install 17
nvm use 17
```

### MongoDB

Keep in mind this is optional if you use MongoDB Atlas for your database. If you are using a local database please install MongoDB server here.

```
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```

```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

```
sudo apt update
```

```
sudo apt install mongodb-org
```

```
sudo systemctl start mongod.service
```

```
sudo systemctl status mongod
```

Instructions pulled from [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

### libatomic1

Grab the libatomic1 library.

```
sudo apt-get update && sudo apt-get install libatomic1
```

### Create a Github Account

Yes you are going to need a Github account. You are also going to need to setup an SSH key for your Github account. It is covered below.

[Sign Up with Github](https://github.com/signup)

## Setup SSH Key

GitHub has really good [SSH Setup Instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) but they may not be entirely clear for newer developers. If you are comfortable with normal documentation give the above link a try. Make sure to select the Linux tab.

### Open a Terminal

Git Bash is something that should come with GIT by default. Enter `Git Bash` in your windows search to open it.

**Generate a New SSH Key**

Enter the following in a Terminal.

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

It may ask you for a password.&#x20;

Hitting enter twice will automatically default to `no password`.

**Start the SSH Agent**

Enter the following in a Terminal.

```
eval "$(ssh-agent -s)"
```

_It should respond with 'Agent pid XYZ'_

**Add the SSH Key to the SSH Agent**

Enter the following in a Terminal:

```
ssh-add ~/.ssh/id_ed25519
```

**Add the SSH Key to GitHub**

Enter the following in a Terminal:

```
cat ~/.ssh/id_ed25519.pub
```

**Copy** the text printed from `ssh-ed25519` all the way to your email.

![25519.pub key copy example](https://i.imgur.com/NPjcWhW.png)

Navigate to your GitHub settings and the `SSH and GPG keys` section.

Click on `New SSH Key`

![Click New SSH Key to add it to your GitHub.](https://i.imgur.com/VyCobd5.png)

Give the key a name, and **paste the public key into the larger text box**.


## Port Forwarding

At the very least you will need to open port 7788 for your main server.

You may need to Forward Ports in your Server Panel, Router, etc. If you are running Athena on a server it is likely you will need to add 7788 to an additional Firewall somewhere in your server providers panel.

### UFW Instructions

Be very careful about doing this because you need to ensure port `22` is setup for UFW.

We're going to do each of these commands one at a time.

```
sudo ufw allow 22
```

```
sudo ufw allow ssh
```

```
sudo ufw allow 7788
```

```
sudo ufw enable
```

_You can verify that ports have been opened successfully after you setup the rest of Athena._

## Setup Private Repo

Create a **New** **Repository** on GitHub.

Visit GitHub and ensure you are signed in.

![](https://i.imgur.com/6wSCjfu.png)

Use the following settings and hit **create**.

![](https://i.imgur.com/CfZm096.png)

![](https://i.imgur.com/nlsGGOM.png)

Leave the page open and do not touch anything. You need to do some other things first.


### Clone into Private Repository

Open a Terminal.

Enter the following command(s) in order.

```
git clone https://github.com/Stuyk/altv-athena
cd altv-athena
```

Once inside of the repository you need to setup a new remote URL. Copy the URL from the page you left open, and paste it where `url_for_other_repo_here` is in the command below.

![](https://i.imgur.com/SmI37H9.png)

After, running this command do the following command(s)

```
git remote set-url --push origin url_for_other_repo_here
git add *
git commit -m "init"
git push origin
git remote add upstream https://github.com/Stuyk/altv-athena
git remote set-url --push upstream DISABLE
```

Instead of disabling the push upstream, you can also set this to your origin repository.

An example of how to change the remote push URL is here:
```ts
git remote set-url --push origin your_repository_url
```

If you refresh the GitHub page you should see a clone of Athena inside of your private repository if you were successful.

### Pushing updates

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
npm run linux
```

_Linux only supports production mode as you should be doing most of your development on Windows based computers._

## Checking Ports

Check if the ports are currently open **while the server is running**. Check port `7788`.

[Check Ports with YouGetSignal](https://www.yougetsignal.com/tools/open-ports/)

## Connecting

Remember to get the [https://altv.mp/](https://altv.mp) client and connect.

### What IP to use?

If you are running this on your local machine you should connect to `127.0.0.1:7788`.

If you are running this on an external server you should connect to the server's IP address.

## Successful Installation

A successful installation and bootup will look like the following:

![](https://i.imgur.com/NuppQyc.png)

