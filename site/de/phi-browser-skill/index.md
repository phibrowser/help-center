---
description: "Lass KI-Coding-Agenten wie Claude Code Phi Browser in eigenen Agenten-Spaces steuern. Installiere den phi-browser-Skill, sieh Agenten live bei der Arbeit zu und übernimm jederzeit die Steuerung."
---

# Der phi-browser-Skill

Der **phi-browser-Skill** verbindet Phi mit KI-Coding-Agenten, die außerhalb des Browsers leben: **Claude Code, Codex, Cursor, OpenClaw, Pi und Hermes**. Installiere ihn in deinem Agenten, und der Agent kann Phi direkt steuern: Seiten öffnen, Formulare ausfüllen, Screenshots aufnehmen, Daten extrahieren, Web-Apps testen, alles, was einen echten Browser braucht.

::: tip Nicht dasselbe wie Browser Skills
Dies ist ein einzelner Skill, Singular, und er gehört deinem Coding-Agenten. **[Browser Skills](/de/skills/)** sind die Gegenrichtung: Anweisungen, die du Phis eigenem Assistenten beibringst, im Browser. Den phi-browser-Skill gibt Phi _deinem Agenten_ mit, damit der Agent Phi als seinen Browser verwenden kann.
:::

Ungewöhnlich ist, _wo_ der Agent arbeitet. Er übernimmt nicht dein Fenster, und er startet keinen separaten, abgespeckten Browser. Er arbeitet in seinem eigenen **Agenten-Space**, einem verborgenen Browserfenster mit deinem echten Anmeldestatus, während du weitersurfst. Du kannst live zusehen, jederzeit die Steuerung übernehmen und sie zurückgeben, wenn du fertig bist.

## Agenten-Spaces

Phi ist um [Spaces](/de/spaces/) herum gebaut, getrennte Arbeitsbereiche, jeder an ein Profil mit eigenen Anmeldungen gebunden. Startet ein Coding-Agent eine Aufgabe, bekommt er von Phi einen eigenen **Agenten-Space**: ein echtes Browserfenster, verborgen gestartet, das in deinem Space-Umschalter als kleines Roboter-Symbol (🤖) mit Statusanzeige erscheint. Mehrere Agenten bekommen nummerierte Symbole (R1, R2 und so weiter), damit du sie auseinanderhalten kannst.

Klicke auf das Symbol, um dem Agenten in Echtzeit zuzusehen. Phi stellt die Aktionen des Agenten nativ dar: Der Cursor gleitet zu seinem Ziel, Klicks erzeugen Wellen, getippte Felder pulsieren, und du kannst genau verfolgen, was er tut. Während du zusiehst, ignoriert die Seite deine eigenen Klicks und Tastenanschläge, damit du den Agenten nicht versehentlich störst. Der einzige Weg hinein führt über die ausdrückliche Taste **Steuerung übernehmen**.

Zwei Menüpunkte runden das ab. **Darstellung → Agenten-Transkript** öffnet eine Konsole mit den Erläuterungen, Aktionen und der Unterhaltung des Agenten, und von dort kannst du dem Agenten auch Anweisungen zurückschreiben. **Darstellung → Automatische Agentenansicht** folgt automatisch dem Agenten, der gerade aktiv ist.

Agenten-Spaces räumen standardmäßig hinter sich auf. Ein flüchtiger Space schließt sich von selbst, kurz nachdem die Aufgabe zur Ruhe gekommen ist, damit sich erledigte Aufgaben nicht in deinem Umschalter stapeln. Einen bleibenden Arbeitsbereich legt ein Agent nur an, wenn du ausdrücklich darum bittest.

## Du kannst jederzeit ans Steuer

Einen Agenten-Space steuert immer nur eine Seite, und du gewinnst immer. Die eingeblendete Leiste oben im Agenten-Space nennt den steuernden Agenten und bietet die Bedienelemente für die Seite, die gerade am Steuer sitzt:

- Während der Agent steuert, stoppt ihn **Steuerung übernehmen** sofort, und jede weitere Aktion, die er versucht, wird abgelehnt, bis du zurückgibst.
- Während du steuerst, gibt **Steuerung zurückgeben** die Steuerung an den Agenten zurück, der dort weitermacht, wo er aufgehört hat, und **Fertig** beendet die Aufgabe.

Die Übergabe funktioniert auch in die andere Richtung. Trifft der Agent auf einen Schritt, der dir gehört, etwa eine Anmeldung, ein Captcha, einen Zwei-Faktor-Code oder eine folgenreiche Entscheidung, gibt er die Steuerung zurück, und Phi zeigt eine Meldung, **„Der Agent braucht dich“**, mit einer Taste, die dich direkt in den Agenten-Space bringt. Erledige den menschlichen Schritt, klicke auf **Steuerung zurückgeben**, und der Agent macht weiter.

## Deine Anmeldungen, bewusst wiederverwendet

Ein Agenten-Space ist an eines deiner bestehenden Profile gebunden, der Agent surft also mit den Websites, bei denen du bereits angemeldet bist. Genau das ist der Punkt: Er kann dort ansetzen, wo du stehst, statt mit einem leeren Browser anzufangen.

Wie weit das geht, entscheidest du. **Profile, die Agenten verwenden dürfen** im Tab „Entwickler“ beschränkt, in welchen Profilen Agenten arbeiten dürfen. Verbietest du alle, legt Phi ein eigenes Profil „Agent“ an, damit Agenten weiter arbeiten können, ohne deine Haupt-Anmeldungen anzufassen. Und wenn eine Aufgabe eine Anmeldung braucht, bittet dich der Agent nicht, ein Passwort einzufügen. Das läuft über den [Passwortmanager für Agenten](/de/agent-passwords/), wo jede Anfrage deine Genehmigung braucht.

