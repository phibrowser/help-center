---
description: "Découvrez comment Phi Browser gère les actions à la demande, les tâches en arrière-plan et planifiées, la surveillance d'une page, les rapports de tâches dans vos conversations, les confirmations, Phi Sentinel et Phi Link."
---

# Automatisation et Phi Link

« Agentique » signifie que l'IA de Phi peut faire plus que répondre à des questions. Elle peut agir dans le navigateur, accomplir des tâches pour vous et, dans certains cas, continuer à le faire dans la durée. Cela fonctionne de trois façons : agir **maintenant** (les actions à la demande), tourner **en arrière-plan** (les tâches en arrière-plan), et tourner **selon un planning** (les tâches planifiées).

## Les actions à la demande

Les actions à la demande sont des tâches que l'assistant accomplit quand vous le demandez. Au lieu de vous décrire des étapes à suivre, Phi fait le travail lui-même : il navigue entre les pages, interagit avec les sites web et mène à bien des travaux en plusieurs étapes, dans l'onglet actuel ou dans un nouveau, pendant que vous le regardez faire.

Pour tout ce qui porte à conséquence, il ne fonce pas tête baissée. Il marque une pause et vous demande de **confirmer** avant d'agir, avec une invite Confirmer ou Refuser graduée selon le risque de l'étape, pour que vous restiez dans la boucle sur les actions qui comptent.

## Les tâches en arrière-plan

Parfois, vous n'avez pas envie de rester à regarder. L'agent peut transformer une demande en **tâche** qui s'exécute en arrière-plan. Elle continue de travailler sans mobiliser votre conversation ni votre attention.

Une tâche :

- ne démarre que lorsque vous la **demandez explicitement**,
- s'exécute de manière autonome, pour que vous puissiez continuer à naviguer ou fermer la conversation,
- marque une pause et vous demande de **confirmer** si elle rencontre une étape risquée,
- **rend compte dans la conversation** où vous l'avez demandée, voir [plus bas](#tasks-report-back-to-their-conversation),
- continue d'écrire dans la langue de cette conversation. Si vous la voulez dans une autre langue, demandez-le à l'assistant.

## Les tâches planifiées {#scheduled-tasks}

Les tâches planifiées sont des automatisations récurrentes qui s'exécutent selon un planning que vous définissez. Phi peut par exemple surveiller le prix d'un produit toutes les quelques heures, guetter les changements d'une page, ou répéter automatiquement une autre tâche menée dans le navigateur. Ce sont au fond des tâches en arrière-plan qui se répètent, maintenues en marche par [Phi Sentinel](/fr/sentinel/) même quand la fenêtre du navigateur est fermée. C'est là que Phi se comporte moins comme un navigateur doté de fonctions d'IA et davantage comme un système persistant qui continue de travailler quand vous ne le regardez pas.

### Surveiller une page

Le moyen le plus rapide d'en créer une est de faire un clic droit n'importe où sur une page web (pas sur du texte sélectionné ni sur un lien) et de choisir **Demander à [votre assistant] de surveiller cette page**. La barre latérale s'ouvre sur une nouvelle conversation, et l'assistant lit la page puis vous pose quelques questions, une à la fois : pourquoi vous la surveillez, ce qui mérite de vous être signalé, à quelle fréquence vérifier et, si vous le souhaitez, comment rendre compte et quand s'arrêter.

Il crée ensuite une tâche planifiée qui ne signale **que les changements**. La première vérification rend compte de la page telle qu'elle est maintenant, comme point de départ, et les vérifications suivantes ne se manifestent que si quelque chose a changé. Pour modifier, suspendre ou supprimer la surveillance plus tard, demandez-le dans la même conversation.

## Les tâches rendent compte dans leur conversation {#tasks-report-back-to-their-conversation}

Une tâche créée dans une conversation publie chaque exécution terminée ou échouée dans cette conversation, sous forme de réponse de l'assistant. La conversation est marquée comme non lue et remonte en haut de votre liste, et [Phi Chat](/fr/phi-chat/#tasks-and-unread-conversations) rassemble toutes ces conversations dans sa vue **Tâches**.

Au-dessus de chaque rapport figure un bandeau avec le nom de la tâche, le numéro de l'exécution et son résultat, **Terminée** ou **Échouée**. Son menu **…** propose :

- **Exécuter maintenant**, pour relancer la tâche tout de suite,
- **Ne plus envoyer de rapport ici**, pour que la tâche continue de s'exécuter sans plus rien publier dans cette conversation. L'option devient **Reprendre l'envoi des rapports ici** une fois que vous l'avez utilisée.

### Gérer une tâche

Quand une conversation contient des tâches, un bouton en forme d'horloge accompagné d'un nombre apparaît dans sa barre supérieure. Il ouvre un panneau qui indique, pour chaque tâche :

