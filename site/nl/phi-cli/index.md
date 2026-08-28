---
description: "Bestuur Phi Browser vanuit je terminal met het phi-commando: open pagina's, klik, vul formulieren in en maak screenshots in agent-Spaces die de sites hergebruiken waarop je al bent ingelogd."
---

# De Phi-CLI

De **Phi-CLI** brengt Phi's browserautomatisering naar je commandoregel als één enkel commando, **`phi`**. Alles wat een terminalcommando kan uitvoeren, kan er je browser mee besturen: jij, een shellscript, een CI-job of een codeeragent.

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

Anders dan automatiseringstools die een lege wegwerpbrowser starten, bestuurt de CLI **jouw** Phi. Hij is een commandoregel-frontend voor dezelfde motor als de [phi-browser-skill](/nl/phi-browser-skill/), dus alles wat op die pagina staat geldt ook hier: het werk gebeurt in een verborgen **agent-Space** met de sites waarop je al bent ingelogd, het verschijnt als robotsymbool in je Space-kiezer, je kunt live meekijken en je kunt op elk moment de besturing overnemen.

## Installeren

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

Beide installeren het commando `phi`, plus `phibrowser` als alias ervoor. Er is macOS, Node 22 of nieuwer en Phi Browser 2.4.0 of nieuwer voor nodig, want de CLI is een client, geen browser. Ontbreekt Phi Browser of is hij te oud, dan biedt de CLI aan hem voor je te installeren of bij te werken, vanaf dezelfde ondertekende releasefeed waarmee de app zichzelf bijwerkt; `phi install browser` doet hetzelfde zonder vraag vooraf.

Verder is er niets in te stellen. Phi Browser hoeft niet te draaien, want de CLI start hem wanneer dat nodig is. De eerste keer dat de CLI verbindt, toont Phi zijn gebruikelijke goedkeuringsvenster (**Sta eenmalig toe**, **Sta altijd toe** of **Weiger**), en met het goedkeuren van de CLI wordt agentbesturing als onderdeel van die goedkeuring aangezet. Op oudere Phi-builds wordt agenttoegang in plaats daarvan met de hand aangezet in **Instellingen → Ontwikkelaar**; de CLI zegt het je wanneer hij er een tegenkomt.

## De elementenkaart

Na elke navigatie print de CLI de paginakop plus één regel per interactief element, in precies de syntaxis die de actiecommando's accepteren:

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

De `@N`-verwijzingen blijven geldig zolang het element bestaat, dus je kunt de kaart lezen, beslissen en in losse commando's handelen. Na een actie print de CLI alleen wat er op de pagina is veranderd; navigeerde de actie, dan print hij in plaats daarvan de volledige kaart van de nieuwe pagina. Voor scripting geeft `--json` ruwe JSON en onderdrukt `--quiet` de samenvattingen.

Draai `phi help` voor de volledige commandolijst (navigatie, snapshots, screenshots en PDF's, cookies en opslag, wachten, tabbladgroepen, downloads en meer) en `phi help <command>` voor de flags per commando.

## Sessies

Een sessie benoemt één taak en haar agent-Space. De standaardsessie heet `cli`; geef elk afzonderlijk doel zijn eigen sessie met `-s`:

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

Zoals elke agent-Space is de Space van een sessie standaard tijdelijk: hij sluit zichzelf een tijdje nadat de taak stilvalt. Voeg `--persistent` toe wanneer je hem als blijvende werkruimte wilt houden.

## Waar commando's worden uitgevoerd

Standaard gebeurt alles in de verborgen agent-Space van de sessie. Twee dingen verbreden dat:

- **Je eigen vensters.** `phi -U "Work" goto …` (en hetzelfde voor `click`, `fill`, `snapshot` en de rest) bestuurt het zichtbare venster van een van je eigen Spaces in plaats van een verborgen venster. Jouw klikken en die van de CLI wisselen elkaar af in hetzelfde venster, dus hij handelt in kleine stappen en leest de pagina er tussendoor opnieuw.
- **Browserbeheer.** Commando's zoals `space-list`, `bookmark-add`, `rules`, `pins` en `downloads` bedienen je echte browsergegevens in de hele app, in lijn met wat de phi-browser-skill kan.

Beide zitten achter **Instellingen → Ontwikkelaar → “Agents toestaan je Spaces te bedienen”**, standaard uit, precies zoals voor codeeragents. Tot je die aanzet, blijft de CLI beperkt tot zijn eigen agent-Spaces.

## Inloggen

De CLI vraagt je nooit om een wachtwoord in een terminal te plakken. Inloggen loopt via de [Wachtwoordmanager voor agents](/nl/agent-passwords/): met `phi cred-fill` vult Phi een inlogveld rechtstreeks vanuit je kluis, zodat het geheim van de app naar de pagina reist zonder door de CLI te gaan, en elk verzoek opent Phi's goedkeuren-of-weigeren-venster dat benoemt wie er vraagt en waarvoor. Invullen is gebonden aan de site waar de inloggegevens bij horen, 2FA-codes worden nooit aan automatisering vrijgegeven, en elk geheim dat een commando aanraakte wordt uit de uitvoer gewist.

## Jij houdt de regie

De CLI erft de samenwerkingsregels van de skill. Klik op het robotsymbool in je Space-kiezer om live mee te kijken met een sessie, en kies **Neem besturing over** wanneer je maar wilt. Zolang jij het stuur vasthoudt, worden de muterende commando's van de CLI geweigerd tot je teruggeeft. Wanneer een stap van jou is (inloggen, een captcha, een 2FA-code) is de route `phi handoff "Sign in, then hand back"`: Phi toont je een melding, jij doet de menselijke stap, en het werk gaat verder wanneer je de besturing teruggeeft.

Eén ding om te weten voordat je automatisering richt op een account dat je dierbaar is: sommige sites willen geen agents, en daar handelen ze naar. Reddit is het bekende voorbeeld, en accounts die als geautomatiseerd worden aangemerkt worden beperkt of verbannen. Wat de CLI op jouw instructie doet is van jou, en dat risico ligt bij jou; het is niets wat wij namens jou kunnen aanvechten of terugdraaien.

## De skill installeren vanuit de terminal

De CLI kan ook zelf de [phi-browser-skill](/nl/phi-browser-skill/) instellen:

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

Dit is hetzelfde wat de knoppen **De phi-browser-skill installeren** in **Instellingen → Ontwikkelaar** doen, zonder de terminal te verlaten: het koppelt de skill die in Phi is meegeleverd aan de skillsmap van elke agent, zodat hij met elke Phi-update actueel blijft.

::: tip Niet hetzelfde als Browser Skills
[Browser Skills](/nl/skills/) zijn de workflows die je de assistent binnen Phi leert. Wat `phi install skill` installeert is de phi-browser-skill, het pakket waarmee een externe codeeragent Phi kan besturen.
:::

## Volgende stappen

- [De phi-browser-skill](/nl/phi-browser-skill/), agent-Spaces, live meekijken met agents en hoe toegang is ingeperkt. Het geldt allemaal ook voor de CLI.
- [Wachtwoordmanager voor agents](/nl/agent-passwords/), hoe automatisering inlogt met je kluis zonder je wachtwoorden te zien.
- [Spaces & Profielen](/nl/spaces/), de werkruimtes en inlogidentiteiten waarop agent-Spaces zijn gebouwd.
