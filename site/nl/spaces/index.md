---
description: "Ontdek hoe Phi Browser Spaces gebruikt voor werkruimten en Profielen voor gescheiden cookies, geschiedenis, inloggegevens, extensies, URL-regels, bladwijzers en vastgezette tabbladen."
---

# Spaces en Profielen

Met Spaces en Profielen houd je gescheiden werelden bij elkaar in één browser, of dat nu werk en privé is, een nevenproject, een klant of een onderzoeksonderwerp, zonder met vensters te goochelen of steeds in en uit te loggen. Het zijn twee lagen met elk een eigen taak, en Phi houdt ze eenvoudig door de ene op de andere te laten rusten.

## De twee lagen

- Een **Space** is een werkruimte in de zijbalk. Hij heeft zijn eigen naam, symbool en kleur, en zijn eigen bladwijzers. Wissel je van Space, dan kleedt de zijbalk zich om naar de taak waar je mee bezig bent.
- Een **Profiel** is de isolatielaag eronder. Elk Profiel heeft zijn eigen cookies, geschiedenis, inloggegevens en extensies, zodat twee Profielen tegelijk met verschillende accounts bij dezelfde website ingelogd kunnen zijn.

De relatie werkt één kant op: **elke Space hoort bij één Profiel, en één Profiel kan meerdere Spaces dragen.** Spaces die een Profiel delen, delen dezelfde inloggegevens. De zichtbaarheid van vastgezette tabbladen is instelbaar en kan het bereik Space, Profiel of App volgen; aan de isolatie van Profielen verandert dat niets.

Een eenvoudig ezelsbruggetje: **Spaces bepalen hoe alles eruitziet en aanvoelt; Profielen bepalen wat er onderliggend gescheiden blijft.**

## Wat er in een Space leeft

- **Een naam, een symbool en een kleur.** Kies uit de ingebouwde symbolenset van Phi of gebruik een emoji, zodat elke Space in de zijbalk in één oogopslag herkenbaar is.
- **Eigen bladwijzers.** Elke Space heeft een onafhankelijke set bladwijzers, zodat de bewaarde pagina's van een werk-Space een persoonlijke Space niet vervuilen.
- **Een eigen thema (optioneel).** Een Space kan een eigen kleurenthema gebruiken of je algemene thema volgen. Wissel je naar de Space, dan wordt zijn thema toegepast, zodat het venster past bij de context waarin je werkt.
- **Vastgezette tabbladen** volgen het bereik dat je kiest in **Instellingen → Spaces**. Elke Space kan zijn eigen set hebben, Spaces met hetzelfde Profiel kunnen ze delen, of alle gewone Profielen en Spaces delen één set. Zie [Bladwijzers en vastgezette tabbladen](/nl/bookmarks/#choose-a-pinned-tab-scope) voor de details.

## Spaces aanmaken, wisselen en beheren

- **Maak** een Space aan vanuit de Spaces-strook in de zijbalk. Je geeft hem een naam en kiest bij welk Profiel hij hoort, of je maakt daar direct een **Nieuw profiel** aan als deze Space volledig op zichzelf moet staan.
- **Wissel** tussen Spaces vanuit de zijbalk met één klik. De tabbladen, bladwijzers en het thema van de zijbalk veranderen mee, en Phi opent het venster van de Space opnieuw als het nog niet open is.
- **Wijzig naam**, **Wijzig symbool** en **Wijzig thema** vind je in het menu van de Space. Kies **Volg algemeen thema** om een themakeuze per Space weer los te laten.
- **Verwijder** een Space via hetzelfde menu, of met **Spaces → Verwijder Space…** in de menubalk. Bij het verwijderen van een Space verdwijnen ook de bladwijzers en URL-regels die erbij horen, en dat kan niet ongedaan worden gemaakt. Staat het bereik van vastgezette tabbladen op **Space**, dan worden de vastgezette tabbladen van die Space ook verwijderd. Vastgezette tabbladen met het bereik Profiel of App blijven staan.
- **Er is geen vaste standaard-Space.** Elke Space kan worden verwijderd, ook de Space die Phi aanmaakte toen je het voor het eerst opende. De enige regel is dat Phi altijd minstens één gewone Space bewaart, over alle Profielen heen, zodat **Verwijder** niet wordt aangeboden zolang er nog maar één Space over is. Maak eerst een andere Space aan en verwijder daarna de Space die je niet meer wilt. Incognito-Spaces tellen daarbij niet mee; die worden gesloten, niet verwijderd.

## URL-regels: stuur overeenkomende sites automatisch door {#url-rules-route-matching-sites-automatically}

**URL-regels** herkennen een website en openen die in een gewone Space, Incognito of Kiosk, waar je de link ook aanklikt of intypt.

Open **URL-regels…** via het menu **Spaces** in de menubalk, of open **Instellingen → Navigatie** en klik op **Beheer URL-regels…**. Elke regel herkent op basis van:

- **Domeinsuffix**, `figma.com` en alle subdomeinen ervan.
- **Domein**, precies één host, zoals `www.example.com`.
- **Domein bevat**, elke host die een woord bevat, zoals `git`.
- **URL**, een host plus het begin van een pad, zoals `example.com/team`.

Een regel kan een gewone Space, **Incognito** of **Kiosk** als doel hebben. **Incognito** stuurt overeenkomende websites naar een [Incognito-Space](/nl/incognito/), die zo nodig wordt aangemaakt. **Kiosk** opent elke overeenkomende site in een lichtgewicht venster buiten je Spaces. Zie [Kiosk](/nl/kiosk/) voor hoe die vensters werken.

Zet een regel op **Elke keer vragen** in plaats van stil doorsturen. Opent een overeenkomende link, dan toont Phi de keuze **In welke Space openen?** zodat je zelf kiest. Je huidige Space is gemarkeerd, en je kunt de pagina ook laten waar je bent. Als meerdere regels van toepassing kunnen zijn, wint de meest specifieke (een langer pad wint van een korter pad; een exacte host wint van een wildcard).

## Incognito-Spaces: een Space zonder sporen

Voor browsen dat niets mag achterlaten opent **Archief → Nieuwe Incognito-Space** een privé-Space direct in de Spaces-strook van de zijbalk. Hij voelt als dezelfde werkruimte, maar er zit een sessie in het werkgeheugen achter in plaats van een Profiel: geen bladwijzers, geen vastgezette tabbladen, geen AI, en er wordt niets naar schijf geschreven. Sluit je hem, dan wordt de sessie vernietigd. Zie [Incognito-Spaces](/nl/incognito/) voor het volledige verhaal.

## Hoe dit aansluit op de rest van Phi

Spaces bouwen voort op de zijbalkwerkruimte uit [Lay-outs en navigatie](/nl/layouts/), en kleuren per Space gebruiken hetzelfde palet als [Thema's en weergave](/nl/themes/). Stap je over van Arc of Dia, zie dan [Overstappen naar Phi](/nl/switching-to-phi/) voor de migratievergelijking. Omdat Profielen cookies en geschiedenis isoleren, is wat de assistent kan zien beperkt tot het Profiel waarin je browst. Zie [Privacy en je gegevens](/nl/privacy/) voor hoe er met je gegevens wordt omgegaan.
