---
description: "Laat agents inloggen met inloggegevens uit je Bitwarden-kluis. Goedkeuringsvragen bij elk verzoek, automatisch invullen dat geheimen verborgen houdt, sessietime-outs en intrekbare goedkeuringen."
---

# Wachtwoordmanager voor agents

Vroeg of laat stuit een agent die in Phi werkt op een inlogscherm. Een wachtwoord in een chat plakken is precies het verkeerde antwoord, dus Phi heeft een beter antwoord. De **Wachtwoordmanager voor agents** verbindt agents met je wachtwoordmanager, op dit moment **Bitwarden**, zodat ze bij sites kunnen inloggen met inloggegevens uit je kluis. Hij is zo ontworpen dat, in de meeste gevallen, **de agent het wachtwoord helemaal niet te zien krijgt**.

Hij staat standaard uit, elk afzonderlijk verzoek vraagt eerst jou om toestemming, en elke doorlopende goedkeuring kun je op elk moment intrekken.

## Waarom Bitwarden

Een AI-agent een route naar je wachtwoorden geven is een kwestie van vertrouwen, dus de kluis erachter hoort geen black box te zijn. Bitwarden is **open source**, dus de clients en de server kunnen door iedereen worden gecontroleerd, en het **ondersteunt self-hosting**, zodat je je kluis kunt bewaren op een server die jij beheert in plaats van in de cloud van iemand anders. Zo bepaal jij van begin tot eind waar je inloggegevens staan: jouw kluis op jouw infrastructuur, ontgrendeld op je Mac, en alleen vrijgegeven wanneer jij goedkeurt. Het hulpproces van Phi bouwt voort op de officiële Bitwarden-SDK, en zelfgehoste servers worden ondersteund bij het inloggen.

Het is goed om helder te hebben wie hier welke rol speelt. **Bitwarden is de aanbieder van de kluisdienst**, en je relatie daarvoor is met Bitwarden, onder hun voorwaarden en hun privacybeleid. Jij kiest of je kluis op bitwarden.com staat, op bitwarden.eu, of op een server die je zelf host, en die keuze bepaalt waar je kluis leeft en onder welk recht hij valt. Phi's rol is hem op je Mac te ontgrendelen en één enkel inloggegeven aan een agent door te geven wanneer jij dat specifieke verzoek goedkeurt. Je kluis bereikt Phinomenon nooit, en je hoofdwachtwoord ook niet.

## Hoe geheimen buiten bereik blijven

Je kluis wordt niet in de browser geopend. Phi levert een **apart hulpproces** mee dat namens de app met Bitwarden praat. Inloggegevens voor Phi en voor agentverzoeken blijven bij dat hulpproces, en **wachtwoorden komen nooit in het browserproces terecht**. De ontgrendelde kluissleutel bestaat alleen in het geheugen van het hulpproces en wordt gewist zodra de kluis vergrendelt. Het hulpproces accepteert alleen verbindingen van Phi zelf, en Phi controleert de codehandtekening van het hulpproces voordat het er ook maar iets aan toevertrouwt.

Daarbovenop is automatisch invullen de standaardmanier waarop agents inloggegevens gebruiken, en dat houdt het geheim volledig bij de agent weg. Phi vult het veld op de pagina zelf in, en de agent hoort alleen dat het invullen is gebeurd.

## Inschakelen

De Wachtwoordmanager voor agents staat in het tabblad **Ontwikkelaar** van de instellingen, dat verschijnt zodra **Ontwikkelaarsmodus** aanstaat:

1. Open **Instellingen → Algemeen** en zet **Ontwikkelaarsmodus** aan.
2. Zoek in het tabblad **Ontwikkelaar** de **Wachtwoordmanager voor agents** en zet **Bitwarden-wachtwoordmanager** aan.
3. Log in met je Bitwarden-account. Amerikaanse, Europese en zelfgehoste servers worden ondersteund, ook voor accounts met tweestapsverificatie. Ontgrendel daarna de kluis met je hoofdwachtwoord.

Bij het inschakelen kan Phi ook aanbieden de **Bitwarden-browserextensie** uit de Chrome Web Store te installeren. Die extensie is een los gemak voor _jou_: hij vult je inloggegevens automatisch in terwijl je zelf browst. Agentverzoeken gebruiken hem niet en hebben hem niet nodig, dus je kunt hem afslaan met **Niet nu** en agenttoegang blijft werken.

## Elk verzoek vraagt jou eerst

Wanneer een agent om inloggegevens vraagt, toont Phi een goedkeuringsvenster dat benoemt **welke agent** het vraagt en **welke site of welk item** het wil, samen met de reden die de agent opgeeft. Er wordt niets vrijgegeven tot jij antwoordt, en een genegeerd venster **wijst zichzelf na 60 seconden af**.

Het venster geeft je echte keuzes, niet alleen OK:

- Kies **Keur goed** of **Weiger**.
- Kies hoe lang de goedkeuring geldt: **Eenmalig**, **Voor 10 min** of **Altijd**.
- Kies eventueel **Toepassen op alle agents** in plaats van alleen de agent die vraagt. Dit is niet beschikbaar bij eenmalige goedkeuringen.

Is de kluis vergrendeld wanneer er een verzoek binnenkomt, dan vraagt Phi eerst je **hoofdwachtwoord** om hem te ontgrendelen. Dat wachtwoord gaat rechtstreeks naar het hulpproces en wordt nooit door de browser bewaard.

## Drie niveaus van blootstelling

