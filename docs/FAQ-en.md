# Frequently Asked Questions

Here are a few questions that have been asked often as well as answers from the community.

If you have a question that is not answered here, feel free to ask in the [Reddit](#is-there-a-community-to-get-involved-with-zenbot) community and suggest it to be placed here.

Thanks!



## Contents

### [General](#general-1)
* [Is there a community to get involved with Zenbot?](#is-there-a-community-to-get-involved-with-zenbot)

### [Trading](#trading-1)
* [Will I make money with Zenbot?](#will-i-make-money-with-zenbot)
* [Why do simulations, paper trading, and live trading all yield different results?](#why-do-simulations-paper-trading-and-live-trading-all-yield-different-results)
* [Why should I use simulations or paper trading if they do not reflect live trading?](#why-should-i-use-simulations-or-paper-trading-if-they-do-not-reflect-live-trading)
* [Does Zenbot use Limit (maker) orders or Market (taker) orders?](#does-zenbot-use-limit-maker-orders-or-market-taker-orders)

### [Technical](#technical-1)
* [Can I install Zenbot on Windows?](#can-i-install-zenbot-on-windows)
* [Is Docker necessary when installing Zenbot?](#is-docker-necessary-when-installing-zenbot)
* [How do I launch Zenbot?](#how-do-i-launch-zenbot)
* [How do I update Zenbot?](#how-do-i-update-zenbot)

### [Errors](#errors-1)
* [Why do I keep getting a "Nonce" error?](#why-do-i-keep-getting-a-nonce-error)
* [Why do I keep getting a "JavaScript heap out of memory" error](#why-do-i-keep-getting-a-javascript-heap-out-of-memory-error)


## Answers

### General

#### Is there a community to get involved with Zenbot?

Of course! Check out our Reddit community ([subreddit zenbot](https://reddit.com/r/zenbot)).

There is also [a shared Google Docs spreadsheet containing community sim results and variable descriptions](https://docs.google.com/spreadsheets/d/1WjFKRUY4KpkdIJiA3RVvKqiyNkMe9xtgLSfYESFXk1g/edit#gid=70204991).



### Trading

#### Will I make money with Zenbot?

That depends… Different configurations and strategies will yield different results.

The current default config and parameters will likely lose you money, so proceed with caution. Try running simulations and paper trading first to see how the bot acts (see warning below).



#### Why do simulations, paper trading, and live trading all yield different results?

Simulations and paper trading almost always give overly optimistic results compared to live trading. This is because simulations and paper trading both make assumptions about when/if an order is filled.

Because Zenbot defaults to using Limit orders (which often lessen fees), there tends to be much more slippage (the difference between when the bot decides to buy and when it actually buys) in live trading. Due to this, live trading is almost always worse than sims and paper trading.

Also, remember that past results do not guarantee future returns.



#### Why should I use simulations or paper trading if they do not reflect live trading?

Simulations are more optimistic than paper trading.
Paper trading is more optimistic than live trading.
Therefore, if a simulation does not yield good results, odds are that neither will paper trading or (by extension) live trading.



#### Does Zenbot use Limit (maker) orders or Market (taker) orders?

Zenbot uses Limit orders by default because on most exchanges, Limit orders result in lower fees than Market orders. For instance, on GDAX there is no fee for a Limit order trade compared to a 0.25% (BTC) or 0.3% (ETH & LTC) trade fee on a Market order.

Check your exchange for fees.



### Technical

#### Can I install Zenbot on Windows?

Yes, Zenbot can be installed on Windows, although it is recommended that Linux or macOS is used instead.

Please note that these instructions are for Windows 10.

1. Install the "Bash on Windows subsystem" (see https://msdn.microsoft.com/en-us/commandline/wsl/about for more information)

> Note: You can then choose between Ubuntu, Fedora and OpenSUSE in the Windows store.

2. Open a terminal window, your disks will now be mounted under `/mnt/*`. So for example navigate to your directory (example: `cd /mnt/c/zenbot`)

3. Install node (`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -; sudo apt-get install nodejs`)

4. Run zenbot as you would otherwise

> Note: MongoDB is not working in this subsystem, please use the Windows version!



#### Is Docker necessary when installing Zenbot?

No, Docker is often not necessary to run Zenbot. It is often simpler to run Zenbot on a Linux machine (Debian, CentOS, etc.) without Docker.

If running Zenbot on Windows, Docker may be needed.



#### How do I launch Zenbot?

After installation, you lauch Zenbot via command line.
Examples:
```
./zenbot.sh backfill gdax.ETH-BTC
./zenbot.sh sim gdax.ETH-BTC --days=14
zenbot sim --days 14
```
You can [generate a command with this shared Google Docs spreadsheet](https://docs.google.com/spreadsheets/d/1HECEHW-I9Evve_FQV3LT_IWGV6FU34tHif9TEouKtfg/edit?usp=sharing).
Do not hesitate to copy this file to your Google drive or download it as an spreadsheet, as everybody can modify it simultaneously.



#### How do I update Zenbot?

Without Docker:
```
git pull
npm install
./zenbot.sh trade --paper
```

With Docker:
```
git pull
docker-compose down
docker rmi zenbot_server
docker-compose build
docker-compose up -d
```



### Errors

#### Why do I keep getting a "Nonce" error?

This error may occur when multiple instances of Zenbot are used with the same API key. To avoid this, use a different API key for each concurrent instance of Zenbot.

This could also occur if the Zenbot server's time is not correct. Using NTP will keep the time current and help avoid this error.

#### Why do I keep getting a "JavaScript heap out of memory" error

This error may occur when your node environment does not have enough memory.

Solution (Linux & Docker): Change the line

`env node zenbot.js $@`

in [zenbot.sh](../zenbot.sh) to 

`env node --max-old-space-size=<memory> zenbot.js $@`

 where `<memory>` is the amount of memory node is allowed to use (e.g. 4096 for 4GB). For Windows you have to change the file [zenbot.bat](../zenbot.bat) respectively.
 
 
 Version von Node.js abfragen.
 nvm --v

 
 
 
 
 
 
XXXXXXXXXXXXXXXXXXX Neu New
 
npm ERR! 404 Not Found - GET https://registry.npmjs.org/ccxt/-/ccxt-1.33.64.tgz - Not found

 
 XXXXXXXXXXXXXXXXXXX
 Error: Cannot find module 'semver'
 https://stackoverflow.com/questions/33870520/npm-install-cannot-find-module-semver

Erster Schritt: 
```
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf ~/.npm

Zweiter Schritt - uninstall node.js
Unbuntu - uninstall node.js
brew uninstall --force node
brew install node

Debian - uninstall node.js
https://coderrocketfuel.com/article/how-to-uninstall-node-js-on-debian-10
```

Nodes.js entfernen. 
```
sudo apt remove nodejs
sudo apt purge nodejs
sudo apt autoremove
```


XXXXXXXXXXXXXXXXXXX
https://forum.iobroker.net/topic/35090/howto-nodejs-installation-und-upgrades-unter-debian

https://nodesource.com/blog/installing-node-js-8-tutorial-linux-via-package-manager/

Node install einer bestimmten Version. 
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt-get install -y nodejs

Node Version abfragen: 
```
node -v
```

Node Updade


XXXXXXXXXXXXXXXXXXX
NPM Update
https://github.com/npm/
```
npm install -g npm@8.0.0

npm audit fix
```

Nochmal: 
https://forum.iobroker.net/topic/35090/howto-nodejs-installation-und-upgrades-unter-debian



Das derzeitig empfohlene nodeJS-Paket ist Node 12 inklusive npm 6
curl -sL https://deb.nodesource.com/setup_VV.x | sudo -E bash
sudo apt install nodejs
sudo ln -s /usr/bin/node /usr/bin/nodejs


curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash
sudo apt install nodejs
sudo ln -s /usr/bin/node /usr/bin/nodejs

sudo apt-get install -y nodejs

Dies installiert trotzdem Version 15....

Dies wäre richtig!
```
sudo apt-get install nodejs 12.x
```
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


Die NVM Pakete müssen manuell oder durch 
```
npm uninstall --save <package_name>
npm uninstall --save Zenbot4@4.0.1
```
entfernt werden. 
Durch versteckte Dateien im Stammverzeichnis den Ordner .config ausfindig machen und das Verzeichnis NVM einfach in NVM-alt umbenennen. 


Für Node.js und NPM dies anschließend anwenden um zu installieren. 
```
npm install -g npm
```

We've deprecated any official yearly presets in 6.x in favor or babel-preset-env. For 7.x it would be @babel/preset-env.
npm WARN deprecated crypto@1.0.1: This package is no longer supported. It's now a built-in Node module. If you've depended on crypto, you should switch to the one that's built-in.

Oder 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install v14.15.5
node -v

XXXXXXXXXXXXXXXXXXX
Error: Cannot find module 'semver'
https://stackoverflow.com/questions/33870520/npm-install-cannot-find-module-semver

But I solve my problem with these steps (this will delete other global modules you may be using):
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf ~/.npm
sudo apt remove nodejs
sudo apt install nodejs

Unbuntu
brew uninstall --force node
brew install node

3. Used this on two different machines running El Capitan, worked in both cases. 
7. Use brew uninstall --force node to remove all versions
6. just install npm again. curl -0 -L https://npmjs.org/install.sh | sudo sh after remove npm folder

21. If Yarn is already installed, brew uninstall --ignore-dependencies node works for me where brew uninstall --force node didn't.
17. Its my fault for blindly pasting commands, but sudo rm -rf /usr/local/lib/node_modules caused me to lose global modules I use such as gulp and selenium server.

```
npm install -g semver
```
XXXXXXXXXXXXXXXXXXX
ccxt wird vermisst.
https://www.npmjs.com/package/ccxt

```
git clone https://github.com/ccxt/ccxt.git
npm install ccxt
```
