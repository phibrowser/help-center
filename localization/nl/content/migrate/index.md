---
description: "Hoe Migreer uit een andere browser je Profielen en Spaces uit Arc of Zen opnieuw opbouwt in Phi Browser, wat elke browser meebrengt, wat je kunt verwachten van toestemmingsvragen en hoe het verschilt van importeren."
---

# Migreren vanuit Arc of Zen

**Migreer uit een andere browser…** bouwt de vorm van je Arc- of Zen-opstelling opnieuw op in Phi. Het maakt een Phi-Profiel aan voor elk bronprofiel en een Phi-Space voor elke bron-Space, en vult daarna elke Space met zijn bladwijzers en elk Profiel met zijn vastgezette tabbladen en browsegegevens. Als het klaar is, staat je oude zijbalk opnieuw in Phi.

Een migratie maakt alleen dingen aan. Ze wijzigt nooit een Profiel of Space die je al in Phi hebt, voegt er niets in samen en verwijdert er niets van.

## Migreren of importeren {#migrate-or-import}

Phi heeft twee commando's om gegevens over te zetten, naast elkaar in het **Phi**-menu (het vetgedrukte appmenu naast het Apple-menu):

|                               | **Importeer uit een andere browser...**               | **Migreer uit een andere browser…**                            |
| ----------------------------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| Wat het doet                  | Voegt gegevens toe aan de Space waarin je zit         | Maakt nieuwe Profielen en Spaces aan die de bron weerspiegelen |
| Browsers                      | Chrome, Safari, Arc, Dia of een bestand               | Arc en Zen                                                     |
| Waar de gegevens terechtkomen | Je huidige Space en zijn Profiel                      | De nieuwe Profielen en Spaces die het aanmaakt                 |
| Jij kiest                     | Welke soorten gegevens je overneemt                   | Welke Spaces opnieuw worden aangemaakt                         |
| Je bestaande Phi-gegevens     | Bladwijzers en geschiedenis komen bij wat er al staat | Blijven onaangeroerd                                           |

Gebruik **Importeer uit een andere browser...** als je al een Phi-opstelling hebt die je bevalt en je er bladwijzers of geschiedenis aan wilt toevoegen. Gebruik **Migreer uit een andere browser…** als je overstapt vanuit Arc of Zen en je Spaces terug wilt zoals ze waren, zonder ze met de hand opnieuw op te bouwen. Importeren wordt behandeld in [Importeren en exporteren](/nl/import-export/).

## Voordat je begint {#before-you-start}

- **Zorg dat de browser op deze Mac is geïnstalleerd.** Een migratie leest de gegevens van Arc of Zen op de plek waar die browser ze bewaart. Is geen van beide geïnstalleerd, dan is **Migreer uit een andere browser…** gedimd.
- **Log in bij Phi, of ga door als gast.** Gemigreerde Profielen en Spaces horen bij je Phi-account, dus de wizard vraagt je de eerste start af te ronden voordat hij begint.
- **Stop Zen eerst.** Phi leest kopieën van de bestanden van Zen, en alles wat Zen nog niet naar schijf heeft geschreven, zou ontbreken. De wizard herinnert je eraan zolang Zen actief is.
- **Verwacht sleutelhangervragen bij Arc.** Arc versleutelt zijn cookies, dus macOS vraagt of Phi de versleutelingssleutel van Arc mag gebruiken. Kies **Sta altijd toe**. Anders vraagt macOS het voor elk Profiel opnieuw. Weiger je, dan blijven de cookies van dat Profiel achter terwijl al het andere meekomt, en het rapport meldt de ontbrekende cookies niet.
- **Voer niet tegelijk een import uit.** Zolang een migratie bezig is, is **Importeer uit een andere browser...** gedimd, en andersom.

## Een migratie uitvoeren {#running-a-migration}

1. Open het **Phi**-menu en kies **Migreer uit een andere browser…**. Het venster **Naar Phi migreren** opent.
2. Kies **Arc** of **Zen** en klik op **Ga door**. Alleen de browsers die op deze Mac zijn geïnstalleerd, staan in de lijst.
3. Bekijk het voorbeeld onder **Bekijk wat er wordt aangemaakt**. Het toont elk bronprofiel met zijn Spaces, en een samenvatting zoals _Er worden 2 Profielen en 5 Spaces aangemaakt._ Vink de Spaces uit die je niet wilt. Een Profiel wordt alleen aangemaakt als minstens één van zijn Spaces is aangevinkt.
4. Klik op **Start migratie**. Phi maakt de Profielen en Spaces één voor één aan en toont de voortgang. Dit kan een paar minuten duren. Je kunt intussen blijven browsen; de nieuwe Spaces openen niet over de Space die je gebruikt.
5. Lees het rapport onder **Migratie voltooid**. Klik op **Ga naar** gevolgd door de naam van een Space om naar de eerste nieuwe Space te gaan, of op **Gereed** om het venster te sluiten.

## Wat er meekomt {#what-comes-across}

