// Diese Datei ist die ursprüngliche "conf-sample.js"-Datei übersetzt in die Deutsche Sprache. 
// Wenn Sie in dieser Datei Änderungen vornehmen und nutzen wollen, dann verwenden Sie den "cp conf-sample-de.js conf.js" Befehl und die conf.js Datei um Ändernugen vorzu nehmen. 

var c = module.exports = {}

// // Mongo Konfiguration
c.mongo = {}
c.mongo.db = process.env.ZENBOT_MONGODB_DATABASE || 'zenbot4'

// Muss entweder `c.mongo.connectionString` ODER `c.mongo.host,port,username,password` angeben. 
c.mongo.connectionString = process.env.ZENBOT_MONGODB_CONNECTION_STRING || null

// Folgendes wird nicht benötigt, wenn `c.mongo.connectionString` bereitgestellt wird:
c.mongo.host = process.env.ZENBOT_MONGODB_HOST || 'localhost'
c.mongo.port = process.env.ZENBOT_MONGODB_PORT || 27017
c.mongo.username = process.env.ZENBOT_MONGO_USERNAME || null
c.mongo.password = process.env.ZENBOT_MONGO_PASSWORD || null
// Wenn Sie die Mongodb-Replikation verwenden, d. h. wenn Sie einen Mongodb-Cluster ausführen, können Sie hier Ihren Replikationssatz definieren. 
// Wenn Sie keine Replikation verwenden (die meisten Benutzer), setzen Sie sie einfach auf `null` (Standard).
c.mongo.replicaSet = process.env.ZENBOT_MONGO_REPLICASET || null
c.mongo.authMechanism = process.env.ZENBOT_MONGO_AUTH_MECHANISM || null

// Standardauswahl. Wird nur verwendet, wenn das Argument [selector] in einem Befehl weggelassen wird.
c.selector = process.env.ZENBOT_DEFAULT_SELECTOR || 'gdax.BTC-USD'
// Name der Standardhandelsstrategie
c.strategy = process.env.ZENBOT_DEFAULT_STRATEGY || 'trend_ema'

// API-Schlüssel festlegen:

// Um den GDAX-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.gdax = {}
c.gdax.key = process.env.ZENBOT_GDAX_API_KEY || 'IHR-API-SCHLÜSSEL'
c.gdax.b64secret = process.env.ZENBOT_GDAX_B64_SECRET || 'IHR-API-GEHEIMNIS'
c.gdax.passphrase = process.env.ZENBOT_GDAX_PASSPHRASE || 'IHRE-API-PASSPHRASE'

// Um den Poloniex-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.poloniex = {}
c.poloniex.key = process.env.ZENBOT_POLONIEX_API_KEY || 'IHR-API-SCHLÜSSEL'
c.poloniex.secret = process.env.ZENBOT_POLONIEX_SECRET || 'IHR-API-GEHEIMNIS'
// please note: poloniex does not support market orders via the API

// Um den Kraken-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.kraken = {}
c.kraken.key = process.env.ZENBOT_KRAKEN_API_KEY || 'IHR-API-SCHLÜSSEL'
c.kraken.secret = process.env.ZENBOT_KRAKEN_SECRET || 'IHR-API-GEHEIMNIS'
// Please read API TOS on https://www.kraken.com/u/settings/api
c.kraken.tosagree = process.env.ZENBOT_KRAKEN_TOS_AGREE || 'disagree'

// Um den Binance-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.binance = {}
c.binance.key = process.env.ZENBOT_BINANCE_API_KEY || 'IHR-API-SCHLÜSSEL'
c.binance.secret = process.env.ZENBOT_BINANCE_SECRET || 'IHR-API-GEHEIMNIS'

// Um den Bittrex-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.bittrex = {}
c.bittrex.key = process.env.ZENBOT_BITTREX_API_KEY || 'IHR-API-SCHLÜSSEL'
c.bittrex.secret = process.env.ZENBOT_BITTREX_SECRET || 'IHR-API-GEHEIMNIS'
// make sure to give your API key access to only: "Trade Limit" and "Read Info",
// please note that this might change in the future.
// please note that bittrex API is limited, you cannot use backfills or sims (paper/live trading only)

