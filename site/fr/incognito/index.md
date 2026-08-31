---
description: "Découvrez comment les Espaces de navigation privée intègrent la navigation privée à la barre latérale de Phi Browser, comment les Règles d'URL et les extensions fonctionnent avec les sessions privées, et ce qui se passe à la fermeture de l'Espace."
---

# Espaces de navigation privée

Un **Espace de navigation privée** amène la navigation privée dans la barre latérale. Il apparaît dans la bande des Espaces et fonctionne comme n'importe quel autre Espace tant qu'il existe, avec sa propre fenêtre et ses propres onglets, mais rien le concernant n'est écrit sur le disque. La session ne vit qu'en mémoire, et fermer l'Espace la détruit.

## Ouvrir un Espace de navigation privée

Choisissez **Fichier → Nouvel espace de navigation privée**. L'Espace rejoint la bande de la barre latérale avec une icône ninja (🥷) et le nom **Navigation privée**. Ouvrez-en plusieurs à la fois et ils sont alors numérotés, **Navigation privée 1**, **Navigation privée 2**, etc., chacun gardant son numéro jusqu'à sa fermeture. Il n'existe pas de raccourci clavier intégré pour en créer un.

Deux choses sont à savoir sur la session sous-jacente :

- **Tous les Espaces de navigation privée partagent une même session privée.** Ce sont des entrées séparées dans la barre latérale, mais un seul profil en mémoire les soutient tous, toujours bâti sur votre Profil par défaut, quel que soit l'endroit d'où vous l'avez ouvert. Connectez-vous à un site dans un Espace de navigation privée et vous y êtes aussi connecté dans les autres. Pour garder deux sessions vraiment séparées, utilisez plutôt des Espaces sur des [Profils](/fr/spaces/) différents.
- **Les fenêtres de navigation privée forment une session à part.** Le classique **Fichier → Nouvelle fenêtre de navigation privée** existe toujours, et sa session ne se mélange jamais à celle partagée par les Espaces de navigation privée.

## Son apparence

Un Espace de navigation privée utilise toujours le thème sombre dédié à la navigation privée de Phi ; les thèmes par Espace ne s'appliquent donc pas. Vous pouvez changer son icône comme pour tout autre Espace, mais ce choix ne dure que le temps de l'Espace lui-même. Et comme il n'y a rien de persistant à configurer, les Espaces de navigation privée n'apparaissent pas dans la section Espaces des Paramètres.

## Ce qui reste hors d'une session privée

- **L'historique, les cookies et les données de sites** ne vivent qu'en mémoire et meurent avec la session.
- **Les favoris sont indisponibles.** Un Espace de navigation privée n'affiche aucun favori et ne vous laisse pas en créer.
- **Les onglets épinglés ne sont pas affichés.** Les Espaces de navigation privée n'affichent ni n'autorisent jamais les onglets épinglés, quelle que soit la portée des onglets épinglés choisie pour la navigation normale.
- **Les fonctionnalités IA restent à l'écart.** La discussion avec l'assistant est indisponible, et le bouton Mémoire de la barre latérale est masqué.
- **Les extensions restent à l'écart, sauf invitation.** Seules les extensions que vous avez autorisées en navigation privée sont actives dans une session privée. Voir [plus bas](#extensions-in-an-incognito-space).
- **L'importation de données de navigateur est bloquée.** Phi refuse avec _« Les données du navigateur ne peuvent pas être importées en navigation privée. Passez dans un espace ou une fenêtre normale, puis réessayez. »_
- **Time Machine n'y touche pas.** Les [Sauvegardes Time Machine](/fr/time-machine/) excluent entièrement les Espaces de navigation privée ; restaurer un instantané n'en fait donc jamais réapparaître un.

Une chose survit volontairement : les fichiers que vous téléchargez sont enregistrés sur votre Mac comme d'habitude. Supprimez-les vous-même si vous ne voulez pas les garder.

