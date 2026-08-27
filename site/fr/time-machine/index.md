---
description: "Découvrez comment fonctionnent les instantanés de restauration Time Machine de Phi Browser, quand ils sont créés, en quoi la restauration diffère du Time Machine d'Apple, et quand exporter vos données utilisateur."
---

# Sauvegardes Time Machine

Time Machine est le filet de sécurité de Phi pour les mises à jour. Avant certaines mises à jour majeures, Phi enregistre automatiquement un instantané de la version actuelle et de vos données ; si une nouvelle version ne se comporte pas comme prévu, vous pouvez revenir à la version où vous étiez. Il est là pour la rare mise à jour qui change beaucoup de choses d'un coup.

## Ce que c'est, et ce que ce n'est pas

Le Time Machine de Phi est une fonction de **retour à une version antérieure**, pas un outil de sauvegarde généraliste. Deux choses avec lesquelles il est facile de le confondre :

- Ce n'est **pas** le Time Machine d'Apple. Il ne sauvegarde pas votre Mac et n'a rien à voir avec la fonction système du même nom.
- Ce n'est **pas** une sauvegarde continue et planifiée de votre navigation. Phi ne crée pas d'instantané chaque jour et ne vous laisse pas choisir un point arbitraire dans le temps. Un instantané est créé automatiquement, occasionnellement, juste avant une mise à jour qui comporte plus de risques que d'habitude.

Si ce que vous voulez est une sauvegarde que vous contrôlez, pour passer sur un nouveau Mac ou garder une copie avant d'expérimenter, utilisez plutôt **Exporter les données utilisateur** (voir [Exporter vos propres données](#exporting-your-own-data) plus bas).

## Quand un instantané est créé

Vous ne lancez pas vous-même un instantané Time Machine. Phi en crée un automatiquement, juste avant de passer à une mise à jour qui le justifie, et une seule fois par mise à jour de ce type. La plupart des mises à jour n'en déclenchent aucun. Quand un instantané existe, il capture les données Phi qui appartiennent à la version précédente, c'est-à-dire vos favoris, Espaces, onglets épinglés, paramètres, Mémoire et état de navigation, avec la trace de la version de l'app à laquelle il correspond, de sorte qu'une restauration rétablit une configuration cohérente plutôt qu'un mélange dépareillé. L'app elle-même n'est pas stockée dans l'instantané ; elle est téléchargée pendant la restauration.

Les instantanés sont stockés **localement sur votre Mac**. Ils ne sont pas envoyés dans le cloud, ne sont pas liés à votre compte et ne peuvent pas être déplacés vers un autre Mac.

## Revenir à une version précédente

1. Ouvrez le menu **Aide** et trouvez **Sauvegardes Time Machine**.
2. Chaque instantané disponible est listé par version, build et date, par exemple _Phi 1.6 (590) du 2026.6.11_. S'il n'y en a aucun, le menu affiche **Aucune sauvegarde disponible**.
3. Choisissez l'instantané voulu. Phi demande confirmation avec **« Restaurer la sauvegarde Time Machine ? »**, en précisant que _Phi va quitter et la restaurer, et que l'app actuelle et les données utilisateur sélectionnées seront remplacées._
4. Choisissez **Restaurer**. Phi télécharge la version précédente, remplace l'app actuelle et les données correspondantes, puis se relance dans la version restaurée.

Comme le retour en arrière télécharge la version précédente, une connexion internet est nécessaire pendant la restauration. La restauration est conçue pour aboutir ou se rétablir sans dégâts en cas d'interruption ; une fermeture ou un plantage en cours de restauration ne laissera donc pas Phi dans un état cassé.

## Exporter vos propres données {#exporting-your-own-data}

Time Machine gère les retours de mise à jour. Pour une sauvegarde que vous créez et conservez selon vos propres règles, utilisez **Gérer les données utilisateur** dans le menu **Aide** :

- **Exporter les données utilisateur…** enregistre vos données Phi dans un seul fichier que vous pouvez stocker n'importe où.
- **Importer les données utilisateur…** remplace vos données Phi actuelles à partir d'un fichier exporté plus tôt, puis relance l'app.

C'est le bon outil pour passer sur un nouveau Mac ou garder une copie personnelle, la partie que Time Machine ne couvre volontairement pas.

## Le lien avec le reste de Phi

Un instantané Time Machine inclut les données derrière [Espaces et profils](/fr/spaces/) et la [Mémoire](/fr/memory/) ; revenir en arrière les ramène donc à leur état au moment de l'instantané. Tout reste sur votre Mac, dans la ligne de l'approche « local-first » de Phi décrite dans [Confidentialité et vos données](/fr/privacy/).