// Um den Bitfinex-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.bitfinex = {}
c.bitfinex.key = process.env.ZENBOT_BITFINEX_API_KEY || 'IHR-API-SCHLÜSSEL'
c.bitfinex.secret = process.env.ZENBOT_BITFINEX_SECRET || 'IHR-API-GEHEIMNIS'
// May use 'exchange' or 'margin' wallet balances
c.bitfinex.wallet = process.env.ZENBOT_BITFINEX_WALLET || 'exchange'

// Um den Bitstamp-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.bitstamp = {}
c.bitstamp.key = process.env.ZENBOT_BITSTAMP_API_KEY || 'IHR-API-SCHLÜSSEL'
c.bitstamp.secret = process.env.ZENBOT_BITSTAMP_SECRET || 'IHR-API-GEHEIMNIS'
// A client ID is required on Bitstamp
c.bitstamp.client_id = process.env.ZENBOT_BITSTAMP_CLIENT_ID || 'YOUR-CLIENT-ID'

// Um den CEX.IO-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.cexio = {}
c.cexio.username = process.env.ZENBOT_CEXIO_CLIENT_ID || 'YOUR-CLIENT-ID'
c.cexio.key = process.env.ZENBOT_CEXIO_API_KEY || 'IHR-API-SCHLÜSSEL'
c.cexio.secret = process.env.ZENBOT_CEXIO_SECRET || 'IHR-API-GEHEIMNIS'

// Um QuadrigaCX-Tranding zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.quadriga = {}
c.quadriga.key = process.env.ZENBOT_QUADRIGA_API_KEY || 'IHR-API-SCHLÜSSEL'
// Dies ist der manuelle geheime Schlüssel, der durch Bearbeiten des API-Zugriffs eingegeben wird.
// und NICHT der md5-Hash, den Sie in der Zusammenfassung sehen.
c.quadriga.secret = process.env.ZENBOT_QUADRIGA_SECRET || 'IHR-API-GEHEIMNIS'
// Ersetze durch die Client-ID, die bei der Anmeldung verwendet wird, als Zeichenfolge, nicht als Nummer.
c.quadriga.client_id = process.env.ZENBOT_QUADRIGA_CLIENT_ID || 'YOUR-CLIENT-ID'

// Um den WEX.NZ-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
// Hinweis: WexNZ unterstützt nur das Auffüllen des Geldautomaten der letzten ~ 1/4 Tage.
c.wexnz = {}
c.wexnz.key = process.env.ZENBOT_WEXNZ_API_KEY || 'IHR-API-SCHLÜSSEL'
c.wexnz.secret = process.env.ZENBOT_WEXNZ_SECRET || 'IHR-API-GEHEIMNIS'

// Um den Gemini-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.gemini = {}
c.gemini.key = process.env.ZENBOT_GEMINI_API_KEY || 'IHR-API-SCHLÜSSEL'
c.gemini.secret = process.env.ZENBOT_GEMINI_SECRET || 'IHR-API-GEHEIMNIS'
// set to false to trade on the live platform API
c.gemini.sandbox = process.env.ZENBOT_GEMINI_SANDBOX || true

// Um den HitBTC-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.hitbtc = {}
c.hitbtc.key = process.env.ZENBOT_HITBTC_API_KEY || 'IHR-API-SCHLÜSSEL'
c.hitbtc.secret = process.env.ZENBOT_HITBTC_SECRET || 'IHR-API-GEHEIMNIS'

// Um den Therock-Handel zu aktivieren, geben Sie Ihre API-Anmeldeinformationen ein:
c.therock = {}
c.therock.key = process.env.ZENBOT_THEROCK_API_KEY || 'IHR-API-SCHLÜSSEL'
c.therock.secret = process.env.ZENBOT_THEROCK_SECRET || 'IHR-API-GEHEIMNIS'

// Optionale Stop-Order-Trigger:

// verkaufen, wenn der Preis unter diesen% des gekauften Preises fällt (0 zum Deaktivieren).
c.sell_stop_pct = process.env.ZENBOT_SELL_STOP_PCT || 0
// kaufen, wenn der Preis über diesen% des Verkaufspreises steigt (0 zum Deaktivieren).
c.buy_stop_pct = process.env.ZENBOT_BUY_STOP_PCT || 0
// Trailing Sell Stop aktivieren, wenn dieser% Gewinn erreicht ist (0 zum Deaktivieren).
c.profit_stop_enable_pct = process.env.ZENBOT_PROFIT_STOP_ENABLE_PCT || 0
// einen Trailing Stop dieses % unter der Hochwassermarke des Gewinns beibehalten.
c.profit_stop_pct = process.env.ZENBOT_PROFIT_STOP_PCT || 1

