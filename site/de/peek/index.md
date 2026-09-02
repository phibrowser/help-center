---
description: "Zeige einen Link als Vorschau in einem schwebenden Panel über der Seite an, die du gerade in Phi Browser liest, und schließe die Vorschau danach, öffne sie als Tab oder öffne sie als Split View."
---

# Peek-Ansicht

Ein Peek ist ein schwebendes Panel, das eine Seite über der anzeigt, die du gerade liest. Folge einem Link, lies, was dort steht, schließe die Vorschau, und du bist wieder da, wo du angefangen hast, ohne dass ein zusätzlicher Tab zum Aufräumen übrig bleibt.

Peek funktioniert in den Modi **Ausgewogen** und **Performance**. Der Modus „Komfortabel“ öffnet stattdessen jeden Link als normalen Tab. In Inkognito-Spaces ist Peek ebenfalls ausgeschaltet.

## Einen Peek öffnen

Es gibt drei Wege zu einem Peek:

- **Folge einem Link aus einem Lesezeichen oder angehefteten Tab.** Führt ein Link in einem Lesezeichen oder angehefteten Tab zu einer anderen Website, zeigt Phi ihn in einem Peek als Vorschau an, statt den Tab von seiner Seite wegzuführen. Links, die auf derselben Website bleiben, navigieren weiterhin an Ort und Stelle. Dieser automatische Peek hat einen eigenen Schalter, beschrieben unter [Peek-Einstellungen](#peek-settings).
- **Klicke einen Link bei gedrückter Umschalttaste an.** Das funktioniert in jedem regulären Tab, nicht nur in Lesezeichen und angehefteten Tabs.
- **Klicke einen Link mit der rechten Maustaste an und wähle „Link in Peek-Ansicht öffnen“.** Dasselbe Ergebnis wie der Klick mit gedrückter Umschalttaste, nur aus dem Kontextmenü der Seite.

„Eine andere Website“ heißt: eine andere Domain. Subdomains derselben Website, etwa der Wechsel von einem Google-Angebot zu einem anderen, zählen als dieselbe Website und öffnen sich wie gewohnt an Ort und Stelle. Links, die keine Webseiten sind, etwa `mailto:`-Adressen, öffnen sich nie in einem Peek.

Der Klick mit gedrückter Umschalttaste und der Kontextmenüeintrag stehen in einem Bereich eines Split View und in einem Peek selbst nicht zur Verfügung. Dort öffnet sich ein Link so, wie er es normalerweise würde.

## Im Panel

Die Seite füllt das Panel randlos aus. Drei Bedienelemente sitzen in der Leiste rechts daneben:

| Bedienelement             | Was es tut                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schließen**             | Schließt die Vorschau und ihre Seite.                                                                                                             |
| **Als Tab öffnen**        | Macht aus der Vorschau einen regulären Tab. Die Seite wird nicht neu geladen; Scrollposition und alles, was du eingetippt hast, bleiben erhalten. |
| **Als Split View öffnen** | Stellt die Vorschau neben den Tab, aus dem sie kam, als Split View mit zwei Bereichen.                                                            |

## Einen Peek schließen

Jeder dieser Wege schließt die Vorschau:

- Drücke die **Esc-Taste** oder **⌘W**.
- Klicke auf die Seite rund um das Panel.
- Gehe mit **Zurück** oder **Vorwärts**, oder tippe eine Adresse in die Adressleiste. Beides gilt als „Vorschau verlassen“: Der Peek schließt sich, und der darunterliegende Tab bleibt, wo er war.
- Klicke auf die Minus-Taste am Seitenleisteneintrag oder am angehefteten Tab, aus dem der Peek stammt.
- Schließe den Tab, aus dem der Peek stammt. Sein Peek verschwindet mit ihm.

## Ein Peek pro Tab

Jeder Tab kann seinen eigenen Peek tragen, und nur der Peek des Tabs, den du gerade ansiehst, ist auf dem Bildschirm. Wechselst du zu einem anderen Tab, verschwindet das Panel; wechselst du zurück, kehrt es mit der Seite zurück, wie du sie verlassen hast. Öffnest du aus demselben Tab einen zweiten Peek, ersetzt er den ersten.

Solange ein Tab einen Peek trägt, erscheint das Favicon der Vorschauseite am Ende seines Seitenleisteneintrags oder als kleine Markierung an der Ecke eines angehefteten Tabs. Bewege den Zeiger darüber, und es wird zu einer Minus-Taste, die den Peek schließt.

Peeks überleben einen Neustart. Wenn Phi deine Sitzung wiederherstellt, kehrt ein Peek mit dem Tab zurück, zu dem er gehörte.

## Peek-Einstellungen {#peek-settings}

Öffne die **Einstellungen**, wechsle zum Tab **Navigation** und sieh unter **Peek** nach. Dort gibt es zwei Schalter, beide standardmäßig aktiviert.

- **Peek-Ansicht aktivieren** ist der Hauptschalter. Ist er ausgeschaltet, kehren Links zu ihrem gewohnten Verhalten zurück: Ein Link zu einer anderen Website öffnet sich aus einem Lesezeichen oder angehefteten Tab als neuer Tab, der Klick mit gedrückter Umschalttaste öffnet ein neues Fenster, und der Kontextmenüeintrag verschwindet. Ein Peek, der in dem Moment offen ist, wird zu einem regulären Tab, statt einfach zu verschwinden. Der Wechsel in den Modus „Komfortabel“ bewirkt dasselbe.
- **Links aus angehefteten Tabs und Lesezeichen automatisch in Peek-Ansicht öffnen** betrifft nur den automatischen Fall. Schaltest du diesen Schalter aus, öffnet sich ein Link zu einer anderen Website aus einem Lesezeichen oder angehefteten Tab als neuer Tab, während der Klick mit gedrückter Umschalttaste und **Link in Peek-Ansicht öffnen** weiterhin funktionieren. Wähle diese Einstellung, wenn du einen Peek nur dann willst, wenn du ihn selbst auslöst.

Der zweite Schalter folgt dem ersten. Schaltest du **Peek-Ansicht aktivieren** aus, geht die automatische Option mit aus; schaltest du ihn wieder ein, kommt sie zurück. Solange die Peek-Ansicht ausgeschaltet ist, ist der zweite Schalter ausgegraut.

Wie Lesezeichen und angeheftete Tabs überhaupt an ihre Seite gebunden bleiben, steht in [Lesezeichen & angeheftete Tabs](/de/bookmarks/). Seiten nebeneinander und der restliche Seitenleisten-Workflow stehen in [Layouts & Navigation](/de/layouts/).
