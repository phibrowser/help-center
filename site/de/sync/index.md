---
description: "Halte deine Spaces, Lesezeichen, angehefteten Tabs, URL-Regeln, unterstützten Einstellungen und deinen Browserverlauf auf jedem Mac gleich, auf dem du angemeldet bist, vor dem Hochladen verschlüsselt mit Schlüsseln, die nur deine Macs besitzen."
---

# Synchronisierung

Die Synchronisierung hält Phis eigene Daten auf jedem Mac gleich, auf dem du mit demselben Phi-Konto angemeldet bist. Speicherst du auf einem Mac ein Lesezeichen oder benennst einen Space um, kommt die Änderung auf den anderen an. Bis du sie auf jedem Mac einrichtest, bleibt sie aus, und sie ist so gebaut, dass wir nicht lesen können, was sie überträgt: Alles wird auf deinem Mac verschlüsselt, bevor es hochgeladen wird, mit Schlüsseln, die nur deine Macs besitzen.

Alles, was hier beschrieben ist, findest du unter **Einstellungen → Synchronisierung**.

## Was synchronisiert wird

| Was                            | Details                                                                                                                                                                                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Spaces**                     | Name, Symbol, Farbe, Design und zu welchem Profil jeder Space gehört.                                                                                                                                                                                                                                  |
| **Profile**                    | Profilnamen und welche Spaces zu jedem Profil gehören.                                                                                                                                                                                                                                                 |
| **Lesezeichen und Ordner**     | Die Lesezeichen jedes Space, samt Ordnern und Reihenfolge.                                                                                                                                                                                                                                             |
| **Angeheftete Tabs**           | Angeheftete Tabs, in dem Geltungsbereich, den du unter **Einstellungen → Spaces** gewählt hast.                                                                                                                                                                                                        |
| **URL-Regeln**                 | Die Regeln, die passende Websites in einen Space, in Inkognito oder in Kiosk lenken.                                                                                                                                                                                                                   |
| **Unterstützte Einstellungen** | Layout-Modus, Erscheinungsbild, Design und Auswahlfarbe, die Einstellungen für Lesezeichenleiste und vollständige URL, das Tastenkürzel für neue Tabs, die Warnung beim Schließen von Inkognito, automatisches Bild-in-Bild, der Geltungsbereich angehefteter Tabs und welcher Space der Standard ist. |
| **Browserdaten, pro Profil**   | Browserverlauf, die eigenen Einstellungen des Browsers wie die Standardsuchmaschine, und Erweiterungen mit ihren synchronisierten Einstellungen.                                                                                                                                                       |

::: warning Auch Löschen wird synchronisiert
Löschst du auf einem Mac einen Space oder ein Profil, wird der Space oder das Profil auf jedem Mac gelöscht, der damit synchronisiert, Lesezeichen eingeschlossen. Phi weist im Bestätigungsdialog darauf hin, lies ihn also, bevor du bestätigst.
:::

Manches bleibt absichtlich, wo es ist:

- **Passwörter, Cookies und Autofill-Daten.** Diese gelangen nie in die Synchronisierung. Phi hat keinen eigenen Passwortmanager, und ein Tresor, den du über den [Passwortmanager für Agenten](/de/agent-passwords/) verbindest, gehört seinem Anbieter und wird zu dessen Bedingungen synchronisiert.
- **Offene Tabs.** Gewöhnliche offene Tabs werden auf einem anderen Mac nicht wiederhergestellt. Angeheftete Tabs schon.
- **Phi Chat und Erinnerungen.** Deine Unterhaltungen mit dem Assistenten bleiben auf dem Mac, auf dem du sie geführt hast, und das gilt auch für deine [Erinnerungen](/de/memory/).
- **Inkognito-Spaces** und die Spaces, in denen Agenten arbeiten. Nichts daraus wird synchronisiert. Eine URL-Regel, die eine Website an Inkognito schickt, ist trotzdem eine Regel und wird wie jede andere synchronisiert.
- **Einstellungen, die an einen Mac gebunden sind**, darunter die KI- und Agenten-Einstellungen.

## Bevor du anfängst

