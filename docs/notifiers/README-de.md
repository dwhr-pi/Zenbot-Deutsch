## Benachrichtigungen

Zenbot verwendet verschiedene Benachrichtigungen, um Sie über die Aktionen des Bots auf dem Laufenden zu halten. 
Wir senden derzeit eine Benachrichtigung über ein Kauf- und ein Verkaufssignal.

### XMPP

Geben Sie Zenbot Ihre XMPP-Anmeldeinformationen ein, und Zenbot sendet Benachrichtigungen, indem Sie eine Verbindung zu Ihrem XMPP herstellen, die Benachrichtigung senden und die Verbindung trennen. 
https://xmpp.org/

### Pushbullet

Geben Sie Zenbot Ihren API-Schlüssel und Ihre Geräte-ID an, und Zenbot sendet Benachrichtigungen an Ihr Gerät. 
https://www.pushbullet.com/

### IFTTT

Geben Sie Zenbot Ihren IFTTT-Herstellerschlüssel an, und Zenbot sendet Benachrichtigungen an Ihren IFTTT.
https://ifttt.com/maker_webhooks

### Slack

Versorgen Sie Zenbot mit einem Webhook-URI, und Zenbot sendet Benachrichtigungen an Ihren Webhook.
https://slack.com/

### Discord

Geben Sie Zenbot Ihre Discord-Webhook-ID und Ihr Webhook-Token an, und Zenbot sendet Benachrichtigungen an Ihren Discord-Kanal.

So fügen Sie einem Discord-Kanal einen Webhook hinzu: 
https://support.discordapp.com/hc/en-us/articles/228383668

### Prowl

Versorgen Sie Zenbot mit Ihrem Prowl-API-Schlüssel, und Zenbot sendet Benachrichtigungen an Ihre Prowl-fähigen Geräte.
https://www.prowlapp.com/

### Textbelt

Geben Sie Zenbot Ihren Textbelt-API-Schlüssel und Zenbot sendet SMS-Benachrichtigungen an Ihr Mobiltelefon. 
https://www.textbelt.com/

### Pushover

Versorgen Sie Zenbot mit Ihrem API-Token und Benutzerschlüssel. Zenbot sendet Benachrichtigungen an Ihr Gerät.
https://pushover.net/

### Telegram

Versorgen Sie Zenbot mit Ihrem Telegramm-Bot-Token und Ihrer Chat-ID, und Zenbot sendet Benachrichtigungen an Ihren Telegramm-Chat.
https://telegram.org/

## Ab hier eigene Seite für Telegram erstellen.

Wärend die Einrichtung mit @BotFather noch ganz einfach wirkt. (Vorsicht, es gibt auch gefälschte BotFather in Telegram, die in der Regel nichts können.) Den Namen für den Bot festlegen, Bild hochladen und irgendwann steht in einem Meldefenster: token und der Text. "You can use this token to access HTTP API:", mit einer darunter befindlichen Zeile, mit Zahlen, Buchstaben, einem Doppelpunkt und einem Bindestrich. Das ist der "TELEGRAM-BOT-TOKEN". Leider ist es Problematisch danach die notwendige "Chat ID" zu bekommen.
Fehlermeldungen wie die nachfolgenden sind üblich. 
```
error: telegram notification {ok: false, error_code: 400, description: 'Bad Request: chat not found'}

error: telegram notification
{
  ok: false,
  error_code: 400,
  description: 'Bad Request: chat not found'
}
```
Nachdem Sie einen Bot erstellt haben, müssen Sie auch eine Gruppe und einen Kanal erstellen. In beiden fügen Sie den erstellten Bot als administratives Mitglied hinzu. 

Um diesen Chat Fehler zu vermeiden, geben Sie bei installiertem Telegram Desktop auf dem PC in Ihrem Browser die nachfolgende Zeile ein. Ersetzen Sie hierbei <BOTTOKEN> mit dem TELEGRAM-BOT-TOKEN und bei @YourNewChannelName setzen Sie Ihren Kanalnamen ein. 

```
https://api.telegram.org/bot<BOTTOKEN>/sendMessage?chat_id=@YourNewChannelName&text=FirstMessage
```

Sie erhalten dann im Browserfenster eine lange Zeile, in der bei "id":-<CHAT_ID> angegeben steht. Dies ist die gesuchte notwendige "Chat ID". 
Und in Ihrem Kanal steht "FirstMessage" im Namen von IhrKanalName hat diese vorherige URL dies in den telegram Messenger gesendet. 
```
{"ok":true,"result":{"message_id":4,"sender_chat":{"id":-1234567890123,"title":"IhrKanalName","username":"NameIhresTraderbots","type":"channel"},"chat":{"id":-1234567890123,"title":"IhrKanalName","username":"NameIhresTraderbots","type":"channel"},"date":1618303412,"text":"FirstMessage"}}
```

Übrigens, wenn das geklappt hat und sie in die conf.js diese CHAT_ID eingegeben haben. Dann starten Sie mal mit
```
zenbot trade --manual binance.btc-usdt
```
Das Webgui wird ebenfalls dabei mit der REST-API gestartet.
Nach einiger Zeit sollten Sie nun Benachrichtigungen im Telegram Messenger von Ihrem Bot erhalten und lesen können. 
Wenn Sie nun von Ihrem Kanal das Kanalbild einfach mal abändern, erhalten Sie in dem laufendem Zenbot zwischen den Trades eine Fehlermeldung im Terminalfenster. 
```
Chat ID error: command coming from wrong chat: -123456789
```
Zenbot hat während des tradens den Zugriff gemerkt... Dies ist gefahrlos, aber beachtenswert. Haben Sie diese Fehlermeldung gelesen, dann kann es weiter gehen. 
Um nun endlich an die CHAT_ID des Bots zu gelangen, schreiben Sie einfach mal "Hallo" in Ihren Bot und nicht wieder "/start". 
Auch das sollte Zenbot im Terminalfenster bemerkt haben und gibt nun eine Zahl ohne dem Minus vorne anstehen, diese Zahl stellt die CHAT_ID von Ihrem Chatbot da. 

```
Chat ID error: command coming from wrong chat: 987654321
```
Versuchsweise können Sie diese CHAT_ID in der Conf.js Datei verwenden und Zenbot mit dem trade --manual gefahrlos testen und starten. 
Jetzt wird alles in den Telegrambot gepostet. 
Sie können jetzt auch Trader Befehle an Zenbot über den eigenen Telegrambot senden. 
Versuchen Sie hierzu die Taste "l", dann erhalten Sie eine kleine Hilfedatei in Ihrem Telegrambot, mit weiteren abgekürzten Befehlen. 
Dies würde ich Ihnen aber nicht empfehlen beizubehalten. Da der Bot von jedem gesucht, gefunden und angesteuert werden kann. Befindet sich dieser Bot stattdessen wieder in dem Kanal, so werden diese Befehle nicht interpretiert. 

### ADAMANT Messenger

Geben Sie Zenbot die ADM-Adressen der Empfänger, die PassPhrase des Absenderkontos und die Knotenliste an, und Zenbot sendet Benachrichtigungen an ADAMANT-Chats.
https://adamant.im/
