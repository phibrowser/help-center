---
description: "Zo importeer je bladwijzers en geschiedenis in Phi Browser vanuit een andere browser of een bestand (bladwijzers-HTML, Safari-geschiedenis-JSON, Safari-exportarchief-ZIP), wat elk bestandstype importeert, en hoe je je bladwijzers naar een HTML-bestand exporteert."
---

# Importeren en exporteren

Phi kan bladwijzers en browsegeschiedenis overnemen uit andere browsers, rechtstreeks uit een geïnstalleerde browser of uit een bestand dat je al hebt. Het kan de bladwijzers van een Space ook weer exporteren naar een standaard HTML-bestand. Deze pagina behandelt beide richtingen en benoemt precies wat elk soort bestand binnenbrengt.

Ben je nieuw bij Phi en wil je eerst het migratieoverzicht, begin dan bij [Overstappen naar Phi](/nl/switching-to-phi/) en kom hier terug voor de details.

## Twee manieren om te importeren

Er zijn twee ingangen, en beide openen hetzelfde importscherm **Browsergegevens**:

- **Bij de eerste start.** Tijdens de introductie biedt Phi aan om te importeren terwijl je Phi instelt.
- **Op elk later moment.** Open het **Phi**-menu (het vetgedrukte appmenu naast het Apple-menu) en kies **Importeren uit een andere browser…**.

Het importscherm biedt vier bronnen: **Uit Chrome**, **Uit Safari**, **Uit Arc** en **Uit een bestand**. Chrome, Safari en Arc lezen de gegevens van de geïnstalleerde browser rechtstreeks en laten je kiezen welke soorten gegevens je overneemt. De secties hieronder gaan dieper in op **Uit een bestand**.

Wat je importeert, komt terecht in de [Space](/nl/spaces/) van waaruit je de import start. Bladwijzers komen in de bladwijzerstructuur van die Space, en geschiedenis komt in je browsegeschiedenis. Importeren is niet beschikbaar in [Incognito](/nl/incognito/); schakel eerst over naar een gewone Space of een gewoon venster.

::: tip Stop Safari voordat je eruit importeert
Gebruik je **Uit Safari**, stop Safari dan eerst. Safari houdt recente activiteit deels in het geheugen en schrijft die pas volledig naar schijf bij het afsluiten, dus importeren terwijl Safari nog draait kan je nieuwste bladwijzers en geschiedenis missen. Dit geldt niet voor **Uit een bestand**, dat een momentopname leest die je al hebt geëxporteerd.
:::

## Importeren uit een bestand

Kies **Uit een bestand**, klik op **Kies bestand…** en wijs het bestand aan. Phi accepteert drie soorten bestanden en bepaalt op basis van het bestand zelf wat er gebeurt. Voor deze optie zijn er geen aankruisvakken per gegevenstype; Phi importeert wat het bestand bevat. Tijdens het importeren zie je **Gegevens uit bestand worden geïmporteerd…**.

### Wat elk bestandstype importeert

| Bestand                      | Extensie        | Wat er binnenkomt                     |
| ---------------------------- | --------------- | ------------------------------------- |
| **Bladwijzers-HTML**         | `.html`, `.htm` | Alleen bladwijzers                    |
| **Safari-geschiedenis-JSON** | `.json`         | Alleen browsegeschiedenis             |
| **Safari-exportarchief**     | `.zip`          | Bladwijzers **en** geschiedenis samen |

**Bladwijzers-HTML** is de standaard "Netscape-bladwijzerindeling" die elke grote browser kan exporteren, waaronder Chrome, Safari, Firefox, Edge en Phi zelf. Bij het importeren komen de bladwijzers in de huidige Space terecht in een map **Geïmporteerd**, zodat ze bij elkaar blijven en later makkelijk terug te vinden of te verwijderen zijn.

**Safari-geschiedenis-JSON** en **Safari-exportarchief** komen allebei uit Safari's functie **Archief → Exporteer → Exporteer browsergegevens…**. Safari maakt een `.zip`-archief; heb je dat al uitgepakt, dan kun je ook rechtstreeks het bestand `History.json` daarin aanwijzen.

- Een **Safari-exportarchief** (`.zip`) is de eenvoudigste keuze: wijs het aan en Phi importeert je bladwijzers en je geschiedenis in één stap.
- Een losse **Safari-geschiedenis-JSON** importeert alleen de geschiedenis.