## Envoyer des sites en navigation privée avec les Règles d'URL

Les [Règles d'URL](/fr/spaces/#url-rules-route-matching-sites-automatically) peuvent diriger automatiquement les sites correspondants vers la navigation privée. Dans l'éditeur de règles, le sélecteur de destination propose une cible générique **Navigation privée** aux côtés de vos Espaces normaux et de Kiosk, jamais un Espace de navigation privée précis, car ceux-ci n'existent que tant qu'ils sont ouverts. Quand une règle se déclenche, Phi dirige la page vers l'Espace de navigation privée où vous êtes déjà ou vers le premier encore ouvert, et ouvre à la demande un nouvel Espace de navigation privée quand aucun n'est ouvert.

Le routage vers la navigation privée est une valve à sens unique. Une règle peut envoyer une navigation dans une session privée, mais rien n'en ressort jamais par routage : pendant que vous naviguez dans un Espace de navigation privée ou une fenêtre de navigation privée, les Règles d'URL ne s'appliquent pas, donc un lien ouvert là ne peut pas être extrait vers un Espace normal.

Vous pouvez aussi y envoyer un lien isolé à la main : faites un clic droit dessus dans une fenêtre normale et choisissez un Espace de navigation privée dans le sous-menu **Ouvrir le lien dans l'espace**, qui liste les Espaces de navigation privée ouverts aux côtés de vos Espaces normaux.

## Extensions dans un Espace de navigation privée {#extensions-in-an-incognito-space}

Parce que la session privée d'un Espace de navigation privée est bâtie sur votre **Profil par défaut**, celui avec lequel Phi démarre, seules les extensions du Profil par défaut peuvent s'y exécuter, et chacune a besoin de votre autorisation explicite, la même règle que dans tout navigateur basé sur Chromium. Pour en autoriser une en navigation privée :

1. Dans une fenêtre sur le Profil par défaut, choisissez **Gérer les extensions** dans le menu Extensions, ou saisissez `phi://extensions` dans la barre d'adresse.
2. Ouvrez les **Détails** de l'extension.
3. Activez **Autoriser en mode navigation privée**.

Le réglage vaut par extension et couvre aussi bien les Espaces de navigation privée que les fenêtres de navigation privée. Une extension installée sur un autre Profil n'apparaît jamais dans un Espace de navigation privée ; pour l'y utiliser, installez-la d'abord sur le Profil par défaut. Gardez à l'esprit qu'une extension autorisée peut observer les sites que vous visitez en privé ; n'accordez donc cette autorisation qu'aux extensions de confiance. Aucune nouvelle extension ne peut être installée depuis une session privée.

## Fermer un Espace de navigation privée

Choisissez **Fermer l'espace de navigation privée** dans le menu **Espaces**, ou fermez le dernier onglet de l'Espace. Dans les deux cas, Phi demande d'abord **« Cela fermera aussi cet espace de navigation privée. Voulez-vous vraiment continuer ? »**, et fermer l'Espace le retire aussi de la bande. Cochez **Ne plus demander** pour ignorer la confirmation par la suite.

La session privée partagée survit tant qu'un Espace de navigation privée reste ouvert. Quand la dernière fenêtre d'Espace de navigation privée se ferme, ou que Phi quitte, la session en mémoire est détruite avec tout ce qu'elle contient. Il n'y a aucune étape de nettoyage ensuite, car rien de tout cela n'a jamais touché le disque.

## Le lien avec le reste de Phi

Les Espaces de navigation privée s'appuient sur le modèle d'espace de travail décrit dans [Espaces et profils](/fr/spaces/). Voyez-les comme des Espaces dont la couche d'isolation est jetable. Pour ce que Phi conserve ou non de votre navigation normale, consultez [Confidentialité et vos données](/fr/privacy/), et pour comprendre pourquoi une restauration ne ramène jamais une session privée, consultez [Sauvegardes Time Machine](/fr/time-machine/).
