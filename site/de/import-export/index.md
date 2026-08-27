---
description: "So importierst du Lesezeichen und Verlauf aus einem anderen Browser oder einer Datei in Phi Browser (Lesezeichen-HTML, Safari-Verlaufs-JSON, Safari-Exportarchiv als ZIP), was jeder Dateityp importiert und wie du deine Lesezeichen in eine HTML-Datei exportierst."
---

# Importieren & Exportieren

Phi kann Lesezeichen und Browserverlauf aus anderen Browsern übernehmen, entweder direkt aus einem installierten Browser oder aus einer Datei, die du schon hast. Es kann die Lesezeichen eines Space auch wieder in eine Standard-HTML-Datei exportieren. Diese Seite behandelt beide Richtungen und benennt genau, was jede Dateiart mitbringt.

Wenn du neu bei Phi bist und erst einmal den Überblick zum Umstieg suchst, beginne mit [Umstieg auf Phi](/de/switching-to-phi/) und komm für die Details hierher zurück.

## Zwei Wege zum Import

Es gibt zwei Einstiegspunkte, und beide öffnen denselben Importbildschirm **Browserdaten**:

- **Beim ersten Start.** Das Onboarding bietet den Import an, während du Phi einrichtest.
- **Jederzeit später.** Öffne das Menü **Phi** (das fett gedruckte App-Menü neben dem Apple-Menü) und wähle **Aus anderem Browser importieren …**.

Der Importbildschirm bietet vier Quellen: **Aus Chrome**, **Aus Safari**, **Aus Arc** und **Aus einer Datei**. Chrome, Safari und Arc lesen die Daten des installierten Browsers direkt und lassen dich auswählen, welche Datentypen übernommen werden sollen. Die folgenden Abschnitte gehen näher auf **Aus einer Datei** ein.

Importe landen in dem [Space](/de/spaces/), aus dem du den Import startest. Lesezeichen kommen in den Lesezeichenbaum dieses Space, der Verlauf in deinen Browserverlauf. In [Inkognito](/de/incognito/) ist das Importieren nicht verfügbar; wechsle zuerst in einen regulären Space oder ein reguläres Fenster.

::: tip Beende Safari, bevor du daraus importierst
Wenn du **Aus Safari** verwendest, beende Safari zuerst. Safari hält einen Teil der letzten Aktivitäten im Arbeitsspeicher und schreibt sie erst beim Beenden vollständig auf die Festplatte; ein Import bei laufendem Safari kann deshalb deine neuesten Lesezeichen und Verlaufseinträge verpassen. Für **Aus einer Datei** gilt das nicht, denn dort liest Phi einen Schnappschuss, den du bereits exportiert hast.
:::

## Aus einer Datei importieren

Wähle **Aus einer Datei**, klicke auf **Datei auswählen …** und wähle die Datei aus. Phi akzeptiert drei Dateiarten und entscheidet anhand der Datei selbst, was zu tun ist. Auswahlkästchen für Datentypen gibt es bei dieser Option nicht; importiert wird, was die Datei enthält. Während des Vorgangs siehst du **Daten werden aus Datei importiert …**.

### Was jeder Dateityp importiert

| Datei                    | Endung          | Was übernommen wird                  |
| ------------------------ | --------------- | ------------------------------------ |
| **Lesezeichen-HTML**     | `.html`, `.htm` | Nur Lesezeichen                      |
| **Safari-Verlaufs-JSON** | `.json`         | Nur Browserverlauf                   |
| **Safari-Exportarchiv**  | `.zip`          | Lesezeichen **und** Verlauf zusammen |

**Lesezeichen-HTML** ist das übliche „Netscape-Lesezeichen“-Format, das jeder große Browser exportieren kann, darunter Chrome, Safari, Firefox, Edge und Phi selbst. Beim Import landen die Lesezeichen im aktuellen Space in einem Ordner **Importiert**, damit sie zusammenbleiben und später leicht zu finden oder zu entfernen sind.

**Safari-Verlaufs-JSON** und **Safari-Exportarchiv** stammen beide aus Safaris Funktion **Ablage → Exportieren → Browsingdaten exportieren …**. Safari erzeugt ein `.zip`-Archiv; hast du es bereits entpackt, kannst du auch direkt die darin enthaltene Datei `History.json` auswählen.

- Ein **Safari-Exportarchiv** (`.zip`) ist die unkomplizierteste Wahl: Wähle es aus, und Phi importiert Lesezeichen und Verlauf in einem Schritt.
- Eine einzelne **Safari-Verlaufs-JSON** importiert nur den Verlauf.

