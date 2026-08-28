---
description: "Laissez les agents se connecter avec les identifiants de votre coffre Bitwarden. Approbation à chaque demande, saisie automatique qui garde les secrets cachés, expiration de session et autorisations révocables."
---

# Gestionnaire de mots de passe pour les agents

Tôt ou tard, un agent qui travaille dans Phi se heurte à un mur de connexion. Coller un mot de passe dans une conversation est exactement la mauvaise réponse, alors Phi en propose une meilleure. Le **Gestionnaire de mots de passe pour les agents** relie les agents à votre gestionnaire de mots de passe, actuellement **Bitwarden**, pour qu'ils puissent se connecter aux sites avec les identifiants de votre coffre. Il est conçu pour que, la plupart du temps, **l'agent ne voie jamais le mot de passe**.

Il est désactivé par défaut, chaque demande individuelle vous est d'abord soumise, et vous pouvez révoquer à tout moment une approbation en cours.

## Pourquoi Bitwarden

Donner à un agent IA un chemin vers vos mots de passe est un acte de confiance, donc le coffre derrière ne doit pas être une boîte noire. Bitwarden est **open source**, ses clients et son serveur peuvent donc être audités par n'importe qui, et il **permet l'auto-hébergement**, vous pouvez donc garder votre coffre sur un serveur que vous administrez plutôt que dans le cloud de quelqu'un d'autre. Vous contrôlez ainsi de bout en bout l'endroit où vivent vos identifiants : votre coffre sur votre infrastructure, déverrouillé sur votre Mac, et rien n'en sort sans votre approbation. L'auxiliaire de Phi s'appuie sur le SDK officiel de Bitwarden, et les serveurs auto-hébergés sont pris en charge à la connexion.

Autant être clair sur qui fait quoi ici. **Bitwarden est le fournisseur du service de coffre**, et votre relation pour ce service est avec Bitwarden, selon ses conditions et sa politique de confidentialité. Vous choisissez si votre coffre réside sur bitwarden.com, sur bitwarden.eu ou sur un serveur que vous hébergez vous-même, et ce choix détermine où vit votre coffre et quel droit s'y applique. Le rôle de Phi est de le déverrouiller sur votre Mac et de transmettre un identifiant unique à un agent quand vous approuvez cette demande précise. Votre coffre n'atteint jamais Phinomenon, pas plus que votre mot de passe maître.

## Comment les secrets restent hors de portée

Votre coffre n'est pas ouvert dans le navigateur. Phi embarque un **processus auxiliaire distinct** qui dialogue avec Bitwarden pour le compte de l'application : les identifiants pour Phi et les demandes des agents sont tenus par cet auxiliaire, et **les mots de passe ne touchent jamais le processus du navigateur**. La clé du coffre déverrouillé ne vit que dans la mémoire de l'auxiliaire et disparaît dès que le coffre se verrouille. L'auxiliaire n'accepte de connexions que de Phi lui-même, et Phi vérifie la signature de code de l'auxiliaire avant de lui confier quoi que ce soit.

En plus de cela, la manière par défaut dont les agents utilisent un identifiant est la saisie automatique, qui tient le secret entièrement à l'écart de l'agent. Phi remplit lui-même le champ de la page, et l'agent apprend seulement que le remplissage a eu lieu.

## L'activer

Le Gestionnaire de mots de passe pour les agents se trouve dans l'onglet **Développeur** des Paramètres, qui apparaît une fois le **Mode développeur** activé :

1. Ouvrez **Paramètres → Général** et activez le **Mode développeur**.
2. Dans l'onglet **Développeur**, repérez **Gestionnaire de mots de passe pour les agents** et activez **Gestionnaire de mots de passe Bitwarden**.
3. Connectez-vous à votre compte Bitwarden. Les serveurs américains, européens et auto-hébergés sont pris en charge, y compris les comptes avec connexion en deux étapes. Déverrouillez ensuite le coffre avec votre mot de passe maître.

À l'activation, Phi peut aussi proposer d'installer l'**extension de navigateur Bitwarden** depuis le Chrome Web Store. Cette extension est une commodité distincte pour _vous_, qui remplit automatiquement vos identifiants pendant votre navigation normale. Les demandes des agents ne l'utilisent pas et n'en ont pas besoin ; vous pouvez donc décliner avec **Pas maintenant**, l'accès des agents fonctionnera quand même.

## Chaque demande passe d'abord par vous

Chaque fois qu'un agent demande un identifiant, Phi affiche une demande d'approbation nommant **quel agent** demande et **quel site ou élément** il veut, ainsi que la raison invoquée par l'agent. Rien n'est communiqué avant votre réponse, et une invite ignorée **se refuse d'elle-même après 60 secondes**.

L'invite vous donne de vrais choix, pas un simple OK :

- **Approuver** ou **Refuser** la demande.
- Choisir la durée de l'approbation : **Une seule fois**, **Pendant 10 min** ou **Toujours**.
- Éventuellement **appliquer l'approbation à tous les agents** plutôt qu'au seul demandeur. Ce n'est pas disponible pour les approbations à usage unique.

Si le coffre est verrouillé quand une demande arrive, Phi demande d'abord votre **mot de passe maître** pour le déverrouiller. Ce mot de passe va directement à l'auxiliaire et n'est jamais stocké par le navigateur.

