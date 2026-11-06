---
description: "Découvrez comment Phi Browser gère les actions à la demande, les tâches en arrière-plan (Shadow Tasks), les tâches planifiées, les confirmations, le travail de fond de Phi Sentinel et les notifications Phi Link."
---

# Automatisation et Phi Link

« Agentique » signifie que l'IA de Phi peut faire plus que répondre à des questions. Elle peut agir dans le navigateur, accomplir des tâches pour vous et, dans certains cas, continuer à le faire dans la durée. Cela fonctionne de trois façons : agir **maintenant** (les actions à la demande), tourner **en arrière-plan** (les tâches en arrière-plan, ou « Shadow Tasks »), et tourner **selon un planning** (les tâches planifiées).

## Les actions à la demande

Les actions à la demande sont des tâches que l'assistant accomplit quand vous le demandez. Au lieu de vous décrire des étapes à suivre, Phi fait le travail lui-même : il navigue entre les pages, interagit avec les sites web et mène à bien des travaux en plusieurs étapes, dans l'onglet actuel ou dans un nouveau, pendant que vous le regardez faire.

Pour tout ce qui porte à conséquence, il ne fonce pas tête baissée. Il marque une pause et vous demande de **confirmer** avant d'agir, avec une invite Confirmer ou Refuser graduée selon le risque de l'étape, pour que vous restiez dans la boucle sur les actions qui comptent.

## Les tâches en arrière-plan

Parfois, vous n'avez pas envie de rester à regarder. L'agent peut exécuter une tâche **détachée, en arrière-plan** : c'est ce que Phi appelle une **tâche en arrière-plan** (« Shadow Task »). Elle continue de travailler sans mobiliser votre conversation ni votre attention.

Une tâche en arrière-plan :

- ne démarre que lorsque vous **demandez explicitement** une exécution en arrière-plan,
- s'exécute de manière autonome, pour que vous puissiez continuer à naviguer ou fermer la conversation,
- marque une pause et vous demande de **confirmer** si elle rencontre une étape risquée,
- rend compte de sa progression, de ses résultats et des fichiers produits sur la page **Tâches planifiées** de Phi Sentinel, si bien que les résultats ne reviennent pas d'eux-mêmes dans la conversation,
- **vous notifie quand elle se termine**, ce qui est particulièrement pratique avec [Phi Link](#phi-link) sur votre téléphone,
- peut être **annulée** en cours d'exécution, ou **relancée** une fois terminée.

## Les tâches planifiées {#scheduled-tasks}

Les tâches planifiées sont des automatisations récurrentes qui s'exécutent selon un planning que vous définissez. Phi peut par exemple surveiller le prix d'un produit toutes les quelques heures, guetter les changements d'une page, ou répéter automatiquement une autre tâche menée dans le navigateur. Ce sont au fond des tâches en arrière-plan qui se répètent, maintenues en marche par [Phi Sentinel](/fr/sentinel/) même quand la fenêtre du navigateur est fermée. C'est là que Phi se comporte moins comme un navigateur doté de fonctions d'IA et davantage comme un système persistant qui continue de travailler quand vous ne le regardez pas.

## Garder la main

L'agent est conçu pour agir à votre connaissance, pas dans votre dos. Il vous demande confirmation avant les actions qui portent à conséquence, les tâches en arrière-plan ne démarrent que si vous les demandez et s'interrompent pour confirmation aux étapes risquées, et vous pouvez arrêter une tâche en cours à tout moment. Pour savoir où vivent vos données et comment l'IA est gérée, consultez [Confidentialité et vos données](/fr/privacy/).

## Phi Sentinel

Les tâches planifiées doivent continuer à s'exécuter même quand la fenêtre du navigateur est fermée. **Phi Sentinel** est l'app d'arrière-plan dans la barre des menus de macOS qui rend cela possible ; elle héberge aussi l'IA privée, l'option qui exécute une partie de l'IA sur votre propre Mac. Consultez [Phi Sentinel](/fr/sentinel/) pour la vue d'ensemble.

## Phi Link

**Phi Link** relie Phi à Telegram pour utiliser votre assistant depuis votre téléphone et recevoir des nouvelles quand vous êtes loin de votre Mac. Avec lui, vous pouvez :

- discuter avec votre assistant depuis votre téléphone,
- être notifié quand des tâches réussissent ou échouent,
- poursuivre vos flux de travail loin du navigateur.

Le bot officiel de Phi Link n'est plus disponible. Pour utiliser Phi depuis Telegram, connectez votre propre bot Telegram. Vous pouvez choisir son nom et son avatar.

### Configurer votre bot

1. Ouvrez **@BotFather** dans Telegram et suivez ses instructions pour créer un bot. Copiez le **Bot Token** qu'il vous fournit.
2. Connectez-vous à Phi et ouvrez **Réglages → Phi et IA → Phi Link**.
3. Dans **Bot Telegram personnalisé**, collez votre jeton, vérifiez-le et enregistrez-le.
4. Ouvrez votre bot dans Telegram et envoyez un message pour tester la connexion.

Votre bot est réservé à votre usage personnel. Ne le partagez pas avec d'autres personnes et ne les invitez pas à l'utiliser. Gardez votre Bot Token confidentiel. Si la vérification échoue, vérifiez le jeton et l'erreur affichée dans les réglages. Un conflit de webhook peut indiquer qu'une autre app utilise déjà le bot.

### Si vous utilisiez le bot officiel

Créez et configurez votre propre bot en suivant les étapes ci-dessus. Une fois que vous l'avez testé, vous pouvez dissocier l'ancien bot officiel dans les réglages. Cela ne supprime pas votre bot personnalisé.

### Vérifier la connexion

**Associé** signifie que le service du bot est en cours d'exécution. Envoyez un message dans Telegram pour vérifier que vous recevez une réponse. Pour remplacer le bot, supprimez le bot actuel dans les réglages, puis ajoutez le nouveau.