// Ausführungsregeln für Bestellungen:

// Vermeiden Sie den Handel mit einem Schlupf über diesem Prozentwert (pct)
c.max_slippage_pct = process.env.ZENBOT_MAX_SLIPPAGE_PCT || 5
// kaufe mit diesem % des Währungssaldos. (WARNUNG: sim funktioniert nicht richtig, wenn du diesen Wert auf 100 setzt)
c.buy_pct = process.env.ZENBOT_BUY_PCT || 99
// Mit diesem Prozentsatz des Guthabens verkaufen. (WARNUNG: sim funktioniert nicht richtig, wenn Sie diesen Wert auf 100 setzen)
c.sell_pct = process.env.ZENBOT_SELL_PCT || 99
// ms, um die nicht ausgefüllte Reihenfolge danach anzupassen.
c.order_adjust_time = process.env.ZENBOT_ORDER_ADJUST_TIME || 5000
// Vermeiden Sie den Verkauf mit einem Verlust unter diesem Wert, der auf 0 gesetzt ist, um einen Verkauf zu einem höheren Preis zu gewährleisten ...
c.max_sell_loss_pct = process.env.ZENBOT_MAX_SELL_LOSS_PCT || 99
// Vermeiden Sie den Kauf mit einem Verlust über diesem pct, der auf 0 gesetzt ist, um sicherzustellen, dass Sie zu einem niedrigeren Preis kaufen ...
c.max_buy_loss_pct = process.env.ZENBOT_MAX_BUY_LOSS_PCT || 99
// ms, um den Auftragsstatus abzufragen.
c.order_poll_time = process.env.ZENBOT_ORDER_POLL_TIME || 5000
// ms, um auf die Abrechnung zu warten. (nach einer Auftragsstornierung)
c.wait_for_settlement = process.env.ZENBOT_WAIT_FOR_SETTLEMENT || 5000
// %, um den Kaufpreis für Bestellungen zu notieren.
c.markdown_buy_pct = process.env.ZENBOT_MARKDOWN_BUY_PCT || 0
// %, um den Verkaufspreis für Bestellungen zu erhöhen
c.markup_sell_pct = process.env.ZENBOT_MARKUP_SELL_PCT || 0
// Marktteilnehmer `taker` (hohe Gebühren) oder Market Maker `maker` (niedrige Gebühren) werden.
c.order_type = process.env.ZENBOT_ORDER_TYPE || 'maker'
// Wenn dies von der Börse unterstützt wird, verwenden Sie Bestellungen vom Typ "Nur Post" mit true oder false.
c.post_only = process.env.ZENBOT_POST_ONLY || true
// Verwenden Sie eine separate Gebührenwährung wie die BNB von binance.
c.use_fee_asset = process.env.ZENBOT_USE_FEE_ASSET || false

// Verschiedene Optionen:

// Standard # Tage für Backfill- und Sim-Befehle. 
c.days = process.env.ZENBOT_DAYS || 14
// Standardmäßig wird eine hohe Anzahl von Lookback-Perioden verwendet. 
c.keep_lookback_periods = process.env.ZENBOT_KEEP_LOOKBACK_PERIODS || 50000
// ms, um neue Trades abzufragen
c.poll_trades = process.env.ZENBOT_POLL_TRADES || 30000
// Betrag der Währung, mit der die Simulationen gestartet werden sollen.
c.currency_capital = process.env.ZENBOT_CURRENCY_CAPITAL || 1000
// Menge des Assets, mit dem Simulationen gestartet werden sollen. 
c.asset_capital = process.env.ZENBOT_ASSET_CAPITAL || 0
// für sim die Zeit am Ende des Diagramms umkehren und Kaufen/Halten (Buy/Hold) auf 0 normalisieren.
c.symmetrical = process.env.ZENBOT_SYMMETRICAL || false
// Anzahl der Perioden, in denen der RSI berechnet werden soll. 
c.rsi_periods = process.env.ZENBOT_RSI_PERIODS || 14
// Zeitraum zum Aufzeichnen von Salden für Statistiken. 
c.balance_snapshot_period = process.env.ZENBOT_BALANCE_SNAPSHOT_PERIOD || '15m'
// Durchschn. Menge an Schlupf, die auf Sim-Trades angewendet werden soll. 
c.avg_slippage_pct = process.env.ZENBOT_AVG_SLIPPAGE_PCT || 0.045
// Zeit, um eine Bestellung offen zu lassen, standardmäßig 1 Tag. (Diese Funktion wird derzeit nicht an allen Börsen unterstützt: GDAX)
c.cancel_after = process.env.ZENBOT_CANCEL_AFTER || 'day'
// frühere Trades laden und für Stop-Order-Trigger und Verlustschutz verwenden (nur Live-/Papermodus) mit true oder false. 
c.use_prev_trades = process.env.ZENBOT_USE_PREV_TRADES || false
// Mindestanzahl der zuvor zu ladenden Trades, wenn use_prev_trades aktiviert ist. Setzen Sie diese Option auf 0, um die Handelszeit zu deaktivieren und stattdessen zu verwenden. 
c.min_prev_trades = process.env.ZENBOT_MIN_PREV_TRADES || 0

