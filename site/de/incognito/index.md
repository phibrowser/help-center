---
description: "Erfahre, wie Inkognito-Spaces privates Surfen in die Seitenleiste von Phi Browser bringen, wie URL-Regeln und Erweiterungen mit privaten Sitzungen zusammenspielen und was beim Schließen des Space passiert."
---

# Inkognito-Spaces

Ein **Inkognito-Space** bringt privates Surfen in die Seitenleiste. Er erscheint in der Spaces-Leiste und funktioniert, solange er besteht, wie jeder andere Space, mit eigenem Fenster und eigenen Tabs, aber nichts davon wird auf die Festplatte geschrieben. Die Sitzung lebt nur im Arbeitsspeicher, und mit dem Schließen des Space wird sie zerstört.

## Einen Inkognito-Space öffnen

Wähle **Ablage → Neuer Inkognito-Space**. Der Space reiht sich mit einem Ninja-Symbol (🥷) und dem Namen **Inkognito** in die Seitenleiste ein. Öffnest du mehrere gleichzeitig, werden sie stattdessen nummeriert, **Inkognito 1**, **Inkognito 2** und so weiter, und jeder behält seine Nummer, bis er geschlossen wird. Einen eingebauten Tastaturkurzbefehl zum Erstellen gibt es nicht.

Zwei Dinge über die Sitzung dahinter sind gut zu wissen:

- **Alle Inkognito-Spaces teilen sich eine private Sitzung.** Sie sind eigene Einträge in der Seitenleiste, aber hinter allen steht ein einziges Profil im Arbeitsspeicher, das immer auf deinem Standardprofil aufbaut, egal von wo aus du es geöffnet hast. Meldest du dich in einem Inkognito-Space bei einer Website an, bist du dort auch in den anderen angemeldet. Um zwei Sitzungen wirklich zu trennen, verwende stattdessen Spaces auf unterschiedlichen [Profilen](/de/spaces/).
- **Inkognitofenster sind eine eigene Sitzung.** Das klassische **Ablage → Neues Inkognitofenster** gibt es weiterhin, und seine Sitzung vermischt sich nie mit der gemeinsamen Sitzung der Inkognito-Spaces.

## So sieht es aus

Ein Inkognito-Space verwendet immer Phis eigenes dunkles Inkognito-Theme; Themes pro Space greifen hier nicht. Sein Symbol kannst du wie bei jedem anderen Space ändern, die Wahl hält aber nur so lange wie der Space selbst. Und weil es nichts Dauerhaftes zu konfigurieren gibt, tauchen Inkognito-Spaces im Bereich „Spaces“ der Einstellungen nicht auf.

## Was aus einer privaten Sitzung draußen bleibt

