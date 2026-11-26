---
description: "Leer Phi Sentinel kennen, de beheerder van de achtergrondservices van Phi op je Mac, die de services achter de assistent draait, hun gegevens bewaart en geplande taken laat doorlopen nadat de browser is gesloten."
---

# Phi Sentinel

Phi Sentinel beheert de achtergrondservices van Phi op je Mac. Veel van wat de assistent doet, gebeurt buiten het browservenster: geplande taken uitvoeren, je Geheugen opbouwen, zoeken in de gegevens die je hebt gekoppeld, en AI-verzoeken naar de juiste plek sturen. Dat werk doet een set services die op de achtergrond draaien, en Phi Sentinel zorgt dat ze goed blijven draaien.

Het wordt samen met Phi Browser geïnstalleerd, en in het dagelijks gebruik hoef je er niets mee te doen. In de instellingen van Phi Chat heten deze services gewoon **Achtergrondservices**.

## Wat het doet {#what-it-does}

### Achtergrondservices draaien {#running-background-services}

In Phi Sentinel zit een proces dat de **Runner** heet, met als enige taak het beheren van de achtergrondservices. Het regelt:

- **Starten en bewaken.** Het start elke service wanneer die nodig is, controleert regelmatig of die gezond is, en start hem opnieuw als er iets misgaat.
- **Updates.** Het downloadt en installeert nieuwe versies van de services op de achtergrond. Het controleert eerst de handtekening van elke update, en gaat terug naar de vorige versie als een nieuwe niet goed draait.
- **Je instellingen doorgeven.** Het geeft de keuzes die je in de instellingen maakt, zoals de bronnen per taak in [Privé-AI](/nl/private-ai/), door aan de services die ze nodig hebben.

De Runner houdt alleen de services draaiende. Met je inhoud doet het niets: je gesprekken, pagina's en gegevens worden door de services zelf verwerkt en gaan nooit door de Runner.

Tot de services die het beheert, horen:

- **De assistentservice**, die je gesprekken en taken bewaart, en geplande taken en achtergrondtaken uitvoert.
- **De Geheugenservice**, die je Geheugen opbouwt uit je browsen.
- **De indexeringsservice voor gegevens**, die de gegevens indexeert die je koppelt, zodat Zoeken in gegevens ze kan vinden.
- **De AI Gateway**, die elk AI-verzoek naar de bron stuurt die je ervoor hebt gekozen. Standaard is dat Phi Cloud, en met Privé-AI aan kan dat een lokaal model zijn of een provider van jezelf.
- **AI Guardrail**, dat tekst op deze Mac controleert op gevoelige informatie. Zie hieronder.
- **Lokale modellen**, die pas worden geïnstalleerd en gedraaid nadat je Privé-AI hebt ingesteld.

### Geheimen buiten Geheugen houden {#ai-guardrail}

**AI Guardrail** is een detectieservice die op je Mac draait. Voordat de Geheugenservice iets nieuws opslaat, laat die het door AI Guardrail controleren. Vindt AI Guardrail een geheim, zoals een wachtwoord, een API-sleutel, een privésleutel, een herstelzin of een herstelcode, dan wordt het hele item uit je Geheugen weggelaten.

- De controle gebeurt volledig op deze Mac. Wat er wordt gecontroleerd, wordt nergens naartoe gestuurd.
- Het houdt alleen geheimen buiten en herschrijft nooit iets. Gewone persoonlijke gegevens, zoals namen en telefoonnummers, worden gewoon opgeslagen, en je kunt ze bekijken en verwijderen in [Geheugen](/nl/memory/).

### Je gegevens bewaren {#keeping-your-data}

De services bewaren hun gegevens op je Mac, in lokale databases: je gesprekken, je taken en hun uitvoeringen, je Geheugen en de index van je gekoppelde gegevens.

In Phi Chat kun je onder **Instellingen → Back-up en updates**:

- **Gegevens exporteren**, een kopie van je instellingen en gegevens opslaan om naar een andere Mac over te zetten. API-sleutels van providers zitten er niet bij.
- **Lokale snapshot**, een kopie op deze Mac opslaan waar je naar terug kunt gaan. Snapshots verlaten deze Mac nooit.

### Taken laten doorlopen nadat de browser is gesloten {#keeping-tasks-running}

[Geplande taken](/nl/automation/#scheduled-tasks) moeten volgens hun eigen schema draaien, of er nu een browservenster open is of niet. Omdat Phi Sentinel los van de browser draait, loopt een prijscontrole om de paar uur of een pagina die je in de gaten houdt gewoon door nadat je het browservenster hebt gesloten.

## De achtergrondservices controleren {#checking-status}

Open de instellingen in Phi Chat:

- **Algemeen** toont of de achtergrondservices goed draaien en welke versie je hebt, met **Achtergrondservices opnieuw starten**.
- **Services** toont de status van elke service. Staat er **Alles werkt**, dan hoef je niets te doen.
- **Logs** is voor als er iets mis is en je dat wilt melden. Klik op **Opslaan** naast **Diagnostische logs**, en Phi bewaart een ZIP-bestand in je map Downloads dat je naar de ondersteuning van Phi kunt sturen.

In de browser kun je onder **Instellingen → Phi & AI → Phi Sentinel** de opties **Start Phi Sentinel wanneer je op je Mac inlogt** en **Phi Chat oproepen met Shift Shift Shift** aan- of uitzetten (zie [Phi Chat](/nl/phi-chat/#opening-phi-chat)).

## Volgende stappen

- [Privé-AI](/nl/private-ai/), AI-taken op je Mac laten draaien of bij je eigen AI-provider.
- [Automatisering & Phi Link](/nl/automation/), acties op verzoek, geplande taken en Phi gebruiken vanuit Telegram.
- [Privacy & je gegevens](/nl/privacy/), waar je gegevens staan en hoe je de controle houdt.
- [FAQ](/nl/faq/#phi-sentinel), korte antwoorden over Phi Sentinel.
