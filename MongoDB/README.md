# MondoDB

Diese MongoDB bitte in ein anderes Verzeichnis möglichst verschieben und anschließend damit installieren. 
Oder direkt aus dem Verzeichnis vopn Zenbot installieren. 

Die dortige MongoDB ist für Zenbot auf ARM-Systemen wie dem Raspian geeignet und funktioniert gut auf DietPi's Debian BullsEye und deren vorherigen Versionen. 

```bash
Als Vorlage:
sudo apt install /PFAD/ZUR/DATEI/NAMEDESPAKETS.deb

Beispiel Ohne zu verschieben als Root-User:
sudo apt install /root/zenbot/MongoDB/mongodb-org_4.2.0_arm64.deb.deb

Wenn sich in einem Benutzerverzeichnis sich der Clone von Zenbot befindet.
sudo apt-get install /home/<USERNAME>/zenbot/MongoDB/mongodb-org_4.2.0_arm64.deb

wie beispielsweise: 
sudo apt-get install /home/dietpi/zenbot/MongoDB/mongodb-org-mongos_4.2.0_arm64.deb
```

Bitte ändern Sie die Benutzerbezeichnung `dietpi` auf Ihren Benutzer an, es kann auch root sein. 
Nachfolgend für ARM basierende Systeme, wie der Raspberry PI, nur für 64bit Betriebssysteme.

```bash
ARM
sudo apt-get install /home/dietpi/zenbot/MongoDB/ARM/mongodb-org-mongos_5.0.4_arm64.deb
sudo apt-get install /home/dietpi/zenbot/MongoDB/ARM/mongodb-org-server_5.0.4_arm64.deb
sudo apt-get install /home/dietpi/zenbot/MongoDB/ARM/mongodb-org-shell_5.0.4_amd64.deb
```

Nachfolgend für AMD basierende Systeme, wie der Home PCs, nur für 64bit Betriebssysteme.
```bash
AMD
sudo apt-get install /home/dietpi/zenbot/MongoDB/AMD/mongodb-org-mongos_5.0.4_amd64.deb
sudo apt-get install /home/dietpi/zenbot/MongoDB/AMD/mongodb-org-server_5.0.4_amd64.deb
sudo apt-get install /home/dietpi/zenbot/MongoDB/AMD/mongodb-org-shell_5.0.4_amd64.deb
```

```
mit Verschieben ins root-Verzeichnis beispielsweise:
sudo apt install /root/mongodb-org_4.2.0_arm64.deb.deb
```

## Dann die MongoDB starten

```
sudo systemctl daemon-reload - Nachfolgede Befehle funktionierten bei mir nicht, aber die MongoDB läuft trotzdem.
sudo systemctl enable mongod
sudo systemctl start mongod
```

## Dann MonogDB kurz antesten

```
sudo systemctl status mongod - Bis hierhin waren Fehler, aber funktionierte halt.
```

Quelle der Datei: https://repo.mongodb.org/apt/ubuntu/dists/xenial/








## Bedingt unwichtig ab hier - funktioniert nicht!

Install & Configure MongoDB on the Raspberry Pi
HIER: https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/

Verzeichnis der weiterer arm64 Dateien.

https://repo.mongodb.org/apt/ubuntu/dists/bionic/mongodb-org/4.2/multiverse/binary-arm64/

Ab hier habe ich die aktuellen erhalten.
https://www.mongodb.com/download-center/community/releases/archive


Oder die Datei `mongodb-org_4.2.0_arm64.deb` im Internet suchen.



## Unwichtig ab hier - funktioniert nicht!
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

# Dann MonogDB kurz antesten

```
sudo systemctl status mongod
```




HIER:
https://www.heise.de/tipps-tricks/DEB-in-Debian-Systemen-installieren-so-klappt-s-4926444.html


```
sudo apt install /PFAD/ZUR/DATEI/NAMEDESPAKETS.deb

sudo apt install /root/mongodb-org_4.2.0_arm64.deb.deb
```
