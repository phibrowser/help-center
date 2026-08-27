---
description: "Steuere Phi Browser aus dem Terminal mit dem Befehl phi: Seiten öffnen, klicken, Formulare ausfüllen und Screenshots aufnehmen, in Agenten-Spaces mit den Websites, bei denen du bereits angemeldet bist."
---

# Die Phi-CLI

Die **Phi-CLI** bringt Phis Browser-Automatisierung als einen einzigen Befehl auf deine Kommandozeile: **`phi`**. Alles, was einen Terminalbefehl ausführen kann, kann damit deinen Browser steuern: du, ein Shell-Skript, ein CI-Job oder ein Coding-Agent.

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

Anders als Automatisierungswerkzeuge, die einen leeren Wegwerf-Browser starten, steuert die CLI **dein** Phi. Sie ist ein Kommandozeilen-Frontend für dieselbe Engine wie der [phi-browser-Skill](/de/phi-browser-skill/), alles auf jener Seite gilt also auch hier: Die Arbeit passiert in einem verborgenen **Agenten-Space** mit den Websites, bei denen du bereits angemeldet bist, sie erscheint als Roboter-Symbol in deinem Space-Umschalter, du kannst live zusehen, und du kannst jederzeit die Steuerung übernehmen.

## Installation

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

Beide Wege installieren den Befehl `phi`, dazu `phibrowser` als Alias dafür. Nötig sind macOS, Node 22 oder neuer und Phi Browser 2.4.0 oder neuer, denn die CLI ist ein Client, kein Browser. Fehlt Phi Browser oder ist er zu alt, bietet die CLI an, ihn für dich zu installieren oder zu aktualisieren, aus demselben signierten Release-Feed, aus dem sich die App selbst aktualisiert; `phi install browser` tut dasselbe ohne Rückfrage.

Mehr ist nicht einzurichten. Phi Browser muss nicht laufen, denn die CLI startet ihn bei Bedarf. Verbindet sich die CLI zum ersten Mal, zeigt Phi seine übliche Freigabeabfrage (**Einmal erlauben**, **Immer erlauben** oder **Ablehnen**), und mit der Genehmigung der CLI wird die Agentensteuerung als Teil der Freigabe eingeschaltet. Auf älteren Phi-Builds wird der Agentenzugriff stattdessen von Hand unter **Einstellungen → Entwickler** eingeschaltet; die CLI sagt dir, wenn sie auf einen solchen trifft.

## Die Elementkarte

Nach jeder Navigation gibt die CLI die Kopfzeile der Seite aus, dazu eine Zeile pro interaktivem Element, in genau der Syntax, die die Aktionsbefehle akzeptieren:

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

Die `@N`-Referenzen bleiben gültig, solange das Element existiert, du kannst die Karte also lesen, entscheiden und in getrennten Befehlen handeln. Nach einer Aktion gibt die CLI nur aus, was sich auf der Seite geändert hat; hat die Aktion navigiert, gibt sie stattdessen die vollständige Karte der neuen Seite aus. Fürs Skripten liefert `--json` rohes JSON, und `--quiet` unterdrückt die Zusammenfassungen.

`phi help` zeigt die vollständige Befehlsliste (Navigation, Snapshots, Screenshots und PDFs, Cookies und Storage, Warten, Tab-Gruppen, Downloads und mehr), `phi help <command>` die Flags des jeweiligen Befehls.

## Sitzungen

Eine Sitzung benennt eine Aufgabe und ihren Agenten-Space. Die Standardsitzung heißt `cli`; gib jedem eigenen Ziel mit `-s` eine eigene:

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

Wie jeder Agenten-Space ist der Space einer Sitzung standardmäßig flüchtig: Er schließt sich eine Weile, nachdem die Aufgabe zur Ruhe gekommen ist, von selbst. Ergänze `--persistent`, wenn er stattdessen als bleibender Arbeitsbereich erhalten bleiben soll.

## Wo Befehle laufen

Standardmäßig passiert alles im verborgenen Agenten-Space der Sitzung. Zwei Dinge erweitern das:

