---
description: "Verstehe lebendige Lesezeichen in Phi Browser, die Organisation über die Seitenleiste, angeheftete Tabs, ihren einstellbaren Geltungsbereich und wann sich was eignet."
---

# Lesezeichen & angeheftete Tabs

In Phi ist die Seitenleiste dein Arbeitsbereich, und Lesezeichen und angeheftete Tabs sind die zwei Wege, die wichtigen Seiten zu behalten. Dieses Kapitel geht tiefer als [Layouts & Navigation](/de/layouts/) auf ihr Verhalten ein, beginnend mit dem, was viele Umsteiger aus traditionellen Browsern überrascht: In Phi öffnet sich ein Lesezeichen an Ort und Stelle als Tab.

## Lesezeichen, die an Ort und Stelle öffnen

In einem traditionellen Browser ist ein Lesezeichen ein toter Link: Ein Klick darauf erzeugt immer einen frischen Tab, und am Ende hast du Duplikate derselben Seite. Phi behandelt ein Lesezeichen stattdessen als lebendigen Eintrag. Klicke eines an und es öffnet sich an Ort und Stelle; derselbe Eintrag in der Seitenleiste wird zu seinem aktiven Tab. Schließt du die Seite, bleibt das Lesezeichen genau dort, wo es war, bereit zum erneuten Öffnen. Ist das Lesezeichen bereits offen, aktiviert ein Klick nur diesen Tab, statt eine zweite Kopie anzulegen.

Das ist die Idee, die Arc und Dia populär gemacht haben: Die Seitenleiste enthält lebendige Dinge, kein separates Archiv, das du zweimal im Jahr besuchst. Phi folgt diesem Modell und behält trotzdem einen echten Lesezeichenbaum samt Ordnern, damit dir die Ordnung eines Lesezeichen-Archivs erhalten bleibt.

## Lesezeichen anlegen und organisieren

- **Lege ein Lesezeichen an**, indem du einen Tab in die Seitenleiste ziehst, oder klicke mit der rechten Maustaste auf einen Tab und wähle **Zu Lesezeichen hinzufügen** (im Modus „Komfortabel“ heißt es **Zur Lesezeichenleiste hinzufügen**). Mit **Zu Ordner hinzufügen** legst du es direkt in einem Ordner ab.
- **Organisiere mit Ordnern.** Lesezeichen lassen sich in Ordnern verschachteln, und mit **Neuer Unterordner…** legst du einen Unterordner an.
- **Sichere einen Split als ein Lesezeichen.** Aus einer Split View heraus behält **Split zu Lesezeichen hinzufügen** beide Seiten als einen einzigen Eintrag, der das Paar gemeinsam wieder öffnet.
- **Verwalte ein Lesezeichen** über sein Kontextmenü: **Link kopieren**, **Umbenennen…**, **Bearbeiten…**, **In neuem Tab öffnen**, **Als Split öffnen** und **Löschen**.

Lesezeichen gelten für den Space, in dem du bist. Jeder [Space](/de/spaces/) führt seinen eigenen Satz, damit die gespeicherten Seiten eines Arbeits-Space keinen privaten Space vollstellen.

## Angeheftete Tabs

Angeheftete Tabs sitzen oben in der Seitenleiste in einem Raster, für die Handvoll Seiten, in denen du lebst: deine Mail, ein Dashboard, ein Projektwerkzeug. Sie sind beständig: Ein angehefteter Tab bleibt im Raster, auch nachdem du seine Seite geschlossen hast, und ein Klick öffnet die Seite wieder.

- **Hefte einen Tab an**, indem du ihn mit der rechten Maustaste anklickst und **Anheften** wählst oder ihn ins Raster der angehefteten Tabs ziehst. **Tab lösen** im selben Menü bringt ihn zurück in die Tab-Liste.
- **Ordne** angeheftete Tabs neu, indem du sie im Raster verschiebst.
- **Hefte einen Split an.** **Split anheften** erhält eine Anordnung aus zwei Bereichen als einzelnes angeheftetes Element, das beide Seiten wieder öffnet; **Split lösen** macht das rückgängig.

