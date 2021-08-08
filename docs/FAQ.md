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


## Antworten

### Allgemein

#### Gibt es eine Community, die sich mit Zenbot befasst?

Natürlich! Schauen Sie sich unsere Reddit-Community an ([subreddit zenbot](https://reddit.com/r/zenbot)).

Es gibt auch [eine freigegebene Google Text & Tabellen-Tabelle mit Community-Sim-Ergebnissen und Variablenbeschreibungen](https://docs.google.com/spreadsheets/d/1WjFKRUY4KpkdIJiA3RVvKqiyNkMe9xtgLSfYESFXk1g/edit#gid=70204991).
Oder hier einsehen: [eine freigegebene Google Text & Tabellen-Tabelle mit Community-Sim-Ergebnissen und Variablenbeschreibungen](ZenBot Simulations - Variables.zip).



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
Die Dateien sind im Zip [einen Befehl mit dieser freigegebenen Google Text & Tabellen-Tabelle generieren] (Alle Dateien - Zenbot Command Creator Update by effgee (Public Version) v1.1.2 - Zenbot Command Creator.zip) enthalten.
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

#### Warum erhalte ich immer wieder den Fehler "Nonce"?

Dieser Fehler kann auftreten, wenn mehrere Instanzen von Zenbot mit demselben API-Schlüssel verwendet werden. Um dies zu vermeiden, verwenden Sie für jede gleichzeitige Instanz von Zenbot einen anderen API-Schlüssel.

Dies kann auch auftreten, wenn die Uhrzeit des Zenbot-Servers nicht korrekt ist. Durch die Verwendung von NTP wird die Zeit auf dem neuesten Stand gehalten und dieser Fehler wird vermieden.



#### Warum erhalte ich immer wieder den Fehler "JavaScript-Heap nicht genügend Speicher"

Dieser Fehler kann auftreten, wenn Ihre Knotenumgebung nicht über genügend Speicher verfügt.

Lösung (Linux & Docker): Ändern Sie die Zeile

`env node zenbot.js $@`

in [zenbot.sh](../zenbot.sh) bis

`env node --max-old-space-size=<memory> zenbot.js $@`

 Dabei ist `<memory>` die Menge an Speicherknoten, die verwendet werden darf (z. B. 4096 für 4 GB). Für Windows müssen Sie die Datei [zenbot.bat](../zenbot.bat) ändern.
