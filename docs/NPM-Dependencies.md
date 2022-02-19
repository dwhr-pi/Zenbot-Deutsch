## NPM-Dependencies

Alle notwendigen Abhängigkeiten von Zenbot aufgelistet. 
Da es immer mehr werden und unnötige NPMs gleich mit installiert werden, soll diese Liste endsprechende Abhilfe auch in der aktuellen Version bieten. 
Zumal für NPM eine neue Datei erstellt werden soll. 

### Dependencies:
### @slack/client : ^4.1.0
Description: Legacy wrapper for official Slack Platform's Web API, RTM API, and Incoming Webhook libraries. Use @slack/web-api, @slack/rtm-api, or @slack/webhook instead.
Beschreibung: 
URL: https://www.npmjs.com/package/@slack/client
Github: 

### async : ^2.5.0
Description: Higher-order functions and common patterns for asynchronous code
Beschreibung: 
URL: https://www.npmjs.com/package/async
Github: 

### babel-core : ^6.26.0
Description: Babel compiler core.
Beschreibung: 
URL: https://www.npmjs.com/package/babel-core
Github: 

### babel-loader : ^7.1.2
Description: Babel module loader for webpack
Beschreibung: 
URL: https://www.npmjs.com/package/babel-loader
Github: 

### babel-preset-env : ^1.6.1
Description: A Babel preset for each environment.
Beschreibung: 
URL: https://www.npmjs.com/package/babel-preset-env
Github: 

### bitfinex-api-node : ^1.2.0
Description: Node reference library for Bitfinex API
Beschreibung: 
URL: https://www.npmjs.com/package/bitfinex-api-node
Github: 

### bitstamp : ^1.0.4
Description: Bitstamp REST API wrapper
Beschreibung: 
URL: https://www.npmjs.com/package/bitstamp
Github: 

### bl : ^1.2.2
Description: Buffer List: collect buffers and access with a standard readable Buffer interface, streamable too!
Beschreibung: 
URL: https://www.npmjs.com/package/bl
Github: 

### bollinger-bands : ^3.0.1
Description: Fintach math utility to calculate bollinger bands.
Beschreibung: 
URL: https://www.npmjs.com/package/bollinger-bands
Github: 

### bootstrap : ^4.0.0-beta.2
Description: The most popular front-end framework for developing responsive, mobile first projects on the web.
Beschreibung: 
URL: https://www.npmjs.com/package/bootstrap
Github: 

### ccxt : ^1.12.97
Description: A JavaScript / Python / PHP cryptocurrency trading library with support for 130+ exchanges
Beschreibung: 
URL: https://www.npmjs.com/package/ccxt
Github: 

### cexio-api-node : ^1.0.8
Description: CEX.IO Trading API for Node.js.
Beschreibung: 
URL: https://www.npmjs.com/package/cexio-api-node
Github: 

### cliff : ^0.1.10
Description: Your CLI formatting friend.
Beschreibung: 
URL: https://www.npmjs.com/package/cliff
Github: 

### colors : ^1.2.1
Description: Get colors in your node.js console
Beschreibung: 
URL: https://www.npmjs.com/package/colors
Github: 

### commander : ^2.15.1
Description: The complete solution for node.js command-line programs
Beschreibung: 
URL: https://www.npmjs.com/package/commander
Github: 

### convnetjs : 0.3.0
Description: Deep Learning library. Supports Convolutional (and ordinary) Neural Networks
Beschreibung: 
URL: https://www.npmjs.com/package/convnetjs
Github: 

### counterup : ^1.0.2
Description: A lightweight jQuery plugin that counts up to a targeted number when the number becomes visible.
Beschreibung: 
URL: https://www.npmjs.com/package/counterup
Github: 

### css-loader : ^0.28.11
Description: CSS loader module for webpack
Beschreibung: 
URL: https://www.npmjs.com/package/css-loader
Github: 

