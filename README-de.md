![zenbot logo](assets/logo.png)

> Um dem Pfad zu folgen: “Schauen Sie zum Meister, folgen Sie dem Meister, gehen Sie mit dem Meister, sehen Sie durch den Meister und werden Sie der Meister.”
> – Zenbot-Sprichwort

# Zenbot Deutsch [![Build/Test Status](https://travis-ci.org/DeviaVir/zenbot.svg?branch=master)](https://travis-ci.org/DeviaVir/zenbot) 

Diese deutschsprachige Version v4.1.0.1 von Zenbot entspricht der englischen original Version v4.1.0 von [DeviaVir](https://github.com/DeviaVir/zenbot).

## Mein Update
Für die Abhängigkeit "ccxt" wurde in package-lock.json von Version "1.33.64" auf Version "1.40.1" geändert und aktuallisiert. 
Die original Abhängigkeit steht in der Datei "package-lock-org.json" weiterhin und dient als Backup. 
Weitere Versionen von "ccxt" unter "https://registry.npmjs.org/ccxt/" aufindbar. 

## MongoDB - Das Problem auf dem Raspbian!

HIER: https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/


Installation Möglichkeiten unter: "https://docs.mongodb.com/manual/administration/install-on-linux/"
Debian: MongoDB 5.0 https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/  
MongoDB 4.2 https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-debian/
https://www.google.com/search?q=mongodb+install+linux+raspbian&sxsrf=AOaemvIIuQNQartxXTzQNSTf9M2QBRyyRA%3A1634604971023&ei=qxduYYp9zpKXBOzCtLAE&ved=0ahUKEwjK_pSFotXzAhVOyYUKHWwhDUYQ4dUDCA4&uact=5&oq=mongodb+install+linux+raspbian&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEBYQHjoHCAAQRxCwAzoHCAAQsAMQQzoFCAAQywE6CAgAEBYQChAeOggIIRAWEB0QHkoECEEYAFDUpA9Yz8IPYPvHD2gBcAJ4AIABXogB6QWSAQE5mAEAoAEByAEKwAEB&sclient=gws-wiz

`Die Unbuntu Version funktioniert auch auf Debian!`
https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-ubuntu/
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

`Ubuntu 18.04 (Bionic)`
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
Ubuntu 16.04 (Xenial)
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update

`Entweder`
sudo apt-get install -y mongodb-org
ODER
sudo apt-get install -y mongodb-org=4.2.15 mongodb-org-server=4.2.15 mongodb-org-shell=4.2.15 mongodb-org-mongos=4.2.15 mongodb-org-tools=4.2.15

sudo apt-get install -y mongodb-org=4.2.0 mongodb-org-server=4.2.0 mongodb-org-shell=4.2.0 mongodb-org-mongos=4.2.0 mongodb-org-tools=4.2.0


`HIER: https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/`
# Install the MongoDB 4.4 GPG key:
```
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```
# Add the source location for the MongoDB packages:
```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```
# Download the package details for the MongoDB packages:
```
sudo apt-get update
```
# Install MongoDB:
```
sudo apt-get install -y mongodb-org
```
# Hinweis:
Das Ausführen und Starten macht Zenbot selbst. 
Im übrigen es ist ok, das dabei Abhängigkeiten nicht installiert werden.
```
			Depends: mongodb-org-shell but it is not going to be installed
            Depends: mongodb-org-server but it is not going to be installed
            Depends: mongodb-org-mongos but it is not going to be installed
```
# Dann starten
sudo systemctl daemon-reload
sudo systemctl enable mongod
sudo systemctl start mongod

# Dann MonogDB kurz testen

```
sudo systemctl status mongod
```




HIER:
https://www.heise.de/tipps-tricks/DEB-in-Debian-Systemen-installieren-so-klappt-s-4926444.html


```
sudo apt install /PFAD/ZUR/DATEI/NAMEDESPAKETS.deb

sudo apt install /root/mongodb-org_4.2.0_arm64.deb.deb
```





## Beschreibung

Zenbot ist ein Befehlszeilenbasierender-Kryptowährungs-Handelsbot, der dazu Node.js und die MongoDB verwendet. Es verfügt über:

- Vollautomatischer, auf technischen Analysen basierender Handelsansatz.
- Mit vollständiger Unterstützung für Binance, Bitfinex, Bitstamp, Bittrex, CEX.IO, GDAX, Gemini, HitBTC, Kraken, Poloniex, QuadrigaCX und TheRockTrading. Und funktioniert mit weiteren diversen Börsen [Exchanges]. Deren vollständige Unterstützung ist allerdings noch nicht abgeschlossen.
- Plugin-Architektur zur Implementierung der Exchangeunterstützung oder zum Schreiben neuer Strategien.
- Simulator für Backtesting-Strategien oder als Zip Backtesting-Strategien oder auf GitHub Backtesting-Strategien gegen historische Daten.
- Der Handelsmodus "Papier" arbeitet mit einem simulierten Kontostand, während Sie den Live-Markt beobachten.
- Konfigurierbare Verkaufsstopps, Kaufstopps und (nachlaufende) Gewinnstopps.
- Flexibler Stichprobenzeitraum und Handelshäufigkeit - durchschnittlich 1-2 Trades/Tag mit 1h Zeitraum, 15-50/Tag mit 5m Zeitraum.

## Haftungsausschluss

- Zenbot is NOT a sure-fire profit machine. Use it AT YOUR OWN RISK.
- Crypto-currency is still an experiment, and therefore so is Zenbot. Meaning, both may fail at any time.
- Running a bot, and trading in general requires careful study of the risks and parameters involved. A wrong setting can cause you a major loss.
- Never leave the bot un-monitored for long periods of time. Zenbot doesn't know when to stop, so be prepared to stop it if too much loss occurs.
- Often times the default trade parameters will underperform vs. a buy-hold strategy, so run some simulations and find the optimal parameters for your chosen exchange/pair before going "all-in".

- Zenbot ist KEINE sichere Gewinnmaschine. Verwendung nur auf eigenes Risiko!
- Kryptowährung ist immer noch ein Experiment, und Zenbot auch. Das heißt, beide können jederzeit fehlschlagen.
- Das Ausführen eines Bots und das Handeln im Allgemeinen erfordern eine sorgfältige Untersuchung, der damit verbundenen Risiken und Parameter. Eine falsche Einstellung kann zu erheblichen Verlusten führen.
- Lassen Sie den Bot niemals eine längere Zeit unbeaufsichtigt. Zenbot weiß nicht, wann er aufhören soll. Seien Sie also bereit dies zu stoppen, wenn zu viel Verlust aufkommt.
- Oft sind die Standard-Handelsparameter im Vergleich zu einer Buy-Hold-Strategie unterdurchschnittlich. Führen Sie daher einige Simulationen durch und finden Sie die optimalen Parameter für die von Ihnen gewählten exchange/pair-Paar (Börse/Währungspaar), bevor Sie "All-in" gehen.

## Dokumentation

Die ausführliche Dokumentation befindet sich im docs-Ordner oder auf GitHub [docs-folder](docs/)-Ordner. .

### Fragen

Schauen Sie sich zuerst die [docs](docs/)-Dokumente an und es gibt auch [FAQs](docs/FAQ-de.md), die Ihre Fragen beantworten können. Wenn nicht, stellen Sie bitte (Programmier-) Fragen in Englischer Sprache zu Zenbot auf Reddit ([subreddit zenbot](https://reddit.com/r/zenbot)).

### Gemeinschaft

Treten Sie der [Zenbot-Community auf Reddit](https://reddit.com/r/zenbot) in Englischer Sprache bei!

## Spenden

PS: Einige haben gefragt, wie sie für die Zenbot-Entwicklung spenden können. Wir akzeptieren Spenden an die folgenden **Bitcoin-Adressen**:

### carlos8f's BTC (ursprünglicher Zenbot-Autor)

`187rmNSkSvehgcKpBunre6a5wA5hQQop6W`

### DeviaVir's BTC (aktueller Betreuer)

`3A5g4GQ2vmjNcnEschCweJJB4umzu66sdY`

### DWHR-Pi's BTC (aktueller Deutscher Übersetzer)

`17aJRRkpwAUHjFSrV9VqFv3ikLMM9n7drb

![zenbot logo](assets/zenbot_square.png)

Thanks!

## Bemerkenswerte Forks (Gabelungen)

- [bot18](https://medium.com/@carlos8f_11468/introducing-bot18-the-new-crypto-trading-bot-to-supersede-zenbot-and-unleash-the-zalgo-da8464b41e53)
- [magic8bot](https://github.com/notVitaliy/magic8bot)

- - -

## Lizenz: MIT

- Copyright (C) 2018 Carlos Rodriguez
- Copyright (C) 2018 Terra Eclipse, Inc. (http://www.terraeclipse.com/)

Hiermit wird jeder Person, die eine Kopie dieser Software und der zugehörigen Dokumentationsdateien (die &quot;Software&quot;) erhält, kostenlos die Erlaubnis erteilt, uneingeschränkt mit der Software umzugehen. 
Einschließlich, jedoch nicht beschränkt auf die Rechte zur Nutzung, zum Kopieren, Ändern, Zusammenführen, veröffentlichen, vertreiben, unterlizenzieren und/oder verkaufen Kopien der Software und erlaubten Personen, denen die Software zur Verfügung gestellt wird, dies unter den folgenden Bedingungen: 

Der obige Urheberrechtshinweis und dieser Erlaubnishinweis sind in allen Kopien oder wesentlichen Teilen der Software enthalten.

DIE SOFTWARE WIRD &quot;WIE GESEHEN&quot; OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG ZUR VERFÜGUNG GESTELLT. 
EINSCHLIESSLICH DER GEWÄHRLEISTUNG FÜR MARKTGÄNGIGKEIT, EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND NICHTVERLETZUNG. 
IN KEINEM FALL HAFTEN DIE AUTOREN ODER COPYRIGHT-INHABER FÜR JEGLICHE ANSPRÜCHE, SCHÄDEN ODER ANDERE HAFTUNGEN, OB VERTRAGS-, TORT- ODER ANDERWEITIGE MASSNAHMEN AUS, AUS ODER IM ZUSAMMENHANG MIT DER SOFTWARE ODER DER NUTZUNG ODER ANDEREN ANGEBOTE SOFTWARE.
