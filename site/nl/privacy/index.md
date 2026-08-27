---
description: "Lees waar Phi Browser je gegevens bewaart, wat het niet verzamelt, hoe Geheugen en AI-verwerking in de cloud werken, wat anonieme gebruiksstatistieken bevatten, en hoe je AI-gegevens beheert of verwijdert."
---

# Privacy en je gegevens

Phi is gebouwd rond een local-first-architectuur. Het idee is eenvoudig: Phi kan je goed kennen zonder dat je persoonlijke context het bezit van een cloud wordt.

## Waar je gegevens staan

Wat Phi over je onthoudt, je [Geheugen](/nl/memory/), wordt lokaal op je apparaat bewaard. Het wordt daar opgebouwd terwijl je browst en is bedoeld om bij jou te blijven, onder jouw controle.

## Wat Phi niet verzamelt

Phi verzamelt nooit:

- je geheugengegevens,
- je AI-interacties,
- je browsecontext.

Phi verkoopt geen gegevens die uit je browsen zijn afgeleid, en gebruikt je geheugen, browsecontext of AI-interacties niet om modellen te trainen.

Een nuance die het weten waard is: voor het verwerken van taken kunnen grote taalmodellen worden gebruikt van aanbieders zoals Anthropic, OpenAI, Google of SpaceXAI. Wanneer je **Phi Cloud** gebruikt, wordt de inhoud die nodig is om een verzoek te beantwoorden naar de aanbieder van het door jou gekozen model gestuurd, omdat een model het alleen zo kan beantwoorden. Die inhoud passeert ons zonder te worden bewaard, komt daar binnen onder ons account in plaats van het jouwe, en wordt nooit voor training gebruikt. Met **Privé-AI** verlaat de inhoud je Mac helemaal niet. Je persoonlijke geheugen blijft in beide gevallen lokaal en wordt nooit behandeld als bezit van de cloud.

## Wat Phi wel verstuurt {#what-phi-does-send}

Local-first betekent niet geruisloos, en dit hoor je hier te lezen in plaats van het in een netwerklog te ontdekken.

- **Een kleine anonieme telling, altijd aan.** Phi telt hoeveel installaties het als standaardbrowser instellen, Spaces gebruiken, Profielen gebruiken, en dat er een crash is opgetreden. Alleen aantallen, zonder iets eraan dat naar jou terugwijst.
- **Gedetailleerde statistieken en crashrapporten, alleen als je ze inschakelt.** De instelling is **Help de functies en prestaties van Phi te verbeteren** in Instellingen. Zet je die aan, dan verstuurt Phi gedetailleerde gebruiksstatistieken en crashrapporten, voorzien van je account-ID. Zet je die uit, dan wordt geen van beide verstuurd; alleen de anonieme tellingen hierboven gaan door.

Crashrapporten gaan naar Sentry en worden 90 dagen bewaard. Een crashrapport kan een momentopname van het geheugen van het vastgelopen proces bevatten, waarin per ongeluk fragmenten van pagina-inhoud of door jou getypte tekst kunnen zitten. Dat is een van de redenen dat de schakelaar uitstaat totdat jij hem aanzet.

Er is geen instelling die de anonieme basistelling uitschakelt. Wil je een browser die helemaal niets verstuurt, bouw dan de opensourceclient zelf vanaf de broncode.

Het [Privacybeleid](https://phibrowser.com/privacy/) is de volledige en gezaghebbende versie van dit alles.

Je kunt ook verder beperken wat je Mac überhaupt verlaat. Met **Privé-AI**, dat via [Phi Sentinel](/nl/sentinel/) draait, worden sommige van die taken volledig op je eigen machine uitgevoerd, zodat er in de eerste plaats geen cloudmodel nodig is.

## Gebruiksstatistieken {#usage-statistics}

Phi heeft wel één telemetrieschakelaar: **Help de functies en prestaties van Phi te verbeteren**. Die staat standaard aan, en zolang hij aanstaat verstuurt Phi anonieme gebruiksstatistieken naar Phinomenon.

De statistieken gaan over de browser zelf: welke functies worden gebruikt en hoe de app presteert. Ze bevatten nooit de pagina's die je bezoekt, hun inhoud, je Geheugen of je AI-gesprekken.

Elk rapport draagt een willekeurig ID dat voor jouw installatie is aangemaakt. Het heeft niets te maken met je Phi-account en hoort bij de browser als geheel, niet bij een Space of Profiel. Zet je de schakelaar uit, dan wordt het ID verwijderd; zet je hem later weer aan, dan wordt een nieuw ID aangemaakt, zodat je oude rapporten en eventuele nieuwe niet aan elkaar te koppelen zijn.

Om de instelling te wijzigen open je `phi://settings` en kijk je in het gedeelte **Jij en Phi**, net onder je accountregel. Wanneer je de schakelaar omzet, verschijnt ernaast een knop **Herstart**, en de nieuwe keuze gaat in zodra Phi opnieuw is gestart.

## Zelf de controle houden

Geheugen is geen zwarte doos. Je kunt **bekijken, beheren en verwijderen** wat Phi onthoudt, rechtstreeks in Phi.

### Je account en gegevens verwijderen

Dat doe je zelf, in de app: **Instellingen → Aanvullende browserinstellingen → je naam, onder Jij en Phi → Account en gegevens verwijderen**. Hiermee verwijder je het account en de gegevens die erbij horen, op je Mac en op onze servers, en het kan niet ongedaan worden gemaakt. Je hoeft niemand te e-mailen om vergeten te worden.

Heb je Phi al verwijderd, installeer het dan opnieuw en log met hetzelfde account in om die knop te bereiken. De app verwijderen wist wat er op je Mac stond, maar sluit het account niet. Heb je nooit ingelogd, dan is er geen account en staat er aan onze kant niets om te verwijderen.

### AI uitschakelen {#turning-ai-off}

Wil je een gewone browser, dan kun je alle AI-functies uitschakelen in **Instellingen → Phi AI**. AI uitschakelen sluit je AI-gesprekken en koppelt alle Externe gegevensconnectors los.

Je Geheugen wordt door deze schakelaar niet verwijderd en blijft op je apparaat. Wil je ook wissen wat Phi onthoudt, gebruik dan de wisoptie op de Geheugen-pagina; die verwijdering is definitief en kan niet ongedaan worden gemaakt.

## Privé browsen

Voor sessies die ook op je Mac niets mogen achterlaten open je een [Incognito-Space](/nl/incognito/) via het menu **Archief**. De geschiedenis, cookies en sitegegevens ervan bestaan alleen in het werkgeheugen, AI-functies doen helemaal niet mee, en bij het sluiten wordt de sessie vernietigd.

## Open source

De macOS-client van Phi is open source onder Apache-2.0, zodat het gedrag ervan te inspecteren is in plaats van puur op vertrouwen te worden aangenomen. Om precies te zijn over wat dat dekt: het open deel is de client die wij schrijven, en die bevat een Chromium-engine die als voorgebouwd framework wordt meegeleverd. Chromium is zelf een opensourceproject, maar onze client lezen is niet hetzelfde als elke regel hebben gelezen die op je Mac draait.
