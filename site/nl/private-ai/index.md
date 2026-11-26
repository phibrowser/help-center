---
description: "Leer Privé-AI begrijpen: wat Phi Cloud is, hoe het zich verhoudt tot je eigen AI-providers, en hoe je AI-taken op je Mac laat draaien of bij een dienst die je zelf kiest, zoals Ollama of LM Studio."
---

# Privé-AI

De AI-functies van Phi draaien standaard op **Phi Cloud**. Met **Privé-AI** bepaal je per taak wie elk soort AI-werk afhandelt: Phi Cloud, een model dat op deze Mac is gedownload, of een AI-provider die je zelf koppelt, zoals Ollama, LM Studio, OpenAI of OpenRouter.

Privé-AI staat standaard uit. Zet je het nooit aan, dan werkt elke AI-functie gewoon zoals altijd en gebruikt die Phi Cloud.

## De assistent, Phi Cloud en AI-providers {#assistant-phi-cloud-and-providers}

Deze drie haal je makkelijk door elkaar, dus het helpt om ze eerst uit elkaar te houden:

- **De assistent** is degene die je een naam hebt gegeven. Hij is de agent van Phi: hij zoekt uit wat je vraagt en beslist wat hij doet, of dat nu een pagina lezen is, een Browser Skill uitvoeren, in de browser handelen of een taak aanmaken. Het is dezelfde assistent, welk model hij ook gebruikt, en je gesprekken, Geheugen en taken veranderen niet mee met het model.
- **Een model** is het "brein" dat de assistent leent om na te denken. Bij elke stap stuurt de assistent wat hij nodig heeft naar een model, en het model antwoordt.
- **Een AI-bron** bepaalt waar dat model draait. Er zijn drie soorten:
  - **Phi Cloud**, de AI-dienst die in Phi is ingebouwd. Het is geen agent en ook niet één bepaald model. Het is een set cloudmodellen waarmee Phi verbinding maakt en die Phi voor je beheert. Het werkt met het account waarmee je bij Phi bent ingelogd, heeft geen API-sleutel nodig en vraagt je niet om een model te kiezen.
  - **Lokale modellen**, modellen die op deze Mac zijn gedownload en op deze Mac draaien.
  - **Je eigen providers**, AI-diensten die je zelf koppelt, met je eigen adres, account of API-sleutel.

Phi Cloud staat dus op dezelfde plek als Ollama of OpenAI: het is één antwoord op de vraag "waar draait het model van de assistent?" Het verschil is dat Phi Cloud is ingebouwd en meteen werkt, terwijl je de andere zelf instelt.

### Hoe de bronnen zich verhouden {#comparing-sources}

