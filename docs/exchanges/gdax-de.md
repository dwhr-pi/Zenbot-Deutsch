# Zenbot-Tipps für GDAX

Die folgenden Tipps können die Zuverlässigkeit bei der Verwendung von Zenbot mit GDAX (Coinbase Pro) erhöhen.

## Sandbox
Zum Testen der API-Konnektivität und des Web-Handels steht eine öffentliche Sandbox zur Verfügung. Während die Sandbox nur eine Teilmenge der Fertigungsauftragsbücher hostet, sind alle Austauschfunktionen verfügbar. Darüber hinaus können Sie in dieser Umgebung unbegrenzt gefälschte Mittel zum Testen hinzufügen.

Passen Sie die Konfigurationsdatei an, um die Verwendung der Sandbox zu aktivieren (true) oder zu deaktivieren (false). Stellen Sie sicher, dass die richtigen API-Anmeldeinformationen (Live oder Sandbox) in die Konfigurationsdatei eingegeben wurden. Andernfalls wird ein API-Fehler angezeigt. Außerdem verwenden Sie die Option --paper nicht, da sie (simulierte) Trades in der Sandbox ausführt.

Die Standardeinstellung ist false.

Beispiel für die aktivierte Sandbox:
```
c.gdax.sandbox = process.env.ZENBOT_GDAX_SANDBOX || true
```

## Gebührenlimits

Der GDAX (Coinbase Pro) verwendet ein Maker-Taker-Gebührenmodell zur Bestimmung seiner Handelsgebühren. Aufträge, die Liquidität bereitstellen (Herstelleraufträge), werden mit anderen Gebühren berechnet als Aufträge, die Liquidität aufnehmen (Abnehmeraufträge). Die Gebühren werden basierend auf der aktuellen Preisstufe berechnet, in der Sie sich zum Zeitpunkt der Bestellung befinden, und nicht auf der Stufe, in der Sie sich nach Abschluss eines Handels befinden würden.

Hier finden Sie Ihre GDAX-Gebühren (Coinbase Pro) - https://pro.coinbase.com/orders/fees.

Ändern Sie die folgende Javascript-Datei, um die Gebührenlimits an Ihre aktuelle Preisstufe anzupassen.

```
extensions/exchanges/gdax/exchange.js
```

Suchen Sie nach diesen Zeilen:
```
  var exchange = {
    name: 'gdax',
    historyScan: 'backward',
    makerFee: 0.35,
    takerFee: 0.35,
    backfillRateLimit: 335,
```

Passen Sie MakerFee und TakerFee an, zum Beispiel:
```
  var exchange = {
    name: 'gdax',
    historyScan: 'backward',
    makerFee: 0.5,
    takerFee: 0.5,
    backfillRateLimit: 335,
```
