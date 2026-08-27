---
description: "Lass Agenten sich mit Zugangsdaten aus deinem Bitwarden-Tresor anmelden. Freigabeabfragen für jede Anfrage, automatisches Ausfüllen ohne Offenlegung der Geheimnisse, Sitzungs-Timeouts und widerrufbare Freigaben."
---

# Passwortmanager für Agenten

Früher oder später stößt ein Agent, der in Phi arbeitet, auf eine Anmeldeschranke. Ein Passwort in einen Chat einzufügen ist genau die falsche Antwort, deshalb hat Phi eine bessere. Der **Passwortmanager für Agenten** verbindet Agenten mit deinem Passwortmanager, derzeit **Bitwarden**, damit sie sich mit Zugangsdaten aus deinem Tresor bei Websites anmelden können. Er ist so gestaltet, dass **der Agent das Passwort in den meisten Fällen gar nicht zu sehen bekommt**.

Die Funktion ist standardmäßig ausgeschaltet, jede einzelne Anfrage fragt zuerst bei dir nach, und jede dauerhafte Freigabe kannst du jederzeit widerrufen.

## Warum Bitwarden

Einem KI-Agenten einen Weg zu deinen Passwörtern zu öffnen ist ein Vertrauensbeweis, deshalb sollte der Tresor dahinter keine Blackbox sein. Bitwarden ist **Open Source**, seine Clients und sein Server können also von jedem geprüft werden, und es **unterstützt Self-Hosting**, du kannst deinen Tresor also auf einem Server halten, den du selbst betreibst, statt in der Cloud eines anderen. Damit behältst du von Anfang bis Ende die Kontrolle darüber, wo deine Zugangsdaten liegen: dein Tresor auf deiner Infrastruktur, entsperrt auf deinem Mac, herausgegeben nur, wenn du zustimmst. Phis Hilfsprogramm baut auf dem offiziellen Bitwarden-SDK auf, und selbst gehostete Server werden bei der Anmeldung unterstützt.

Klarheit darüber, wer hier welche Rolle hat, lohnt sich. **Bitwarden ist der Anbieter des Tresordienstes**, und deine Beziehung dafür besteht mit Bitwarden, unter dessen Nutzungsbedingungen und dessen Datenschutzerklärung. Du entscheidest, ob dein Tresor auf bitwarden.com, auf bitwarden.eu oder auf einem selbst gehosteten Server liegt, und diese Wahl bestimmt, wo dein Tresor lebt und welchem Recht er untersteht. Phis Anteil ist, ihn auf deinem Mac zu entsperren und einem Agenten genau die eine angefragte Zugangsinformation zu übergeben, wenn du diese konkrete Anfrage genehmigst. Dein Tresor erreicht Phinomenon nie, und dein Master-Passwort auch nicht.

## Wie Geheimnisse außer Reichweite bleiben

Dein Tresor wird nicht im Browser geöffnet. Phi bringt ein **separates Hilfsprogramm** mit, das stellvertretend für die App mit Bitwarden spricht. Zugangsdaten für Phi und für Agentenanfragen verwahrt dieses Hilfsprogramm, und **Passwörter gelangen nie in den Browserprozess**. Der entsperrte Tresorschlüssel existiert nur im Arbeitsspeicher des Hilfsprogramms und wird verworfen, sobald der Tresor sperrt. Das Hilfsprogramm akzeptiert Verbindungen nur von Phi selbst, und Phi prüft die Codesignatur des Hilfsprogramms, bevor es ihm irgendetwas anvertraut.

Obendrein nutzen Agenten Zugangsdaten standardmäßig per automatischem Ausfüllen, was das Geheimnis vollständig vom Agenten fernhält. Phi füllt das Feld auf der Seite selbst aus, und der Agent erfährt nur, dass das Ausfüllen stattgefunden hat.

## Einschalten

Der Passwortmanager für Agenten wohnt im Tab **Entwickler** der Einstellungen, der erscheint, sobald der **Entwicklermodus** an ist:

