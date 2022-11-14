# Zenbot – Anleitung für Anfänger – Part 1 mit Windows auf Linux installieren. 
<!-- Quelle: https://beyond.lol/zenbot-anleitung-fuer-anfaenger-part-1/ -->

## Inhaltsverzeichnis
* Zenbot
* Vorrausetzungen
* Windows Installation
	* 1. Linux Subsystem installieren
* Linux Installation
* Erster Start des Bots
* Konfiguration im Part 2
* Einen Desktop für Linux nach installieren

## Zenbot
Zenbot ist ein Bot für die Kommandozeile mit einer kleinen aber feinen Weboberfläche. Mit Ihm lassen sich allerhand von Kryptowährungen automatisiert handeln.

In ersten Teil der Anleitung geht es Grundsätzlich um die Installation vom Bot. Mit der Konfiguration fahren wir im Teil 2 weiter!

## Vorrausetzungen
* Windows / Linux
* Node.js (version 8.3.0 + ) und die MongoDB. 
* sinvoll ein Desktop

## Windows Installation

###1. Linux Subsystem installieren
Ja auf dem Windows 10 könnt Ihr ein Linux laufen lassen. Das eröffnet einen ganz neuen Horizont. 


1. Powershell als Administrator ausführen und Befehl unten ausführen. 
   Die "Powershell" einfach suchen lassen und mit rechtsklick den Administrator auswählen und dann starten. 
   In dem blauen Fenster, ähnlci der Eingabeaufforderung, die nachfolgenden Zeile eingeben. 

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

2. Den Microsoft Windows Store öffnen und dort nach Ubuntu suchen. 
   Die Ubuntu (empfohlen) App, also, die aller erste.
   Es gibt dort verschiedene Linux Versionen, evtuell Ubuntu LTS 18 auswählen. 
   Man kann mehrere Linuxe auf Windows paralell laufen lassen. 

3. Nun nur noch auf „Herunterladen“ klicken. 
   Ubuntu wird installiert

4. Ubuntu aus dem Startmenu öffnen. 
   Es öffnet sich ein schwarzes Fenster in dem nun einige minuten lang Linux eingerichtet wird. 
   Bitte das Fenster nicht schließen. 

5. Einen Benutzername und ein Passwort setzen. 
   Der Benutzername sollte in kleiner Schrift erfolgen, das Passwort kann auch Großbuchstaben und Zahlen haben. 
   Da wir nun auf unseren Windows ein Linux installiert haben, geht es bei der Linux mit der Installation weiter!


# Linux Installation

1. Updates und Git installieren. Ordner erstellen

```
sudo apt update && sudo apt upgrade -y
```

Ihr zuvor eingegebenes Passwort infolge nun eingeben. 

Sie können jetzt auch jetzt schon den Desktop für Linux einrichten und kehren später hierhin zurück. 


```
sudo apt install git
```

```
sudo mkdir /opt/zenbot
```

```
cd /opt/zenbot
```

Erstellt den Ordner und anschlie0end in das Verzeichnis wechseln. 


2. Zenbot, MangoDB und nodeJS herunterladen und installieren
  Jede Zeile nacheinander in das Terminal einfügen und bestätigen.

```
sudo apt-get install build-essential mongodb -y
```

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

```
sudo apt-get install -y nodejs
```

```
sudo git clone https://github.com/deviavir/zenbot.git
```

```
cd zenbot
```

```
sudo npm install --unsafe-perm
```


```
sudo npm audit fix
```
#Falls etwas nicht geklappt hat


```
sudo npm link
```
#zenbot.sh in /usr/local/bin installieren


```
sudo service mongodb start
```

4. Konfigurationsdatei in conf.js umbenennen. 
```
cp conf-sample.js conf.js
```

# Erster Start des Bots
 So der Bot ist nun auf unserem kleinem Linux-System installiert.
 Nun starten wir Ihn doch mal im „paper“ Mode.
 Hier werden keine Trades duchgeführt – wir haben aber auch noch nichts in der Konfiguration. Also passiert so oder so nicht viel

Start des Bots
```
sudo zenbot --trade --paper
```

Der Bot analysiert nun den vorkonfigurierten Market und würde Trades vorschlagen.
```
gdax.BTC-USD saved 100 trades 1 days left
...............................................................
```

Es werden nun 24 Stunden heruntergeladen, dies kann einig Minuten dauern. 

Sobald der Bot „up2date“ ist wird er gestartet. Ihr seht nun einen Verlauf von eurem ausgewählten Market ( Part 2)
Hier wird euch auch gleich die IP-Adresse von eurem Bot angezeigt. Der Port ändert zwar bei jeden Start wieder.


# Die Anleitung zur Konfiguration folgt in kürze! Versprochen





#  Einen Desktop für Linux nach installieren. 




Install Desktop GUI for WSL | WSL Enable Desktop Guide
https://www.youtube.com/watch?v=QC7a9nowsz8


# Fix DNS
```
sudo nano /etc/resolv.conf
```

Listet die verwendeten IP-Adressen auf. 
hier kann bei 

nameserver 192.168.178.1

```
nameserver 8.8.8.8
```
eingegeben werden. Wodurch die DNS-Auflösung direkt durch Google getätigt wird. 
Speichern durch **Ctrl+s** drücken und anschließend durch eingeben von **Ctrl+x** den Nano-Editor schließen. 



```
lsb-release -a
```
#ä Installing Desktop environment
```
sudo apt install neofetch
```

