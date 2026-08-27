---
description: "Comment importer favoris et historique dans Phi Browser depuis un autre navigateur ou un fichier (favoris HTML, historique Safari JSON, archive d'exportation Safari ZIP), ce que chaque type de fichier importe, et comment exporter vos favoris vers un fichier HTML."
---

# Importation et exportation

Phi peut récupérer les favoris et l'historique de navigation d'autres navigateurs, soit directement depuis un navigateur installé, soit depuis un fichier que vous avez déjà. Il peut aussi exporter les favoris d'un Espace vers un fichier HTML standard. Cette page couvre les deux directions et détaille précisément ce que chaque type de fichier importe.

Si vous découvrez Phi et souhaitez d'abord une vue d'ensemble de la migration, commencez par [Passer à Phi](/fr/switching-to-phi/) et revenez ici pour les détails.

## Deux façons d'importer

Il existe deux points d'entrée, et les deux ouvrent le même écran d'importation **Données du navigateur** :

- **Au premier lancement.** Le parcours d'accueil vous propose d'importer pendant que vous configurez Phi.
- **À tout moment ensuite.** Ouvrez le menu **Phi** (le menu de l'app en gras à côté du menu Pomme) et choisissez **Importer depuis un autre navigateur…**.

L'écran d'importation vous propose quatre sources : **Depuis Chrome**, **Depuis Safari**, **Depuis Arc** et **Depuis un fichier**. Chrome, Safari et Arc lisent directement les données du navigateur installé et vous laissent choisir les types de données à récupérer. Les sections ci-dessous détaillent **Depuis un fichier**.

Les importations arrivent dans l'[Espace](/fr/spaces/) depuis lequel vous lancez l'importation. Les favoris rejoignent l'arborescence de favoris de cet Espace, et l'historique rejoint votre historique de navigation. L'importation n'est pas disponible en [navigation privée](/fr/incognito/) ; passez d'abord dans un Espace ou une fenêtre normale.

::: tip Quittez Safari avant d'importer depuis celui-ci
Si vous utilisez **Depuis Safari**, quittez d'abord Safari. Safari garde une partie de l'activité récente en mémoire et ne l'écrit entièrement sur le disque qu'à sa fermeture ; importer pendant qu'il tourne encore peut donc manquer vos derniers favoris et votre historique le plus récent. Cela ne s'applique pas à **Depuis un fichier**, qui lit un instantané que vous avez déjà exporté.
:::

## Importer depuis un fichier

Choisissez **Depuis un fichier**, cliquez sur **Choisir un fichier…**, puis sélectionnez le fichier. Phi accepte trois types de fichiers et décide quoi faire d'après le fichier lui-même. Il n'y a pas de cases à cocher par type de données pour cette option ; elle importe ce que le fichier contient. Pendant l'opération, vous verrez **Importation des données depuis le fichier…**.

### Ce que chaque type de fichier importe

| Fichier                          | Extension       | Ce qui est importé                       |
| -------------------------------- | --------------- | ---------------------------------------- |
| **Favoris HTML**                 | `.html`, `.htm` | Les favoris uniquement                   |
| **Historique Safari JSON**       | `.json`         | L'historique de navigation uniquement    |
| **Archive d'exportation Safari** | `.zip`          | Les favoris **et** l'historique ensemble |

**Favoris HTML** est le format standard « Netscape bookmark » que tout grand navigateur peut exporter, y compris Chrome, Safari, Firefox, Edge et Phi lui-même. En importer un ajoute ses favoris à l'Espace actuel dans un dossier **Importés**, pour qu'ils restent groupés et soient faciles à retrouver ou à supprimer plus tard.

**Historique Safari JSON** et **Archive d'exportation Safari** proviennent tous deux de la fonction **Fichier → Exporter → Exporter des données de navigation…** de Safari. Safari produit une archive `.zip` ; si vous l'avez déjà décompressée, vous pouvez aussi choisir directement le fichier `History.json` qu'elle contient.

- Une **archive d'exportation Safari** (`.zip`) est le choix le plus simple : sélectionnez-la et Phi importe vos favoris et votre historique en une seule étape.
- Un fichier **Historique Safari JSON** seul importe uniquement l'historique.

### Ce qui est importé, et ce qui ne l'est pas

- **Uniquement les favoris et l'historique.** Les mots de passe, cartes bancaires et autres éléments que Safari peut aussi exporter ne sont jamais importés par ce chemin. Récupérer des données aussi sensibles sans vous le demander serait une erreur, donc Phi ignore ces fichiers même quand une archive Safari les contient.
- **Un fichier défectueux ne bloque jamais le reste.** Dans un `.zip`, Phi lit tous les fichiers de favoris et d'historique qu'il peut lire et ignore les autres, comme un fichier sans rapport ou une entrée endommagée.
- **Un historique en plusieurs parties est importé en entier.** Safari découpe parfois une grande exportation d'historique en plusieurs fichiers (`History.json`, `History-0001.json`, etc.), et Phi les importe tous.
- **Réimporter n'accumule pas de doublons.** L'historique importé est fusionné avec votre historique existant, comme pour toute importation de navigateur ; importer deux fois le même fichier ne multiplie donc pas vos visites.
- **Les fichiers volumineux ou endommagés sont traités sans risque.** Phi plafonne ce qu'il lit d'un seul fichier ou d'une seule archive ; un fichier anormalement gros ou malformé ne peut donc pas bloquer le navigateur. Phi l'ignore et continue.
- **Une importation sans rien à récupérer se termine proprement.** Si un fichier ne contient rien d'utilisable par Phi, l'importation se termine sans erreur au lieu de rester bloquée.

## Exporter vos favoris

Phi peut exporter les favoris de l'**Espace actuel** vers un fichier HTML. Ouvrez le menu **Favoris** et choisissez **Exporter les favoris…**, puis choisissez où l'enregistrer. Phi propose un nom de fichier du type `Phi-Bookmarks-<Space>-<date>.html`.

- Le fichier utilise le même format standard **Netscape bookmark** décrit plus haut ; il s'importe donc proprement dans Chrome, Safari, Firefox, Edge, ou de nouveau dans Phi via **Depuis un fichier**.
- L'exportation couvre l'Espace où vous vous trouvez. Comme les favoris sont [propres à chaque Espace](/fr/bookmarks/), changez d'Espace et exportez de nouveau pour enregistrer le jeu d'un autre Espace.
- **Exporter les favoris…** est grisé quand l'Espace actuel n'a aucun favori, et indisponible dans les Espaces de navigation privée (qui n'ont jamais d'arborescence de favoris).
- Un favori [Split](/fr/layouts/), qui associe deux pages dans une seule entrée, est écrit comme deux entrées ordinaires pour que le format standard puisse le représenter.

### L'aller-retour

Exportez les favoris d'un Espace en HTML, puis utilisez **Depuis un fichier** pour les réimporter, que ce soit dans un autre Espace, un autre Profil, ou Phi sur un autre Mac. C'est généralement la façon la plus rapide de copier un jeu de favoris entre Profils ou entre deux Mac.

## Tout exporter (pas seulement les favoris)

**Exporter les favoris…** n'exporte que les favoris. Pour sauvegarder toutes vos données Phi (Espaces, Profils, historique, et plus) dans un seul fichier, utilisez plutôt **Gérer les données utilisateur → Exporter les données utilisateur…** dans le menu **Aide**. C'est l'outil pour passer sur un nouveau Mac ou garder une copie personnelle complète ; consultez [Sauvegardes Time Machine](/fr/time-machine/#exporting-your-own-data) pour voir comment il s'articule avec les instantanés de restauration automatiques de Phi.

## À lire ensuite

- [Favoris et onglets épinglés](/fr/bookmarks/) : comment les favoris se comportent une fois dans Phi.
- [Espaces et profils](/fr/spaces/) : pourquoi les importations arrivent dans un Espace, et comment les Profils séparent vos données.
- [Passer à Phi](/fr/switching-to-phi/) : la carte de migration complète depuis Chrome, Safari, Arc et Dia.
- [Sauvegardes Time Machine](/fr/time-machine/) : instantanés de restauration automatiques et exportation complète des données utilisateur.
