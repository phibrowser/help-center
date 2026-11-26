---
description: "Comprenez l'IA privée : ce qu'est Phi Cloud, son rapport avec vos propres fournisseurs d'IA, et comment exécuter des tâches d'IA sur votre Mac ou avec un service de votre choix, comme Ollama ou LM Studio."
---

# IA privée

Les fonctionnalités d'IA de Phi s'exécutent par défaut sur **Phi Cloud**. L'**IA privée** vous permet de décider, tâche par tâche, qui prend en charge chaque type de travail d'IA : Phi Cloud, un modèle téléchargé sur ce Mac, ou un fournisseur d'IA que vous connectez vous-même, comme Ollama, LM Studio, OpenAI ou OpenRouter.

L'IA privée est désactivée par défaut. Si vous ne l'activez jamais, toutes les fonctionnalités d'IA fonctionnent comme d'habitude et utilisent Phi Cloud.

## L'assistant, Phi Cloud et les fournisseurs d'IA {#assistant-phi-cloud-and-providers}

Ces trois notions se confondent facilement, alors mieux vaut commencer par les distinguer :

- **L'assistant** est celui que vous avez nommé. C'est l'agent de Phi : il comprend ce que vous demandez et décide quoi faire, qu'il s'agisse de lire une page, d'exécuter une Browser Skill, d'agir dans le navigateur ou de créer une tâche. C'est le même assistant quel que soit le modèle qu'il utilise, et vos conversations, votre Mémoire et vos tâches ne changent pas avec le modèle.
- **Un modèle** est le « cerveau » que l'assistant emprunte pour réfléchir. À chaque étape, l'assistant envoie à un modèle ce dont il a besoin, et le modèle répond.
- **Une source d'IA** détermine où ce modèle s'exécute. Il en existe trois types :
  - **Phi Cloud**, le service d'IA intégré à Phi. Ce n'est ni un agent ni un modèle en particulier. C'est un ensemble de modèles cloud auxquels Phi se connecte et qu'il gère pour vous. Il utilise votre connexion Phi, ne demande aucune clé API et ne vous demande pas de choisir un modèle.
  - **Les modèles locaux**, des modèles téléchargés sur ce Mac et exécutés sur ce Mac.
  - **Vos fournisseurs**, des services d'IA que vous connectez vous-même, avec votre propre adresse, votre compte ou votre clé API.

Phi Cloud occupe donc la même place qu'Ollama ou OpenAI : c'est une réponse parmi d'autres à la question « où s'exécute le modèle de l'assistant ? ». La différence, c'est que Phi Cloud est intégré et fonctionne d'emblée, alors que les autres sont à configurer vous-même.

### Comparaison des sources {#comparing-sources}

