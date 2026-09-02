---
description: "Comprenez les favoris vivants de Phi Browser, l'organisation de la barre latérale, les onglets épinglés, leur portée configurable et quand utiliser chacun."
---

# Favoris et onglets épinglés

Dans Phi, la barre latérale est votre espace de travail, et les favoris et les onglets épinglés sont les deux façons de garder les pages qui comptent. Ce chapitre va plus loin que [Dispositions et navigation](/fr/layouts/) sur leur comportement, en commençant par ce qui surprend beaucoup de personnes venant d'un navigateur traditionnel : dans Phi, un favori s'ouvre sur place, comme un onglet.

## Des favoris qui s'ouvrent sur place

Dans un navigateur traditionnel, un favori est un lien inerte : cliquer dessus ouvre toujours un nouvel onglet, et vous finissez avec des doublons de la même page. Phi traite au contraire le favori comme une entrée vivante. Cliquez dessus et il s'ouvre sur place : cette même entrée de la barre latérale devient son onglet actif. Fermez la page et le favori reste exactement là où il était, prêt à s'ouvrir de nouveau. Si le favori est déjà ouvert, cliquer dessus active cet onglet au lieu d'en créer une seconde copie.

C'est l'idée qu'Arc et Dia ont popularisée : la barre latérale contient des choses vivantes, pas une archive à part que vous visitez deux fois par an. Phi suit ce modèle, tout en conservant une vraie arborescence de favoris, dossiers compris, pour que vous gardiez l'organisation qu'offre une archive de favoris.

## Créer et organiser les favoris

- **Créez un favori** en faisant glisser un onglet dans la barre latérale, ou faites un clic droit sur un onglet et choisissez **Ajouter aux favoris** (l'intitulé devient **Ajouter à la barre de favoris** en mode Confortable). Utilisez **Ajouter à un dossier** pour le déposer directement dans un dossier.
- **Organisez avec des dossiers.** Les favoris se rangent dans des dossiers, et vous pouvez créer un sous-dossier avec **Nouveau sous-dossier…**.
- **Enregistrez une Split View comme un seul favori.** Depuis une Split View, **Ajouter le Split aux favoris** conserve les deux pages en une seule entrée qui rouvre la paire ensemble.
- **Gérez un favori** depuis son menu contextuel : **Copier le lien**, **Renommer…**, **Modifier…**, **Ouvrir dans un nouvel onglet**, **Ouvrir en Split View** et **Supprimer**.

Les favoris sont limités à l'Espace dans lequel vous êtes. Chaque [Espace](/fr/spaces/) garde son propre ensemble, pour que les pages enregistrées d'un Espace professionnel n'encombrent pas un Espace personnel.

## Onglets épinglés

Les onglets épinglés occupent le haut de la barre latérale, en grille, pour la poignée de pages où vous vivez : votre messagerie, un tableau de bord, un outil de projet. Ils sont persistants : un onglet épinglé reste dans la grille même après la fermeture de sa page, et cliquer dessus rouvre la page.

- **Épinglez un onglet** d'un clic droit en choisissant **Épingler**, ou en le faisant glisser dans la grille des épinglés. **Désépingler**, dans le même menu, le renvoie dans la liste des onglets.
- **Réorganisez** les onglets épinglés en les faisant glisser dans la grille.
- **Épinglez une Split View.** **Épingler le Split View** conserve la configuration à deux volets comme un seul élément épinglé qui rouvre les deux côtés ; **Désépingler la Split View** l'annule.

## Choisir la portée des onglets épinglés {#choose-a-pinned-tab-scope}

Ouvrez **Paramètres → Espaces**, puis utilisez **Portée des onglets épinglés** pour choisir jusqu'où vos onglets épinglés sont partagés. **Profil** est la valeur par défaut.

| Portée     | Où apparaissent les onglets épinglés                                             |
| ---------- | -------------------------------------------------------------------------------- |
| **Espace** | Chaque Espace a ses propres onglets épinglés.                                    |
| **Profil** | Les Espaces qui utilisent le même Profil partagent leurs onglets épinglés.       |
| **App**    | Les onglets épinglés sont partagés entre tous les Profils et Espaces classiques. |

Les Espaces de navigation privée n'affichent ni n'acceptent jamais d'onglets épinglés, quelle que soit la portée choisie.

Changer de portée déplace aussi vos onglets épinglés existants vers la nouvelle organisation. Quand vous passez à une portée plus étroite, Phi copie les onglets épinglés actuels dans chaque destination existante, et ces copies peuvent ensuite être modifiées indépendamment. Quand vous passez à une portée plus large, Phi fusionne les ensembles existants. Les copies identiques sont regroupées, tandis que les versions différentes sont conservées. Phi affiche une confirmation avant d'appliquer l'un ou l'autre changement.

Les favoris sont toujours limités à un seul Espace. Le réglage des onglets épinglés ne les affecte pas. Voir [Espaces et Profils](/fr/spaces/) pour la façon dont ces couches s'emboîtent.

## Revenir à la page d'origine

Suivre des liens dans un onglet épinglé ou un favori peut l'éloigner de son URL d'origine. Pour revenir, double-cliquez sur l'onglet épinglé, ou cliquez sur l'icône de site (la favicon) d'un favori ouvert comme onglet.

Les liens qui mènent vers un autre site ne déplacent pas l'onglet du tout : Phi les prévisualise dans un panneau flottant, la [vue Peek](/fr/peek/), et le favori ou l'onglet épinglé garde ainsi la page à laquelle il est lié. Si vous préférez que ces liens s'ouvrent dans de nouveaux onglets, désactivez **Ouvrir automatiquement une vue Peek depuis les onglets épinglés et les favoris** dans **Paramètres → Navigation**.

Pour conserver la page actuelle, maintenez **Commande (⌘)** pendant que vous double-cliquez sur l'onglet épinglé ou cliquez sur la favicon du favori. La page actuelle rejoint la liste des onglets comme onglet séparé, et l'onglet épinglé ou le favori revient à son URL d'origine.

## Lequel utiliser ?

Un partage simple des rôles :

- Les **onglets épinglés** sont les pages où vous vivez, toujours en haut, à un clic, et partagées selon la portée Espace, Profil ou App que vous choisissez.
- Les **favoris** sont les pages que vous voulez garder, organisées en dossiers, limitées à un Espace, et ouvertes sur place quand vous en avez besoin.

Si vous venez d'Arc ou de Dia, voir [Passer à Phi](/fr/switching-to-phi/) pour comparer la barre latérale vivante, les favoris et les onglets épinglés de Phi. Pour importer des favoris depuis un autre navigateur ou un fichier, ou pour réexporter les favoris d'un Espace en HTML, voir [Importer et exporter](/fr/import-export/).
