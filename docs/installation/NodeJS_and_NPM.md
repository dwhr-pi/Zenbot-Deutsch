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
`nodejs --version`: sollte zurückgeben v1x.x.x. 
Dies ist die von apt installierte Version. 
Es wird wahrscheinlich weniger aktuell sein als die neueste Version, die auf der Node JS-Website verfügbar ist.

```
sudo apt-get install npm
```
`npm --version`: Es verwendet die von apt installierte nodejs und funktioniert ordnungsgemäß.


Ebenfalls im absoluten Stammverzeichnis ausführen, jedoch ebenfalls nicht in Zenbot's Verzeichnis.
```
npm install semver
```

```
npm run snyk-protect
```

ausführen.  