- son état, par exemple **En cours**, **Active** (son planning se poursuit), **Suspendue**, **Arrêtée** (sa condition d'arrêt a été remplie), **Terminée** ou **Manuelle** (elle n'a pas de planning),
- son planning, sa prochaine exécution et le moment où elle s'arrête, si elle a une condition d'arrêt,
- un interrupteur **Envoyer les rapports dans cette conversation**,
- **Rapports à envoyer** : **Chaque exécution**, ou **Uniquement les changements**, qui ne signale rien quand rien de nouveau n'est apparu. Les échecs sont signalés dans les deux cas.

Le menu **…** de la tâche propose **Exécuter maintenant**, et **Suspendre la planification** ou **Reprendre la planification**.

Le panneau ne permet ni de modifier ni de supprimer des tâches. Pour changer ce que fait une tâche, ou pour la supprimer, demandez-le à l'assistant dans la conversation de la tâche, ou utilisez la page **Tâches** de Phi Sentinel.

### Quand Phi n'était pas en cours d'exécution

Les tâches ne peuvent s'exécuter que lorsque Phi est en cours d'exécution. Si votre Mac était éteint ou en veille, ou si Phi avait été quitté, une exécution peut être manquée ou interrompue. Quand Phi redémarre :

- une tâche qui s'exécute toutes les deux heures ou plus souvent passe à sa prochaine exécution, et celle-ci mentionne ce qui n'a pas été vérifié,
- pour les autres tâches, Phi demande dans la conversation de la tâche s'il faut l'exécuter une fois maintenant. Le rapport indique **Non exécutée** ou **Interrompue**, avec les boutons **Exécuter maintenant** et **Ignorer** en dessous, et vous pouvez aussi répondre avec vos propres mots.

La question est retirée quand arrive la prochaine exécution planifiée de la tâche, ou au bout d'un jour si elle n'a pas de planning.

### Notifications {#notifications}

Quand un rapport arrive dans une conversation que vous n'avez pas ouverte, Phi peut aussi afficher une carte de notification avec le nom de la tâche et le début du rapport. Cette carte est propre à Phi, ce n'est pas une notification macOS. Phi ne l'affiche que lorsque le rapport semble valoir la peine de vous interrompre : une vérification qui n'a rien trouvé de nouveau reste donc silencieuse. **Afficher les détails** ouvre la conversation dans [Phi Chat](/fr/phi-chat/).

## Garder la main

L'agent est conçu pour agir à votre connaissance, pas dans votre dos. Il vous demande confirmation avant les actions qui portent à conséquence, les tâches ne démarrent que si vous les demandez et s'interrompent pour confirmation aux étapes risquées, et vous pouvez à tout moment suspendre la planification d'une tâche, l'empêcher de rendre compte, ou demander à l'assistant de la modifier ou de la supprimer. Pour savoir où vivent vos données et comment l'IA est gérée, consultez [Confidentialité et vos données](/fr/privacy/).

Ce que l'agent fait sur vos instructions, il le fait en votre nom, depuis votre navigateur, avec vos comptes. Certains sites n'accueillent pas volontiers l'automatisation. Reddit est l'exemple connu : les comptes détectés comme automatisés y sont restreints ou bannis. Si une tâche opère sur un site de ce genre, ce risque vous incombe.

## Phi Sentinel

Les tâches planifiées doivent continuer à s'exécuter même quand la fenêtre du navigateur est fermée. **Phi Sentinel** est l'app d'arrière-plan dans la barre des menus de macOS qui rend cela possible ; elle héberge aussi l'IA privée, l'option qui exécute une partie de l'IA sur votre propre Mac. Consultez [Phi Sentinel](/fr/sentinel/) pour la vue d'ensemble.

## Phi Link

**Phi Link** relie Phi à Telegram pour utiliser votre assistant depuis votre téléphone et recevoir des nouvelles quand vous êtes loin de votre Mac. Avec lui, vous pouvez :

- discuter avec votre assistant depuis votre téléphone,
- recevoir les résultats des exécutions de tâches terminées,
- poursuivre vos flux de travail loin du navigateur.

Vous pouvez le configurer de deux façons :

- **Bot officiel de Phi Link**, la voie la plus directe : scannez un code QR, terminez la configuration en un clic, et c'est réglé.
- **Votre propre bot Telegram**, pour plus de contrôle : créez un bot via le BotFather de Telegram, générez un jeton et collez-le dans les paramètres de Phi. Vous pouvez ainsi personnaliser le nom et l'avatar du bot.

L'identité de votre assistant reste la même, si bien que l'expérience reste cohérente entre l'ordinateur et le téléphone.
