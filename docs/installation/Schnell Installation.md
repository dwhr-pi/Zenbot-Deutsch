### Schnellstart für DietPi OS auf dem RaspberryPi

Schritt 1) ​​Anforderungen
- Windows / Linux / macOS 10 (oder Docker)
-  [Node.js](https://nodejs.org/) (Version 8.3.0 oder höher) und die [MongoDB](https://www.mongodb.com/) .

Schritt 2) Installieren Sie zenbot 4

Führen Sie in Ihrer Konsole aus:

```
git clone https://github.com/deviavir/zenbot.git

```


```
git clone https://github.com/dwhr-pi/zenbot.git
```
Oder ohne zu clonen
```
wget https://github.com/deviavir/zenbot/archive/master.tar.gz
tar -xf master.tar.gz
mv zenbot-master zenbot
```

```
wget https://github.com/dwhr-pi/zenbot/archive/master.tar.gz
tar -xf master.tar.gz
mv zenbot-master zenbot
```

Erstellen Sie Ihre Konfigurationsdatei durch Kopieren conf-sample.jsauf conf.js:
```
cp conf-sample.js conf.js
```
- Anzeigen und bearbeiten conf.js.
- Es ist möglich, Zenbot im "Papierhandel"-Modus zu verwenden, ohne Änderungen vorzunehmen.
- Sie müssen jedoch Ihre Exchange-API-Schlüssel hinzufügen, um einen echten Handel zu ermöglichen.
- API-Schlüssel benötigen KEINE Ein-/Auszahlungsberechtigungen.

Wenn Sie Docker verwenden, fahren Sie mit Abschnitt "Docker" fort.

Abhängigkeiten installieren:
```
cd zenbot
npm install
# Optional, installieren Sie die `zenbot.sh` Binärdatei in /usr/local/bin: und verlinken diese mit:
npm link
```


## DietPI OS 7.0 Schritt für Schritt

```
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install build-essential

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

git clone https://github.com/deviavir/zenbot.git
cd zenbot
npm install

./zenbot.sh trade --paper
```

Oder meine Version
```
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install build-essential

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

git clone git clone https://github.com/dwhr-pi/zenbot.git

cd zenbot
npm install


```
Die Installationszeit beträgt ca. 20 Minuten.

```
./zenbot.sh trade --paper
```

## Ubuntu 16.04 Schritt für Schritt
Video- Blog-Beitrag
```
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install build-essential mongodb -y

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

git clone https://github.com/deviavir/zenbot.git
cd zenbot
npm install

./zenbot.sh trade --paper
```


## Docker (optional)
Um Zenbot unter Docker auszuführen, installieren Sie Docker, Docker Compose und Docker Machine (falls erforderlich). Sie können den Anweisungen unter https://docs.docker.com/compose/install/ folgen.

Nach der Installation (Schritt 2 oben)
```
cd zenbot
docker-compose up (-d if you don't want to see the log)
```

Wenn Sie Windows ausführen, verwenden Sie den folgenden Befehl
```
docker-compose --file=docker-compose-windows.yml up
```
Wenn Sie Befehle ausführen möchten (z. B. Backfills, Listenselektoren), können Sie diesen separaten Befehl nach einem erfolgreichen Vorgang ausführen docker-compose up -d:

```
docker-compose exec server zenbot list-selectors
docker-compose exec server zenbot backfill <selector> --days <days>
```

Docker aktualisieren
Falls Sie mit Updates im Rückstand sind, können Sie Folgendes ausführen:
```
docker pull deviavir/zenbot:unstable
```
Führen Sie den Vorgang erneut aus docker-compose up -d, um das neue Image zu starten.

deviavir/zenbotwird nach jeder Zusammenführung automatisch aktualisiert. Sie können den Tags / Builds hier folgen: https://hub.docker.com/r/deviavir/zenbot/builds/




https://www.youtube.com/results?search_query=zenbot+tutorial



## Installtionsversuche

```
Ab 20:02
git clone https://github.com/dwhr-pi/Zenbot.git
cd Zenbot
cp conf-sample.js conf.js

nicht funktionierend wegen url
wget https://github.com/dwhr-pi/zenbot/archive/master.tar.gz
tar -xf master.tar.gz
mv zenbot-master zenbot

funktionierend
cp conf-sample.js conf.js

conf.js ändern und anpassen.

cd Zenbot-Deutsch
npm install --unsafe-perm           Benötigt ab 20:05 bis 20:15 und dann node install 20:16, dann npm bis 20:17 und fertig.
npm fix --force
npm link   		20:20-20:21

zenbot --help
```


