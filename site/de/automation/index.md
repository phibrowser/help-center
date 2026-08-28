---
description: "Erfahre, wie Phi Browser mit Aktionen auf Zuruf, Hintergrundaufgaben, geplanten Aufgaben, Bestätigungen, Hintergrundarbeit über Phi Sentinel und Benachrichtigungen über Phi Link umgeht."
---

# Automatisierung & Phi Link

„Agentisch“ heißt: Phis KI kann mehr als Fragen beantworten. Sie kann im Browser handeln, Aufgaben für dich erledigen und das in manchen Fällen über längere Zeit weitertun. Es gibt drei Arbeitsweisen: **jetzt** handeln (Aktionen auf Zuruf), **im Hintergrund** laufen (Hintergrundaufgaben) und **nach Zeitplan** laufen (geplante Aufgaben).

## Aktionen auf Zuruf

Aktionen auf Zuruf sind Aufgaben, die der Assistent ausführt, wenn du darum bittest. Statt dir Schritte zum Nachmachen aufzuzählen, erledigt Phi die Arbeit selbst: Es navigiert durch Seiten, interagiert mit Websites und schließt mehrstufige Arbeiten ab, im aktuellen Tab oder einem neuen, während du dabei zusiehst.

Bei allem, was Folgen hat, legt es nicht ungefragt los. Es hält an und bittet dich, den Schritt zu **bestätigen**, bevor es handelt, mit einer einfachen Abfrage zwischen Bestätigen und Ablehnen, gekennzeichnet danach, wie riskant der Schritt ist. So bleibst du bei den Aktionen im Bild, auf die es ankommt.

## Hintergrundaufgaben

Manchmal willst du nicht danebensitzen und zuschauen. Der Agent kann eine Aufgabe **abgekoppelt im Hintergrund** laufen lassen, als sogenannte **Hintergrundaufgabe**, sodass sie weiterarbeitet, ohne deine Unterhaltung oder deine Aufmerksamkeit zu binden.

Eine Hintergrundaufgabe:

- startet nur, wenn du **ausdrücklich** um Ausführung im Hintergrund bittest,
- läuft für sich allein, du kannst also weitersurfen oder die Unterhaltung schließen,
- hält an und bittet dich um **Bestätigung**, wenn sie auf einen riskanten Schritt stößt,
- meldet Fortschritt, Ergebnisse und erzeugte Dateien auf der Seite **Geplante Aufgaben** von Phi Sentinel; Ergebnisse kommen also nicht von selbst zurück in den Chat,
- **benachrichtigt dich, wenn sie fertig ist**, besonders praktisch mit [Phi Link](#phi-link) auf dem Smartphone,
- lässt sich, solange sie läuft, **abbrechen** und danach **erneut ausführen**.

## Geplante Aufgaben {#scheduled-tasks}

Geplante Aufgaben sind wiederkehrende Automatisierungen, die nach einem von dir festgelegten Zeitplan laufen. Phi kann zum Beispiel alle paar Stunden einen Produktpreis beobachten, eine Seite auf Änderungen überwachen oder eine andere browserbasierte Aufgabe automatisch wiederholen. Im Kern sind sie Hintergrundaufgaben, die sich wiederholen, am Laufen gehalten von [Phi Sentinel](/de/sentinel/), auch wenn das Browserfenster geschlossen ist. Hier verhält sich Phi weniger wie ein Browser mit KI-Funktionen und mehr wie ein beständiges System, das weiterarbeitet, wenn du nicht hinschaust.

## Die Kontrolle behalten

Der Agent ist so gebaut, dass er mit deinem Wissen handelt, nicht hinter deinem Rücken. Vor Aktionen mit Folgen bittet er dich um Bestätigung, Hintergrundaufgaben starten nur auf deine Bitte hin und halten bei riskanten Schritten für eine Bestätigung an, und eine laufende Aufgabe kannst du jederzeit stoppen. Wo deine Daten liegen und wie die KI gehandhabt wird, steht in [Datenschutz & deine Daten](/de/privacy/).

## Phi Sentinel

Geplante Aufgaben müssen weiterlaufen, auch wenn das Browserfenster geschlossen ist. **Phi Sentinel** ist die Hintergrund-App in der macOS-Menüleiste, die das möglich macht. Sie beherbergt außerdem die Private KI, also die Möglichkeit, einen Teil der KI auf deinem eigenen Mac laufen zu lassen. Das ganze Bild findest du unter [Phi Sentinel](/de/sentinel/).

## Phi Link

**Phi Link** verbindet Phi mit Telegram, damit du deinen Assistenten vom Smartphone aus nutzen kannst und auf dem Laufenden bleibst, wenn du nicht am Mac bist. Damit kannst du:

- vom Smartphone aus mit deinem Assistenten chatten,
- benachrichtigt werden, wenn Aufgaben gelingen oder scheitern,
- Workflows abseits des Browsers fortsetzen.

Einrichten kannst du es auf zwei Arten:

- **Offizieller Phi Link-Bot**, der einfachste Weg: QR-Code scannen, die Einrichtung mit einem Klick abschließen, fertig.
- **Dein eigener Telegram-Bot**, für mehr Kontrolle: Erstelle über Telegrams BotFather einen Bot, erzeuge einen Token und füge ihn in Phis Einstellungen ein. So kannst du Namen und Avatar des Bots anpassen.

Die Identität deines Assistenten bleibt dieselbe, das Erlebnis bleibt also zwischen Desktop und Smartphone einheitlich.
