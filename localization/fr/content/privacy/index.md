---
description: "Découvrez où Phi Browser stocke vos données, ce qu'il ne collecte pas, comment fonctionnent la Mémoire et le traitement IA dans le cloud, ce que contiennent les statistiques d'utilisation anonymes, et comment contrôler ou supprimer les données IA."
---

# Confidentialité et vos données

Phi est construit autour d'une architecture « local-first ». L'idée est simple : Phi peut bien vous connaître sans que votre contexte personnel devienne un actif détenu dans le cloud.

## Où vivent vos données

Ce que Phi retient de vous, votre [Mémoire](/fr/memory/), est stocké localement sur votre appareil. Elle s'y construit au fil de votre navigation et est faite pour rester avec vous, sous votre contrôle.

## Ce que Phi ne collecte pas

Phi ne collectera jamais :

- vos données de Mémoire,
- vos interactions avec l'IA,
- votre contexte de navigation.

Phi ne vend pas les données issues de votre navigation, et n'utilise ni votre Mémoire, ni votre contexte de navigation, ni vos interactions avec l'IA pour entraîner des modèles.

Une nuance à connaître : de grands modèles de langage de fournisseurs comme Anthropic, OpenAI, Google ou SpaceXAI peuvent être utilisés pour traiter des tâches. Quand vous utilisez **Phi Cloud**, le contenu dont une requête a besoin pour recevoir une réponse est envoyé au fournisseur du modèle que vous avez choisi, car c'est la seule façon pour un modèle d'y répondre. Il transite par nous sans être stocké, il arrive sous notre compte et non le vôtre, et il n'est jamais utilisé pour l'entraînement. Avec l'**IA privée**, il ne quitte pas du tout votre Mac. Votre Mémoire personnelle reste locale dans les deux cas, et n'est jamais traitée comme un actif détenu dans le cloud.

## Ce que Phi envoie {#what-phi-does-send}

« Local-first » ne veut pas dire silencieux, et mieux vaut le lire ici que le découvrir dans un journal réseau.

- **Un petit comptage anonyme, toujours actif.** Phi compte combien d'installations le définissent comme navigateur par défaut, utilisent les Espaces, utilisent les Profils, et le fait qu'un plantage s'est produit. Des comptages seulement, sans rien d'attaché qui remonte jusqu'à vous.
- **Des statistiques détaillées et des rapports de plantage, seulement si vous les activez.** Le réglage est **Contribuer à améliorer les fonctionnalités et les performances de Phi** dans les Paramètres. Activez-le et Phi envoie des statistiques d'utilisation détaillées et des rapports de plantage, portant votre identifiant de compte. Désactivez-le et ni les uns ni les autres ne sont envoyés ; seuls les comptages anonymes ci-dessus continuent.

Les rapports de plantage vont à Sentry et sont conservés 90 jours. Un rapport de plantage peut inclure un instantané mémoire du processus qui a échoué, lequel peut contenir incidemment des fragments de contenu de page ou de texte que vous aviez saisi. C'est l'une des raisons pour lesquelles l'interrupteur reste désactivé tant que vous ne l'activez pas.

Aucun réglage ne désactive ce socle anonyme. Si vous voulez un navigateur qui n'envoie rien du tout, compilez le client open source depuis les sources.

La [Politique de confidentialité](https://phibrowser.com/privacy/) est la version complète et faisant foi de tout ceci.

Vous pouvez aussi réduire ce qui quitte votre Mac. Avec l'**IA privée**, exécutée via [Phi Sentinel](/fr/sentinel/), certaines de ces tâches s'exécutent entièrement sur votre propre machine, et n'ont donc besoin d'aucun modèle cloud.

## Statistiques d'utilisation {#usage-statistics}

Phi possède bien un interrupteur de télémétrie : **Contribuer à améliorer les fonctionnalités et les performances de Phi**. Il est activé par défaut, et tant qu'il le reste, Phi envoie des statistiques d'utilisation anonymes à Phinomenon.

Ces statistiques portent sur le navigateur lui-même : quelles fonctionnalités sont utilisées et comment l'app se comporte. Elles n'incluent jamais les pages que vous visitez, leur contenu, votre Mémoire ou vos conversations avec l'IA.

Chaque rapport porte un identifiant aléatoire créé pour votre installation. Il n'a rien à voir avec votre compte Phi, et il appartient au navigateur dans son ensemble, pas à un Espace ou à un Profil. Désactiver l'interrupteur supprime l'identifiant ; le réactiver plus tard en crée un nouveau, de sorte que vos anciens rapports et les nouveaux ne peuvent pas être reliés.

Pour modifier ce réglage, ouvrez `phi://settings` et regardez dans la section **Vous et Phi**, juste sous la ligne de votre compte. Quand vous basculez l'interrupteur, un bouton **Relancer** apparaît à côté, et le nouveau choix prend effet une fois Phi relancé.

## Garder le contrôle

La Mémoire n'est pas une boîte noire. Vous pouvez **consulter, gérer et supprimer** ce que Phi retient, directement dans Phi.

### Supprimer votre compte et vos données

Vous le faites vous-même, dans l'app : **Paramètres → Paramètres supplémentaires du navigateur → votre nom, sous Vous et Phi → Supprimer le compte et les données**. Cela supprime le compte et les données stockées avec lui, sur votre Mac et sur nos serveurs, et c'est irréversible. Vous n'avez besoin d'écrire à personne pour être oublié.

Si vous avez déjà désinstallé Phi, réinstallez-le et connectez-vous au même compte pour atteindre ce bouton. La désinstallation efface ce qui se trouvait sur votre Mac, mais elle ne ferme pas le compte. Si vous ne vous êtes jamais connecté, il n'y a pas de compte et rien à supprimer de notre côté.

### Désactiver l'IA {#turning-ai-off}

Si vous voulez un navigateur classique, vous pouvez désactiver toutes les fonctionnalités IA dans **Paramètres → Phi AI**. Désactiver l'IA ferme vos conversations IA et déconnecte les éventuels Connecteurs de données externes.

Votre Mémoire n'est pas supprimée par cet interrupteur, et elle reste sur votre appareil. Si vous voulez aussi effacer ce que Phi retient, utilisez l'option d'effacement de la page Mémoire ; cette suppression est définitive et irréversible.

## Naviguer en privé

Pour les sessions qui ne doivent rien laisser non plus sur votre Mac, ouvrez un [Espace de navigation privée](/fr/incognito/) depuis le menu **Fichier**. Son historique, ses cookies et ses données de sites ne vivent qu'en mémoire, les fonctionnalités IA restent entièrement à l'écart, et le fermer détruit la session.

## Open source

Le client macOS de Phi est open source sous licence Apache-2.0 ; son comportement peut donc être inspecté plutôt que cru sur parole. Pour être exact sur ce que cela couvre : la partie ouverte est le client que nous écrivons, et il embarque un moteur Chromium livré sous forme de framework précompilé. Chromium est lui-même un projet open source, mais lire notre client n'est pas la même chose qu'avoir lu chaque ligne qui s'exécute sur votre Mac.
