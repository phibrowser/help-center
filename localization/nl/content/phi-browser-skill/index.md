---
description: "Laat AI-codeeragents zoals Claude Code Phi Browser besturen in hun eigen agent-Spaces. Installeer de phi-browser-skill, kijk live mee met agents en neem op elk moment de besturing over."
---

# De phi-browser-skill

De **phi-browser-skill** verbindt Phi met AI-codeeragents die buiten de browser leven: **Claude Code, Codex, Cursor, OpenClaw, Pi en Hermes**. Installeer hem in je agent en de agent kan Phi rechtstreeks besturen: pagina's openen, formulieren invullen, screenshots maken, gegevens uitlezen, webapps testen, alles waar een echte browser voor nodig is.

::: tip Niet hetzelfde als Browser Skills
Dit is één skill, enkelvoud, en hij hoort bij je codeeragent. **[Browser Skills](/nl/skills/)** zijn de omgekeerde richting: instructies die je Phi's eigen assistent leert, binnen de browser. De phi-browser-skill is iets wat Phi aan _jouw agent_ meegeeft, zodat die agent Phi als zijn browser kan gebruiken.
:::

Wat hem ongewoon maakt is _waar_ de agent werkt. Hij neemt je venster niet over, en hij draait geen aparte, uitgeklede browser. Hij werkt in zijn eigen **agent-Space**, een verborgen browservenster met je echte inlogstatus, terwijl jij verder browst. Je kunt live meekijken, op elk moment de besturing overnemen en die weer teruggeven wanneer je klaar bent.

## Agent-Spaces

Phi is gebouwd rond [Spaces](/nl/spaces/), gescheiden werkruimtes die elk aan een profiel met eigen inloggegevens zijn gekoppeld. Wanneer een codeeragent aan een taak begint, geeft Phi hem een eigen **agent-Space**: een echt browservenster, verborgen gestart, dat in je Space-kiezer verschijnt als een klein robotsymbool (🤖) met een statusbadge. Meerdere agents krijgen genummerde symbolen (R1, R2, enzovoort), zodat je ze uit elkaar houdt.

Klik op het symbool om de agent in realtime aan het werk te zien. Phi geeft de acties van de agent native weer: de cursor glijdt naar zijn doel, klikken rimpelen, getypte velden lichten op, en je kunt precies volgen wat hij doet. Terwijl je kijkt, negeert de pagina je eigen klikken en toetsaanslagen, zodat je de agent niet per ongeluk stoort. De enige weg naar binnen is de expliciete knop **Neem besturing over**.

Twee menuonderdelen maken dit af. **Weergave → Agenttranscript** opent een console met het verslag, de acties en het gesprek van de agent, en van daaruit kun je de agent ook commando's terugsturen. **Weergave → Automatische agentweergave** volgt automatisch de agent die op dat moment aan het werk is.

Agent-Spaces ruimen zichzelf standaard op. Een tijdelijke Space sluit zichzelf kort nadat de taak stilvalt, zodat afgeronde taken zich niet opstapelen in je kiezer. Een agent maakt alleen een blijvende werkruimte aan wanneer jij daar uitdrukkelijk om vraagt.

## Jij kunt altijd het stuur overnemen

Slechts één kant bestuurt een agent-Space tegelijk, en jij wint altijd. Het zwevende label boven in een agent-Space benoemt de besturende agent en toont de knoppen voor wie het stuur vasthoudt:

- Terwijl de agent bestuurt, stopt **Neem besturing over** hem onmiddellijk, en elke actie die hij daarna nog probeert wordt geweigerd tot jij teruggeeft.
- Terwijl jij bestuurt, geeft **Geef besturing terug** de besturing terug aan de agent, die verdergaat waar hij was gebleven, en beëindigt **Klaar** de taak.

De overdracht werkt ook de andere kant op. Stuit de agent op een stap die van jou is, zoals inloggen, een captcha, een 2FA-code of een keuze met gevolgen, dan geeft hij de besturing terug en toont Phi een melding, **“De agent heeft je nodig”**, met een knop die je rechtstreeks in de agent-Space brengt. Doe de menselijke stap, klik op **Geef besturing terug** en de agent gaat verder.

## Je logins, bewust hergebruikt

Een agent-Space is gekoppeld aan een van je bestaande profielen, dus de agent browst met de sites waarop je al bent ingelogd. Dat is precies de bedoeling: hij kan verdergaan waar jij bent, in plaats van te beginnen met een lege browser.

Jij bepaalt hoe ver dat gaat. **Profielen die agents mogen gebruiken**, in het tabblad Ontwikkelaar, beperkt in welke profielen agents mogen werken. Sta je ze geen enkel profiel toe, dan maakt Phi een speciaal profiel “Agent” aan, zodat agents toch kunnen werken zonder je eigen logins aan te raken. En wanneer een taak ergens moet inloggen, vraagt de agent je niet om een wachtwoord te plakken. Dat loopt via de [Wachtwoordmanager voor agents](/nl/agent-passwords/), waar elk verzoek jouw goedkeuring nodig heeft.