___________________________________________________
### Node
die Node.js Version 8 oder bis 12 und nicht die Version 14 verwenden. Es gibt angeblich Version 15. 

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Mit dieser Node, Version 8.x funktioniert auch die Strategie: 'neural' und 'renko'.
Allerdings kam bei 'neural' ein 'JavaScript heap out of memory'-Fehler, bei 8GB Arbeitsspeicher.
Und 'renko' hat den Fehler: 'rclose is not defined'


```
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```
___________________________________________________
Dann wird die MongoDB noch benötigt, siehe bei Richtig*******************


funktioniert nicht
```
sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org			fehler
sudo apt-get install build-essential mongodb-server -y
sudo apt-get install build-essential mongodb -y
sudo apt-get install build-essential mongodb.org -y

sudo apt-get install build-essential mongodb-v4.2 -y
sudo apt-get install build-essential mongodb v4.2 -y

sudo apt-get -version build-essential mongodb -y
echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update

sudo systemctl start mongod
```

Neuer Versuch
```
sudo apt-get install libcurl4 openssl liblzma5
https://fastdl.mongodb.org/src/mongodb-src-r4.4.4.tar.gz		Mit Browser öffnen und abspeichern, aber dort noch nicht mit Entpacker öffnen. Diese Datei wird im Download-Verzeichnis auf dem Raspberry gespeichert.
http://repo.mongodb.org/apt/ubuntu/dists/bionic/mongodb-org/4.2/multiverse/binary-arm64/mongodb-org_4.2.9_arm64.deb
cd Downloads

sudo dpkg -i mongodb-org_4.2.9_arm64.deb
```


## Unwichtig*******************
```
wget -qO - https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update
sudo systemctl start mongod
```

```
apt --fix-broken install
apt autoremove
```

Die Datenbank sollte mit der URL zu erreichen sein. 
```
mongodb://localhost:27017/zenbot4
mongodb://<DeineIPAdresseDesRaspberrys>:27017/zenbot4
mongodb://<DeinHostnameDesRaspberrys>:27017/zenbot4
```

Ab morgen hier weiter!!!!!!!!!!!!!!
```
https://www.harrer.io/blog/node-js-und-mongodb-am-raspberry-pi
```

```
sudo apt-get install mongodb-server
```

### BESSER MongoDB 4.2 oder 4.4 für arm64. Die MongoDB 4.2 funktioniert auf arm64, aber zur Zeit nicht die Version 4.4.
### Richtig*******************
```
https://www.google.com/search?q=zenbot+mongodb+install+arm64&oq=zenbot+mongodb+install+arm64&aqs=chrome..69i57.36153j0j7&sourceid=chrome&ie=UTF-8
zenbot mongodb install arm64
https://www.reddit.com/r/zenbot/comments/dy1ys5/zenbot_without_docker_on_rpi3/
zenbot without docker on RPI3
```

```
sudo apt-get install gcc-8-aarch64-linux-gnu g++-8-aarch64-linux-gnu
sudo dpkg --add-architecture arm64
sudo apt-get update
sudo apt-get install libssl-dev:arm64 libcurl4-openssl-dev:arm64
```

### Selbstbau Versuch der mongoDB und weiteren Abhängigkeiten. 
Der Selbstbau der Version 4.2 führte zum Erfolg. 
Ob das dann noch mal klappt? 
Die anderen Versuche und Links zu MongoDb dienen nur zur Orientierung und für später und alle Fälle. 
Libssl, Bestandteil von DietPi, aber nicht vorinstalliert, siehe bei DietPi Software Additionals zur Installation.


## Version 4.4, für i386 oder AMD, leider nicht für arm64 geeignet.
```
git clone -b r4.4.0 https://github.com/mongodb/mongo.git
```

## Version 4.2, für arm64 Systeme.
```
git clone -b r4.2.0 https://github.com/mongodb/mongo.git
cd mongo
```


## PYTHON3, notwendig um MongoDB zu bauen. 
Bestandteil von DietPi, aber nicht vorinstalliert, siehe DietPi Software Additionals.
In DietPi's Software Additional > Shared Libraries habe ich alle Erweiterungen installiert, wie auch die "Build-Essentials: common packages for compiling" bei "Development & Programming" in DietPi's Software Additional.

Im mongo Verzeichnis dann im Terminal "cd mongo" eingeben, falls Sie sich wieder im Root-Verzeichniss befinden. 


