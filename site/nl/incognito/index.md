---
description: "Lees hoe Incognito-Spaces privé browsen naar de zijbalk van Phi Browser brengen, hoe URL-regels en extensies met privésessies werken, en wat er gebeurt wanneer de Space sluit."
---

# Incognito-Spaces

Een **Incognito-Space** brengt privé browsen naar de zijbalk. Hij verschijnt in de Spaces-strook en werkt zolang hij bestaat als elke andere Space, met een eigen venster en eigen tabbladen, maar er wordt niets van naar schijf geschreven. De sessie bestaat alleen in het werkgeheugen en wordt vernietigd zodra je de Space sluit.

## Een Incognito-Space openen

Kies **Archief → Nieuwe Incognito-Space**. De Space komt in de strook in de zijbalk te staan met een ninja-symbool (🥷) en de naam **Incognito**. Open je er meerdere tegelijk, dan worden ze in plaats daarvan genummerd, **Incognito 1**, **Incognito 2**, enzovoort, en houdt elke Space zijn nummer totdat hij sluit. Er is geen ingebouwde toetscombinatie om er een te maken.

Twee dingen over de onderliggende sessie zijn goed om te weten:

- **Alle Incognito-Spaces delen één privésessie.** Het zijn aparte items in de zijbalk, maar één profiel in het werkgeheugen draagt ze allemaal, altijd gebouwd op je standaardprofiel, waar je de Space ook opende. Log bij een site in in de ene Incognito-Space en je bent er in de andere ook ingelogd. Wil je twee sessies echt gescheiden houden, gebruik dan Spaces op verschillende [Profielen](/nl/spaces/).
- **Incognitovensters zijn een aparte sessie.** Het klassieke **Archief → Nieuw incognitovenster** bestaat nog steeds, en die sessie mengt zich nooit met de gedeelde sessie van de Incognito-Spaces.

## Hoe het eruitziet

Een Incognito-Space gebruikt altijd het speciale donkere Incognito-thema van Phi, dus thema's per Space zijn hier niet van toepassing. Je kunt het symbool wijzigen zoals bij elke andere Space, al geldt die keuze slechts zolang de Space zelf bestaat. En omdat er niets blijvends te configureren valt, verschijnen Incognito-Spaces niet in het Spaces-gedeelte van Instellingen.

## Wat buiten een privésessie blijft

- **Geschiedenis, cookies en sitegegevens** bestaan alleen in het werkgeheugen en verdwijnen met de sessie.
- **Bladwijzers zijn niet beschikbaar.** Een Incognito-Space toont geen bladwijzers en laat je er geen maken.
- **Vastgezette tabbladen worden niet getoond.** Incognito-Spaces tonen nooit vastgezette tabbladen en staan ze ook niet toe, ongeacht het bereik voor vastgezette tabbladen dat je voor gewoon browsen hebt gekozen.
- **AI-functies doen niet mee.** De assistentchat is niet beschikbaar en de Geheugen-knop in de zijbalk is verborgen.
- **Extensies doen alleen mee op uitnodiging.** Alleen extensies die je toestemming hebt gegeven om in incognito te draaien, zijn actief in een privésessie. Zie [hieronder](#extensions-in-an-incognito-space).
- **Browsergegevens importeren is geblokkeerd.** Phi weigert met _"Browsergegevens kunnen niet in incognito worden geïmporteerd. Schakel over naar een gewone Space of een gewoon venster en probeer het opnieuw."_
- **Time Machine blijft ervan af.** [Time Machine-back-ups](/nl/time-machine/) sluiten Incognito-Spaces volledig uit, dus het terugzetten van een momentopname brengt er nooit een terug.

Eén ding blijft met opzet bestaan: bestanden die je downloadt, worden zoals gewoonlijk op je Mac bewaard. Verwijder ze zelf als je ze niet wilt houden.

## Sites naar incognito sturen met URL-regels

[URL-regels](/nl/spaces/#url-rules-send-sites-to-the-right-space-automatically) kunnen overeenkomende sites automatisch naar privé browsen leiden. In de regelbewerker biedt de Space-kiezer één generiek doel **Incognito** naast je gewone Spaces, nooit een specifieke Incognito-Space, omdat die alleen bestaan zolang ze open zijn. Wanneer een regel afgaat, leidt Phi de pagina naar de Incognito-Space waarin je al zit of naar de eerste die openstaat, en opent zo nodig een nieuwe Incognito-Space wanneer er geen open is.

Routeren naar incognito werkt maar één kant op. Een regel kan een navigatie een privésessie in sturen, maar er wordt nooit iets teruggeleid: terwijl je in een Incognito-Space of een incognitovenster browst, gelden URL-regels niet, dus een link daar kan niet naar een gewone Space worden getrokken.

Je kunt een enkele link er ook handmatig heen sturen: klik er in een gewoon venster met de rechtermuisknop op en kies een Incognito-Space in het submenu **Link openen in Space**, dat open Incognito-Spaces naast je gewone Spaces toont.

## Extensies in een Incognito-Space {#extensions-in-an-incognito-space}

Omdat de privésessie van een Incognito-Space is gebouwd op je **standaardprofiel**, het profiel waarmee Phi start, kunnen alleen de extensies van het standaardprofiel erin draaien, en elk daarvan heeft je uitdrukkelijke toestemming nodig, dezelfde regel als in elke browser op Chromium-basis. Zo laat je er een in incognito draaien:

1. Kies in een venster op het standaardprofiel **Beheer extensies** in het Extensies-menu, of typ `phi://extensions` in de adresbalk.
2. Open de **Details** van de extensie.
3. Zet **Toestaan in incognitomodus** aan.

De schakelaar geldt per extensie en dekt zowel Incognito-Spaces als incognitovensters. Een extensie die op een ander Profiel is geïnstalleerd, verschijnt nooit in een Incognito-Space; wil je die daar gebruiken, installeer die dan eerst op het standaardprofiel. Bedenk dat een toegelaten extensie kan meekijken met de sites die je privé bezoekt, dus geef deze toestemming alleen aan extensies die je vertrouwt. Nieuwe extensies kunnen niet vanuit een privésessie worden geïnstalleerd.

## Een Incognito-Space sluiten

Kies **Sluit Incognito-Space** in het menu **Spaces**, of sluit het laatste tabblad van de Space. In beide gevallen vraagt Phi eerst **"Hiermee wordt ook deze Incognito-Space gesloten. Weet je het zeker?"**, en met het sluiten van de Space verdwijnt hij ook uit de strook. Vink **Niet opnieuw vragen** aan om de bevestiging voortaan over te slaan.

De gedeelde privésessie blijft bestaan zolang er nog een Incognito-Space open is. Wanneer het laatste venster van de laatste Incognito-Space sluit, of Phi stopt, wordt de sessie in het werkgeheugen vernietigd, samen met alles erin. Er is daarna geen opruimstap, want niets ervan heeft ooit op schijf gestaan.

## Hoe dit samenhangt met de rest van Phi

Incognito-Spaces bouwen voort op het werkruimtemodel uit [Spaces en Profielen](/nl/spaces/). Zie ze als Spaces waarvan de isolatielaag een wegwerpexemplaar is. Voor wat Phi wel en niet bewaart over je gewone browsen, zie [Privacy en je gegevens](/nl/privacy/), en voor waarom terugzetten nooit een privésessie terughaalt, zie [Time Machine-back-ups](/nl/time-machine/).