### Was importiert wird und was nicht

- **Nur Lesezeichen und Verlauf.** Passwörter, Zahlungskarten und andere Daten, die Safari ebenfalls exportieren kann, werden über diesen Weg nie importiert. Solche sensiblen Daten ungefragt zu übernehmen wäre falsch, deshalb überspringt Phi diese Dateien selbst dann, wenn ein Safari-Archiv sie enthält.
- **Eine defekte Datei blockiert nie den Rest.** In einem `.zip` liest Phi jede Lesezeichen- und Verlaufsdatei, die es lesen kann, und überspringt die übrigen, etwa eine sachfremde Datei oder einen beschädigten Eintrag.
- **Mehrteiliger Verlauf kommt vollständig an.** Safari teilt einen großen Verlaufsexport manchmal in mehrere Dateien auf (`History.json`, `History-0001.json` und so weiter), und Phi importiert sie alle.
- **Erneutes Importieren häuft keine Duplikate an.** Importierter Verlauf wird wie bei jedem Browserimport mit deinem bestehenden Verlauf zusammengeführt; dieselbe Datei zweimal zu importieren vervielfacht deine Besuche also nicht.
- **Große oder beschädigte Dateien werden sicher behandelt.** Phi begrenzt, wie viel es aus einer einzelnen Datei oder einem Archiv liest. Eine ungewöhnlich große oder fehlerhafte Datei kann den Browser also nicht aufhängen; Phi überspringt sie stattdessen.
- **Ein Import ohne verwertbaren Inhalt endet trotzdem sauber.** Enthält eine Datei nichts, was Phi verwenden kann, wird der Import ohne Fehler abgeschlossen, statt hängen zu bleiben.

## Deine Lesezeichen exportieren

Phi kann die Lesezeichen des **aktuellen Space** in eine HTML-Datei exportieren. Öffne das Menü **Lesezeichen** und wähle **Lesezeichen exportieren …**, dann lege den Speicherort fest. Phi schlägt einen Dateinamen wie `Phi-Bookmarks-<Space>-<date>.html` vor.

- Die Datei ist dasselbe oben beschriebene **Netscape-Lesezeichen**-Standardformat und lässt sich damit sauber in Chrome, Safari, Firefox oder Edge importieren, oder über **Aus einer Datei** zurück in Phi.
- Der Export umfasst den Space, in dem du dich gerade befindest. Weil Lesezeichen [pro Space](/de/bookmarks/) gelten, wechsle den Space und exportiere erneut, um den Bestand eines anderen Space zu sichern.
- **Lesezeichen exportieren …** ist ausgegraut, wenn der aktuelle Space keine Lesezeichen hat, und in Inkognito-Spaces (die nie einen Lesezeichenbaum führen) nicht verfügbar.
- Ein [Split](/de/layouts/)-Lesezeichen, das zwei Seiten in einem Eintrag koppelt, wird als zwei gewöhnliche Einträge geschrieben, damit das Standardformat es abbilden kann.

### Hin und zurück

Exportiere die Lesezeichen eines Space als HTML und hole sie mit **Aus einer Datei** wieder herein, ob in einen anderen Space, ein anderes Profil oder Phi auf einem anderen Mac. Das ist meist der schnellste Weg, einen Lesezeichensatz zwischen Profilen oder zwei Macs zu kopieren.

## Alles exportieren (nicht nur Lesezeichen)

**Lesezeichen exportieren …** exportiert nur Lesezeichen. Um alle deine Phi-Daten (Spaces, Profile, Verlauf und mehr) als eine einzige Datei zu sichern, verwende stattdessen im Menü **Hilfe** den Punkt **Benutzerdaten verwalten → Benutzerdaten exportieren …**. Das ist das Werkzeug für den Umzug auf einen neuen Mac oder für eine vollständige persönliche Kopie; wie es zu Phis automatischen Rollback-Schnappschüssen passt, steht unter [Time Machine-Backups](/de/time-machine/#exporting-your-own-data).

## Zum Weiterlesen

- [Lesezeichen & angeheftete Tabs](/de/bookmarks/): wie sich Lesezeichen verhalten, sobald sie in Phi sind.
- [Spaces & Profile](/de/spaces/): warum Importe in einem Space landen und wie Profile deine Daten trennen.
- [Umstieg auf Phi](/de/switching-to-phi/): der vollständige Umzugsplan von Chrome, Safari, Arc und Dia.
- [Time Machine-Backups](/de/time-machine/): automatische Rollback-Schnappschüsse und der vollständige Export der Benutzerdaten.