G++, ist nicht Bestandteil von DietPi in der Basisinstallation, wir zum bauen der Phyton3 benötigt. 
```
sudo apt-get install g++
sudo apt-get install libboost-filesystem-dev libboost-program-options-dev libboost-system-dev libboost-thread-dev
```
Ab hier wurde die Phyton3 gebaut. 
```
python3 buildscripts/scons.py mongod
python3 buildscripts/scons.py --prefix=/opt/mongo install
```

Befolge dann die Anleitung in der build / building.md Datei in/zu Phyton3, falls es hier zu Komplikationen kommen sollte. 
Zum Kompilieren der MonogDB benötigte ich noch die nachfolgendene letzte Zeilen.
Im Stammverzeichnis im Terminal: 

```
sudo apt install python-pymongo
```
Die Installationszeit für Phyton beträgt ca. XX Minuten. 

Dann ging ich in dieses Zenbot Verzeichnis und Zenbot startete auf DietPi OS ohne Fehler Meldung, das die MongoDB installiert sein müsste.
```
cd zenbot
```

ENDE MongoDB 4.4 für arm64, ob das auch bei der 4.4 irgendwie funktioniert?







## Unwichtig ab hier, nur weitere Versuche.
```
sudo cp /path/to/the/mongodb-directory/bin/* /usr/local/bin/
sudo cp /path/to/the/mongodb-src-r4.4.4/bin/* /usr/local/bin/
```

Mongo Version 3.6, funktioniert nicht auch auf DietPi Buster arm64
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
apt-get update
apt-get install -y mongodb-org
sudo service mongod start
```


Mongo Version 3.2, funktioniert nicht auch auf DietPi Buster arm64
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
apt-get install -y mongodb-org
sudo service mongod start
sudo systemctl enable mongod --now
```







## MongoDB Neu, ggf. nur ein paar wichtige Befehle sind hier insgesammt noch. 
https://linuxize.com/post/how-to-install-mongodb-on-debian-10/
```
sudo apt install dirmngr gnupg apt-transport-https software-properties-common ca-certificates curl
curl -fsSL https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
sudo add-apt-repository 'deb https://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main'
sudo apt update
sudo apt install mongodb-org
sudo systemctl enable mongod --now


mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

Quelle: 
https://stackoverflow.com/questions/48092353/failed-to-start-mongod-service-unit-mongod-service-not-found
```
sudo systemctl unmask mongod
sudo service mongod start
```



## Mongo Version 3.6, funktioniert auch diese Version nicht auch auf DietPi Buster arm64
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org

sudo apt-get install -y mongodb-org=3.6.0 mongodb-org-server=3.6.0 mongodb-org-shell=3.6.0 mongodb-org-mongos=3.6.0 mongodb-org-tools=3.6.0
```


## Installiere Docker in DietPi
https://hub.docker.com/_/mongo/
```
docker pull mongo
```	

Bei fehlerhafter Installation der mongoDB und im Terminal wurde der Fehler angegebenen: 
```
apt-get -q update - Exit code: 100  
```
Hierzu im Ordner die 
```etc/agp/source.list```
Datei editieren und den Ordner 'source.list.d' sonmit korrigieren und die anderen MongoDB-Dateien in diesem Verzeichnis entfernen.









## Zenbot
Jetzt können Sie im Terminal eingeben:
```
cd zenbot
./zenbot.sh --help

./zenbot.sh list-selectors
... to list all currencys which could be traded.
... um alle Währungen aufzulisten, die gehandelt werden könnten


./zenbot.sh list-selectors | grep kraken
./zenbot.sh list-selectors | grep binance
./zenbot.sh list-selectors | grep kraken | grep LTC
./zenbot.sh list-selectors | grep binance | grep BTC
./zenbot.sh sim --days 14
./zenbot.sh sim --days 14 binance.ETH-BTC
./zenbot.sh sim --days 14 binance.LTC-BTC
```

### Node.js Fehler
https://www.google.com/search?q=.%2Fzenbot.sh+sim+--days+14+binance.ETH-BTC&oq=.%2Fzenbot.sh+sim+--days+14+binance.ETH-BTC&aqs=chrome..69i57.2813j0j4&sourceid=chrome&ie=UTF-8
```
SyntaxError: Invalid left-hand side in assignment, falling back to conf-sample
			https://www.reddit.com/r/zenbot/comments/hagfxw/confjs/
				https://www.reddit.com/r/zenbot/
(node:17402) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
```

