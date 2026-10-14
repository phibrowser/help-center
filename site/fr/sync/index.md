---
description: "Gardez vos Espaces, favoris, onglets épinglés, Règles d'URL, réglages pris en charge et historique de navigation identiques sur chaque Mac où vous êtes connecté, chiffrés avant l'envoi avec des clés que seuls vos Mac détiennent."
---

# Synchronisation

La synchronisation garde les données propres à Phi identiques sur chaque Mac où vous êtes connecté au même compte Phi. Enregistrez un favori ou renommez un Espace sur un Mac, et la modification arrive sur les autres. Elle reste désactivée tant que vous ne la configurez pas sur chaque Mac, et elle est conçue pour que nous ne puissions pas lire ce qu'elle transporte : tout est chiffré sur votre Mac avant d'être envoyé, avec des clés que seuls vos Mac détiennent.

Tout ce qui est décrit ici se trouve dans **Paramètres → Synchronisation**.

## Ce qui est synchronisé

| Quoi                                  | Détails                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Espaces**                           | Le nom, l'icône, la couleur, le thème, et le Profil auquel chaque Espace appartient.                                                                                                                                                                                                                                          |
| **Profils**                           | Le nom des Profils, et les Espaces qui appartiennent à chaque Profil.                                                                                                                                                                                                                                                         |
| **Favoris et dossiers**               | Les favoris de chaque Espace, avec leurs dossiers et leur ordre.                                                                                                                                                                                                                                                              |
| **Onglets épinglés**                  | Les onglets épinglés, selon la portée choisie dans **Paramètres → Espaces**.                                                                                                                                                                                                                                                  |
| **Règles d'URL**                      | Les règles qui dirigent les sites correspondants vers un Espace, la Navigation privée ou Kiosk.                                                                                                                                                                                                                               |
| **Réglages pris en charge**           | Le mode de disposition, l'apparence, le thème et la teinte des sélections, les réglages de la barre de favoris et de l'URL complète, le raccourci du nouvel onglet, l'avertissement à la fermeture de la Navigation privée, le Picture-in-Picture automatique, la portée des onglets épinglés, et l'Espace défini par défaut. |
| **Données de navigation, par Profil** | L'historique de navigation, les préférences propres au navigateur comme le moteur de recherche par défaut, et les extensions avec leurs réglages synchronisés.                                                                                                                                                                |

::: warning Les suppressions sont synchronisées aussi
Supprimez un Espace ou un Profil sur un Mac, et il est supprimé de chaque Mac synchronisé avec celui-ci, favoris compris. Phi le signale dans la boîte de dialogue de confirmation ; lisez-la donc avant de confirmer.
:::

Certaines choses restent volontairement où elles sont :

- **Les mots de passe, les cookies et la saisie automatique.** Ils n'entrent jamais dans la synchronisation. Phi n'a pas de gestionnaire de mots de passe à lui, et un coffre que vous connectez via le [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/) appartient à son fournisseur et se synchronise selon les conditions de ce fournisseur.
- **Les onglets ouverts.** Les onglets ouverts ordinaires ne sont pas recréés sur un autre Mac. Les onglets épinglés, si.
- **Phi Chat et la Mémoire.** Vos conversations avec l'assistant restent sur le Mac où vous les avez eues, tout comme la [Mémoire](/fr/memory/).
- **Les Espaces de navigation privée**, et les Espaces dans lesquels travaillent les agents. Rien de ce qu'ils contiennent n'est synchronisé. Une Règle d'URL qui envoie un site en Navigation privée reste une règle, et se synchronise donc comme les autres.
- **Les réglages liés à un seul Mac**, dont les réglages d'IA et des agents.

## Avant de commencer

