---
description: "Phi Sentinel verstehen: der Begleiter in der macOS-Menüleiste, der deine Automatisierung am Laufen hält und manche KI-Aufgaben über Private KI auf deinem Mac ausführen kann."
---

# Phi Sentinel

Phi Sentinel ist eine kleine Begleit-App, die in der **Menüleiste** von macOS lebt, getrennt vom Browser. Diese Trennung ist Absicht: Der Browser bleibt leicht, während eine stille Hintergrundschicht weiterarbeitet, auch wenn kein Fenster offen ist. Phi Sentinel hat zwei Hauptaufgaben: Es hält deine Automatisierung am Laufen, und es beherbergt **Private KI**.

## Automatisierung am Laufen halten

Manches von dem, was Phi tut, soll den Moment überdauern, in dem du darum gebeten hast. [Geplante Aufgaben](/de/automation/#scheduled-tasks) müssen nach ihrem eigenen Zeitplan weiterlaufen, auch nachdem du das Browserfenster geschlossen hast, und genau dafür ist Phi Sentinel da. Es führt diese Aufgaben aus, bewahrt den Verlauf deiner KI-Aufgaben auf und lässt Automatisierung im Hintergrund weiterlaufen, sodass eine Preisprüfung alle paar Stunden oder eine Seite, die du beobachtest, weitergeht, ob ein Browserfenster offen ist oder nicht.

## Private KI

Normalerweise erledigt **Phi Cloud** die KI-Aufgaben von Phi. **Private KI** ist die Option, einige davon **stattdessen auf deinem Mac** laufen zu lassen, oder über einen Modellanbieter deiner Wahl, sodass diese Arbeit deinen Rechner nie verlässt.

Sie ist **Opt-in und standardmäßig aus**. Schaltest du sie ein, bekommst du einiges zurück:

- **Privatsphäre.** Bei Aufgaben, die lokal laufen, bleiben die Daten auf deinem Mac und werden nicht an ein Cloud-Modell gesendet.
- **Offline.** Diese Aufgaben funktionieren auch ohne Internetverbindung weiter.
- **Keine Kosten pro Anfrage.** Auf eigener Hardware zu rechnen kostet keine Nutzungsgebühr.

### Es gilt Aufgabe für Aufgabe

Private KI ist nicht alles oder nichts. Sie gilt pro Aufgabe, und Phi ist ehrlich dabei, welche sie übernehmen kann. Mit dem Modell, das sie für dich einrichtet, laufen **Erinnerungen** und **Datensuche** standardmäßig auf deinem Mac, während **Chat** und **Webaufgaben** auf **Phi Cloud** bleiben, denn diese brauchen ein stärkeres Modell als das leichtgewichtige, das für Hintergrundarbeit mitgeliefert wird, und sie wechseln nur dann aufs Gerät, wenn du ein größeres installierst. Der Bildschirm „Private KI“ zeigt das als Abdeckung, also wie viele deiner KI-Aufgaben privat laufen und wie viele noch zu Phi Cloud gehen, damit du immer weißt, wo jede Art von Arbeit stattfindet.

### Eigenen Anbieter anbinden

Modelle auf dem Gerät sind nicht die einzige Option. Du kannst eine Aufgabe auch auf einen Modellanbieter richten, den du selbst betreibst, zum Beispiel **Ollama**, **LM Studio** oder einen beliebigen OpenAI-kompatiblen Endpunkt, und Phi leitet diese Aufgabe dann dorthin statt zu Phi Cloud.

### Was du brauchst

Private KI funktioniert am besten auf einem Mac mit **Apple Silicon** und mindestens **16 GB RAM**. Beim Aktivieren prüft die Einrichtung deine Hardware und deinen freien Speicherplatz und lädt herunter, was sie braucht, bevor die lokalen Modelle eingeschaltet werden.

### Einschalten

Öffne Phi Sentinel über die Menüleiste, suche in den Einstellungen **Private KI** und schalte sie ein. Von dort führt dich die App durch die Einrichtung und zeigt dir, welche Aufgaben aufs Gerät gewechselt sind, sobald alles bereit ist.

## Die Kontrolle behalten

Private KI vertieft Phis Local-First-Ansatz: Nicht nur deine Erinnerungen, auch die KI selbst kann auf deinem eigenen Rechner laufen. Wo deine Daten liegen und was Phi erhebt und was nicht, steht in [Datenschutz & deine Daten](/de/privacy/).

## Nächste Schritte

- [Automatisierung & Phi Link](/de/automation/), Aktionen auf Zuruf, geplante Aufgaben und Phi aus Telegram nutzen.
- [Datenschutz & deine Daten](/de/privacy/), wo deine Daten liegen und wie du die Kontrolle behältst.
- [FAQ](/de/faq/#phi-sentinel), schnelle Antworten zu Phi Sentinel.