|                                  | Phi Cloud                                                            | Lokale modellen                                                   | Je lokale providers (Ollama, LM Studio)                       | Je cloudproviders (OpenAI, OpenRouter, Codex en andere) |
| -------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| Wat je nodig hebt                | Niets behalve inloggen bij Phi                                       | Eén installatiestap, die ze downloadt                             | Ollama of LM Studio, geïnstalleerd en actief                  | Een account of API-sleutel bij die dienst               |
| Waar je inhoud naartoe gaat      | Via Phi naar de modelaanbieder die Phi gebruikt                      | Nergens heen. Die blijft op deze Mac                              | Naar het adres dat je instelt, meestal deze Mac of je netwerk | Rechtstreeks van je Mac naar die dienst                 |
| Onder wiens account het aankomt  | Dat van Phi. De modelaanbieder krijgt niet te horen wie je bent      | Niet van toepassing                                               | Niet van toepassing                                           | Het jouwe, via je eigen account of sleutel              |
| Kosten                           | Inbegrepen bij Phi, binnen je [gebruikstegoed](/nl/ai/#usage-limits) | Gratis, met het werkgeheugen en de rekenkracht van deze Mac       | Gratis, met de computer waarop het draait                     | De eigen prijzen van die dienst                         |
| Telt mee voor het tegoed van Phi | Ja                                                                   | Nee                                                               | Nee                                                           | Nee                                                     |
| Werkt offline                    | Nee                                                                  | Ja                                                                | Ja, als het op deze Mac draait                                | Nee                                                     |
| Kwaliteit                        | Constant, geschikt voor elke taak                                    | Hangt af van de modelgrootte, meestal lager dan bij cloudmodellen | Hangt af van het model dat je kiest                           | Hangt af van het model dat je kiest                     |

Hoe Phi Cloud met je inhoud omgaat, lees je in [Privacy & je gegevens](/nl/privacy/). Gebruik je een eigen cloudprovider, dan geldt het privacybeleid van die provider.

## Wanneer Phi je provider gebruikt {#when-phi-uses-your-provider}

Alleen een provider toevoegen verandert niets. Phi gebruikt hem pas als aan allebei deze voorwaarden is voldaan:

1. Je hebt onder **Privé-AI → AI-taken** een van de modellen van die provider als bron voor een taak gekozen.
2. De schakelaar **Privé-AI** staat aan.

Elke taak die je niet hebt gewijzigd, blijft Phi Cloud gebruiken. Zet je Privé-AI uit, dan gaat elke taak meteen terug naar Phi Cloud, maar je keuzes blijven bewaard, dus zet je het weer aan, dan komen ze terug zonder dat je opnieuw iets hoeft in te stellen.

## Een bron kiezen per taak {#choosing-a-source-for-each-task}

Privé-AI is niet alles-of-niets. Je stelt het per taak in, en boven aan de pagina zie je hoeveel taken niet op Phi Cloud draaien, bijvoorbeeld als **Draait privé: 2 van 4 AI-taken**.

| AI-taak                | Wat eronder valt                                                         | Bronnen die je kunt kiezen                                  |
| ---------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| **Chat**               | Antwoorden in de zijbalk en in Phi Chat                                  | Phi Cloud, lokale modellen, je eigen providers, Codex       |
| **Geheugen**           | Achtergrondwerk zoals Geheugen opbouwen uit je browsen en samenvattingen | Phi Cloud, lokale modellen, je eigen providers, Codex       |
| **Webtaken**           | De assistent die in de browser handelt, en automatisering                | Phi Cloud, lokale modellen, je eigen providers, Codex       |
| **Zoeken in gegevens** | Zoeken in de gegevens die je hebt gekoppeld                              | Alleen Phi Cloud, of het lokale zoekmodel dat Phi downloadt |

Daarnaast staan er nog een paar rijen:

- **Vision-fallback.** Kan het model dat je voor een taak hebt gekozen geen afbeeldingen lezen, dan gaan afbeeldingen naar het model dat hier is ingesteld. Dit begint op **Niet ingesteld**.
- **Tabbladen ordenen met AI** wordt op macOS afgehandeld door Apple Intelligence en kun je niet wijzigen. Op Macs zonder Apple Intelligence verschijnt deze rij niet.
- **Afbeeldingen genereren** gebruikt altijd Phi Cloud.

Zet je een taak op een andere bron, dan test Phi dat model eerst. Mislukt de test, dan gaat de taak terug naar de vorige bron en krijg je te horen waarom.

Zodra Chat een andere bron dan Phi Cloud gebruikt, toont de chat **Je gebruikt Privé-AI**, omdat de antwoorden in kwaliteit kunnen verschillen van die van online modellen.

## Privé-AI inschakelen {#turning-on-private-ai}

Je komt op twee manieren bij de instellingen van Privé-AI:

- Klik in [Phi Chat](/nl/phi-chat/) op de instellingenknop (het tandwiel) in de bovenbalk en kies **Privé-AI**.
- Ga in de browser naar **Instellingen → Phi & AI → Phi Sentinel → Privé-AI**. Dat opent dezelfde pagina in Phi Chat.

De eerste keer dat je de schakelaar aanzet, controleert Phi of deze Mac lokale modellen kan draaien:

- **Kan dat wel**, dan toont het installatievenster hoe groot de download is, ongeveer hoeveel werkgeheugen de modellen gebruiken terwijl ze draaien, en welke taken naar deze Mac verhuizen. Klik op **Installatie starten** en Phi installeert de lokale runtime, downloadt de modellen, start ze en controleert ze. Met **Minimaliseren** zet je het venster weg en loopt de installatie op de achtergrond door. Tot die klaar is, blijft elke AI-functie Phi Cloud gebruiken.
- **Kan dat niet**, dan staat in het venster waarom. Je kunt dan nog steeds op **Je eigen AI-dienst gebruiken** klikken om je eigen providers te koppelen zonder lokale modellen.

### Vereisten {#requirements}

| Onderdeel          | Vereiste                                                          |
| ------------------ | ----------------------------------------------------------------- |
| Chip               | Apple Silicon. Macs met Intel kunnen geen lokale modellen draaien |
| Werkgeheugen       | Minstens 16 GB                                                    |
| Vrije schijfruimte | Minstens 10 GB, en minstens 2 GB meer dan de download zelf        |

Dit geldt allemaal niet als je alleen je eigen providers koppelt, zoals Ollama op een andere computer in je netwerk, of OpenAI.

### Wat de installatie installeert {#what-setup-installs}

De installatie downloadt op dit moment twee modellen, die tijdens het draaien samen ongeveer 7 GB werkgeheugen gebruiken:

- **Gemma 4 E4B (4-bit)**, voor **Geheugen**.
- **BGE-M3**, voor **Zoeken in gegevens**.

**Chat** en **Webtaken** blijven op Phi Cloud. Die twee hebben een model nodig dat lange context en toolaanroepen betrouwbaar aankan, en Phi verplaatst ze alleen automatisch naar deze Mac als er een lokaal model van 20 miljard parameters of meer beschikbaar is. Het Gemma-model dat de installatie downloadt, heeft er ongeveer 4 miljard: goed voor achtergrondwerk, niet om een gesprek te dragen. Je kunt Chat er onder **AI-taken** nog steeds met de hand op zetten, zolang het de test doorstaat. Als de installatie klaar is, zie je precies welke taken nu op deze Mac draaien.

Na de installatie wordt de index die Geheugen gebruikt om verwante items te vinden nog steeds op Phi Cloud opgebouwd. Wil je dat ook op deze Mac laten gebeuren, kies dan één keer met de hand het lokale model voor **Zoeken in gegevens**, en dan verhuizen ze allebei naar deze Mac.

## Ollama of LM Studio koppelen {#connecting-ollama-or-lm-studio}

Ollama en LM Studio zijn gratis apps waarmee je open modellen op je eigen computer draait. Ze zijn allebei als provider in Phi ingebouwd, standaard op `http://127.0.0.1:11434` voor Ollama en `http://127.0.0.1:1234/v1` voor LM Studio.

1. Installeer en open Ollama of LM Studio, en download een model (zie [Aanbevolen modellen](#recommended-models)).
   - Ollama: voer in Terminal `ollama pull <model>` uit, bijvoorbeeld `ollama pull gpt-oss:20b`.
   - LM Studio: zoek in de app een model, download het en start de lokale server op de pagina **Developer**.
2. Open in Phi Chat **Instellingen → AI-providers** en kies **Ollama** of **LM Studio**.
3. Zet **Deze provider gebruiken** aan. Draait de dienst op een andere computer in je netwerk, wijzig dan **Basis-URL** in het adres van die computer.
4. Klik op **Laden** om de modellen op te halen. Kies onder **Modeltoegang** voor **Alle modellen toestaan**, of voor **Alleen geselecteerde modellen** en vink de modellen aan die je wilt.
5. Kies een model, klik op **Test** en klik, zodra die een geslaagde verbinding meldt, op **Wijzigingen opslaan**.
6. Ga terug naar **Privé-AI** en kies onder **AI-taken** dat model voor de taak die je wilt verplaatsen, bijvoorbeeld **Chat**.
7. Zet de schakelaar **Privé-AI** aan.

Voor elke andere dienst met een OpenAI-compatibele API gebruik je **Aangepaste provider toevoegen** en vul je een naam, de basis-URL en, als de dienst die nodig heeft, een API-sleutel in.

Goed om te weten:

- De basis-URL kan `http` of `https` zijn, en de API-sleutel is optioneel, omdat lokale diensten er meestal geen nodig hebben. Een sleutel die naar een `http`-adres wordt gestuurd, gaat onversleuteld over het netwerk, dus gebruik `https` voor alles wat niet op je eigen Mac of in je eigen netwerk staat.
- Ollama of LM Studio moet open blijven. Gaat de computer in de sluimerstand of stopt de app, dan volgen de betrokken taken je [instelling voor terugvallen](#when-a-local-source-is-unavailable).
- Webtaken en lange gesprekken bevatten veel tekst. Komen antwoorden onvolledig terug, of maakt de assistent een actie niet af, verhoog dan de contextlengte, bijvoorbeeld naar 32K: in de instellingen van Ollama met **Context length**, of in LM Studio met **Context Length** wanneer je het model laadt. Een langere context gebruikt meer werkgeheugen.
- Willen andere computers in je netwerk Ollama bereiken, dan moet Ollama op die computer luisteren op zijn netwerkadres (`OLLAMA_HOST=0.0.0.0`).

## Aanbevolen modellen {#recommended-models}

Open modellen ontwikkelen zich snel, dus zie de namen hieronder als voorbeelden. Een nieuwer model van dezelfde grootte werkt net zo goed. Twee dingen zijn het belangrijkst: het model moet groot genoeg zijn, en het moet in het werkgeheugen passen. Een model gebruikt tijdens het draaien ongeveer zijn downloadgrootte aan werkgeheugen, plus een paar GB, en macOS en je andere apps hebben ook ruimte nodig.

| Werkgeheugen van je Mac | Suggestie                                                                                                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16 GB                   | Gebruik de installatie zodat Geheugen en Zoeken in gegevens op deze Mac draaien, en houd Chat en Webtaken op Phi Cloud. In zoveel werkgeheugen past geen model dat geschikt is voor Chat |
| 32 GB                   | Je kunt voor Chat een model uit de klasse van 20 miljard parameters draaien, bijvoorbeeld **gpt-oss-20b** (Ollama: `gpt-oss:20b`) of **Qwen3 30B** (Ollama: `qwen3:30b`)                 |
| 64 GB                   | Je kunt een stabieler model uit de klasse van 30 miljard parameters kiezen, bijvoorbeeld **Qwen3 32B** (Ollama: `qwen3:32b`), met ruimte voor een langere context                        |
| 128 GB of meer          | Je kunt een model uit de klasse van 100 miljard parameters draaien, bijvoorbeeld **gpt-oss-120b** (Ollama: `gpt-oss:120b`), dat dichter bij cloudmodellen komt                           |

Per taak:

- **Chat en Webtaken:** kies een model met 20 miljard parameters of meer dat toolaanroepen (function calling) ondersteunt. Webtaken leunen het zwaarst op toolaanroepen, en kleine modellen lopen daar vaak op vast.
- **Vision-fallback:** kies een model dat afbeeldingen kan lezen, bijvoorbeeld Gemma 3 12B (Ollama: `gemma3:12b`) of Qwen2.5-VL 7B (Ollama: `qwen2.5vl:7b`).
- **Geheugen:** het Gemma-model uit de installatie is genoeg, en er is meestal geen reden om het te wijzigen.
- **Zoeken in gegevens:** alleen het lokale zoekmodel dat Phi downloadt, of Phi Cloud.

Hoe groot ook, een lokaal model blijft meestal achter bij de toonaangevende modellen achter Phi Cloud. Vind je de kwaliteit van de antwoorden belangrijker dan je inhoud op je Mac houden, dan is het verstandig om Chat en Webtaken op Phi Cloud te laten.

## Als een lokale bron niet beschikbaar is {#when-a-local-source-is-unavailable}

Reageert een lokaal model, Ollama of LM Studio niet meer, dan volgt Phi de instelling **Wanneer een lokale of zelfgehoste bron niet beschikbaar is**:

- **Automatisch terugvallen op Phi Cloud (standaard)**. De betrokken taken gebruiken tijdelijk Phi Cloud, zodat de AI-functies blijven werken. Het betekent ook dat hun inhoud in die tijd naar de cloud gaat.
- **Getroffen AI-functies pauzeren (nooit gegevens naar de cloud sturen)**. De betrokken functies pauzeren totdat de lokale bron weer reageert.

Heb je Privé-AI aangezet om je inhoud op deze Mac te houden, kies dan de tweede optie.

Deze instelling geldt alleen voor lokale en zelfgehoste bronnen. Valt een cloudprovider zoals OpenAI, OpenRouter of Codex uit, dan schakelt Phi niet over naar Phi Cloud.

Gaat er iets mis, dan toont de pagina Privé-AI **Aandacht vereist**, met een knop **Lokale service herstarten**.

## Codex gebruiken {#using-codex}

Heb je een ChatGPT-abonnement en ben je op deze Mac bij Codex ingelogd, dan kun je dat abonnement als AI-provider gebruiken. Ga naar **Instellingen → AI-providers → Codex** en klik op **Verbinden**. Phi gebruikt de login die Codex al bewaart, zonder je inloggegevens te kopiëren.

- Installeer Codex en voer eerst `codex login` uit in Terminal. Phi kan een Codex-login die in de sleutelhanger is opgeslagen niet lezen.
- Codex kan Chat, Geheugen, Webtaken en Vision-fallback bedienen, maar niet Zoeken in gegevens.
- Wat Codex doet, telt mee voor de limieten van je ChatGPT-abonnement. Bereik je die limieten, of werkt de login niet meer, dan schakelt Phi niet over naar een andere bron.

## Uitschakelen en resetten {#turning-off-and-resetting}

- **Zet Privé-AI uit** met de schakelaar ervan. Elke taak gaat meteen terug naar Phi Cloud, en de gedownloade modellen en je keuzes blijven bewaard.
- **Verwijder een provider** met **Provider verwijderen** op de pagina ervan. Taken die hem gebruikten, gaan terug naar Phi Cloud.
- **Reset** met **AI-instellingen resetten** onder **Geavanceerde instellingen**. Dat zet elke taak terug op Phi Cloud, wist je providers en hun API-sleutels, en verwijdert de lokale modellen.

## Volgende stappen

- [Maak kennis met je assistent](/nl/ai/), wat de assistent voor je kan doen.
- [Phi Sentinel](/nl/sentinel/), de achtergrondservice die Privé-AI draait.
- [Privacy & je gegevens](/nl/privacy/), waar je gegevens staan en wat Phi verstuurt.
