# FAQ - Häufig gestellte Fragen

Hier sind einige häufig gestellte Fragen sowie Antworten aus der Community.

Wenn Sie eine Frage haben, die hier nicht beantwortet wird, können Sie sie gerne in der Community [Reddit] (# gibt es eine Community, um sich mit Zenbot zu beschäftigen) stellen und vorschlagen, sie hier zu platzieren.

Vielen Dank!



## Inhalt

### [Allgemein](#Allgemein-1)
* [Gibt es eine Community, die sich mit Zenbot befasst?](#Gibt-es-eine-Community-die-sich-mit-Zenbot-befasst)

### [Handel](#Handel-1)
* [Werde ich mit Zenbot Geld verdienen?](#Werde-ich-mit-Zenbot-Geld-verdienen)
* [Warum führen Simulationen, Papierhandel und Live-Handel zu unterschiedlichen Ergebnissen?](#Warum-führen-Simulationen-Papierhandel-und-Live-Handel-zu-unterschiedlichen-Ergebnissen)
* [Warum sollte ich Simulationen oder Papierhandel verwenden, wenn sie nicht den Live-Handel widerspiegeln?](#Warum-sollte-ich-Simulationen-oder-Papierhandel-verwenden-wenn-sie-nicht-den-Live-Handel-widerspiegeln)
* [Verwendet Zenbot Limit (Maker) Orders oder Market (Taker) Orders?](#Verwendet-Zenbot-Limit-Maker-Orders-oder-Market-Taker-Orders)

### [Technisches](#Technisches-1)
* [Kann ich Zenbot unter Windows installieren?](#Kann-ich-Zenbot-unter-Windows-installieren)
* [Ist Docker für die Installation von Zenbot erforderlich?](#Ist-Docker-für-die-Installation-von-Zenbot-erforderlich)
* [Wie starte ich Zenbot?](#Wie-starte-ich-Zenbot)
* [Wie aktualisiere ich Zenbot?](#Wie-aktualisiere-ich-Zenbot)

### [Fehler](#Fehler-1)
* [Warum erhalte ich immer wieder einen "Nonce" -Fehler?](#Warum-erhalte-ich-immer-wieder-den-Fehler-nonce)
* [Warum erhalte ich immer wieder den Fehler "JavaScript-Heap nicht genügend Speicher"](#Warum-erhalte-ich-immer-wieder-den-Fehler-JavaScript-Heap-nicht-genügend-Speicher)

### [Fehler](#Fehler-2)
Intressante englichsprachige Artikel auf DeviaVir zu Zenbot. 
* [ZenBot not buying/selling](https://github.com/DeviaVir/zenbot/issues/868)
* [Bot trades with loss all the time.](https://github.com/DeviaVir/zenbot/issues/189)
* []()
* []()
* []()

* [Why Zenbot can`t place buy order? Binance](https://www.reddit.com/r/zenbot/comments/cw26vn/why_zenbot_cant_place_buy_order_binance/)

## Antworten

### Allgemein

#### Gibt es eine Community, die sich mit Zenbot befasst?

Natürlich! Schauen Sie sich unsere Reddit-Community an ([subreddit zenbot](https://reddit.com/r/zenbot)).

Es gibt auch [eine freigegebene Google Text & Tabellen-Tabelle mit Community-Sim-Ergebnissen und Variablenbeschreibungen](https://docs.google.com/spreadsheets/d/1WjFKRUY4KpkdIJiA3RVvKqiyNkMe9xtgLSfYESFXk1g/edit#gid=70204991).
Oder hier die Dateien einsehen: [eine freigegebene Google Text & Tabellen-Tabelle mit Community-Sim-Ergebnissen und Variablenbeschreibungen](https://github.com/dwhr-pi/zenbot/blob/unstable/docs/ZenBot%20Simulations%20-%20Variables.zip) und diese können von dort downgeladen werden..



### Handel

#### Werde ich mit Zenbot Geld verdienen?

Das hängt davon ab… Unterschiedliche Konfigurationen und Strategien führen zu unterschiedlichen Ergebnissen.

Die aktuelle Standardkonfiguration und die aktuellen Standardparameter verlieren wahrscheinlich Geld. Gehen Sie daher vorsichtig vor. Führen Sie zuerst Simulationen und Papierhandel aus, um zu sehen, wie sich der Bot verhält (siehe Warnung unten).


#### Warum führen Simulationen, Papierhandel und "Live Handel" zu unterschiedlichen Ergebnissen?

Simulationen und Papierhandel liefern im Vergleich zum Live-Handel fast immer zu optimistische Ergebnisse. Dies liegt daran, dass sowohl Simulationen als auch der Papierhandel Annahmen darüber treffen, wann/ob ein Auftrag ausgeführt wird.

Da Zenbot standardmäßig Limit-Orders verwendet (was häufig die Gebühren senkt), kommt es im Live-Handel tendenziell zu einem viel stärkeren Ausrutschen (dem Unterschied zwischen dem Kaufentscheid des Bots und dem tatsächlichen Kauf). Aus diesem Grund ist der Live-Handel fast immer schlechter als der Handel mit Sims und Papier.

Denken Sie auch daran, dass vergangene Ergebnisse keine zukünftigen Renditen garantieren.


#### Warum sollte ich Simulationen oder Papierhandel verwenden, wenn sie nicht den "Live Handel" widerspiegeln?

Simulationen sind optimistischer als der Papierhandel.
Der Papierhandel ist optimistischer als der Live-Handel.
Wenn eine Simulation keine guten Ergebnisse liefert, besteht daher die Wahrscheinlichkeit, dass weder Papierhandel noch (im weiteren Sinne) Live-Handel stattfinden.


#### Verwendet Zenbot Limit (Maker) Orders oder Market (Taker) Orders?

Zenbot verwendet standardmäßig Limit-Orders, da Limit-Orders an den meisten Börsen zu niedrigeren Gebühren führen als Market-Orders. Zum Beispiel gibt es am GDAX keine Gebühr für einen Limit-Order-Handel im Vergleich zu einer Handelsgebühr von 0,25% (BTC) oder 0,3% (ETH & LTC) für einen Market-Order.

Überprüfen Sie Ihren Umtausch auf Gebühren.


### Technisches

#### Kann ich Zenbot unter Windows installieren?

Ja, Zenbot kann unter Windows installiert werden. Es wird jedoch empfohlen, stattdessen Linux oder MacOS zu verwenden.

Bitte beachten Sie, dass diese Anweisungen für Windows 10 gelten.

1. Installieren Sie das "Bash unter Windows-Subsystem" (weitere Informationen finden Sie unter https://msdn.microsoft.com/en-us/commandline/wsl/about).

> Hinweis: Sie können dann im Windows Store zwischen Ubuntu, Fedora und OpenSUSE wählen.

2. Öffnen Sie ein Terminalfenster. Ihre Festplatten werden nun unter `/mnt/*` gemountet. Navigieren Sie zum Beispiel zu Ihrem Verzeichnis (Beispiel: `cd /mnt/c/zenbot`)

3. Installieren Sie den Knoten (`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -; sudo apt-get install nodejs`)

4. Führen Sie zenbot wie sonst aus

> Hinweis: MongoDB funktioniert in diesem Subsystem nicht, bitte verwenden Sie dazu die Windows-Version!


#### Ist Docker für die Installation von Zenbot erforderlich?

Nein, Docker ist häufig nicht erforderlich, um Zenbot auszuführen. Es ist oft einfacher, Zenbot auf einem Linux-Computer (Debian, CentOS usw.) ohne Docker auszuführen.

Wenn Sie Zenbot unter Windows ausführen, wird möglicherweise Docker benötigt.


#### Wie starte ich Zenbot?

Nach der Installation starten Sie Zenbot über die Befehlszeile.
Beispiele:
```
./zenbot.sh backfill gdax.ETH-BTC
./zenbot.sh sim gdax.ETH-BTC --days=14
zenbot sim --days 14
```

Sie können [einen Befehl mit dieser freigegebenen Google Text & Tabellen-Tabelle generieren] (https://docs.google.com/spreadsheets/d/1HECEHW-I9Evve_FQV3LT_IWGV6FU34tHif9TEouKtfg/edit?usp=sharing).
Die Dateien sind im Zip [einen Befehl mit dieser freigegebenen Google Text & Tabellen-Tabelle generieren](https://github.com/dwhr-pi/zenbot/blob/unstable/docs/Alle%20Dateien%20-%20Zenbot%20Command%20Creator%20Update%20by%20effgee%20(Public%20Version)%20v1.1.2%20-%20Zenbot%20Command%20Creator.zip) enthalten und können von dort downgeladen werden.
Zögern Sie nicht, diese Datei auf Ihr Google-Laufwerk zu kopieren oder als Tabelle herunterzuladen, da jeder sie gleichzeitig ändern kann.


#### Wie aktualisiere ich Zenbot?

Ohne Docker:
```
git pull
npm install
./zenbot.sh trade --paper
```

Mit Docker:
```
git pull
docker-compose down
docker rmi zenbot_server
docker-compose build
docker-compose up -d
```



### Fehler

#### Warum erhalte ich immer wieder den Fehler: "Nonce"?

Dieser Fehler kann auftreten, wenn mehrere Instanzen von Zenbot mit demselben API-Schlüssel verwendet werden. Um dies zu vermeiden, verwenden Sie für jede gleichzeitige Instanz von Zenbot einen anderen API-Schlüssel.

Dies kann auch auftreten, wenn die Uhrzeit des Zenbot-Servers nicht korrekt ist. Durch die Verwendung von NTP wird die Zeit auf dem neuesten Stand gehalten und dieser Fehler wird vermieden.



#### Warum erhalte ich immer wieder den Fehler: "JavaScript-Heap nicht genügend Speicher"

Dieser Fehler kann auftreten, wenn Ihre Knotenumgebung nicht über genügend Speicher verfügt.

Lösung (Linux & Docker): Ändern Sie die Zeile

`env node zenbot.js $@`

in [zenbot.sh](../zenbot.sh) zu: 

`env node --max-old-space-size=<memory> zenbot.js $@`

 Dabei ist `<memory>` die Menge an Speicherknoten, die verwendet werden darf (z. B. 4096 für 4 GB). 
 Für Windows müssen Sie die Datei [zenbot.bat](../zenbot.bat) ändern.



#### Warum erhalte ich immer wieder den Fehler: "Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency" 

Dieser Fehler kann auftreten, wenn Ihre "package-lock.json" Datei leider veraltet ist. 
Um den Fehler zu analysieren, geben Sie nach dem Sie in das Zenbot Verzeichnis wechselten ihre Zenbot Trade oder Sim Answeisung ein, wie beispeisweise: 

`
node --trace-warnings zenbot trade --paper
`

Hierbei wird Zenbot wie gewohnt ausgeführt, allerdings werden die von Node.js genannten Fehler dokumentiert. 
In meinem Fall habe ich Winston als Fehler analysiert, da dieer innerhalb von Zenbot liegt. 

`
fetching pre-roll data:
(node:2772) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
    at emitCircularRequireWarning (internal/modules/cjs/loader.js:650:11)
    at Object.get (internal/modules/cjs/loader.js:664:5)
    at Object.exports.setLevels (/root/zenbot/node_modules/winston/lib/winston/common.js:32:14)
    at Object.<anonymous> (/root/zenbot/node_modules/winston/lib/winston.js:83:8)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
(node:2788) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency                                                                                                     
(Use `node --trace-warnings ...` to show where the warning was created)                                                                                                                                           
                                                                                                                                                                                                                  
skipping 32 hrs of previously collected data                                                                                                                                                                      
                                                                                                                                                                                                                  
binance.BTC-USDT saved 23672 trades 1 days left                                                                                                                                                                   
............        
`

In der Packet-Jonson Datei befindet sich "winston" mit hilfe der dortigen genannten URL, ermittelte ich daraus die URL für den Browser. 
`
https://registry.npmjs.org/cliff/
`

Es öffnet sich eine lange unübersichtliche Jonson-Datei im Browser, aus der ich dann die GitHub Position ermitteln konnte. 
github.com/nodejitsu/cliff

Dort stellte ich fest, das dieses "REPOSITORY HAS BEEN MOVED" und nach 
https://github.com/flatiron/cliff
umgezogen ist. 


https://github.com/flatiron/cliff/pull/11

`
curl http://npmjs.org/install.sh | sh
[sudo] npm install cliff
`


Mit den Befehlen im neuen CLI-Fenster:

`
cd ./ccxt
npm audit fix
npm install
`

```
npm update & npm dedupe
```


#### Warum erhalte ich immer wieder den Fehler: "DeprecationWarning: collection.save is deprecated. Use insertOne, insertMany, updateOne, or updateMany instead."

https://github.com/DeviaVir/zenbot/issues/2607
https://stackoverflow.com/questions/52117442/deprecationwarning-collection-insert-is-deprecated-use-insertone-insertmany-o
https://www.reddit.com/r/zenbot/comments/coyp13/collectionsave_is_deprecated/

Meiner Meinung nach, wird hier nur eine aktuelle MongoDB dazu benötitgt um diese Warung zu beheben. 
Da die MongoDB in Version 4.2 nur für den Raspberry Pi funktioniert, ist ein Update zur Zeit nicht mäglich. 


## Exchange Fehler

In einigen Fällen kommt es zu Fehlermeldungen, die nur im Terminal sichtbar sind. 
Hierzu ist der Tipp, das man die Fehlermeldung versucht zu googeln. 

binance 1013 min notional

bedeutet, das man micht genügend Kapital für den Trade zur Verfügung stehen hat. 
Unter (Binance Trader Rules)[https://www.binance.com/en/trade-rule] kann man nachlesen, was hierfür das Minimum ist.

Fehler wie `Timestamp` 
Oder `Binance API down` sind auf eine schlechte Internetverbindung zurück zu führen. 



#### Zenbot startet nicht

Den Zenbot-Befehl ausführbar machen, falls Zenbot nicht starten sollte: 
Im Übrigen die Datei zenbot.sh und update.sh mit den Eigenschaften auf Ausführbarkeit und als Vertrauenwürdig gesetzt hin überprüfen. 
```
sudo chmod + zenbot.sh

Und dann mit:
./zenbot.sh
```

#### Cannot find module 'semver'

Wenn der Semver nicht gefunden wird.  
Dann stimmt etwas mit Ihrer Node.js nicht. 
Bitte deinstallieren Sie Node.js (oftmals installiert über den Paketmanger oder Softwaremanager des Betriebssystems) und installieren diese nachfolgend neu: 

```
sudo apt update
sudo apt install nodejs npm
```

Mit dem Nachfolgenden Befehl, wird nach der fertigen Neuinstallation von Node.js eine Versionnummer von Node.js ausgegebenen. 
Wie z.B. v12.22.5, ist das der Fall, sollte Semver funktionieren. 
```
node -v
```

Danach nehmen Sie anschießend im Zenbot-Verzeichnis die installation der NPMs erneut vor. 

```
npm install
npm audit fix --forces
```