- **Un compte Phi, connecté sur chaque Mac.** Sans compte, le panneau propose seulement **Connectez-vous pour synchroniser vos données sur tous vos appareils**. Si vous avez choisi de découvrir Phi sans compte, voir [Se connecter plus tard](/fr/get-started/#signing-in-later).
- **La version officielle de Phi.** La synchronisation passe par le service de synchronisation de Phinomenon, et une copie de Phi que vous compilez vous-même depuis le code open source ne peut pas l'utiliser.

## Configurer votre premier Mac

1. Ouvrez **Paramètres → Synchronisation** et cliquez sur **Configurer la synchronisation sur cet appareil**. La fenêtre explique ce qui va se passer ; cliquez sur **Continuer**.
2. **Enregistrez votre code de récupération.** Phi crée un code de récupération et l'affiche une seule fois : 27 caractères en groupes de cinq. Cliquez sur **Copier** et rangez-le en lieu sûr, par exemple dans un gestionnaire de mots de passe, puis cliquez sur **Je l'ai enregistré**.
3. **Confirmez votre code de récupération.** Phi vous demande de saisir le code que vous avez enregistré. Les tirets, les espaces et la casse n'ont pas d'importance. La synchronisation reste désactivée tant que le code n'est pas validé, si bien que vous ne pouvez pas découvrir plus tard qu'il n'a jamais été enregistré. Si vous fermez la fenêtre à cette étape, Phi vous le redemande la prochaine fois que vous ouvrez la configuration ou que vous redémarrez.
4. **Associez vos profils et vos Espaces.** Sur un premier Mac, le compte ne contient encore rien à associer ; cette étape confirme donc surtout ce qui est ajouté : choisissez **Enregistrer comme nouveau** pour chaque Profil et **Tout ajouter comme nouveaux** pour les Espaces. Voir [Ajouter un autre Mac](#add-another-mac) pour ce que font ces deux étapes une fois que le compte contient des données.
5. Cliquez sur **Terminer**. Le panneau affiche **Synchronisation initiale en cours** pendant que ce Mac envoie ses données, puis **À jour**.

::: warning Le code de récupération n'est affiché qu'une fois
Le code est créé sur votre Mac et ne nous est jamais envoyé ; nous ne pouvons donc ni l'afficher à nouveau, ni en envoyer un autre, ni le réinitialiser. Pour ajouter un autre Mac, il vous faut soit le code, soit un Mac déjà configuré. Perdez les deux, et personne ne peut déverrouiller la copie chiffrée de votre compte, nous compris.
:::

## Ajouter un autre Mac {#add-another-mac}

1. Connectez-vous au même compte Phi, ouvrez **Paramètres → Synchronisation**, cliquez sur **Configurer la synchronisation sur cet appareil**, puis sur **Continuer**.
2. Sur l'écran **Ajouter cet appareil à votre compte**, choisissez comment ce Mac rejoint le compte :
   - **Demander l'approbation d'un autre appareil.** Phi affiche un code court et attend. Sur un Mac déjà configuré, ouvrez **Paramètres → Synchronisation** : la demande apparaît sous **Appareils** avec le même code et son heure d'expiration. Vérifiez que les deux codes correspondent, puis cliquez sur **Approuver**, ou sur **Refuser** si vous ne l'attendiez pas. Le code identifie le nouveau Mac et n'a rien de secret ; vous pouvez donc le lire à voix haute au téléphone sans risque. Une demande refusée ou expirée propose **Essayer une autre méthode**.
   - **Saisir un code de récupération.** Saisissez le code que vous avez enregistré sur votre premier Mac.
3. **Associez vos profils.** Phi apparie les Profils de ce Mac avec ceux de votre compte et vous interroge sur ceux qu'il n'a pas pu associer. Pour chaque Profil de ce Mac, choisissez **Attribuer à** un Profil du compte, ou **Enregistrer comme nouveau**. Les Profils du compte sans équivalent sur ce Mac sont listés sous **Profils du compte non attribués**, où **Créer sur ce Mac** les ajoute.
4. **Associez vos Espaces.** Pour chaque Espace de ce Mac, choisissez l'Espace du compte auquel il correspond, ou **Ajouter comme nouveau**. **Tout ajouter comme nouveaux** règle d'un coup tous les Espaces encore sans choix, et les Espaces dont le nom correspond exactement sont choisis pour vous. Les Espaces de votre compte absents de ce Mac apparaissent sous **Espaces à ajouter depuis votre compte** et sont créés lorsque vous terminez. Rien n'est supprimé sur ce Mac.
5. **Passez en revue ce qui change.** Si vous avez associé un Espace de ce Mac à un Espace de votre compte, le nom, l'icône, la couleur et le thème du compte remplacent ceux de ce Mac, et l'Espace peut être déplacé vers le Profil auquel il appartient dans votre compte. Les onglets, favoris, onglets épinglés et Règles d'URL de ce Mac ne sont pas touchés. Pour conserver les valeurs de ce Mac, cliquez sur **Retour** et ajoutez plutôt cet Espace comme nouveau. Cliquez sur **Appliquer**, puis sur **Terminer**.

Le chargement du compte peut prendre jusqu'à deux minutes pendant que Phi compte vos Espaces, et il nécessite une connexion : il n'existe aucune copie en cache sur laquelle se rabattre. Une fois la synchronisation lancée, les favoris, les onglets épinglés et les Règles d'URL des deux Mac sont conservés ; rien n'est donc perdu d'un côté comme de l'autre.

### Terminer plus tard

**Terminer plus tard** apparaît sur les pages d'association. Choisissez-le, ou fermez la fenêtre, et ce Mac continue de naviguer en local : rien n'est synchronisé, le panneau indique **Non jumelé**, et Phi ne rouvre pas la configuration de lui-même. Revenez dans **Paramètres → Synchronisation** et cliquez sur **Continuer la configuration** quand vous êtes prêt. Phi recharge alors votre compte ; les choix laissés en suspens ne sont donc pas conservés.

## Vérifier l'état de la synchronisation

Le haut du panneau Synchronisation indique où en sont les choses :

- **À jour**, **Synchronisation en cours…**, ou **Synchronisation initiale en cours** pendant la première synchronisation.
- **Hors ligne**, avec une note indiquant que les modifications seront synchronisées une fois la connexion rétablie. Phi continue de fonctionner à partir des données locales et envoie vos modifications dès que le Mac est de nouveau en ligne.
- **Synchronisation en pause.** Un Profil de ce Mac n'est pas encore configuré pour la synchronisation, en général un Profil créé après la configuration. Phi l'enregistre de lui-même et continue de réessayer ; la ligne en dessous indique pourquoi il attend, et **Réessayer** relance aussitôt une tentative.
- **Attention requise.** Quelque chose a échoué, et **Dernier problème** indique quoi. **Connexion expirée** signifie qu'il faut vous reconnecter. **Aucune connexion** et **Erreur du serveur** disparaissent d'eux-mêmes à la prochaine synchronisation réussie. **La synchronisation doit être réinitialisée** est traité dans [Configurer à nouveau la synchronisation](#set-up-sync-again).

**Détails** ouvre une ligne par type de données Phi (Espaces, Favoris, Onglets épinglés, Règles d'URL, Paramètres) qui montre ce que ce Mac a récemment reçu, envoyé, et ce qu'il attend encore d'envoyer, plus une ligne pour les données de navigation de chaque Profil. **Synchroniser maintenant** demande à ce Mac de tout synchroniser tout de suite. Vous en aurez rarement besoin : Phi est averti quand un autre Mac modifie quelque chose et vérifie aussi de lui-même, et il ne lance jamais deux synchronisations à moins d'une minute d'intervalle.

## Appareils

La section **Appareils** liste chaque Mac configuré sur votre compte, avec **Ce Mac** signalé, ainsi que tout Mac en attente de rejoindre le compte, avec son code, **Approuver**, **Refuser** et l'heure d'expiration de la demande. Pour approuver, ce Mac doit être connecté et avoir terminé sa propre configuration.

Chaque Mac ne peut se retirer que lui-même, depuis son propre panneau Synchronisation. Il n'existe pas encore de moyen de retirer un Mac que vous n'avez plus : un Mac perdu reste sur le compte et continue de recevoir les modifications tant qu'il est connecté. Le déconnecter, si vous y avez encore accès, y met fin.

## Retirer un Mac de la synchronisation {#remove-a-mac-from-sync}

Dans **Paramètres → Synchronisation**, sous **Récupération et suppression**, cliquez sur **Supprimer cet appareil de la synchronisation…** et confirmez avec **Supprimer cet appareil**.

- Ce Mac cesse de se synchroniser, le service de synchronisation le révoque, et sa configuration de synchronisation, ses clés et l'association de ses Profils et Espaces sont effacées de ce Mac.
- Tout ce que vous parcouriez reste : les Espaces, les favoris, l'historique et les onglets épinglés sont conservés en entier, et vous restez connecté à votre compte.
- Vos autres Mac ne sont pas affectés et continuent de se synchroniser entre eux.
- Pour faire revenir ce Mac, relancez la configuration et rejoignez le compte par approbation ou avec le code de récupération.

Vous ne pouvez pas retirer le dernier Mac du compte. Configurez d'abord la synchronisation sur un autre Mac.

::: warning Le retrait ne renouvelle pas les clés de votre compte
Retirer un Mac l'empêche de recevoir quoi que ce soit de nouveau, mais ne change pas les clés de chiffrement de votre compte et ne peut pas reprendre ce que ce Mac avait déjà synchronisé. Ce qui s'y trouvait y reste.
:::

## Configurer à nouveau la synchronisation {#set-up-sync-again}

Si le panneau indique **Les données de synchronisation du compte ont changé. La synchronisation des données Phi est en pause.**, les données de synchronisation de votre compte ont été réinitialisées et la configuration de ce Mac ne leur correspond plus. Les données de Phi cessent de se synchroniser tant que vous n'agissez pas ; réessayer ou redémarrer n'y change rien. Cliquez sur **Configurer à nouveau la synchronisation** et confirmez. Phi efface la configuration de synchronisation et les informations d'association de ce Mac, conserve vos données de navigation locales et ce qui se trouve dans votre compte, et vous guide à nouveau dans la configuration, y compris pour rejoindre le compte par approbation ou avec le code de récupération.

## Se déconnecter

Vous déconnecter de votre compte Phi arrête la synchronisation sur ce Mac, et rien de vos autres Mac n'arrive tant que vous ne vous reconnectez pas. Reconnectez-vous au même compte, et la synchronisation reprend là où elle s'était arrêtée et rattrape ce qu'elle a manqué ; le panneau Synchronisation vous indique s'il reste quelque chose à terminer. Passer à un autre compte ne mélange jamais les deux : chaque compte a ses propres données synchronisées et sa propre association.

## Comment vos données sont protégées

- **Chiffrées avant de quitter votre Mac.** Vos Mac créent les clés, et seule la copie chiffrée est envoyée. Le service de synchronisation la stocke et la transmet à vos autres Mac ; il ne peut pas la déchiffrer.
- **Se connecter ne suffit pas pour les lire.** Un nouveau Mac n'obtient la clé que par l'approbation d'un Mac qui la détient déjà, ou grâce à votre code de récupération. C'est pourquoi il n'existe nulle part de lien « code de récupération oublié ».
- **Ce sont tout de même des données que nous conservons pour vous.** La copie chiffrée se trouve sur le service de synchronisation de Phinomenon ; la synchronisation fait donc partie de ce que Phi envoie. [Confidentialité et vos données](/fr/privacy/) liste le reste, et la [Politique de confidentialité](https://phibrowser.com/privacy/) et les [Conditions d'utilisation](https://phibrowser.com/terms/) font foi sur tous ces points.

## Synchroniser ou exporter

La synchronisation est faite pour des Mac que vous continuez d'utiliser en parallèle. Pour un passage ponctuel vers un nouveau Mac, ou une copie que vous gardez vous-même, **Gérer les données utilisateur → Exporter les données utilisateur…** dans le menu **Aide** est l'outil le plus adapté ; consultez [Importation et exportation](/fr/import-export/).

## Et ensuite

- [Espaces et Profils](/fr/spaces/), ce que sont un Espace et un Profil, et pourquoi la configuration les associe.
- [Favoris et onglets épinglés](/fr/bookmarks/), la portée des onglets épinglés que suit la synchronisation.
- [Confidentialité et vos données](/fr/privacy/), tout ce que Phi envoie et conserve d'autre.
- [Importation et exportation](/fr/import-export/), déplacer des données une fois plutôt qu'en continu.
