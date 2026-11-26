---
description: "Comprenez Phi Sentinel, le gestionnaire des services d'arrière-plan de Phi sur votre Mac, qui fait tourner les services sur lesquels repose l'assistant, conserve leurs données et permet aux tâches planifiées de s'exécuter après la fermeture du navigateur."
---

# Phi Sentinel

Phi Sentinel gère les services d'arrière-plan de Phi sur votre Mac. Une bonne partie de ce que fait l'assistant se passe en dehors de la fenêtre du navigateur : exécuter les tâches planifiées, construire votre Mémoire, effectuer des recherches dans les données que vous avez connectées, et acheminer les requêtes d'IA là où elles doivent aller. Un ensemble de services qui tournent en arrière-plan accomplit ce travail, et Phi Sentinel veille à leur bon fonctionnement.

Il est installé avec Phi Browser, et au quotidien vous n'avez rien à en faire. Dans les paramètres de Phi Chat, ces services s'appellent simplement **Services d'arrière-plan**.

## Ce qu'il fait {#what-it-does}

### Faire tourner les services d'arrière-plan {#running-background-services}

Phi Sentinel contient un processus appelé **Runner**, dont le seul rôle est de gérer les services d'arrière-plan. Il s'occupe de trois choses :

- **Les démarrer et les surveiller.** Il démarre chaque service quand on en a besoin, vérifie régulièrement qu'il est en bonne santé et le redémarre en cas de problème.
- **Les mises à jour.** Il télécharge et installe en arrière-plan les nouvelles versions des services. Il vérifie d'abord la signature de chaque mise à jour, et revient à la version précédente si une nouvelle version ne fonctionne pas correctement.
- **Transmettre vos réglages.** Il transmet les choix que vous faites dans les paramètres, comme les sources des tâches dans l'[IA privée](/fr/private-ai/), aux services qui en ont besoin.

Le Runner ne fait que maintenir les services en marche. Il ne traite pas votre contenu : vos conversations, vos pages et vos données sont traitées par les services eux-mêmes et ne passent jamais par le Runner.

Parmi les services qu'il gère :

- **Le service de l'assistant**, qui conserve vos conversations et vos tâches, et exécute les tâches planifiées et les tâches en arrière-plan.
- **Le service de Mémoire**, qui construit votre Mémoire à partir de votre navigation.
- **Le service d'indexation des données**, qui indexe les données que vous connectez pour que Recherche de données puisse les trouver.
- **L'AI Gateway**, qui envoie chaque requête d'IA à la source que vous avez choisie pour elle. Par défaut, c'est Phi Cloud ; avec l'IA privée activée, ce peut être un modèle local ou l'un de vos propres fournisseurs.
- **AI Guardrail**, qui vérifie sur ce Mac si un texte contient des informations sensibles. Voir ci-dessous.
- **Les modèles locaux**, installés et exécutés uniquement après la configuration de l'IA privée.

### Garder les secrets hors de la Mémoire {#ai-guardrail}

**AI Guardrail** est un service de détection qui s'exécute sur votre Mac. Avant que le service de Mémoire n'enregistre un nouvel élément, il demande à AI Guardrail de le vérifier. Si celui-ci y trouve un secret, comme un mot de passe, une clé API, une clé privée, une phrase de récupération ou un code de récupération, l'élément entier est exclu de votre Mémoire.

- La vérification se fait entièrement sur ce Mac. Ce qui est vérifié n'est envoyé nulle part.
- Il se contente d'écarter les secrets et ne réécrit jamais rien. Les informations personnelles ordinaires, comme les noms et les numéros de téléphone, sont enregistrées normalement, et vous pouvez les consulter et les supprimer dans [Mémoire](/fr/memory/).

### Conserver vos données {#keeping-your-data}

Les services conservent leurs données sur votre Mac, dans des bases de données locales : vos conversations, vos tâches et leurs exécutions, votre Mémoire et l'index de vos données connectées.

Dans Phi Chat, sous **Paramètres → Sauvegarde et mises à jour**, vous disposez de :

- **Exporter les données**, pour enregistrer une copie de vos réglages et de vos données à transférer sur un autre Mac. Les clés API des fournisseurs ne sont pas incluses.
- **Instantané local**, pour enregistrer sur ce Mac une copie à laquelle vous pourrez revenir. Les instantanés ne quittent jamais ce Mac.

### Maintenir les tâches après la fermeture du navigateur {#keeping-tasks-running}

Les [tâches planifiées](/fr/automation/#scheduled-tasks) doivent s'exécuter selon leur propre planning, qu'une fenêtre de navigateur soit ouverte ou non. Comme Phi Sentinel s'exécute à part du navigateur, une vérification de prix toutes les quelques heures ou une page que vous surveillez continue après la fermeture de la fenêtre du navigateur.

## Vérifier l'état des services d'arrière-plan {#checking-status}

Ouvrez les paramètres dans Phi Chat :

- **Général** indique si les services d'arrière-plan fonctionnent correctement et quelle version vous avez, avec **Redémarrer les services d'arrière-plan**.
- **Services** indique l'état de chaque service. Quand il affiche **Tout fonctionne**, il n'y a rien à faire.
- **Journaux** sert quand quelque chose ne va pas et que vous voulez le signaler. Cliquez sur **Enregistrer** à côté de **Journaux de diagnostic** : Phi enregistre dans votre dossier Téléchargements un fichier ZIP que vous pouvez envoyer à l'assistance Phi.

Dans le navigateur, sous **Paramètres → Phi et IA → Phi Sentinel**, vous pouvez choisir d'activer ou non **Lancer Phi Sentinel à l'ouverture de session sur votre Mac** et **Invoquer Phi Chat avec Maj Maj Maj** (consultez [Phi Chat](/fr/phi-chat/#opening-phi-chat)).

## Et ensuite

- [IA privée](/fr/private-ai/), exécuter des tâches d'IA sur votre Mac ou avec votre propre fournisseur d'IA.
- [Automatisation et Phi Link](/fr/automation/), actions à la demande, tâches planifiées et utilisation de Phi depuis Telegram.
- [Confidentialité et vos données](/fr/privacy/), où vivent vos données et comment garder la main.
- [FAQ](/fr/faq/#phi-sentinel), réponses rapides sur Phi Sentinel.
