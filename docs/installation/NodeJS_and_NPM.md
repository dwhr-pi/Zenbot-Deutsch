# NodeJS und NPM

## Deinstalltion von NodeJS und NPM
Die NodeJS und NPM zu entfernen und neu zu installieren hilft auch für eine saubere Installation. 

Die NodeJS entfernen mit: 
```
sudo apt-get purge nodejs --auto-remove 
```

Und NPM entfernen mit:
```
sudo apt-get purge npm --auto-remove
```

Stellen Sie sicher, das keine weitere NodeJS beispielsweise vom Packetmanager auf dem System installiert wurde. 
  

## Installtion von NodeJS und NPM

Danach wieder erneut installieren mit.

```
sudo apt-get install nodejs
```
`node --version`: sollte zurückgeben ... keine Datei oder Verzeichnis 
`nodejs --version`: sollte zurückgeben v1x.x.x. This is the version installed by apt. 
It will probably be less recent that the latest version available on the Node JS website.

```
sudo apt-get install npm
```
`npm --version`: it will use the nodejs installed by apt and work correctly.


Ebenfalls im absoluten Stammverzeichnis ausführen, jedoch nicht in Zenbot's Verzeichnis.
```
npm install semver
```

```
npm run snyk-protect
```

ausführen.