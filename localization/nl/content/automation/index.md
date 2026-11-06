---
description: "Leer hoe Phi Browser omgaat met acties op verzoek, Schaduwtaken, geplande taken, bevestigingen, achtergrondwerk via Phi Sentinel en meldingen via Phi Link."
---

# Automatisering & Phi Link

"Agentisch" betekent dat Phi's AI meer kan dan vragen beantwoorden. Hij kan actie ondernemen in de browser, taken voor je uitvoeren en dat in sommige gevallen over langere tijd blijven doen. Het werkt op drie manieren: **nu** handelen (acties op verzoek), **op de achtergrond** draaien (Schaduwtaken) en **volgens schema** draaien (geplande taken).

## Acties op verzoek

Acties op verzoek zijn taken die de assistent uitvoert wanneer jij erom vraagt. In plaats van stappen te beschrijven die jij dan volgt, voert Phi het werk zelf uit: het navigeert door pagina's, werkt met websites en rondt klussen met meerdere stappen af, in het huidige tabblad of een nieuw tabblad, terwijl jij meekijkt.

Bij alles met gevolgen gaat het niet zomaar door. Het pauzeert en vraagt je om te **bevestigen** voordat het handelt, met een eenvoudige keuze tussen Bevestigen en Weigeren, gemarkeerd naar hoe riskant de stap is, zodat jij betrokken blijft bij de acties die ertoe doen.

## Achtergrondtaken

Soms wil je er niet bij blijven zitten kijken. De agent kan een taak **losgekoppeld op de achtergrond** draaien, een zogeheten **Schaduwtaak** (Shadow Task), zodat die doorwerkt zonder je gesprek of je aandacht bezet te houden.

Een achtergrondtaak:

- start alleen wanneer je **expliciet** om uitvoering op de achtergrond vraagt,
- draait zelfstandig, dus je kunt doorbrowsen of het gesprek sluiten,
- pauzeert en vraagt je om **bevestiging** wanneer hij op een riskante stap stuit,
- meldt zijn voortgang, resultaten en eventuele bestanden die hij oplevert op de pagina **Taken** van Phi Sentinel; resultaten komen dus niet vanzelf terug in de chat,
- **stuurt je een melding wanneer hij klaar is**, wat extra handig is met [Phi Link](#phi-link) op je telefoon,
- kan tijdens het draaien worden **geannuleerd**, of **opnieuw uitgevoerd** zodra hij klaar is.

## Geplande taken {#scheduled-tasks}

Geplande taken zijn terugkerende automatiseringen die draaien volgens een schema dat jij bepaalt. Phi kan bijvoorbeeld om de paar uur een productprijs controleren, een pagina in de gaten houden op wijzigingen of een andere browsertaak automatisch herhalen. In wezen zijn het achtergrondtaken die zich herhalen, aan de gang gehouden door [Phi Sentinel](/nl/sentinel/), ook wanneer het browservenster gesloten is. Hier gedraagt Phi zich minder als een browser met AI-functies en meer als een blijvend systeem dat doorwerkt wanneer jij niet kijkt.

## De controle houden

De agent is gebouwd om met jouw medeweten te handelen, niet achter je rug om. Hij vraagt je om bevestiging vóór acties met gevolgen, achtergrondtaken starten alleen wanneer jij erom vraagt en pauzeren voor bevestiging bij riskante stappen, en je kunt een lopende taak op elk moment stoppen. Waar je gegevens staan en hoe de AI wordt gehanteerd, lees je in [Privacy & je gegevens](/nl/privacy/).

## Phi Sentinel

Geplande taken moeten blijven draaien, ook wanneer het browservenster gesloten is. **Phi Sentinel** is de achtergrondapp in de macOS-menubalk die dat mogelijk maakt, en hij host ook Privé-AI, de optie om een deel van de AI op je eigen Mac te draaien. Zie [Phi Sentinel](/nl/sentinel/) voor het volledige beeld.

## Phi Link {#phi-link}

**Phi Link** verbindt Phi met Telegram, zodat je je assistent vanaf je telefoon kunt gebruiken en updates krijgt wanneer je niet bij je Mac bent. Je kunt ermee:

- vanaf je telefoon met je assistent chatten,
- een melding krijgen wanneer taken slagen of mislukken,
- workflows voortzetten buiten de browser.

De officiële Phi Link-bot is stopgezet. Verbind je eigen Telegram-bot om Phi via Telegram te gebruiken. Je kunt zelf de naam en avatar kiezen.

### Je bot instellen

1. Open **@BotFather** in Telegram en volg de instructies om een bot te maken. Kopieer de **Bot Token** die je krijgt.
2. Meld je aan bij Phi en open **Instellingen → Phi & AI → Phi Link**.
3. Plak je token onder **Aangepaste Telegram-bot**, verifieer het en sla het op.
4. Open je bot in Telegram en stuur een bericht om de verbinding te testen.

Je bot is alleen voor persoonlijk gebruik. Deel hem niet met anderen en nodig anderen niet uit om hem te gebruiken. Houd je Bot Token geheim. Als de verificatie mislukt, controleer dan het token en de foutmelding in de instellingen. Een webhookconflict kan betekenen dat een andere app de bot al gebruikt.

### Als je de officiële bot gebruikte

Maak je eigen bot en stel hem in met de stappen hierboven. Nadat je hem hebt getest, kun je de oude officiële bot ontkoppelen in de instellingen. Het ontkoppelen van de officiële bot verwijdert je eigen bot niet.

### De verbinding controleren

**Gekoppeld** betekent dat de botservice actief is. Stuur een bericht in Telegram om te controleren of je antwoord krijgt. Wil je de bot vervangen, verwijder dan de huidige bot in de instellingen en voeg de nieuwe toe.