## Trois niveaux d'exposition

Toutes les demandes ne se valent pas, et l'invite est honnête sur la différence. Chaque demande relève de l'un de trois types, avec un code couleur selon la distance que parcourt le secret :

| Type                                 | Ce qui se passe réellement                                                                                                                                                                                                                                                                      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 **Saisie automatique uniquement** | Phi remplit lui-même l'identifiant enregistré dans la page. L'agent déclenche le remplissage mais **ne reçoit jamais le nom d'utilisateur ni le mot de passe**.                                                                                                                                 |
| 🟠 **Utilisation en commande**       | La valeur est communiquée à l'agent pour qu'une commande qu'il exécute puisse s'en servir, par exemple un mot de passe de base de données injecté dans l'environnement d'une CLI. L'outillage de l'agent l'efface de ses sorties, mais Phi ne peut pas empêcher l'agent de conserver la valeur. |
| 🔴 **Accès complet**                 | L'élément enregistré, qui peut être un mot de passe, une note, une carte, une identité ou une clé, est partagé directement avec l'agent, et l'agent peut le consigner dans son contexte.                                                                                                        |

Une approbation mémorisée ne couvre que le type pour lequel elle a été accordée. Une approbation limitée à la saisie automatique ne permet jamais à un agent de lire le mot de passe en clair.

La saisie automatique s'accompagne d'un filet de sécurité supplémentaire : les remplissages sont **liés à l'origine**. Si la page où se trouve un agent n'appartient pas au site pour lequel l'identifiant a été enregistré, Phi refuse le remplissage, et c'est précisément ainsi qu'une page trompeuse tenterait de voler un mot de passe. Les mots de passe remplis restent aussi masqués sur la page, même si un bouton « afficher le mot de passe » est cliqué.

## Ce que les agents n'obtiennent jamais

Certaines limites ne se franchissent pas, quoi que vous ayez approuvé :

- **Les codes d'authentification à deux facteurs ne sont jamais communiqués.** Donner à un agent un code à deux facteurs valide ramènerait les deux facteurs derrière une seule invite, donc cette étape reste toujours la vôtre. L'agent rend la main et vous saisissez le code vous-même.
- **L'ambiguïté ne communique rien.** Si plusieurs éléments du coffre correspondent à une demande, Phi refuse et demande à l'agent de préciser, plutôt que de deviner un compte à votre place.
- **Tout est journalisé, sans les valeurs.** Chaque demande est consignée dans un journal d'audit : quel agent, quel site, quel type d'accès, jamais les secrets eux-mêmes.

Le coffre ne sert pas qu'aux identifiants, puisque notes sécurisées, cartes, identités et clés SSH peuvent aussi être demandées, mais seuls les identifiants peuvent être remplis automatiquement dans une page. Tout le reste passe par les mêmes demandes d'approbation explicites décrites ci-dessus.

## Consulter et révoquer les approbations

**Approbations d'identifiants pour les agents…**, dans la même section des paramètres, liste chaque approbation en cours : quel agent, quel site, quel type d'accès et pour combien de temps. Les approbations à durée limitée expirent d'elles-mêmes. Les approbations **Toujours** persistent jusqu'à ce que vous les révoquiez, individuellement ou avec **Tout révoquer**.

Ce panneau contient aussi un interrupteur **Autoriser l'accès à tous les mots de passe**, une autorisation générale délibérée qui laisse n'importe quel agent utiliser n'importe quel identifiant enregistré sans demander. S'il est affiché en rouge d'avertissement, ce n'est pas pour rien, et Phi vous demande confirmation avant de l'activer. Laissez-le désactivé, sauf si vous comprenez pleinement le compromis.

## Expiration de la session du coffre

Vous contrôlez la durée pendant laquelle le coffre reste déverrouillé. Dans la section Gestionnaire de mots de passe pour les agents, choisissez une **expiration de la session** parmi **1 heure**, **4 heures**, **Au verrouillage du système**, **Au redémarrage du navigateur** (le réglage par défaut) ou **Jamais**, puis choisissez ce qui se passe à l'échéance : **Verrouiller**, qui exige votre mot de passe maître pour reprendre, ou **Se déconnecter**, qui déconnecte entièrement le compte.

## Le désactiver

Les interrupteurs coupent réellement les choses au lieu de se contenter de les masquer :

- Désactiver **Gestionnaire de mots de passe Bitwarden** verrouille le coffre et abandonne les approbations à durée limitée. Votre compte reste connecté sur disque pour une réactivation ultérieure, mais toute demande d'agent est refusée tant que c'est désactivé, même celles couvertes par une approbation **Toujours**.
- Désactiver le **Mode développeur** est un coupe-circuit. Cela désactive à la fois l'accès des agents et le Gestionnaire de mots de passe pour les agents, et le réactiver ne rétablit rien automatiquement. Chaque fonctionnalité doit être réactivée à la main.

## Et ensuite

- [Le skill phi-browser](/fr/phi-browser-skill/), comment les agents de codage pilotent Phi dans leurs propres Espaces d'agent.
- [Automatisation et Phi Link](/fr/automation/), actions à la demande, tâches en arrière-plan et garder la main.
- [Confidentialité et vos données](/fr/privacy/), où vivent vos données et comment l'IA est gérée.
