---
description: "Houd je Spaces, bladwijzers, vastgezette tabbladen, URL-regels, ondersteunde instellingen en browsegeschiedenis gelijk op elke Mac waarop je inlogt, versleuteld vóór het uploaden met sleutels die alleen jouw Macs hebben."
---

# Synchronisatie

Synchronisatie houdt de eigen gegevens van Phi gelijk op elke Mac waarop je bent ingelogd met hetzelfde Phi-account. Bewaar je op de ene Mac een bladwijzer of geef je een Space een nieuwe naam, dan komt die wijziging ook op de andere aan. Synchronisatie staat uit totdat je het op elke Mac instelt, en het is zo gebouwd dat wij niet kunnen lezen wat erdoorheen gaat: alles wordt op je Mac versleuteld voordat het wordt geüpload, met sleutels die alleen jouw Macs hebben.

Alles wat hier wordt beschreven, vind je in **Instellingen → Synchronisatie**.

## Wat er wordt gesynchroniseerd {#what-syncs}

| Wat                             | Details                                                                                                                                                                                                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Spaces**                      | Naam, symbool, kleur, thema, en bij welk Profiel elke Space hoort.                                                                                                                                                                                                                                           |
| **Profielen**                   | De namen van Profielen, en welke Spaces bij elk Profiel horen.                                                                                                                                                                                                                                               |
| **Bladwijzers en mappen**       | De bladwijzers van elke Space, met hun mappen en volgorde.                                                                                                                                                                                                                                                   |
| **Vastgezette tabbladen**       | Vastgezette tabbladen, in het bereik dat je hebt gekozen in **Instellingen → Spaces**.                                                                                                                                                                                                                       |
| **URL-regels**                  | De regels die overeenkomende sites naar een Space, Incognito of Kiosk sturen.                                                                                                                                                                                                                                |
| **Ondersteunde instellingen**   | Lay-outmodus, weergave, thema en selectietint, de instellingen voor de bladwijzerbalk en de volledige URL, **Gedrag van nieuwe tabbladen** (wat ⌘T opent), de waarschuwing bij het sluiten van Incognito, automatische beeld-in-beeld, het bereik van vastgezette tabbladen, en welke Space de standaard is. |
| **Browsegegevens, per Profiel** | Browsegeschiedenis, de eigen voorkeuren van de browser zoals de standaardzoekmachine, en extensies met hun gesynchroniseerde instellingen.                                                                                                                                                                   |

::: warning Verwijderen wordt ook gesynchroniseerd
Verwijder je op één Mac een Space of een Profiel, dan wordt die verwijderd van elke Mac die ermee synchroniseert, bladwijzers inbegrepen. Phi meldt dat in het bevestigingsvenster, dus lees het voordat je bevestigt.
:::

Sommige dingen blijven bewust waar ze zijn:

- **Wachtwoorden, cookies en automatisch invullen.** Die komen nooit in de synchronisatie terecht. Phi heeft geen eigen wachtwoordmanager, en een kluis die je koppelt via de [Wachtwoordmanager voor agents](/nl/agent-passwords/) hoort bij de aanbieder ervan en synchroniseert op de voorwaarden van die aanbieder.
- **Open tabbladen.** Gewone open tabbladen worden niet opnieuw aangemaakt op een andere Mac. Vastgezette tabbladen wel.
- **Phi Chat en Geheugen.** Je gesprekken met de assistent blijven op de Mac waar je ze hebt gevoerd, en dat geldt ook voor [Geheugen](/nl/memory/).
- **Incognito-Spaces**, en de Spaces waarin agents werken. Daaruit wordt niets gesynchroniseerd. Een URL-regel die een site naar Incognito stuurt, is nog steeds een regel en synchroniseert dus net als elke andere.
- **Toetscombinaties.** Wat je instelt in **Instellingen → Toetscombinaties**, blijft op de Mac waar je het hebt ingesteld.
- **Instellingen die aan één Mac gebonden zijn**, waaronder de instellingen voor AI en agents.

## Voordat je begint