1. Öffne **Einstellungen → Allgemein** und schalte den **Entwicklermodus** ein.
2. Suche im Tab **Entwickler** den Abschnitt **Passwortmanager für Agenten** und schalte **Bitwarden-Passwortmanager** ein.
3. Melde dich bei deinem Bitwarden-Konto an. US-, EU- und selbst gehostete Server werden unterstützt, auch Konten mit zweistufiger Anmeldung. Entsperre den Tresor anschließend mit deinem Master-Passwort.

Beim Aktivieren bietet Phi unter Umständen auch an, die **Bitwarden-Browsererweiterung** aus dem Chrome Web Store zu installieren. Diese Erweiterung ist eine separate Annehmlichkeit für _dich_: Sie füllt deine Zugangsdaten automatisch aus, während du ganz normal surfst. Agentenanfragen nutzen sie nicht und brauchen sie nicht, du kannst also mit **Jetzt nicht** ablehnen, und der Agentenzugriff funktioniert trotzdem.

## Jede Anfrage fragt zuerst bei dir nach

Wann immer ein Agent Zugangsdaten anfragt, zeigt Phi eine Freigabeabfrage, die benennt, **welcher Agent** fragt und **welche Website oder welchen Eintrag** er will, zusammen mit der vom Agenten angegebenen Begründung. Nichts wird herausgegeben, bis du antwortest, und eine ignorierte Abfrage **lehnt sich nach 60 Sekunden selbst ab**.

Die Abfrage gibt dir echte Wahlmöglichkeiten, nicht nur OK:

- **Genehmigen** oder **Ablehnen** der Anfrage.
- Wähle, wie lange die Freigabe gilt: **Nur einmal**, **Für 10 Min.** oder **Immer**.
- Optional kannst du **die Freigabe auf alle Agenten anwenden** statt nur auf den anfragenden. Bei einmaligen Freigaben ist das nicht verfügbar.

Ist der Tresor gesperrt, wenn eine Anfrage eintrifft, fragt Phi zuerst nach deinem **Master-Passwort**, um ihn zu entsperren. Dieses Passwort geht direkt an das Hilfsprogramm und wird vom Browser nie gespeichert.

## Drei Stufen der Offenlegung

Nicht alle Anfragen sind gleich, und die Abfrage ist ehrlich, was den Unterschied angeht. Jede Anfrage gehört zu einer von drei Arten, farblich markiert danach, wie weit das Geheimnis reist:

| Art                      | Was tatsächlich passiert                                                                                                                                                                                                                                                                                         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 **Nur ausfüllen**     | Phi füllt die gespeicherten Zugangsdaten selbst in die Seite ein. Der Agent löst das Ausfüllen aus, **erhält aber nie Benutzernamen oder Passwort**.                                                                                                                                                             |
| 🟠 **Befehlsausführung** | Der Wert wird an den Agenten herausgegeben, damit ein von ihm ausgeführter Befehl ihn nutzen kann, zum Beispiel ein Datenbankpasswort, das in die Umgebung einer CLI injiziert wird. Das Werkzeug des Agenten entfernt ihn aus der Ausgabe, aber Phi kann den Agenten nicht daran hindern, den Wert zu behalten. |
| 🔴 **Vollzugriff**       | Der gespeicherte Eintrag, das kann ein Passwort, eine Notiz, eine Karte, eine Identität oder ein Schlüssel sein, wird direkt mit dem Agenten geteilt, und der Agent kann ihn in seinem Kontext festhalten.                                                                                                       |

Eine gemerkte Freigabe deckt nur die Art ab, für die sie erteilt wurde. Eine Freigabe nur zum Ausfüllen erlaubt einem Agenten nie, das Passwort direkt zu lesen.

Das automatische Ausfüllen hat ein zusätzliches Sicherheitsnetz: Ausfüllvorgänge sind **an die Herkunft gebunden**. Gehört die Seite, auf der ein Agent gerade ist, nicht zu der Website, für die die Zugangsdaten gespeichert wurden, verweigert Phi das Ausfüllen, denn genau so würde eine irreführende Seite versuchen, ein Passwort zu stehlen. Ausgefüllte Passwörter bleiben auf der Seite außerdem maskiert, selbst wenn ein Schalter „Passwort anzeigen“ angeklickt wird.

