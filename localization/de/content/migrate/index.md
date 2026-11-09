---
description: "Wie Aus anderem Browser migrieren deine Profile und Spaces aus Arc oder Zen in Phi Browser nachbaut, was jeder Browser mitbringt, welche Berechtigungsabfragen dich erwarten und wie es sich vom Import unterscheidet."
---

# Von Arc oder Zen migrieren

**Aus anderem Browser migrieren…** baut die Struktur deines Arc- oder Zen-Setups in Phi nach. Es erstellt für jedes Quellprofil ein Phi-Profil und für jeden Quell-Space einen Phi-Space, füllt dann jeden Space mit seinen Lesezeichen und jedes Profil mit seinen angehefteten Tabs und Browserdaten. Danach steht deine alte Seitenleiste in Phi wieder da.

Eine Migration erstellt immer nur Neues. Sie ändert nie ein Profil oder einen Space, den du in Phi schon hast, führt nichts damit zusammen und löscht nichts.

## Migrieren oder importieren {#migrate-or-import}

Phi hat zwei Befehle, um Daten zu übernehmen. Sie stehen nebeneinander im Menü **Phi** (dem fett gedruckten App-Menü neben dem Apple-Menü):

|                             | **Aus anderem Browser importieren...**               | **Aus anderem Browser migrieren…**                          |
| --------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| Was es tut                  | Fügt Daten zu dem Space hinzu, in dem du gerade bist | Erstellt neue Profile und Spaces, die die Quelle nachbilden |
| Browser                     | Chrome, Safari, Arc, Dia oder eine Datei             | Arc und Zen                                                 |
| Wo die Daten landen         | In deinem aktuellen Space und seinem Profil          | In den neuen Profilen und Spaces, die es erstellt           |
| Du wählst                   | Welche Datentypen übernommen werden                  | Welche Spaces nachgebaut werden                             |
| Deine vorhandenen Phi-Daten | Lesezeichen und Verlauf kommen zum Vorhandenen hinzu | Bleiben unberührt                                           |

Nimm **Importieren**, wenn du schon ein Phi-Setup hast, das dir gefällt, und Lesezeichen oder Verlauf hinzufügen willst. Nimm **Migrieren**, wenn du von Arc oder Zen umziehst und deine Spaces so zurückhaben willst, wie sie waren, ohne sie von Hand neu aufzubauen. Der Import steht unter [Importieren & Exportieren](/de/import-export/).

## Bevor du anfängst {#before-you-start}

- **Der Browser muss auf diesem Mac installiert sein.** Die Migration liest die Daten von Arc oder Zen dort, wo der Browser sie ablegt. Ist keiner von beiden installiert, ist **Aus anderem Browser migrieren…** ausgegraut.
- **Melde dich bei Phi an oder fahre als Gast fort.** Migrierte Profile und Spaces gehören zu deinem Phi-Konto, deshalb bittet dich der Assistent, zuerst die Ersteinrichtung abzuschließen.
- **Beende Zen vorher.** Phi liest Kopien der Zen-Dateien, und alles, was Zen noch nicht auf die Festplatte geschrieben hat, würde fehlen. Der Assistent erinnert dich daran, solange Zen läuft.
- **Rechne bei Arc mit Abfragen zum Schlüsselbund.** Arc verschlüsselt seine Cookies, deshalb fragt macOS, ob Phi den Verschlüsselungsschlüssel von Arc verwenden darf. Wähle **Immer erlauben**. Sonst fragt macOS bei jedem Profil erneut. Lehnst du ab, bleiben die Cookies dieses Profils zurück, während alles andere übernommen wird, und der Bericht weist nicht auf die fehlenden Cookies hin.
- **Führe nicht gleichzeitig einen Import aus.** Solange eine Migration läuft, ist **Aus anderem Browser importieren...** ausgegraut, und umgekehrt.

## Eine Migration durchführen {#running-a-migration}

1. Öffne das Menü **Phi** und wähle **Aus anderem Browser migrieren…**. Das Fenster **Zu Phi migrieren** öffnet sich.
2. Wähle **Arc** oder **Zen** und klicke auf **Weiter**. Aufgeführt werden nur die Browser, die auf diesem Mac installiert sind.
3. Prüfe die Vorschau unter **Sieh dir an, was erstellt wird**. Sie listet jedes Quellprofil mit seinen Spaces auf, dazu eine Zusammenfassung wie _Es werden 2 Profile und 5 Spaces erstellt._ Entferne das Häkchen bei den Spaces, die du nicht willst. Ein Profil wird nur erstellt, wenn mindestens einer seiner Spaces angehakt ist.
4. Klicke auf **Migration starten**. Phi erstellt die Profile und Spaces nacheinander und zeigt den Fortschritt an. Das kann einige Minuten dauern. Du kannst in der Zwischenzeit weitersurfen; die neuen Spaces öffnen sich nicht über dem, den du gerade benutzt.
5. Lies den Bericht unter **Migration abgeschlossen**. Klicke auf **Zu** _Name des Space_ **wechseln**, um den ersten neuen Space zu öffnen, oder auf **Fertig**, um das Fenster zu schließen.

## Was übernommen wird {#what-comes-across}

