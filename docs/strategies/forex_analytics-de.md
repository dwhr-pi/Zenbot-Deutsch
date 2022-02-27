Forex_analytics wurde entfernt.
https://github.com/DeviaVir/zenbot/pull/1937

forex_analytics Installieren Sie talib und forex.analytics schlägt fehl und wie installiere ich das.
https://github.com/DeviaVir/zenbot/issues/1765

Hier wird eine Talib Installation durchgeführt. 
https://travis-ci.org/github/DeviaVir/zenbot/jobs/774610348


# Strategie: forex_analytics

Die forex_analytics basieren auf [forex.analytics by mkmarek](https://github.com/mkmarek/forex.analytics):

> Das Ergebnis der technischen Analyse sind zwei binäre Bäume, die Strategien für Kauf- und Verkaufssignale beschreiben, die in einem bestimmten Zeitraum, der durch den eingegebenen OHLC-Datensatz angegeben ist, Gewinne erzielt haben [d.h. Leuchter].

Kurz gesagt, der von forex.analytics verwendete genetische Optimierungsalgorithmus permutiert Schwellenwerte, die für einen begrenzten Satz von TA-Lib-Indikatoren verwendet werden, um einen Entscheidungsbaum aus verschiedenen Parametern und Schwellenwerten zu erstellen, die dann entweder zu einem „Kauf“- oder „Verkauf“-Signal führen . Am Ende werden verschiedene Kombinationen von Parametern und Schwellen entweder für eine „Kauf“- oder „Verkauf“-Entscheidung verwendet.

Bitte beachten Sie auch [https://github.com/mkmarek/forex.analytics/blob/master/README.md](https://github.com/mkmarek/forex.analytics/blob/master/README.md).

## Trainieren
Die Strategie kommt mit einem neuen „Train“-Befehl, um ein Modell mit zurückgefüllten Daten zu trainieren. Es wird empfohlen, das Modell zuerst mit einem großen _Trainingsdatensatz_ zu trainieren und das Modell dann mit zuvor nicht sichtbaren Daten zu testen, um die Leistung und eine mögliche Überanpassung zu bewerten. Dies kann durch den `train`-Befehl erfolgen, z.B.

`./zenbot.sh train bitfinex.ETH-USD --days_training 42 --days_test 14`

Sie können die folgenden Parameter für das Training angeben:

```
--conf <path>                               Pfad zur optionalen conf-Überschreibungsdatei
--period <Wert>                             Periodenlänge einer Kerze (Standard: 30m)
--start_training <timestamp>                beginnt mit dem Training um timestamp
--end_training <timestamp>                  beendet das Training zum Zeitpunkt des Timestamps
--days_training <Tage>                      Legt die Dauer des Trainingsdatensatzes nach Tagesanzahl fest
--days_test <days>                          Setze die Dauer des Testdatensatzes zur Verwendung mit der Simulation, angehängt NACH dem Trainingsdatensatz (Standard: 0)
--populationCount <Wert>                    Bevölkerungszahl (Standard: 100)
--generationCount <Wert>                    Generationszähler (Standard: 100)
--selectionAmount <Wert>                    Auswahlbetrag (Standard: 10)
--leafValueMutationProbability <Wert>       Mutationswahrscheinlichkeit des Blattwerts (Standard: 0,5)
--leafSignMutationProbability <Wert>        Blattzeichen-Mutationswahrscheinlichkeit (Standard: 0,3)
--logicalNodeMutationProbability <Wert>     Mutationswahrscheinlichkeit des logischen Knotens (Standard: 0,3)
--leafIndicatorMutationProbability <Wert>   Mutationswahrscheinlichkeit des Blattindikators (Standard: 0,2)
--crossoverProbability <Wert>               Übergangswahrscheinlichkeit (Standard: 0,03)
--indicators <value>                        kommagetrennte Liste von TA-lib-Indikatoren (Standard: CCI,MACD,RSI,SAR,Stochastic, verfügbar: ATR,BOP,CCI,MACD,MACD_Signal,MACD_Histogram,Momentum,RSI,SAR,SMA15_SMA50,Stochastic )
-h, --help                                  gibt Nutzungsinformationen aus
```

Mit den unterschiedlichen Einstellungen für den genetischen Optimierungsalgorithmus müssen Sie herumspielen, denn wir sind auch noch dabei, sie zu lernen.

Der 'train'-Befehl generiert zuerst die Candlestick-Rohdaten, führt das Training durch, speichert das Modell in einer temporären Datei und führt die Simulationen auf dem Trainings- und Testdatensatz aus.

Sie sollten damit rechnen, dass der Trainingsdatensatz _training extrem gute Ergebnisse zeigt, da das Modell darauf zugeschnitten wurde. Die Ergebnisse aus dem Testdatensatz _test dataset_ zeigen daher ein realistischeres Bild. **Wählen Sie mit `--days_test` einen ausreichend großen _Testdatensatz_ aus.**

Das Modell wird dann zusammen mit den HTML-Simulationsergebnissen von _training_ und _test dataset_ im Ordner `models/` gespeichert.

##Handel

Sie können das trainierte Modell für das Training verwenden, indem Sie den normalen `trade`-Befehl verwenden:

`./zenbot.sh trade bitfinex.ETH-USD --strategy forex_analytics --modelfile models/trained_model_file.json --paper`

Es gibt nicht viele Optionen zu spezifizieren. Normalerweise müssen Sie nur `--modelfile` und `--period` anpassen. Der Zeitraum muss derselbe sein wie im Training/Test und Zenbot wird sich beschweren, wenn dies nicht der Fall ist.

Bitte beachten Sie, dass Sie die Modell-JSON-Dateien freigeben können. zenbot ist Open Source, wir teilen. Wenn du den heiligen Mustergral findest, gib es bitte der Community zurück ;)

```
forex_analytics
  Bezeichnung:
    Wenden Sie das trainierte Forex-Analysemodell an.
  Optionen:
    --modelfile=<Wert>    Modelldatei (erzeugt durch Ausführen von `train`), sollte in models/ sein (Standard: keine)
    --period=<Wert>       Periodenlänge einer Kerze (Standard: 30m) (Standard: 30m)
    --min_periods=<Wert>  min. Anzahl der Historienperioden (Standard: 100)
```

## Einschränkungen

- Bitte beachten Sie, dass Sie das Modell an retrospektive Daten einer einzelnen Börse anpassen. Es könnte (viel) Overfitting geben. Wie besprochen, verwenden Sie bitte einen ausreichend großen Testdatensatz _test dataset_.
- Die ursprüngliche forex.anayltics optimiert nicht für die Länge der Lookback-Perioden für die TA-Lib-Indikatoren. Hier muss noch gearbeitet werden. Wir [haben ein Problem eingereicht](https://github.com/mkmarek/forex.analytics/issues/11), aber das Projekt scheint im Leerlauf zu sein – eine Pull-Anfrage wäre sehr willkommen.