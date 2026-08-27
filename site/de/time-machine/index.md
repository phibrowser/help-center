---
description: "Erfahre, wie die Time Machine-Rollback-Schnappschüsse in Phi Browser funktionieren, wann sie erstellt werden, worin sich die Wiederherstellung von Apples Time Machine unterscheidet und wann du Benutzerdaten exportieren solltest."
---

# Time Machine-Backups

Time Machine ist Phis Sicherheitsnetz für Updates. Vor bestimmten großen Updates sichert Phi automatisch einen Schnappschuss der aktuellen Version und deiner Daten. Funktioniert eine neue Version nicht so, wie du es erwartet hast, kannst du zu der Version zurückkehren, auf der du warst. Es ist für das seltene Update da, das viel auf einmal ändert.

## Was es ist und was nicht

Phis Time Machine ist eine Funktion zum **Zurücksetzen der Version**, kein allgemeines Backup-Werkzeug. Zwei Dinge, mit denen man sie leicht verwechselt:

- Sie ist **nicht** Apples Time Machine. Sie sichert nicht deinen Mac und hat nichts mit der gleichnamigen Systemfunktion zu tun.
- Sie ist **kein** fortlaufendes, geplantes Backup deines Surfens. Phi legt nicht täglich Schnappschüsse an und lässt dich keinen beliebigen Zeitpunkt wählen. Ein Schnappschuss entsteht automatisch, gelegentlich, unmittelbar vor einem Update, das mehr Risiko trägt als üblich.

Wenn du ein Backup willst, das du selbst kontrollierst, für den Umzug auf einen neuen Mac oder eine Kopie vor dem Experimentieren, verwende stattdessen **Benutzerdaten exportieren** (siehe [Eigene Daten exportieren](#exporting-your-own-data) unten).

## Wann ein Schnappschuss erstellt wird

Einen Time Machine-Schnappschuss startest du nicht selbst. Phi erstellt ihn automatisch, unmittelbar bevor ein infrage kommendes Update startet, und nur einmal pro solchem Update. Die meisten Updates lösen gar keinen aus. Existiert ein Schnappschuss, erfasst er die Phi-Daten der vorherigen Version, also deine Lesezeichen, Spaces, angehefteten Tabs, Einstellungen, Erinnerungen und deinen Browsing-Zustand, zusammen mit einem Vermerk, zu welcher App-Version er gehört, damit ein Rollback einen stimmigen Stand wiederherstellt statt einer unpassenden Mischung. Die App selbst liegt nicht im Schnappschuss; sie wird während der Wiederherstellung geladen.

Schnappschüsse werden **lokal auf deinem Mac** gespeichert. Sie werden nicht in die Cloud geladen, sind nicht an dein Konto gebunden und lassen sich nicht auf einen anderen Mac übertragen.

## Zu einer früheren Version zurückkehren

1. Öffne das Menü **Hilfe** und suche **Time Machine-Backups**.
2. Jeder verfügbare Schnappschuss ist mit Version, Build und Datum aufgeführt, zum Beispiel _Phi 1.6 (590) am 2026.6.11_. Gibt es keinen, zeigt das Menü **Keine Backups verfügbar**.
3. Wähle den gewünschten Schnappschuss. Phi bittet mit **„Time Machine-Backup wiederherstellen?“** um Bestätigung und weist darauf hin: _Phi wird beendet und stellt das Backup wieder her; die aktuelle App und die ausgewählten Benutzerdaten werden ersetzt._
4. Wähle **Wiederherstellen**. Phi lädt die frühere Version, ersetzt die aktuelle App und die zugehörigen Daten und startet in der wiederhergestellten Version neu.

Weil das Rollback die frühere Version herunterlädt, brauchst du während der Wiederherstellung eine Internetverbindung. Die Wiederherstellung ist so ausgelegt, dass sie entweder abschließt oder sich nach einer Unterbrechung sicher erholt; ein Beenden oder Absturz mitten in der Wiederherstellung hinterlässt Phi also nicht in einem kaputten Zustand.

## Eigene Daten exportieren {#exporting-your-own-data}

Time Machine kümmert sich um Update-Rollbacks. Für ein Backup, das du selbst anlegst und zu deinen eigenen Bedingungen aufbewahrst, verwende im Menü **Hilfe** den Punkt **Benutzerdaten verwalten**:

- **Benutzerdaten exportieren …** sichert deine Phi-Daten als eine einzige Datei, die du beliebig ablegen kannst.
- **Benutzerdaten importieren …** ersetzt deine aktuellen Phi-Daten durch eine früher exportierte Datei und startet dann neu.

Das ist das richtige Werkzeug für den Umzug auf einen neuen Mac oder für eine persönliche Kopie, also den Teil, den Time Machine bewusst nicht abdeckt.

## Wie das mit dem Rest von Phi zusammenhängt

Ein Time Machine-Schnappschuss enthält die Daten hinter [Spaces & Profilen](/de/spaces/) und [Erinnerungen](/de/memory/); ein Rollback versetzt sie also zurück in den Stand zum Zeitpunkt des Schnappschusses. Alles bleibt auf deinem Mac, im Einklang mit Phis Local-first-Ansatz, wie er unter [Datenschutz & deine Daten](/de/privacy/) beschrieben ist.
