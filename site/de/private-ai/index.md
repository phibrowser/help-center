---
description: "Private KI verstehen: was Phi Cloud ist, wie es sich zu deinen eigenen KI-Anbietern verhält und wie du KI-Aufgaben auf deinem Mac oder mit einem Dienst deiner Wahl wie Ollama oder LM Studio ausführst."
---

# Private KI

Die KI-Funktionen von Phi laufen standardmäßig über **Phi Cloud**. Mit **Private KI** entscheidest du Aufgabe für Aufgabe, wer welche Art von KI-Arbeit übernimmt: Phi Cloud, ein auf diesen Mac heruntergeladenes Modell oder ein KI-Anbieter, den du selbst verbindest, etwa Ollama, LM Studio, OpenAI oder OpenRouter.

Private KI ist standardmäßig aus. Schaltest du sie nie ein, funktioniert jede KI-Funktion wie gewohnt und nutzt Phi Cloud.

## Der Assistent, Phi Cloud und KI-Anbieter {#assistant-phi-cloud-and-providers}

Diese drei werden leicht verwechselt, deshalb hilft es, sie zuerst auseinanderzuhalten:

- **Der Assistent** ist der, dem du einen Namen gegeben hast. Er ist der Agent von Phi: Er findet heraus, worum du bittest, und entscheidet, was zu tun ist, ob er eine Seite liest, einen Browser Skill ausführt, im Browser handelt oder eine Aufgabe anlegt. Es ist derselbe Assistent, egal welches Modell er nutzt, und deine Unterhaltungen, Erinnerungen und Aufgaben ändern sich nicht mit dem Modell.
- **Ein Modell** ist das „Gehirn“, das sich der Assistent zum Denken leiht. Bei jedem Schritt schickt der Assistent, was er braucht, an ein Modell, und das Modell antwortet.
- **Eine KI-Quelle** bestimmt, wo dieses Modell läuft. Es gibt drei Arten:
  - **Phi Cloud**, der in Phi eingebaute KI-Dienst. Phi Cloud ist kein Agent und auch kein bestimmtes Modell, sondern eine Reihe von Cloud-Modellen, mit denen sich Phi verbindet und die Phi für dich verwaltet. Phi Cloud nutzt deine Phi-Anmeldung, braucht keinen API-Schlüssel und verlangt nicht, dass du ein Modell auswählst.
  - **Lokale Modelle**, Modelle, die auf diesen Mac heruntergeladen werden und auf diesem Mac laufen.
  - **Deine Anbieter**, KI-Dienste, die du selbst verbindest, mit deiner eigenen Adresse, deinem eigenen Konto oder deinem eigenen API-Schlüssel.

Phi Cloud steht also an derselben Stelle wie Ollama oder OpenAI: Phi Cloud ist eine Antwort auf die Frage „Wo läuft das Modell des Assistenten?“ Der Unterschied ist, dass Phi Cloud eingebaut ist und sofort funktioniert, während du die anderen selbst einrichtest.

### Die Quellen im Vergleich {#comparing-sources}