// Benachrichtigungen:
c.notifiers = {}

// Verbreitung

c.notifiers.only_completed_trades = process.env.ZENBOT_NOTIFY_ONLY_COMPLETED_TRADES || false // Nach Benachrichtigungsnachrichten filtern, um Informationen zu abgeschlossenen Trades abzurufen. 

// Anfang xmpp - Konfiguration, siehe auch https://
c.notifiers.xmpp = {}
c.notifiers.xmpp.on = process.env.ZENBOT_XMPP_ENABLE || false  				// false xmpp deaktiviert; true xmpp aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.xmpp.jid = process.env.ZENBOT_XMPP_JID || 'trader@domain.com'
c.notifiers.xmpp.password = process.env.ZENBOT_XMPP_PASSWORD || ''
c.notifiers.xmpp.host = process.env.ZENBOT_XMPP_HOST || 'domain.com'
c.notifiers.xmpp.port = process.env.ZENBOT_XMPP_PORT || 5222
c.notifiers.xmpp.to = process.env.ZENBOT_XMPP_TO || 'MeMyselfAndI@domain.com'
// Ende xmpp - Konfiguration

// Anfang pushbullets - Konfiguration, siehe auch https://
c.notifiers.pushbullet = {}
c.notifiers.pushbullet.on = process.env.ZENBOT_PUSHBULLET_ENABLE || false 	// false pushbullets deaktiviert; true pushbullets aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.pushbullet.key = process.env.ZENBOT_PUSHBULLET_API_KEY || ''
c.notifiers.pushbullet.deviceID = process.env.ZENBOT_PUSHBULLET_DEVICE_ID || ''
// Ende pushbullets - Konfiguration

// Anfang ifttt - Konfiguration, siehe auch https://
c.notifiers.ifttt = {}
c.notifiers.ifttt.on = process.env.ZENBOT_IFTTT_ENABLE || false 			// false ifttt deaktiviert; true ifttt aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.ifttt.makerKey = process.env.ZENBOT_IFTTT_API_KEY || ''
c.notifiers.ifttt.eventName = process.env.ZENBOT_IFTTT_EVENT_NAME || 'zenbot'
// Ende ifttt - Konfiguration

// Anfang slack - Konfiguration, siehe auch https://
c.notifiers.slack = {}
c.notifiers.slack.on = process.env.ZENBOT_SLACK_ENABLE || false
c.notifiers.slack.webhook_url = process.env.ZENBOT_SLACK_WEBHOOK_URL || ''
// Ende slack - Konfiguration

// Anfang ADAMANT Messenger - Konfiguration, siehe auch https://
c.notifiers.adamant = {}
c.notifiers.adamant.on = process.env.ZENBOT_ADAMANT_ENABLE || false
c.notifiers.adamant.nodes = typeof process.env.ZENBOT_ADAMANT_NODES !== 'undefined' ? process.env.ZENBOT_ADAMANT_NODES.split(',') : [
  'https://endless.adamant.im',
  'https://clown.adamant.im',
  'https://bid.adamant.im',
  'https://unusual.adamant.im',
  'https://debate.adamant.im',
  'http://185.231.245.26:36666',
  'https://lake.adamant.im',
  'http://localhost:36666'
]
c.notifiers.adamant.fromPassphrase = process.env.ZENBOT_ADAMANT_FROM_PASSPHRASE || ''
c.notifiers.adamant.toAddresses = typeof process.env.ZENBOT_ADAMANT_TO_ADDRESSES !== 'undefined' ? process.env.ZENBOT_ADAMANT_TO_ADDRESSES.split(',') : ['']
// Ende ADAMANT Messenger - Konfiguration

