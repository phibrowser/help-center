---
description: "Erfahre, wie Phi Browser Spaces als Arbeitsbereiche und Profile zur Isolation von Cookies, Verlauf, Anmeldungen und Erweiterungen nutzt, samt URL-Regeln, Lesezeichen und angehefteten Tabs."
---

# Spaces & Profile

Mit Spaces und Profilen hältst du getrennte Welten in einem Browser, ob Arbeit und Privates, ein Nebenprojekt, ein Kunde oder ein Recherchethema, ohne Fenster zu jonglieren oder dich ständig an- und abzumelden. Es sind zwei Ebenen mit unterschiedlichen Aufgaben, und Phi hält sie einfach, indem die eine auf der anderen aufsetzt.

## Die zwei Ebenen

- Ein **Space** ist ein Arbeitsbereich in der Seitenleiste. Er hat einen eigenen Namen, ein eigenes Symbol, eine eigene Farbe und eigene Lesezeichen. Beim Wechsel des Space richtet sich die Seitenleiste neu auf die Aufgabe aus, an der du gerade arbeitest.
- Ein **Profil** ist die Isolationsebene darunter. Jedes Profil hat eigene Cookies, einen eigenen Verlauf, eigene Anmeldungen und eigene Erweiterungen. Zwei Profile können deshalb gleichzeitig mit unterschiedlichen Konten auf derselben Website angemeldet sein.

Die Beziehung ist eine Einbahnstraße: **Jeder Space gehört zu genau einem Profil, und ein Profil kann mehrere Spaces tragen.** Spaces mit demselben Profil teilen sich dieselben Anmeldungen. Die Sichtbarkeit angehefteter Tabs ist konfigurierbar und kann dem Geltungsbereich Space, Profil oder App folgen; an der Isolation der Profile ändert das nichts.

Eine einfache Merkregel: **Spaces ordnen, wie alles aussieht und sich anfühlt; Profile entscheiden, was darunter getrennt bleibt.**

## Was in einem Space steckt

- **Ein Name, ein Symbol und eine Farbe.** Wähle aus Phis integriertem Symbolsatz oder nimm ein Emoji, damit jeder Space in der Seitenleiste auf einen Blick erkennbar ist.
- **Eigene Lesezeichen.** Jeder Space hat einen unabhängigen Satz Lesezeichen, damit die gespeicherten Seiten eines Arbeits-Space keinen privaten Space vollstellen.
- **Ein eigenes Design (optional).** Ein Space kann ein eigenes Farbdesign verwenden oder deinem globalen Design folgen. Beim Wechsel in den Space wird sein Design angewendet, sodass das Fenster zu dem Kontext passt, in dem du gerade bist.
- **Angeheftete Tabs** folgen dem Geltungsbereich, der unter **Einstellungen → Spaces** ausgewählt ist. Jeder Space kann eigene haben, Spaces mit demselben Profil können sie teilen, oder alle regulären Profile und Spaces teilen sich einen Satz. Details unter [Lesezeichen & angeheftete Tabs](/de/bookmarks/#choose-a-pinned-tab-scope).

## Spaces erstellen, wechseln und verwalten

- **Erstelle** einen Space über die Spaces-Leiste in der Seitenleiste. Du gibst ihm einen Namen und wählst, zu welchem Profil er gehört, oder legst direkt dort ein **Neues Profil** an, wenn dieser Space vollständig getrennt sein soll.
- **Wechsle** zwischen Spaces mit einem einzigen Klick in der Seitenleiste. Tabs, Lesezeichen und Design der Seitenleiste ändern sich passend dazu, und Phi öffnet das Fenster des Space erneut, falls es nicht bereits offen ist.
- **Umbenennen**, **Symbol ändern** und **Design ändern** findest du im Menü des Space. Wähle **Global folgen**, damit der Space wieder dein globales Design verwendet, statt eines eigenen.
- **Lösche** einen Space über dasselbe Menü. Beim Löschen eines Space werden auch die zugehörigen Lesezeichen und URL-Regeln entfernt; das lässt sich nicht rückgängig machen. Steht der Geltungsbereich angehefteter Tabs auf **Space**, werden auch die angehefteten Tabs dieses Space entfernt. Angeheftete Tabs mit Geltungsbereich Profil oder App sind nicht betroffen.

## URL-Regeln: passende Websites automatisch lenken {#url-rules-route-matching-sites-automatically}

**URL-Regeln** erkennen eine Website und öffnen sie in einem regulären Space, in Inkognito oder in Kiosk, egal wo du den Link anklickst oder eintippst.

Öffne **URL-Regeln…** über das Menü **Spaces** in der Menüleiste, oder öffne **Einstellungen → Navigation** und klicke auf **URL-Regeln verwalten…**. Eine Regel greift nach einem dieser Kriterien:

- **Domain-Suffix**, `figma.com` samt aller Subdomains.
- **Domain**, ein exakter Host wie `www.example.com`.
- **Domain enthält**, jeder Host, der ein Wort enthält, etwa `git`.
- **URL**, ein Host plus Pfadpräfix, etwa `example.com/team`.

Eine Regel kann einen regulären Space, **Inkognito** oder **Kiosk** als Ziel haben. **Inkognito** lenkt passende Websites in einen [Inkognito-Space](/de/incognito/) und erstellt bei Bedarf einen neuen. **Kiosk** öffnet jeden Treffer in einem leichtgewichtigen Fenster außerhalb deiner Spaces. Wie diese Fenster funktionieren, steht unter [Kiosk](/de/kiosk/).

Stelle eine Regel auf **Jedes Mal fragen**, statt still umzuleiten. Öffnet sich ein passender Link, zeigt Phi die Auswahl **In welchem Space öffnen?**, damit du entscheiden kannst. Dein aktueller Space ist markiert, und du kannst die Seite auch dort behalten, wo du bist. Könnten mehrere Regeln passen, gewinnt die spezifischste (ein längerer Pfad schlägt einen kürzeren; ein exakter Host schlägt einen Platzhalter).

## Inkognito-Spaces: ein Space ohne Spuren

Für Browsen, das nichts hinterlassen soll, öffnet **Ablage → Neuer Inkognito-Space** einen privaten Space direkt in der Spaces-Leiste. Er fühlt sich an wie jeder andere Arbeitsbereich, wird aber statt von einem Profil von einer Sitzung im Arbeitsspeicher getragen: keine Lesezeichen, keine angehefteten Tabs, keine KI, und nichts wird auf die Festplatte geschrieben. Beim Schließen wird die Sitzung zerstört. Das ganze Bild findest du unter [Inkognito-Spaces](/de/incognito/).

## Wie das mit dem Rest von Phi zusammenhängt

Spaces bauen auf dem Seitenleisten-Arbeitsbereich auf, den [Layouts & Navigation](/de/layouts/) beschreibt, und die Farben einzelner Spaces nutzen dieselbe Palette wie [Designs & Erscheinungsbild](/de/themes/). Wenn du von Arc oder Dia wechselst, findest du in [Umstieg auf Phi](/de/switching-to-phi/) den Migrationsvergleich. Weil Profile Cookies und Verlauf isolieren, ist auch das, was der Assistent sehen kann, auf das Profil beschränkt, in dem du gerade browst. Wie mit deinen Daten umgegangen wird, steht in [Datenschutz & deine Daten](/de/privacy/).
