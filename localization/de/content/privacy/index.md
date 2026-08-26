---
description: "Erfahre, wo Phi Browser deine Daten speichert, was es nicht erhebt, wie Erinnerungen und die Cloud-KI-Verarbeitung funktionieren, was anonyme Nutzungsstatistiken enthalten und wie du KI-Daten kontrollierst oder löschst."
---

# Datenschutz & deine Daten

Phi ist um eine Local-first-Architektur herum gebaut. Die Idee ist einfach: Phi kann dich gut kennen, ohne dass dein persönlicher Kontext zum Eigentum einer Cloud wird.

## Wo deine Daten liegen

Was Phi sich über dich merkt, deine [Erinnerungen](/de/memory/), wird lokal auf deinem Gerät gespeichert. Sie entstehen dort, während du surfst, und sollen bei dir bleiben, unter deiner Kontrolle.

## Was Phi nicht erhebt

Phi erhebt niemals:

- deine Erinnerungsdaten,
- deine KI-Interaktionen,
- deinen Browsing-Kontext.

Phi verkauft keine aus deinem Surfen abgeleiteten Daten und verwendet weder deine Erinnerungen noch deinen Browsing-Kontext oder deine KI-Interaktionen, um Modelle zu trainieren.

Eine Feinheit, die man kennen sollte: Zur Verarbeitung von Aufgaben können große Sprachmodelle von Anbietern wie Anthropic, OpenAI, Google oder SpaceXAI zum Einsatz kommen. Wenn du **Phi Cloud** verwendest, wird der Inhalt, den eine Anfrage zu ihrer Beantwortung braucht, an den Anbieter des von dir gewählten Modells gesendet, denn nur so kann ein Modell sie beantworten. Er passiert uns, ohne gespeichert zu werden, kommt unter unserem Konto an statt unter deinem und wird nie für Training verwendet. Mit **Private KI** verlässt er deinen Mac gar nicht erst. Deine persönlichen Erinnerungen bleiben in beiden Fällen lokal und werden nie als Eigentum einer Cloud behandelt.

## Was Phi sendet {#what-phi-does-send}

Local-first heißt nicht stumm, und du sollst das hier lesen können, statt es in einem Netzwerkprotokoll zu entdecken.

- **Eine kleine anonyme Zählung, immer aktiv.** Phi zählt, wie viele Installationen es als Standardbrowser festgelegt haben, Spaces verwenden, Profile verwenden, und dass ein Absturz passiert ist. Nur Zählwerte, ohne etwas daran, das auf dich zurückweist.
- **Detaillierte Statistiken und Absturzberichte, nur wenn du sie einschaltest.** Die Einstellung heißt **Hilf mit, Phis Funktionen und Leistung zu verbessern** in den Einstellungen. Schaltest du sie ein, sendet Phi detaillierte Nutzungsstatistiken und Absturzberichte, die deine Kontokennung tragen. Schaltest du sie aus, wird beides nicht gesendet; nur die anonymen Zählungen oben laufen weiter.

Absturzberichte gehen an Sentry und werden 90 Tage aufbewahrt. Ein Absturzbericht kann einen Speicherauszug des abgestürzten Prozesses enthalten, und darin können beiläufig Fragmente von Seiteninhalten oder von dir getipptem Text stecken. Das ist einer der Gründe, warum der Schalter aus ist, bis du ihn einschaltest.

Es gibt keine Einstellung, die die anonyme Grundzählung abschaltet. Wenn du einen Browser willst, der gar nichts sendet, baue den Open-Source-Client selbst aus dem Quellcode.