// Anfang discord - Konfiguration, siehe auch https://
c.notifiers.discord = {}
c.notifiers.discord.on = process.env.ZENBOT_DISCORD_ENABLE || false 	// false discord deaktiviert; true discord aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.discord.id = process.env.ZENBOT_DISCORD_ID || ''
c.notifiers.discord.token = process.env.ZENBOT_DISCORD_TOKEN || ''
c.notifiers.discord.username = process.env.ZENBOT_DISCORD_USERNAME || 'Zenbot'
c.notifiers.discord.avatar_url = process.env.ZENBOT_DISCORD_AVATAR_URL || ''
c.notifiers.discord.color = process.env.ZENBOT_DISCORD_COLOR || null 	// Farbe als Dezimalzahl.
// Ende discord - Konfiguration

// Anfang prowl - Konfiguration, siehe auch https://
c.notifiers.prowl = {}
c.notifiers.prowl.on = process.env.ZENBOT_PROWL_ENABLE || false // false prowl deaktiviert; true prowl aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.prowl.key = process.env.ZENBOT_PROWL_KEY 			// Siehe auch https://
// Ende prowl - Konfiguration

// Anfang textbelt - Konfiguration, siehe auch https://
c.notifiers.textbelt = {}
c.notifiers.textbelt.on = process.env.ZENBOT_TEXTBELT_ENABLE || false 	// false textbelt deaktiviert; true textbelt aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.textbelt.phone = process.env.ZENBOT_TEXTBELT_PHONE
c.notifiers.textbelt.key = process.env.ZENBOT_TEXTBELT_KEY 				// Siehe auch https://
// Ende textbelt - Konfiguration

// Anfang pushover - Konfiguration, siehe auch https://
c.notifiers.pushover = {}
c.notifiers.pushover.on = process.env.ZENBOT_PUSHOVER_ENABLE || false 	// false pushover deaktiviert; true pushover aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.pushover.token = process.env.ZENBOT_PUSHOVER_TOKEN 			// Erstellen Sie eine Anwendung und geben Sie das Token hier ein
c.notifiers.pushover.user = process.env.ZENBOT_PUSHOVER_USER_KEY 		// Dies ist der Schlüssel des eigenen Benutzers (nicht Anwendungsbezogen).
c.notifiers.pushover.priority = process.env.ZENBOT_PUSHOVER_PRIORITY || '0' // Wählen Sie eine Priorität aus, mit der Zenbot-Nachrichten gesendet werden sollen, siehe auch https://pushover.net/api#priority
// End pushover - Konfiguration

// Anfang telegram - Konfiguration, siehe auch https://core.telegram.org/bots#3-how-do-i-create-a-bot
c.notifiers.telegram = {}
c.notifiers.telegram.on = process.env.ZENBOT_TELEGRAM_ENABLE || false 	// false telegram deaktiviert; true telegram aktiviert (Schlüsselangaben sollten korrekt sein.)
c.notifiers.telegram.interactive = process.env.ZENBOT_TELEGRAM_INTERACTIVE || false // true telegram ist interaktiv. 
c.notifiers.telegram.bot_token = process.env.ZENBOT_TELEGRAM_BOT_TOKEN || 'TELEGRAM_BOT_TOKEN' // Erstellen Sie eine Anwendung und geben Sie das Token hier ein
c.notifiers.telegram.chat_id = process.env.ZENBOT_TELEGRAM_CHAT_ID || 'TELEGRAM_CHAT_ID' // Die ID des Chats, in den die Nachrichten gesendet werden sollen, siehe auch https://core.telegram.org/bots#3-how-do-i-create-a-bot
// Ende telegram - Konfiguration

// Ausgabe
c.output = {}

// REST API
c.output.api = {}
c.output.api.on = process.env.ZENBOT_API_ENABLE || true
c.output.api.ip = process.env.ZENBOT_API_IP || '0.0.0.0' // Die IPv4- oder IPv6-Adresse zum Abhören verwendet alle verfügbaren Schnittstellen, wenn sie weggelassen wird.
c.output.api.port = process.env.ZENBOT_API_PORT || 17365