- **Deine echten Fenster.** `phi -U "Work" goto …` (und dasselbe für `click`, `fill`, `snapshot` und den Rest) steuert das sichtbare Fenster eines deiner eigenen Spaces statt eines verborgenen. Deine Klicks und die der CLI greifen im selben Fenster ineinander, deshalb handelt sie in kleinen Schritten und liest die Seite dazwischen neu.
- **Browserverwaltung.** Befehle wie `space-list`, `bookmark-add`, `rules`, `pins` und `downloads` bedienen deine echten Browserdaten app-weit und spiegeln, was der phi-browser-Skill kann.

Beides liegt hinter **Einstellungen → Entwickler → „Agenten dürfen deine Spaces bedienen“**, standardmäßig aus, genau wie bei Coding-Agenten. Bis du die Berechtigung einschaltest, bleibt die CLI auf ihre eigenen Agenten-Spaces beschränkt.

## Anmelden

Die CLI bittet dich nie, ein Passwort in ein Terminal einzufügen. Die Anmeldung läuft über den [Passwortmanager für Agenten](/de/agent-passwords/): Mit `phi cred-fill` füllt Phi ein Anmeldefeld direkt aus deinem Tresor aus, das Geheimnis wandert also von der App zur Seite, ohne die CLI zu durchlaufen, und jede Anfrage öffnet Phis Abfrage zum Genehmigen oder Ablehnen, die benennt, wer fragt und wofür. Ausfüllvorgänge sind an die Website gebunden, zu der die Zugangsdaten gehören, Zwei-Faktor-Codes werden nie an Automatisierung herausgegeben, und jedes Geheimnis, das ein Befehl verarbeitet hat, wird aus dessen Ausgabe entfernt.

## Du behältst das Sagen

Die CLI erbt die Regeln fürs Zusammenarbeiten vom Skill. Klicke auf das Roboter-Symbol in deinem Space-Umschalter, um einer Sitzung live zuzusehen, und übernimm jederzeit mit **Steuerung übernehmen**. Solange du am Steuer sitzt, werden verändernde Befehle der CLI abgelehnt, bis du zurückgibst. Gehört ein Schritt dir (eine Anmeldung, ein Captcha, ein Zwei-Faktor-Code), lautet der Ablauf `phi handoff "Sign in, then hand back"`: Phi benachrichtigt dich, du erledigst den menschlichen Schritt, und die Arbeit geht weiter, wenn du die Steuerung zurückgibst.

Eines solltest du wissen, bevor du Automatisierung auf ein Konto richtest, das dir wichtig ist: Manche Websites wollen keine Agenten, und sie ziehen Konsequenzen. Reddit ist das bekannte Beispiel, und Konten, die als automatisiert eingestuft werden, werden eingeschränkt oder gesperrt. Was die CLI auf deine Anweisung hin tut, ist deins, und dieses Risiko liegt bei dir; wir können in deinem Namen weder Einspruch einlegen noch etwas rückgängig machen.

## Den Skill aus dem Terminal installieren

Die CLI kann den [phi-browser-Skill](/de/phi-browser-skill/) auch selbst einrichten:

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

Das ist dasselbe, was die Tasten unter **Einstellungen → Entwickler → phi-browser-Skill installieren** tun, nur ohne das Terminal zu verlassen: Der in Phi mitgelieferte Skill wird in den Skills-Ordner jedes Agenten verknüpft und bleibt so mit jedem Phi-Update aktuell.

::: tip Nicht dasselbe wie Browser Skills
[Browser Skills](/de/skills/) sind die Arbeitsabläufe, die du dem Assistenten in Phi beibringst. Was `phi install skill` installiert, ist der phi-browser-Skill, das Paket, mit dem ein externer Coding-Agent Phi steuert.
:::

## Nächste Schritte

- [Der phi-browser-Skill](/de/phi-browser-skill/), Agenten-Spaces, Agenten live zusehen und wie der Zugriff eingegrenzt ist. Alles davon gilt für die CLI.
- [Passwortmanager für Agenten](/de/agent-passwords/), wie Automatisierung sich mit deinem Tresor anmeldet, ohne deine Passwörter zu sehen.
- [Spaces & Profile](/de/spaces/), die Arbeitsbereiche und Anmelde-Identitäten, auf denen Agenten-Spaces aufbauen.
