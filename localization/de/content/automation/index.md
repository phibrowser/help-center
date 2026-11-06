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

Der offizielle Phi Link-Bot wurde eingestellt. Um Phi über Telegram zu nutzen, verbinde deinen eigenen Telegram-Bot. Namen und Avatar kannst du selbst wählen.

### Deinen Bot einrichten

1. Öffne **@BotFather** in Telegram und folge den Anweisungen, um einen Bot zu erstellen. Kopiere den **Bot Token**, den du erhältst.
2. Melde dich bei Phi an und öffne **Einstellungen → Phi & KI → Phi Link**.
3. Füge unter **Eigener Telegram-Bot** deinen Token ein, überprüfe ihn und speichere ihn.
4. Öffne deinen Bot in Telegram und sende eine Nachricht, um die Verbindung zu testen.

Dein Bot ist nur für deinen persönlichen Gebrauch gedacht. Teile ihn nicht mit anderen und lade niemanden ein, ihn zu nutzen. Halte deinen Bot Token geheim. Wenn die Überprüfung fehlschlägt, prüfe den Token und die Fehlermeldung in den Einstellungen. Ein Webhook-Konflikt kann bedeuten, dass eine andere App den Bot bereits verwendet.

### Wenn du den offiziellen Bot genutzt hast

Erstelle und konfiguriere deinen eigenen Bot wie oben beschrieben. Nachdem du ihn getestet hast, kannst du in den Einstellungen die Verknüpfung mit dem alten offiziellen Bot aufheben. Dein eigener Bot wird dadurch nicht entfernt.

### Die Verbindung prüfen

**Verknüpft** bedeutet, dass der Bot-Dienst läuft. Sende eine Nachricht in Telegram, um zu prüfen, ob du eine Antwort erhältst. Wenn du den Bot ersetzen möchtest, entferne den aktuellen Bot in den Einstellungen und füge den neuen hinzu.
