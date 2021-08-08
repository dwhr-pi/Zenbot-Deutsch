# Wie erstelle ich eine Strategie?

Bist du dir sicher?
Zumindest sollten Sie über ein Minimum an Code-Writing-Kenntnissen verfügen...

**Hier finden Sie Hilfe und sehr nützliche Informationen:**
https://www.reddit.com/r/zenbot/
https://discord.gg/z2VyhmxP8P

Zuallererst wird empfohlen, die zenbot-Basisdokumentation zu lesen, die [hier] (https://github.com/DeviaVir/zenbot/tree/unstable/docs "hier") zu finden ist.

## # Wie arbeitet Zenbot mit Strategien?
Zenbot lädt eine Strategie, indem er die Dateierweiterungen/strategies/`<strategy-name>`/strategy.js . findet

## # Was zu tun ist?

### ## 1. Erstellen Sie eine neue Strategiedatei
Sie sollten einen neuen Ordner im Strategieordner erstellen und ihn nach Belieben benennen.
Sie können auch eine Kopie des Ordners ..\extensions\strategies\noop erstellen und diesen umbenennen.
Die NOOP-Strategie ist nur ein Beispiel für eine Strategiedatei.

Sie sollten den NOOP-Ordner im Strategieordner haben, aber wenn Sie ihn nicht haben, können Sie ihn hier herunterladen:
https://github.com/DeviaVir/zenbot/tree/unstable/extensions/strategies

Das finden Sie wahrscheinlich in der NOOP-Strategiedatei:

    module.exports = {
      Name: 'noop',
      Beschreibung: „Tu einfach nichts. Kann verwendet werden, um z.B. zum Trainieren der Strategie.',
      getOptions: Funktion () {
        this.option('period', 'period length, same as --period_length', String, '30m')
        this.option('period_length', 'period length, same as --period', String, '30m')
     },
     berechnen: Funktion () {
     },
     onPeriod: Funktion (s, cb) {
       cb()
     },
    onReport: Funktion () {
      var spalten = []
      Rückgabespalte
    }
    }

## # Wie ist die Strategiedatei organisiert?
Die Zenbot-Strategiedatei ist in 4 Abschnitte unterteilt:
- getOptionen
- Berechnung
- onPeriod
- onReport

## getOptionen
Zenbot sucht dort, wo die Variablen für Ihre Strategie benötigt werden.

    getOptions: Funktion(en) {
    this.option('period', 'period length, same as --period_length', String, '5m')
    this.option('period_length', 'period length, same as --period', String, '5m')
    this.option('min_periods', 'min. Anzahl der Historienperioden', Number, 200)
    // fügen Sie hier die Variablen ein, die Ihre Strategie verwenden wird. **
    }

## Berechnung
Es wird jedes Mal aufgerufen, wenn es einen neuen Trade gibt. es ist der richtige Ort, um Indikatoren zu aktualisieren.

    // MACD berechnen
    ema(s, 'ema_short', s.options.ema_short_period)
    ema(s, 'ema_long', s.options.ema_long_period)
    if (s.periode.ema_short && s.periode.ema_long) {
      s.periode.macd = (s.periode.ema_short - s.periode.ema_long)
      ema(s, 'signal', s.options.signal_period, 'macd')
      if (s.periode.signal) {
        s.period.macd_histogram = s.period.macd - s.period.signal
    }
    

Oder wenn Sie einfach den RSI-Indikator verwenden möchten:

     // RSI-Indikator
     rsi(s, 'rsi', s.options.rsi_periods)


## onPeriode

Es wird am Ende jeder Periode aufgerufen. Es ist der richtige Ort, um Kauf- oder Verkaufssignale zu senden.

Wenn Sie beispielsweise basierend auf dem RSI-Indikator kaufen oder verkaufen möchten:

    if (s.periode.rsi < 30) {
      am signal = 'kaufen'
    }

## onReport

wird jedes Mal aufgerufen, wenn die Konsole aktualisiert wird. Es muss ein Array zurückgeben und jedes Element in diesem Array wird in der Konsole angezeigt (nach dem RSI und vor dem Saldo).

Beispiel:

      onReport: Funktion(en) {
       var spalten = []
       if (typeof s.period.rsi === 'Zahl') {
         var color = 'grau'
         if (s.period.rsi <= s.options.oversold_rsi) {
           Farbe = 'grün'
         }
         if (s.period.rsi >= s.options.overbought_rsi) {
           Farbe = 'rot'
         }
         cols.push(z(4, n(s.period.rsi).format('0'), ' ')[Farbe])
       }
       Rückgabespalte
       },
  


  
## # Wie kann ich nach vergangenen Werten suchen?
## Zurückschauen

Bei jeder Periodenänderung wird die aktuelle Periode an den Anfang von `s.lookback` gesetzt und `s.period` zurückgesetzt. So können Sie den letzten Punkt in `s.lookback[0]` überprüfen, den vorherigen in `s.lookback[1]` und so weiter.


### Dank an:
- BAKfr
- TxTheNoob