Deshalb nicht die node.js in der Version 14 verwenden. 
```
node conf.js
node --version
```

## Quelle für diesen Test war.

E:\_Bitcoin_Core\Eobot_FREE_Cloud_Mining_Review\_TraderBots\Zenbot\Backtesting-Strategien
```
zenbot morpheus.5250$ 
zenbot sim --days 90 --profit_stop_enable_pct=10 --profit_stop_pct=1 --sell_rate=-0.006 --trend_ema=36 --period=1h
```

Hier einige Zenbot Befehle in der Anwendung zum simulierten Traden.  
```
./zenbot.sh trade gdax.LTC-BTC --strategy=bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh trade gdax.LTC-BTC --strategy=bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --live
./zenbot.sh trade binance.ETH-BTC --strategy=bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --live
```
Hier einige Zenbot Befehle in der Anwendung zum simulierten Traden.  
```
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=cci_srsi --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=crossover_vwap --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=dema --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ehlers_ft --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ehlers_mama --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ehlers_trend --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=forex_analytics --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ichimoku --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ichimoku_score --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=kc --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=macd --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=momentum --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=multi --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=neural --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=noop --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=pivot --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=renko --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=rsi --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=sar --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=speed --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=srsi_macd --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=stddev --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_ema --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_macd --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_macd_ext --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_ppo --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_srsi_bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_stoch_bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_trix --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ta_ultosc --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ti_bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ti_hma --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ti_stoch --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=ti_stoch_bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=trend_bollinger --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=trend_ema --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=trendline --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=trust_distrust --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=vpt --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=wavetrend --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
```


## Quelle: zenbot_strategies-master
https://github.com/rountrey/zenbot_strategies
Zenbot-Strategien · GitHub

```
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=3trend --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=dema_avg --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper

./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=dema_max --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=retrend_price --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=rsi_simple --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=rsi_simple_max --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=trend_ema_max --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
./zenbot.sh sim --days 14 binance.ETH-BTC --strategy=trix_max --period=1m --buy_pct=100 --sell_pct=100 --currency_capital=100 –max_sell_loss_pct=5 --paper
```

forex analytics starten, falls installiert mit. Die Strategie forex_analytics nicht so starten. 
```
./zenbot.sh train
```

## Weitere Beispielbefehle
```
./zenbot.sh backfill binance.ETH-BTC
./zenbot.sh backfill binance.LTC-BTC
./zenbot.sh balance binance.ETH-BTC
./zenbot.sh list-strategies 
./zenbot.sh trade binance.ETH-BTC
```


##Intressante Links zum Notifer
```
https://www.google.com/search?q=ZENBOT_TELEGRAM_BOT_TOKEN&oq=ZENBOT_TELEGRAM_BOT_TOKEN&aqs=chrome..69i57.4934175j0j7&sourceid=chrome&ie=UTF-8
https://docs.zenbot.org/botscript/
https://docs.zenbot.org/messengers/telegram/
https://core.telegram.org/bots#3-how-do-i-create-a-bot

https://planetachatbot.com/implementa-un-chatbot-en-atenci%C3%B3n-al-cliente-641d2728b0e5
```

Implementieren Sie einen Chatbot im Kundenservice
https://t.me/joinchat/whntsMoSdY40YThi
```
https://t.me/BinanceTraderbot
```

### BinanceTraderbot
```
BotFather, [31.03.21 22:17]
Done! Congratulations on your new bot. You will find it at t.me/Test. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API: Dieser Apikey Token wurde geändert.
171055457:ZZDwI_uGhi-jgEosQe1mba8GFDd54UbUssg
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

### andere links
## AIML Chatbot
```
https://www.google.com/search?q=aiml+chatbot&oq=AIML++&aqs=chrome.1.69i57j0l9.18376j0j7&sourceid=chrome&ie=UTF-8
https://planetachatbot.com/implementa-un-chatbot-en-atenci%C3%B3n-al-cliente-641d2728b0e5
https://www.devdungeon.com/content/ai-chat-bot-python-aiml
https://github.com/SurajGupta86/Chatbot-using-AIML-for-college-purposes.
https://www.chatbotpack.com/chatbots-github
```



Programmpaket downloaden und anschließend in das Download-Verzeichniss wechseln. 
https://download.mediathekview.de/stabil/MediathekView-latest-linux.deb
```
sudo dpkg -i MediathekView-latest-linux.deb
```




## Intressante Seiten zu Zenbot
```
https://beyond.lol/zenbot-anleitung-fuer-anfaenger-part-1/
```
