---
description: "Halte deine Spaces, Lesezeichen, angehefteten Tabs, URL-Regeln, unterstützten Einstellungen und deinen Browserverlauf auf jedem Mac gleich, auf dem du angemeldet bist, vor dem Hochladen verschlüsselt mit Schlüsseln, die nur deine Macs besitzen."
---

# Synchronisierung

Die Synchronisierung hält Phis eigene Daten auf jedem Mac gleich, auf dem du mit demselben Phi-Konto angemeldet bist. Speicherst du auf einem Mac ein Lesezeichen oder benennst einen Space um, kommt die Änderung auf den anderen an. Bis du sie auf jedem Mac einrichtest, bleibt sie aus, und sie ist so gebaut, dass wir nicht lesen können, was sie überträgt: Alles wird auf deinem Mac verschlüsselt, bevor es hochgeladen wird, mit Schlüsseln, die nur deine Macs besitzen.

Alles, was hier beschrieben ist, findest du unter **Einstellungen → Synchronisierung**.

## Was synchronisiert wird {#what-syncs}

| Was                            | Details                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spaces**                     | Name, Symbol, Farbe, Design und zu welchem Profil jeder Space gehört.                                                                                                                                                                                                                                               |
| **Profile**                    | Profilnamen und welche Spaces zu jedem Profil gehören.                                                                                                                                                                                                                                                              |
| **Lesezeichen und Ordner**     | Die Lesezeichen jedes Space, samt Ordnern und Reihenfolge.                                                                                                                                                                                                                                                          |
| **Angeheftete Tabs**           | Angeheftete Tabs, in dem Geltungsbereich, den du unter **Einstellungen → Spaces** gewählt hast.                                                                                                                                                                                                                     |
| **URL-Regeln**                 | Die Regeln, die passende Websites in einen Space, in Inkognito oder in Kiosk lenken.                                                                                                                                                                                                                                |
| **Unterstützte Einstellungen** | Layout-Modus, Erscheinungsbild, Design und Auswahlfarbe, die Einstellungen für Lesezeichenleiste und vollständige URL, **Verhalten für neue Tabs** (was ⌘T öffnet), die Warnung beim Schließen von Inkognito, automatisches Bild-in-Bild, der Geltungsbereich angehefteter Tabs und welcher Space der Standard ist. |
| **Browserdaten, pro Profil**   | Browserverlauf, die eigenen Einstellungen des Browsers wie die Standardsuchmaschine, und Erweiterungen mit ihren synchronisierten Einstellungen.                                                                                                                                                                    |

::: warning Auch Löschen wird synchronisiert
Löschst du auf einem Mac einen Space oder ein Profil, wird der Space oder das Profil auf jedem Mac gelöscht, der damit synchronisiert, Lesezeichen eingeschlossen. Phi weist im Bestätigungsdialog darauf hin, lies ihn also, bevor du bestätigst.
:::

Manches bleibt absichtlich, wo es ist:

- **Passwörter, Cookies und Autofill-Daten.** Diese gelangen nie in die Synchronisierung. Phi hat keinen eigenen Passwortmanager, und ein Tresor, den du über den [Passwortmanager für Agenten](/de/agent-passwords/) verbindest, gehört seinem Anbieter und wird zu dessen Bedingungen synchronisiert.
- **Offene Tabs.** Gewöhnliche offene Tabs werden auf einem anderen Mac nicht wiederhergestellt. Angeheftete Tabs schon.
- **Phi Chat und Erinnerungen.** Deine Unterhaltungen mit dem Assistenten bleiben auf dem Mac, auf dem du sie geführt hast, und das gilt auch für deine [Erinnerungen](/de/memory/).
- **Inkognito-Spaces** und die Spaces, in denen Agenten arbeiten. Nichts daraus wird synchronisiert. Eine URL-Regel, die eine Website an Inkognito schickt, ist trotzdem eine Regel und wird wie jede andere synchronisiert.
- **Tastaturkurzbefehle.** Was du unter **Einstellungen → Tastaturkurzbefehle** festlegst, bleibt auf dem Mac, auf dem du es festgelegt hast.
- **Einstellungen, die an einen Mac gebunden sind**, darunter die KI- und Agenten-Einstellungen.

## Bevor du anfängst