- **Ein Phi-Konto, auf jedem Mac angemeldet.** Ohne Konto bietet der Einstellungsbereich nur **Melde dich an, um geräteübergreifend zu synchronisieren** an. Hast du dich entschieden, Phi ohne Konto zu erkunden, siehe [Später anmelden](/de/get-started/#signing-in-later).
- **Der offizielle Phi-Build.** Die Synchronisierung läuft über Phinomenons Synchronisierungsdienst, und eine Phi-Version, die du selbst aus dem Open-Source-Code baust, kann ihn nicht nutzen.

## Deinen ersten Mac einrichten

1. Öffne **Einstellungen → Synchronisierung** und klicke auf **Synchronisierung auf diesem Gerät einrichten**. Das Fenster erklärt, was gleich passiert; klicke auf **Weiter**.
2. **Sichere deinen Wiederherstellungscode.** Phi erstellt einen Wiederherstellungscode und zeigt ihn ein einziges Mal an: 27 Zeichen in Fünfergruppen. Klicke auf **Kopieren**, bewahre ihn an einem sicheren Ort auf, etwa in einem Passwortmanager, und klicke dann auf **Ich habe ihn gesichert**.
3. **Bestätige deinen Wiederherstellungscode.** Phi bittet dich, den gesicherten Code einzutippen. Bindestriche, Leerzeichen sowie Groß- und Kleinschreibung spielen keine Rolle. Die Synchronisierung bleibt aus, bis der Code stimmt, sodass du nicht erst später merkst, dass er nie gesichert wurde. Schließt du das Fenster an dieser Stelle, fragt Phi erneut, wenn du die Einrichtung das nächste Mal öffnest oder neu startest.
4. **Ordne deine Profile und Spaces zu.** Auf einem ersten Mac gibt es im Konto noch nichts zuzuordnen, deshalb bestätigt dieser Schritt vor allem, was hinzugefügt wird: Wähle für jedes Profil **Als neu registrieren** und für die Spaces **Alle als neu hinzufügen**. Was die beiden Schritte tun, sobald das Konto Daten enthält, steht unter [Weiteren Mac hinzufügen](#add-another-mac).
5. Klicke auf **Fertig**. Der Einstellungsbereich zeigt **Erste Synchronisierung läuft**, während dieser Mac hochlädt, danach **Auf dem neuesten Stand**.

::: warning Der Wiederherstellungscode wird nur einmal angezeigt
Der Code entsteht auf deinem Mac und wird nie an uns gesendet, deshalb können wir ihn weder erneut anzeigen noch Ersatz schicken oder ihn zurücksetzen. Um einen weiteren Mac hinzuzufügen, brauchst du entweder den Code oder einen Mac, der bereits eingerichtet ist. Verlierst du beides, kann niemand die verschlüsselte Kopie in deinem Konto entsperren, auch wir nicht.
:::

## Weiteren Mac hinzufügen {#add-another-mac}

1. Melde dich beim selben Phi-Konto an, öffne **Einstellungen → Synchronisierung**, klicke auf **Synchronisierung auf diesem Gerät einrichten** und dann auf **Weiter**.
2. Wähle unter **Dieses Gerät zu deinem Account hinzufügen**, wie dieser Mac beitritt:
   - **Genehmigung von einem anderen Gerät anfordern.** Phi zeigt einen kurzen Code und wartet. Öffne auf einem bereits eingerichteten Mac **Einstellungen → Synchronisierung**: Die Anfrage erscheint unter **Geräte** mit demselben Code und dem Zeitpunkt, zu dem sie abläuft. Prüfe, ob die beiden Codes übereinstimmen, und klicke dann auf **Genehmigen**, oder auf **Ablehnen**, wenn du die Anfrage nicht erwartet hast. Der Code kennzeichnet den neuen Mac und ist kein Geheimnis, du kannst ihn also ruhig am Telefon vorlesen. Eine abgelehnte oder abgelaufene Anfrage bietet **Andere Methode versuchen** an.
   - **Einen Wiederherstellungscode eingeben.** Tippe den Code ein, den du auf deinem ersten Mac gesichert hast.
3. **Ordne deine Profile zu.** Phi ordnet die Profile auf diesem Mac den Profilen in deinem Konto zu und fragt bei denen nach, die es nicht zuordnen konnte. Wähle für jedes Profil hier entweder **Zu … zuordnen** mit einem Profil aus deinem Konto oder **Als neu registrieren**. Profile in deinem Konto ohne Gegenstück auf diesem Mac stehen unter **Nicht zugeordnete Account-Profile**, wo **Auf diesem Mac erstellen** sie hinzufügt.
4. **Ordne deine Spaces zu.** Wähle für jeden Space auf diesem Mac den Space aus deinem Konto, dem er entspricht, oder **Als neu hinzufügen**. **Alle als neu hinzufügen** erledigt alle noch offenen Spaces auf einmal, und Spaces mit exakt gleichem Namen werden automatisch für dich gewählt. Spaces in deinem Konto, die nicht auf diesem Mac sind, erscheinen unter **Spaces, die aus deinem Account hinzugefügt werden** und werden beim Abschließen erstellt. Auf diesem Mac wird nichts gelöscht.
5. **Überprüfe, was sich ändert.** Hast du einen Space hier einem Space in deinem Konto zugeordnet, ersetzen Name, Symbol, Farbe und Design aus dem Konto die Werte dieses Mac, und der Space wechselt möglicherweise zu dem Profil, das er in deinem Konto hat. Tabs, Lesezeichen, angeheftete Tabs und URL-Regeln auf diesem Mac bleiben unberührt. Willst du die Werte dieses Mac behalten, geh mit **Zurück** zurück und füge diesen Space stattdessen als neuen hinzu. Klicke auf **Anwenden** und dann auf **Fertig**.

Das Laden des Kontos kann bis zu zwei Minuten dauern, während Phi deine Spaces zählt, und es braucht eine Verbindung: Es gibt keine zwischengespeicherte Kopie, auf die Phi zurückgreifen könnte. Sobald die Synchronisierung beginnt, bleiben Lesezeichen, angeheftete Tabs und URL-Regeln von beiden Macs erhalten, sodass von keiner Seite etwas verloren geht.

### Später abschließen

**Später abschließen** erscheint auf den Zuordnungsseiten. Wählst du es oder schließt das Fenster, browst du auf diesem Mac lokal weiter: Nichts wird synchronisiert, der Einstellungsbereich zeigt **Nicht gekoppelt**, und Phi öffnet die Einrichtung nicht von selbst erneut. Kehre zu **Einstellungen → Synchronisierung** zurück und klicke auf **Einrichtung fortsetzen**, wenn du so weit bist. Phi lädt dein Konto dann neu, deshalb bleiben nicht abgeschlossene Entscheidungen nicht erhalten.

## Synchronisierungsstatus prüfen

Oben im Einstellungsbereich „Synchronisierung“ siehst du, wie es steht:

- **Auf dem neuesten Stand**, **Wird synchronisiert…** oder **Erste Synchronisierung läuft**, solange die erste Synchronisierung läuft.
- **Offline**, mit dem Hinweis, dass Änderungen synchronisiert werden, sobald eine Verbindung besteht. Phi arbeitet mit den lokalen Daten weiter und sendet deine Änderungen, sobald der Mac wieder online ist.
- **Synchronisierung pausiert.** Ein Profil auf diesem Mac ist noch nicht für die Synchronisierung eingerichtet, meist eines, das du nach der Einrichtung angelegt hast. Phi registriert es von selbst und versucht es weiter; die Zeile darunter nennt den Grund für das Warten, und **Erneut versuchen** probiert es sofort.
- **Erfordert Aufmerksamkeit.** Etwas ist fehlgeschlagen, und **Letztes Problem** nennt es. **Anmeldung abgelaufen** bedeutet, dass du dich erneut anmelden musst. **Keine Verbindung** und **Serverfehler** verschwinden bei der nächsten erfolgreichen Synchronisierung von selbst. Um **Synchronisierung muss zurückgesetzt werden** geht es unter [Synchronisierung erneut einrichten](#set-up-sync-again).

**Details** öffnet eine Zeile pro Art von Phi-Daten (Spaces, Lesezeichen, Angeheftete Tabs, URL-Regeln, Einstellungen), die zeigt, was dieser Mac zuletzt empfangen und gesendet hat und was noch auf das Senden wartet, dazu eine Zeile für die Browserdaten jedes Profils. **Jetzt synchronisieren** lässt diesen Mac sofort alles synchronisieren. Das brauchst du selten: Phi erfährt, wenn ein anderer Mac etwas ändert, prüft zusätzlich von selbst und startet nie zwei Synchronisierungen im Abstand von weniger als einer Minute.

## Geräte

Der Abschnitt **Geräte** listet jeden Mac auf, der in deinem Konto eingerichtet ist, wobei **Dieser Mac** markiert ist, und jeden Mac, der auf den Beitritt wartet, mit seinem Code, **Genehmigen**, **Ablehnen** und dem Ablaufzeitpunkt der Anfrage. Zum Genehmigen muss dieser Mac angemeldet sein und seine eigene Einrichtung abgeschlossen haben.

Jeder Mac kann nur sich selbst entfernen, über seinen eigenen Einstellungsbereich „Synchronisierung“. Einen Mac, den du nicht mehr hast, kannst du noch nicht entfernen: Ein verlorener Mac bleibt im Konto und empfängt weiter Änderungen, solange er angemeldet ist. Wenn du ihn noch erreichst, beendet eine Abmeldung das.

## Mac aus der Synchronisierung entfernen {#remove-a-mac-from-sync}

Klicke in **Einstellungen → Synchronisierung** unter **Wiederherstellung und Entfernung** auf **Dieses Gerät aus der Synchronisierung entfernen…** und bestätige mit **Dieses Gerät entfernen**.

- Dieser Mac hört auf zu synchronisieren, der Synchronisierungsdienst widerruft seinen Zugang, und seine Synchronisierungseinrichtung, seine Schlüssel und die Zuordnung von Profilen und Spaces werden auf diesem Mac gelöscht.
- Alles, womit du gesurft hast, bleibt: Spaces, Lesezeichen, Verlauf und angeheftete Tabs bleiben vollständig erhalten, und du bleibst bei deinem Konto angemeldet.
- Deine anderen Macs sind nicht betroffen und synchronisieren weiter untereinander.
- Um diesen Mac zurückzuholen, starte die Einrichtung erneut und tritt per Genehmigung oder Wiederherstellungscode bei.

Den letzten Mac im Konto kannst du nicht entfernen. Richte zuerst die Synchronisierung auf einem anderen Mac ein.

::: warning Entfernen erneuert die Schlüssel deines Kontos nicht
Ein entfernter Mac empfängt nichts Neues mehr, aber die Verschlüsselungsschlüssel deines Kontos ändern sich dadurch nicht, und was dieser Mac bereits synchronisiert hatte, lässt sich nicht zurückholen. Was auf ihm war, bleibt auf ihm.
:::

## Synchronisierung erneut einrichten {#set-up-sync-again}

Zeigt der Einstellungsbereich **Die Synchronisierungsdaten des Accounts haben sich geändert. Die Synchronisierung von Phi-Daten ist pausiert.**, wurden die Synchronisierungsdaten in deinem Konto zurückgesetzt, und die Einrichtung dieses Mac passt nicht mehr dazu. Phis Daten werden nicht mehr synchronisiert, bis du handelst; erneutes Versuchen oder ein Neustart behebt das nicht. Klicke auf **Synchronisierung erneut einrichten** und bestätige. Phi löscht die Synchronisierungseinrichtung und die Zuordnungsinformationen dieses Mac, behält deine lokalen Browserdaten und das, was in deinem Konto liegt, und führt dich erneut durch die Einrichtung, einschließlich des Beitritts per Genehmigung oder Wiederherstellungscode.

## Abmelden

Wenn du dich von deinem Phi-Konto abmeldest, endet die Synchronisierung auf diesem Mac, und von deinen anderen Macs kommt nichts mehr an, bis du dich wieder anmeldest. Meldest du dich wieder beim selben Konto an, macht die Synchronisierung dort weiter, wo sie aufgehört hat, und holt nach, was sie verpasst hat; der Einstellungsbereich „Synchronisierung“ zeigt dir, ob noch etwas abzuschließen ist. Ein Wechsel zu einem anderen Konto vermischt die beiden nie: Jedes Konto hat seine eigenen synchronisierten Daten und seine eigene Zuordnung.

## Wie deine Daten geschützt sind

- **Verschlüsselt, bevor sie deinen Mac verlassen.** Deine Macs erzeugen die Schlüssel, und nur die verschlüsselte Kopie wird hochgeladen. Der Synchronisierungsdienst speichert sie und gibt sie an deine anderen Macs weiter; entschlüsseln kann er sie nicht.
- **Anmelden allein reicht nicht, um sie zu lesen.** Ein neuer Mac erhält den Schlüssel nur durch die Genehmigung eines Mac, der ihn bereits besitzt, oder über deinen Wiederherstellungscode. Deshalb gibt es nirgends einen Link „Wiederherstellungscode vergessen“.
- **Es sind trotzdem Daten, die wir für dich aufbewahren.** Die verschlüsselte Kopie liegt auf Phinomenons Synchronisierungsdienst, die Synchronisierung gehört also zu den Dingen, die Phi sendet. [Datenschutz & deine Daten](/de/privacy/) listet die anderen auf, und die [Datenschutzerklärung](https://phibrowser.com/privacy/) und die [Nutzungsbedingungen](https://phibrowser.com/terms/) sind für all das maßgeblich.

## Synchronisieren oder exportieren

Die Synchronisierung ist für Macs gedacht, die du parallel weiter nutzt. Für einen einmaligen Umzug auf einen neuen Mac oder eine Kopie, die du selbst aufbewahrst, ist im Menü **Hilfe** der Punkt **Benutzerdaten verwalten → Benutzerdaten exportieren …** das bessere Werkzeug; siehe [Importieren & Exportieren](/de/import-export/).

## Nächste Schritte

- [Spaces & Profile](/de/spaces/), was ein Space und ein Profil sind und warum die Einrichtung sie zuordnet.
- [Lesezeichen & angeheftete Tabs](/de/bookmarks/), der Geltungsbereich angehefteter Tabs, dem die Synchronisierung folgt.
- [Datenschutz & deine Daten](/de/privacy/), alles andere, was Phi sendet und aufbewahrt.
- [Importieren & Exportieren](/de/import-export/), Daten einmalig statt fortlaufend übertragen.