### Wat wel en niet wordt geïmporteerd

- **Alleen bladwijzers en geschiedenis.** Wachtwoorden, betaalkaarten en andere onderdelen die Safari ook kan exporteren, worden via deze route nooit geïmporteerd. Zulke gevoelige gegevens binnenhalen zonder te vragen zou verkeerd zijn, dus Phi slaat die bestanden over, ook wanneer een Safari-archief ze bevat.
- **Eén slecht bestand blokkeert nooit de rest.** Binnen een `.zip` leest Phi elk bladwijzer- en geschiedenisbestand dat het kan lezen en slaat het over wat niet lukt, zoals een niet-gerelateerd bestand of een beschadigd item.
- **Meerdelige geschiedenis komt volledig binnen.** Safari splitst een grote geschiedenisexport soms in meerdere bestanden (`History.json`, `History-0001.json`, enzovoort), en Phi importeert ze allemaal.
- **Opnieuw importeren stapelt geen duplicaten op.** Geïmporteerde geschiedenis wordt samengevoegd met je bestaande geschiedenis, zoals bij elke browserimport, dus hetzelfde bestand twee keer importeren vermenigvuldigt je bezoeken niet.
- **Grote of beschadigde bestanden worden veilig afgehandeld.** Phi begrenst hoeveel het uit één bestand of archief leest, zodat een ongewoon groot of misvormd bestand de browser niet kan laten hangen. Phi slaat het dan over.
- **Een import zonder bruikbare inhoud rondt gewoon af.** Bevat een bestand niets wat Phi kan gebruiken, dan wordt de import zonder fout afgerond in plaats van vast te lopen.

## Je bladwijzers exporteren

Phi kan de bladwijzers van de **huidige Space** exporteren naar een HTML-bestand. Open het menu **Bladwijzers**, kies **Exporteer bladwijzers…** en kies waar je het bestand bewaart. Phi stelt een bestandsnaam voor zoals `Phi-Bookmarks-<Space>-<date>.html`.

- Het bestand gebruikt dezelfde standaard **Netscape-bladwijzerindeling** als hierboven, dus het importeert probleemloos in Chrome, Safari, Firefox, Edge, of terug in Phi via **Uit een bestand**.
- De export beslaat de Space waarin je je nu bevindt. Omdat bladwijzers [per Space](/nl/bookmarks/) zijn, wissel je van Space en exporteer je opnieuw om de set van een andere Space te bewaren.
- **Exporteer bladwijzers…** is gedimd wanneer de huidige Space geen bladwijzers heeft, en is niet beschikbaar in Incognito-Spaces (die nooit een bladwijzerstructuur hebben).
- Een [split](/nl/layouts/)-bladwijzer, die twee pagina's in één item bundelt, wordt weggeschreven als twee gewone items, zodat de standaardindeling hem kan weergeven.

### Heen en terug

Exporteer de bladwijzers van een Space naar HTML en haal ze daarna met **Uit een bestand** weer binnen, in een andere Space, een ander Profiel of Phi op een andere Mac. Dat is meestal de snelste manier om een set bladwijzers tussen Profielen of tussen twee Macs te kopiëren.

## Alles exporteren (niet alleen bladwijzers)

**Exporteer bladwijzers…** exporteert alleen bladwijzers. Wil je al je Phi-gegevens (Spaces, Profielen, geschiedenis en meer) als één bestand veiligstellen, gebruik dan **Beheer gebruikersgegevens → Exporteer gebruikersgegevens…** in het **Help**-menu. Dat is het gereedschap voor een verhuizing naar een nieuwe Mac of voor een volledige eigen kopie; zie [Time Machine-back-ups](/nl/time-machine/#exporting-your-own-data) voor hoe dit zich verhoudt tot de automatische terugzetmomentopnamen van Phi.

## Verder lezen

- [Bladwijzers en vastgezette tabbladen](/nl/bookmarks/): hoe bladwijzers zich gedragen zodra ze in Phi staan.
- [Spaces en Profielen](/nl/spaces/): waarom imports in een Space terechtkomen, en hoe Profielen je gegevens scheiden.
- [Overstappen naar Phi](/nl/switching-to-phi/): de volledige migratiekaart vanuit Chrome, Safari, Arc en Dia.
- [Time Machine-back-ups](/nl/time-machine/): automatische terugzetmomentopnamen en volledige export van gebruikersgegevens.
