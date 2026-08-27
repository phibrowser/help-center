---
description: "Découvrez comment Phi Browser utilise les Espaces comme espaces de travail et les Profils pour isoler cookies, historique, connexions, extensions, Règles d'URL, favoris et onglets épinglés."
---

# Espaces et Profils

Les Espaces et les Profils vous permettent de faire coexister des mondes séparés dans un seul navigateur, que ce soit le travail et le personnel, un projet annexe, un client ou un sujet de recherche, sans jongler entre les fenêtres ni vous connecter et vous déconnecter sans cesse. Ce sont deux couches aux rôles distincts, et Phi les garde simples en posant l'une sur l'autre.

## Les deux couches

- Un **Espace** est un espace de travail dans la barre latérale. Il a son propre nom, sa propre icône, sa propre couleur et ses propres favoris. Changer d'Espace rhabille la barre latérale autour de la tâche en cours.
- Un **Profil** est la couche d'isolation en dessous. Chaque Profil a ses propres cookies, son propre historique, ses propres connexions et ses propres extensions, si bien que deux Profils peuvent être connectés au même site avec des comptes différents en même temps.

La relation est à sens unique : **chaque Espace appartient à un seul Profil, et un Profil peut porter plusieurs Espaces.** Les Espaces qui partagent un Profil partagent les mêmes connexions. La visibilité des onglets épinglés est configurable et peut suivre la portée Espace, Profil ou App ; elle ne change rien à l'isolation des Profils.

Une façon simple de le retenir : **les Espaces organisent l'apparence et le contexte ; les Profils décident de ce qui reste séparé en dessous.**

## Ce que contient un Espace

- **Un nom, une icône et une couleur.** Choisissez parmi les icônes intégrées de Phi ou utilisez un emoji, pour que chaque Espace soit reconnaissable d'un coup d'œil dans la barre latérale.
- **Ses propres favoris.** Chaque Espace a un ensemble de favoris indépendant, pour que les pages enregistrées d'un Espace professionnel n'encombrent pas un Espace personnel.
- **Son propre thème (facultatif).** Un Espace peut utiliser son propre thème de couleurs ou suivre votre thème global. Basculer dans l'Espace applique son thème, pour que la fenêtre corresponde au contexte dans lequel vous êtes.
- Les **onglets épinglés** suivent la portée choisie dans **Paramètres → Espaces**. Chaque Espace peut avoir les siens, les Espaces qui utilisent le même Profil peuvent les partager, ou tous les Profils et Espaces classiques peuvent partager un même ensemble. Voir [Favoris et onglets épinglés](/fr/bookmarks/#choose-a-pinned-tab-scope) pour les détails.

## Créer, changer et gérer les Espaces

- **Créez** un Espace depuis la bande des Espaces dans la barre latérale. Vous lui donnez un nom et choisissez le Profil auquel il appartient, ou créez un **Nouveau profil** directement à cet endroit si cet Espace doit être entièrement séparé.
- **Changez** d'Espace depuis la barre latérale d'un simple clic. Les onglets, les favoris et le thème de la barre latérale changent en conséquence, et Phi rouvre la fenêtre de l'Espace si elle n'est pas déjà ouverte.
- **Renommer**, **Modifier l'icône** et **Modifier le thème** se trouvent dans le menu de l'Espace. Choisissez **Suivre le thème global** pour abandonner le thème propre à l'Espace.
- **Supprimez** un Espace depuis le même menu. Supprimer un Espace supprime aussi les favoris et les Règles d'URL qui lui appartiennent, et cette action est irréversible. Si la portée des onglets épinglés est **Espace**, les onglets épinglés de cet Espace sont supprimés aussi. Les onglets épinglés de portée Profil ou App ne sont pas affectés.

## Règles d'URL : envoyer les sites vers le bon Espace automatiquement {#url-rules-send-sites-to-the-right-space-automatically}

Les Espaces sont le plus utiles quand les bonnes pages arrivent au bon endroit sans que vous ayez à y penser. C'est le rôle des **Règles d'URL** : une règle reconnaît un site et l'ouvre dans l'Espace que vous lui attribuez, quel que soit l'endroit où vous cliquez ou saisissez le lien.

Ouvrez **Règles d'URL…** depuis le menu **Espaces** de la barre des menus, ou depuis la section Espaces des Paramètres, pour gérer les règles de tous les Espaces au même endroit. Chaque règle s'applique par :

- **Suffixe de domaine**, `figma.com` et tous ses sous-domaines.
- **Domaine**, un hôte exact, comme `www.example.com`.
- **Le domaine contient**, tout hôte contenant un mot, comme `git`.
- **URL**, un hôte plus un préfixe de chemin, comme `example.com/team`.

En plus de vos Espaces classiques, une règle peut cibler **Navigation privée** : les sites correspondants s'ouvrent alors dans un [Espace de navigation privée](/fr/incognito/), créé à la demande quand aucun n'est ouvert.

Réglez une règle sur **Toujours demander** plutôt que de router en silence. Quand un lien correspondant s'ouvre, Phi affiche un sélecteur **Ouvrir dans quel Espace ?** pour vous laisser choisir. Votre Espace actuel est signalé, et vous pouvez garder la page là où vous êtes. Quand plusieurs règles pourraient correspondre, la plus spécifique l'emporte (un chemin plus long l'emporte sur un plus court ; un hôte exact l'emporte sur une correspondance générique).

## Espaces de navigation privée : un Espace sans laisser de trace

Pour une navigation qui ne doit rien laisser derrière elle, **Fichier → Nouvel Espace de navigation privée** ouvre un Espace privé directement dans la bande de la barre latérale. La sensation d'espace de travail est la même, mais une session en mémoire le porte à la place d'un Profil : pas de favoris, pas d'onglets épinglés, pas d'IA, et rien d'écrit sur le disque. Le fermer détruit la session. Voir [Espaces de navigation privée](/fr/incognito/) pour une vue complète.

## Comment cela s'articule avec le reste de Phi

Les Espaces s'appuient sur l'espace de travail de la barre latérale décrit dans [Dispositions et navigation](/fr/layouts/), et les couleurs par Espace utilisent la même palette que [Thèmes et apparence](/fr/themes/). Si vous venez d'Arc ou de Dia, voir [Passer à Phi](/fr/switching-to-phi/) pour la comparaison de migration. Comme les Profils isolent les cookies et l'historique, ce que l'assistant peut voir est limité au Profil dans lequel vous naviguez. Voir [Confidentialité et vos données](/fr/privacy/) pour la façon dont vos données sont traitées.
