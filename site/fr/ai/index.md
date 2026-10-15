---
description: "Découvrez le fonctionnement de l'assistant intégré de Phi Browser : lui donner un nom, lui parler, gérer les conversations, Conversation avec les onglets, la Mémoire, les Browser Skills et les actions agentiques."
---

# Faites connaissance avec votre assistant

Phi est livré avec un assistant intégré au navigateur, actif dès que vous êtes connecté. Vous ne configurez pas de compte IA séparé et ne vous connectez nulle part ailleurs : il est là, tout simplement. L'une des premières choses que vous faites est de lui donner un nom, et il se génère un avatar assorti, que vous pouvez lui demander d'ajuster. À partir de là, vous l'appelez par ce nom.

Ce nom n'est pas un détail. Plutôt que d'y penser comme à « une IA », un chatbot ou un modèle que vous pilotez, il est pensé pour ressembler à quelqu'un qui travaille à vos côtés dans le navigateur, une présence avec sa propre identité qui apprend à vous connaître avec le temps. La suite de ce guide décrit les différentes facettes de ce compagnon :

- **[Mémoire](/fr/memory/)**, comment il apprend à vous connaître.
- **Lui parler**, comment le joindre et lui demander des choses.
- **[Phi Chat](/fr/phi-chat/)**, l'assistant dans sa propre fenêtre, avec toutes vos conversations.
- **Conversation avec les onglets**, apporter les pages ouvertes dans la conversation comme contexte.
- **[Browser Skills](/fr/skills/)**, des workflows qu'il peut exécuter pour vous.
- **Agir pour votre compte**, parce qu'il peut mener des actions et exécuter des tâches, pas seulement répondre. Voir [Automatisation et Phi Link](/fr/automation/).