|                                 | Phi Cloud                                                                      | Lokale Modelle                                                 | Deine lokalen Anbieter (Ollama, LM Studio)                            | Deine Cloud-Anbieter (OpenAI, OpenRouter, Codex und andere) |
| ------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| Was du brauchst                 | Nichts außer der Anmeldung bei Phi                                             | Einen Einrichtungsschritt, der sie herunterlädt                | Ollama oder LM Studio, installiert und gestartet                      | Ein Konto oder einen API-Schlüssel bei diesem Dienst        |
| Wohin deine Inhalte gehen       | Über Phi zu dem Modellanbieter, den Phi nutzt                                  | Nirgendwohin. Sie bleiben auf diesem Mac                       | An die Adresse, die du festlegst, meist dieser Mac oder dein Netzwerk | Direkt von deinem Mac zu diesem Dienst                      |
| Unter wessen Konto sie ankommen | Unter dem von Phi. Der Modellanbieter erfährt nicht, wer du bist               | Entfällt                                                       | Entfällt                                                              | Unter deinem, über dein eigenes Konto oder deinen Schlüssel |
| Kosten                          | In Phi enthalten, im Rahmen deines [Nutzungskontingents](/de/ai/#usage-limits) | Kostenlos, nutzt Arbeitsspeicher und Rechenleistung dieses Mac | Kostenlos, nutzt den Computer, auf dem der Anbieter läuft             | Die Preise des jeweiligen Dienstes                          |
| Zählt zu Phis Kontingent        | Ja                                                                             | Nein                                                           | Nein                                                                  | Nein                                                        |
| Funktioniert offline            | Nein                                                                           | Ja                                                             | Ja, wenn der Anbieter auf diesem Mac läuft                            | Nein                                                        |
| Qualität                        | Gleichbleibend, für jede Aufgabe geeignet                                      | Hängt von der Modellgröße ab, meist unter Cloud-Modellen       | Hängt vom gewählten Modell ab                                         | Hängt vom gewählten Modell ab                               |

Wie Phi Cloud mit deinen Inhalten umgeht, steht unter [Datenschutz & deine Daten](/de/privacy/). Nutzt du einen eigenen Cloud-Anbieter, gilt die Datenschutzerklärung dieses Anbieters.

## Wann Phi deinen Anbieter nutzt {#when-phi-uses-your-provider}

Einen Anbieter hinzuzufügen ändert für sich allein nichts. Phi nutzt ihn nur, wenn beides zutrifft:

1. Unter **Private KI → KI-Aufgaben** hast du eines der Modelle dieses Anbieters als Quelle für eine Aufgabe gewählt.
2. Der Schalter **Private KI** ist eingeschaltet.

Jede Aufgabe, die du nicht geändert hast, nutzt weiter Phi Cloud. Schaltest du Private KI aus, gehen alle Aufgaben sofort zurück zu Phi Cloud, aber deine Auswahl bleibt erhalten, sodass das erneute Einschalten sie ohne weitere Einrichtung wiederherstellt.

## Eine Quelle für jede Aufgabe wählen {#choosing-a-source-for-each-task}

Private KI ist nicht alles oder nichts. Du legst sie Aufgabe für Aufgabe fest, und oben auf der Seite steht, wie viele Aufgaben nicht über Phi Cloud laufen, zum Beispiel als **Privat ausgeführt: 2 von 4 KI-Aufgaben**.

| KI-Aufgabe       | Was sie umfasst                                                             | Wählbare Quellen                                               |
| ---------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Chat**         | Antworten in der Seitenleiste und in Phi Chat                               | Phi Cloud, lokale Modelle, deine Anbieter, Codex               |
| **Erinnerungen** | Hintergrundarbeit wie Erinnerungen an besuchte Seiten und Zusammenfassungen | Phi Cloud, lokale Modelle, deine Anbieter, Codex               |
| **Webaufgaben**  | Der Assistent, der im Browser handelt, und Automatisierung                  | Phi Cloud, lokale Modelle, deine Anbieter, Codex               |
| **Datensuche**   | Suche in den Daten, die du verbunden hast                                   | Nur Phi Cloud oder das lokale Suchmodell, das Phi herunterlädt |

Daneben gibt es noch ein paar weitere Zeilen:

- **Vision-Fallback.** Kann das Modell, das du für eine Aufgabe gewählt hast, keine Bilder lesen, gehen Bilder stattdessen an das hier festgelegte Modell. Anfangs steht hier **Nicht konfiguriert**.
- **KI-gestützte Tab-Organisation** übernimmt unter macOS Apple Intelligence, und das lässt sich nicht ändern. Auf Macs ohne Apple Intelligence erscheint diese Zeile nicht.
- **Bildgenerierung** nutzt immer Phi Cloud.

Wechselst du eine Aufgabe zu einer anderen Quelle, testet Phi dieses Modell zuerst. Schlägt der Test fehl, geht die Aufgabe zurück zu ihrer vorherigen Quelle, und du erfährst, warum.

Sobald Chat eine andere Quelle als Phi Cloud nutzt, zeigt der Chat **Du verwendest Private KI** an, weil sich Antworten in der Qualität von Online-Modellen unterscheiden können.

## Private KI einschalten {#turning-on-private-ai}

Zu den Einstellungen für Private KI führen zwei Wege:

- Klicke in [Phi Chat](/de/phi-chat/) in der oberen Leiste auf die Einstellungstaste (Zahnrad) und wähle **Private KI**.
- Gehe im Browser zu **Einstellungen → Phi & KI → Phi Sentinel → Private KI**. Das öffnet dieselbe Seite in Phi Chat.

Wenn du den Schalter zum ersten Mal einschaltest, prüft Phi, ob dieser Mac lokale Modelle ausführen kann:

- **Wenn ja**, nennt das Einrichtungsfenster die Downloadgröße, ungefähr wie viel Arbeitsspeicher die Modelle im Betrieb belegen und welche Aufgaben auf diesen Mac wechseln. Klicke auf **Einrichtung starten**, und Phi installiert die lokale Laufzeitumgebung, lädt die Modelle herunter, startet sie und überprüft sie. Mit **Minimieren** kannst du das Fenster ausblenden und die Einrichtung im Hintergrund weiterlaufen lassen. Bis sie fertig ist, nutzt jede KI-Funktion weiter Phi Cloud.
- **Wenn nicht**, nennt das Fenster den Grund. Du kannst trotzdem auf **Eigenen KI-Dienst verwenden** klicken, um deine eigenen Anbieter ohne lokale Modelle zu verbinden.

### Voraussetzungen {#requirements}

| Element              | Voraussetzung                                                     |
| -------------------- | ----------------------------------------------------------------- |
| Chip                 | Apple Silicon. Intel-Macs können keine lokalen Modelle ausführen  |
| Arbeitsspeicher      | Mindestens 16 GB                                                  |
| Freier Speicherplatz | Mindestens 10 GB und mindestens 2 GB mehr als der Download selbst |

Nichts davon gilt, wenn du nur eigene Anbieter verbindest, etwa Ollama auf einem anderen Computer in deinem Netzwerk oder OpenAI.

### Was die Einrichtung installiert {#what-setup-installs}

Die Einrichtung lädt derzeit zwei Modelle herunter, die im Betrieb zusammen etwa 7 GB Arbeitsspeicher belegen:

- **Gemma 4 E4B (4-bit)** für **Erinnerungen**.
- **BGE-M3** für **Datensuche**.

**Chat** und **Webaufgaben** bleiben auf Phi Cloud. Diese beiden brauchen ein Modell, das langen Kontext und Tool-Aufrufe zuverlässig bewältigt, und Phi verschiebt sie nur dann automatisch auf diesen Mac, wenn ein lokales Modell mit 20 Milliarden Parametern oder mehr verfügbar ist. Das Gemma-Modell, das die Einrichtung herunterlädt, hat etwa 4 Milliarden: gut für Hintergrundarbeit, aber nicht, um eine Unterhaltung zu tragen. Du kannst Chat trotzdem unter **KI-Aufgaben** von Hand darauf umstellen, sofern es den Test besteht. Wenn die Einrichtung fertig ist, sagt sie dir genau, welche Aufgaben jetzt auf diesem Mac laufen.

Nach der Einrichtung wird der Index, mit dem die Erinnerungen zusammengehörige Einträge finden, weiterhin auf Phi Cloud erstellt. Soll auch das auf diesem Mac geschehen, wähle einmal von Hand das lokale Modell für **Datensuche**, dann wechseln beide auf diesen Mac.

## Ollama oder LM Studio verbinden {#connecting-ollama-or-lm-studio}

Ollama und LM Studio sind kostenlose Apps, mit denen du offene Modelle auf deinem eigenen Computer ausführst. Beide sind in Phi als Anbieter eingebaut, standardmäßig unter `http://127.0.0.1:11434` für Ollama und `http://127.0.0.1:1234/v1` für LM Studio.

1. Installiere und öffne Ollama oder LM Studio und lade ein Modell herunter (siehe [Empfohlene Modelle](#recommended-models)).
   - Ollama: Führe im Terminal `ollama pull <model>` aus, zum Beispiel `ollama pull gpt-oss:20b`.
   - LM Studio: Suche in der App nach einem Modell, lade es herunter und starte auf der Seite **Developer** den lokalen Server.
2. Öffne in Phi Chat **Einstellungen → KI-Anbieter** und wähle **Ollama** oder **LM Studio**.
3. Schalte **Diesen Anbieter verwenden** ein. Läuft der Dienst auf einem anderen Computer in deinem Netzwerk, ändere die **Basis-URL** in die Adresse dieses Computers.
4. Klicke auf **Laden**, um seine Modelle abzurufen. Wähle unter **Modellzugriff** entweder **Alle Modelle zulassen** oder **Nur ausgewählte Modelle** und hake die gewünschten an.
5. Wähle ein Modell, klicke auf **Test** und, sobald eine erfolgreiche Verbindung gemeldet wird, auf **Änderungen speichern**.
6. Gehe zurück zu **Private KI** und wähle unter **KI-Aufgaben** dieses Modell für die Aufgabe, die du verschieben willst, etwa **Chat**.
7. Schalte den Schalter **Private KI** ein.

Für jeden anderen Dienst mit einer OpenAI-kompatiblen API nutze **Eigenen Anbieter hinzufügen** und gib einen Namen, die Basis-URL und, falls der Dienst einen braucht, einen API-Schlüssel ein.

Gut zu wissen:

- Die Basis-URL kann `http` oder `https` sein, und der API-Schlüssel ist optional, weil lokale Dienste meist keinen brauchen. Ein Schlüssel, der an eine `http`-Adresse gesendet wird, wird unverschlüsselt übertragen. Nutze deshalb `https` für alles, was nicht auf deinem eigenen Mac oder in deinem eigenen Netzwerk liegt.
- Ollama oder LM Studio muss geöffnet bleiben. Geht der Computer in den Ruhezustand oder wird die App beendet, folgen die betroffenen Aufgaben deiner [Fallback-Einstellung](#when-a-local-source-is-unavailable).
- Webaufgaben und lange Unterhaltungen bringen viel Text mit. Kommen Antworten unvollständig zurück oder schafft der Assistent eine Aktion nicht, erhöhe die Kontextlänge, zum Beispiel auf 32K: in den Einstellungen von Ollama mit **Context length** oder in LM Studio beim Laden des Modells mit **Context Length**. Ein längerer Kontext belegt mehr Arbeitsspeicher.
- Damit andere Computer in deinem Netzwerk Ollama erreichen, muss Ollama auf diesem Computer auf seiner Netzwerkadresse lauschen (`OLLAMA_HOST=0.0.0.0`).

## Empfohlene Modelle {#recommended-models}

Offene Modelle entwickeln sich schnell, betrachte die folgenden Namen deshalb als Beispiele. Ein neueres Modell derselben Größe funktioniert genauso gut. Zwei Dinge zählen am meisten: Das Modell muss groß genug sein, und es muss in den Arbeitsspeicher passen. Ein Modell belegt im Betrieb ungefähr seine Downloadgröße an Arbeitsspeicher, dazu ein paar GB, und macOS und deine anderen Apps brauchen ebenfalls Platz.

| Arbeitsspeicher deines Mac | Vorschlag                                                                                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16 GB                      | Nutze die Einrichtung, damit Erinnerungen und Datensuche auf diesem Mac laufen, und lass Chat und Webaufgaben auf Phi Cloud. In so viel Arbeitsspeicher passt kein Modell, das für Chat taugt |
| 32 GB                      | Du kannst für Chat ein Modell der 20-Milliarden-Parameter-Klasse ausführen, zum Beispiel **gpt-oss-20b** (Ollama: `gpt-oss:20b`) oder **Qwen3 30B** (Ollama: `qwen3:30b`)                     |
| 64 GB                      | Du kannst ein zuverlässigeres Modell der 30-Milliarden-Parameter-Klasse wählen, zum Beispiel **Qwen3 32B** (Ollama: `qwen3:32b`), mit Platz für einen längeren Kontext                        |
| 128 GB oder mehr           | Du kannst ein Modell der 100-Milliarden-Parameter-Klasse ausführen, zum Beispiel **gpt-oss-120b** (Ollama: `gpt-oss:120b`), das näher an Cloud-Modelle herankommt                             |

Nach Aufgabe:

- **Chat und Webaufgaben:** Wähle ein Modell mit 20 Milliarden Parametern oder mehr, das Tool-Aufrufe (Function Calling) unterstützt. Webaufgaben sind am stärksten auf Tool-Aufrufe angewiesen, und kleine Modelle scheitern oft daran.
- **Vision-Fallback:** Wähle ein Modell, das Bilder lesen kann, zum Beispiel Gemma 3 12B (Ollama: `gemma3:12b`) oder Qwen2.5-VL 7B (Ollama: `qwen2.5vl:7b`).
- **Erinnerungen:** Das Gemma-Modell aus der Einrichtung reicht aus, und meist gibt es keinen Grund, es zu ändern.
- **Datensuche:** nur das lokale Suchmodell, das Phi herunterlädt, oder Phi Cloud.

Egal wie groß, ein lokales Modell bleibt meist hinter den Spitzenmodellen zurück, auf denen Phi Cloud aufbaut. Ist dir die Qualität der Antworten wichtiger, als Inhalte auf deinem Mac zu halten, ist es eine vernünftige Wahl, Chat und Webaufgaben auf Phi Cloud zu lassen.

## Wenn eine lokale Quelle nicht verfügbar ist {#when-a-local-source-is-unavailable}

Reagiert ein lokales Modell, Ollama oder LM Studio nicht mehr, folgt Phi der Einstellung **Wenn eine lokale oder selbst gehostete Quelle nicht verfügbar ist**:

- **Automatisch auf Phi Cloud zurückgreifen (Standard)**. Die betroffenen Aufgaben nutzen vorübergehend Phi Cloud, sodass die KI-Funktionen weiter funktionieren. Das heißt aber auch, dass ihre Inhalte in dieser Zeit in die Cloud gehen.
- **Betroffene KI-Funktionen pausieren (niemals Daten an die Cloud senden)**. Die betroffenen Funktionen pausieren, bis die lokale Quelle wieder antwortet.

Hast du Private KI eingeschaltet, um Inhalte auf diesem Mac zu halten, wähle die zweite Option.

Diese Einstellung gilt nur für lokale und selbst gehostete Quellen. Fällt ein Cloud-Anbieter wie OpenAI, OpenRouter oder Codex aus, wechselt Phi nicht zu Phi Cloud.

Wenn etwas schiefgeht, zeigt die Seite „Private KI“ **Aktion erforderlich** an, mit der Taste **Lokalen Dienst neu starten**.

## Codex verwenden {#using-codex}

Hast du ein ChatGPT-Abo und bist auf diesem Mac bei Codex angemeldet, kannst du dieses Abo als KI-Anbieter nutzen. Gehe zu **Einstellungen → KI-Anbieter → Codex** und klicke auf **Verbinden**. Phi nutzt die Anmeldung, die Codex bereits speichert, ohne deine Zugangsdaten zu kopieren.

- Installiere zuerst Codex und führe im Terminal `codex login` aus. Phi kann keine Codex-Anmeldung lesen, die im Schlüsselbund gespeichert ist.
- Codex kann Chat, Erinnerungen, Webaufgaben und Vision-Fallback übernehmen, aber nicht Datensuche.
- Was Codex tut, zählt zu den Limits deines ChatGPT-Abos. Sind sie aufgebraucht oder funktioniert die Anmeldung nicht mehr, wechselt Phi nicht zu einer anderen Quelle.

## Ausschalten und zurücksetzen {#turning-off-and-resetting}

- **Private KI ausschalten:** mit ihrem Schalter. Alle Aufgaben gehen sofort zurück zu Phi Cloud, und die heruntergeladenen Modelle und deine Auswahl bleiben erhalten.
- **Einen Anbieter entfernen:** mit **Anbieter entfernen** auf seiner Seite. Aufgaben, die ihn genutzt haben, gehen zurück zu Phi Cloud.
- **Zurücksetzen:** mit **KI-Einstellungen zurücksetzen** unter **Erweiterte Einstellungen**. Das verschiebt alle Aufgaben zurück zu Phi Cloud, entfernt deine Anbieter und ihre API-Schlüssel und löscht die lokalen Modelle.

## Nächste Schritte

- [Lerne deinen Assistenten kennen](/de/ai/), was der Assistent für dich tun kann.
- [Phi Sentinel](/de/sentinel/), der Hintergrunddienst, über den Private KI läuft.
- [Datenschutz & deine Daten](/de/privacy/), wo deine Daten liegen und was Phi sendet.
