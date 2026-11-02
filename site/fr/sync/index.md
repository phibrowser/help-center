---
description: "Gardez vos Espaces, favoris, onglets épinglés, Règles d'URL, réglages pris en charge et historique de navigation identiques sur chaque Mac où vous êtes connecté, chiffrés avant l'envoi avec des clés que seuls vos Mac détiennent."
---

# Synchronisation

La synchronisation garde les données propres à Phi identiques sur chaque Mac où vous êtes connecté au même compte Phi. Enregistrez un favori ou renommez un Espace sur un Mac, et la modification arrive sur les autres. Elle reste désactivée tant que vous ne la configurez pas sur chaque Mac, et elle est conçue pour que nous ne puissions pas lire ce qu'elle transporte : tout est chiffré sur votre Mac avant d'être envoyé, avec des clés que seuls vos Mac détiennent.

Tout ce qui est décrit ici se trouve dans **Paramètres → Synchronisation**.

## Ce qui est synchronisé {#what-syncs}

| Quoi                                  | Détails                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Espaces**                           | Le nom, l'icône, la couleur, le thème, et le Profil auquel chaque Espace appartient.                                                                                                                                                                                                                                                                   |
| **Profils**                           | Le nom des Profils, et les Espaces qui appartiennent à chaque Profil.                                                                                                                                                                                                                                                                                  |
| **Favoris et dossiers**               | Les favoris de chaque Espace, avec leurs dossiers et leur ordre.                                                                                                                                                                                                                                                                                       |
| **Onglets épinglés**                  | Les onglets épinglés, selon la portée choisie dans **Paramètres → Espaces**.                                                                                                                                                                                                                                                                           |
| **Règles d'URL**                      | Les règles qui dirigent les sites correspondants vers un Espace, la Navigation privée ou Kiosk.                                                                                                                                                                                                                                                        |
| **Réglages pris en charge**           | Le mode de disposition, l'apparence, le thème et la teinte des sélections, les réglages de la barre de favoris et de l'URL complète, **Comportement des nouveaux onglets** (ce qu'ouvre ⌘T), l'avertissement à la fermeture de la Navigation privée, le Picture-in-Picture automatique, la portée des onglets épinglés, et l'Espace défini par défaut. |
| **Données de navigation, par Profil** | L'historique de navigation, les préférences propres au navigateur comme le moteur de recherche par défaut, et les extensions avec leurs réglages synchronisés.                                                                                                                                                                                         |

::: warning Les suppressions sont synchronisées aussi
Supprimez un Espace ou un Profil sur un Mac, et il est supprimé de chaque Mac synchronisé avec celui-ci, favoris compris. Phi le signale dans la boîte de dialogue de confirmation ; lisez-la donc avant de confirmer.
:::

Certaines choses restent volontairement où elles sont :

- **Les mots de passe, les cookies et la saisie automatique.** Ils n'entrent jamais dans la synchronisation. Phi n'a pas de gestionnaire de mots de passe à lui, et un coffre que vous connectez via le [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/) appartient à son fournisseur et se synchronise selon les conditions de ce fournisseur.
- **Les onglets ouverts.** Les onglets ouverts ordinaires ne sont pas recréés sur un autre Mac. Les onglets épinglés, si.
- **Phi Chat et la Mémoire.** Vos conversations avec l'assistant restent sur le Mac où vous les avez eues, tout comme la [Mémoire](/fr/memory/).
- **Les Espaces de navigation privée**, et les Espaces dans lesquels travaillent les agents. Rien de ce qu'ils contiennent n'est synchronisé. Une Règle d'URL qui envoie un site en Navigation privée reste une règle, et se synchronise donc comme les autres.
- **Les raccourcis clavier.** Ce que vous définissez dans **Paramètres → Raccourcis** reste sur le Mac où vous l'avez défini.
- **Les réglages liés à un seul Mac**, dont les réglages d'IA et des agents.

## Avant de commencer

- **Un compte Phi, connecté sur chaque Mac.** Sans compte, le panneau propose seulement **Connectez-vous pour synchroniser vos données sur tous vos appareils**. Si vous avez choisi de découvrir Phi sans compte, voir [Se connecter plus tard](/fr/get-started/#signing-in-later).
- **La version officielle de Phi.** La synchronisation passe par le service de synchronisation de Phinomenon, et une copie de Phi que vous compilez vous-même depuis le code open source ne peut pas l'utiliser.

## Configurer votre premier Mac {#set-up-your-first-mac}

1. Ouvrez **Paramètres → Synchronisation** et cliquez sur **Configurer la synchronisation sur cet appareil**. La fenêtre explique ce qui va se passer ; cliquez sur **Continuer**.
2. **Enregistrez votre code de récupération.** Phi crée un code de récupération et l'affiche une seule fois : 27 caractères en groupes de cinq. Cliquez sur **Copier** et rangez-le en lieu sûr, par exemple dans un gestionnaire de mots de passe, puis cliquez sur **Je l'ai enregistré**.
3. **Confirmez votre code de récupération.** Phi vous demande de saisir le code que vous avez enregistré. Les tirets, les espaces et la casse n'ont pas d'importance. Si vous ne l'avez pas enregistré, cliquez sur **Retour** : Phi affiche à nouveau le même code pour que vous puissiez l'enregistrer maintenant. La synchronisation reste désactivée tant que le code n'est pas validé, si bien que vous ne pouvez pas découvrir plus tard qu'il n'a jamais été enregistré. Si vous fermez la fenêtre à cette étape, Phi vous le redemande la prochaine fois que vous ouvrez la configuration ou que vous redémarrez, mais **Retour** a alors disparu, car le code n'est pas conservé une fois la fenêtre fermée.
4. **Phi configure la synchronisation de lui-même.** Sur un premier Mac, le compte ne contient encore rien à associer ; il n'y a donc aucune page d'association à remplir. Phi ajoute les Profils et les Espaces de ce Mac au compte et affiche **Configuration de la synchronisation…** pendant l'opération. Si Phi n'a pas pu lire tout le contenu du compte, il affiche à la place les pages d'association décrites dans [Ajouter un autre Mac](#add-another-mac).
5. Une fois la configuration terminée, le panneau affiche **Synchronisation initiale en cours** pendant que ce Mac envoie ses données, puis **À jour**.

::: warning Le code de récupération n'est affiché qu'une fois
Le code est créé sur votre Mac et ne nous est jamais envoyé ; nous ne pouvons donc ni l'afficher à nouveau, ni en envoyer un autre, ni le réinitialiser. Pour ajouter un autre Mac, il vous faut soit le code, soit un Mac déjà configuré. Perdez les deux, et personne ne peut déverrouiller la copie chiffrée de votre compte, nous compris. Si le code est déjà perdu, voir [Code de récupération oublié ?](#forgot-your-recovery-code)
:::

## Ajouter un autre Mac {#add-another-mac}

1. Connectez-vous au même compte Phi, ouvrez **Paramètres → Synchronisation**, cliquez sur **Configurer la synchronisation sur cet appareil**, puis sur **Continuer**.
2. Sur l'écran **Ajouter cet appareil à votre compte**, choisissez comment ce Mac rejoint le compte :
   - **Demander l'approbation d'un autre appareil.** Phi affiche un code court et attend. Sur un Mac déjà configuré, ouvrez **Paramètres → Synchronisation** : la demande apparaît sous **Appareils** avec le même code et son heure d'expiration. Vérifiez que les deux codes correspondent, puis cliquez sur **Approuver**, ou sur **Refuser** si vous ne l'attendiez pas. Le code identifie le nouveau Mac et n'a rien de secret ; vous pouvez donc le lire à voix haute au téléphone sans risque. Une demande refusée ou expirée propose **Essayer une autre méthode**.
   - **Saisir un code de récupération.** Saisissez le code que vous avez enregistré sur votre premier Mac.
3. **Choisissez comment ce Mac se synchronise.** Lorsque votre compte contient déjà des données et que ce Mac a les siennes, Phi demande **Comment ce Mac doit-il se synchroniser ?** et montre ce que contient chaque côté :
   - **Fusionner ce Mac avec votre compte**, marqué **Recommandé**. Vous associez les Profils et les Espaces un par un aux étapes suivantes, et les favoris, les onglets épinglés et les Règles d'URL des deux côtés sont conservés.
   - **Utiliser les données de votre compte**. Les Espaces, favoris, onglets épinglés, Règles d'URL et réglages synchronisés de ce Mac sont remplacés par ceux de votre compte, et les Profils que votre compte ne possède pas sont supprimés de ce Mac. Seul ce Mac est modifié, et ce choix ne peut pas être annulé. Lisez [Utiliser les données de votre compte](#use-your-accounts-data) avant de le choisir.

   Un Mac qui n'a rien d'autre que son Profil par défaut et son Espace par défaut, sans favoris, onglets épinglés ni Règles d'URL, ne voit pas cette étape. Aucune option ne copie les données de ce Mac par-dessus votre compte.

4. **Associez vos profils.** Phi apparie les Profils de ce Mac avec ceux de votre compte et vous interroge sur ceux qu'il n'a pas pu associer. Le Profil par défaut de ce Mac est toujours associé au Profil par défaut de votre compte : sa ligne affiche ce Profil du compte, sans sélecteur. Pour chaque autre Profil de ce Mac, choisissez **Attribuer à** un Profil du compte, ou **Enregistrer comme nouveau**. Les Profils du compte sans équivalent sur ce Mac sont listés sous **Profils du compte non attribués**, où **Créer sur ce Mac** les ajoute. Si un choix enfreint la règle du Profil par défaut, Phi indique **Le profil par défaut de ce Mac ne peut être associé qu'au profil par défaut du compte. Vérifiez les associations, puis réessayez.**
5. **Associez vos Espaces.** Pour chaque Espace de ce Mac, choisissez l'Espace du compte auquel il correspond, ou **Ajouter comme nouveau**. **Tout ajouter comme nouveaux** règle d'un coup tous les Espaces encore sans choix, et les Espaces dont le nom correspond exactement sont choisis pour vous. Les Espaces de votre compte absents de ce Mac apparaissent sous **Espaces à ajouter depuis votre compte** et sont créés lorsque vous terminez. Rien n'est supprimé sur ce Mac. Cliquez sur **Terminer**.
6. **Passez en revue ce qui change**, une étape qui n'apparaît que si quelque chose sur ce Mac doit être remplacé. Si vous avez associé un Espace de ce Mac à un Espace de votre compte, le nom, l'icône, la couleur et le thème du compte remplacent ceux de ce Mac, et l'Espace peut être déplacé vers le Profil auquel il appartient dans votre compte. Les onglets, favoris, onglets épinglés et Règles d'URL de ce Mac ne sont pas touchés. Pour conserver les valeurs de ce Mac, cliquez sur **Retour** et ajoutez plutôt cet Espace comme nouveau. Cliquez sur **Appliquer** pour lancer la synchronisation. Si rien ne doit être remplacé, la synchronisation démarre dès que vous cliquez sur **Terminer**.

Le chargement du compte peut prendre jusqu'à deux minutes pendant que Phi compte vos Espaces, et il nécessite une connexion : il n'existe aucune copie en cache sur laquelle se rabattre. Avec **Fusionner ce Mac avec votre compte**, les favoris, les onglets épinglés et les Règles d'URL des deux Mac sont conservés une fois la synchronisation lancée ; rien n'est donc perdu d'un côté comme de l'autre.

### Utiliser les données de votre compte {#use-your-accounts-data}

Choisissez cette option lorsque vous ne voulez pas garder ce que Phi contient sur ce Mac, par exemple un Mac que vous n'avez utilisé que pour des tests. Phi supprime d'abord les données Phi de ce Mac, puis télécharge celles de votre compte.

- **Supprimé de ce Mac :** les Espaces autres que l'Espace par défaut, dont les onglets ouverts se ferment ; les favoris, les onglets épinglés, les Règles d'URL et les réglages synchronisés ; et chaque Profil que votre compte ne possède pas, avec son historique, ses extensions et ses données de site.
- **Conservé :** le Profil par défaut de ce Mac, ainsi que les Profils dont le nom correspond à un Profil de votre compte, gardent leur historique, leurs extensions et leurs données de site. Votre compte et vos autres Mac ne sont pas concernés.

Après que vous avez cliqué sur **Continuer**, Phi demande **Remplacer ce qui se trouve sur ce Mac ?** et liste ce qui est supprimé et ce qui est téléchargé. Cliquez sur **Remplacer les données de ce Mac** pour confirmer. Phi affiche **Remplacement des données de ce Mac…** et la fenêtre reste ouverte jusqu'à la fin de l'opération. Les données de votre compte arrivent ensuite avec la première synchronisation, et le panneau affiche **Synchronisation initiale en cours**, ce qui peut prendre quelques minutes pour un compte volumineux. Si le remplacement s'arrête sur une erreur, voir [Impossible de terminer le remplacement des données de ce Mac](#replace-did-not-finish).

::: warning Le remplacement ne peut pas être annulé
Phi ne garde aucune copie de ce qu'il supprime. Si vous en voulez une, choisissez d'abord **Terminer plus tard**, exportez avec **Aide → Gérer les données utilisateur → Exporter les données utilisateur…** (voir [Importation et exportation](/fr/import-export/) et [Synchroniser ou exporter](#sync-or-export)), puis revenez à la configuration. Pour conserver un Profil local, choisissez plutôt **Fusionner ce Mac avec votre compte**.
:::

### Si la configuration ne parvient pas à charger votre compte {#setup-cannot-load-account}

La configuration lit votre compte avant d'afficher le moindre choix. Si la lecture échoue, la fenêtre en indique la raison et propose **Réessayer** :

- **Impossible de charger à temps les Espaces de votre compte. Vérifiez votre connexion et réessayez.** Le compte est volumineux ou la connexion est lente.
- **La synchronisation n'est pas disponible pour le moment, les Espaces de votre compte n'ont donc pas pu être chargés.** Phi ne peut pas joindre le service de synchronisation pour l'instant. Vérifiez que vous êtes en ligne et toujours connecté, puis réessayez.
- **Impossible de charger les profils de votre compte. Vérifiez votre connexion et réessayez.** ou **Impossible de charger les Espaces de votre compte. Vérifiez votre connexion et réessayez.**
- Un Profil du compte marqué **Impossible à lire pour le moment** : Phi continue de réessayer en arrière-plan, et le reste de la configuration fonctionne toujours.
- **Le profil par défaut de votre compte ne peut pas être lu sur ce Mac, les données de ce Mac ne peuvent donc pas être remplacées pour le moment.** **Utiliser les données de votre compte** ne peut pas s'exécuter tant que ce n'est pas le cas. Choisissez **Fusionner ce Mac avec votre compte**, ou **Terminer plus tard** et réessayez ensuite.

### Terminer plus tard {#finish-later}

**Terminer plus tard** apparaît à l'étape du mode de synchronisation et sur les pages d'association. Choisissez-le, ou fermez la fenêtre, et ce Mac continue de naviguer en local : rien n'est synchronisé, le panneau indique **Non jumelé**, et Phi ne rouvre pas la configuration de lui-même. Revenez dans **Paramètres → Synchronisation** et cliquez sur **Continuer la configuration** quand vous êtes prêt. Phi recharge alors votre compte ; les choix laissés en suspens ne sont donc pas conservés, y compris le mode de synchronisation : la configuration suivante démarre avec **Fusionner ce Mac avec votre compte** sélectionné.

Un remplacement déjà commencé fait exception. Une fois que Phi a commencé à remplacer les données de ce Mac, quitter la configuration ne l'annule pas. S'il s'est arrêté, par exemple sur une erreur ou parce que Phi a été quitté, et que vous avez fermé la fenêtre, la prochaine fois que vous ouvrez la configuration, elle passe directement à **Remplacer ce qui se trouve sur ce Mac ?**, sans **Retour**, et **Remplacer les données de ce Mac** reprend là où l'opération s'est arrêtée. **Supprimer cet appareil de la synchronisation…** y reste proposé ; cette option laisse ce Mac hors de la synchronisation, avec tout ce que le remplacement n'avait pas encore supprimé.

## Code de récupération oublié ? {#forgot-your-recovery-code}

Personne ne peut afficher à nouveau votre code de récupération ni en créer un nouveau pour les mêmes données de synchronisation, nous compris. Ce que vous pouvez encore faire dépend de votre situation. Le lien **Code de récupération oublié ?** de la page **Saisissez votre code de récupération** ouvre cette section.

### Vous êtes encore en train de configurer votre premier Mac

Si vous êtes sur **Confirmez votre code de récupération** et que vous n'avez pas fermé la fenêtre de configuration, cliquez sur **Retour**. Phi affiche à nouveau le même code. Enregistrez-le, cliquez sur **Je l'ai enregistré**, puis saisissez-le pour le confirmer.

Phi 2.14 et les versions antérieures n'ont pas de bouton **Retour**. Si vous avez fermé la fenêtre ou redémarré Phi, le code a lui aussi disparu : Phi continue de vous le demander mais ne peut pas l'afficher. Dans les deux cas, mettez Phi à jour si nécessaire, puis repartez de zéro avec [Réinitialiser la synchronisation](#reset-sync) comme décrit plus bas.

### Un autre Mac est encore configuré pour la synchronisation

Vous n'avez pas besoin du code. Sur le nouveau Mac, choisissez **Demander l'approbation d'un autre appareil** et approuvez la demande sur le Mac configuré ; voir [Ajouter un autre Mac](#add-another-mac). La synchronisation continue de fonctionner sur les Mac que vous avez.

Le code ne peut toujours pas être affiché à nouveau ni remplacé. Gardez au moins un Mac configuré pour la synchronisation : tant qu'il y en a un, vous pouvez ajouter des Mac sans le code.

### C'est votre seul Mac, ou vous voulez repartir de zéro

Utilisez [Réinitialiser la synchronisation](#reset-sync) sur ce Mac. Cela retire ce Mac de la synchronisation et supprime toutes les données de synchronisation stockées pour votre compte. Vos données de navigation locales restent sur le Mac, et tout autre Mac sur lequel la synchronisation était encore configurée pour ce compte affiche alors [Configurer à nouveau la synchronisation](#set-up-sync-again). Configurez ensuite la synchronisation sur ce Mac depuis le début, comme dans [Configurer votre premier Mac](#set-up-your-first-mac). Phi crée un nouveau code de récupération ; enregistrez-le avant de cliquer sur **Je l'ai enregistré**.

L'option **Réinitialiser la synchronisation** n'est proposée que sur le dernier Mac configuré pour le compte. Si vous voulez repartir de zéro alors que d'autres Mac sont encore configurés, retirez d'abord chacun d'eux de la synchronisation.

### Aucun Mac en votre possession n'est configuré pour la synchronisation

Si le code est perdu et qu'aucun Mac en votre possession n'est configuré pour la synchronisation, la copie chiffrée de votre compte ne peut pas être déverrouillée, ni par vous ni par nous. Un Mac qui n'est pas encore configuré pour la synchronisation ne peut pas non plus réinitialiser la synchronisation du compte ; il n'y a donc aucun moyen de repartir de zéro depuis celui-ci. Ce cas comprend un Mac perdu ou effacé alors qu'il était configuré : il compte toujours comme configuré, et il ne peut pas être retiré depuis un autre Mac.

## Vérifier l'état de la synchronisation {#check-sync-status}

Le haut du panneau Synchronisation indique où en sont les choses :

- **À jour**, **Synchronisation en cours…**, ou **Synchronisation initiale en cours** pendant la première synchronisation.
- **Hors ligne**, avec une note indiquant que les modifications seront synchronisées une fois la connexion rétablie. Phi continue de fonctionner à partir des données locales et envoie vos modifications dès que le Mac est de nouveau en ligne.
- **Synchronisation en pause.** Un Profil de ce Mac n'est pas encore configuré pour la synchronisation, en général un Profil créé après la configuration. Le panneau nomme les Profils qu'il attend et indique pourquoi. Phi les enregistre de lui-même et continue de réessayer, et **Réessayer** relance aussitôt une tentative. Voir [Synchronisation en pause](#sync-paused).
- **Attention requise.** Quelque chose a échoué. La ligne **Certains contenus nécessitent votre attention. Vérifiez les détails et votre connexion.** apparaît en dessous, et **Dernier problème** indique le problème le plus récent et quand il s'est produit. Voir [Ce que signifie chaque problème](#needs-attention).

Sous l'état, **Dernière synchronisation réussie sur ce Mac** indique quand ce Mac a terminé sa dernière synchronisation. **En attente du chargement des profils** signifie que Phi n'a pas encore lu la liste des Profils de ce Mac. Il continue d'essayer de lui-même, et au bout de cinq minutes l'état passe à **Attention requise**.

Si vous avez modifié la portée des onglets épinglés, sur ce Mac ou sur un autre, une ligne peut indiquer **Modification de la portée des onglets épinglés non encore appliquée**, avec le nombre de tentatives et une raison : **Une migration depuis un autre navigateur est en cours**, **Les données locales du navigateur sont indisponibles** ou **Impossible d'enregistrer les onglets épinglés sur ce Mac**. Ce Mac n'a pas encore déplacé ses onglets épinglés vers la nouvelle portée. Phi continue de réessayer de lui-même et le reste de la synchronisation se poursuit. Si la ligne ne disparaît pas, redémarrez Phi, et si elle persiste encore, envoyez vos commentaires avec **Commentaires** dans le menu en haut à droite de la fenêtre.

### Ce que signifie chaque problème {#needs-attention}

**Dernier problème** affiche l'un de ces problèmes. Il reste affiché jusqu'à ce que la prochaine synchronisation entièrement terminée l'efface.

| Dernier problème                                                     | Ce que cela signifie                                                                                                                | Que faire                                                                                                                    |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Session expirée**                                                  | Le service de synchronisation n'accepte plus la connexion de ce Mac.                                                                | Reconnectez-vous à votre compte Phi.                                                                                         |
| **Aucune connexion**                                                 | Ce Mac n'a pas pu joindre le service de synchronisation.                                                                            | Rien. Le problème disparaît à la prochaine synchronisation réussie, une fois que vous êtes en ligne.                         |
| **Erreur du serveur**                                                | Le service de synchronisation a renvoyé une erreur.                                                                                 | Rien. Le problème disparaît à la prochaine synchronisation réussie.                                                          |
| **Modifications refusées par le serveur**                            | Le service de synchronisation a refusé certaines modifications de ce Mac, par exemple après des conflits répétés avec un autre Mac. | Cliquez sur **Synchroniser maintenant**. Si le problème revient, redémarrez Phi, et envoyez vos commentaires s'il persiste.  |
| **Impossible de lire les données sur ce Mac**                        | Phi n'a pas pu lire une partie de ses propres données sur ce Mac.                                                                   | Cliquez sur **Synchroniser maintenant**. Si le problème revient, redémarrez Phi, et envoyez vos commentaires s'il persiste.  |
| **Impossible d'enregistrer l'état de la synchronisation sur ce Mac** | Phi n'a pas pu enregistrer son relevé de ce qui a été synchronisé.                                                                  | Cliquez sur **Synchroniser maintenant**. Si le problème revient, redémarrez Phi, et envoyez vos commentaires s'il persiste.  |
| **Certaines données synchronisées n'ont pas pu être lues**           | Un élément de votre compte n'a pas pu être lu sur ce Mac.                                                                           | Cliquez sur **Synchroniser maintenant**. Si le problème revient, redémarrez Phi, et envoyez vos commentaires s'il persiste.  |
| **En attente du jumelage d'un profil**                               | Certains éléments synchronisés attendent qu'un Profil de ce Mac soit jumelé avec votre compte.                                      | Attendez que Phi configure le Profil, ou cliquez sur **Réessayer** lorsque le panneau affiche **Synchronisation en pause**.  |
| **La synchronisation doit être réinitialisée**                       | Les données de synchronisation de votre compte ont été réinitialisées et la configuration de ce Mac ne leur correspond plus.        | Cliquez sur **Configurer à nouveau la synchronisation**. Voir [Configurer à nouveau la synchronisation](#set-up-sync-again). |

Les éléments en suspens, décrits sous [Détails](#sync-details), peuvent aussi maintenir l'état sur **Attention requise** sans nom de problème. Voir [Des onglets épinglés sont en suspens](#held-pinned-tabs).

### Détails {#sync-details}

**Détails** liste vos Profils, chacun avec l'état de ses données de navigation, puis une ligne par type de données Phi : **Réglages**, **Espaces**, **Signets**, **Onglets épinglés** et **Règles d'URL**. La ligne de chaque type décrit sa dernière synchronisation comportant des modifications, et depuis combien de temps elle a eu lieu :

| Compteur               | Ce qu'il compte                                                                                                                                                                                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **reçus**              | Les modifications que ce Mac a reçues de votre compte.                                                                                                                                                                                                                                                 |
| **envoyés**            | Les modifications que ce Mac a envoyées.                                                                                                                                                                                                                                                               |
| **en attente d'envoi** | Les modifications de ce Mac qui ne sont pas encore envoyées. Une synchronisation ultérieure les envoie.                                                                                                                                                                                                |
| **en suspens**         | Les éléments que ce Mac a reçus mais ne peut pas encore appliquer. Phi les garde jusqu'à ce qu'il le puisse, par exemple un onglet épinglé dont le Profil ou l'Espace n'est pas jumelé sur ce Mac. Les onglets épinglés qui appartiennent à une autre portée des onglets épinglés ne sont pas comptés. |

Les compteurs **en attente d'envoi** et **en suspens** n'apparaissent que s'ils ne sont pas à zéro. Un type sans activité récente affiche **Aucune modification récente**.

### Synchroniser maintenant {#sync-now}

**Synchroniser maintenant** demande à ce Mac de tout synchroniser tout de suite. Vous en aurez rarement besoin : Phi est averti quand un autre Mac modifie quelque chose et vérifie aussi de lui-même, au plus une fois par minute. **Synchroniser maintenant** évite cette attente. Pendant qu'une synchronisation attend ou s'exécute, le bouton indique la progression, et son info-bulle précise ce qu'il attend, par exemple **En attente de la disponibilité de tous les profils**.

Lorsqu'une synchronisation que vous avez lancée ne se termine pas, une ligne sous l'état l'indique jusqu'à ce que vous cliquiez à nouveau :

- Le nom du problème, tiré du tableau ci-dessus, lorsqu'un problème a été enregistré pendant cette synchronisation.
- **La synchronisation ne s'est pas terminée**, lorsque la synchronisation s'est arrêtée sans problème précis. Réessayez plus tard. Si cela se reproduit sur un même Mac, voir [Des onglets épinglés sont en suspens](#held-pinned-tabs).
- **Impossible de démarrer la synchronisation. Réessayez plus tard.**, lorsque ce Mac n'a pas pu démarrer de synchronisation du tout.

Une synchronisation qui se termine n'ajoute aucune ligne, et **Dernière synchronisation réussie sur ce Mac** passe à la nouvelle heure.

## Appareils

La section **Appareils** liste chaque Mac configuré sur votre compte, avec **Ce Mac** signalé, ainsi que tout Mac en attente de rejoindre le compte, avec son code, **Approuver**, **Refuser** et l'heure d'expiration de la demande. Pour approuver, ce Mac doit être connecté et avoir terminé sa propre configuration.

Chaque Mac ne peut se retirer que lui-même, depuis son propre panneau Synchronisation. Il n'existe pas encore de moyen de retirer un Mac que vous n'avez plus : un Mac perdu reste sur le compte et continue de recevoir les modifications tant qu'il est connecté. Le déconnecter, si vous y avez encore accès, y met fin.

## Retirer un Mac de la synchronisation {#remove-a-mac-from-sync}

Dans **Paramètres → Synchronisation**, sous **Suppression**, cliquez sur **Supprimer…** dans la ligne **Supprimer ce Mac de la synchronisation** et confirmez avec **Supprimer cet appareil**. Si la configuration n'est pas terminée sur ce Mac, la fenêtre de configuration propose à la place **Supprimer cet appareil de la synchronisation…** en bas.

- Ce Mac cesse de se synchroniser, le service de synchronisation le révoque, et sa configuration de synchronisation, ses clés et l'association de ses Profils et Espaces sont effacées de ce Mac.
- Tout ce que vous parcouriez reste : les Espaces, les favoris, l'historique et les onglets épinglés sont conservés en entier, et vous restez connecté à votre compte.
- Vos autres Mac ne sont pas affectés et continuent de se synchroniser entre eux.
- Pour faire revenir ce Mac, relancez la configuration et rejoignez le compte par approbation ou avec le code de récupération.

Lorsque ce Mac est le seul Mac configuré pour la synchronisation sur le compte, la ligne affiche plutôt **Réinitialiser la synchronisation**, car retirer le dernier Mac supprime aussi les données de synchronisation du compte. Voir [Réinitialiser la synchronisation](#reset-sync).

::: warning Le retrait ne renouvelle pas les clés de votre compte
Retirer un Mac l'empêche de recevoir quoi que ce soit de nouveau, mais ne change pas les clés de chiffrement de votre compte et ne peut pas reprendre ce que ce Mac avait déjà synchronisé. Ce qui s'y trouvait y reste.
:::

### Réinitialiser la synchronisation {#reset-sync}

Lorsque ce Mac est le seul Mac configuré pour la synchronisation sur votre compte, la section **Suppression** affiche **Réinitialiser la synchronisation** avec un bouton **Réinitialiser…**. La réinitialisation retire ce Mac de la synchronisation et supprime toutes les données de synchronisation stockées pour ce compte, pour que vous puissiez repartir de zéro, par exemple après avoir perdu votre code de récupération.

1. Dans **Paramètres → Synchronisation**, sous **Suppression**, cliquez sur **Réinitialiser…**.
2. Phi demande **Supprimer toutes les données de synchronisation de ce compte ?** Cliquez sur **Supprimer toutes les données de synchronisation** pour confirmer. Cette action est irréversible.

- Tous les appareils sont retirés de la synchronisation, et tout ce qui est stocké sur le serveur de synchronisation pour ce compte est supprimé.
- Vos données de navigation locales restent sur ce Mac : les Espaces, les favoris, l'historique et les onglets épinglés sont conservés, et vous restez connecté à votre compte.
- Tout autre Mac sur lequel la synchronisation était encore configurée pour ce compte affiche [Configurer à nouveau la synchronisation](#set-up-sync-again).
- Pour utiliser à nouveau la synchronisation, configurez-la depuis le début. Phi crée un nouveau code de récupération.

Si vous retirez ce Mac depuis la fenêtre de configuration et qu'il s'avère être le dernier, Phi vous le signale : **Ceci est le dernier appareil configuré pour la synchronisation. Vous pouvez le supprimer ainsi que toutes les données de synchronisation stockées pour ce compte, ou configurer d'abord la synchronisation sur un autre appareil.** Phi propose ensuite **Supprimer cet appareil et toutes les données de synchronisation…**, qui demande la même confirmation.

Si un autre Mac a rejoint le compte entre-temps, rien n'est supprimé. Phi indique **Un autre appareil a rejoint ce compte entre-temps, rien n'a donc été supprimé. Vous pouvez plutôt supprimer ce Mac de la synchronisation.** et la ligne redevient **Supprimer ce Mac de la synchronisation**.

## Configurer à nouveau la synchronisation {#set-up-sync-again}

Si le panneau indique **Les données de synchronisation du compte ont changé. La synchronisation des données Phi est en pause.**, les données de synchronisation de votre compte ont été réinitialisées et la configuration de ce Mac ne leur correspond plus. Les données de Phi cessent de se synchroniser tant que vous n'agissez pas ; réessayer ou redémarrer n'y change rien. Cliquez sur **Configurer à nouveau la synchronisation** et confirmez. Phi efface la configuration de synchronisation et les informations d'association de ce Mac, conserve vos données de navigation locales et ce qui se trouve dans votre compte, et vous guide à nouveau dans la configuration, y compris pour rejoindre le compte par approbation ou avec le code de récupération.

Vous voyez aussi ce message sur un Mac après l'utilisation de **Réinitialiser la synchronisation** sur le dernier Mac du compte, car les données de synchronisation avec lesquelles ce Mac avait été configuré ont été supprimées.

## Dépannage {#troubleshooting}

### Un deuxième Mac n'a pas reçu mes raccourcis clavier ni mes onglets ouverts {#missing-shortcuts-and-open-tabs}

C'est normal. Les raccourcis clavier de **Paramètres → Raccourcis** ne sont jamais synchronisés, pas plus que les onglets ouverts ordinaires : seuls les onglets épinglés le sont. Les réglages d'IA et des agents restent eux aussi sur chaque Mac. Définissez-les sur chaque Mac où vous en avez besoin. Voir [Ce qui est synchronisé](#what-syncs).

### Un Mac ne termine pas la synchronisation et garde des onglets épinglés en suspens {#held-pinned-tabs}

Un Mac affiche **La synchronisation ne s'est pas terminée**, et sa ligne **Onglets épinglés** dans **Détails** affiche **en suspens** avec un nombre, alors que l'autre Mac indique **À jour**. Le compteur **en suspens** signifie que ce Mac a reçu des onglets épinglés qu'il ne peut pas placer, parce que le Profil ou l'Espace auquel ils appartiennent n'est pas jumelé sur ce Mac.

La cause habituelle est que les Profils par défaut des deux Mac n'ont pas été associés l'un à l'autre pendant la configuration. Les Mac jumelés avec Phi 2.12 pouvaient se retrouver dans cette situation. Depuis Phi 2.13, la configuration associe toujours le Profil par défaut au Profil par défaut de votre compte.

Pour corriger cela aujourd'hui, sur le Mac qui garde les onglets épinglés, [retirez le Mac de la synchronisation](#remove-a-mac-from-sync), puis configurez-le à nouveau comme dans [Ajouter un autre Mac](#add-another-mac). Choisissez **Fusionner ce Mac avec votre compte** si Phi demande comment ce Mac doit se synchroniser. Les favoris, l'historique et tout le reste restent sur le Mac pendant l'opération, et son Profil par défaut est associé au Profil par défaut de votre compte.

### Synchronisation en pause, ou En attente du jumelage d'un profil {#sync-paused}

Un Profil que vous créez après avoir configuré la synchronisation n'est pas encore jumelé. Phi l'enregistre de lui-même auprès de votre compte, et la synchronisation de ce Profil démarre une fois l'opération terminée. **Réessayer** dans le panneau Synchronisation relance aussitôt une tentative. Si la pause ne disparaît jamais, vérifiez votre connexion et que vous êtes toujours connecté, puis cliquez à nouveau sur **Réessayer**.

### La synchronisation indique Attention requise {#sync-needs-attention}

**Dernier problème** indique ce qui n'a pas fonctionné. [Ce que signifie chaque problème](#needs-attention) liste chaque problème et ce qu'il faut faire.

### Impossible de terminer le remplacement des données de ce Mac {#replace-did-not-finish}

Si la configuration s'arrête sur **Impossible de terminer le remplacement des données de ce Mac.** après que vous avez choisi **Utiliser les données de votre compte**, cliquez sur **Réessayer**. Réessayer reprend là où l'opération s'est arrêtée, et rien d'autre ne change tant qu'elle n'est pas terminée. Gardez Phi ouvert pendant l'opération ; pour un compte volumineux, elle peut prendre quelques minutes. Si vous fermez la fenêtre, la configuration suivante poursuit le même remplacement, comme décrit sous [Terminer plus tard](#finish-later).

### Le nom, l'icône, la couleur ou le thème d'un Espace a changé après l'association {#account-values-replaced}

C'est normal. Lorsque vous associez un Espace de ce Mac à un Espace de votre compte, le nom, l'icône, la couleur et le thème du compte l'emportent, et **Passez en revue ce qui change** l'indique avant que vous cliquiez sur **Appliquer**. Pour conserver la version de ce Mac, cliquez sur **Retour** à ce moment-là et choisissez **Ajouter comme nouveau** pour cet Espace : il se synchronise alors comme un Espace distinct. Une fois l'association appliquée, les anciennes valeurs de ce Mac ne sont pas conservées ; modifiez donc l'Espace à la main si vous voulez les retrouver, et la modification se synchronise aussi sur vos autres Mac.

## Se déconnecter

Vous déconnecter de votre compte Phi arrête la synchronisation sur ce Mac, et rien de vos autres Mac n'arrive tant que vous ne vous reconnectez pas. Reconnectez-vous au même compte, et la synchronisation reprend là où elle s'était arrêtée et rattrape ce qu'elle a manqué ; le panneau Synchronisation vous indique s'il reste quelque chose à terminer. Passer à un autre compte ne mélange jamais les deux : chaque compte a ses propres données synchronisées et sa propre association.

## Comment vos données sont protégées

- **Chiffrées avant de quitter votre Mac.** Vos Mac créent les clés, et seule la copie chiffrée est envoyée. Le service de synchronisation la stocke et la transmet à vos autres Mac ; il ne peut pas la déchiffrer.
- **Se connecter ne suffit pas pour les lire.** Un nouveau Mac n'obtient la clé que par l'approbation d'un Mac qui la détient déjà, ou grâce à votre code de récupération. C'est aussi pourquoi un code perdu ne peut pas être récupéré : le lien **Code de récupération oublié ?** de la configuration explique vos options, et aucune d'elles ne vous rend le code.
- **Ce sont tout de même des données que nous conservons pour vous.** La copie chiffrée se trouve sur le service de synchronisation de Phinomenon ; la synchronisation fait donc partie de ce que Phi envoie. [Confidentialité et vos données](/fr/privacy/) liste le reste, et la [Politique de confidentialité](https://phibrowser.com/privacy/) et les [Conditions d'utilisation](https://phibrowser.com/terms/) font foi sur tous ces points.

## Synchroniser ou exporter {#sync-or-export}

La synchronisation est faite pour des Mac que vous continuez d'utiliser en parallèle. Pour un passage ponctuel vers un nouveau Mac, ou une copie que vous gardez vous-même, **Gérer les données utilisateur → Exporter les données utilisateur…** dans le menu **Aide** est l'outil le plus adapté ; consultez [Importation et exportation](/fr/import-export/).

## Et ensuite

- [Espaces et Profils](/fr/spaces/), ce que sont un Espace et un Profil, et pourquoi la configuration les associe.
- [Favoris et onglets épinglés](/fr/bookmarks/), la portée des onglets épinglés que suit la synchronisation.
- [Confidentialité et vos données](/fr/privacy/), tout ce que Phi envoie et conserve d'autre.
- [Importation et exportation](/fr/import-export/), déplacer des données une fois plutôt qu'en continu.