|                             | Phi Cloud                                                                            | Modèles locaux                                                                 | Vos fournisseurs locaux (Ollama, LM Studio)                        | Vos fournisseurs cloud (OpenAI, OpenRouter, Codex et d'autres) |
| --------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| Ce qu'il vous faut          | Rien d'autre qu'une connexion à Phi                                                  | Une étape de configuration, qui les télécharge                                 | Ollama ou LM Studio installé et en cours d'exécution               | Un compte ou une clé API auprès de ce service                  |
| Où va votre contenu         | Via Phi, vers le fournisseur de modèles qu'utilise Phi                               | Nulle part. Il reste sur ce Mac                                                | À l'adresse que vous définissez, en général ce Mac ou votre réseau | Directement de votre Mac vers ce service                       |
| Sous quel compte il arrive  | Celui de Phi. Le fournisseur de modèles ne sait pas qui vous êtes                    | Sans objet                                                                     | Sans objet                                                         | Le vôtre, via votre propre compte ou votre propre clé          |
| Coût                        | Inclus avec Phi, dans la limite de votre [quota d'utilisation](/fr/ai/#usage-limits) | Gratuit, en utilisant la mémoire et la puissance de calcul de ce Mac           | Gratuit, en utilisant l'ordinateur sur lequel il s'exécute         | La tarification propre à ce service                            |
| Compte dans le quota de Phi | Oui                                                                                  | Non                                                                            | Non                                                                | Non                                                            |
| Fonctionne hors ligne       | Non                                                                                  | Oui                                                                            | Oui, s'il s'exécute sur ce Mac                                     | Non                                                            |
| Qualité                     | Constante, adaptée à toutes les tâches                                               | Dépend de la taille du modèle, en général inférieure à celle des modèles cloud | Dépend du modèle choisi                                            | Dépend du modèle choisi                                        |

Pour savoir comment Phi Cloud traite votre contenu, consultez [Confidentialité et vos données](/fr/privacy/). Quand vous utilisez votre propre fournisseur cloud, c'est la politique de confidentialité de ce fournisseur qui s'applique.

## Quand Phi utilise votre fournisseur {#when-phi-uses-your-provider}

Ajouter un fournisseur ne change rien à lui seul. Phi ne l'utilise que lorsque ces deux conditions sont réunies :

1. Sous **IA privée → Tâches d'IA**, vous avez choisi l'un des modèles de ce fournisseur comme source d'une tâche.
2. L'interrupteur **IA privée** est activé.

Toute tâche que vous n'avez pas modifiée continue d'utiliser Phi Cloud. Désactiver l'IA privée renvoie aussitôt toutes les tâches vers Phi Cloud, mais vos choix sont conservés : la réactiver les rétablit sans nouvelle configuration.

## Choisir une source pour chaque tâche {#choosing-a-source-for-each-task}

L'IA privée n'est pas tout ou rien. Vous la réglez tâche par tâche, et le haut de la page indique combien de tâches ne sont pas sur Phi Cloud, par exemple **Exécutées en privé : 2 tâches d'IA sur 4**.

| Tâche d'IA               | Ce qu'elle couvre                                                        | Sources possibles                                                        |
| ------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| **Chat**                 | Les réponses dans la barre latérale et dans Phi Chat                     | Phi Cloud, modèles locaux, vos fournisseurs, Codex                       |
| **Mémoire**              | Le travail d'arrière-plan, comme la Mémoire de navigation et les résumés | Phi Cloud, modèles locaux, vos fournisseurs, Codex                       |
| **Tâches web**           | L'assistant qui agit dans le navigateur, et l'automatisation             | Phi Cloud, modèles locaux, vos fournisseurs, Codex                       |
| **Recherche de données** | La recherche dans les données que vous avez connectées                   | Uniquement Phi Cloud, ou le modèle de recherche local que Phi télécharge |

D'autres lignes figurent à côté :

- **Modèle de repli pour la vision.** Quand le modèle choisi pour une tâche ne sait pas lire les images, celles-ci vont au modèle défini ici. Sa valeur de départ est **Non configuré**.
- **Organisation des onglets par IA** est prise en charge par Apple Intelligence sur macOS et ne peut pas être modifiée. Cette ligne n'apparaît pas sur les Mac sans Apple Intelligence.
- **Génération d'images** utilise toujours Phi Cloud.

Quand vous faites passer une tâche sur une autre source, Phi teste d'abord ce modèle. Si le test échoue, la tâche revient à sa source précédente et Phi vous en indique la raison.

Dès que Chat utilise une autre source que Phi Cloud, la conversation affiche **Vous utilisez l'IA privée**, car la qualité des réponses peut différer de celle des modèles en ligne.

## Activer l'IA privée {#turning-on-private-ai}

Il y a deux façons d'accéder aux paramètres de l'IA privée :

- Dans [Phi Chat](/fr/phi-chat/), cliquez sur le bouton des paramètres (roue dentée) dans la barre supérieure et choisissez **IA privée**.
- Dans le navigateur, allez dans **Paramètres → Phi et IA → Phi Sentinel → IA privée**, qui ouvre la même page dans Phi Chat.

La première fois que vous activez l'interrupteur, Phi vérifie si ce Mac peut exécuter des modèles locaux :

- **S'il le peut**, la fenêtre de configuration indique la taille du téléchargement, la quantité approximative de mémoire qu'utilisent les modèles pendant leur exécution, et les tâches qui passeront sur ce Mac. Cliquez sur **Démarrer la configuration** : Phi installe l'environnement d'exécution local, télécharge les modèles, les démarre et les vérifie. Vous pouvez cliquer sur **Réduire** pour laisser la configuration se poursuivre en arrière-plan. Tant qu'elle n'est pas terminée, toutes les fonctionnalités d'IA continuent d'utiliser Phi Cloud.
- **S'il ne le peut pas**, la fenêtre en indique la raison. Vous pouvez quand même cliquer sur **Utiliser votre propre service d'IA** pour connecter vos propres fournisseurs sans modèles locaux.

### Configuration requise {#requirements}

| Élément             | Exigence                                                                |
| ------------------- | ----------------------------------------------------------------------- |
| Puce                | Apple Silicon. Les Mac Intel ne peuvent pas exécuter de modèles locaux  |
| Mémoire vive        | Au moins 16 Go                                                          |
| Espace disque libre | Au moins 10 Go, et au moins 2 Go de plus que le téléchargement lui-même |

Rien de tout cela ne s'applique si vous connectez uniquement vos propres fournisseurs, comme Ollama sur un autre ordinateur de votre réseau, ou OpenAI.

### Ce qu'installe la configuration {#what-setup-installs}

La configuration télécharge actuellement deux modèles, qui utilisent ensemble environ 7 Go de mémoire pendant leur exécution :

- **Gemma 4 E4B (4-bit)**, pour la tâche **Mémoire**.
- **BGE-M3**, pour la tâche **Recherche de données**.

**Chat** et **Tâches web** restent sur Phi Cloud. Ces deux tâches demandent un modèle qui gère de façon fiable les contextes longs et les appels d'outils, et Phi ne les fait passer automatiquement sur ce Mac que si un modèle local d'au moins 20 milliards de paramètres est disponible. Le modèle Gemma que télécharge la configuration en compte environ 4 milliards : bien pour le travail d'arrière-plan, pas pour tenir une conversation. Vous pouvez tout de même y faire passer Chat à la main sous **Tâches d'IA**, à condition qu'il réussisse le test. À la fin de la configuration, Phi vous indique précisément quelles tâches s'exécutent désormais sur ce Mac.

Après la configuration, l'index qu'utilise la Mémoire pour retrouver les éléments liés est toujours construit sur Phi Cloud. Si vous voulez que cela se fasse aussi sur ce Mac, choisissez une fois à la main le modèle local pour **Recherche de données**, et les deux passent sur ce Mac.

## Connecter Ollama ou LM Studio {#connecting-ollama-or-lm-studio}

Ollama et LM Studio sont des apps gratuites qui exécutent des modèles ouverts sur votre propre ordinateur. Les deux sont intégrés à Phi comme fournisseurs, par défaut à l'adresse `http://127.0.0.1:11434` pour Ollama et `http://127.0.0.1:1234/v1` pour LM Studio.

1. Installez et ouvrez Ollama ou LM Studio, puis téléchargez un modèle (consultez [Modèles recommandés](#recommended-models)).
   - Ollama : exécutez `ollama pull <model>` dans le Terminal, par exemple `ollama pull gpt-oss:20b`.
   - LM Studio : recherchez un modèle dans l'app, téléchargez-le et démarrez le serveur local depuis la page **Developer**.
2. Dans Phi Chat, ouvrez **Paramètres → Fournisseurs d'IA** et choisissez **Ollama** ou **LM Studio**.
3. Activez **Utiliser ce fournisseur**. Si le service s'exécute sur un autre ordinateur de votre réseau, remplacez la valeur de **URL de base** par l'adresse de cet ordinateur.
4. Cliquez sur **Charger** pour récupérer ses modèles. Sous **Accès aux modèles**, choisissez **Autoriser tous les modèles**, ou **Modèles sélectionnés uniquement** et cochez ceux que vous voulez.
5. Choisissez un modèle, cliquez sur **Test** et, une fois la connexion signalée comme réussie, cliquez sur **Enregistrer les modifications**.
6. Revenez à **IA privée** et, sous **Tâches d'IA**, choisissez ce modèle pour la tâche à déplacer, comme **Chat**.
7. Activez l'interrupteur **IA privée**.

Pour tout autre service doté d'une API compatible OpenAI, utilisez **Ajouter un fournisseur personnalisé** et saisissez un nom, l'URL de base et, si le service en demande une, une clé API.

Bon à savoir :

- L'URL de base peut être en `http` ou en `https`, et la clé API est facultative, car les services locaux n'en demandent généralement pas. Une clé envoyée à une adresse `http` circule sans chiffrement : utilisez donc `https` pour tout ce qui ne se trouve pas sur votre propre Mac ou votre propre réseau.
- Ollama ou LM Studio doit rester ouvert. Si l'ordinateur se met en veille ou si l'app est quittée, les tâches concernées suivent votre [réglage de repli](#when-a-local-source-is-unavailable).
- Les tâches web et les longues conversations transportent beaucoup de texte. Si les réponses arrivent incomplètes, ou si l'assistant n'arrive pas à terminer une action, augmentez la longueur de contexte, à 32K par exemple : dans les réglages d'Ollama avec **Context length**, ou dans LM Studio avec **Context Length** au chargement du modèle. Un contexte plus long utilise plus de mémoire.
- Pour que les autres ordinateurs de votre réseau puissent joindre Ollama, Ollama doit écouter sur l'adresse réseau de son ordinateur (`OLLAMA_HOST=0.0.0.0`).

## Modèles recommandés {#recommended-models}

Les modèles ouverts évoluent vite : considérez donc les noms ci-dessous comme des exemples. Un modèle plus récent de même taille fera tout aussi bien l'affaire. Deux choses comptent avant tout : le modèle doit être assez grand, et il doit tenir en mémoire. Pendant son exécution, un modèle utilise à peu près sa taille de téléchargement en mémoire, plus quelques Go, et macOS et vos autres apps ont aussi besoin de place.

| Mémoire de votre Mac | Suggestion                                                                                                                                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16 Go                | Utilisez la configuration pour que Mémoire et Recherche de données s'exécutent sur ce Mac, et gardez Chat et Tâches web sur Phi Cloud. Cette quantité de mémoire ne peut pas accueillir un modèle adapté à Chat |
| 32 Go                | Vous pouvez exécuter un modèle de la classe des 20 milliards de paramètres pour Chat, par exemple **gpt-oss-20b** (Ollama : `gpt-oss:20b`) ou **Qwen3 30B** (Ollama : `qwen3:30b`)                              |
| 64 Go                | Vous pouvez choisir un modèle plus stable de la classe des 30 milliards de paramètres, par exemple **Qwen3 32B** (Ollama : `qwen3:32b`), avec de la marge pour un contexte plus long                            |
| 128 Go ou plus       | Vous pouvez exécuter un modèle de la classe des 100 milliards de paramètres, par exemple **gpt-oss-120b** (Ollama : `gpt-oss:120b`), qui se rapproche davantage des modèles cloud                               |

Par tâche :

- **Chat et Tâches web :** choisissez un modèle d'au moins 20 milliards de paramètres qui prend en charge l'appel d'outils (function calling). Les tâches web sont celles qui sollicitent le plus les appels d'outils, et les petits modèles y échouent souvent.
- **Modèle de repli pour la vision :** choisissez un modèle capable de lire les images, par exemple Gemma 3 12B (Ollama : `gemma3:12b`) ou Qwen2.5-VL 7B (Ollama : `qwen2.5vl:7b`).
- **Mémoire :** le modèle Gemma installé par la configuration suffit, et il n'y a généralement aucune raison d'en changer.
- **Recherche de données :** uniquement le modèle de recherche local que Phi télécharge, ou Phi Cloud.

Aussi grand soit-il, un modèle local reste généralement en deçà des modèles de pointe sur lesquels repose Phi Cloud. Si la qualité des réponses compte davantage pour vous que le fait de garder votre contenu sur votre Mac, laisser Chat et Tâches web sur Phi Cloud est un choix raisonnable.

## Quand une source locale est indisponible {#when-a-local-source-is-unavailable}

Quand un modèle local, Ollama ou LM Studio cesse de répondre, Phi applique le réglage **Lorsqu'une source locale ou auto-hébergée est indisponible** :

- **Basculer automatiquement vers Phi Cloud (par défaut)**. Les tâches concernées utilisent Phi Cloud en attendant, pour que les fonctionnalités d'IA continuent de fonctionner. Cela signifie aussi que, pendant ce temps, leur contenu part vers le cloud.
- **Suspendre les fonctionnalités d'IA concernées (ne jamais envoyer de données vers le cloud)**. Les fonctionnalités concernées sont suspendues jusqu'à ce que la source locale réponde de nouveau.

Si vous avez activé l'IA privée pour garder votre contenu sur ce Mac, choisissez la seconde option.

Ce réglage ne concerne que les sources locales et auto-hébergées. Quand un fournisseur cloud comme OpenAI, OpenRouter ou Codex échoue, Phi ne bascule pas vers Phi Cloud.

En cas de problème, la page IA privée affiche **Attention requise**, avec un bouton **Redémarrer le service local**.

## Utiliser Codex {#using-codex}

Si vous avez un abonnement ChatGPT et que vous vous êtes connecté à Codex sur ce Mac, vous pouvez utiliser cet abonnement comme fournisseur d'IA. Allez dans **Paramètres → Fournisseurs d'IA → Codex** et cliquez sur **Connecter**. Phi utilise la connexion que Codex conserve déjà, sans copier vos identifiants.

- Installez Codex et exécutez d'abord `codex login` dans le Terminal. Phi ne peut pas lire une connexion Codex stockée dans le trousseau.
- Codex peut servir pour Chat, Mémoire, Tâches web et le modèle de repli pour la vision, mais pas pour Recherche de données.
- Ce que fait Codex est décompté des limites de votre abonnement ChatGPT. Si vous les atteignez, ou si la connexion cesse de fonctionner, Phi ne bascule pas vers une autre source.

## Désactiver et réinitialiser {#turning-off-and-resetting}

- **Désactivez l'IA privée** avec son interrupteur. Toutes les tâches reviennent aussitôt à Phi Cloud, et les modèles téléchargés ainsi que vos choix sont conservés.
- **Supprimez un fournisseur** avec **Supprimer le fournisseur** sur sa page. Les tâches qui l'utilisaient reviennent à Phi Cloud.
- **Réinitialisez** avec **Réinitialiser les paramètres d'IA** sous **Paramètres avancés**. Cela renvoie toutes les tâches vers Phi Cloud, efface vos fournisseurs et leurs clés API, et supprime les modèles locaux.

## Et ensuite

- [Découvrez votre assistant](/fr/ai/), ce que l'assistant peut faire pour vous.
- [Phi Sentinel](/fr/sentinel/), le service d'arrière-plan qui fait tourner l'IA privée.
- [Confidentialité et vos données](/fr/privacy/), où vivent vos données et ce que Phi envoie.
