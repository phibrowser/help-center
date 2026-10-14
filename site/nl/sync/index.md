---
description: "Houd je Spaces, bladwijzers, vastgezette tabbladen, URL-regels, ondersteunde instellingen en browsegeschiedenis gelijk op elke Mac waarop je inlogt, versleuteld vóór het uploaden met sleutels die alleen jouw Macs hebben."
---

# Synchronisatie

Synchronisatie houdt de eigen gegevens van Phi gelijk op elke Mac waarop je bent ingelogd met hetzelfde Phi-account. Bewaar je op de ene Mac een bladwijzer of geef je een Space een nieuwe naam, dan komt die wijziging ook op de andere aan. Synchronisatie staat uit totdat je het op elke Mac instelt, en het is zo gebouwd dat wij niet kunnen lezen wat erdoorheen gaat: alles wordt op je Mac versleuteld voordat het wordt geüpload, met sleutels die alleen jouw Macs hebben.

Alles wat hier wordt beschreven, vind je in **Instellingen → Synchronisatie**.

## Wat er wordt gesynchroniseerd

| Wat                             | Details                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spaces**                      | Naam, symbool, kleur, thema, en bij welk Profiel elke Space hoort.                                                                                                                                                                                                                                      |
| **Profielen**                   | De namen van Profielen, en welke Spaces bij elk Profiel horen.                                                                                                                                                                                                                                          |
| **Bladwijzers en mappen**       | De bladwijzers van elke Space, met hun mappen en volgorde.                                                                                                                                                                                                                                              |
| **Vastgezette tabbladen**       | Vastgezette tabbladen, in het bereik dat je hebt gekozen in **Instellingen → Spaces**.                                                                                                                                                                                                                  |
| **URL-regels**                  | De regels die overeenkomende sites naar een Space, Incognito of Kiosk sturen.                                                                                                                                                                                                                           |
| **Ondersteunde instellingen**   | Lay-outmodus, weergave, thema en selectietint, de instellingen voor de bladwijzerbalk en de volledige URL, de toetscombinatie voor een nieuw tabblad, de waarschuwing bij het sluiten van Incognito, automatische beeld-in-beeld, het bereik van vastgezette tabbladen, en welke Space de standaard is. |
| **Browsegegevens, per Profiel** | Browsegeschiedenis, de eigen voorkeuren van de browser zoals de standaardzoekmachine, en extensies met hun gesynchroniseerde instellingen.                                                                                                                                                              |

::: warning Verwijderen wordt ook gesynchroniseerd
Verwijder je op één Mac een Space of een Profiel, dan wordt die verwijderd van elke Mac die ermee synchroniseert, bladwijzers inbegrepen. Phi meldt dat in het bevestigingsvenster, dus lees het voordat je bevestigt.
:::

Sommige dingen blijven bewust waar ze zijn:

- **Wachtwoorden, cookies en automatisch invullen.** Die komen nooit in de synchronisatie terecht. Phi heeft geen eigen wachtwoordmanager, en een kluis die je koppelt via de [Wachtwoordmanager voor agents](/nl/agent-passwords/) hoort bij de aanbieder ervan en synchroniseert op de voorwaarden van die aanbieder.
- **Open tabbladen.** Gewone open tabbladen worden niet opnieuw aangemaakt op een andere Mac. Vastgezette tabbladen wel.
- **Phi Chat en Geheugen.** Je gesprekken met de assistent blijven op de Mac waar je ze hebt gevoerd, en dat geldt ook voor [Geheugen](/nl/memory/).
- **Incognito-Spaces**, en de Spaces waarin agents werken. Daaruit wordt niets gesynchroniseerd. Een URL-regel die een site naar Incognito stuurt, is nog steeds een regel en synchroniseert dus net als elke andere.
- **Instellingen die aan één Mac gebonden zijn**, waaronder de instellingen voor AI en agents.

## Voordat je begint