## Einen Geltungsbereich für angeheftete Tabs wählen {#choose-a-pinned-tab-scope}

Öffne **Einstellungen → Spaces** und lege mit **Geltungsbereich angehefteter Tabs** fest, wie weit deine angehefteten Tabs geteilt werden. Standard ist **Profil**.

| Geltungsbereich | Wo angeheftete Tabs erscheinen                                          |
| --------------- | ----------------------------------------------------------------------- |
| **Space**       | Jeder Space hat eigene angeheftete Tabs.                                |
| **Profil**      | Spaces mit demselben Profil teilen sich angeheftete Tabs.               |
| **App**         | Angeheftete Tabs werden über alle regulären Profile und Spaces geteilt. |

Inkognito-Spaces zeigen nie angeheftete Tabs und erlauben auch keine, unabhängig vom gewählten Geltungsbereich.

Ein Wechsel des Geltungsbereichs überführt auch deine vorhandenen angehefteten Tabs in die neue Anordnung. Wechselst du zu einem engeren Geltungsbereich, kopiert Phi die aktuellen angehefteten Tabs in jedes vorhandene Ziel; diese Kopien lassen sich danach unabhängig voneinander ändern. Wechselst du zu einem weiteren Geltungsbereich, führt Phi die vorhandenen Sätze zusammen. Unveränderte Kopien werden vereint, unterschiedliche Versionen bleiben erhalten. Vor beiden Änderungen zeigt Phi eine Bestätigung an.

Lesezeichen gelten immer für genau einen Space. Die Einstellung für angeheftete Tabs berührt sie nicht. Wie diese Ebenen zusammenspielen, steht in [Spaces & Profile](/de/spaces/).

## Zur ursprünglichen Seite zurückkehren

Wenn du in einem angehefteten Tab oder Lesezeichen Links folgst, entfernt es sich womöglich von seiner ursprünglichen URL. Um zurückzukehren, doppelklicke auf den angehefteten Tab oder klicke auf das Favicon eines Lesezeichens, das als Tab geöffnet ist.

Links, die zu einer anderen Website führen, bewegen den Tab überhaupt nicht: Phi zeigt sie als Vorschau in einem schwebenden Panel an, der [Peek-Ansicht](/de/peek/), sodass das Lesezeichen oder der angeheftete Tab bei der Seite bleibt, an die es gebunden ist. Wenn du diese Links lieber als neue Tabs öffnen möchtest, schalte unter **Einstellungen → Navigation** den Schalter **Links aus angehefteten Tabs und Lesezeichen automatisch in Peek-Ansicht öffnen** aus.

Um die aktuelle Seite zu behalten, halte die **Befehlstaste (⌘)** gedrückt, während du auf den angehefteten Tab doppelklickst oder auf das Favicon des Lesezeichens klickst. Die aktuelle Seite wandert als eigener Tab in die Tab-Liste, und der angeheftete Tab oder das Lesezeichen kehrt zu seiner ursprünglichen URL zurück.

## Was solltest du wann verwenden?

Eine einfache Arbeitsteilung:

- **Angeheftete Tabs** sind Seiten, in denen du lebst: immer ganz oben, einen Klick entfernt und geteilt im Geltungsbereich Space, Profil oder App, den du wählst.
- **Lesezeichen** sind Seiten, die du behalten willst: in Ordnern organisiert, auf einen Space begrenzt und an Ort und Stelle geöffnet, wenn du sie brauchst.

Wenn du von Arc oder Dia wechselst, zeigt [Umstieg auf Phi](/de/switching-to-phi/), wie sich Phis lebendige Seitenleiste, Lesezeichen und angeheftete Tabs vergleichen. Wie du Lesezeichen aus einem anderen Browser oder einer Datei übernimmst oder die Lesezeichen eines Space wieder als HTML-Datei sicherst, steht in [Importieren & Exportieren](/de/import-export/).