- **Verlauf, Cookies und Websitedaten** liegen nur im Arbeitsspeicher und enden mit der Sitzung.
- **Lesezeichen sind nicht verfügbar.** Ein Inkognito-Space zeigt keine Lesezeichen und lässt dich auch keine anlegen.
- **Angeheftete Tabs werden nicht angezeigt.** Inkognito-Spaces zeigen nie angeheftete Tabs und erlauben auch keine, unabhängig davon, welcher Geltungsbereich für angeheftete Tabs beim regulären Surfen gewählt ist.
- **KI-Funktionen bleiben außen vor.** Der Assistenten-Chat ist nicht verfügbar, und die Taste „Erinnerungen“ in der Seitenleiste ist ausgeblendet.
- **Erweiterungen bleiben draußen, wenn sie nicht eingeladen sind.** In einer privaten Sitzung sind nur Erweiterungen aktiv, denen du das Ausführen im Inkognitomodus erlaubt hast. Siehe [unten](#extensions-in-an-incognito-space).
- **Das Importieren von Browserdaten ist blockiert.** Phi lehnt ab mit: _„Browserdaten können nicht in Inkognito importiert werden. Wechsle zu einem regulären Space oder Fenster und versuche es erneut.“_
- **Time Machine lässt sie in Ruhe.** [Time Machine-Backups](/de/time-machine/) schließen Inkognito-Spaces vollständig aus; das Wiederherstellen eines Schnappschusses bringt also nie einen zurück.

Eines überlebt mit Absicht: Dateien, die du lädst, werden wie üblich auf deinem Mac gesichert. Lösche sie selbst, wenn du sie nicht behalten willst.

## Websites mit URL-Regeln nach Inkognito schicken

[URL-Regeln](/de/spaces/#url-rules-route-matching-sites-automatically) können passende Websites automatisch ins private Surfen lenken. Im Regel-Editor bietet die Zielauswahl neben deinen regulären Spaces und Kiosk ein generisches Ziel **Inkognito** an, nie einen bestimmten Inkognito-Space, denn die existieren nur, solange sie geöffnet sind. Greift eine Regel, leitet Phi die Seite in den Inkognito-Space, in dem du dich gerade befindest, oder in den ersten aktiven; ist keiner geöffnet, öffnet Phi bei Bedarf einen neuen.

Das Lenken nach Inkognito ist ein Einwegventil. Eine Regel kann eine Navigation in eine private Sitzung schicken, aber nichts wird je wieder herausgeleitet: Während du in einem Inkognito-Space oder einem Inkognitofenster surfst, greifen URL-Regeln nicht, ein Link dort kann also nicht in einen regulären Space herausgezogen werden.

Einen einzelnen Link kannst du auch von Hand dorthin schicken: Klicke ihn in einem regulären Fenster mit der rechten Maustaste an und wähle im Untermenü **Link in Space öffnen** einen Inkognito-Space aus; dort werden aktive Inkognito-Spaces neben deinen regulären aufgeführt.

## Erweiterungen in einem Inkognito-Space {#extensions-in-an-incognito-space}

Weil die private Sitzung eines Inkognito-Space auf deinem **Standardprofil** aufbaut, dem Profil, mit dem Phi startet, können darin nur die Erweiterungen des Standardprofils laufen, und jede braucht deine ausdrückliche Erlaubnis, dieselbe Regel wie in jedem Chromium-basierten Browser. So erlaubst du einer Erweiterung das Ausführen in Inkognito:

1. Wähle in einem Fenster mit dem Standardprofil **Erweiterungen verwalten** aus dem Menü „Erweiterungen“, oder gib `phi://extensions` in die Adressleiste ein.
2. Öffne die **Details** der Erweiterung.
3. Schalte **Im Inkognitomodus zulassen** ein.

Der Schalter gilt pro Erweiterung und deckt Inkognito-Spaces wie Inkognitofenster ab. Eine Erweiterung, die auf einem anderen Profil installiert ist, erscheint nie in einem Inkognito-Space; um sie dort zu nutzen, installiere sie zuerst auf dem Standardprofil. Bedenke, dass eine zugelassene Erweiterung beobachten kann, welche Websites du privat besuchst, gewähre das also nur Erweiterungen, denen du vertraust. Neue Erweiterungen lassen sich aus einer privaten Sitzung heraus nicht installieren.

## Einen Inkognito-Space schließen

Wähle **Inkognito-Space schließen** aus dem Menü **Spaces**, oder schließe den letzten Tab des Space. In beiden Fällen fragt Phi zuerst **„Damit wird auch dieser Inkognito-Space geschlossen. Bist du sicher?“**, und mit dem Schließen verschwindet der Space auch aus der Leiste. Aktiviere **Nicht erneut fragen**, um die Rückfrage künftig zu überspringen.

Die gemeinsame private Sitzung besteht, solange noch irgendein Inkognito-Space geöffnet ist. Wenn das letzte Inkognito-Space-Fenster geschlossen oder Phi beendet wird, wird die Sitzung im Arbeitsspeicher zerstört, mitsamt allem darin. Danach gibt es keinen Aufräumschritt, denn nichts davon lag je auf der Festplatte.

## Wie das mit dem Rest von Phi zusammenhängt

Inkognito-Spaces bauen auf dem Workspace-Modell auf, das unter [Spaces & Profile](/de/spaces/) beschrieben ist. Stell sie dir als Spaces vor, deren Isolationsschicht ein Wegwerfartikel ist. Was Phi über dein reguläres Surfen behält und was nicht, steht unter [Datenschutz & deine Daten](/de/privacy/); warum ein Rollback nie eine private Sitzung zurückbringt, unter [Time Machine-Backups](/de/time-machine/).