De indeling is voor beide browsers gelijk. Elk bronprofiel wordt een Phi-Profiel, en elke bron-Space wordt een Phi-Space die aan dat Profiel is gekoppeld. De Space houdt zijn naam en, waar Phi een overeenkomst heeft, zijn kleur en pictogram.

| Bronitem                                                                                           | In Phi                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Arc-profiel, of Zen-Container (Zen-Spaces zonder Container delen één Profiel)                      | Een nieuw Profiel                                                                                                        |
| Arc- of Zen-Space                                                                                  | Een nieuwe Space in dat Profiel                                                                                          |
| De vastgezette zijbalkitems van Arc, of de vastgezette tabbladen in elke Zen-Space, met hun mappen | De bladwijzers van die Space                                                                                             |
| Favorites van Arc, of Essentials van Zen                                                           | Vastgezette tabbladen, geplaatst volgens je [bereik van vastgezette tabbladen](/nl/bookmarks/#choose-a-pinned-tab-scope) |

De browsegegevens onder elk Profiel hangen af van de browser:

| Gegevens             | Arc                                 | Zen |
| -------------------- | ----------------------------------- | --- |
| Recente geschiedenis | Ja                                  | Ja  |
| Cookies              | Ja, na toegang tot de sleutelhanger | Nee |
| Extensies            | Die uit de Chrome Web Store         | Nee |

Een paar beperkingen die je moet kennen:

- **Open tabbladen gaan niet mee.** Alleen vastgezette items en Favorites of Essentials komen mee. Tabbladen die open stonden maar niet vastgezet waren, blijven in de bronbrowser.
- **De geschiedenis is recent, niet volledig.** De migratie neemt de meest recente geschiedenisitems mee, niet elk bezoek dat je ooit hebt gedaan.
- **Extensies installeren op de achtergrond.** Voor Arc toont het rapport hoeveel extensies uit de Chrome Web Store zijn begonnen met installeren. Extensies van elders gaan niet mee, en de Firefox-extensies van Zen werken niet in Phi.
- **Wachtwoorden en betaalkaarten worden niet gemigreerd.**
- **Spaces uit privévensters van Zen worden overgeslagen.**
- **Vastgezette tabbladen hebben een Space nodig.** Phi maakt alleen een Profiel aan als er minstens één Space aan te maken is. Een bronprofiel zonder Spaces, zoals een Zen-Container die door geen enkele Zen-Space wordt gebruikt, wordt overgeslagen, en het rapport vermeldt hoeveel van zijn vastgezette tabbladen zijn achtergebleven.

Je bronbrowser wordt niet gewijzigd. Arc en Zen houden alles wat ze hadden, dus je kunt migreren, vergelijken en beide browsers blijven gebruiken.

## Het rapport lezen {#reading-the-report}

Het rapport toont elk Profiel en elke Space met wat ermee is gebeurd: hoeveel bladwijzers elke Space heeft gekregen, hoeveel vastgezette tabbladen zijn toegevoegd, en of de geschiedenis, cookies en extensies zijn meegekomen. Is er iets misgegaan, dan vermeldt de samenvatting hoeveel dingen je aandacht nodig hebben, en legt de betreffende rij uit wat er fout ging, bijvoorbeeld **Space niet aangemaakt** of **Bladwijzers konden niet worden bewaard**. Al het andere uit de migratie blijft bewaard, dus één fout maakt de rest niet ongedaan.

## Opnieuw migreren {#migrating-again}

Phi onthoudt dat je vanuit een browser naar je account hebt gemigreerd. Start je opnieuw een migratie vanuit dezelfde browser, dan waarschuwt Phi je eerst: opnieuw migreren maakt een tweede set Profielen en Spaces aan en werkt de eerste niet bij. Kies **Migreer opnieuw** alleen als dat is wat je wilt. Wil je opnieuw beginnen zonder twee kopieën naast elkaar, verwijder dan eerst wat de eerste migratie heeft aangemaakt: eerst de Spaces, daarna de Profielen. Een Space verwijderen laat het bijbehorende Profiel staan, met de cookies, geschiedenis en extensies van dat Profiel. Zie [Een Profiel verwijderen](/nl/spaces/#deleting-a-profile).

Er is geen doorlopende synchronisatie met Arc of Zen. Een migratie is een eenmalige kopie van wat de bron op dat moment had.

## Verder lezen {#what-to-read-next}

- [Importeren en exporteren](/nl/import-export/), bladwijzers en geschiedenis toevoegen aan de Space waarin je zit.
- [Overstappen op Phi](/nl/switching-to-phi/), hoe Spaces, Profielen en vastgezette tabbladen verschillen van Arc en Zen.
- [Spaces en Profielen](/nl/spaces/), de Profielen en Spaces beheren die een migratie aanmaakt.
- [Bladwijzers en vastgezette tabbladen](/nl/bookmarks/), hoe bladwijzers en vastgezette tabbladen zich gedragen zodra ze in Phi staan.