- **Ein Phi-Konto, auf jedem Mac angemeldet.** Ohne Konto bietet der Einstellungsbereich nur **Melde dich an, um geräteübergreifend zu synchronisieren** an. Hast du dich entschieden, Phi ohne Konto zu erkunden, siehe [Später anmelden](/de/get-started/#signing-in-later).
- **Der offizielle Phi-Build.** Die Synchronisierung läuft über Phinomenons Synchronisierungsdienst, und eine Phi-Version, die du selbst aus dem Open-Source-Code baust, kann ihn nicht nutzen.

## Deinen ersten Mac einrichten {#set-up-your-first-mac}

1. Öffne **Einstellungen → Synchronisierung** und klicke auf **Synchronisierung auf diesem Gerät einrichten**. Das Fenster erklärt, was gleich passiert; klicke auf **Weiter**.
2. **Sichere deinen Wiederherstellungscode.** Phi erstellt einen Wiederherstellungscode und zeigt ihn ein einziges Mal an: 27 Zeichen in Fünfergruppen. Klicke auf **Kopieren**, bewahre ihn an einem sicheren Ort auf, etwa in einem Passwortmanager, und klicke dann auf **Ich habe ihn gesichert**.
3. **Bestätige deinen Wiederherstellungscode.** Phi bittet dich, den gesicherten Code einzutippen. Bindestriche, Leerzeichen sowie Groß- und Kleinschreibung spielen keine Rolle. Hast du ihn nicht gesichert, klicke auf **Zurück**: Phi zeigt denselben Code erneut an, damit du ihn jetzt sichern kannst. Die Synchronisierung bleibt aus, bis der Code stimmt, sodass du nicht erst später merkst, dass er nie gesichert wurde. Schließt du das Fenster an dieser Stelle, fragt Phi erneut, wenn du die Einrichtung das nächste Mal öffnest oder neu startest, aber **Zurück** gibt es dann nicht mehr, weil der Code nicht aufbewahrt wird, sobald das Fenster geschlossen ist.
4. **Phi richtet die Synchronisierung selbst ein.** Auf einem ersten Mac gibt es im Konto noch nichts zuzuordnen, deshalb gibt es keine Zuordnungsseiten auszufüllen. Phi fügt die Profile und Spaces dieses Mac dem Konto hinzu und zeigt dabei **Synchronisierung wird eingerichtet…** an. Konnte Phi nicht alles im Konto lesen, zeigt es stattdessen die Zuordnungsseiten aus [Weiteren Mac hinzufügen](#add-another-mac).
5. Ist die Einrichtung abgeschlossen, zeigt der Einstellungsbereich **Erste Synchronisierung läuft**, während dieser Mac hochlädt, danach **Auf dem neuesten Stand**.

::: warning Der Wiederherstellungscode wird nur einmal angezeigt
Der Code entsteht auf deinem Mac und wird nie an uns gesendet, deshalb können wir ihn weder erneut anzeigen noch Ersatz schicken oder ihn zurücksetzen. Um einen weiteren Mac hinzuzufügen, brauchst du entweder den Code oder einen Mac, der bereits eingerichtet ist. Verlierst du beides, kann niemand die verschlüsselte Kopie in deinem Konto entsperren, auch wir nicht. Ist der Code bereits verloren, siehe [Wiederherstellungscode vergessen?](#forgot-your-recovery-code)
:::

## Weiteren Mac hinzufügen {#add-another-mac}

1. Melde dich beim selben Phi-Konto an, öffne **Einstellungen → Synchronisierung**, klicke auf **Synchronisierung auf diesem Gerät einrichten** und dann auf **Weiter**.
2. Wähle unter **Dieses Gerät zu deinem Account hinzufügen**, wie dieser Mac beitritt:
   - **Genehmigung von einem anderen Gerät anfordern.** Phi zeigt einen kurzen Code und wartet. Öffne auf einem bereits eingerichteten Mac **Einstellungen → Synchronisierung**: Die Anfrage erscheint unter **Geräte** mit demselben Code und dem Zeitpunkt, zu dem sie abläuft. Prüfe, ob die beiden Codes übereinstimmen, und klicke dann auf **Genehmigen**, oder auf **Ablehnen**, wenn du die Anfrage nicht erwartet hast. Der Code kennzeichnet den neuen Mac und ist kein Geheimnis, du kannst ihn also ruhig am Telefon vorlesen. Eine abgelehnte oder abgelaufene Anfrage bietet **Andere Methode versuchen** an.
   - **Einen Wiederherstellungscode eingeben.** Tippe den Code ein, den du auf deinem ersten Mac gesichert hast.
3. **Wähle, wie dieser Mac synchronisiert.** Enthält dein Konto bereits Daten und hat dieser Mac eigene Daten, fragt Phi **Wie soll dieser Mac synchronisieren?** und zeigt, was jede Seite enthält:
   - **Diesen Mac mit deinem Account zusammenführen**, markiert mit **Empfohlen**. Du ordnest Profile und Spaces in den nächsten Schritten einzeln zu, und Lesezeichen, angeheftete Tabs und URL-Regeln von beiden Seiten bleiben erhalten.
   - **Daten deines Accounts verwenden**. Spaces, Lesezeichen, angeheftete Tabs, URL-Regeln und synchronisierte Einstellungen dieses Mac werden durch die deines Kontos ersetzt, und Profile, die dein Konto nicht hat, werden von diesem Mac gelöscht. Nur dieser Mac ändert sich, und das lässt sich nicht rückgängig machen. Lies [Daten deines Accounts verwenden](#use-your-accounts-data), bevor du diese Option wählst.

   Ein Mac, der nur sein Standardprofil und seinen Standard-Space hat und keine Lesezeichen, angehefteten Tabs oder URL-Regeln, sieht diesen Schritt nicht. Es gibt keine Option, die die Daten dieses Mac über dein Konto kopiert.

4. **Ordne deine Profile zu.** Phi ordnet die Profile auf diesem Mac den Profilen in deinem Konto zu und fragt bei denen nach, die es nicht zuordnen konnte. Das Standardprofil dieses Mac wird immer dem Standardprofil deines Kontos zugeordnet: Seine Zeile zeigt dieses Profil aus deinem Konto, ohne Auswahlmenü. Wähle für jedes andere Profil hier entweder **Zu … zuordnen** mit einem Profil aus deinem Konto oder **Als neu registrieren**. Profile in deinem Konto ohne Gegenstück auf diesem Mac stehen unter **Nicht zugeordnete Account-Profile**, wo **Auf diesem Mac erstellen** sie hinzufügt. Würde eine Auswahl diese Regel für das Standardprofil verletzen, meldet Phi **Das Standardprofil dieses Mac kann nur dem Standardprofil des Accounts zugeordnet werden. Überprüfe die Zuordnungen und versuche es erneut.**
5. **Ordne deine Spaces zu.** Wähle für jeden Space auf diesem Mac den Space aus deinem Konto, dem er entspricht, oder **Als neu hinzufügen**. **Alle als neu hinzufügen** erledigt alle noch offenen Spaces auf einmal, und Spaces mit exakt gleichem Namen werden automatisch für dich gewählt. Spaces in deinem Konto, die nicht auf diesem Mac sind, erscheinen unter **Spaces, die aus deinem Account hinzugefügt werden** und werden beim Abschließen erstellt. Auf diesem Mac wird nichts gelöscht. Klicke auf **Fertig**.
6. **Überprüfe, was sich ändert.** Dieser Schritt erscheint nur, wenn etwas auf diesem Mac überschrieben würde. Hast du einen Space hier einem Space in deinem Konto zugeordnet, ersetzen Name, Symbol, Farbe und Design aus dem Konto die Werte dieses Mac, und der Space wechselt möglicherweise zu dem Profil, das er in deinem Konto hat. Tabs, Lesezeichen, angeheftete Tabs und URL-Regeln auf diesem Mac bleiben unberührt. Willst du die Werte dieses Mac behalten, geh mit **Zurück** zurück und füge diesen Space stattdessen als neuen hinzu. Klicke auf **Anwenden**, um die Synchronisierung zu starten. Würde nichts überschrieben, beginnt die Synchronisierung, sobald du auf **Fertig** klickst.

Das Laden des Kontos kann bis zu zwei Minuten dauern, während Phi deine Spaces zählt, und es braucht eine Verbindung: Es gibt keine zwischengespeicherte Kopie, auf die Phi zurückgreifen könnte. Mit **Diesen Mac mit deinem Account zusammenführen** bleiben Lesezeichen, angeheftete Tabs und URL-Regeln von beiden Macs erhalten, sobald die Synchronisierung beginnt, sodass von keiner Seite etwas verloren geht.

### Daten deines Accounts verwenden {#use-your-accounts-data}

Wähle diese Option, wenn du nicht behalten willst, was Phi auf diesem Mac hat, etwa auf einem Mac, den du nur zum Testen verwendet hast. Phi löscht zuerst die Phi-Daten dieses Mac und lädt dann die deines Kontos herunter.

- **Von diesem Mac entfernt:** Spaces außer dem Standard-Space, wobei ihre offenen Tabs geschlossen werden; Lesezeichen, angeheftete Tabs, URL-Regeln und synchronisierte Einstellungen; und jedes Profil, das dein Konto nicht hat, samt Verlauf, Erweiterungen und Websitedaten.
- **Behalten:** Das Standardprofil dieses Mac und Profile, deren Name einem Profil in deinem Konto entspricht, behalten ihren Verlauf, ihre Erweiterungen und ihre Websitedaten. Dein Konto und deine anderen Macs sind nicht betroffen.

Nachdem du auf **Weiter** geklickt hast, fragt Phi **Daten dieses Mac ersetzen?** und listet auf, was entfernt und was heruntergeladen wird. Klicke auf **Daten dieses Mac ersetzen**, um fortzufahren. Phi zeigt **Daten dieses Mac werden ersetzt…** an, und das Fenster bleibt geöffnet, bis der Vorgang abgeschlossen ist. Die Daten deines Kontos kommen dann mit der ersten Synchronisierung an, und der Einstellungsbereich zeigt **Erste Synchronisierung läuft**, was bei einem großen Konto einige Minuten dauern kann. Bricht das Ersetzen mit einem Fehler ab, siehe [Das Ersetzen der Daten dieses Mac konnte nicht abgeschlossen werden](#replace-did-not-finish).

::: warning Ersetzen lässt sich nicht rückgängig machen
Phi bewahrt keine Kopie dessen auf, was es löscht. Willst du eine, wähle zuerst **Später abschließen**, exportiere mit **Hilfe → Nutzerdaten verwalten → Benutzerdaten exportieren…** (siehe [Importieren & Exportieren](/de/import-export/) und [Synchronisieren oder exportieren](#sync-or-export)) und kehre dann zur Einrichtung zurück. Willst du ein lokales Profil behalten, wähle stattdessen **Diesen Mac mit deinem Account zusammenführen**.
:::

### Wenn die Einrichtung dein Konto nicht laden kann {#setup-cannot-load-account}

Die Einrichtung liest dein Konto, bevor sie Auswahlmöglichkeiten zeigt. Schlägt das fehl, nennt das Fenster den Grund und bietet **Erneut versuchen** an:

- **Die Spaces deines Accounts konnten nicht rechtzeitig geladen werden.** Das Konto ist groß oder die Verbindung langsam. Überprüfe deine Verbindung und versuche es erneut.
- **Die Synchronisierung ist derzeit nicht verfügbar, daher konnten die Spaces deines Accounts nicht geladen werden.** Phi erreicht die Synchronisierung gerade nicht. Prüfe, ob du online und noch angemeldet bist, und versuche es dann erneut.
- **Die Profile deines Accounts konnten nicht geladen werden.** oder **Die Spaces deines Accounts konnten nicht geladen werden.** Überprüfe deine Verbindung und versuche es erneut.
- Ein Profil aus deinem Konto, das mit **Kann gerade nicht gelesen werden** markiert ist: Phi versucht es im Hintergrund weiter, und der Rest der Einrichtung funktioniert trotzdem.
- **Das Standardprofil deines Accounts kann auf diesem Mac nicht gelesen werden, daher können die Daten dieses Mac gerade nicht ersetzt werden.** **Daten deines Accounts verwenden** ist erst möglich, wenn es gelesen werden kann. Wähle **Diesen Mac mit deinem Account zusammenführen** oder **Später abschließen** und versuche es erneut.

### Später abschließen {#finish-later}

**Später abschließen** erscheint beim Schritt zur Synchronisierungsmethode und auf den Zuordnungsseiten. Wählst du es oder schließt das Fenster, browst du auf diesem Mac lokal weiter: Nichts wird synchronisiert, der Einstellungsbereich zeigt **Nicht gekoppelt**, und Phi öffnet die Einrichtung nicht von selbst erneut. Kehre zu **Einstellungen → Synchronisierung** zurück und klicke auf **Einrichtung fortsetzen**, wenn du so weit bist. Phi lädt dein Konto dann neu, deshalb bleiben nicht abgeschlossene Entscheidungen nicht erhalten, auch nicht die Synchronisierungsmethode: Die nächste Einrichtung beginnt mit ausgewähltem **Diesen Mac mit deinem Account zusammenführen**.

Die Ausnahme ist ein Ersetzen, das bereits begonnen hat. Hat Phi angefangen, die Daten dieses Mac zu ersetzen, bricht das Verlassen der Einrichtung den Vorgang nicht ab. Wurde er unterbrochen, etwa durch einen Fehler oder weil Phi beendet wurde, und hast du das Fenster geschlossen, springt die Einrichtung beim nächsten Öffnen direkt zu **Daten dieses Mac ersetzen?**, ohne **Zurück**, und **Daten dieses Mac ersetzen** macht dort weiter, wo der Vorgang unterbrochen wurde. **Dieses Gerät aus der Synchronisierung entfernen…** wird dort weiterhin angeboten; damit bleibt dieser Mac außerhalb der Synchronisierung, mit allem, was das Ersetzen noch nicht entfernt hatte.

## Wiederherstellungscode vergessen? {#forgot-your-recovery-code}

Niemand kann deinen Wiederherstellungscode erneut anzeigen oder einen neuen für dieselben Synchronisierungsdaten erstellen, auch wir nicht. Was du noch tun kannst, hängt von deiner Situation ab. Der Link **Wiederherstellungscode vergessen?** auf der Seite **Gib deinen Wiederherstellungscode ein** öffnet diesen Abschnitt.

### Du richtest gerade deinen ersten Mac ein

Bist du bei **Bestätige deinen Wiederherstellungscode** und hast das Einrichtungsfenster nicht geschlossen, klicke auf **Zurück**. Phi zeigt denselben Code erneut an. Sichere ihn, klicke auf **Ich habe ihn gesichert** und gib ihn zur Bestätigung ein.

Phi 2.14 und früher haben keine Taste **Zurück**. Hast du das Fenster geschlossen oder Phi neu gestartet, ist der Code ebenfalls weg: Phi fragt weiter danach, kann ihn aber nicht anzeigen. Aktualisiere Phi in beiden Fällen bei Bedarf und fang dann mit [Synchronisierung zurücksetzen](#reset-sync) neu an, wie unten beschrieben.

### Ein anderer Mac ist noch für die Synchronisierung eingerichtet

Du brauchst den Code nicht. Wähle auf dem neuen Mac **Genehmigung von einem anderen Gerät anfordern** und genehmige die Anfrage auf dem eingerichteten Mac; siehe [Weiteren Mac hinzufügen](#add-another-mac). Auf den Macs, die du hast, läuft die Synchronisierung weiter.

Der Code lässt sich trotzdem weder erneut anzeigen noch ersetzen. Lass mindestens einen Mac für die Synchronisierung eingerichtet: Solange einer eingerichtet ist, kannst du Macs ohne den Code hinzufügen.

### Das ist dein einziger Mac, oder du willst neu anfangen

Verwende auf diesem Mac [Synchronisierung zurücksetzen](#reset-sync). Dadurch wird der Mac aus der Synchronisierung entfernt, und alle für dein Konto gespeicherten Synchronisierungsdaten werden gelöscht. Deine lokalen Browserdaten bleiben auf dem Mac, und jeder andere Mac, auf dem die Synchronisierung für das Konto noch eingerichtet war, zeigt danach [Synchronisierung erneut einrichten](#set-up-sync-again) an. Richte die Synchronisierung auf diesem Mac dann von Grund auf neu ein, wie unter [Deinen ersten Mac einrichten](#set-up-your-first-mac) beschrieben. Phi erstellt einen neuen Wiederherstellungscode; sichere ihn, bevor du auf **Ich habe ihn gesichert** klickst.

**Synchronisierung zurücksetzen** wird nur auf dem letzten Mac angeboten, der für das Konto eingerichtet ist. Willst du neu anfangen, während noch andere Macs eingerichtet sind, entferne zuerst jeden der anderen aus der Synchronisierung.

### Kein Mac, den du noch hast, ist für die Synchronisierung eingerichtet

Ist der Code weg und kein Mac, den du noch hast, für die Synchronisierung eingerichtet, lässt sich die verschlüsselte Kopie in deinem Konto nicht entsperren, weder von dir noch von uns. Ein Mac, der noch nicht für die Synchronisierung eingerichtet ist, kann die Synchronisierung des Kontos auch nicht zurücksetzen, es gibt also keinen Weg, von ihm aus neu anzufangen. Das gilt auch für einen Mac, der verloren ging oder gelöscht wurde, während er eingerichtet war: Er zählt weiterhin als eingerichtet und lässt sich nicht von einem anderen Mac aus entfernen.

## Synchronisierungsstatus prüfen {#check-sync-status}

Oben im Einstellungsbereich „Synchronisierung“ siehst du, wie es steht:

- **Auf dem neuesten Stand**, **Wird synchronisiert…** oder **Erste Synchronisierung läuft**, solange die erste Synchronisierung läuft.
- **Offline**, mit dem Hinweis, dass Änderungen synchronisiert werden, sobald eine Verbindung besteht. Phi arbeitet mit den lokalen Daten weiter und sendet deine Änderungen, sobald der Mac wieder online ist.
- **Synchronisierung pausiert.** Ein Profil auf diesem Mac ist noch nicht für die Synchronisierung eingerichtet, meist eines, das du nach der Einrichtung angelegt hast. Der Einstellungsbereich nennt die Profile, auf die er wartet, und den Grund. Phi registriert sie von selbst und versucht es weiter, und **Erneut versuchen** probiert es sofort. Siehe [Synchronisierung pausiert](#sync-paused).
- **Erfordert Aufmerksamkeit.** Etwas ist fehlgeschlagen. Darunter erscheint die Zeile **Einige Inhalte erfordern Aufmerksamkeit. Überprüfe die Details und deine Verbindung.**, und **Letztes Problem** nennt das jüngste Problem und wann es aufgetreten ist. Siehe [Was die einzelnen Probleme bedeuten](#needs-attention).

Unter dem Status zeigt **Letzte erfolgreiche Synchronisierung auf diesem Mac**, wann dieser Mac zuletzt eine Synchronisierung abgeschlossen hat. **Warten auf das Laden der Profile** bedeutet, dass Phi die Profilliste dieses Mac noch nicht gelesen hat. Phi versucht es von selbst weiter, und nach fünf Minuten wechselt der Status zu **Erfordert Aufmerksamkeit**.

Hast du den Geltungsbereich angehefteter Tabs geändert, auf diesem Mac oder auf einem anderen, kann eine Zeile **Änderung des Geltungsbereichs angehefteter Tabs noch nicht angewendet** lauten, mit der Anzahl der Versuche und einem Grund: **Eine Migration aus einem anderen Browser läuft**, **Lokale Browserdaten sind nicht verfügbar** oder **Angeheftete Tabs konnten auf diesem Mac nicht gespeichert werden**. Dieser Mac hat seine angehefteten Tabs noch nicht in den neuen Geltungsbereich verschoben. Phi versucht es von selbst weiter, und der Rest der Synchronisierung läuft normal. Verschwindet die Zeile nicht, starte Phi neu, und bleibt sie auch dann, sende Feedback über **Feedback** im Menü oben rechts im Fenster.

### Was die einzelnen Probleme bedeuten {#needs-attention}

**Letztes Problem** zeigt eines der folgenden Probleme. Es bleibt stehen, bis die nächste vollständig abgeschlossene Synchronisierung es löscht.

| Letztes Problem                                                           | Was es bedeutet                                                                                                                  | Was du tust                                                                                                                                         |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Anmeldung abgelaufen**                                                  | Der Synchronisierungsdienst akzeptiert die Anmeldung dieses Mac nicht mehr.                                                      | Melde dich erneut bei deinem Phi-Konto an.                                                                                                          |
| **Keine Verbindung**                                                      | Dieser Mac konnte den Synchronisierungsdienst nicht erreichen.                                                                   | Nichts. Das Problem verschwindet bei der nächsten erfolgreichen Synchronisierung, sobald du online bist.                                            |
| **Serverfehler**                                                          | Der Synchronisierungsdienst hat einen Fehler gemeldet.                                                                           | Nichts. Das Problem verschwindet bei der nächsten erfolgreichen Synchronisierung.                                                                   |
| **Server hat Änderungen abgelehnt**                                       | Der Synchronisierungsdienst hat einige Änderungen dieses Mac abgelehnt, etwa nach wiederholten Konflikten mit einem anderen Mac. | Klicke auf **Jetzt synchronisieren**. Tritt es wieder auf, starte Phi neu, und sende Feedback, wenn es bestehen bleibt.                             |
| **Daten auf diesem Mac konnten nicht gelesen werden**                     | Phi konnte einige seiner eigenen Daten auf diesem Mac nicht lesen.                                                               | Klicke auf **Jetzt synchronisieren**. Tritt es wieder auf, starte Phi neu, und sende Feedback, wenn es bestehen bleibt.                             |
| **Synchronisierungsstand konnte auf diesem Mac nicht gespeichert werden** | Phi konnte nicht speichern, was bereits synchronisiert wurde.                                                                    | Klicke auf **Jetzt synchronisieren**. Tritt es wieder auf, starte Phi neu, und sende Feedback, wenn es bestehen bleibt.                             |
| **Einige synchronisierte Daten konnten nicht gelesen werden**             | Etwas in deinem Konto konnte auf diesem Mac nicht gelesen werden.                                                                | Klicke auf **Jetzt synchronisieren**. Tritt es wieder auf, starte Phi neu, und sende Feedback, wenn es bestehen bleibt.                             |
| **Warten auf die Kopplung eines Profils**                                 | Einige synchronisierte Elemente warten, bis ein Profil auf diesem Mac mit deinem Konto gekoppelt ist.                            | Warte, bis Phi das Profil eingerichtet hat, oder klicke auf **Erneut versuchen**, wenn der Einstellungsbereich **Synchronisierung pausiert** zeigt. |
| **Synchronisierung muss zurückgesetzt werden**                            | Die Synchronisierungsdaten in deinem Konto wurden zurückgesetzt, und die Einrichtung dieses Mac passt nicht mehr dazu.           | Klicke auf **Synchronisierung erneut einrichten**. Siehe [Synchronisierung erneut einrichten](#set-up-sync-again).                                  |

Zurückgehaltene Elemente, beschrieben unter [Details](#sync-details), können den Status auch ohne Problemnamen auf **Erfordert Aufmerksamkeit** halten. Siehe [Angeheftete Tabs werden zurückgehalten](#held-pinned-tabs).

### Details {#sync-details}

**Details** listet deine Profile auf, jeweils mit dem Status ihrer Browserdaten, dann eine Zeile pro Art von Phi-Daten: **Einstellungen**, **Spaces**, **Lesezeichen**, **Angeheftete Tabs** und **URL-Regeln**. Die Zeile jeder Art beschreibt ihre letzte Synchronisierung mit Änderungen und wie lange diese her ist:

| Zähler                    | Was er zählt                                                                                                                                                                                                                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **empfangen**             | Änderungen, die dieser Mac aus deinem Konto erhalten hat.                                                                                                                                                                                                                                                            |
| **gesendet**              | Änderungen, die dieser Mac hochgeladen hat.                                                                                                                                                                                                                                                                          |
| **warten auf das Senden** | Änderungen auf diesem Mac, die noch nicht hochgeladen sind. Eine spätere Synchronisierung sendet sie.                                                                                                                                                                                                                |
| **zurückgehalten**        | Elemente, die dieser Mac empfangen hat, aber noch nicht anwenden kann. Phi behält sie, bis es das kann, zum Beispiel einen angehefteten Tab, dessen Profil oder Space auf diesem Mac nicht gekoppelt ist. Angeheftete Tabs, die zu einem anderen Geltungsbereich angehefteter Tabs gehören, werden nicht mitgezählt. |

Die Zähler **warten auf das Senden** und **zurückgehalten** erscheinen nur, wenn sie nicht null sind. Eine Art ohne aktuelle Aktivität zeigt **Keine aktuellen Änderungen**.

### Jetzt synchronisieren {#sync-now}

**Jetzt synchronisieren** lässt diesen Mac sofort alles synchronisieren. Das brauchst du selten: Phi erfährt, wenn ein anderer Mac etwas ändert, und prüft zusätzlich von selbst, höchstens einmal pro Minute. **Jetzt synchronisieren** überspringt diese Wartezeit. Während eine Synchronisierung wartet oder läuft, zeigt die Taste den Fortschritt, und wenn du den Zeiger darauf bewegst, nennt sie, worauf sie wartet, etwa **Warten, bis alle Profile verfügbar sind**.

Wird eine von dir gestartete Synchronisierung nicht abgeschlossen, zeigt eine Zeile unter dem Status das an, bis du erneut klickst:

- Der Name des Problems aus der Tabelle oben, wenn während dieser Synchronisierung eines erfasst wurde.
- **Synchronisierung nicht abgeschlossen**, wenn die Synchronisierung ohne bestimmtes Problem angehalten hat. Versuche es später erneut. Passiert das auf einem Mac immer wieder, siehe [Angeheftete Tabs werden zurückgehalten](#held-pinned-tabs).
- **Synchronisierung konnte nicht gestartet werden. Versuche es später erneut.**, wenn dieser Mac überhaupt keine Synchronisierung starten konnte.

Eine abgeschlossene Synchronisierung fügt keine Zeile hinzu, und **Letzte erfolgreiche Synchronisierung auf diesem Mac** springt auf die neue Zeit.

## Geräte

Der Abschnitt **Geräte** listet jeden Mac auf, der in deinem Konto eingerichtet ist, wobei **Dieser Mac** markiert ist, und jeden Mac, der auf den Beitritt wartet, mit seinem Code, **Genehmigen**, **Ablehnen** und dem Ablaufzeitpunkt der Anfrage. Zum Genehmigen muss dieser Mac angemeldet sein und seine eigene Einrichtung abgeschlossen haben.

Jeder Mac kann nur sich selbst entfernen, über seinen eigenen Einstellungsbereich „Synchronisierung“. Einen Mac, den du nicht mehr hast, kannst du noch nicht entfernen: Ein verlorener Mac bleibt im Konto und empfängt weiter Änderungen, solange er angemeldet ist. Wenn du ihn noch erreichst, beendet eine Abmeldung das.

## Mac aus der Synchronisierung entfernen {#remove-a-mac-from-sync}

Klicke in **Einstellungen → Synchronisierung** unter **Entfernen** in der Zeile **Diesen Mac aus der Synchronisierung entfernen** auf **Entfernen…** und bestätige mit **Dieses Gerät entfernen**. Ist die Einrichtung auf diesem Mac nicht abgeschlossen, bietet das Einrichtungsfenster stattdessen unten **Dieses Gerät aus der Synchronisierung entfernen…** an.

- Dieser Mac hört auf zu synchronisieren, der Synchronisierungsdienst widerruft seinen Zugang, und seine Synchronisierungseinrichtung, seine Schlüssel und die Zuordnung von Profilen und Spaces werden auf diesem Mac gelöscht.
- Alles, womit du gesurft hast, bleibt: Spaces, Lesezeichen, Verlauf und angeheftete Tabs bleiben vollständig erhalten, und du bleibst bei deinem Konto angemeldet.
- Deine anderen Macs sind nicht betroffen und synchronisieren weiter untereinander.
- Um diesen Mac zurückzuholen, starte die Einrichtung erneut und tritt per Genehmigung oder Wiederherstellungscode bei.

Ist dieser Mac der einzige im Konto, der für die Synchronisierung eingerichtet ist, heißt die Zeile stattdessen **Synchronisierung zurücksetzen**, weil das Entfernen des letzten Mac auch die Synchronisierungsdaten des Kontos löscht. Siehe [Synchronisierung zurücksetzen](#reset-sync).

::: warning Entfernen erneuert die Schlüssel deines Kontos nicht
Ein entfernter Mac empfängt nichts Neues mehr, aber die Verschlüsselungsschlüssel deines Kontos ändern sich dadurch nicht, und was dieser Mac bereits synchronisiert hatte, lässt sich nicht zurückholen. Was auf ihm war, bleibt auf ihm.
:::

### Synchronisierung zurücksetzen {#reset-sync}

Ist dieser Mac der einzige Mac, der in deinem Konto für die Synchronisierung eingerichtet ist, zeigt der Abschnitt **Entfernen** die Zeile **Synchronisierung zurücksetzen** mit der Taste **Zurücksetzen…**. Das Zurücksetzen entfernt diesen Mac aus der Synchronisierung und löscht alle für dieses Konto gespeicherten Synchronisierungsdaten, sodass du neu anfangen kannst, etwa nachdem du deinen Wiederherstellungscode verloren hast.

1. Klicke in **Einstellungen → Synchronisierung** unter **Entfernen** auf **Zurücksetzen…**.
2. Phi fragt **Alle Synchronisierungsdaten für diesen Account löschen?** Klicke zum Bestätigen auf **Alle Synchronisierungsdaten löschen**. Das lässt sich nicht rückgängig machen.

- Jedes Gerät wird aus der Synchronisierung entfernt, und alles, was für dieses Konto auf dem Synchronisierungsserver gespeichert ist, wird gelöscht.
- Deine lokalen Browserdaten bleiben auf diesem Mac: Spaces, Lesezeichen, Verlauf und angeheftete Tabs bleiben erhalten, und du bleibst bei deinem Konto angemeldet.
- Jeder andere Mac, auf dem die Synchronisierung für dieses Konto noch eingerichtet war, zeigt [Synchronisierung erneut einrichten](#set-up-sync-again) an.
- Um die Synchronisierung wieder zu verwenden, richte sie von Grund auf neu ein. Phi erstellt einen neuen Wiederherstellungscode.

Entfernst du diesen Mac über das Einrichtungsfenster und stellt sich heraus, dass er der letzte ist, sagt Phi dir das: **Dies ist das letzte für die Synchronisierung eingerichtete Gerät. Du kannst es entfernen und alle für diesen Account gespeicherten Synchronisierungsdaten löschen oder zuerst die Synchronisierung auf einem anderen Gerät einrichten.** Danach bietet Phi **Dieses Gerät entfernen und alle Synchronisierungsdaten löschen…** an, was nach derselben Bestätigung fragt.

Ist dem Konto in der Zwischenzeit ein anderer Mac beigetreten, wird nichts gelöscht. Phi meldet **Inzwischen ist ein anderes Gerät diesem Account beigetreten, daher wurde nichts gelöscht. Du kannst stattdessen diesen Mac aus der Synchronisierung entfernen.** Die Zeile heißt dann wieder **Diesen Mac aus der Synchronisierung entfernen**.

## Synchronisierung erneut einrichten {#set-up-sync-again}

Zeigt der Einstellungsbereich **Die Synchronisierungsdaten des Accounts haben sich geändert. Die Synchronisierung von Phi-Daten ist pausiert.**, wurden die Synchronisierungsdaten in deinem Konto zurückgesetzt, und die Einrichtung dieses Mac passt nicht mehr dazu. Phis Daten werden nicht mehr synchronisiert, bis du handelst; erneutes Versuchen oder ein Neustart behebt das nicht. Klicke auf **Synchronisierung erneut einrichten** und bestätige. Phi löscht die Synchronisierungseinrichtung und die Zuordnungsinformationen dieses Mac, behält deine lokalen Browserdaten und das, was in deinem Konto liegt, und führt dich erneut durch die Einrichtung, einschließlich des Beitritts per Genehmigung oder Wiederherstellungscode.

Das siehst du auch auf einem Mac, nachdem auf dem letzten Mac des Kontos **Synchronisierung zurücksetzen** verwendet wurde, weil die Synchronisierungsdaten, mit denen dieser Mac eingerichtet war, gelöscht wurden.

## Fehlerbehebung {#troubleshooting}

### Ein zweiter Mac hat meine Tastaturkurzbefehle oder offenen Tabs nicht übernommen {#missing-shortcuts-and-open-tabs}

Das ist so vorgesehen. Tastaturkurzbefehle aus **Einstellungen → Tastaturkurzbefehle** werden nie synchronisiert, gewöhnliche offene Tabs ebenfalls nicht: Nur angeheftete Tabs werden synchronisiert. Auch KI- und Agenten-Einstellungen bleiben auf jedem Mac. Lege sie auf jedem Mac fest, auf dem du sie haben willst. Siehe [Was synchronisiert wird](#what-syncs).

### Ein Mac meldet „Synchronisierung nicht abgeschlossen“ und hält angeheftete Tabs zurück {#held-pinned-tabs}

Ein Mac zeigt **Synchronisierung nicht abgeschlossen**, und seine Zeile **Angeheftete Tabs** unter **Details** zeigt **zurückgehalten** mit einer Zahl davor, während der andere Mac **Auf dem neuesten Stand** meldet. Der Zähler **zurückgehalten** bedeutet, dass dieser Mac angeheftete Tabs empfangen hat, die er nicht einordnen kann, weil das Profil oder der Space, zu dem sie gehören, hier nicht gekoppelt ist.

Die übliche Ursache ist, dass die Standardprofile der beiden Macs bei der Einrichtung nicht einander zugeordnet wurden. Macs, die mit Phi 2.12 gekoppelt wurden, konnten in diesen Zustand geraten. Seit Phi 2.13 ordnet die Einrichtung das Standardprofil immer dem Standardprofil deines Kontos zu.

Um das jetzt zu beheben, [entferne auf dem Mac, der die angehefteten Tabs zurückhält, diesen Mac aus der Synchronisierung](#remove-a-mac-from-sync) und richte ihn dann erneut ein, wie unter [Weiteren Mac hinzufügen](#add-another-mac) beschrieben. Wähle **Diesen Mac mit deinem Account zusammenführen**, falls Phi fragt, wie dieser Mac synchronisieren soll. Lesezeichen, Verlauf und alles andere bleiben dabei auf dem Mac, und sein Standardprofil wird dem Standardprofil deines Kontos zugeordnet.

### Synchronisierung pausiert oder Warten auf die Kopplung eines Profils {#sync-paused}

Ein Profil, das du nach der Einrichtung der Synchronisierung anlegst, ist noch nicht gekoppelt. Phi registriert es von selbst bei deinem Konto, und die Synchronisierung für dieses Profil beginnt, sobald das erledigt ist. **Erneut versuchen** im Einstellungsbereich „Synchronisierung“ probiert es sofort. Verschwindet die Pause nie, prüfe deine Verbindung und ob du noch angemeldet bist, und klicke dann noch einmal auf **Erneut versuchen**.

### Die Synchronisierung meldet „Erfordert Aufmerksamkeit“ {#sync-needs-attention}

**Letztes Problem** nennt, was schiefgegangen ist. [Was die einzelnen Probleme bedeuten](#needs-attention) listet jedes Problem auf und was du dagegen tun kannst.

### Das Ersetzen der Daten dieses Mac konnte nicht abgeschlossen werden {#replace-did-not-finish}

Bricht die Einrichtung mit **Das Ersetzen der Daten dieses Mac konnte nicht abgeschlossen werden.** ab, nachdem du **Daten deines Accounts verwenden** gewählt hast, klicke auf **Erneut versuchen**. Der Vorgang macht dort weiter, wo er unterbrochen wurde, und bis dahin ändert sich sonst nichts. Lass Phi geöffnet, während er läuft; bei einem großen Konto kann das einige Minuten dauern. Schließt du das Fenster, setzt die nächste Einrichtung dasselbe Ersetzen fort, wie unter [Später abschließen](#finish-later) beschrieben.

### Name, Symbol, Farbe oder Design eines Space haben sich nach dem Zuordnen geändert {#account-values-replaced}

Das ist so vorgesehen. Ordnest du einen Space auf diesem Mac einem Space in deinem Konto zu, setzen sich Name, Symbol, Farbe und Design aus dem Konto durch, und **Überprüfe, was sich ändert** zeigt das, bevor du auf **Anwenden** klickst. Willst du die Version dieses Mac behalten, geh an dieser Stelle mit **Zurück** zurück und wähle für diesen Space **Als neu hinzufügen**: Er wird dann als eigener Space synchronisiert. Sobald die Zuordnung angewendet ist, werden die alten Werte dieses Mac nicht aufbewahrt. Gestalte den Space also von Hand neu, wenn du sie zurückhaben willst; die Änderung wird auch auf deine anderen Macs synchronisiert.

## Abmelden

Wenn du dich von deinem Phi-Konto abmeldest, endet die Synchronisierung auf diesem Mac, und von deinen anderen Macs kommt nichts mehr an, bis du dich wieder anmeldest. Meldest du dich wieder beim selben Konto an, macht die Synchronisierung dort weiter, wo sie aufgehört hat, und holt nach, was sie verpasst hat; der Einstellungsbereich „Synchronisierung“ zeigt dir, ob noch etwas abzuschließen ist. Ein Wechsel zu einem anderen Konto vermischt die beiden nie: Jedes Konto hat seine eigenen synchronisierten Daten und seine eigene Zuordnung.

## Wie deine Daten geschützt sind

- **Verschlüsselt, bevor sie deinen Mac verlassen.** Deine Macs erzeugen die Schlüssel, und nur die verschlüsselte Kopie wird hochgeladen. Der Synchronisierungsdienst speichert sie und gibt sie an deine anderen Macs weiter; entschlüsseln kann er sie nicht.
- **Anmelden allein reicht nicht, um sie zu lesen.** Ein neuer Mac erhält den Schlüssel nur durch die Genehmigung eines Mac, der ihn bereits besitzt, oder über deinen Wiederherstellungscode. Deshalb lässt sich ein verlorener Code auch nicht wiederherstellen: Der Link **Wiederherstellungscode vergessen?** in der Einrichtung erklärt deine Möglichkeiten, und keine davon bringt den Code zurück.
- **Es sind trotzdem Daten, die wir für dich aufbewahren.** Die verschlüsselte Kopie liegt auf Phinomenons Synchronisierungsdienst, die Synchronisierung gehört also zu den Dingen, die Phi sendet. [Datenschutz & deine Daten](/de/privacy/) listet die anderen auf, und die [Datenschutzerklärung](https://phibrowser.com/privacy/) und die [Nutzungsbedingungen](https://phibrowser.com/terms/) sind für all das maßgeblich.

## Synchronisieren oder exportieren {#sync-or-export}

Die Synchronisierung ist für Macs gedacht, die du parallel weiter nutzt. Für einen einmaligen Umzug auf einen neuen Mac oder eine Kopie, die du selbst aufbewahrst, ist im Menü **Hilfe** der Punkt **Benutzerdaten verwalten → Benutzerdaten exportieren …** das bessere Werkzeug; siehe [Importieren & Exportieren](/de/import-export/).

## Nächste Schritte

- [Spaces & Profile](/de/spaces/), was ein Space und ein Profil sind und warum die Einrichtung sie zuordnet.
- [Lesezeichen & angeheftete Tabs](/de/bookmarks/), der Geltungsbereich angehefteter Tabs, dem die Synchronisierung folgt.
- [Datenschutz & deine Daten](/de/privacy/), alles andere, was Phi sendet und aufbewahrt.
- [Importieren & Exportieren](/de/import-export/), Daten einmalig statt fortlaufend übertragen.