Die Struktur ist bei beiden Browsern gleich. Jedes Quellprofil wird zu einem Phi-Profil, und jeder Quell-Space wird zu einem Phi-Space, der an dieses Profil gebunden ist. Er behält seinen Namen und, wo Phi eine Entsprechung hat, seine Farbe und sein Symbol.

| Quelle                                                                                                      | In Phi                                                                                                               |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Arc-Profil oder Zen-Umgebung (Zen-Spaces ohne Umgebung teilen sich ein Profil)                              | Ein neues Profil                                                                                                     |
| Arc- oder Zen-Space                                                                                         | Ein neuer Space in diesem Profil                                                                                     |
| Die angehefteten Seitenleisten-Elemente von Arc oder die angehefteten Tabs in jedem Zen-Space, samt Ordnern | Die Lesezeichen dieses Space                                                                                         |
| Arc-**Favorites** oder Zen-**Essentials**                                                                   | Angeheftete Tabs, verteilt nach deinem [Geltungsbereich angehefteter Tabs](/de/bookmarks/#choose-a-pinned-tab-scope) |

Welche Browserdaten unter jedem Profil landen, hängt vom Browser ab:

| Daten            | Arc                                    | Zen  |
| ---------------- | -------------------------------------- | ---- |
| Neuester Verlauf | Ja                                     | Ja   |
| Cookies          | Ja, nach Zugriff auf den Schlüsselbund | Nein |
| Erweiterungen    | Die aus dem Chrome Web Store           | Nein |

Ein paar Grenzen, die du kennen solltest:

- **Offene Tabs ziehen nicht mit um.** Übernommen werden nur angeheftete Elemente und Favorites oder Essentials. Tabs, die offen, aber nicht angeheftet waren, bleiben im Quellbrowser.
- **Der Verlauf ist aktuell, nicht vollständig.** Die Migration übernimmt die neuesten Verlaufseinträge, nicht jeden Besuch, den du je gemacht hast.
- **Erweiterungen werden im Hintergrund installiert.** Bei Arc zeigt der Bericht, für wie viele Erweiterungen aus dem Chrome Web Store die Installation gestartet wurde. Erweiterungen aus anderen Quellen ziehen nicht mit um, und die Firefox-Erweiterungen von Zen laufen in Phi nicht.
- **Passwörter und Zahlungskarten werden nicht migriert.**
- **Spaces aus privaten Fenstern von Zen werden übersprungen.**
- **Angeheftete Tabs brauchen einen Space.** Phi erstellt ein Profil nur, wenn es mindestens einen Space dafür zu erstellen gibt. Ein Quellprofil ohne Spaces, etwa eine Zen-Umgebung, die kein Zen-Space nutzt, wird übersprungen, und der Bericht nennt, wie viele seiner angehefteten Tabs zurückgeblieben sind.

Dein Quellbrowser wird nicht verändert. Arc und Zen behalten alles, was sie hatten, du kannst also migrieren, vergleichen und beide Browser weiter benutzen.

## Den Bericht lesen {#reading-the-report}

Der Bericht listet jedes Profil und jeden Space mit dem auf, was damit passiert ist: wie viele Lesezeichen jeder Space bekommen hat, wie viele angeheftete Tabs hinzugefügt wurden und ob Verlauf, Cookies und Erweiterungen übernommen wurden. Ist etwas fehlgeschlagen, nennt die Zusammenfassung, wie viele Punkte deine Aufmerksamkeit erfordern, und die betroffene Zeile erklärt, was schiefging, zum Beispiel **Space nicht erstellt** oder **Lesezeichen konnten nicht gespeichert werden**. Alles andere aus dem Durchlauf bleibt erhalten, ein Fehler macht den Rest also nicht rückgängig.

## Erneut migrieren {#migrating-again}

Phi merkt sich, dass du aus einem Browser in dein Konto migriert hast. Startest du eine weitere Migration aus demselben Browser, warnt es dich vorher: Eine erneute Migration erstellt einen zweiten Satz Profile und Spaces und aktualisiert den ersten nicht. Wähle **Erneut migrieren** nur, wenn du genau das willst. Wenn du ohne zwei Kopien nebeneinander neu anfangen willst, lösche vor der erneuten Migration, was der erste Durchlauf erstellt hat: zuerst seine Spaces, dann seine Profile. Beim Löschen eines Space bleiben sein Profil und dessen Cookies, Verlauf und Erweiterungen erhalten. Siehe [Ein Profil löschen](/de/spaces/#deleting-a-profile).

Es gibt keine laufende Synchronisierung mit Arc oder Zen. Eine Migration ist eine einmalige Kopie dessen, was die Quelle in diesem Moment hatte.

## Zum Weiterlesen {#what-to-read-next}

- [Importieren & Exportieren](/de/import-export/), Lesezeichen und Verlauf zu dem Space hinzufügen, in dem du gerade bist.
- [Umstieg auf Phi](/de/switching-to-phi/), wie sich Spaces, Profile und angeheftete Tabs von Arc und Zen unterscheiden.
- [Spaces & Profile](/de/spaces/), die Profile und Spaces verwalten, die eine Migration erstellt.
- [Lesezeichen & angeheftete Tabs](/de/bookmarks/), wie sich Lesezeichen und angeheftete Tabs verhalten, sobald sie in Phi sind.
