---
description: "Prévisualisez un lien dans un panneau flottant au-dessus de la page que vous lisez dans Phi Browser, puis fermez-le, ouvrez-le dans un onglet ou ouvrez-le en Split View."
---

# Vue Peek

Une vue Peek est un panneau flottant qui affiche une page au-dessus de celle que vous lisez. Suivez un lien, lisez ce qui s'y trouve, fermez-le, et vous voilà revenu à votre point de départ, sans onglet en trop à ranger.

La vue Peek fonctionne dans les modes **Équilibré** et **Performance**. En mode Confortable, chaque lien s'ouvre plutôt comme un onglet normal. La vue Peek est aussi désactivée dans les Espaces de navigation privée.

## Ouvrir une vue Peek

Il existe trois façons d'en obtenir une :

- **Suivez un lien depuis un favori ou un onglet épinglé.** Quand un lien d'un favori ou d'un onglet épinglé mène vers un autre site, Phi le prévisualise dans une vue Peek au lieu d'éloigner cet onglet de sa page. Les liens qui restent sur le même site continuent de naviguer sur place.
- **Cliquez sur un lien en maintenant Maj.** Cela fonctionne dans n'importe quel onglet normal, pas seulement dans les favoris et les onglets épinglés.
- **Faites un clic droit sur un lien et choisissez « Ouvrir le lien dans la vue Peek ».** Même résultat que le clic avec Maj, depuis le menu contextuel de la page.

« Un autre site » signifie un domaine différent. Les sous-domaines d'un même site, par exemple passer d'un service Google à un autre, comptent comme le même site et s'ouvrent sur place comme d'habitude. Les liens qui ne sont pas des pages web, comme les adresses `mailto:`, ne s'ouvrent jamais dans une vue Peek.

Le clic avec Maj et l'élément du clic droit ne sont pas proposés depuis un volet de Split View ni depuis une vue Peek elle-même. À ces endroits, un lien s'ouvre comme il le ferait normalement.

## À l'intérieur du panneau

La page remplit le panneau bord à bord. Trois commandes occupent la bande à sa droite :

| Commande                  | Ce qu'elle fait                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fermer**                | Ferme l'aperçu et sa page.                                                                                                                     |
| **Ouvrir dans un onglet** | Transforme l'aperçu en onglet normal. La page n'est pas rechargée, donc la position de défilement et ce que vous avez saisi restent en l'état. |
| **Ouvrir en Split View**  | Place l'aperçu à côté de l'onglet d'où il vient, en Split View à deux volets.                                                                  |

## Fermer une vue Peek

Chacune de ces actions range l'aperçu :

- Appuyez sur **Échap** ou **⌘W**.
- Cliquez sur la page autour du panneau.
- Utilisez **Précédent** ou **Suivant**, ou saisissez une adresse dans la barre d'adresse. Les deux gestes se lisent comme « quitter l'aperçu » : la vue Peek se ferme et l'onglet en dessous reste où il était.
- Cliquez sur le bouton moins de la ligne de la barre latérale ou de l'onglet épinglé d'où vient la vue Peek.
- Fermez l'onglet d'où vient la vue Peek. Sa vue Peek part avec lui.

## Une vue Peek par onglet

Chaque onglet peut porter sa propre vue Peek, et seule celle de l'onglet que vous regardez est à l'écran. Passez à un autre onglet et le panneau disparaît ; revenez et il réapparaît avec la page telle que vous l'avez laissée. Ouvrir une seconde vue Peek depuis le même onglet remplace la première.

Tant qu'un onglet porte une vue Peek, la favicon de la page prévisualisée apparaît au bout de la ligne de cet onglet dans la barre latérale, ou comme un petit badge dans le coin d'un onglet épinglé. Survolez-la et elle devient un bouton moins qui ferme la vue Peek.

Les vues Peek survivent à un redémarrage. Quand Phi restaure votre session, une vue Peek revient attachée à l'onglet auquel elle appartenait.

## Désactiver la vue Peek

Ouvrez **Paramètres**, allez dans l'onglet **Navigation**, puis utilisez **Activer la vue Peek** sous **Peek**. Elle est activée par défaut.

Avec la vue Peek désactivée, les liens retrouvent leur comportement ordinaire : un lien vers un autre site dans un favori ou un onglet épinglé s'ouvre comme un nouvel onglet, le clic avec Maj ouvre une nouvelle fenêtre, et l'élément du clic droit disparaît. Toute vue Peek ouverte à ce moment-là devient un onglet normal au lieu de disparaître. Passer en mode Confortable a le même effet.

Pour comprendre comment les favoris et les onglets épinglés restent liés à leur page, voir [Favoris et onglets épinglés](/fr/bookmarks/). Pour les pages côte à côte et le reste du travail dans la barre latérale, voir [Dispositions et navigation](/fr/layouts/).