Vous préférez un navigateur ordinaire, sans rien de tout cela ? Vous pouvez tout désactiver. Voir [Confidentialité et vos données](/fr/privacy/#turning-ai-off).

## Mémoire

La Mémoire est la façon dont il apprend à vous connaître. Pendant que vous naviguez, il construit discrètement une image de ce qui compte pour vous, automatiquement, stockée en local sur votre appareil, et que vous êtes libre de consulter, gérer et supprimer. Voir [Mémoire](/fr/memory/) pour une vue complète.

## Lui parler

Parce que vous l'avez nommé pendant la prise en main, il a sa propre identité au lieu de ressembler à un chatbot générique, et vous vous adressez à lui par son nom.

Il y a plusieurs façons de le joindre :

- Cliquez sur le bouton **Chat**. Son emplacement dépend de votre [disposition](/fr/layouts/) : en bas de la barre latérale en Performance, ou en haut à droite de l'en-tête de page en Équilibré et Confortable.
- **Faites un clic droit sur du texte sélectionné** et choisissez **Demander à [votre assistant] à propos de…** pour l'interroger directement, la sélection servant de contexte.
- **Ouvrez [Phi Chat](/fr/phi-chat/)**, l'assistant dans une fenêtre à lui, depuis l'icône de Phi Sentinel dans la barre des menus, ou en appuyant trois fois sur Maj (⇧) une fois cette option activée.

Demander en contexte vaut mieux que copier des choses dans une fenêtre de chat séparée. Il peut répondre à des questions, résumer du contenu, expliquer des pages et aider dans des tâches, en s'appuyant sur l'onglet actuel, sur ce dont il se souvient à votre sujet et sur vos données externes connectées.

Une nouvelle conversation s'ouvre avec l'avatar et le nom de l'assistant au-dessus du champ de message. Cliquez sur l'avatar pour voir sa fiche de rôle. Dans la barre latérale, quelques [Browser Skills](/fr/skills/#using-skills-in-chat) adaptées à la page actuelle sont suggérées en dessous.

### Arrêter une réponse

Cliquez sur le bouton d'arrêt dans le champ de message pour mettre fin à une réponse. L'assistant cesse aussitôt de travailler et conserve ce qu'il a déjà écrit. Ce qu'il a déjà fait dans le navigateur, comme ouvrir une page ou remplir un champ, n'est pas annulé.

Si vous arrêtez avant qu'une partie de la réponse ne soit apparue, Phi reprend plutôt le message : il est retiré de la conversation, et votre texte, les onglets joints et les fichiers reviennent dans le champ de message pour que vous puissiez les modifier et renvoyer le tout. Une Skill que vous aviez choisie revient sous forme de texte brut. Si Phi ne peut pas confirmer que la réponse s'est arrêtée, il vous le signale et vous pouvez réessayer.

### Conversations précédentes

Dans la barre latérale, le menu **…** en haut liste vos dix conversations les plus récentes sous **Conversations récentes**, avec **Rechercher des conversations** en bas pour en retrouver d'autres par titre. La barre latérale n'affiche que les conversations du Profil dans lequel vous êtes, plus celles qui n'appartiennent à aucun Profil. Pour retrouver toutes les conversations, avec la recherche, les catégories et le rangement, utilisez [Phi Chat](/fr/phi-chat/).

### Revenir à une page {#going-back-to-a-page}

Chaque conversation se souvient de la dernière page web avec laquelle elle a été utilisée, y compris l'Espace et le Profil où elle se trouvait. Pour reprendre là où vous en étiez, ouvrez le menu **…** de la barre latérale et choisissez **Revenir à la dernière page**.

Phi ramène cette page dans son propre onglet, en réutilisant l'onglet d'origine s'il est encore ouvert dans cet Espace, et déplace la conversation dans la barre latérale de cet onglet. L'onglet où vous étiez garde sa page, et sa barre latérale commence une nouvelle conversation. Une Split View revient telle qu'elle était. Les groupes d'onglets, la position de défilement et ce qui avait été saisi dans la page, non.

L'option disparaît quand l'Espace ou le Profil d'origine a été supprimé, ou quand l'Espace a été déplacé vers un autre Profil. Phi ne lui en substitue pas un autre. Remettre l'Espace dans son Profil d'origine fait revenir l'option.

### Limites d'utilisation {#usage-limits}

L'assistant dispose d'un quota d'utilisation. Si vous l'atteignez, un bandeau au-dessus du champ de message vous le signale et, quand une heure précise est prévue, vous indique quand vous pourrez continuer. D'ici là, vous pouvez toujours écrire, mais pas envoyer. La Mémoire, les widgets et les tâches qui passent par l'[IA privée](/fr/sentinel/#private-ai) ne sont pas concernés. Phi n'indique pas la part du quota qui reste.

## Conversation avec les onglets {#chat-with-tabs}

L'assistant peut apporter les pages que vous avez ouvertes dans une conversation comme contexte. Joignez un ou plusieurs onglets et interrogez-les ensemble : les comparer, les résumer, ou extraire des détails de plusieurs à la fois, sans rien copier dans une fenêtre séparée. Comme il comprend [Split View et Groupes d'onglets](/fr/layouts/), ouvrir une conversation pendant que votre onglet actuel est dans un groupe joint tout le groupe, et vous pouvez joindre un Groupe d'onglets ou une Split View comme une seule unité. Vous pouvez ainsi poser des questions sur des pages liées sans expliquer comment elles s'articulent.

Les onglets envoyés avec un message restent dans la conversation sous forme de petites cartes. Cliquez sur l'une d'elles pour revenir à cet onglet, ou pour rouvrir sa page dans un nouvel onglet si l'onglet a changé de page depuis. Si un onglet que vous joignez a été déchargé pour économiser de la mémoire, Phi le charge en arrière-plan pour le lire, sans y basculer. Cela fonctionne en général, mais une page qui ne se charge pas à temps peut n'être lue qu'en partie, voire pas du tout.

Par défaut, ouvrir l'assistant joint l'onglet sur lequel vous êtes, pour que vous puissiez interroger tout de suite ce qui est devant vous. Si vous préférez commencer chaque conversation sans rien de joint, désactivez **Ajouter automatiquement l'onglet actif comme contexte aux nouvelles conversations** dans **Paramètres → Phi et IA → Barre latérale IA**. Vous pouvez toujours joindre des onglets à la main quand vous le souhaitez.

## Browser Skills

Les Browser Skills sont des workflows réutilisables. Apprenez-lui une tâche en plusieurs étapes une seule fois, et il pourra la répéter plus tard à la demande, transformant un travail récurrent en une simple requête. Phi fournit un ensemble de Skills intégrées que vous pouvez parcourir et ajouter, et vous pouvez créer les vôtres. Voir [Browser Skills](/fr/skills/) pour une vue complète.

## Où vont vos questions {#where-your-questions-go}

Bon à savoir, parce que « intégré » peut donner l'impression que « rien ne quitte jamais votre Mac ». La Mémoire, elle, reste sur votre appareil. Vos questions, non : quand vous demandez quelque chose, le contenu nécessaire pour y répondre part chez le fournisseur du modèle que vous utilisez, parce que c'est la seule façon pour un modèle de répondre. Il transite par nous sans être stocké, et il arrive sous notre compte plutôt que le vôtre, si bien que votre identité n'est pas communiquée au fournisseur.

Si vous voulez que l'IA elle-même s'exécute sur votre Mac, [Phi Sentinel](/fr/sentinel/) propose l'IA privée, qui garde certaines tâches entièrement locales. [Confidentialité et vos données](/fr/privacy/) couvre tout cela en détail.

## Pour aller plus loin

- [Phi Chat](/fr/phi-chat/), l'assistant dans sa propre fenêtre, avec toutes vos conversations au même endroit.
- [Automatisation et Phi Link](/fr/automation/), le laisser agir et exécuter des tâches planifiées, et le joindre depuis Telegram.
- [Browser Skills](/fr/skills/), des workflows réutilisables que vous lui apprenez.
- [Confidentialité et vos données](/fr/privacy/), où vivent vos données et comment garder le contrôle.
