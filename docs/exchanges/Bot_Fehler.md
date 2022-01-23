# The crypto bot's most common errors

## Binance

__Filter failure: MIN_NOTIONAL__ - Your first order does not exceed the minimum set by Binance. You should increase the amount of the extra order or your first order. $11 is usually enough. The fixed-value option will help you set the first order amount in a more accurate way.

__The account has got insufficient balance for requested action__ 

* If the error occurs in the very beginning, it means you don’t have enough funds to start a trading deal;
* If the error occurs at the take-profit stage, after the first order had been executed, it means that the trading bot can’t sell the amount of coins that were originally bought. This can happen if the fee was partially paid in certain coins. In your future transactions, allow the crypto bot to buy coins for fees or pay it directly on Binance in Binance Coin (BNB). To fix this, you need to buy the minimum amount of traded coins, unfreeze the cryptocurrency bot and reset Take Profit.  

__Invalid API-key, IP, or permissions for action__ - API keys or exchange permissions are set wrong.

__Market is closed__ - the pair is not trading due to maintenance or it was delisted.


## HitBTC

__Insufficient funds to place an order__ - Your first order does not exceed the minimum set by the HitBTC exchange. It is necessary to increase the amount of the first or extra order. $11 is usually enough. 

__Error placing Extra order Error create newBuyOrder (Order rejected). orderExceedsLimit__ - The crypto trading bot was unable to place an extra order due to lack of funds.

__Error create newBuyOrder (Order rejected). orderExceedsLimit__ - Not enough funds to start a deal.

__Error placing Extra order Error create newBuyOrder (InvalidRequest). Connection error__ - Connection error, no need to worry, just restart the bot after a few minutes.

__Error create TakeProfit order (Order rejected). orderExceedsLimit__ - It means that the bot can’t sell the amount of coins that were originally bought. This could happen if the fee was partially paid with certain coins. In your future transactions, allow the cryptocurrency bot to buy coins to pay fees. To fix this, you need to buy the minimum amount of traded coins, unfreeze the bot and reset Take Profit.

__cURL error 7: Failed to connect__ - Failed to connect to the cryptocurrency exchange. Try again in a couple minutes.

__Error canceling Extra order Can’t cancel order (Reject Exception)__ - Failed to cancel the order.


## Bittrex

__MIN_TRADE_REQUIREMENT_NOT_MET or DUST_TRADE_DISALLOWED__ - Your first order does not exceed the minimum set by Bittrex exchange. It is necessary to increase the amount of the first or extra order. The fixed-value option will help you set the first order amount in a more accurate way. 

__Error placing Extra order INSUFFICIENT_FUNDS or DUST_TRADE_DISALLOWED_MIN_VALUE Volume:__

* The bot was unable to place an extra order due to lack of funds.
* The order does not meet the Bittrex minimum volume requirement.

__INSUFFICIENT_FUNDS__ - You do not have enough coins to place an order. 


## Bitfinex

__Invalid order: minimum size for BCH/BTC is__ - Your first order does not exceed the minimum set by Bitfinex. It is necessary to increase the amount of the first or extra order. $11 is usually enough. 

__Nonce is too small__ - Too many trading bots on one access point can be the reason for this error. If it happens too often, please change API key. Please, contact support if the error keeps on repeating.


## Other

__Maximum number of active bots is limited at this access point__ - The number of crypto trading bots on the current access point is capped. Please increase the maximum amount of bots in the access point options or create a new one.

__UNKNOWN_ORDER, Error new order, unknown order sent__ - Exchange connection error. Please, contact support if the errors happens too often.

__Way too many requests; IP banned__ - No need to worry, everything will be fixed in a few minutes