- **Een Phi-account, ingelogd op elke Mac.** Zonder account biedt het paneel alleen **Log in om tussen apparaten te synchroniseren**. Heb je ervoor gekozen Phi zonder account te verkennen, zie dan [Later inloggen](/nl/get-started/#signing-in-later).
- **De officiële build van Phi.** Synchronisatie loopt via de synchronisatiedienst van Phinomenon, en een versie van Phi die je zelf vanaf de opensourcecode bouwt, kan die niet gebruiken.

## Je eerste Mac instellen {#set-up-your-first-mac}

1. Open **Instellingen → Synchronisatie** en klik op **Stel synchronisatie in op dit apparaat**. Het venster legt uit wat er gaat gebeuren; klik op **Ga door**.
2. **Bewaar je herstelcode.** Phi maakt een herstelcode aan en toont die één keer: 27 tekens in groepen van vijf. Klik op **Kopieer** en bewaar de code op een veilige plek, zoals een wachtwoordmanager, en klik daarna op **Ik heb de code bewaard**.
3. **Bevestig je herstelcode.** Phi vraagt je de bewaarde code in te typen. Streepjes, spaties en hoofdletters maken niet uit. Heb je de code niet bewaard, klik dan op **Terug**: Phi toont dezelfde code opnieuw, zodat je hem nu kunt bewaren. Synchronisatie blijft uit totdat de code klopt, zodat je er niet later achter komt dat hij nooit is bewaard. Sluit je hier het venster, dan vraagt Phi er opnieuw om zodra je het instellen weer opent of Phi opnieuw start, maar dan is **Terug** verdwenen, omdat Phi de code niet meer heeft zodra het venster is gesloten.
4. **Phi stelt synchronisatie zelf in.** Op een eerste Mac staat er nog niets in het account om mee te koppelen, dus zijn er geen koppelpagina's om in te vullen. Phi voegt de Profielen en Spaces van deze Mac toe aan het account en toont intussen **Synchronisatie wordt ingesteld…**. Kon Phi niet alles in het account lezen, dan toont het in plaats daarvan de koppelpagina's uit [Nog een Mac toevoegen](#add-another-mac).
5. Wanneer het instellen klaar is, toont het paneel **Eerste synchronisatie is bezig** terwijl deze Mac uploadt, en daarna **Up-to-date**.

::: warning De herstelcode wordt één keer getoond
De code wordt op je Mac gemaakt en nooit naar ons verstuurd, dus we kunnen hem niet opnieuw tonen, geen vervangende code sturen en hem niet resetten. Om nog een Mac toe te voegen, heb je de code nodig of een Mac die al is ingesteld. Raak je beide kwijt, dan kan niemand de versleutelde kopie in je account ontgrendelen, wij ook niet. Ben je de code al kwijt, zie dan [Herstelcode vergeten?](#forgot-your-recovery-code)
:::

## Nog een Mac toevoegen {#add-another-mac}

1. Log in met hetzelfde Phi-account, open **Instellingen → Synchronisatie**, klik op **Stel synchronisatie in op dit apparaat** en daarna op **Ga door**.
2. Kies bij **Voeg dit apparaat toe aan je account** hoe deze Mac wordt toegevoegd:
   - **Vraag goedkeuring van een ander apparaat.** Phi toont een korte code en wacht. Open op een Mac die al is ingesteld **Instellingen → Synchronisatie**: het verzoek verschijnt onder **Apparaten**, met dezelfde code en het moment waarop het verloopt. Controleer of de twee codes overeenkomen en klik dan op **Keur goed**, of op **Weiger** als je het verzoek niet verwachtte. De code identificeert de nieuwe Mac en is geen geheim, dus je kunt hem gerust telefonisch voorlezen. Bij een geweigerd of verlopen verzoek krijg je **Probeer een andere manier**.
   - **Voer een herstelcode in.** Typ de code die je op je eerste Mac hebt bewaard.
3. **Kies hoe deze Mac synchroniseert.** Staan er al gegevens in je account en heeft deze Mac eigen gegevens, dan vraagt Phi **Hoe moet deze Mac synchroniseren?** en toont het wat elke kant bevat:
   - **Voeg deze Mac samen met je account**, gemarkeerd als **Aanbevolen**. In de volgende stappen koppel je Profielen en Spaces één voor één, en bladwijzers, vastgezette tabbladen en URL-regels van beide kanten blijven bewaard.
   - **Gebruik de gegevens van je account**. De Spaces, bladwijzers, vastgezette tabbladen, URL-regels en gesynchroniseerde instellingen van deze Mac worden vervangen door die van je account, en Profielen die je account niet heeft, worden van deze Mac verwijderd. Alleen deze Mac verandert, en dit kan niet ongedaan worden gemaakt. Lees [De gegevens van je account gebruiken](#use-your-accounts-data) voordat je hiervoor kiest.

   Een Mac met niets meer dan zijn standaardprofiel en standaard-Space, en zonder bladwijzers, vastgezette tabbladen of URL-regels, krijgt deze stap niet te zien. Er is geen optie die de gegevens van deze Mac over je account heen kopieert.

4. **Koppel je profielen.** Phi koppelt de Profielen op deze Mac aan de Profielen in je account en vraagt naar de Profielen die het niet kon koppelen. Het standaardprofiel van deze Mac wordt altijd gekoppeld aan het standaardprofiel van je account: de rij toont dat accountprofiel, zonder keuzemenu. Kies voor elk ander Profiel hier **Wijs toe aan** een accountprofiel of **Registreer als nieuw**. Profielen in je account zonder tegenhanger hier staan onder **Niet-toegewezen accountprofielen**, waar **Maak aan op deze Mac** ze toevoegt. Zou een keuze de regel voor het standaardprofiel breken, dan meldt Phi **Het standaardprofiel van deze Mac kan alleen worden gekoppeld aan het standaardprofiel van het account. Controleer de koppelingen en probeer het opnieuw.**
5. **Koppel je Spaces.** Kies voor elke Space op deze Mac welke account-Space het is, of kies **Voeg toe als nieuw**. **Voeg alles toe als nieuw** regelt in één keer elke Space waarover je nog niet hebt beslist, en Spaces met precies dezelfde naam worden al voor je gekozen. Spaces in je account die niet op deze Mac staan, verschijnen onder **Toe te voegen Spaces uit je account** en worden aangemaakt wanneer je afrondt. Er wordt niets van deze Mac verwijderd. Klik op **Klaar**.
6. **Bekijk wat er verandert**, dat alleen verschijnt als er iets op deze Mac zou worden overschreven. Heb je een Space hier gekoppeld aan een Space in je account, dan vervangen de naam, het symbool, de kleur en het thema uit het account die van deze Mac, en kan de Space worden verplaatst naar het Profiel dat hij in je account heeft. Tabbladen, bladwijzers, vastgezette tabbladen en URL-regels op deze Mac blijven onaangetast. Wil je de waarden van deze Mac behouden, ga dan **Terug** en voeg die Space toe als nieuwe Space. Klik op **Pas toe** om de synchronisatie te starten. Wordt er niets overschreven, dan start de synchronisatie zodra je op **Klaar** klikt.

Phi toont alleen de pagina's waarop het iets te vragen heeft. Is er niets te vragen, bijvoorbeeld op een Mac met alleen standaardgegevens, dan rondt Phi zelf af en toont het **Synchronisatie wordt ingesteld…**, en verschijnen de Profielen en Spaces van je account op deze Mac.

Het laden van het account kan tot twee minuten duren terwijl Phi je Spaces telt, en er is een verbinding voor nodig: er is geen opgeslagen kopie om op terug te vallen. Met **Voeg deze Mac samen met je account** blijven bladwijzers, vastgezette tabbladen en URL-regels van beide Macs behouden zodra de synchronisatie start, zodat er van geen van beide kanten iets verloren gaat.

### De gegevens van je account gebruiken {#use-your-accounts-data}

Kies dit als je niet wilt houden wat Phi op deze Mac heeft, bijvoorbeeld een Mac die je alleen voor tests gebruikte. Phi verwijdert eerst de Phi-gegevens van deze Mac en downloadt daarna die van je account.

- **Verwijderd van deze Mac:** Spaces behalve de standaard-Space, waarbij hun open tabbladen worden gesloten; bladwijzers, vastgezette tabbladen, URL-regels en gesynchroniseerde instellingen; en elk Profiel dat je account niet heeft, samen met de geschiedenis, extensies en websitegegevens ervan.
- **Behouden:** het standaardprofiel van deze Mac, en Profielen met dezelfde naam als een Profiel in je account, houden hun geschiedenis, extensies en websitegegevens. Je account en je andere Macs blijven ongewijzigd.

Nadat je op **Ga door** hebt geklikt, vraagt Phi **De gegevens van deze Mac vervangen?** en toont het wat er wordt verwijderd en wat er wordt gedownload. Klik op **Vervang de gegevens van deze Mac** om door te gaan. Phi toont **De gegevens van deze Mac worden vervangen…** en het venster blijft open totdat het klaar is. De gegevens van je account komen daarna binnen met de eerste synchronisatie, en het paneel toont **Eerste synchronisatie is bezig**; bij een groot account kan dat een paar minuten duren. Stopt het vervangen met een fout, zie dan [Kan het vervangen van de gegevens van deze Mac niet voltooien](#replace-did-not-finish).

::: warning Vervangen kan niet ongedaan worden gemaakt
Phi bewaart geen kopie van wat het verwijdert. Wil je er wel een, kies dan eerst **Voltooi later**, exporteer met **Help → Beheer gebruikersgegevens → Exporteer gebruikersgegevens…** (zie [Importeren & exporteren](/nl/import-export/) en [Synchroniseren of exporteren](#sync-or-export)) en kom daarna terug naar het instellen. Wil je een lokaal Profiel behouden, kies dan in plaats daarvan **Voeg deze Mac samen met je account**.
:::

### Als het instellen je account niet kan laden {#setup-cannot-load-account}

Het instellen leest je account voordat het keuzes toont. Lukt dat niet, dan meldt het venster waarom en biedt het **Opnieuw proberen** aan:

- **Kan de Spaces van je account niet op tijd laden. Controleer je verbinding en probeer het opnieuw.** Het account is groot of de verbinding is traag.
- **Synchronisatie is op dit moment niet beschikbaar, dus de Spaces van je account konden niet worden geladen.** Phi kan de synchronisatie nu niet bereiken. Controleer of je online bent en nog bent ingelogd, en probeer het daarna opnieuw.
- **Kan de profielen van je account niet laden. Controleer je verbinding en probeer het opnieuw.** of **Kan de Spaces van je account niet laden. Controleer je verbinding en probeer het opnieuw.**
- Een accountprofiel met de melding **Kan nu niet worden gelezen**: Phi blijft het op de achtergrond proberen, en de rest van het instellen werkt gewoon.
- **Het standaardprofiel van je account kan niet worden gelezen op deze Mac, dus de gegevens van deze Mac kunnen nu niet worden vervangen.** **Gebruik de gegevens van je account** werkt pas weer als het wel kan worden gelezen. Kies **Voeg deze Mac samen met je account**, of **Voltooi later** en probeer het opnieuw.

### Later voltooien {#finish-later}

**Voltooi later** staat op de stap voor de synchronisatiemethode en op de koppelpagina's. Kies je die, of sluit je het venster, dan blijft deze Mac lokaal browsen: er wordt niets gesynchroniseerd, het paneel toont **Niet gekoppeld** en Phi opent het instellen niet uit zichzelf opnieuw. Ga terug naar **Instellingen → Synchronisatie** en klik op **Ga door met instellen** wanneer je zover bent. Phi laadt je account op dat moment opnieuw, dus keuzes die je nog niet had afgerond, worden niet bewaard, ook de synchronisatiemethode niet: bij het volgende instellen is **Voeg deze Mac samen met je account** geselecteerd.

Een vervanging die al is gestart, is de uitzondering. Zodra Phi is begonnen met het vervangen van de gegevens van deze Mac, wordt dat niet geannuleerd als je weggaat. Is het gestopt, bijvoorbeeld door een fout of omdat Phi werd afgesloten, en heb je het venster gesloten, dan gaat het instellen de volgende keer meteen naar **De gegevens van deze Mac vervangen?**, zonder **Terug**, en gaat **Vervang de gegevens van deze Mac** verder waar het was gestopt. **Verwijder dit apparaat uit synchronisatie…** wordt daar nog steeds aangeboden; daarmee blijft deze Mac buiten synchronisatie, met alles wat het vervangen nog niet had verwijderd.

## Herstelcode vergeten? {#forgot-your-recovery-code}

Niemand kan je herstelcode opnieuw tonen of een nieuwe code maken voor dezelfde synchronisatiegegevens, wij ook niet. Wat je nog kunt doen, hangt af van je situatie. De link **Herstelcode vergeten?** op de pagina **Voer je herstelcode in** opent dit gedeelte.

### Je bent je eerste Mac nog aan het instellen

Sta je op **Bevestig je herstelcode** en heb je het instelvenster nog niet gesloten, klik dan op **Terug**. Phi toont dezelfde code opnieuw. Bewaar de code, klik op **Ik heb de code bewaard** en typ hem in om te bevestigen.

Phi 2.14 en eerder hebben geen knop **Terug**. Heb je het venster gesloten of Phi opnieuw gestart, dan is de code ook weg: Phi blijft erom vragen, maar kan hem niet tonen. Werk Phi in beide gevallen zo nodig bij en begin dan opnieuw met [Synchronisatie resetten](#reset-sync), zoals hieronder beschreven.

### Er is nog een andere Mac ingesteld voor synchronisatie

Je hebt de code niet nodig. Kies op de nieuwe Mac **Vraag goedkeuring van een ander apparaat** en keur het verzoek goed op de Mac die is ingesteld; zie [Nog een Mac toevoegen](#add-another-mac). Synchronisatie blijft werken op de Macs die je hebt.

De code kan nog steeds niet opnieuw worden getoond of vervangen. Houd ten minste één Mac ingesteld voor synchronisatie: zolang dat zo is, kun je Macs toevoegen zonder de code.

### Dit is je enige Mac, of je wilt opnieuw beginnen

Gebruik [Synchronisatie resetten](#reset-sync) op die Mac. Daarmee wordt de Mac uit synchronisatie verwijderd en worden alle synchronisatiegegevens verwijderd die voor je account zijn opgeslagen. Je lokale browsegegevens blijven op de Mac staan, en elke andere Mac waarop synchronisatie voor het account nog was ingesteld, toont daarna [Synchronisatie opnieuw instellen](#set-up-sync-again). Stel vervolgens synchronisatie op deze Mac helemaal opnieuw in, zoals in [Je eerste Mac instellen](#set-up-your-first-mac). Phi maakt een nieuwe herstelcode aan; bewaar die voordat je op **Ik heb de code bewaard** klikt.

**Reset synchronisatie** wordt alleen aangeboden op de laatste Mac die voor het account is ingesteld. Wil je opnieuw beginnen terwijl er nog andere Macs zijn ingesteld, verwijder dan eerst elk van die andere Macs uit synchronisatie.

### Geen Mac die je nog hebt, is ingesteld voor synchronisatie

Ben je de code kwijt en is geen enkele Mac die je nog hebt ingesteld voor synchronisatie, dan kan de versleutelde kopie in je account niet worden ontgrendeld, niet door jou en niet door ons. Een Mac die nog niet is ingesteld voor synchronisatie, kan de synchronisatie van het account ook niet resetten, dus vanaf zo'n Mac kun je niet opnieuw beginnen. Dit geldt ook als je een Mac bent kwijtgeraakt of hebt gewist terwijl hij was ingesteld: die telt nog steeds als ingesteld, en hij kan niet vanaf een andere Mac worden verwijderd.

## De synchronisatiestatus controleren {#check-sync-status}

Bovenaan het paneel Synchronisatie zie je hoe het ervoor staat:

- **Up-to-date**, **Synchroniseren…**, of **Eerste synchronisatie is bezig** terwijl de eerste synchronisatie loopt.
- **Offline**, met de melding dat wijzigingen worden gesynchroniseerd zodra er verbinding is. Phi blijft werken met de lokale gegevens en verstuurt je wijzigingen zodra de Mac weer online is.
- **Synchronisatie gepauzeerd.** Een Profiel op deze Mac is nog niet ingesteld voor synchronisatie, meestal een Profiel dat je na het instellen hebt aangemaakt. Het paneel noemt de Profielen waarop het wacht en waarom. Phi registreert ze zelf en blijft het opnieuw proberen, en **Opnieuw proberen** probeert het meteen. Zie [Synchronisatie gepauzeerd](#sync-paused).
- **Vereist aandacht.** Er is iets misgegaan. Eronder staat de regel **Sommige inhoud vereist aandacht. Bekijk de details en controleer je verbinding.**, en **Laatste probleem** noemt het meest recente probleem en wanneer het zich voordeed. Zie [Wat elk probleem betekent](#needs-attention).

Onder de status toont **Laatste geslaagde synchronisatie op deze Mac** wanneer deze Mac voor het laatst een synchronisatie heeft voltooid. **Wachten tot profielen zijn geladen** betekent dat Phi de lijst met Profielen van deze Mac nog niet heeft gelezen. Phi blijft het zelf proberen, en na vijf minuten verandert de status in **Vereist aandacht**.

Heb je het bereik van vastgezette tabbladen gewijzigd, op deze Mac of op een andere, dan kan er een regel staan met **Wijziging van het bereik van vastgezette tabbladen nog niet toegepast**, met het aantal pogingen en een reden: **Er is een migratie uit een andere browser bezig**, **Lokale browsergegevens zijn niet beschikbaar** of **Kan vastgezette tabbladen op deze Mac niet bewaren**. Deze Mac heeft zijn vastgezette tabbladen nog niet naar het nieuwe bereik verplaatst. Phi blijft het zelf opnieuw proberen en de rest van de synchronisatie gaat door. Verdwijnt de regel niet, start Phi dan opnieuw, en stuur feedback via **Feedback** in het menu rechtsboven in het venster als dat ook niet helpt.

### Wat elk probleem betekent {#needs-attention}

**Laatste probleem** toont een van deze problemen. Het blijft staan totdat de volgende synchronisatie die volledig wordt voltooid, het wist.

| Laatste probleem                                                  | Wat het betekent                                                                                                                           | Wat je doet                                                                                                                        |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Inlogsessie verlopen**                                          | De synchronisatiedienst accepteert de inlogsessie van deze Mac niet meer.                                                                  | Log opnieuw in bij je Phi-account.                                                                                                 |
| **Geen verbinding**                                               | Deze Mac kon de synchronisatiedienst niet bereiken.                                                                                        | Niets. Het verdwijnt bij de volgende geslaagde synchronisatie zodra je online bent.                                                |
| **Serverfout**                                                    | De synchronisatiedienst gaf een fout terug.                                                                                                | Niets. Het verdwijnt bij de volgende geslaagde synchronisatie.                                                                     |
| **Server heeft wijzigingen geweigerd**                            | De synchronisatiedienst heeft een deel van de wijzigingen van deze Mac geweigerd, bijvoorbeeld na herhaalde conflicten met een andere Mac. | Klik op **Synchroniseer nu**. Komt het terug, start Phi dan opnieuw, en stuur feedback als het blijft.                             |
| **Kan gegevens op deze Mac niet lezen**                           | Phi kon een deel van zijn eigen gegevens op deze Mac niet lezen.                                                                           | Klik op **Synchroniseer nu**. Komt het terug, start Phi dan opnieuw, en stuur feedback als het blijft.                             |
| **Kan de synchronisatievoortgang op deze Mac niet bewaren**       | Phi kon zijn overzicht van wat al is gesynchroniseerd niet bewaren.                                                                        | Klik op **Synchroniseer nu**. Komt het terug, start Phi dan opnieuw, en stuur feedback als het blijft.                             |
| **Sommige gesynchroniseerde gegevens kunnen niet worden gelezen** | Iets in je account kon op deze Mac niet worden gelezen.                                                                                    | Klik op **Synchroniseer nu**. Komt het terug, start Phi dan opnieuw, en stuur feedback als het blijft.                             |
| **Wachten tot een profiel is gekoppeld**                          | Sommige gesynchroniseerde items wachten totdat een Profiel op deze Mac aan je account is gekoppeld.                                        | Wacht tot Phi het Profiel heeft ingesteld, of klik op **Opnieuw proberen** wanneer het paneel **Synchronisatie gepauzeerd** toont. |
| **Synchronisatie moet opnieuw worden ingesteld**                  | De synchronisatiegegevens in je account zijn gereset en de instelling van deze Mac past er niet meer bij.                                  | Klik op **Stel synchronisatie opnieuw in**. Zie [Synchronisatie opnieuw instellen](#set-up-sync-again).                            |

Items die worden vastgehouden, beschreven onder [Details](#sync-details), kunnen de status ook op **Vereist aandacht** houden zonder dat er een probleem wordt genoemd. Zie [Vastgezette tabbladen worden vastgehouden](#held-pinned-tabs).

### Details {#sync-details}

**Details** toont je Profielen, elk met de status van zijn browsegegevens, en daarna een rij per soort Phi-gegevens: **Instellingen**, **Spaces**, **Bladwijzers**, **Vastgezette tabbladen** en **URL-regels**. De rij van elke soort beschrijft de meest recente synchronisatie met wijzigingen, en hoe lang geleden die was:

| Telling                   | Wat het telt                                                                                                                                                                                                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ontvangen**             | Wijzigingen die deze Mac uit je account heeft gekregen.                                                                                                                                                                                                                                                     |
| **verzonden**             | Wijzigingen die deze Mac heeft geüpload.                                                                                                                                                                                                                                                                    |
| **wachten op verzending** | Wijzigingen op deze Mac die nog niet zijn geüpload. Een latere synchronisatie verstuurt ze.                                                                                                                                                                                                                 |
| **vastgehouden**          | Items die deze Mac heeft ontvangen maar nog niet kan toepassen. Phi bewaart ze totdat dat wel kan, bijvoorbeeld een vastgezet tabblad waarvan het Profiel of de Space niet is gekoppeld op deze Mac. Vastgezette tabbladen die bij een ander bereik van vastgezette tabbladen horen, worden niet meegeteld. |

De tellingen **wachten op verzending** en **vastgehouden** verschijnen alleen als ze niet nul zijn. Een soort zonder recente activiteit toont **Geen recente wijzigingen**.

### Synchroniseer nu {#sync-now}

**Synchroniseer nu** vraagt deze Mac om alles meteen te synchroniseren. Dat heb je zelden nodig: Phi krijgt een seintje wanneer een andere Mac iets wijzigt en controleert ook zelf, hooguit één keer per minuut. **Synchroniseer nu** slaat dat wachten over. Terwijl een synchronisatie wacht of loopt, toont de knop de voortgang, en de knopinfo vertelt waarop hij wacht, zoals **Wachten tot alle profielen beschikbaar zijn**.

Wordt een synchronisatie die jij hebt gestart niet voltooid, dan staat er een regel onder de status totdat je opnieuw klikt:

- De naam van het probleem, uit de tabel hierboven, als er tijdens die synchronisatie een probleem is vastgelegd.
- **Synchronisatie is niet voltooid**, als de synchronisatie stopte zonder specifiek probleem. Probeer het later opnieuw. Gebeurt het steeds op één Mac, zie dan [Vastgezette tabbladen worden vastgehouden](#held-pinned-tabs).
- **Kan synchronisatie niet starten. Probeer het later opnieuw.**, als deze Mac helemaal geen synchronisatie kon starten.

Een synchronisatie die wordt voltooid, voegt geen regel toe, en **Laatste geslaagde synchronisatie op deze Mac** schuift op naar het nieuwe tijdstip.

## Apparaten

Het onderdeel **Apparaten** toont elke Mac die op je account is ingesteld, met **Deze Mac** gemarkeerd, en elke Mac die wacht om te worden toegevoegd, met de code, **Keur goed**, **Weiger** en het moment waarop het verzoek verloopt. Om goed te keuren moet deze Mac zijn ingelogd en moet het instellen op deze Mac zelf zijn afgerond.

Elke Mac kan alleen zichzelf verwijderen, vanuit zijn eigen paneel Synchronisatie. Er is nog geen manier om een Mac te verwijderen die je niet meer hebt: een verloren Mac blijft aan het account gekoppeld en blijft wijzigingen ontvangen zolang hij is ingelogd. Log hem uit als je er nog bij kunt, dan stopt dat.

## Een Mac uit de synchronisatie verwijderen {#remove-a-mac-from-sync}

Klik in **Instellingen → Synchronisatie**, onder **Verwijdering**, op **Verwijder…** in de rij **Verwijder deze Mac uit synchronisatie** en bevestig met **Verwijder dit apparaat**. Is het instellen op deze Mac nog niet voltooid, dan biedt het instelvenster in plaats daarvan onderaan **Verwijder dit apparaat uit synchronisatie…**.

- Deze Mac stopt met synchroniseren, de synchronisatiedienst trekt zijn toegang in, en de synchronisatie-instellingen, sleutels en koppelingen van Profielen en Spaces worden van deze Mac gewist.
- Alles waarmee je aan het browsen was, blijft: Spaces, bladwijzers, geschiedenis en vastgezette tabbladen blijven volledig bewaard, en je blijft ingelogd op je account.
- Je andere Macs merken er niets van en blijven onderling synchroniseren.
- Wil je deze Mac terughalen, start het instellen dan opnieuw en voeg hem toe via goedkeuring of een herstelcode.

Is deze Mac de enige Mac op het account die is ingesteld voor synchronisatie, dan is de rij in plaats daarvan **Reset synchronisatie**, omdat het verwijderen van de laatste Mac ook de synchronisatiegegevens van het account verwijdert. Zie [Synchronisatie resetten](#reset-sync).

::: warning Verwijderen vervangt de sleutels van je account niet
Een Mac verwijderen zorgt dat hij niets nieuws meer ontvangt, maar verandert de versleutelingssleutels van je account niet en kan niet terughalen wat die Mac al had gesynchroniseerd. Wat erop stond, blijft erop staan.
:::

### Synchronisatie resetten {#reset-sync}

Is deze Mac de enige Mac op je account die is ingesteld voor synchronisatie, dan toont het onderdeel **Verwijdering** de rij **Reset synchronisatie** met de knop **Reset…**. Resetten verwijdert deze Mac uit synchronisatie en verwijdert alle synchronisatiegegevens die voor dit account zijn opgeslagen, zodat je opnieuw kunt beginnen, bijvoorbeeld nadat je je herstelcode bent kwijtgeraakt.

1. Klik in **Instellingen → Synchronisatie**, onder **Verwijdering**, op **Reset…**.
2. Phi vraagt **Alle synchronisatiegegevens voor dit account verwijderen?** Klik op **Verwijder alle synchronisatiegegevens** om te bevestigen. Dit kan niet ongedaan worden gemaakt.

- Elk apparaat wordt uit synchronisatie verwijderd, en alles wat voor dit account op de synchronisatieserver is opgeslagen, wordt verwijderd.
- Je lokale browsegegevens blijven op deze Mac staan: Spaces, bladwijzers, geschiedenis en vastgezette tabbladen blijven bewaard, en je blijft ingelogd op je account.
- Elke andere Mac waarop synchronisatie voor dit account nog was ingesteld, toont [Synchronisatie opnieuw instellen](#set-up-sync-again).
- Wil je synchronisatie weer gebruiken, stel die dan helemaal opnieuw in. Phi maakt een nieuwe herstelcode aan.

Verwijder je deze Mac via het instelvenster en blijkt het de laatste te zijn, dan meldt Phi dat: **Dit is het laatste apparaat dat is ingesteld voor synchronisatie. Je kunt het verwijderen, samen met alle synchronisatiegegevens die voor dit account zijn opgeslagen, of eerst synchronisatie op een ander apparaat instellen.** Daarna biedt Phi **Verwijder dit apparaat en alle synchronisatiegegevens…** aan, dat om dezelfde bevestiging vraagt.

Is er intussen een andere Mac aan het account toegevoegd, dan wordt er niets verwijderd. Phi meldt **Er is sindsdien een ander apparaat aan dit account toegevoegd, dus er is niets verwijderd. Je kunt deze Mac in plaats daarvan uit synchronisatie verwijderen.** en de rij verandert terug in **Verwijder deze Mac uit synchronisatie**.

## Synchronisatie opnieuw instellen {#set-up-sync-again}

Staat er in het paneel **De synchronisatiegegevens van het account zijn gewijzigd. Het synchroniseren van Phi-gegevens is gepauzeerd.**, dan zijn de synchronisatiegegevens in je account gereset en past de instelling van deze Mac er niet meer bij. De gegevens van Phi worden pas weer gesynchroniseerd als je actie onderneemt; opnieuw proberen of opnieuw starten lost het niet op. Klik op **Stel synchronisatie opnieuw in** en bevestig. Phi wist de synchronisatie-instellingen en koppelingsgegevens van deze Mac, behoudt je lokale browsegegevens en wat er in je account staat, en leidt je opnieuw door het instellen, inclusief toevoegen via goedkeuring of een herstelcode.

Je ziet dit ook op een Mac nadat **Reset synchronisatie** is gebruikt op de laatste ingestelde Mac van het account: de synchronisatiegegevens waarmee deze Mac was ingesteld, zijn dan verwijderd.

## Problemen oplossen {#troubleshooting}

### Een tweede Mac heeft mijn toetscombinaties of open tabbladen niet gekregen {#missing-shortcuts-and-open-tabs}

Dat is zo bedoeld. Toetscombinaties uit **Instellingen → Toetscombinaties** worden nooit gesynchroniseerd, en gewone open tabbladen ook niet: alleen vastgezette tabbladen wel. Ook de instellingen voor AI en agents blijven op elke Mac. Stel ze in op elke Mac waar je ze wilt hebben. Zie [Wat er wordt gesynchroniseerd](#what-syncs).

### Eén Mac meldt Synchronisatie is niet voltooid en houdt vastgezette tabbladen vast {#held-pinned-tabs}

Eén Mac toont **Synchronisatie is niet voltooid**, en de rij **Vastgezette tabbladen** in **Details** toont **vastgehouden** met een aantal, terwijl de andere Mac **Up-to-date** meldt. Met **vastgehouden** wordt bedoeld dat deze Mac vastgezette tabbladen heeft ontvangen die hij niet kan plaatsen, omdat het Profiel of de Space waar ze bij horen hier niet is gekoppeld.

De gebruikelijke oorzaak is dat de standaardprofielen van de twee Macs bij het instellen niet aan elkaar zijn gekoppeld. Macs die met Phi 2.12 zijn gekoppeld, kunnen zo zijn geëindigd. Sinds Phi 2.13 koppelt het instellen het standaardprofiel altijd aan het standaardprofiel van je account.

Om dit nu op te lossen, [verwijder je de Mac uit synchronisatie](#remove-a-mac-from-sync) op de Mac die de vastgezette tabbladen vasthoudt, en stel je hem daarna opnieuw in zoals bij [Nog een Mac toevoegen](#add-another-mac). Kies **Voeg deze Mac samen met je account** als Phi vraagt hoe deze Mac moet synchroniseren. Bladwijzers, geschiedenis en al het andere blijven op de Mac terwijl je dit doet, en het standaardprofiel ervan wordt gekoppeld aan het standaardprofiel van je account.

### Synchronisatie gepauzeerd, of Wachten tot een profiel is gekoppeld {#sync-paused}

Een Profiel dat je aanmaakt nadat je synchronisatie hebt ingesteld, is nog niet gekoppeld. Phi registreert het zelf bij je account, en de synchronisatie voor dat Profiel start zodra dat klaar is. **Opnieuw proberen** in het paneel Synchronisatie probeert het meteen. Verdwijnt de pauze nooit, controleer dan je verbinding en of je nog bent ingelogd, en klik daarna nogmaals op **Opnieuw proberen**.

### Synchronisatie meldt Vereist aandacht {#sync-needs-attention}

**Laatste probleem** noemt wat er misging. [Wat elk probleem betekent](#needs-attention) toont elk probleem en wat je eraan kunt doen.

### Kan het vervangen van de gegevens van deze Mac niet voltooien {#replace-did-not-finish}

Stopt het instellen met **Kan het vervangen van de gegevens van deze Mac niet voltooien.** nadat je **Gebruik de gegevens van je account** hebt gekozen, klik dan op **Opnieuw proberen**. Opnieuw proberen gaat verder waar het is gestopt, en totdat het klaar is, verandert er verder niets. Houd Phi open terwijl het loopt; bij een groot account kan het een paar minuten duren. Sluit je het venster, dan gaat het volgende instellen verder met dezelfde vervanging, zoals beschreven onder [Later voltooien](#finish-later).

### De naam, het symbool, de kleur of het thema van een Space is veranderd na het koppelen {#account-values-replaced}

Dat is zo bedoeld. Wanneer je een Space op deze Mac koppelt aan een Space in je account, winnen de naam, het symbool, de kleur en het thema uit het account, en **Bekijk wat er verandert** laat dat zien voordat je op **Pas toe** klikt. Wil je de versie van deze Mac houden, ga dan op dat moment **Terug** en kies **Voeg toe als nieuw** voor die Space: die wordt dan als aparte Space gesynchroniseerd. Zodra de koppeling is toegepast, worden de oude waarden van deze Mac niet bewaard, dus pas de Space zelf opnieuw aan als je ze terug wilt; die wijziging wordt ook naar je andere Macs gesynchroniseerd.

## Uitloggen

Uitloggen bij je Phi-account stopt de synchronisatie op die Mac, en er komt niets van je andere Macs binnen totdat je weer inlogt. Log je weer in met hetzelfde account, dan gaat de synchronisatie verder waar hij was gebleven en haalt hij in wat hij heeft gemist; het paneel Synchronisatie laat je weten of er nog iets af te ronden is. Wissel je naar een ander account, dan worden de twee nooit vermengd: elk account heeft zijn eigen gesynchroniseerde gegevens en zijn eigen koppelingen.

## Hoe je gegevens worden beschermd

- **Versleuteld voordat ze je Mac verlaten.** Je Macs maken de sleutels aan, en alleen de versleutelde kopie wordt geüpload. De synchronisatiedienst bewaart die kopie en geeft hem door aan je andere Macs; ontsleutelen kan de dienst niet.
- **Inloggen is niet genoeg om ze te lezen.** Een nieuwe Mac krijgt de sleutel alleen via goedkeuring van een Mac die hem al heeft, of via je herstelcode. Daarom kan een verloren code ook niet worden hersteld: de link **Herstelcode vergeten?** bij het instellen legt uit welke mogelijkheden je hebt, en geen daarvan brengt de code terug.
- **Het blijven gegevens die wij voor je bewaren.** De versleutelde kopie staat op de synchronisatiedienst van Phinomenon, dus synchronisatie is een van de dingen die Phi verstuurt. [Privacy & je gegevens](/nl/privacy/) noemt de andere, en het [Privacybeleid](https://phibrowser.com/privacy/) en de [Gebruiksvoorwaarden](https://phibrowser.com/terms/) zijn voor dit alles de gezaghebbende bron.

## Synchroniseren of exporteren {#sync-or-export}

Synchronisatie is bedoeld voor Macs die je naast elkaar blijft gebruiken. Voor een eenmalige verhuizing naar een nieuwe Mac, of een kopie die je zelf bewaart, is **Beheer gebruikersgegevens → Exporteer gebruikersgegevens…** in het **Help**-menu het betere gereedschap; zie [Importeren & exporteren](/nl/import-export/).

## Volgende stappen

- [Spaces & profielen](/nl/spaces/), wat een Space en een Profiel zijn, en waarom het instellen ze koppelt.
- [Bladwijzers & vastgezette tabbladen](/nl/bookmarks/), het bereik van vastgezette tabbladen dat synchronisatie volgt.
- [Privacy & je gegevens](/nl/privacy/), alles wat Phi verder verstuurt en bewaart.
- [Importeren & exporteren](/nl/import-export/), gegevens één keer verplaatsen in plaats van doorlopend.