Niet alle verzoeken zijn gelijk, en het venster is eerlijk over het verschil. Elk verzoek is van een van drie soorten, met een kleurcode voor hoe ver het geheim reist:

| Soort                              | Wat er werkelijk gebeurt                                                                                                                                                                                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 **Alleen automatisch invullen** | Phi vult de opgeslagen inloggegevens zelf op de pagina in. De agent start het invullen, maar **ontvangt nooit de gebruikersnaam of het wachtwoord**.                                                                                                                                                |
| 🟠 **Commandogebruik**             | De waarde wordt aan de agent vrijgegeven zodat een commando dat hij uitvoert die kan gebruiken, bijvoorbeeld een databasewachtwoord dat in de omgeving van een CLI wordt geïnjecteerd. De tooling van de agent wist hem uit de uitvoer, maar Phi kan niet voorkomen dat de agent de waarde bewaart. |
| 🔴 **Volledige toegang**           | Het opgeslagen item, dat een wachtwoord, notitie, kaart, identiteit of sleutel kan zijn, wordt rechtstreeks met de agent gedeeld, en de agent kan het in zijn context vastleggen.                                                                                                                   |

Een onthouden goedkeuring dekt alleen de soort waarvoor hij is verleend. Een goedkeuring voor alleen automatisch invullen laat een agent nooit het wachtwoord zelf lezen.

Automatisch invullen heeft een extra vangnet: invullen is **aan de herkomst gebonden**. Hoort de pagina waarop een agent zich bevindt niet bij de site waarvoor de inloggegevens zijn opgeslagen, dan weigert Phi het invullen, want precies zo zou een misleidende pagina een wachtwoord proberen te stelen. Ingevulde wachtwoorden blijven bovendien gemaskeerd op de pagina, ook als er op een knop “toon wachtwoord” wordt geklikt.

## Wat agents nooit krijgen

Over sommige grenzen gaat het nooit, wat er ook is goedgekeurd:

- **Codes voor twee-factor-authenticatie worden nooit vrijgegeven.** Een agent een live 2FA-code geven zou beide factoren achter één venster laten samenvallen, dus die stap blijft altijd van jou. De agent geeft de besturing terug en jij voert de code zelf in.
- **Bij twijfel wordt niets vrijgegeven.** Passen meerdere kluisitems bij een verzoek, dan weigert Phi en vraagt het de agent om preciezer te zijn, in plaats van namens jou een account te gokken.
- **Alles wordt gelogd, zonder waarden.** Elk verzoek wordt vastgelegd in een auditlogboek: welke agent, welke site en welk soort toegang, nooit de geheimen zelf.

De kluis dient voor meer dan inloggegevens: ook veilige notities, kaarten, identiteiten en SSH-sleutels kunnen worden opgevraagd, maar alleen inloggegevens kunnen ooit automatisch op een pagina worden ingevuld. Al het andere loopt via dezelfde expliciete goedkeuringsvensters hierboven.

## Goedkeuringen bekijken en intrekken

**Agentgoedkeuringen voor inloggegevens…**, in hetzelfde instellingenonderdeel, toont elke doorlopende goedkeuring: welke agent, welke site, welk soort toegang en hoe lang hij geldt. Goedkeuringen met een tijdslimiet verlopen vanzelf. Goedkeuringen op **Altijd** blijven staan tot jij ze intrekt, stuk voor stuk of met **Trek alles in**.

In hetzelfde paneel zit ook de schakelaar **Toegang tot alle wachtwoorden toestaan**, een bewuste totaalmachtiging waarmee elke agent elke opgeslagen login mag gebruiken zonder te vragen. Hij staat niet voor niets in waarschuwingsrood, en Phi vraagt om bevestiging voordat je hem aanzet. Laat hem uit, tenzij je de afweging volledig begrijpt.

## Sessietime-out van de kluis

Jij bepaalt hoe lang de kluis ontgrendeld blijft. Kies in het onderdeel Wachtwoordmanager voor agents een **sessietime-out** van **1 uur**, **4 uur**, **Bij vergrendeling van het systeem**, **Bij herstart van de browser** (de standaard) of **Nooit**, en kies wat er gebeurt wanneer die afloopt: **Vergrendelen**, waarna je hoofdwachtwoord nodig is om verder te gaan, of **Uitloggen**, waarmee het account helemaal wordt uitgelogd.

## Uitschakelen

De schakelaars zetten echt iets uit in plaats van het alleen te verbergen:

- **Bitwarden-wachtwoordmanager** uitzetten vergrendelt de kluis en laat goedkeuringen met een tijdslimiet vervallen. Je account blijft op schijf ingelogd voor als je hem later opnieuw inschakelt, maar elk agentverzoek wordt geweigerd zolang hij uitstaat, ook verzoeken die onder een goedkeuring op **Altijd** vallen.
- **Ontwikkelaarsmodus** uitzetten is een noodschakelaar. Hij schakelt agenttoegang en de Wachtwoordmanager voor agents samen uit, en opnieuw aanzetten schakelt niets automatisch weer in. Elke functie moet weer met de hand worden aangezet.

## Volgende stappen

- [De phi-browser-skill](/nl/phi-browser-skill/), hoe codeeragents Phi besturen in hun eigen agent-Spaces.
- [Automatisering & Phi Link](/nl/automation/), acties op verzoek, achtergrondtaken en zelf de controle houden.
- [Privacy & jouw gegevens](/nl/privacy/), waar je gegevens staan en hoe met de AI wordt omgegaan.