## Was Agenten nie bekommen

Manche Grenzen lassen sich nicht überschreiten, egal was freigegeben ist:

- **Zwei-Faktor-Codes werden nie herausgegeben.** Einem Agenten einen gültigen 2FA-Code zu überlassen würde beide Faktoren hinter einer einzigen Abfrage zusammenfallen lassen, deshalb bleibt dieser Schritt immer bei dir. Der Agent gibt die Steuerung zurück, und du gibst den Code selbst ein.
- **Bei Mehrdeutigkeit wird nichts herausgegeben.** Passen mehrere Tresoreinträge auf eine Anfrage, verweigert Phi die Herausgabe und bittet den Agenten, die Anfrage einzugrenzen, statt in deinem Namen ein Konto zu erraten.
- **Alles wird protokolliert, ohne Werte.** Jede Anfrage landet in einem Audit-Log: welcher Agent, welche Website und welche Zugriffsart, nie die Geheimnisse selbst.

Der Tresor liefert mehr als Zugangsdaten, denn auch sichere Notizen, Karten, Identitäten und SSH-Schlüssel können angefragt werden, aber nur Zugangsdaten können jemals automatisch in eine Seite eingefüllt werden. Alles andere durchläuft dieselben ausdrücklichen Freigabeabfragen von oben.

## Freigaben prüfen und widerrufen

**Zugangsdaten-Freigaben für Agenten…** im selben Einstellungsbereich listet jede bestehende Freigabe auf: welcher Agent, welche Website, welche Zugriffsart und wie lange sie gilt. Befristete Freigaben laufen von selbst ab. **Immer**-Freigaben bleiben bestehen, bis du sie widerrufst, einzeln oder mit **Alle widerrufen**.

Der Dialog enthält außerdem den Schalter **Zugriff auf alle Passwörter erlauben**, eine bewusste Generalfreigabe, mit der jeder Agent beliebige gespeicherte Zugangsdaten ohne Nachfrage verwenden darf. Er ist aus gutem Grund in Warnrot gehalten, und Phi bittet dich vor dem Einschalten um Bestätigung. Lass ihn aus, solange dir dieser Tausch nicht völlig klar ist.

## Sitzungs-Timeout des Tresors

Du bestimmst, wie lange der Tresor entsperrt bleibt. Wähle im Abschnitt „Passwortmanager für Agenten“ ein **Sitzungs-Timeout** von **1 Stunde**, **4 Stunden**, **Beim Sperren des Systems**, **Beim Neustart des Browsers** (Standard) oder **Nie**, und lege fest, was beim Auslösen passiert: **Sperren**, wonach es zum Fortfahren dein Master-Passwort braucht, oder **Abmelden**, was das Konto vollständig abmeldet.

## Ausschalten

Die Schalter schalten wirklich ab, statt nur auszublenden:

- Schaltest du **Bitwarden-Passwortmanager** aus, wird der Tresor gesperrt und befristete Freigaben werden verworfen. Dein Konto bleibt auf der Festplatte angemeldet, damit du später wieder einschalten kannst, aber jede Agentenanfrage wird abgelehnt, solange die Funktion aus ist, auch solche mit einer **Immer**-Freigabe.
- Den **Entwicklermodus** auszuschalten ist ein Notausschalter. Er deaktiviert Agentenzugriff und Passwortmanager für Agenten gemeinsam, und beim Wiedereinschalten wird nichts automatisch reaktiviert. Jede Funktion muss von Hand wieder eingeschaltet werden.

## Nächste Schritte

- [Der phi-browser-Skill](/de/phi-browser-skill/), wie Coding-Agenten Phi in ihren eigenen Agenten-Spaces steuern.
- [Automatisierung & Phi Link](/de/automation/), Aktionen auf Zuruf, Hintergrundaufgaben und die Kontrolle behalten.
- [Datenschutz & deine Daten](/de/privacy/), wo deine Daten liegen und wie die KI gehandhabt wird.