## Was der Agent tut, ist deins

Diesen Teil liest du am besten zweimal, denn er geht leicht unter, wenn man etwas von allein arbeiten sieht.

Ein Agent, der Phi steuert, handelt **als du**, aus deinem Browser, mit deinen Sitzungen. Was er auf deine Anweisung hin tut, ist deins, auf unseren Diensten und auf denen aller anderen, und die Bedingungen der Websites, die er besucht, gelten für dich genau so, als hättest du alles von Hand angeklickt.

**Manche Websites wollen keine Agenten, und sie ziehen Konsequenzen.** Viele Websites behandeln automatisierte Zugriffe als Bedrohung ihres Geschäfts, denn ihre Inhalte sind ihr Geschäft, und sie erkennen sie aggressiv. Reddit ist das bekannte Beispiel: Konten, die als automatisiert eingestuft werden, werden eingeschränkt oder gesperrt, und diese Entscheidung liegt bei den Betreibern, nicht bei uns. Richte einen Agenten auf eine Website, die ihn nicht willkommen heißt, und du kannst dort dein Konto verlieren, deinen Verlauf und alles, was du darin aufbewahrt hast. Dieses Risiko trägst du, und wir können in deinem Namen weder Einspruch einlegen noch etwas rückgängig machen.

**Folgenreiche Aktionen genehmigst du.** Ein Agent kann einkaufen, Nachrichten senden, Formulare absenden und Einstellungen bei Diensten ändern, bei denen du angemeldet bist. Prüfe, was er vorhat, bevor du ihn lässt. Wo Phi dich um Bestätigung bittet, leistet diese Bestätigung echte Arbeit.

Unsere [Nutzungsbedingungen](https://phibrowser.com/terms/) legen das vollständig dar.

## Einrichten

Alles liegt hinter dem **Entwicklermodus**, und der ist standardmäßig aus. Drei Schritte:

1. **Schalte den Entwicklermodus ein**, unter **Einstellungen → Allgemein**. Damit erscheint der Tab „Entwickler“, in dem Agentenzugriff, Berechtigungen und der Passwortmanager wohnen.
2. **Installiere den Skill** über **Einstellungen → Entwickler → phi-browser-Skill installieren**. Die Taste **Skill hinzufügen zu…** listet jeden unterstützten Agenten auf, oder **Alle Agenten**, und verknüpft den in Phi mitgelieferten Skill in den Skills-Ordner des jeweiligen Agenten, sodass er mit jedem Phi-Update aktuell bleibt. Nötig ist Node 22 oder neuer, und einen frisch eingerichteten Agenten solltest du danach neu starten. In Pi genügt `/reload`.
3. **Erlaube Agenten die Verbindung** über **Einstellungen → Entwickler → Agentensteuerung → „Agenten dürfen Phi steuern (CDP)“**. Die Einstellung gilt sofort, ohne Neustart.

Wenn sich ein bestimmter Agent zum ersten Mal tatsächlich verbindet, identifiziert Phi den verbindenden Prozess einschließlich seiner Codesignatur und fragt dich: **Einmal erlauben**, **Immer erlauben** oder **Ablehnen**. Nichts erreicht den Browser, bevor du zustimmst. Genehmigte Agenten erscheinen im selben Tab unter **Zugelassene Agenten**, markiert mit „Immer“ oder „Diese Sitzung“. Entfernst du einen, fragt er beim nächsten Mal wieder.

## Wie der Zugriff eingegrenzt ist

Die Verbindung ist so gebaut, dass nichts sie erreicht, was du nicht genehmigt hast:

- Phi lauscht auf einem **privaten Socket, den nur Prozesse dieses Macs erreichen**, nicht auf einem Netzwerkport. Nichts in deinem Netzwerk und kein anderer Benutzer auf dem Mac kann sich damit verbinden.
- Jede Verbindung wird **pro Agent freigegeben**, überprüft anhand der Identität des verbindenden Prozesses.
- Wird **„Agenten dürfen Phi steuern (CDP)“** ausgeschaltet, stoppt das neue Verbindungen und kappt bestehende sofort.
- Standardmäßig können Agenten nur in **ihren eigenen Agenten-Spaces** arbeiten. Der Zugriff auf deine echten Browserdaten, also deine Spaces, Lesezeichen, angehefteten Tabs, URL-Regeln und dein Fensterlayout, ist eine eigene Berechtigung, **„Agenten dürfen deine Spaces bedienen“**, ebenfalls standardmäßig aus.
- Den **Entwicklermodus** auszuschalten ist der Notausschalter. Er deaktiviert Agentenzugriff und den [Passwortmanager für Agenten](/de/agent-passwords/) gemeinsam, und beim Wiedereinschalten wird nichts automatisch reaktiviert.

## Nächste Schritte

- [Die Phi-CLI](/de/phi-cli/), dieselbe Automatisierung als Befehl `phi` in deinem Terminal, für Skripte und schnelle einmalige Aufgaben.
- [Passwortmanager für Agenten](/de/agent-passwords/), wie Agenten sich mit deinem Tresor anmelden, ohne deine Passwörter zu sehen.
- [Browser Skills](/de/skills/), die andere Art Skill, die du Phis eigenem Assistenten beibringst.
- [Spaces & Profile](/de/spaces/), die Arbeitsbereiche und Anmelde-Identitäten, auf denen Agenten-Spaces aufbauen.
- [Automatisierung & Phi Link](/de/automation/), was Phis eigener Assistent für dich tun kann.
