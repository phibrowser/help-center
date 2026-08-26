---
description: "Laissez des agents de codage IA comme Claude Code piloter Phi Browser dans leurs propres Espaces d'agent. Installez le skill phi-browser, regardez les agents travailler en direct et prenez la main à tout moment."
---

# Le skill phi-browser

Le **skill phi-browser** connecte Phi aux agents de codage IA qui vivent hors du navigateur : **Claude Code, Codex, Cursor, OpenClaw, Pi et Hermes**. Installez-le dans votre agent et celui-ci peut piloter Phi directement : ouvrir des pages, remplir des formulaires, prendre des captures d'écran, extraire des données, tester des applications web, tout ce qui demande un vrai navigateur.

::: tip À ne pas confondre avec les Browser Skills
Il s'agit d'un seul skill, au singulier, et il appartient à votre agent de codage. Les **[Browser Skills](/fr/skills/)** vont dans l'autre sens : des instructions que vous enseignez à l'assistant de Phi, dans le navigateur. Le skill phi-browser est ce que Phi remet à _votre agent_ pour que celui-ci utilise Phi comme navigateur.
:::

Ce qui le rend inhabituel, c'est _l'endroit_ où l'agent travaille. Il ne s'empare pas de votre fenêtre et ne lance pas un navigateur à part, réduit au minimum. Il travaille dans son propre **Espace d'agent**, une fenêtre de navigateur masquée avec votre véritable état de connexion, pendant que vous continuez à naviguer. Vous pouvez le regarder en direct, prendre la main à tout instant et la rendre quand vous avez terminé.

## Les Espaces d'agent

Phi est construit autour des [Espaces](/fr/spaces/), des espaces de travail séparés, chacun lié à un profil avec ses propres identifiants. Quand un agent de codage démarre une tâche, Phi lui donne un **Espace d'agent** dédié : une vraie fenêtre de navigateur, lancée masquée, qui apparaît dans votre sélecteur d'Espaces sous la forme d'une petite pastille robot (🤖) avec un badge d'état. Plusieurs agents reçoivent des pastilles numérotées (R1, R2, et ainsi de suite) pour que vous puissiez les distinguer.

Cliquez sur la pastille pour regarder l'agent travailler en temps réel. Phi rend les actions de l'agent nativement : le curseur glisse vers sa cible, les clics ondulent, les champs saisis pulsent, et vous suivez exactement ce qu'il fait. Pendant que vous regardez, la page ignore vos propres clics et frappes clavier, pour que vous ne dérangiez pas l'agent par accident. La seule porte d'entrée est le bouton explicite **Prendre la main**.

Deux éléments de menu complètent l'ensemble. **Présentation → Transcription de l'agent** ouvre une console montrant la narration, les actions et la conversation de l'agent, et vous pouvez y taper des commandes à son intention. **Présentation → Suivi automatique des agents** suit automatiquement l'agent en train d'opérer.

Les Espaces d'agent sont rangés par défaut. Un Espace éphémère se ferme de lui-même peu après que la tâche s'est calmée, pour que les tâches terminées ne s'accumulent pas dans votre sélecteur. Un agent ne crée un espace de travail durable que si vous le demandez explicitement.

## Vous pouvez toujours reprendre le volant

Un seul côté contrôle un Espace d'agent à la fois, et c'est toujours vous qui gagnez. La pilule en surimpression en haut d'un Espace d'agent nomme l'agent aux commandes et propose les contrôles à qui tient le volant :

- Pendant que l'agent pilote, **Prendre la main** l'arrête instantanément, et toute action qu'il tenterait ensuite est refusée jusqu'à ce que vous rendiez la main.
- Pendant que vous pilotez, **Rendre la main** redonne le contrôle à l'agent, qui reprend là où il s'était arrêté, et **Terminer** met fin à la tâche.

Le passage de relais fonctionne aussi dans l'autre sens. Quand l'agent rencontre une étape qui vous revient, comme une connexion, un captcha, un code d'authentification à deux facteurs ou un choix lourd de conséquences, il rend la main et Phi affiche une invite, **« L'agent a besoin de vous »**, avec un bouton pour sauter directement dans l'Espace d'agent. Faites l'étape humaine, cliquez sur **Rendre la main**, et l'agent reprend.

## Vos identifiants, réutilisés délibérément

Un Espace d'agent est lié à l'un de vos profils existants : l'agent navigue donc avec les sites où vous êtes déjà connecté. C'est tout l'intérêt : il peut partir d'où vous êtes au lieu de démarrer d'un navigateur vierge.

Vous décidez jusqu'où cela va. **Profils utilisables par les agents**, dans l'onglet Développeur, restreint les profils dans lesquels les agents peuvent travailler. Si vous les interdisez tous, Phi crée un profil « Agent » dédié pour que les agents puissent quand même travailler sans toucher à vos identifiants principaux. Et quand une tâche doit se connecter quelque part, l'agent ne vous demande pas de coller un mot de passe. Il passe par le [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/), où chaque demande requiert votre approbation.