Die [Datenschutzerklärung](https://phibrowser.com/privacy/) ist die vollständige und maßgebliche Fassung von alledem.

Du kannst außerdem eingrenzen, was deinen Mac überhaupt verlässt. Mit **Private KI**, betrieben über [Phi Sentinel](/de/sentinel/), laufen manche dieser Aufgaben vollständig auf deinem eigenen Rechner und brauchen deshalb von vornherein kein Cloud-Modell.

## Nutzungsstatistiken {#usage-statistics}

Phi hat einen Telemetrie-Schalter: **Hilf mit, Phis Funktionen und Leistung zu verbessern**. Er ist standardmäßig eingeschaltet, und solange er eingeschaltet bleibt, sendet Phi anonyme Nutzungsstatistiken an Phinomenon.

Die Statistiken betreffen den Browser selbst: welche Funktionen genutzt werden und wie die App läuft. Sie enthalten nie die von dir besuchten Seiten, deren Inhalte, deine Erinnerungen oder deine KI-Konversationen.

Jeder Bericht trägt eine zufällige Kennung, die für deine Installation erzeugt wurde. Sie hat nichts mit deinem Phi-Konto zu tun und gehört zum Browser als Ganzem, nicht zu einem Space oder Profil. Beim Ausschalten des Schalters wird die Kennung gelöscht; beim späteren Wiedereinschalten entsteht eine neue, sodass sich deine alten und etwaige neue Berichte nicht verknüpfen lassen.

Um die Einstellung zu ändern, öffne `phi://settings` und sieh im Abschnitt **Phi und ich** nach, direkt unter deiner Kontozeile. Legst du den Schalter um, erscheint daneben die Taste **Neu starten**, und die neue Wahl greift, sobald Phi neu gestartet ist.

## Die Kontrolle behalten

Erinnerungen sind keine Blackbox. Du kannst direkt in Phi **ansehen, verwalten und löschen**, was Phi sich merkt.

### Konto und Daten löschen

Das erledigst du selbst, in der App: **Einstellungen → Weitere Browsereinstellungen → dein Name unter „Phi und ich“ → Konto und Daten löschen**. Dabei werden das Konto und die damit gespeicherten Daten entfernt, auf deinem Mac und auf unseren Servern, und das lässt sich nicht rückgängig machen. Du musst niemandem eine E-Mail schreiben, um vergessen zu werden.

Hast du Phi bereits deinstalliert, installiere es erneut und melde dich mit demselben Konto an, um zu dieser Taste zu gelangen. Deinstallieren entfernt, was auf deinem Mac lag, schließt aber nicht das Konto. Wenn du dich nie angemeldet hast, gibt es kein Konto und auf unserer Seite nichts zu löschen.

### KI ausschalten {#turning-ai-off}

Wenn du einen schlichten Browser willst, kannst du alle KI-Funktionen unter **Einstellungen → Phi AI** deaktivieren. Wird die KI ausgeschaltet, werden deine KI-Konversationen geschlossen und alle externen Datenverbindungen (External Data Connectors) getrennt.

Deine Erinnerungen werden durch diesen Schalter nicht gelöscht und bleiben auf deinem Gerät. Willst du auch löschen, was Phi sich merkt, verwende die Löschoption auf der Seite „Erinnerungen“; diese Löschung ist endgültig und lässt sich nicht rückgängig machen.

## Privat surfen

Für Sitzungen, die auch auf deinem Mac nichts hinterlassen sollen, öffne einen [Inkognito-Space](/de/incognito/) über das Menü **Ablage**. Verlauf, Cookies und Websitedaten liegen nur im Arbeitsspeicher, KI-Funktionen bleiben komplett außen vor, und mit dem Schließen wird die Sitzung zerstört.

## Open Source

Phis macOS-Client ist Open Source unter Apache-2.0, sein Verhalten lässt sich also überprüfen, statt rein auf Vertrauen zu beruhen. Um genau zu sein, was das abdeckt: Offen ist der Client, den wir schreiben, und er bettet eine Chromium-Engine ein, die als vorgefertigtes Framework ausgeliefert wird. Chromium ist selbst ein Open-Source-Projekt, aber unseren Client zu lesen ist nicht dasselbe, wie jede Zeile gelesen zu haben, die auf deinem Mac läuft.
