---
description: "Lees hoe de Time Machine-terugzetmomentopnamen van Phi Browser werken, wanneer ze worden gemaakt, hoe terugzetten verschilt van Apple's Time Machine, en wanneer je gebruikersgegevens exporteert."
---

# Time Machine-back-ups

Time Machine is het vangnet van Phi voor updates. Vóór bepaalde grote updates bewaart Phi automatisch een momentopname van de huidige versie en je gegevens, zodat je kunt teruggaan naar de versie waarop je zat als een nieuwe uitgave niet werkt zoals je verwachtte. Het bestaat voor die zeldzame update die veel tegelijk verandert.

## Wat het is, en wat het niet is

Phi's Time Machine is een functie voor het **terugzetten van versies**, geen algemeen back-upgereedschap. Een paar dingen waarmee het makkelijk te verwarren is:

- Het is **niet** Apple's Time Machine. Het maakt geen reservekopie van je Mac en heeft niets te maken met de systeemfunctie met dezelfde naam.
- Het is **geen** doorlopende, geplande back-up van je browsen. Phi maakt niet elke dag een momentopname en laat je geen willekeurig tijdstip kiezen. Een momentopname wordt automatisch gemaakt, af en toe, vlak vóór een update die meer risico draagt dan gebruikelijk.

Wil je een back-up waarover jij de regie hebt, om naar een nieuwe Mac te verhuizen of een kopie te bewaren voordat je gaat experimenteren, gebruik dan **Exporteer gebruikersgegevens** (zie [Je eigen gegevens exporteren](#exporting-your-own-data) hieronder).

## Wanneer een momentopname wordt gemaakt

Je start een Time Machine-momentopname niet zelf. Phi maakt er automatisch een, vlak voordat het opstart in een update die ervoor in aanmerking komt, en slechts één keer per zo'n update. De meeste updates veroorzaken er helemaal geen. Wanneer er wel een momentopname bestaat, bevat die de Phi-gegevens die bij de vorige versie horen, dus je bladwijzers, Spaces, vastgezette tabbladen, instellingen, Geheugen en browsestatus, samen met een aantekening bij welke appversie ze horen, zodat terugzetten een consistente opstelling herstelt in plaats van een verkeerde mix. De app zelf zit niet in de momentopname; die wordt tijdens het terugzetten gedownload.

Momentopnamen worden **lokaal op je Mac** bewaard. Ze worden niet naar de cloud geüpload, zijn niet aan je account gekoppeld en kunnen niet naar een andere Mac worden verplaatst.

## Teruggaan naar een eerdere versie

1. Open het **Help**-menu en zoek **Time Machine-back-ups**.
2. Elke beschikbare momentopname staat vermeld met versie, build en datum, bijvoorbeeld _Phi 1.6 (590) op 2026.6.11_. Zijn er geen, dan toont het menu **Geen back-ups beschikbaar**.
3. Kies de momentopname die je wilt. Phi vraagt om bevestiging met **"Time Machine-back-up terugzetten?"** en meldt daarbij dat _Phi stopt en de back-up terugzet, en dat de huidige app en de geselecteerde gebruikersgegevens worden vervangen._
4. Kies **Zet terug**. Phi downloadt de vorige versie, vervangt de huidige app en de bijbehorende gegevens, en start opnieuw op in de teruggezette versie.

Omdat het terugzetten de vorige versie ophaalt, heb je tijdens het terugzetten een internetverbinding nodig. Het terugzetten is zo ontworpen dat het óf afrondt óf veilig herstelt na een onderbreking, dus stoppen of crashen halverwege laat Phi niet kapot achter.

## Je eigen gegevens exporteren {#exporting-your-own-data}

Time Machine regelt het terugzetten bij updates. Voor een back-up die je zelf maakt en op je eigen voorwaarden bewaart, gebruik je **Beheer gebruikersgegevens** in het **Help**-menu:

- **Exporteer gebruikersgegevens…** bewaart je Phi-gegevens als één bestand dat je overal kunt opslaan.
- **Importeer gebruikersgegevens…** vervangt je huidige Phi-gegevens door een bestand dat je eerder hebt geëxporteerd, en start Phi daarna opnieuw op.

Dit is het juiste gereedschap om naar een nieuwe Mac te verhuizen of een eigen kopie te bewaren, het deel dat Time Machine bewust niet dekt.

## Hoe dit samenhangt met de rest van Phi

Een Time Machine-momentopname bevat de gegevens achter [Spaces en Profielen](/nl/spaces/) en [Geheugen](/nl/memory/), dus terugzetten brengt die terug naar hoe ze bij de momentopname waren. Alles blijft op je Mac, in lijn met de local-first-aanpak van Phi zoals beschreven in [Privacy en je gegevens](/nl/privacy/).