## Wat de agent doet, is van jou

Dit is het deel dat je twee keer wilt lezen, want het ontgaat je snel wanneer je iets vanzelf ziet werken.

Een agent die Phi bestuurt handelt **als jij**, vanuit jouw browser, met jouw sessies. Wat hij op jouw instructie doet is van jou, op onze diensten en op die van iedereen, en de voorwaarden van de sites die hij bezoekt gelden voor jou precies zoals wanneer je alles zelf had aangeklikt.

**Sommige sites willen geen agents, en daar handelen ze naar.** Veel sites beschouwen geautomatiseerde toegang als een bedreiging voor hun bedrijf, omdat hun content hun bedrijf is, en ze sporen die agressief op. Reddit is het bekende voorbeeld: accounts die als geautomatiseerd worden aangemerkt, worden beperkt of verbannen, en die keuze is aan hen, niet aan ons. Stuur een agent naar een site die hem niet verwelkomt en je kunt daar je account verliezen, je geschiedenis en alles wat je er bewaarde. Dat risico is van jou, en het is niets wat wij namens jou kunnen aanvechten of terugdraaien.

**Acties met gevolgen zijn aan jou om goed te keuren.** Een agent kan dingen kopen, berichten versturen, formulieren indienen en instellingen wijzigen op diensten waarop je bent ingelogd. Bekijk wat hij gaat doen voordat je hem laat doorgaan. Waar Phi je om bevestiging vraagt, doet die bevestiging echt werk.

Onze [Gebruiksvoorwaarden](https://phibrowser.com/terms/) leggen dit volledig vast.

## Instellen

Alles zit achter **Ontwikkelaarsmodus**, en die staat standaard uit. Drie stappen:

1. **Zet Ontwikkelaarsmodus aan** in **Instellingen → Algemeen**. Dit maakt het tabblad Ontwikkelaar zichtbaar, met daarin agenttoegang, machtigingen en de wachtwoordmanager.
2. **Installeer de skill** via **Instellingen → Ontwikkelaar → De phi-browser-skill installeren**. De knop **Skill toevoegen aan…** toont elke ondersteunde agent, of **Alle agents**, en koppelt de skill die in Phi is meegeleverd aan de skillsmap van die agent, zodat hij met elke Phi-update actueel blijft. Er is Node 22 of nieuwer voor nodig, en start een net geconfigureerde agent daarna opnieuw. In Pi volstaat `/reload`.
3. **Sta agents toe te verbinden** met **Instellingen → Ontwikkelaar → Agentbesturing → “Agents toestaan Phi te besturen (CDP)”**. Dit geldt onmiddellijk, zonder herstart.

De eerste keer dat een bepaalde agent echt verbindt, identificeert Phi het verbindende proces, inclusief de codehandtekening, en vraagt het jou: **Sta eenmalig toe**, **Sta altijd toe** of **Weiger**. Er bereikt niets de browser tot jij goedkeurt. Agents die je hebt goedgekeurd staan onder **Toegestane agents** in hetzelfde tabblad, gemarkeerd met “Altijd” of “Deze sessie”. Verwijder er een en hij vraagt het de volgende keer opnieuw.

## Hoe toegang is ingeperkt

De verbinding is zo ontworpen dat niets erbij kan wat jij niet hebt goedgekeurd:

- Phi luistert op een **privésocket die alleen processen op deze Mac kunnen bereiken**, geen netwerkpoort. Niets op je netwerk, en geen andere gebruiker op de Mac, kan er verbinding mee maken.
- Elke verbinding krijgt **per agent toestemming**, geverifieerd aan de identiteit van het verbindende proces.
- **“Agents toestaan Phi te besturen (CDP)”** uitzetten stopt nieuwe verbindingen en verbreekt lopende verbindingen onmiddellijk.
- Standaard kunnen agents alleen in **hun eigen agent-Spaces** werken. Aan je echte browsegegevens komen, dus je Spaces, bladwijzers, vastgezette tabbladen, URL-regels en vensterindeling, is een aparte machtiging, **“Agents toestaan je Spaces te bedienen”**, die ook standaard uitstaat.
- **Ontwikkelaarsmodus** uitzetten is de noodschakelaar. Hij schakelt agenttoegang en de [Wachtwoordmanager voor agents](/nl/agent-passwords/) samen uit, en niets wordt automatisch opnieuw ingeschakeld wanneer je hem weer aanzet.

## Volgende stappen

- [De Phi-CLI](/nl/phi-cli/), dezelfde automatisering als een `phi`-commando in je terminal, voor scripts en snelle losse klussen.
- [Wachtwoordmanager voor agents](/nl/agent-passwords/), hoe agents inloggen met je kluis zonder je wachtwoorden te zien.
- [Browser Skills](/nl/skills/), de andere soort skill, aangeleerd aan Phi's eigen assistent.
- [Spaces & Profielen](/nl/spaces/), de werkruimtes en inlogidentiteiten waarop agent-Spaces zijn gebouwd.
- [Automatisering & Phi Link](/nl/automation/), wat Phi's eigen assistent namens jou kan doen.
