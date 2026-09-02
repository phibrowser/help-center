---
description: "Bekijk een voorbeeld van een link in een zwevend paneel boven de pagina die je leest in Phi Browser, en sluit het daarna, open het als tabblad of open het als Split View."
---

# Peek-weergave

Een Peek is een zwevend paneel dat een pagina toont boven op de pagina die je aan het lezen bent. Volg een link, lees wat er staat, sluit hem, en je bent terug waar je begon, zonder extra tabblad om op te ruimen.

Peek werkt in de modi **Gebalanceerd** en **Prestaties**. De modus Comfortabel opent elke link in plaats daarvan als een gewoon tabblad. Peek staat ook uit in Incognito-Spaces.

## Een Peek openen

Er zijn drie manieren om er een te krijgen:

- **Volg een link vanuit een bladwijzer of vastgezet tabblad.** Wanneer een link in een bladwijzer of vastgezet tabblad naar een andere site leidt, toont Phi er een voorbeeld van in een Peek, in plaats van dat tabblad van zijn pagina weg te halen. Links die op dezelfde site blijven, navigeren gewoon ter plekke. Deze automatische Peek heeft een eigen schakelaar, beschreven onder [Peek-instellingen](#peek-settings).
- **Shift-klik op een link.** Dit werkt in elk gewoon tabblad, niet alleen in bladwijzers en vastgezette tabbladen.
- **Klik met de rechtermuisknop op een link en kies "Link openen in Peek-weergave".** Zelfde resultaat als Shift-klik, via het rechtsklikmenu van de pagina.

"Een andere site" betekent een ander domein. Subdomeinen van dezelfde site, zoals van het ene Google-onderdeel naar het andere gaan, tellen als dezelfde site en openen zoals gebruikelijk ter plekke. Links die geen webpagina zijn, zoals `mailto:`-adressen, openen nooit in een Peek.

Shift-klik en het rechtsklikitem zijn niet beschikbaar vanuit een deelvenster van een Split View of vanuit een Peek zelf. Op die plekken opent een link zoals normaal.

## In het paneel

De pagina vult het paneel van rand tot rand. In de strook rechts ervan staan drie knoppen:

| Knop                    | Wat hij doet                                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sluit**               | Sluit het voorbeeld en de bijbehorende pagina.                                                                                                            |
| **Open als tabblad**    | Maakt van het voorbeeld een gewoon tabblad. De pagina wordt niet opnieuw geladen, dus de scrollpositie en alles wat je hebt getypt blijven zoals ze zijn. |
| **Open als Split View** | Plaatst het voorbeeld naast het tabblad waar het vandaan komt, als een Split View met twee deelvensters.                                                  |

## Een Peek sluiten

Met elk van deze acties verdwijnt het voorbeeld:

- Druk op **Escape** of **⌘W**.
- Klik op de pagina rondom het paneel.
- Gebruik **Terug** of **Vooruit**, of typ een adres in de adresbalk. Beide gelden als "het voorbeeld verlaten", dus de Peek sluit en het onderliggende tabblad blijft waar het was.
- Klik op de minknop op de zijbalkrij of het vastgezette tabblad waar de Peek vandaan komt.
- Sluit het tabblad waar de Peek vandaan komt. Zijn Peek gaat mee.

## Eén Peek per tabblad

Elk tabblad kan zijn eigen Peek dragen, en alleen de Peek van het tabblad waar je naar kijkt, staat op het scherm. Wissel je naar een ander tabblad, dan verdwijnt het paneel; wissel je terug, dan komt het terug met de pagina zoals je die achterliet. Open je een tweede Peek vanuit hetzelfde tabblad, dan vervangt die de eerste.

Zolang een tabblad een Peek draagt, verschijnt de favicon van de pagina in de Peek aan het einde van de zijbalkrij van dat tabblad, of als een kleine badge op de hoek van een vastgezet tabblad. Beweeg de aanwijzer eroverheen en hij verandert in een minknop die de Peek sluit.

Peeks overleven een herstart. Wanneer Phi je sessie herstelt, komt een Peek terug bij het tabblad waar hij bij hoorde.

## Peek-instellingen {#peek-settings}

Open **Instellingen**, ga naar het tabblad **Navigatie** en kijk onder **Peek**. Daar staan twee schakelaars, allebei standaard aan.

- **Schakel Peek-weergave in** is de hoofdschakelaar. Staat hij uit, dan krijgen links hun gewone gedrag terug: een link naar een andere site in een bladwijzer of vastgezet tabblad opent als een nieuw tabblad, Shift-klik opent een nieuw venster, en het rechtsklikitem verdwijnt. Een Peek die op dat moment openstaat, wordt een gewoon tabblad in plaats van te verdwijnen. Overschakelen naar de modus Comfortabel doet hetzelfde.
- **Open automatisch een Peek vanuit vastgezette tabbladen en bladwijzers** regelt alleen het automatische geval. Zet je hem uit, dan opent een link naar een andere site in een bladwijzer of vastgezet tabblad als een nieuw tabblad, terwijl Shift-klik en **Link openen in Peek-weergave** blijven werken. Kies dit als je alleen een Peek wilt wanneer je er zelf om vraagt.

De tweede schakelaar volgt de eerste. Zet je **Schakel Peek-weergave in** uit, dan gaat de automatische optie mee uit, en zet je hem weer aan, dan komt de automatische optie terug. Hij is gedimd zolang Peek-weergave uitstaat.

Wil je weten hoe bladwijzers en vastgezette tabbladen überhaupt aan hun pagina gebonden blijven, zie dan [Bladwijzers en vastgezette tabbladen](/nl/bookmarks/). Voor pagina's naast elkaar en de rest van de zijbalkworkflow, zie [Lay-outs en navigatie](/nl/layouts/).
