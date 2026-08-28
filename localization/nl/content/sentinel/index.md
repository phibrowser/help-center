---
description: "Leer Phi Sentinel kennen, de hulpapp in de macOS-menubalk die je automatisering draaiende houdt en sommige AI-taken via Privé-AI op je Mac kan laten lopen."
---

# Phi Sentinel

Phi Sentinel is een kleine hulpapp die in de **menubalk** van macOS leeft, los van de browser. Die scheiding is bewust: de browser blijft licht, terwijl een stille achtergrondlaag blijft doorwerken, ook als er geen venster open is. De app heeft twee hoofdtaken: hij houdt je automatisering draaiende, en hij huisvest **Privé-AI**.

## Automatisering draaiende houden

Sommige dingen die Phi doet, horen het moment te overleven waarop je erom vroeg. [Geplande taken](/nl/automation/#scheduled-tasks) moeten op hun eigen schema blijven draaien, ook nadat je het browservenster hebt gesloten, en daar is Phi Sentinel voor. Hij voert die taken uit, bewaart je AI-taakgeschiedenis en laat automatisering op de achtergrond doorgaan, zodat een prijscontrole om de paar uur of een pagina die je in de gaten houdt blijft doorlopen, of er nu een browservenster open is of niet.

## Privé-AI

Normaal handelt **Phi Cloud** de AI-taken van Phi af. **Privé-AI** is de optie om sommige ervan **juist op je Mac** te laten draaien, of via een modelprovider die je zelf kiest, zodat dat werk je machine nooit verlaat.

Het is **opt-in en staat standaard uit**. Zet je het aan, dan krijg je er een paar dingen voor terug:

- **Privacy.** Voor de taken die lokaal draaien, blijven de gegevens op je Mac en gaan ze niet naar een cloudmodel.
- **Offline.** Die taken blijven werken zonder internetverbinding.
- **Geen kosten per verzoek.** Draaien op je eigen hardware kent geen gebruikskosten.

### Het werkt per taak

Privé-AI is niet alles-of-niets. Het geldt per taak, en Phi is eerlijk over welke taken het kan overnemen. Met het model dat het voor je klaarzet draaien **Geheugen** en **Zoeken in gegevens** standaard op je Mac, terwijl **Chat** en **Webtaken** op **Phi Cloud** blijven, omdat die een sterker model nodig hebben dan het lichte model dat voor achtergrondwerk wordt meegeleverd, en ze verhuizen alleen naar je apparaat als je een groter model installeert. Het Privé-AI-scherm toont dit als dekking: hoeveel van je AI-taken privé draaien en hoeveel er nog naar Phi Cloud gaan, zodat je altijd weet waar elk soort werk gebeurt.

### Je eigen provider gebruiken

Modellen op het apparaat zijn niet de enige optie. Je kunt een taak ook laten lopen via een modelprovider die je zelf draait, bijvoorbeeld **Ollama**, **LM Studio** of elk OpenAI-compatibel eindpunt, en Phi stuurt die taak daarheen in plaats van naar Phi Cloud.

### Wat je nodig hebt

Privé-AI werkt het best op een Mac met **Apple Silicon** en minstens **16 GB RAM**. Wanneer je het inschakelt, controleert de installatie je hardware en vrije schijfruimte en downloadt die wat er nodig is voordat de lokale modellen aangaan.

### Inschakelen

Open Phi Sentinel vanuit de menubalk, zoek **Privé-AI** in de instellingen en zet het aan. Van daaruit word je door de installatie geleid en zie je, zodra alles klaar is, welke taken naar je apparaat zijn verhuisd.

## Zelf de controle houden

Privé-AI verdiept Phi's local-first-aanpak: niet alleen je geheugen, ook de AI zelf kan op je eigen machine draaien. Voor waar je gegevens staan en wat Phi wel en niet verzamelt, zie [Privacy & jouw gegevens](/nl/privacy/).

## Volgende stappen

- [Automatisering & Phi Link](/nl/automation/), acties op verzoek, geplande taken en Phi gebruiken vanuit Telegram.
- [Privacy & jouw gegevens](/nl/privacy/), waar je gegevens staan en hoe je de controle houdt.
- [FAQ](/nl/faq/#phi-sentinel), korte antwoorden over Phi Sentinel.
