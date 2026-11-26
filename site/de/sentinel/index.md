---
description: "Phi Sentinel verstehen: Phis Verwaltung der Hintergrunddienste auf deinem Mac, die die Dienste hinter dem Assistenten ausführt, ihre Daten aufbewahrt und geplante Aufgaben weiterlaufen lässt, nachdem der Browser geschlossen ist."
---

# Phi Sentinel

Phi Sentinel verwaltet die Hintergrunddienste von Phi auf deinem Mac. Vieles von dem, was der Assistent tut, geschieht außerhalb des Browserfensters: geplante Aufgaben ausführen, deine Erinnerungen aufbauen, die Daten durchsuchen, die du verbunden hast, und KI-Anfragen dorthin schicken, wo sie hinmüssen. Diese Arbeit erledigt eine Reihe von Diensten, die im Hintergrund laufen, und Phi Sentinel sorgt dafür, dass sie ordnungsgemäß laufen.

Es wird mit Phi Browser installiert, und im Alltag musst du damit nichts tun. In den Einstellungen von Phi Chat heißen diese Dienste schlicht **Hintergrunddienste**.

## Was es tut {#what-it-does}

### Hintergrunddienste ausführen {#running-background-services}

In Phi Sentinel steckt ein Prozess namens **Runner**, dessen einzige Aufgabe es ist, die Hintergrunddienste zu verwalten. Er übernimmt:

- **Starten und Überwachen.** Er startet jeden Dienst, wenn er gebraucht wird, prüft regelmäßig, ob er fehlerfrei läuft, und startet ihn neu, wenn etwas schiefgeht.
- **Updates.** Er lädt neue Versionen der Dienste im Hintergrund herunter und installiert sie. Vorher prüft er die Signatur jedes Updates, und läuft eine neue Version nicht richtig, kehrt er zur vorherigen zurück.
- **Weitergeben deiner Einstellungen.** Er reicht, was du in den Einstellungen festlegst, etwa die Aufgabenquellen in [Private KI](/de/private-ai/), an die Dienste weiter, die es brauchen.

Der Runner hält die Dienste nur am Laufen. Mit deinen Inhalten hat er nichts zu tun: Deine Unterhaltungen, Seiten und Daten werden von den Diensten selbst verarbeitet und laufen nie durch den Runner.

Zu den Diensten, die er verwaltet, gehören:

- **Der Assistentendienst**, der deine Unterhaltungen und Aufgaben aufbewahrt und geplante und Hintergrundaufgaben ausführt.
- **Der Dienst für Erinnerungen**, der aus deinem Surfen deine Erinnerungen aufbaut.
- **Der Indexierungsdienst**, der die Daten indexiert, die du verbindest, damit die Datensuche sie finden kann.
- **Das AI Gateway**, das jede KI-Anfrage an die Quelle schickt, die du dafür gewählt hast. Standardmäßig ist das Phi Cloud, und mit eingeschalteter Private KI kann es ein lokales Modell oder ein eigener Anbieter sein.
- **AI Guardrail**, das auf diesem Mac Text auf sensible Informationen prüft. Siehe unten.
- **Lokale Modelle**, die erst installiert und ausgeführt werden, nachdem du Private KI eingerichtet hast.

### Geheimnisse aus den Erinnerungen heraushalten {#ai-guardrail}

**AI Guardrail** ist ein Erkennungsdienst, der auf deinem Mac läuft. Bevor der Dienst für Erinnerungen etwas Neues speichert, lässt er es von AI Guardrail prüfen. Findet AI Guardrail ein Geheimnis wie ein Passwort, einen API-Schlüssel, einen privaten Schlüssel, eine Wiederherstellungsphrase oder einen Wiederherstellungscode, wird der gesamte Eintrag nicht in deine Erinnerungen aufgenommen.

- Die Prüfung findet vollständig auf diesem Mac statt. Was geprüft wird, wird nirgendwohin gesendet.
- AI Guardrail hält nur Geheimnisse fern und schreibt nie etwas um. Gewöhnliche persönliche Angaben wie Namen und Telefonnummern werden wie üblich gespeichert, und du kannst sie unter [Erinnerungen](/de/memory/) ansehen und löschen.

### Deine Daten aufbewahren {#keeping-your-data}

Die Dienste bewahren ihre Daten auf deinem Mac auf, in lokalen Datenbanken: deine Unterhaltungen, deine Aufgaben und ihre Ausführungen, deine Erinnerungen und den Index deiner verbundenen Daten.

In Phi Chat findest du unter **Einstellungen → Sicherung und Updates**:

- **Daten exportieren**, das eine Kopie deiner Einstellungen und Daten speichert, die du auf einen anderen Mac mitnehmen kannst. API-Schlüssel von Anbietern sind nicht enthalten.
- **Lokaler Snapshot**, das eine Kopie auf diesem Mac speichert, zu der du zurückkehren kannst. Snapshots verlassen diesen Mac nie.

### Aufgaben weiterlaufen lassen, nachdem der Browser geschlossen ist {#keeping-tasks-running}

[Geplante Aufgaben](/de/automation/#scheduled-tasks) müssen nach ihrem eigenen Zeitplan laufen, ob ein Browserfenster offen ist oder nicht. Weil Phi Sentinel getrennt vom Browser läuft, geht eine Preisprüfung alle paar Stunden oder eine Seite, die du beobachtest, auch dann weiter, wenn du das Browserfenster geschlossen hast.

## Den Zustand der Hintergrunddienste prüfen {#checking-status}

Öffne die Einstellungen in Phi Chat:

- **Allgemein** zeigt, ob die Hintergrunddienste ordnungsgemäß laufen und welche Version du hast, mit **Hintergrunddienste neu starten**.
- **Dienste** zeigt den Zustand jedes einzelnen Dienstes. Steht dort **Alles funktioniert**, ist nichts zu tun.
- **Protokolle** ist für den Fall gedacht, dass etwas nicht stimmt und du es melden willst. Klicke neben **Diagnoseprotokolle** auf **Speichern**, und Phi speichert eine ZIP-Datei in deinem Ordner „Downloads“, die du an den Phi-Support senden kannst.

Im Browser kannst du unter **Einstellungen → Phi & KI → Phi Sentinel** die Optionen **Phi Sentinel starten, wenn du dich an deinem Mac anmeldest** und **Phi Chat mit Umschalt Umschalt Umschalt aufrufen** ein- oder ausschalten (siehe [Phi Chat](/de/phi-chat/#opening-phi-chat)).

## Nächste Schritte

- [Private KI](/de/private-ai/), KI-Aufgaben auf deinem Mac oder mit deinem eigenen KI-Anbieter ausführen.
- [Automatisierung & Phi Link](/de/automation/), Aktionen auf Zuruf, geplante Aufgaben und Phi aus Telegram nutzen.
- [Datenschutz & deine Daten](/de/privacy/), wo deine Daten liegen und wie du die Kontrolle behältst.
- [FAQ](/de/faq/#phi-sentinel), schnelle Antworten zu Phi Sentinel.