### echarts : ^4.0.2
Description: Apache ECharts is a powerful, interactive charting and data visualization library for browser. 
Beschreibung: 
URL: https://www.npmjs.com/package/echarts
Github: 

### ejs : ^2.5.8
Description: Embedded Server, it is look like classicASP of Microsoft.
Beschreibung: 
URL: 
Github: 
Offical: https://github.com/mde/ejs

### exports-loader : ^0.7.0
Description: Allow to setup exports module.exports/export for source files.
Beschreibung: 
URL: https://www.npmjs.com/package/exports-loader
Github: 

### expose-loader : ^0.7.5
Description: Expose loader module for webpack
Beschreibung: 
URL: https://www.npmjs.com/package/expose-loader
Github: 

### express : ^4.16.3
Description: Fast, unopinionated, minimalist web framework
Beschreibung: 
URL: https://www.npmjs.com/package/express
Github: 

XXXXXX Fehler
### extract-text-webpack-plugin : ^4.0.0-beta.0
Description: 
Beschreibung: 
URL: 
Github: 

### file-loader : ^1.1.6
Description: A file loader module for webpack
Beschreibung: 
URL: https://www.npmjs.com/package/file-loader
Github: 

### forex.analytics : github:mkmarek/forex.analytics#7bc278987700d4204e959af17de61495941d1a14
Description: Performs data anaylsis on a set of candlesticks and using available indicators constructs the best strategy which worked on a certain period. 
Beschreibung: 
[Having problem with npm install](https://www.reddit.com/r/zenbot/comments/bgi8wl/having_problem_with_npm_install/)
Try the following, deinstall everything and start fresh, it is easier and cleaner and do the following commands:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get upgrade -y

sudo apt-get install -y git build-essential mongodb nodejs python-dev
sudo service mongodb start
sudo systemctl enable mongodb.service

git clone https://github.com/deviavir/zenbot.git

cd zenbot
sudo nano package.json
Change the line "forex.analytics": "github:mkmarek/forex.analytics#7bc278987700d4204e959af17de61495941d1a14", to "forex.analytics": "^0.0.15",
Close with CTRL + X (confirm with Y)

sudo rm -R node_modules/forex.analytics

npm install tulind
npm install
```
Step 12 is just to be sure, tell me if it worked :)

[Install talib and forex.analytics fails (solved)](https://github.com/DeviaVir/zenbot/issues/1765)
URL: https://www.npmjs.com/package/forex.analytics
Github: 

XXXXXX Fehler
### gdax : ^0.7.0
Description: 
Beschreibung: 
URL: 
Github: 

### gemini-api : ^2.0.4
Description: Node.js client for the Gemini cryptocurrency exchange API.
Beschreibung: 
URL: https://www.npmjs.com/package/gemini-api
Github: 

### glob : ^7.1.1
Description: A little globber.
Beschreibung: 
URL: https://www.npmjs.com/package/glob
Github: 


XXXXXX Fehler
### har-validator : ^5.0.3
Description: 
Beschreibung: 
URL: 
Github: 

### husky : ^0.14.3
Description: Modern native Git hooks made easy.
Beschreibung: 
URL: https://www.npmjs.com/package/husky
Github: 

### idgen : ^2.0.2
Description: Minimal ID generator
Beschreibung: 
URL: https://www.npmjs.com/package/idgen
Github: 

### imports-loader : ^0.8.0
Description: Imports loader module for webpack
Beschreibung: 
URL: https://www.npmjs.com/package/imports-loader
Github: 

### ip : ~1.1.5
Description: IP address utilities for node.js
Beschreibung: 
URL: https://www.npmjs.com/package/ip
Github: 

### jasmine : ^2.8.0
Description: CLI for Jasmine, a simple JavaScript testing framework for browsers and Node. 
Beschreibung: 
URL: https://www.npmjs.com/package/jasmine
Github: 

### jquery : ^3.2.1
Description: JavaScript library for DOM operations
Beschreibung: 
URL: https://www.npmjs.com/package/jquery
Github: 

### keltnerchannel : ^1.4.2
Description: Keltner Channel technical indicator.
Beschreibung: 
URL: https://www.npmjs.com/package/keltnerchannel
Github: 

### kraken-api : ^1.0.0
Description: Kraken.com API client library for NodeJS
Beschreibung: 
URL: https://www.npmjs.com/package/kraken-api
Github: 

### lint-staged : ^7.0.4
Description: Lint files staged by git
Beschreibung: 
URL: https://www.npmjs.com/package/lint-staged
Github: 

### lodash : ^4.17.4
Description: Lodash modular utilities.
Beschreibung: 
URL: https://www.npmjs.com/package/lodash
Github: 


XXXXXX Fehler
### lolex : ^2.3.2
Description: 
Beschreibung: 
URL: 
Github: 

### mathjs : ^4.0.1
Description: Math.js is an extensive math library for JavaScript and Node.js. It features a flexible expression parser with support for symbolic computation, comes with a large set of built-in functions and constants, and offers an integrated solution to work with dif
Beschreibung: 
URL: https://www.npmjs.com/package/mathjs
Github: 

### micro-request : ^666.0.10
Description: Zero-dependency http(s) client with smart json and stream support
Beschreibung: 
URL: https://www.npmjs.com/package/micro-request
Github: 

### mime : ^2.2.2
Description: A comprehensive library for mime-type mapping
Beschreibung: 
URL: https://www.npmjs.com/package/mime
Github: 

### minimist : ^1.2.0
Description: Parse argument options
Beschreibung: 
URL: https://www.npmjs.com/package/minimist
Github: 

### mock-require : ^3.0.2
Description: Simple, intuitive mocking of Node.js modules.
Beschreibung: 
URL: https://www.npmjs.com/package/mock-require
Github: 

### moment : ^2.22.0
Description: Parse, validate, manipulate, and display dates
Beschreibung: 
URL: https://www.npmjs.com/package/moment
Github: 

### mongodb : ^3.0.5
Description: The official MongoDB driver for Node.js
Beschreibung: 
URL: https://www.npmjs.com/package/mongodb
Github: 

### node-bittrex-api : ^0.8.2
Description: Node Bittrex API - asynchronous node.js library for the Bittrex API https://bittrex.com/
Beschreibung: 
URL: https://www.npmjs.com/package/node-bittrex-api
Github: 

### node-prowl : ^0.1.7
Description:  API for Prowl, allowing to send PUSH notifications to your iPhone!
Beschreibung: 
URL: https://www.npmjs.com/package/node-prowl
Github: 

### node-sass : ^4.8.3
Description: Wrapper around libsass
Beschreibung: 
URL: https://www.npmjs.com/package/node-sass
Github: 

### node-telegram-bot-api : ^0.30.0
Description: Telegram Bot API
Beschreibung: 
URL: https://www.npmjs.com/package/node-telegram-bot-api
Github: 

### number-abbreviate : ^2.0.0
Description: Abbreviate a number and add unit letters e.g. 2200000 => '2.2m'
Beschreibung: 
URL: https://www.npmjs.com/package/number-abbreviate
Github: 

### numbro : github:highvelocityspace/numbro
Description: Format and manipulate numbers.
Beschreibung: 
URL: https://www.npmjs.com/package/numbro
Github: 

### path : ^0.12.7
Description: This is an exact copy of the NodeJS ’path’ module published to the NPM registry.
Beschreibung: 
URL: https://www.npmjs.com/package/path
Github: 

### poloniex.js : 0.0.8
Description: API client for the Poloniex cryptocurrency exchange.
Beschreibung: 
URL: https://www.npmjs.com/package/poloniex.js
Github: 

XXXXXX Fehlerhaft
### popper.js : ^1.14.3
Description: Realtime Cross-Browser Automation
Beschreibung: 
URL: 
Github: 

### postcss-loader : ^2.1.3
Description: 
Beschreibung: 
URL: https://www.npmjs.com/package/progress
Github: 

### progress : ^2.0.0
Description: Flexible ascii progress bar
Beschreibung: 
URL: 
Github: 

### pushbullet : 2.2.0
Description: Use PushBullets REST API
Beschreibung: 
URL: https://www.npmjs.com/package/pushbullet
Github: 

### pusher-js : ^4.1.0
Description: Pusher Channels JavaScript library for browsers, React Native, NodeJS and web workers
Beschreibung: 
URL: https://www.npmjs.com/package/pusher-js
Github: 

### quadrigacx : 0.0.7
Description: Nodejs interface for QuadrigaCX bitcoin exchange
Beschreibung: 
URL: https://www.npmjs.com/package/quadrigacx
Github: 

### random-port : ^0.1.0
Description: Get a random free tcp port and pass to the callback
Beschreibung: 
URL: https://www.npmjs.com/package/random-port
Github: 

### regression : ^2.0.0
Description: Javascript least squares data fitting methods
Beschreibung: 
URL: https://www.npmjs.com/package/regression
Github: 

### resolve-url-loader : ^2.2.1
Description: Webpack loader that resolves relative paths in url() statements based on the original source file
Beschreibung: 
URL: https://www.npmjs.com/package/resolve-url-loader
Github: 

### sass-loader : ^7.0.1
Description: Loads a Sass/SCSS file and compiles it to CSS.
Beschreibung: 
URL: https://www.npmjs.com/package/sass-loader
Github: 

### semver : ^5.4.1
Description: The semantic version parser used by npm.
Beschreibung: 
URL: https://www.npmjs.com/package/semver
Github: 

### simple-xmpp : ^1.3.0
Description: Simple High Level NodeJS XMPP Library
Beschreibung: 
URL: https://www.npmjs.com/package/simple-xmpp
Github: 

### stats-lite : 2.1.0
Description: A light statistical package that operates on numeric Arrays.
Beschreibung: 
URL: https://www.npmjs.com/package/stats-lite
Github: 

### style-loader : ^0.21.0
Description: Inject CSS into the DOM.
Beschreibung: 
URL: https://www.npmjs.com/package/style-loader
Github: 

### superagent : ^3.8.2
Description: Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features. 
Beschreibung: 
URL: https://www.npmjs.com/package/superagent
Github: 

### talib : ^1.0.4
Description: Technical Analysis Library
Beschreibung: 
[Install talib and forex.analytics fails (solved)](https://github.com/DeviaVir/zenbot/issues/1765)
URL: https://www.npmjs.com/package/talib
Github: 

### timebucket : ^0.4.0
Description: Group timestamps into "buckets" by applying a granularity to a discrete value
Beschreibung: 
URL: https://www.npmjs.com/package/timebucket
Github: 

### trend : 0.3.0
Description: Use to find out how a chart (array of values) are trending. Compares the last X points to the previous Y points before them.
Beschreibung: 
URL: https://www.npmjs.com/package/trend
Github: 

### tulind : ^0.8.10
Description: Tulip Node is the official node.js wrapper for Tulip Indicators. It provides 100+ technical analysis indicator functions, such as: simple moving average, Bollinger Bands, MACD, Parabolic SAR, Stochastic Oscillator, and many more. 
Beschreibung: 
URL: https://www.npmjs.com/package/tulind
Github: 

### url-loader : ^1.0.1
Description: A loader for webpack which transforms files into base64 URIs.
Beschreibung: 
URL: https://www.npmjs.com/package/url-loader
Github: 

### uuid : ^3.1.0
Description: For the creation of RFC4122 UUIDs
Beschreibung: 
URL: https://www.npmjs.com/package/uuid
Github: 

### waypoints : ^4.0.1
Description: Waypoints is a library that makes it easy to execute a function whenever you scroll to an element.
Beschreibung: 
URL: https://www.npmjs.com/package/waypoints
Github: 

### webpack : ^4.5.0
Description: The official CLI of webpack
Beschreibung: 
URL: https://www.npmjs.com/package/webpack-cli
Github: 

### webpack-cli : ^2.0.14
Description: 
Beschreibung: 
URL: 
Github: 

### wexnz : ^0.1.3
Description: WEXNZ Trading API
Beschreibung: 
URL: https://www.npmjs.com/package/wexnz
Github: 

### ws : ^5.1.1
Description: ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.
Beschreibung: 
URL: https://www.npmjs.com/package/ws
Github: 

### zero-fill : ^2.2.3
Description: Zero-fill a number to the given size.
Beschreibung: 
URL: https://www.npmjs.com/package/zero-fill
Github: 





## BackUp der notwendigen Abhängigkeiten. 

Dependencies:
@slack/client : ^4.1.0
async : ^2.5.0
babel-core : ^6.26.0
babel-loader : ^7.1.2
babel-preset-env : ^1.6.1
bitfinex-api-node : ^1.2.0
bitstamp : ^1.0.4
bl : ^1.2.2
bollinger-bands : ^3.0.1
bootstrap : ^4.0.0-beta.2
ccxt : ^1.12.97
cexio-api-node : ^1.0.8
cliff : ^0.1.10
colors : ^1.2.1
commander : ^2.15.1
convnetjs : 0.3.0
counterup : ^1.0.2
css-loader : ^0.28.11
echarts : ^4.0.2
ejs : ^2.5.8
exports-loader : ^0.7.0
expose-loader : ^0.7.5
express : ^4.16.3
extract-text-webpack-plugin : ^4.0.0-beta.0
file-loader : ^1.1.6
forex.analytics : github:mkmarek/forex.analytics#7bc278987700d4204e959af17de61495941d1a14
gdax : ^0.7.0
gemini-api : ^2.0.4
glob : ^7.1.1
har-validator : ^5.0.3
husky : ^0.14.3
idgen : ^2.0.2
imports-loader : ^0.8.0
ip : ~1.1.5
jasmine : ^2.8.0
jquery : ^3.2.1
keltnerchannel : ^1.4.2
kraken-api : ^1.0.0
lint-staged : ^7.0.4
lodash : ^4.17.4
lolex : ^2.3.2
mathjs : ^4.0.1
micro-request : ^666.0.10
mime : ^2.2.2
minimist : ^1.2.0
mock-require : ^3.0.2
moment : ^2.22.0
mongodb : ^3.0.5
node-bittrex-api : ^0.8.2
node-prowl : ^0.1.7
node-sass : ^4.8.3
node-telegram-bot-api : ^0.30.0
number-abbreviate : ^2.0.0
numbro : github:highvelocityspace/numbro
path : ^0.12.7
poloniex.js : 0.0.8
popper.js : ^1.14.3
postcss-loader : ^2.1.3
progress : ^2.0.0
pushbullet : 2.2.0
pusher-js : ^4.1.0
quadrigacx : 0.0.7
random-port : ^0.1.0
regression : ^2.0.0
resolve-url-loader : ^2.2.1
sass-loader : ^7.0.1
semver : ^5.4.1
simple-xmpp : ^1.3.0
stats-lite : 2.1.0
style-loader : ^0.21.0
superagent : ^3.8.2
talib : ^1.0.4
timebucket : ^0.4.0
trend : 0.3.0
tulind : ^0.8.10
url-loader : ^1.0.1
uuid : ^3.1.0
waypoints : ^4.0.1
webpack : ^4.5.0
webpack-cli : ^2.0.14
wexnz : ^0.1.3
ws : ^5.1.1
zero-fill : ^2.2.3