- **Een Phi-account, ingelogd op elke Mac.** Zonder account biedt het paneel alleen **Log in om tussen apparaten te synchroniseren**. Heb je ervoor gekozen Phi zonder account te verkennen, zie dan [Later inloggen](/nl/get-started/#signing-in-later).
- **De officiële build van Phi.** Synchronisatie loopt via de synchronisatiedienst van Phinomenon, en een versie van Phi die je zelf vanaf de opensourcecode bouwt, kan die niet gebruiken.

## Je eerste Mac instellen

1. Open **Instellingen → Synchronisatie** en klik op **Stel synchronisatie in op dit apparaat**. Het venster legt uit wat er gaat gebeuren; klik op **Ga door**.
2. **Bewaar je herstelcode.** Phi maakt een herstelcode aan en toont die één keer: 27 tekens in groepen van vijf. Klik op **Kopieer** en bewaar de code op een veilige plek, zoals een wachtwoordmanager, en klik daarna op **Ik heb de code bewaard**.
3. **Bevestig je herstelcode.** Phi vraagt je de bewaarde code in te typen. Streepjes, spaties en hoofdletters maken niet uit. Synchronisatie blijft uit totdat de code klopt, zodat je er niet later achter komt dat hij nooit is bewaard. Sluit je hier het venster, dan vraagt Phi er opnieuw om zodra je het instellen weer opent of Phi opnieuw start.
4. **Koppel je profielen en Spaces.** Op een eerste Mac staat er nog niets in het account om mee te koppelen, dus deze stap bevestigt vooral wat er wordt toegevoegd: kies **Registreer als nieuw** voor elk Profiel en **Voeg alles toe als nieuw** voor de Spaces. Zie [Nog een Mac toevoegen](#add-another-mac) voor wat deze twee stappen doen zodra het account gegevens bevat.
5. Klik op **Klaar**. Het paneel toont **Eerste synchronisatie is bezig** terwijl deze Mac uploadt, en daarna **Up-to-date**.

::: warning De herstelcode wordt één keer getoond
De code wordt op je Mac gemaakt en nooit naar ons verstuurd, dus we kunnen hem niet opnieuw tonen, geen vervangende code sturen en hem niet resetten. Om nog een Mac toe te voegen, heb je de code nodig of een Mac die al is ingesteld. Raak je beide kwijt, dan kan niemand de versleutelde kopie in je account ontgrendelen, wij ook niet.
:::

## Nog een Mac toevoegen {#add-another-mac}

1. Log in met hetzelfde Phi-account, open **Instellingen → Synchronisatie**, klik op **Stel synchronisatie in op dit apparaat** en daarna op **Ga door**.
2. Kies bij **Voeg dit apparaat toe aan je account** hoe deze Mac wordt toegevoegd:
   - **Vraag goedkeuring van een ander apparaat.** Phi toont een korte code en wacht. Open op een Mac die al is ingesteld **Instellingen → Synchronisatie**: het verzoek verschijnt onder **Apparaten**, met dezelfde code en het moment waarop het verloopt. Controleer of de twee codes overeenkomen en klik dan op **Keur goed**, of op **Weiger** als je het verzoek niet verwachtte. De code identificeert de nieuwe Mac en is geen geheim, dus je kunt hem gerust telefonisch voorlezen. Bij een geweigerd of verlopen verzoek krijg je **Probeer een andere manier**.
   - **Voer een herstelcode in.** Typ de code die je op je eerste Mac hebt bewaard.
3. **Koppel je profielen.** Phi koppelt de Profielen op deze Mac aan de Profielen in je account en vraagt naar de Profielen die het niet kon koppelen. Kies voor elk Profiel hier **Wijs toe aan** een accountprofiel of **Registreer als nieuw**. Profielen in je account zonder tegenhanger hier staan onder **Niet-toegewezen accountprofielen**, waar **Maak aan op deze Mac** ze toevoegt.
4. **Koppel je Spaces.** Kies voor elke Space op deze Mac welke account-Space het is, of kies **Voeg toe als nieuw**. **Voeg alles toe als nieuw** regelt in één keer elke Space waarover je nog niet hebt beslist, en Spaces met precies dezelfde naam worden al voor je gekozen. Spaces in je account die niet op deze Mac staan, verschijnen onder **Toe te voegen Spaces uit je account** en worden aangemaakt wanneer je afrondt. Er wordt niets van deze Mac verwijderd. Klik op **Klaar**.
5. **Bekijk wat er verandert**, dat alleen verschijnt als er iets op deze Mac zou worden overschreven. Heb je een Space hier gekoppeld aan een Space in je account, dan vervangen de naam, het symbool, de kleur en het thema uit het account die van deze Mac, en kan de Space worden verplaatst naar het Profiel dat hij in je account heeft. Tabbladen, bladwijzers, vastgezette tabbladen en URL-regels op deze Mac blijven onaangetast. Wil je de waarden van deze Mac behouden, ga dan **Terug** en voeg die Space toe als nieuwe Space. Klik op **Pas toe** om de synchronisatie te starten. Wordt er niets overschreven, dan start de synchronisatie zodra je op **Klaar** klikt.

Het laden van het account kan tot twee minuten duren terwijl Phi je Spaces telt, en er is een verbinding voor nodig: er is geen opgeslagen kopie om op terug te vallen. Zodra de synchronisatie start, blijven bladwijzers, vastgezette tabbladen en URL-regels van beide Macs behouden, zodat er van geen van beide kanten iets verloren gaat.

### Later voltooien

**Voltooi later** staat op de koppelpagina's. Kies je die, of sluit je het venster, dan blijft deze Mac lokaal browsen: er wordt niets gesynchroniseerd, het paneel toont **Niet gekoppeld** en Phi opent het instellen niet uit zichzelf opnieuw. Ga terug naar **Instellingen → Synchronisatie** en klik op **Ga door met instellen** wanneer je zover bent. Phi laadt je account op dat moment opnieuw, dus keuzes die je nog niet had afgerond, worden niet bewaard.

## De synchronisatiestatus controleren

Bovenaan het paneel Synchronisatie zie je hoe het ervoor staat:

- **Up-to-date**, **Synchroniseren…**, of **Eerste synchronisatie is bezig** terwijl de eerste synchronisatie loopt.
- **Offline**, met de melding dat wijzigingen worden gesynchroniseerd zodra er verbinding is. Phi blijft werken met de lokale gegevens en verstuurt je wijzigingen zodra de Mac weer online is.
- **Synchronisatie gepauzeerd.** Een Profiel op deze Mac is nog niet ingesteld voor synchronisatie, meestal een Profiel dat je na het instellen hebt aangemaakt. Phi registreert het zelf en blijft het opnieuw proberen; de regel eronder vertelt waarom het wacht, en **Opnieuw proberen** probeert het meteen.
- **Vereist aandacht.** Er is iets misgegaan, en **Laatste probleem** noemt wat. **Inlogsessie verlopen** betekent dat je opnieuw moet inloggen. **Geen verbinding** en **Serverfout** verdwijnen vanzelf bij de volgende geslaagde synchronisatie. **Synchronisatie moet opnieuw worden ingesteld** wordt behandeld in [Synchronisatie opnieuw instellen](#set-up-sync-again).

**Details** opent een rij per soort Phi-gegevens (Spaces, Bladwijzers, Vastgezette tabbladen, URL-regels, Instellingen) met wat deze Mac onlangs heeft ontvangen en verstuurd en wat nog wacht om te worden verstuurd, plus een rij voor de browsegegevens van elk Profiel. **Synchroniseer nu** vraagt deze Mac om alles meteen te synchroniseren. Dat heb je zelden nodig: Phi krijgt een seintje wanneer een andere Mac iets wijzigt en controleert ook zelf, en het start nooit twee synchronisaties binnen een minuut na elkaar.

## Apparaten

Het onderdeel **Apparaten** toont elke Mac die op je account is ingesteld, met **Deze Mac** gemarkeerd, en elke Mac die wacht om te worden toegevoegd, met de code, **Keur goed**, **Weiger** en het moment waarop het verzoek verloopt. Om goed te keuren moet deze Mac zijn ingelogd en moet het instellen op deze Mac zelf zijn afgerond.

Elke Mac kan alleen zichzelf verwijderen, vanuit zijn eigen paneel Synchronisatie. Er is nog geen manier om een Mac te verwijderen die je niet meer hebt: een verloren Mac blijft aan het account gekoppeld en blijft wijzigingen ontvangen zolang hij is ingelogd. Log hem uit als je er nog bij kunt, dan stopt dat.

## Een Mac uit de synchronisatie verwijderen {#remove-a-mac-from-sync}

Klik in **Instellingen → Synchronisatie**, onder **Herstel en verwijdering**, op **Verwijder dit apparaat uit synchronisatie…** en bevestig met **Verwijder dit apparaat**.

- Deze Mac stopt met synchroniseren, de synchronisatiedienst trekt zijn toegang in, en de synchronisatie-instellingen, sleutels en koppelingen van Profielen en Spaces worden van deze Mac gewist.
- Alles waarmee je aan het browsen was, blijft: Spaces, bladwijzers, geschiedenis en vastgezette tabbladen blijven volledig bewaard, en je blijft ingelogd op je account.
- Je andere Macs merken er niets van en blijven onderling synchroniseren.
- Wil je deze Mac terughalen, start het instellen dan opnieuw en voeg hem toe via goedkeuring of een herstelcode.

Je kunt de laatste Mac op het account niet verwijderen. Stel eerst synchronisatie in op een andere Mac.

::: warning Verwijderen vervangt de sleutels van je account niet
Een Mac verwijderen zorgt dat hij niets nieuws meer ontvangt, maar verandert de versleutelingssleutels van je account niet en kan niet terughalen wat die Mac al had gesynchroniseerd. Wat erop stond, blijft erop staan.
:::

## Synchronisatie opnieuw instellen {#set-up-sync-again}

Staat er in het paneel **De synchronisatiegegevens van het account zijn gewijzigd. Het synchroniseren van Phi-gegevens is gepauzeerd.**, dan zijn de synchronisatiegegevens in je account gereset en past de instelling van deze Mac er niet meer bij. De gegevens van Phi worden pas weer gesynchroniseerd als je actie onderneemt; opnieuw proberen of opnieuw starten lost het niet op. Klik op **Stel synchronisatie opnieuw in** en bevestig. Phi wist de synchronisatie-instellingen en koppelingsgegevens van deze Mac, behoudt je lokale browsegegevens en wat er in je account staat, en leidt je opnieuw door het instellen, inclusief toevoegen via goedkeuring of een herstelcode.

## Uitloggen

Uitloggen bij je Phi-account stopt de synchronisatie op die Mac, en er komt niets van je andere Macs binnen totdat je weer inlogt. Log je weer in met hetzelfde account, dan gaat de synchronisatie verder waar hij was gebleven en haalt hij in wat hij heeft gemist; het paneel Synchronisatie laat je weten of er nog iets af te ronden is. Wissel je naar een ander account, dan worden de twee nooit vermengd: elk account heeft zijn eigen gesynchroniseerde gegevens en zijn eigen koppelingen.

## Hoe je gegevens worden beschermd

- **Versleuteld voordat ze je Mac verlaten.** Je Macs maken de sleutels aan, en alleen de versleutelde kopie wordt geüpload. De synchronisatiedienst bewaart die kopie en geeft hem door aan je andere Macs; ontsleutelen kan de dienst niet.
- **Inloggen is niet genoeg om ze te lezen.** Een nieuwe Mac krijgt de sleutel alleen via goedkeuring van een Mac die hem al heeft, of via je herstelcode. Daarom is er nergens een link 'herstelcode vergeten'.
- **Het blijven gegevens die wij voor je bewaren.** De versleutelde kopie staat op de synchronisatiedienst van Phinomenon, dus synchronisatie is een van de dingen die Phi verstuurt. [Privacy & je gegevens](/nl/privacy/) noemt de andere, en het [Privacybeleid](https://phibrowser.com/privacy/) en de [Gebruiksvoorwaarden](https://phibrowser.com/terms/) zijn voor dit alles de gezaghebbende bron.

## Synchroniseren of exporteren

Synchronisatie is bedoeld voor Macs die je naast elkaar blijft gebruiken. Voor een eenmalige verhuizing naar een nieuwe Mac, of een kopie die je zelf bewaart, is **Beheer gebruikersgegevens → Exporteer gebruikersgegevens…** in het **Help**-menu het betere gereedschap; zie [Importeren & exporteren](/nl/import-export/).

## Volgende stappen

- [Spaces & profielen](/nl/spaces/), wat een Space en een Profiel zijn, en waarom het instellen ze koppelt.
- [Bladwijzers & vastgezette tabbladen](/nl/bookmarks/), het bereik van vastgezette tabbladen dat synchronisatie volgt.
- [Privacy & je gegevens](/nl/privacy/), alles wat Phi verder verstuurt en bewaart.
- [Importeren & exporteren](/nl/import-export/), gegevens één keer verplaatsen in plaats van doorlopend.
