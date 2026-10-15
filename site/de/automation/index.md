---
description: "Erfahre, wie Phi Browser mit Aktionen auf Zuruf, Hintergrundaufgaben und geplanten Aufgaben, dem Beobachten einer Seite, Aufgabenberichten in deinen Unterhaltungen, Bestätigungen, Phi Sentinel und Phi Link umgeht."
---

# Automatisierung & Phi Link

„Agentisch“ heißt: Phis KI kann mehr als Fragen beantworten. Sie kann im Browser handeln, Aufgaben für dich erledigen und das in manchen Fällen über längere Zeit weitertun. Es gibt drei Arbeitsweisen: **jetzt** handeln (Aktionen auf Zuruf), **im Hintergrund** laufen (Hintergrundaufgaben) und **nach Zeitplan** laufen (geplante Aufgaben).

## Aktionen auf Zuruf

Aktionen auf Zuruf sind Aufgaben, die der Assistent ausführt, wenn du darum bittest. Statt dir Schritte zum Nachmachen aufzuzählen, erledigt Phi die Arbeit selbst: Es navigiert durch Seiten, interagiert mit Websites und schließt mehrstufige Arbeiten ab, im aktuellen Tab oder einem neuen, während du dabei zusiehst.

Bei allem, was Folgen hat, legt es nicht ungefragt los. Es hält an und bittet dich, den Schritt zu **bestätigen**, bevor es handelt, mit einer einfachen Abfrage zwischen Bestätigen und Ablehnen, gekennzeichnet danach, wie riskant der Schritt ist. So bleibst du bei den Aktionen im Bild, auf die es ankommt.

## Hintergrundaufgaben

Manchmal willst du nicht danebensitzen und zuschauen. Der Agent kann aus einer Bitte eine **Aufgabe** machen, die im Hintergrund läuft, sodass sie weiterarbeitet, ohne deine Unterhaltung oder deine Aufmerksamkeit zu binden.

Eine Aufgabe:

- startet nur, wenn du **ausdrücklich** darum bittest,
- läuft für sich allein, du kannst also weitersurfen oder die Unterhaltung schließen,
- hält an und bittet dich um **Bestätigung**, wenn sie auf einen riskanten Schritt stößt,
- **meldet sich in der Unterhaltung zurück**, in der du gefragt hast, siehe [unten](#tasks-report-back-to-their-conversation),
- schreibt weiter in der Sprache dieser Unterhaltung. Bitte den Assistenten, wenn du es in einer anderen Sprache möchtest.

## Geplante Aufgaben {#scheduled-tasks}

Geplante Aufgaben sind wiederkehrende Automatisierungen, die nach einem von dir festgelegten Zeitplan laufen. Phi kann zum Beispiel alle paar Stunden einen Produktpreis beobachten, eine Seite auf Änderungen überwachen oder eine andere browserbasierte Aufgabe automatisch wiederholen. Im Kern sind sie Hintergrundaufgaben, die sich wiederholen, am Laufen gehalten von [Phi Sentinel](/de/sentinel/), auch wenn das Browserfenster geschlossen ist. Hier verhält sich Phi weniger wie ein Browser mit KI-Funktionen und mehr wie ein beständiges System, das weiterarbeitet, wenn du nicht hinschaust.

### Eine Seite beobachten

Am schnellsten richtest du eine ein, indem du irgendwo auf einer Webseite mit der rechten Maustaste klickst (nicht auf ausgewählten Text oder einen Link) und **[Name deines Assistenten] diese Seite beobachten lassen** wählst. Die Seitenleiste öffnet sich mit einer neuen Unterhaltung, und der Assistent liest die Seite und stellt dir ein paar Fragen, eine nach der anderen: warum du sie beobachtest, was es wert ist, dir mitgeteilt zu werden, wie oft er prüfen soll und, wenn du möchtest, wie er berichten und wann er aufhören soll.

Danach richtet er eine geplante Aufgabe ein, die **nur Änderungen** meldet. Die erste Prüfung meldet die Seite so, wie sie jetzt ist, als Ausgangspunkt, und spätere Prüfungen melden sich nur, wenn sich etwas geändert hat. Um die Beobachtung später zu ändern, zu pausieren oder zu löschen, frage in derselben Unterhaltung.

## Aufgaben melden sich in ihrer Unterhaltung zurück {#tasks-report-back-to-their-conversation}

Eine Aufgabe, die in einer Unterhaltung angelegt wurde, postet jede abgeschlossene oder fehlgeschlagene Ausführung zurück in diese Unterhaltung, als Antwort des Assistenten. Die Unterhaltung wird als ungelesen markiert und rückt an den Anfang deiner Liste, und [Phi Chat](/de/phi-chat/#tasks-and-unread-conversations) sammelt all diese Unterhaltungen in seiner Ansicht **Aufgaben**.

Über jedem Bericht steht eine Leiste mit dem Namen der Aufgabe, der Nummer der Ausführung und ob sie **Abgeschlossen** oder **Fehlgeschlagen** ist. Ihr Menü **…** enthält:

- **Jetzt ausführen**, um die Aufgabe sofort erneut auszuführen,
- **Nicht mehr hier berichten**, sodass die Aufgabe weiterläuft, aber nicht mehr in diese Unterhaltung postet. Sobald du das verwendet hast, wird daraus **Wieder hier berichten**.

### Eine Aufgabe verwalten

Hat eine Unterhaltung Aufgaben, erscheint in ihrer oberen Leiste eine Uhr-Taste mit einer Anzahl. Sie öffnet ein Feld, das für jede Aufgabe Folgendes zeigt:

- ihren Status, etwa **Wird ausgeführt**, **Aktiv** (ihr Zeitplan läuft noch), **Pausiert**, **Gestoppt** (ihre Stoppbedingung ist eingetreten), **Beendet** oder **Manuell** (sie hat keinen Zeitplan),
- ihren Zeitplan, wann sie das nächste Mal läuft und wann sie aufhört, falls sie eine Stoppbedingung hat,
- einen Schalter **In dieser Unterhaltung berichten**,
- **Was berichtet wird**: **Jede Ausführung** oder **Nur Änderungen**, das still bleibt, wenn nichts Neues aufgetaucht ist. Fehlschläge werden in beiden Fällen gemeldet.

Das Menü **…** der Aufgabe enthält **Jetzt ausführen** sowie **Zeitplan pausieren** oder **Zeitplan fortsetzen**.

Im Feld lassen sich Aufgaben weder bearbeiten noch löschen. Um zu ändern, was eine Aufgabe tut, oder um sie zu löschen, frage den Assistenten in der Unterhaltung der Aufgabe oder nutze die Seite **Aufgaben** in Phi Sentinel.

### Wenn Phi nicht lief

Aufgaben können nur laufen, während Phi läuft. War dein Mac aus oder im Ruhezustand, oder wurde Phi beendet, kann eine Ausführung verpasst oder abgeschnitten werden. Wenn Phi wieder startet:

- geht eine Aufgabe, die alle zwei Stunden oder öfter läuft, zu ihrer nächsten Ausführung über, und diese Ausführung erwähnt, was ungeprüft blieb,
- fragt Phi bei anderen Aufgaben in der Unterhaltung der Aufgabe, ob sie jetzt einmal ausgeführt werden soll. Der Bericht lautet **Nicht ausgeführt** oder **Abgebrochen**, mit den Tasten **Jetzt ausführen** und **Ignorieren** darunter, und du kannst auch mit eigenen Worten antworten.

Die Frage wird zurückgezogen, wenn die nächste geplante Ausführung der Aufgabe ansteht, oder nach einem Tag, wenn sie keinen Zeitplan hat.

### Benachrichtigungen {#notifications}

Kommt ein Bericht in einer Unterhaltung an, die du nicht geöffnet hast, kann Phi zusätzlich eine Benachrichtigungskarte mit dem Namen der Aufgabe und dem Anfang des Berichts anzeigen. Die Karte gehört zu Phi selbst und ist keine Mitteilung von macOS. Phi tut das nur, wenn der Bericht es wert scheint, dich zu unterbrechen, eine Prüfung ohne Neuigkeiten bleibt also still. **Details anzeigen** öffnet die Unterhaltung in [Phi Chat](/de/phi-chat/).

## Die Kontrolle behalten

Der Agent ist so gebaut, dass er mit deinem Wissen handelt, nicht hinter deinem Rücken. Vor Aktionen mit Folgen bittet er dich um Bestätigung, Aufgaben starten nur auf deine Bitte hin und halten bei riskanten Schritten für eine Bestätigung an, und du kannst jederzeit den Zeitplan einer Aufgabe pausieren, ihre Berichte abstellen oder den Assistenten bitten, sie zu ändern oder zu löschen. Wo deine Daten liegen und wie die KI gehandhabt wird, steht in [Datenschutz & deine Daten](/de/privacy/).

Was der Agent auf deine Anweisung hin tut, tut er als du, aus deinem Browser, mit deinen Konten. Manche Websites sehen Automatisierung nicht gern. Reddit ist das bekannte Beispiel: Dort werden Konten, die als automatisiert erkannt werden, eingeschränkt oder gesperrt. Arbeitet eine Aufgabe über eine solche Website, liegt dieses Risiko bei dir.

## Phi Sentinel

Geplante Aufgaben müssen weiterlaufen, auch wenn das Browserfenster geschlossen ist. **Phi Sentinel** ist die Hintergrund-App in der macOS-Menüleiste, die das möglich macht. Sie beherbergt außerdem die Private KI, also die Möglichkeit, einen Teil der KI auf deinem eigenen Mac laufen zu lassen. Das ganze Bild findest du unter [Phi Sentinel](/de/sentinel/).

## Phi Link

**Phi Link** verbindet Phi mit Telegram, damit du deinen Assistenten vom Smartphone aus nutzen kannst und auf dem Laufenden bleibst, wenn du nicht am Mac bist. Damit kannst du:

- vom Smartphone aus mit deinem Assistenten chatten,
- die Ergebnisse abgeschlossener Aufgabenausführungen erhalten,
- Workflows abseits des Browsers fortsetzen.

Einrichten kannst du es auf zwei Arten:

- **Offizieller Phi Link-Bot**, der einfachste Weg: QR-Code scannen, die Einrichtung mit einem Klick abschließen, fertig.
- **Dein eigener Telegram-Bot**, für mehr Kontrolle: Erstelle über Telegrams BotFather einen Bot, erzeuge einen Token und füge ihn in Phis Einstellungen ein. So kannst du Namen und Avatar des Bots anpassen.

Die Identität deines Assistenten bleibt dieselbe, das Erlebnis bleibt also zwischen Desktop und Smartphone einheitlich.
