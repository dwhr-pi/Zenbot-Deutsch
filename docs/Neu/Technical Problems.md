Source: https://review.gerrithub.io/plugins/gitiles/olexiyb/zenbot/+/refs/tags/4.1.3


4.1.3 (#1724)

* Exchanges: update-products 1011

* Fix Bittrex error (#1563)

I fixed the order cancel error in issue #1514. I changed the cancelOrder and getOrder functions. 

I also changed 'fistRun' to 'firstRun'

* Exchanges: update-products 1019

* Bittrex code cleanup (#1566)

This time there are no functional changes, I just wanted to clean up the code. I also combined the warning messages and made it more clear.

* Exchanges: update-products 1023

* Exchanges: update-products 1026

* Exchanges: update-products 1029

* Exchanges: update-products 1032

* Exchanges: update-products 1038

* Exchanges: update-products 1041

* Exchanges: update-products 1045

* Exchanges: update-products 1047

* Exchanges: update-products 1051

* Exchanges: update-products 1053

* Exchanges: update-products 1057

* Exchanges: update-products 1059

* so long, Zenbot

* Fixed grammatical error in dashboard (#1588)

* Mistake with ws calc request. (fix for #516 and partially #868) (#1586)

* Docker and commandline improvements (#1583)

* [BUG] Docker: Closed critical public access to non-protected database

* [ENH] Improved docker handling (synced folder, alpine image for production)

* [ENH] Add initial Makefile

* [ENH] Docker: Add traefik reverse proxy support

* [CLEAN] Cleanup data files from repo

* Webpack: split js and css into its own bundles (#1582)

So stylesheets get loaded if the browser has strict MIME-Type checking enabled.

* Edit max_sell/buy_loss_pct defaults in conf-sample.js (#1578)

* Changed default c.max_sell_loss_pct and c.max_buy_loss_pct to 99. With a value of 25, once the current price is 25% under the bought price the bot would refuse to sell unless the current price goes back above the 25% loss, however, this doesn't always happen and can cause the bot to refuse sells and end up with a huge loss. Also the descriptions for these options are very vague and confusing and I don't think most users know what they even are or would want them to use them. If my interpretation of what the option actually does is incorrect let me know.

* fix broken balance command (#1573)

* Exchanges: update-products 1070

* Exchanges: update-products 1074

* Exchanges: update-products 1076

* Exchanges: update-products 1079

* Exchanges: update-products 1083

* Exchanges: update-products 1085

* CEXIO: getTrades return error to engine (#1595)

Instead of retrying infinitely causing requests to get stacked on top of another which will lead to the cursor freezing, rendering the bot inoperable.

* Exchanges: update-products 1090

* Exchanges: update-products 1092

* Repairs #1596 error (#1601)

* Repair duplicate key issue on backfill, resolves #1596 (#1600)

* Exchanges: update-products 1099

* Exchanges: update-products 1101

* Exchanges: update-products 1105

* Exchanges: update-products 1107

* Exchanges: update-products 1109

* Exchanges: update-products 1111

* Exchanges: update-products 1113

* Exchanges: update-products 1124

* Exchanges: update-products 1126

* Exchanges: update-products 1129

* Exchanges: update-products 1132

* Exchanges: update-products 1134

* Exchanges: update-products 1137

* Exchanges: update-products 1141

* fix(package): update webpack-cli to version 3.0.4 (#1616)

Closes #1606

* Add OHLC candle backfilling (#1614)

* Exchanges: update-products 1147

* Exchanges: update-products 1151

* typo in README.md (#1620)

* Exchanges: update-products 1157

* Exchanges: update-products 1163

* Add asset to push message (#1623)

If you get bombarded with messages by multiple bots it can get a bit confusing at times to know who is selling/buying what.

* Add strategies that utilize TA-Lib and Tulip-Lib (#1621)

* Add Backing Libs

ta-lib Bollinger Bands
ta-lib Stochastic Oscillator
ta-lib Stochastic RSI Oscillator
Tulip-lib Bollinger Bands
Tulip-lib MACD
Tulip-lib RSI
Tulip-lib Stochastic Oscillator
Tulip-lib Stochastic RSI Oscillator

* Add strategy ta_srsi_bollinger

This Strategy uses SRSI to detect when to buy and sell verifying price position using Bollinger Bands

* Add Strategy ti_stoch_bollinger

This strategy uses Stochastic Oscillator to detect buy and sell signals verifying using bollinger bands This utilizes the Tulip Libs

* Add strategy ti_bollinger

This is a duplicate of native bollinger strategy but implemented using Tulip libs.   This was for testing the ti_bollinger backing lib.  This can be used by itself but does not detect trends so most likely will result in losses.

* Add Strategy ti_stoch

This is the Stochastic Oscillator implmented using the Tulip lib.   this buys and sells at set SO crossover points.  This is mainly for testing the backing library.  It can be used standalone but does not check for trends so it is likely to result in losses

* Add Stragegy ti_stoch_bollinger

This strategy buys and sells using Stochastic Oscillator crossover points and verifies using bollinger.  implemented us Tulip lib

* Fix bugs in Stoch RSI.  add option  for passing in market data

* Fix bugs in Stoch.  add option  for passing in market data

* Set Bollinger time divider to default.   adjust but/sell calculation

* fix(package): update mathjs to version 5.0.0 (#1622)

* Exchanges: update-products 1173

* Debug lib (#1624)

* Debug lib

Move debugging to its own library so it can be (re)used in every module instead of just engine.js

Furthermore this will expose the current debugging state (in debug.on) globally, use it instead of declaring so.debug locally in each module from process.argv

* Picky Travis...

* fix(package): update poloniex.js to version 0.0.9 (#1618)

* fix(package): update gdax to version 0.8.0 (#1594)

* fix(package): update bl to version 2.0.1 (#1625)

Closes #1591

* fix(package): update stats-lite to version 2.1.1 (#1575)

* CEXIO: Migrate over to WebSocket (#1615)

* CEXIO: Migrate over to WebSocket

Fees and Backfill still using REST due to API limitation.

* Cleanup

* CEXIO: WebSocket additions

* wsTrades catch reject was out-of-scope *duh*
* Disconnect message formating

* CEXIO: WebSocket

* Improve error handling
* Reject client requests until authenticated

* CEXIO: WebSocket trade

* Use REST for Taker/Market orders, looks like this isn't supported (yet?) :disappointed:

* CEXIO: Use debug lib (#1626)

* CEXIO: Use debug lib

Might as well use it :smirk:

* CEXIO: Use LF over CRLF

*ups*

* Exchanges: update-products 1186

* Exchanges: update-products 1188

* Exchanges: update-products 1190

* Add minimum trades and fitnessCalcType options (#1631)

--minTrades will try and achieve the minimum x amount of trades before using normal fitness calculations
--fitnessCalcType allows for different fitness priorities.  i.e. profit does not care how many wins or losses occur.  it only looks at how much of a return is occurring.   wl does not care about profit, only more wins than losses, profitwl tries to get the best profit, while taking into consideration wins and losses, but rates profit higher.  classic uses the legacy calculation and is the default.

Addition modifications
Add PROPERTY_RANDOM_CHANCE to phenotype process to allow for injection of entirely new species. this helps prevent stagnation during a long run.

At some point floatScanWindow was removed from backtester.  Commented out code in darwin.js at applies to this change

* Exchanges: update-products 1194

* Exchanges: update-products 1200

* Exchanges: update-products 1202

* Exchanges: update-products 1204

* Code Cleanup (#1634)

Fix indent to match .eslint requirement
Fix undeclared variables to match .eslint requirement

* Added missing parameter text (#1638)

* Exchanges: update-products 1211

* Exchanges: update-products 1213

* Exchanges: update-products 1215

* chore(package): update yargs to version 12.0.1 (#1643)

* Exchanges: update-products 1220

* Exchanges: update-products 1223

* Update strategy.js (#1646)

* Update strategy.js

Added overbought parameters to trade with crypto assets directly (the original code works fine if starts with FIAT, but not with asset) and use red color to mark RSI with red (sell signal). Tested and works fine.

* Update strategy.js

* Exchanges: update-products 1231

* Update strategy.js (#1651)

Sorry, correct the code. The original was reported first tim goes right.

Thanks.

* Exchanges: update-products 1236

* Exchanges: update-products 1240

* Exchanges: update-products 1242

* fix(package): update css-loader to version 1.0.0 (#1653)

* Exchanges: update-products 1245

* Exchanges: update-products 1250

* Exchanges: update-products 1252

* Exchanges: update-products 1257

* Cross-platform Makefile (#1660)

* Added database to .gitignore (#1658)

* Time-sync function to update container time (#1659)

* Edited Docker ignore

edited docker for mac

* added time sync function

* Exchanges: update-products 1257

* Cross-platform Makefile (#1660)

* Added database to .gitignore (#1658)

* added time sync function

* Fix Poloniex not fetching all available trades (#1565) (#1661)

* Exchanges: update-products 1269

* Exchanges: update-products 1273

* Exchanges: update-products 1275

* Exchanges: update-products 1277

* Exchanges: update-products 1279

* Exchanges: update-products 1281

* Exchanges: update-products 1284

* Fix issue #1664: Error 'Invalid end time.' on Poloniex (#1666)

For some reason the opts.offset is void, so I patched the code to use the default value in these cases.

* Discord has been removed

* Update README.md

* Stop complaint flood

* Exchanges: update-products 1290

* Exchanges: update-products 1292

* Exchanges: update-products 1296

* fix(package): update ws to version 6.0.0 (#1668)

* Exchanges: update-products 1299

* Exchanges: update-products 1301

* Exchanges: update-products 1303

* Exchanges: update-products 1305

* Exchanges: update-products 1307

* Exchanges: update-products 1309

* Exchanges: update-products 1311

* Exchanges: update-products 1313

* Exchanges: update-products 1315

* Exchanges: update-products 1317

* Exchanges: update-products 1319

* Exchanges: update-products 1321

* Exchanges: update-products 1323

* Exchanges: update-products 1325

* Exchanges: update-products 1327

* Exchanges: update-products 1329

* Exchanges: update-products 1333

* fix(package): update jasmine to version 3.2.0 (#1676)

* fix(package): update postcss-loader to version 3.0.0 (#1675)

* fix(package): update style-loader to version 0.22.1 (#1677)

Closes #1674

* Exchanges: update-products 1344

* Exchanges: update-products 1346

* Exchanges: update-products 1348

* Exchanges: update-products 1350

* Exchanges: update-products 1352

* Exchanges: update-products 1354

* Exchanges: update-products 1356

* Exchanges: update-products 1358

* Exchanges: update-products 1360

* Exchanges: update-products 1362

* Exchanges: update-products 1364

* Exchanges: update-products 1366

* Exchanges: update-products 1368

* Exchanges: update-products 1370

* Exchanges: update-products 1373

*  Modified to support Binance MIN_NOTIONAL Filter (#1687)

* Fix issue #1664: Error 'Invalid end time.' on Poloniex

For some reason the opts.offset is void, so I patched the code to use the default value in these cases.

* Fixed wrong max_size for ADABTC pair.

* Fixed EOSETH Pair.

* Revert "Fixed EOSETH Pair."

This reverts commit ca3cb18fb9b138a8c167ca8f94cb09c421abb03a.

* Modified to support MIN_NOTIONAL Filter.
Order must be over MIN_NOTIONAL value, so I have modified the script to set min_size a little over MIN_NOTIONAL when it is below.

* Update Products with MIN_NOTIONAL filter

* Exchanges: update-products 1378

* Exchanges: update-products 1381

* RSI, oversold start optimization (#1691)

* Update strategy.js

Correct code proposed in the second pull request.
This code is tested and works, actually I'm using whit this modifications and all works ok.
Sorry again for my error.

* Optimized RSI

Adding validation before execute all the conditionals

* Optimization RSI

Adding validation before execute all the conditionals

* Optimization RSI strategy

* Optimization RSI strategy

* Exchanges: update-products 1384

* Fixed max_size. The script was taking maxPrice instead of maxQty. (#1692)

* Fix issue #1664: Error 'Invalid end time.' on Poloniex

For some reason the opts.offset is void, so I patched the code to use the default value in these cases.

* Fixed wrong max_size for ADABTC pair.

* Fixed EOSETH Pair.

* Revert "Fixed EOSETH Pair."

This reverts commit ca3cb18fb9b138a8c167ca8f94cb09c421abb03a.

* Modified to support MIN_NOTIONAL Filter.
Order must be over MIN_NOTIONAL value, so I have modified the script to set min_size a little over MIN_NOTIONAL when it is below.

* Update Products with MIN_NOTIONAL filter

* Fixed max_size. The script was taking maxPrice instead of maxQty.

* Revert "Fixed max_size. The script was taking maxPrice instead of maxQty."

This reverts commit 9dbaa3266af0d3c3f7cab4da789e0c684777b406.

* Fixed max_size. The script was taking maxPrice instead of maxQty.

* Exchanges: update-products 1389

* Exchanges: update-products 1396

* fix(package): update style-loader to version 0.23.0 (#1695)

* Fixed to make proper use of the MIN_NOTIONAL parameter. (#1693)

* Fix issue #1664: Error 'Invalid end time.' on Poloniex

For some reason the opts.offset is void, so I patched the code to use the default value in these cases.

* Fixed wrong max_size for ADABTC pair.

* Fixed EOSETH Pair.

* Revert "Fixed EOSETH Pair."

This reverts commit ca3cb18fb9b138a8c167ca8f94cb09c421abb03a.

* Modified to support MIN_NOTIONAL Filter.
Order must be over MIN_NOTIONAL value, so I have modified the script to set min_size a little over MIN_NOTIONAL when it is below.

* Update Products with MIN_NOTIONAL filter

* Fixed max_size. The script was taking maxPrice instead of maxQty.

* Revert "Fixed max_size. The script was taking maxPrice instead of maxQty."

This reverts commit 9dbaa3266af0d3c3f7cab4da789e0c684777b406.

* Fixed max_size. The script was taking maxPrice instead of maxQty.

* Fixed to make proper use of the MIN_NOTIONAL.
The parameter MIN_NOTIONAL was being used wrong.
Now it is fixed to do the right calculations: https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md

* fix(package): update babel-loader to version 8.0.0 (#1697)

* Exchanges: update-products 1401

* Exchanges: update-products 1403

* Exchanges: update-products 1407

* Exchanges: update-products 1409

* fix(package): update bitfinex-api-node to version 2.0.0 (#1698)

* Exchanges: update-products 1412

* Exchanges: update-products 1414

* Exchanges: update-products 1416

* Exchanges: update-products 1418

* Exchanges: update-products 1420

* Exchanges: update-products 1422

* Exchanges: update-products 1424

* Exchanges: update-products 1426

* Exchanges: update-products 1442

* Exchanges: update-products 1442

* Exchanges: update-products 1453

* Greenkeeper/ccxt 1.17.280 (#1708)

* chore(package): update ccxt to version 1.17.280

* chore(package): update lockfile package-lock.json

* Update stats-lite to the latest version 🚀 (#1706)

* fix(package): update stats-lite to version 2.2.0

* chore(package): update lockfile

* Exchanges: update-products 1469

* Exchanges: update-products 1469

* Exchanges: update-products 1483

* Exchanges: update-products 1491

* Exchanges: update-products 1500

* Exchanges: update-products 1507

* Exchanges: update-products 1516

* Exchanges: update-products 1524

* Exchanges: update-products 1524

* Update resolve-url-loader to the latest version 🚀 (#1709)

* fix(package): update resolve-url-loader to version 3.0.0

* chore(package): update lockfile package-lock.json

* Update pushbullet to the latest version 🚀 (#1710)

* fix(package): update pushbullet to version 2.3.0

* chore(package): update lockfile package-lock.json

* Greenkeeper/ccxt 1.17.321 (#1713)

* chore(package): update ccxt to version 1.17.321

* chore(package): update lockfile package-lock.json

* Exchanges: update-products 1540

* Exchanges: update-products 1540

* Exchanges: update-products 1548

* Exchanges: update-products 1548

* Exchanges: update-products 1560

* Exchanges: update-products 1568

* Exchanges: update-products 1571

* Exchanges: update-products 1578

* Exchanges: update-products 1585

* Exchanges: update-products 1585

* Exchanges: update-products 1590

* Exchanges: update-products 1598

* Exchanges: update-products 1598

* Exchanges: update-products 1605

* Exchanges: update-products 1605

* Greenkeeper/ccxt 1.17.360 (#1720)

* chore(package): update ccxt to version 1.17.360

* chore(package): update lockfile package-lock.json

* Greenkeeper/babel loader 8.0.4 (#1721)

* chore(package): update babel-loader to version 8.0.4

* chore(package): update lockfile package-lock.json

* Greenkeeper/husky 1.0.1 (#1722)

* fix(package): update husky to version 1.0.1

Closes #1718

* chore(package): update lockfile package-lock.json

* Exchanges: update-products 1618

* fixing vulnerabilities in repo (#1723)