```
neofetch
```

```
sudo apt install -y xfce4
```

```
sudo apt install -y xfce4-goodies
```

## Set up RDP


```
sudo apt install -y xrdp
```

```
sudo cp /etc/xrdp/xrdp.ini /etc/xrdp/xrdp.ini.bak
sudo sed -i 's/3389/3390/g' /etc/xrdp/xrdp.ini
sudo sed -i 's/max_bpp=32/#max_bpp=32\nmax_bpp=128/g' /etc/xrdp/xrdp.ini
sudo sed -i 's/xserverbpp=24/#xserverbpp=24\nxserverbpp=128/g' /etc/xrdp/xrdp.ini
```


```
echo xfce4-session > ~/.xsession
```


```
sudo nano /etc/xrdp/startwn.sh
```
Fehler ab hier. 
Ich habe in die leere Datei nachfolgend eingetragen und einfach abgespeichert.


```
startxfce4
```

```
sudo /etc/init.d/xrdp start
```

Es dürfte sich jetzt die Firewall von Microsoft Windows öffnen. 
Dort den Zugriff für xrdp dauerhaft gestatten. 

RDP starten
```
localhost:3390
```




XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


Es gibt verschiene Linux Systeme im Microsoft App Store. 
hierzu nehme ich die einfache Ubuntu. 
## WSL installieren

In der Powershell als Administrator


Dann versuche mal, nach dem diese downgeladen wurde mit WSL zu installieren.
```
wsl --install -d Ubuntu
```
Sollte eine andere Linux Version heruntergeladen worden sein. 
Dann hilft in der Powershell der nahfolgende Befehl, um den Namen in der WSL auszugeben, damit dieser zur Installation verwendet werden kann.

wsl --list 

und der dortige angegebene Name der Distro um zu installieren. 

wsl --install -d Ubuntu-20.04.5-LTS

den man dann zu verwenden hat. 

```
wsl --set-default-version 2
```
https://aka.ms/wsl2
https://learn.microsoft.com/de-de/windows/wsl/compare-versions


Bei vorhanden Windows-Subsystem für Linux-Distributionen erhält man eine Auflistung der installierten Systeme mit dem Befehl: 
```
wsl --list
```

Wir setzen unser grade installiertes Ubuntu auf 1. 
wsl --set-version <distro name> 2

```
wsl --set-version Ubuntu 1
```
und als Defaut Version, also aktive Version mit dem Befehl: 
```
wsl --set-default-version 1
```

```
```

```
```
















xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


<!-- Quelle: https://www.youtube.com/watch?v=8SuERIEJJUA -->

Den Desktop xfce4 für Linux installieren. 
```
```

```
clear
```

```
cat /etc/resolv.conf
```

Der nachfolgende Schritt mit Nano kann ausgelassen werden. 
Ab Source geht es weiter. 

```
nano ~/.bashrc
```
Nach dem der Editor geladen wurde, im Textfeld die Eingabetaste dürcken, um darin sich bewegen und editieren zu können. 

Am Fuß, ganz unten in der Datei die Zeile: 

```
export display=0
```

Oder möchte man das Display, beispielsweise mit dem RDP ansprechen, so benötigt dieser die IP-Adresse des Geräts. 
```
export display=192.168.172.x 
x Stellt hierbei Dein Gerät dar, es muß in der fritzbox noch eine Portfreigabe TCP für diese IP-Adresse bzw. dem Geröt eingerichtet werden. 
```

mit einfügen um dieses Linux mit dem Bildschirm zu koppeln. 
Mit der Tastenkombination Ctrl+S die Datei abspeichern und mit der eingabetaste das speichern einwilligen. 
Der Editor wird geschlossen. 
Ctrl+


Hier geht es weiter.
```
source ~/.bashrc
```


```
startxfce4
```



Sollte ein Fehler erscheinen. 
```
nano /usr/share/X11/xorg.conf.d
```



https://askubuntu.com/questions/4662/where-is-the-x-org-config-file-how-do-i-configure-x-there
```
sudo X -configure
```

```
sudo cp /root/xorg.conf.new /etc/X11/xorg.conf
```
nano /var/log/Xorg.0.log

https://unix.stackexchange.com/questions/159124/xf86enableioports-failed-to-set-iopl-for-i-o-operation-not-permitted

Die Userrechte f+r xinit ändern. 
https://wiki.ubuntuusers.de/chmod/
```
sudo chmod u+s /usr/bin/xinit
```




# Installiert wget
https://superuser.com/questions/1491987/launching-gui-for-wsl-from-batch-script
```
sudo apt install wsl
```

soll funktioneren. 

```
wsl startxfce4

```
sudo /etc/init.d/gdm restart
```


# xServer
https://wiki.ubuntuusers.de/XServer/

```
sudo apt install xserver
```
und Version auswählen,
```
sudo apt install xserver-xorg-hwe-18.04
```


Sollte ein Fehler erscheinen. 
Dann fehlt noch die nachfolgende Installation. 

<!-- Quelle: https://github.com/WhitewaterFoundry/Pengwin/issues/251 -->

```
sudo apt install gnome-shell
```

```
sudo apt install xinit
```

```
xinit
```

Wenn der Fehler weiterhin besteht. 

```
sudo apt install dbus-x11
```


```
sudo systemd-machine-id-setup
```



```
xfce4 --display=DISPLAY
```


```
```