## Ce que fait l'agent vous engage

Voici la partie qui mérite deux lectures, parce qu'elle est facile à manquer quand on regarde quelque chose travailler tout seul.

Un agent qui pilote Phi agit **en votre nom**, depuis votre navigateur, avec vos sessions. Ce qu'il fait sur votre instruction vous engage, sur nos services comme sur ceux des autres, et les conditions des sites qu'il visite s'appliquent à vous exactement comme si vous aviez tout cliqué à la main.

**Certains sites ne veulent pas d'agents, et ils agiront en conséquence.** Beaucoup de sites traitent l'accès automatisé comme une menace pour leur activité, parce que leur contenu est leur activité, et ils le détectent agressivement. Reddit est l'exemple connu : les comptes identifiés comme automatisés sont restreints ou bannis, et cette décision leur appartient, pas à nous. Pointez un agent vers un site qui ne l'accueille pas et vous pouvez y perdre votre compte, votre historique et tout ce que vous y gardiez. Ce risque est le vôtre, et nous ne pouvons ni faire appel ni revenir en arrière à votre place.

**Les actions lourdes de conséquences relèvent de votre autorisation.** Un agent peut acheter, envoyer des messages, soumettre des formulaires et modifier des réglages sur les services où vous êtes connecté. Passez en revue ce qu'il s'apprête à faire avant de le laisser faire. Là où Phi vous demande confirmation, cette confirmation fait un vrai travail.

Nos [Conditions d'utilisation](https://phibrowser.com/terms/) posent tout cela en détail.

## La mise en place

Tout se trouve derrière le **Mode développeur**, désactivé par défaut. Trois étapes :

1. **Activez le Mode développeur** dans **Paramètres → Général**. Cela révèle l'onglet Développeur, qui regroupe l'accès des agents, les autorisations et le gestionnaire de mots de passe.
2. **Installez le skill** depuis **Paramètres → Développeur → Installer le Skill phi-browser**. Le bouton **Ajouter le skill à…** liste chaque agent pris en charge, ou **Tous les agents**, et lie le skill embarqué dans Phi au dossier de skills de cet agent, pour qu'il reste à jour à chaque mise à jour de Phi. Il faut Node 22 ou plus récent, et vous devriez redémarrer un agent fraîchement configuré. Dans Pi, `/reload` suffit.
3. **Autorisez les agents à se connecter** avec **Paramètres → Développeur → Contrôle des agents → « Autoriser les agents à contrôler Phi (CDP) »**. Cela s'applique immédiatement, sans relance.

La première fois qu'un agent donné se connecte réellement, Phi identifie le processus qui se connecte, y compris sa signature de code, et vous demande : **Autoriser une fois**, **Toujours autoriser** ou **Refuser**. Rien n'atteint le navigateur avant votre approbation. Les agents que vous avez approuvés apparaissent sous **Agents autorisés** dans le même onglet, marqués « Toujours » ou « Cette session ». Retirez-en un et il redemandera la prochaine fois.

## Comment l'accès est contenu

La connexion est conçue pour être inatteignable par tout ce que vous n'avez pas approuvé :

- Phi écoute sur un **socket privé accessible aux seuls processus de ce Mac**, pas sur un port réseau. Rien sur votre réseau, et aucun autre utilisateur du Mac, ne peut s'y connecter.
- Chaque connexion est **consentie agent par agent**, vérifiée par l'identité du processus qui se connecte.
- Désactiver **« Autoriser les agents à contrôler Phi (CDP) »** arrête les nouvelles connexions et coupe instantanément celles en cours.
- Par défaut, les agents ne peuvent travailler que dans **leurs propres Espaces d'agent**. Toucher à vos vraies données de navigation, c'est-à-dire vos Espaces, favoris, onglets épinglés, règles d'URL et disposition de fenêtres, est une autorisation séparée, **« Autoriser les agents à utiliser vos Espaces »**, elle aussi désactivée par défaut.
- Désactiver le **Mode développeur** est le coupe-circuit. Cela désactive à la fois l'accès des agents et le [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/), et rien ne se réactive automatiquement quand vous le rallumez.

## Et ensuite

- [La CLI Phi](/fr/phi-cli/), la même automatisation sous forme de commande `phi` dans votre terminal, pour les scripts et les pilotages ponctuels.
- [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/), comment les agents se connectent avec votre coffre sans voir vos mots de passe.
- [Browser Skills](/fr/skills/), l'autre type de skill, enseigné à l'assistant de Phi.
- [Espaces et Profils](/fr/spaces/), les espaces de travail et identités de connexion sur lesquels reposent les Espaces d'agent.
- [Automatisation et Phi Link](/fr/automation/), ce que l'assistant de Phi peut faire en votre nom.
