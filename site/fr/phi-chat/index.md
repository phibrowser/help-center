---
description: "Utilisez Phi Chat, votre assistant dans sa propre fenêtre, pour ouvrir des conversations depuis la barre latérale, parcourir les conversations de tous vos Profils, les organiser en catégories et suivre vos tâches."
---

# Phi Chat

Phi Chat, c'est votre assistant dans une fenêtre à lui, avec sa propre icône dans le Dock, à part de vos fenêtres de navigateur. C'est le même assistant, avec les mêmes conversations que dans la barre latérale, disposé pour un travail plus long : la conversation en grand à droite et la liste de vos conversations à gauche.

La barre latérale reste l'endroit où vous posez vos questions sur la page devant vous. Phi Chat est l'endroit où retrouver une conversation plus ancienne, tout voir au même endroit et suivre ce que vos tâches ont rapporté.

## Ouvrir Phi Chat {#opening-phi-chat}

Il y a plusieurs façons d'y accéder :

- **Depuis la barre latérale.** Cliquez sur **Ouvrir dans Phi Chat** dans la barre supérieure de la barre latérale pour y transférer la conversation en cours. Consultez [Transférer une conversation](#moving-a-conversation-over).
- **Depuis la barre des menus.** Cliquez sur l'icône de [Phi Sentinel](/fr/sentinel/) et choisissez **Ouvrir Phi Chat**. Le choisir de nouveau alors que Phi Chat est au premier plan masque la fenêtre. Un petit point rouge sur cet élément signifie que l'assistant a publié quelque chose que vous n'avez pas encore lu.
- **Avec un raccourci.** Le raccourci est désactivé par défaut. Activez **Invoquer Phi Chat avec Maj Maj Maj** dans **Paramètres → Phi et IA → Phi Sentinel**, puis appuyez trois fois sur Maj (⇧) depuis n'importe quelle app. Il fonctionne comme l'élément de la barre des menus : les mêmes touches masquent donc de nouveau la fenêtre. Le raccourci passe par Phi Sentinel, qui a besoin de l'autorisation Accessibilité de macOS pour détecter les frappes et vous la demande quand vous activez le raccourci.
- **Depuis une notification de tâche.** Quand une tâche rapporte quelque chose qui mérite votre attention, Phi peut afficher sa propre carte de notification, distincte des notifications de macOS. Son bouton **Afficher les détails** ouvre cette conversation dans Phi Chat. Consultez [Automatisation et Phi Link](/fr/automation/#notifications).
- **Depuis le Dock ou le Finder.** Une fois que vous avez ouvert Phi Chat, il apparaît aussi comme une app dans le dossier **Phi Apps**, à l'intérieur du dossier Applications de votre dossier de départ, ce qui vous permet de le garder dans le Dock.

Phi Chat n'a pas besoin qu'une fenêtre de navigateur soit ouverte. Si Phi n'est pas en cours d'exécution, ouvrir Phi Chat le lance en arrière-plan sans ouvrir de fenêtre de navigateur.

## Transférer une conversation {#moving-a-conversation-over}

Dans la barre latérale, **Ouvrir dans Phi Chat** devient disponible une fois qu'une conversation a été enregistrée et que l'assistant n'est pas en train de répondre. Un clic ouvre cette conversation dans Phi Chat, replie la barre latérale et la laisse prête pour une nouvelle conversation.

Deux choses à savoir avant de cliquer :

- **Le texte non envoyé reste sur place.** Si vous avez saisi du texte ou ajouté des pièces jointes dans la barre latérale sans les envoyer, Phi vous demande confirmation avant de les abandonner. Ils ne sont pas transférés dans Phi Chat.
- **Une fenêtre Phi Chat déjà ouverte est réutilisée.** Si Phi Chat est déjà ouvert, il passe à cette conversation au lieu d'ouvrir une deuxième fenêtre. Tout ce que vous n'aviez pas envoyé dans cette fenêtre est perdu, de même qu'une réponse qu'elle était encore en train d'écrire.

Pour faire le chemin inverse, cliquez sur **Ouvrir dans la barre latérale** dans la barre supérieure de Phi Chat. Phi rouvre la page web avec laquelle la conversation a été utilisée en dernier, dans son Espace et son Profil d'origine, et poursuit la conversation dans la barre latérale de cette page. La conversation reste aussi ouverte dans Phi Chat. Le bouton n'est pas disponible si la conversation n'a jamais été utilisée avec une page web, ou si son Espace ou son Profil d'origine n'existe plus, et le survoler vous indique lequel de ces cas s'applique.

## Les conversations de tous vos Profils {#conversations-from-every-profile}

Les conversations appartiennent au [Profil](/fr/spaces/) dans lequel elles ont été commencées. La barre latérale les tient séparées : dans un Profil donné, elle affiche les conversations de ce Profil, plus celles qui n'appartiennent à aucun Profil, et rien de vos autres Profils.

Phi Chat est le seul endroit qui les affiche toutes. Ouvrez le menu au-dessus de la liste des conversations pour choisir ce que vous voyez :

- **Toutes**, toutes les conversations.
- **Tâches**, les conversations dans lesquelles l'assistant a créé une tâche. Consultez [Tâches et conversations non lues](#tasks-and-unread-conversations).
- **Par profil**, soit **Sans profil**, soit l'un de vos Profils, affiché sous la forme **Profil « Travail »** pour ne pas le confondre avec une catégorie du même nom.
- **Catégories**, les catégories que vous avez créées, plus **Sans catégorie**.

Choisir un Profil ici ne fait que filtrer la liste. Cela ne déplace jamais une conversation vers un autre Profil, et ouvrir une conversation dans Phi Chat ne change pas le Profil auquel elle appartient. Une conversation sans Profil peut en recevoir un avec **Déplacer vers un profil** dans son menu, mais il n'existe aucun moyen de l'en retirer ensuite.

Si vous supprimez un Profil, ses conversations sont conservées. Elles perdent leurs catégories et apparaissent sous **Sans catégorie** dans Phi Chat. Si les fonctions d'IA sont désactivées à ce moment-là, cela se produit une fois qu'elles sont réactivées.

## Retrouver et organiser les conversations

La liste affiche d'abord vos conversations les plus récemment actives, 50 à la fois. Cliquez sur **Afficher plus** en bas pour voir les plus anciennes.

- **Recherchez** avec la loupe en haut de la liste, ou appuyez sur Commande (⌘) + K. La recherche porte sur les titres des conversations, pas sur les messages qu'elles contiennent.
- **Commencez une nouvelle conversation** avec **Nouvelle conversation**. Elle rejoint la liste dès que vous envoyez son premier message.
- **Renommez, classez ou supprimez** une conversation depuis le menu **…** de sa ligne. **Supprimer** ne peut pas être annulé.
- **Revenez à une page** avec **Revenir à la dernière page** dans ce même menu, qui fonctionne comme [la version de la barre latérale](/fr/ai/#going-back-to-a-page).

### Catégories

Les catégories sont vos propres étiquettes pour les conversations, partagées entre tous vos Profils. Une conversation peut appartenir à plusieurs catégories à la fois.

- Créez-en une avec le bouton **+** dans le menu au-dessus de la liste, ou avec **Nouvelle catégorie** en bas de n'importe quel sous-menu **Catégories**, ce qui y classe aussi la conversation où vous êtes.
- Cochez ou décochez des catégories depuis **Catégories** dans le menu **…** d'une conversation, ou dans le menu de la barre supérieure de la conversation elle-même. Les modifications s'appliquent à chaque clic.
- Renommez ou supprimez une catégorie en la sélectionnant dans le menu, puis en ouvrant son propre menu. Supprimer une catégorie ne supprime pas ses conversations. Toute conversation qui se retrouve sans catégorie passe sous **Sans catégorie**.

La catégorie **Sans catégorie** est intégrée. Elle regroupe toutes les conversations qui n'ont pas de catégorie, et elle ne peut être ni renommée ni supprimée.

### Travailler sur plusieurs conversations à la fois

Pour agir sur plusieurs conversations ensemble, choisissez **Sélectionner** dans le menu **…** d'une conversation, ou faites Commande + clic (⌘ + clic) sur une ligne. Maj + clic sélectionne une plage. Une barre remplace l'en-tête de la liste : vous pouvez y choisir **Tout sélectionner**, modifier les **Catégories** de toute la sélection, les **Supprimer**, ou cliquer sur **Terminé** (ou appuyer sur Échap) pour finir.

**Tout sélectionner** sélectionne les conversations actuellement chargées dans la liste. Celles qui se trouvent encore derrière **Afficher plus** ne sont pas incluses : le nombre affiché correspond donc exactement à ce qui sera concerné.

## Tâches et conversations non lues {#tasks-and-unread-conversations}

Quand vous demandez à l'assistant de faire quelque chose en arrière-plan ou selon un planning, la tâche rend compte dans la conversation où vous l'avez demandée. Phi Chat vous aide à suivre ces rapports :

- **Un point bleu et un titre en gras** signifient qu'une tâche a envoyé un rapport dans cette conversation depuis la dernière fois que vous l'avez ouverte.
- **Une icône d'horloge** après le titre signifie que la conversation a des tâches encore actives.
- **La vue Tâches** rassemble toutes les conversations dans lesquelles l'assistant a créé une tâche. Les conversations antérieures au rattachement des tâches à leurs conversations n'y apparaissent pas.

L'apparence d'un rapport, et la façon de gérer la tâche qui en est à l'origine, sont décrites dans [Automatisation et Phi Link](/fr/automation/#tasks-report-back-to-their-conversation).

## À savoir

- **Phi Chat fait partie de Phi Browser.** Quitter Phi Chat, avec Commande (⌘) + Q ou depuis son menu, ne ferme que Phi Chat, et vos fenêtres de navigateur restent ouvertes. Quitter Phi depuis une fenêtre de navigateur ferme aussi Phi Chat.
- **Les liens s'ouvrent dans votre navigateur.** Un lien sur lequel vous cliquez dans Phi Chat s'ouvre dans une fenêtre de navigateur, dans le dernier Profil que vous avez utilisé, en suivant vos [Règles d'URL](/fr/spaces/#url-rules-route-matching-sites-automatically).
- **Désactiver l'IA le ferme.** Quand les fonctions d'IA sont désactivées dans **Paramètres → Phi et IA**, Phi Chat se ferme, son app est retirée du dossier **Phi Apps** et il ne peut plus être ouvert. Vos conversations ne sont pas supprimées, et vous pouvez rouvrir Phi Chat une fois les fonctions d'IA réactivées.
- **Vos questions partent toujours vers un modèle.** Phi Chat est le même assistant que la barre latérale, donc ce que vous demandez est traité de la même façon. Consultez [Où vont vos questions](/fr/ai/#where-your-questions-go).

## Pour aller plus loin

- [Faites connaissance avec votre assistant](/fr/ai/), lui parler dans la barre latérale et apporter des onglets dans une conversation.
- [Automatisation et Phi Link](/fr/automation/), des tâches qui s'exécutent en arrière-plan et rendent compte.
- [Espaces et Profils](/fr/spaces/), comment les Profils gardent les choses séparées.
