---
description: "Comprenez Phi Sentinel, le compagnon de la barre des menus macOS qui maintient l'automatisation en marche et peut acheminer certaines tâches d'IA vers l'IA privée sur votre Mac."
---

# Phi Sentinel

Phi Sentinel est une petite application compagnon qui vit dans la **barre des menus** de macOS, à part du navigateur. Cette séparation est délibérée : le navigateur reste léger pendant qu'une couche discrète en arrière-plan continue de travailler même quand aucune fenêtre n'est ouverte. Elle remplit deux missions principales : maintenir votre automatisation en marche et héberger l'**IA privée**.

## Maintenir l'automatisation en marche

Une partie de ce que fait Phi est censée survivre au moment où vous l'avez demandé. Les [tâches planifiées](/fr/automation/#scheduled-tasks) doivent continuer à s'exécuter selon leur propre planification même après la fermeture de la fenêtre du navigateur, et c'est à cela que sert Phi Sentinel. Il exécute ces tâches, conserve l'historique de vos tâches d'IA et laisse l'automatisation continuer en arrière-plan : une vérification de prix toutes les quelques heures ou une page que vous surveillez continue, qu'une fenêtre de navigateur soit ouverte ou non.

## IA privée

Normalement, les tâches d'IA de Phi sont traitées par **Phi Cloud**. L'**IA privée** est l'option pour en exécuter certaines **sur votre Mac à la place**, ou via un fournisseur de modèles que vous choisissez, pour que ce travail ne quitte jamais votre machine.

Elle est **facultative et désactivée par défaut**. Quand vous l'activez, voici ce que vous y gagnez :

- **Confidentialité.** Pour les tâches qui s'exécutent localement, les données restent sur votre Mac et ne sont pas envoyées à un modèle dans le cloud.
- **Hors ligne.** Ces tâches continuent de fonctionner sans connexion Internet.
- **Aucun coût par requête.** Tourner sur votre propre matériel n'entraîne aucuns frais d'utilisation.

### Cela fonctionne tâche par tâche

L'IA privée n'est pas tout ou rien. Elle s'applique tâche par tâche, et Phi est honnête sur celles qu'elle peut prendre en charge. Avec le modèle qu'elle installe pour vous, **Mémoire** et **Recherche de données** s'exécutent sur votre Mac par défaut, tandis que **Chat** et **Tâches web** restent sur **Phi Cloud**, parce que ces tâches demandent un modèle plus puissant que le modèle léger livré pour le travail d'arrière-plan, et elles ne passent sur l'appareil que si vous en installez un plus grand. L'écran IA privée présente cela comme une couverture, c'est-à-dire combien de vos tâches d'IA s'exécutent en privé et combien vont encore vers Phi Cloud, pour que vous sachiez toujours où se fait chaque type de travail.

### Apportez votre propre fournisseur

Les modèles sur l'appareil ne sont pas la seule option. Vous pouvez aussi pointer une tâche vers un fournisseur de modèles que vous administrez vous-même, par exemple **Ollama**, **LM Studio** ou tout point de terminaison compatible OpenAI, et Phi acheminera cette tâche vers lui plutôt que vers Phi Cloud.

### Ce qu'il vous faut

L'IA privée fonctionne mieux sur un **Mac avec puce Apple** doté d'au moins **16 Go de RAM**. Quand vous l'activez, l'installation vérifie votre matériel et l'espace disque libre, puis télécharge ce qu'il lui faut avant d'activer les modèles locaux.

### L'activer

Ouvrez Phi Sentinel depuis la barre des menus, repérez **IA privée** dans ses réglages et activez-la. De là, elle vous guide dans l'installation et vous montre quelles tâches sont passées sur l'appareil une fois prête.

## Garder la main

L'IA privée approfondit la logique « local d'abord » de Phi : elle permet à l'IA elle-même de tourner sur votre machine, pas seulement à votre mémoire. Pour savoir où vivent vos données et ce que Phi collecte ou non, voir [Confidentialité et vos données](/fr/privacy/).

## Et ensuite

- [Automatisation et Phi Link](/fr/automation/), actions à la demande, tâches planifiées et utilisation de Phi depuis Telegram.
- [Confidentialité et vos données](/fr/privacy/), où vivent vos données et comment garder la main.
- [FAQ](/fr/faq/#phi-sentinel), réponses rapides sur Phi Sentinel.
