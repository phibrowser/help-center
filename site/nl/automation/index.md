---
description: "Leer hoe Phi Browser omgaat met acties op verzoek, achtergrondtaken en geplande taken, een pagina in de gaten houden, taakrapporten in je gesprekken, bevestigingen, Phi Sentinel en Phi Link."
---

# Automatisering & Phi Link

"Agentisch" betekent dat Phi's AI meer kan dan vragen beantwoorden. Hij kan actie ondernemen in de browser, taken voor je uitvoeren en dat in sommige gevallen over langere tijd blijven doen. Het werkt op drie manieren: **nu** handelen (acties op verzoek), **op de achtergrond** draaien (achtergrondtaken) en **volgens schema** draaien (geplande taken).

## Acties op verzoek

Acties op verzoek zijn taken die de assistent uitvoert wanneer jij erom vraagt. In plaats van stappen te beschrijven die jij dan volgt, voert Phi het werk zelf uit: het navigeert door pagina's, werkt met websites en rondt klussen met meerdere stappen af, in het huidige tabblad of een nieuw tabblad, terwijl jij meekijkt.

Bij alles met gevolgen gaat het niet zomaar door. Het pauzeert en vraagt je om te **bevestigen** voordat het handelt, met een eenvoudige keuze tussen Bevestigen en Weigeren, gemarkeerd naar hoe riskant de stap is, zodat jij betrokken blijft bij de acties die ertoe doen.

## Achtergrondtaken

Soms wil je er niet bij blijven zitten kijken. De agent kan van een verzoek een **taak** maken die op de achtergrond draait, zodat die doorwerkt zonder je gesprek of je aandacht bezet te houden.

Een taak:

- start alleen wanneer je er **expliciet** om vraagt,
- draait zelfstandig, dus je kunt doorbrowsen of het gesprek sluiten,
- pauzeert en vraagt je om **bevestiging** wanneer hij op een riskante stap stuit,
- **rapporteert terug in het gesprek** waarin je erom vroeg, zie [hieronder](#tasks-report-back-to-their-conversation),
- blijft schrijven in de taal van dat gesprek. Vraag het de assistent als je het in een andere taal wilt.

## Geplande taken {#scheduled-tasks}

Geplande taken zijn terugkerende automatiseringen die draaien volgens een schema dat jij bepaalt. Phi kan bijvoorbeeld om de paar uur een productprijs controleren, een pagina in de gaten houden op wijzigingen of een andere browsertaak automatisch herhalen. In wezen zijn het achtergrondtaken die zich herhalen, aan de gang gehouden door [Phi Sentinel](/nl/sentinel/), ook wanneer het browservenster gesloten is. Hier gedraagt Phi zich minder als een browser met AI-functies en meer als een blijvend systeem dat doorwerkt wanneer jij niet kijkt.

### Een pagina in de gaten houden

De snelste manier om er een in te stellen: klik met de rechtermuisknop ergens op een webpagina (niet op geselecteerde tekst of een link) en kies **Laat [je assistent] deze pagina in de gaten houden**. De zijbalk opent met een nieuw gesprek, en de assistent leest de pagina en stelt je een paar vragen, één voor één: waarom je de pagina in de gaten houdt, wat het melden waard is, hoe vaak hij moet kijken en, als je wilt, hoe hij moet rapporteren en wanneer hij moet stoppen.

Daarna stelt hij een geplande taak in die **alleen wijzigingen** rapporteert. De eerste controle rapporteert de pagina zoals die nu is, als vertrekpunt, en latere controles laten pas iets horen wanneer er iets is veranderd. Wil je het in de gaten houden later wijzigen, pauzeren of verwijderen, vraag het dan in hetzelfde gesprek.

## Taken rapporteren terug in hun gesprek {#tasks-report-back-to-their-conversation}

Een taak die in een gesprek is aangemaakt, plaatst elke voltooide of mislukte uitvoering terug in dat gesprek, als antwoord van de assistent. Het gesprek wordt als ongelezen gemarkeerd en schuift naar boven in je lijst, en [Phi Chat](/nl/phi-chat/#tasks-and-unread-conversations) verzamelt al die gesprekken in de weergave **Taken**.

Boven elk rapport staat een strook met de naam van de taak, het nummer van de uitvoering en of die **Voltooid** of **Mislukt** is. Het menu **…** daarvan bevat:

- **Nu uitvoeren**, om de taak meteen opnieuw uit te voeren,
- **Hier niet meer rapporteren**, zodat de taak blijft draaien maar niet meer in dit gesprek plaatst. Zodra je dit hebt gebruikt, verandert het in **Hier weer rapporteren**.

### Een taak beheren

Heeft een gesprek taken, dan verschijnt er in de bovenbalk een klokknop met een aantal. Die opent een paneel dat per taak laat zien:

- de status, zoals **Actief**, **Gepland** (zijn schema loopt nog), **Gepauzeerd**, **Gestopt** (aan zijn stopvoorwaarde is voldaan), **Beëindigd** of **Handmatig** (hij heeft geen schema),
- het schema, wanneer hij de volgende keer draait en wanneer hij stopt, als hij een stopvoorwaarde heeft,
- een schakelaar **Rapporteren in dit gesprek**,
- **Wat wordt gerapporteerd**: **Elke uitvoering**, of **Alleen wijzigingen**, dat stil blijft wanneer er niets nieuws is gevonden. Mislukkingen worden in beide gevallen gerapporteerd.

Het menu **…** van de taak bevat **Nu uitvoeren**, en **Planning pauzeren** of **Planning hervatten**.

Het paneel bewerkt of verwijdert geen taken. Wil je wijzigen wat een taak doet, of hem verwijderen, vraag het dan aan de assistent in het gesprek van de taak, of gebruik de pagina **Taken** in Phi Sentinel.

### Als Phi niet draaide

Taken kunnen alleen draaien terwijl Phi draait. Stond je Mac uit of in de sluimerstand, of was Phi gestopt, dan kan een uitvoering worden gemist of afgebroken. Wanneer Phi weer start:

- gaat een taak die elke twee uur of vaker draait door naar zijn volgende uitvoering, en die uitvoering vermeldt wat er niet is gecontroleerd,
- vraagt Phi bij andere taken in het gesprek van de taak of hij nu één keer moet worden uitgevoerd. Het rapport luidt **Niet uitgevoerd** of **Onderbroken**, met de knoppen **Nu uitvoeren** en **Negeren** eronder, en je kunt ook in je eigen woorden antwoorden.

De vraag wordt ingetrokken wanneer de volgende geplande uitvoering van de taak aanbreekt, of na een dag als de taak geen schema heeft.

### Meldingen {#notifications}

Komt er een rapport binnen in een gesprek dat je niet open hebt, dan kan Phi ook een meldingskaart tonen met de naam van de taak en het begin van het rapport. De kaart is van Phi zelf, geen melding van macOS. Phi doet dit alleen wanneer het rapport het waard lijkt om je te onderbreken, dus een controle die niets nieuws vond, blijft stil. **Details bekijken** opent het gesprek in [Phi Chat](/nl/phi-chat/).

## De controle houden

De agent is gebouwd om met jouw medeweten te handelen, niet achter je rug om. Hij vraagt je om bevestiging vóór acties met gevolgen, taken starten alleen wanneer jij erom vraagt en pauzeren voor bevestiging bij riskante stappen, en je kunt op elk moment het schema van een taak pauzeren, het rapporteren stoppen of de assistent vragen hem te wijzigen of te verwijderen. Waar je gegevens staan en hoe de AI wordt gehanteerd, lees je in [Privacy & je gegevens](/nl/privacy/).

Wat de agent op jouw instructie doet, doet hij als jou, vanuit jouw browser, met jouw accounts. Sommige sites zien automatisering niet graag. Reddit is het bekende voorbeeld: accounts die als geautomatiseerd worden herkend, worden beperkt of geblokkeerd. Werkt een taak via zo'n site, dan ligt dat risico bij jou.

## Phi Sentinel

Geplande taken moeten blijven draaien, ook wanneer het browservenster gesloten is. **Phi Sentinel** is de achtergrondapp in de macOS-menubalk die dat mogelijk maakt, en hij host ook Privé-AI, de optie om een deel van de AI op je eigen Mac te draaien. Zie [Phi Sentinel](/nl/sentinel/) voor het volledige beeld.

## Phi Link {#phi-link}

**Phi Link** verbindt Phi met Telegram, zodat je je assistent vanaf je telefoon kunt gebruiken en updates krijgt wanneer je niet bij je Mac bent. Je kunt ermee:

- vanaf je telefoon met je assistent chatten,
- de resultaten van voltooide taakuitvoeringen ontvangen,
- workflows voortzetten buiten de browser.

Instellen kan op twee manieren:

- **De officiële Phi Link-bot**, de eenvoudigste route: scan een QR-code, rond de installatie af met één klik en je bent klaar.
- **Je eigen Telegram-bot**, voor meer controle: maak een bot via Telegrams BotFather, genereer een token en plak die in de instellingen van Phi. Zo kun je de naam en avatar van de bot aanpassen.

Dezelfde assistent-identiteit reist mee, dus de ervaring blijft consistent tussen desktop en telefoon.
