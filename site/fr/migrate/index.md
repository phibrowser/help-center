---
description: "Comment Migrer depuis un autre navigateur recrée vos Profils et vos Espaces Arc ou Zen dans Phi Browser, ce que chaque navigateur transfère, à quelles demandes d'autorisation vous attendre, et en quoi cela diffère de l'importation."
---

# Migrer depuis Arc ou Zen

**Migrer depuis un autre navigateur…** reconstruit la structure de votre configuration Arc ou Zen dans Phi. La commande crée un Profil Phi pour chaque profil source et un Espace Phi pour chaque Espace source, puis remplit chaque Espace avec ses favoris et chaque Profil avec ses onglets épinglés et ses données de navigation. Une fois l'opération terminée, votre ancienne barre latérale est recréée dans Phi.

La migration ne fait que créer. Elle ne modifie jamais un Profil ou un Espace que vous avez déjà dans Phi, n'y fusionne rien et ne le supprime pas.

## Migrer ou importer {#migrate-or-import}

Phi propose deux commandes pour récupérer des données, côte à côte dans le menu **Phi** (le menu de l'app en gras à côté du menu Pomme) :

|                            | **Importer depuis un autre navigateur…**               | **Migrer depuis un autre navigateur…**                    |
| -------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| Ce que fait la commande    | Ajoute des données à l'Espace où vous êtes             | Crée de nouveaux Profils et Espaces calqués sur la source |
| Navigateurs                | Chrome, Safari, Arc, Dia ou un fichier                 | Arc et Zen                                                |
| Où arrivent les données    | Votre Espace actuel et son Profil                      | Les nouveaux Profils et Espaces qu'elle crée              |
| Ce que vous choisissez     | Les types de données à récupérer                       | Les Espaces à recréer                                     |
| Vos données Phi existantes | Les favoris et l'historique s'ajoutent à ce qui existe | Laissées intactes                                         |

Choisissez **Importer** si vous avez déjà une configuration Phi qui vous convient et que vous voulez y ajouter des favoris ou de l'historique. Choisissez **Migrer** si vous quittez Arc ou Zen et voulez retrouver vos Espaces tels qu'ils étaient, sans les reconstruire à la main. L'importation est décrite dans [Importation et exportation](/fr/import-export/).

## Avant de commencer {#before-you-start}

- **Le navigateur doit être installé sur ce Mac.** La migration lit les données d'Arc ou de Zen à l'endroit où ce navigateur les conserve. Si aucun des deux n'est installé, **Migrer depuis un autre navigateur…** est grisé.
- **Connectez-vous à Phi, ou continuez en tant qu'invité.** Les Profils et Espaces migrés appartiennent à votre compte Phi ; l'assistant vous demande donc de terminer le premier lancement avant de commencer.
- **Quittez d'abord Zen.** Phi lit des copies des fichiers de Zen, et tout ce que Zen n'a pas encore enregistré sur le disque serait ignoré. L'assistant vous le rappelle tant que Zen est ouvert.
- **Attendez-vous à des demandes d'accès au trousseau pour Arc.** Arc chiffre ses cookies ; macOS vous demande donc si Phi peut utiliser la clé de chiffrement d'Arc. Choisissez **Toujours autoriser**. Sinon, macOS vous le redemande pour chaque Profil. Si vous refusez, les cookies de ce Profil restent dans Arc alors que tout le reste est transféré, et le rapport ne signale pas ces cookies manquants.
- **Ne lancez pas d'importation en même temps.** Pendant une migration, **Importer depuis un autre navigateur…** est grisé, et inversement.

## Lancer une migration {#running-a-migration}

1. Ouvrez le menu **Phi** et choisissez **Migrer depuis un autre navigateur…**. La fenêtre **Migrer vers Phi** s'ouvre.
2. Choisissez **Arc** ou **Zen** et cliquez sur **Continuer**. Seuls les navigateurs installés sur ce Mac sont proposés.
3. Vérifiez l'aperçu sous **Vérifiez ce qui sera créé**. Il liste chaque profil source avec ses Espaces, ainsi qu'un résumé du type _2 Profils et 5 Espaces seront créés._ Décochez les Espaces dont vous ne voulez pas. Un Profil n'est créé que si au moins un de ses Espaces est coché.
4. Cliquez sur **Démarrer la migration**. Phi crée les Profils et les Espaces un par un et affiche sa progression. Cela peut prendre quelques minutes. Vous pouvez continuer à naviguer pendant ce temps ; les nouveaux Espaces ne s'ouvrent pas par-dessus celui que vous utilisez.
5. Lisez le rapport sous **Migration terminée**. Cliquez sur **Accéder à** suivi du nom d'un Espace pour passer au premier nouvel Espace, ou sur **Terminé** pour fermer la fenêtre.

## Ce qui est transféré {#what-comes-across}

La structure est la même pour les deux navigateurs. Chaque profil source devient un Profil Phi, et chaque Espace source devient un Espace Phi lié à ce Profil. L'Espace garde son nom et, quand Phi a un équivalent, sa couleur et son icône.

| Élément source                                                                                              | Dans Phi                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Profil Arc, ou conteneur Zen (les Espaces Zen sans conteneur partagent un même Profil)                      | Un nouveau Profil                                                                                                |
| Espace Arc ou Zen                                                                                           | Un nouvel Espace dans ce Profil                                                                                  |
| Éléments épinglés de la barre latérale d'Arc, ou onglets épinglés de chaque Espace Zen, avec leurs dossiers | Les favoris de cet Espace                                                                                        |
| Favorites d'Arc, ou Essentials de Zen                                                                       | Des onglets épinglés, placés selon votre [portée des onglets épinglés](/fr/bookmarks/#choose-a-pinned-tab-scope) |

Les données de navigation de chaque Profil dépendent du navigateur :

| Données           | Arc                             | Zen |
| ----------------- | ------------------------------- | --- |
| Historique récent | Oui                             | Oui |
| Cookies           | Oui, après l'accès au trousseau | Non |
| Extensions        | Celles du Chrome Web Store      | Non |

Quelques limites à connaître :

- **Les onglets ouverts ne sont pas transférés.** Seuls les éléments épinglés et les Favorites ou Essentials sont transférés. Les onglets ouverts mais non épinglés restent dans le navigateur source.
- **L'historique est récent, pas complet.** La migration conserve les entrées d'historique les plus récentes, et non chaque visite que vous avez faite.
- **Les extensions s'installent en arrière-plan.** Pour Arc, le rapport indique combien d'extensions du Chrome Web Store ont commencé à s'installer. Les extensions venant d'ailleurs ne sont pas transférées, et les extensions Firefox de Zen ne peuvent pas fonctionner dans Phi.
- **Les mots de passe et les cartes bancaires ne sont pas migrés.**
- **Les Espaces de fenêtre privée de Zen sont ignorés.**
- **Les onglets épinglés ont besoin d'un Espace.** Phi ne crée un Profil que s'il a au moins un Espace à créer. Un profil source sans Espaces, comme un conteneur Zen qu'aucun Espace Zen n'utilise, est ignoré, et le rapport indique combien de ses onglets épinglés ont été laissés de côté.

Votre navigateur source n'est pas modifié. Arc et Zen gardent tout ce qu'ils avaient : vous pouvez migrer, comparer et continuer à utiliser l'un ou l'autre navigateur.

## Lire le rapport {#reading-the-report}

Le rapport liste chaque Profil et chaque Espace avec ce qui lui est arrivé : combien de favoris chaque Espace a reçus, combien d'onglets épinglés ont été ajoutés, et si l'historique, les cookies et les extensions ont été transférés. En cas d'échec, le résumé indique combien d'éléments demandent votre attention, et la ligne concernée explique ce qui n'a pas fonctionné, par exemple **Espace non créé** ou **Les favoris n'ont pas pu être enregistrés**. Tout le reste de l'opération est conservé : un échec n'annule pas le reste.

## Migrer à nouveau {#migrating-again}

Phi retient que vous avez déjà migré depuis un navigateur vers votre compte. Si vous lancez une autre migration depuis le même navigateur, Phi vous prévient d'abord : migrer à nouveau crée un second ensemble de Profils et d'Espaces et ne met pas à jour le premier. Ne choisissez **Migrer à nouveau** que si c'est bien ce que vous voulez. Pour repartir de zéro sans vous retrouver avec deux copies côte à côte, supprimez ce que la première migration a créé avant de migrer à nouveau : d'abord ses Espaces, puis ses Profils. Supprimer un Espace laisse en place son Profil, ainsi que les cookies, l'historique et les extensions de ce Profil. Voir [Supprimer un Profil](/fr/spaces/#deleting-a-profile).

Il n'y a pas de synchronisation continue avec Arc ou Zen. Une migration est une copie ponctuelle de ce que contenait la source à ce moment-là.

## À lire ensuite {#what-to-read-next}

- [Importation et exportation](/fr/import-export/), ajouter des favoris et de l'historique à l'Espace où vous êtes.
- [Passer à Phi](/fr/switching-to-phi/), en quoi les Espaces, les Profils et les onglets épinglés diffèrent d'Arc et de Zen.
- [Espaces et Profils](/fr/spaces/), gérer les Profils et les Espaces créés par une migration.
- [Favoris et onglets épinglés](/fr/bookmarks/), le comportement des favoris et des onglets épinglés une fois dans Phi.
