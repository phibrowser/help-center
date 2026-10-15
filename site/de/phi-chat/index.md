---
description: "Nutze Phi Chat, deinen Assistenten in einem eigenen Fenster: Unterhaltungen aus der Seitenleiste öffnen, Unterhaltungen aus allen Profilen durchsehen, sie in Kategorien ordnen und deine Aufgaben im Blick behalten."
---

# Phi Chat

Phi Chat ist dein Assistent in einem eigenen Fenster, mit eigenem Symbol im Dock, getrennt von deinen Browserfenstern. Es ist derselbe Assistent mit denselben Unterhaltungen wie in der Seitenleiste, nur für längere Arbeit angelegt: rechts ein Chat in voller Größe, links eine Liste deiner Unterhaltungen.

Die Seitenleiste bleibt der Ort, an dem du zur Seite vor dir fragst. In Phi Chat findest du eine ältere Unterhaltung wieder, siehst alles an einem Ort und behältst im Blick, was deine Aufgaben gemeldet haben.

## Phi Chat öffnen {#opening-phi-chat}

Es gibt mehrere Wege hinein:

- **Aus der Seitenleiste.** Klicke in der oberen Leiste der Seitenleiste auf **In Phi Chat öffnen**, um die aktuelle Unterhaltung mitzunehmen. Siehe [Eine Unterhaltung hinüberholen](#moving-a-conversation-over).
- **Aus der Menüleiste.** Klicke auf das Symbol von [Phi Sentinel](/de/sentinel/) und wähle **Phi Chat öffnen**. Wählst du den Eintrag erneut, während Phi Chat im Vordergrund ist, wird das Fenster ausgeblendet. Ein kleiner roter Punkt an diesem Eintrag bedeutet, dass der Assistent etwas gepostet hat, das du noch nicht gelesen hast.
- **Mit einem Kurzbefehl.** Der Kurzbefehl ist standardmäßig aus. Schalte **Phi Chat mit Umschalt Umschalt Umschalt aufrufen** unter **Einstellungen → Phi & KI → Phi Sentinel** ein und drücke dann in einer beliebigen App dreimal die Umschalttaste (⇧). Er funktioniert wie der Eintrag in der Menüleiste, dieselben Tasten blenden das Fenster also wieder aus. Der Kurzbefehl läuft über Phi Sentinel, das die macOS-Berechtigung für Bedienungshilfen braucht, um die Tastendrücke zu bemerken, und beim Einschalten des Kurzbefehls danach fragt.
- **Aus einer Aufgabenbenachrichtigung.** Meldet eine Aufgabe etwas, das deine Aufmerksamkeit verdient, kann Phi eine eigene Benachrichtigungskarte anzeigen, getrennt von den Mitteilungen von macOS. Ihre Taste **Details anzeigen** öffnet diese Unterhaltung in Phi Chat. Siehe [Automatisierung & Phi Link](/de/automation/#notifications).
- **Aus dem Dock oder dem Finder.** Sobald du Phi Chat einmal geöffnet hast, erscheint es auch als App im Ordner **Phi Apps**, im Ordner „Programme“ in deinem Benutzerordner, sodass du es im Dock behalten kannst.

Phi Chat braucht kein offenes Browserfenster. Läuft Phi nicht, startet das Öffnen von Phi Chat es im Hintergrund, ohne ein Browserfenster zu öffnen.

## Eine Unterhaltung hinüberholen {#moving-a-conversation-over}

In der Seitenleiste wird **In Phi Chat öffnen** verfügbar, sobald eine Unterhaltung gespeichert ist und der Assistent nicht gerade mitten in einer Antwort steckt. Ein Klick darauf öffnet diese Unterhaltung in Phi Chat, klappt die Seitenleiste ein und lässt sie bereit für eine neue Unterhaltung.

Zwei Dinge solltest du vor dem Klick wissen:

- **Nicht gesendeter Text bleibt zurück.** Hast du in der Seitenleiste etwas getippt oder Anhänge hinzugefügt, ohne zu senden, fragt Phi, bevor es sie verwirft. Sie werden nicht nach Phi Chat mitgenommen.
- **Ein offenes Phi Chat-Fenster wird wiederverwendet.** Ist Phi Chat schon geöffnet, wechselt es zu dieser Unterhaltung, statt ein zweites Fenster zu öffnen. Was du in diesem Fenster noch nicht gesendet hattest, und eine Antwort, die es gerade noch schrieb, gehen verloren.

Für den umgekehrten Weg klicke in der oberen Leiste von Phi Chat auf **In der Seitenleiste öffnen**. Phi öffnet die Webseite, mit der die Unterhaltung zuletzt verwendet wurde, erneut in ihrem ursprünglichen Space und Profil und setzt die Unterhaltung in der Seitenleiste dieser Seite fort. In Phi Chat bleibt die Unterhaltung ebenfalls offen. Die Taste ist nicht verfügbar, wenn die Unterhaltung nie mit einer Webseite verwendet wurde oder wenn ihr ursprünglicher Space oder ihr ursprüngliches Profil nicht mehr existiert; fährst du mit dem Zeiger darüber, erfährst du, was davon zutrifft.

## Unterhaltungen aus allen Profilen {#conversations-from-every-profile}

Unterhaltungen gehören zu dem [Profil](/de/spaces/), in dem sie begonnen wurden. Die Seitenleiste hält sie getrennt: In einem Profil zeigt sie die Unterhaltungen dieses Profils, dazu alle Unterhaltungen, die zu gar keinem Profil gehören, und nichts aus deinen anderen Profilen.

Phi Chat ist der einzige Ort, der sie alle zeigt. Öffne das Menü über der Unterhaltungsliste, um auszuwählen, was du siehst:

- **Alle**, jede Unterhaltung.
- **Aufgaben**, Unterhaltungen, in denen der Assistent eine Aufgabe angelegt hat. Siehe [Aufgaben und ungelesene Unterhaltungen](#tasks-and-unread-conversations).
- **Nach Profil**, entweder **Ohne Profil** oder eines deiner Profile, angezeigt als **Profil „Arbeit“**, damit es nicht mit einer gleichnamigen Kategorie verwechselt wird.
- **Kategorien**, die Kategorien, die du angelegt hast, dazu **Nicht kategorisiert**.

Ein Profil hier auszuwählen filtert nur die Liste. Es verschiebt nie eine Unterhaltung in ein anderes Profil, und eine Unterhaltung in Phi Chat zu öffnen ändert nicht, zu welchem Profil sie gehört. Einer Unterhaltung ohne Profil kannst du mit **In ein Profil verschieben** in ihrem Menü eines zuweisen, aber es gibt keinen Weg, sie dort wieder herauszunehmen.

Löschst du ein Profil, bleiben seine Unterhaltungen erhalten. Sie verlieren ihre Kategorien und erscheinen in Phi Chat unter **Nicht kategorisiert**. Sind die KI-Funktionen zu diesem Zeitpunkt aus, geschieht das, sobald sie wieder an sind.

## Unterhaltungen finden und ordnen

Die Liste zeigt deine zuletzt aktiven Unterhaltungen zuerst, jeweils 50 auf einmal. Klicke unten auf **Mehr laden**, um ältere zu sehen.

- **Suchen** kannst du mit der Lupe oben in der Liste oder mit Befehlstaste (⌘) + K. Die Suche findet Titel von Unterhaltungen, nicht die Nachrichten darin.
- **Eine neue Unterhaltung beginnst** du mit **Neuer Chat**. Sie erscheint in der Liste, sobald du ihre erste Nachricht sendest.
- **Umbenennen, einordnen oder löschen** kannst du eine Unterhaltung über das Menü **…** in ihrer Zeile. **Löschen** lässt sich nicht widerrufen.
- **Zu einer Seite zurückkehren** kannst du mit **Zurück zur letzten Seite** im selben Menü; das funktioniert wie [in der Seitenleiste](/de/ai/#going-back-to-a-page).

### Kategorien

Kategorien sind deine eigenen Bezeichnungen für Unterhaltungen und gelten über alle deine Profile hinweg. Eine Unterhaltung kann in mehreren zugleich sein.

- Lege eine mit der Taste **+** im Menü über der Liste an oder mit **Neue Kategorie** unten in einem beliebigen Untermenü **Kategorien**, das auch die Unterhaltung einordnet, in der du gerade bist.
- Setze oder entferne Häkchen bei Kategorien über **Kategorien** im Menü **…** einer Unterhaltung oder im Menü der oberen Leiste des Chats. Änderungen gelten sofort beim Klicken.
- Benenne eine Kategorie um oder lösche sie, indem du sie im Menü auswählst und ihr eigenes Menü öffnest. Eine Kategorie zu löschen löscht ihre Unterhaltungen nicht. Jede Unterhaltung, die danach keine Kategorie mehr hat, wandert zu **Nicht kategorisiert**.

**Nicht kategorisiert** ist fest eingebaut. Es sammelt jede Unterhaltung ohne Kategorie und lässt sich weder umbenennen noch löschen.

### Mehrere auf einmal bearbeiten

Um mehrere Unterhaltungen gemeinsam zu bearbeiten, wähle **Auswählen** im Menü **…** einer Unterhaltung, oder klicke bei gedrückter Befehlstaste (⌘) auf eine Zeile. Klicken bei gedrückter Umschalttaste (⇧) wählt einen Bereich aus. Eine Leiste ersetzt dann den Kopf der Liste. Dort kannst du **Alle auswählen**, **Kategorien** für die ganze Auswahl ändern, sie **Löschen** oder auf **Fertig** klicken (oder Esc drücken), um abzuschließen.

**Alle auswählen** wählt die Unterhaltungen aus, die gerade in der Liste geladen sind. Unterhaltungen, die noch hinter **Mehr laden** liegen, sind nicht dabei, die angezeigte Anzahl ist also genau das, was betroffen ist.

## Aufgaben und ungelesene Unterhaltungen {#tasks-and-unread-conversations}

Bittest du den Assistenten, etwas im Hintergrund oder nach Zeitplan zu erledigen, meldet die Aufgabe sich in der Unterhaltung zurück, in der du gefragt hast. Phi Chat hilft dir, mit diesen Berichten Schritt zu halten:

- **Ein blauer Punkt und ein fetter Titel** bedeuten, dass eine Aufgabe in diese Unterhaltung berichtet hat, seit du sie zuletzt geöffnet hast.
- **Ein Uhrsymbol** hinter dem Titel bedeutet, dass die Unterhaltung Aufgaben hat, die noch aktiv sind.
- **Die Ansicht „Aufgaben“** sammelt jede Unterhaltung, in der der Assistent eine Aufgabe angelegt hat. Unterhaltungen aus der Zeit, bevor Aufgaben mit ihren Unterhaltungen verknüpft wurden, erscheinen dort nicht.

Wie ein Bericht aussieht und wie du die Aufgabe dahinter verwaltest, steht in [Automatisierung & Phi Link](/de/automation/#tasks-report-back-to-their-conversation).

## Gut zu wissen

- **Phi Chat ist Teil von Phi Browser.** Beendest du Phi Chat, mit Befehlstaste (⌘) + Q oder über sein Menü, schließt sich nur Phi Chat, und deine Browserfenster bleiben offen. Beendest du Phi aus einem Browserfenster heraus, schließt sich auch Phi Chat.
- **Links öffnen sich in deinem Browser.** Ein Link, den du in Phi Chat anklickst, öffnet sich in einem Browserfenster, im zuletzt verwendeten Profil, gemäß deinen [URL-Regeln](/de/spaces/#url-rules-route-matching-sites-automatically).
- **Das Abschalten der KI schließt es.** Sind die KI-Funktionen unter **Einstellungen → Phi & KI** ausgeschaltet, schließt sich Phi Chat, seine App wird aus dem Ordner **Phi Apps** entfernt, und es lässt sich nicht öffnen. Deine Unterhaltungen werden nicht gelöscht, und du kannst Phi Chat wieder öffnen, sobald die KI-Funktionen wieder an sind.
- **Deine Fragen gehen trotzdem an ein Modell.** Phi Chat ist derselbe Assistent wie in der Seitenleiste, deine Fragen werden also genauso behandelt. Siehe [Wohin deine Fragen gehen](/de/ai/#where-your-questions-go).

## Nächste Schritte

- [Lerne deinen Assistenten kennen](/de/ai/), mit ihm in der Seitenleiste sprechen und Tabs in eine Unterhaltung holen.
- [Automatisierung & Phi Link](/de/automation/), Aufgaben, die im Hintergrund laufen und sich zurückmelden.
- [Spaces & Profile](/de/spaces/), wie Profile die Dinge getrennt halten.
