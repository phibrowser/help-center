---
description: "Pilotez Phi Browser depuis votre terminal avec la commande phi : ouvrez des pages, cliquez, remplissez des formulaires et prenez des captures d'écran dans des Espaces d'agent qui réutilisent les sites où vous êtes déjà connecté."
---

# La CLI Phi

La **CLI Phi** met l'automatisation de navigateur de Phi sur votre ligne de commande, en une seule commande, **`phi`**. Tout ce qui peut lancer une commande de terminal peut piloter votre navigateur avec elle : vous, un script shell, un job de CI ou un agent de codage.

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

Contrairement aux outils d'automatisation qui lancent un navigateur vierge et jetable, la CLI pilote **votre** Phi. C'est une façade en ligne de commande du même moteur que le [skill phi-browser](/fr/phi-browser-skill/), donc tout ce que décrit cette page s'applique ici aussi : le travail se déroule dans un **Espace d'agent** masqué avec les sites où vous êtes déjà connecté, il apparaît comme une pastille robot dans votre sélecteur d'Espaces, vous pouvez le regarder en direct et prendre la main à tout instant.

## Installation

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

Les deux installent la commande `phi`, plus `phibrowser` comme alias. Il faut macOS, Node 22 ou plus récent, et Phi Browser 2.4.0 ou plus récent, parce que la CLI est un client, pas un navigateur. Si Phi Browser est absent ou trop ancien, la CLI propose de l'installer ou de le mettre à jour pour vous, depuis le même flux de versions signées que celui dont l'application tire ses propres mises à jour ; `phi install browser` fait de même sans rien demander.

Il n'y a rien d'autre à configurer. Phi Browser n'a pas besoin d'être lancé, puisque la CLI le démarre au besoin. À la première connexion de la CLI, Phi affiche sa demande d'approbation habituelle (**Autoriser une fois**, **Toujours autoriser** ou **Refuser**), et approuver la CLI active le contrôle des agents dans la foulée. Sur les versions plus anciennes de Phi, l'accès des agents s'active à la place à la main dans **Paramètres → Développeur** ; la CLI vous le signale quand elle en rencontre une.

## La carte des éléments

Après chaque navigation, la CLI imprime l'en-tête de la page plus une ligne par élément interactif, exactement dans la syntaxe qu'acceptent les commandes d'action :

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

Les références `@N` restent valides tant que l'élément existe : vous pouvez donc lire la carte, décider, puis agir dans des commandes séparées. Après une action, la CLI n'imprime que ce qui a changé sur la page ; si l'action a déclenché une navigation, elle imprime à la place la carte complète de la nouvelle page. Pour les scripts, `--json` émet du JSON brut et `--quiet` supprime les résumés.

Lancez `phi help` pour la liste complète des commandes (navigation, instantanés, captures d'écran et PDF, cookies et stockage, attente, groupes d'onglets, téléchargements, et plus) et `phi help <command>` pour les options de chaque commande.

## Les sessions

Une session nomme une tâche et son Espace d'agent. La session par défaut s'appelle `cli` ; donnez la sienne à chaque objectif distinct avec `-s` :

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

Comme tout Espace d'agent, l'Espace d'une session est éphémère par défaut : il se ferme de lui-même quelque temps après que la tâche s'est calmée. Ajoutez `--persistent` quand vous voulez au contraire le conserver comme espace de travail durable.

## Où s'exécutent les commandes

Par défaut, tout se passe dans l'Espace d'agent masqué de la session. Deux choses élargissent ce cadre :

- **Vos vraies fenêtres.** `phi -U "Work" goto …` (et de même pour `click`, `fill`, `snapshot` et les autres) pilote la fenêtre visible d'un de vos propres Espaces au lieu d'une fenêtre masquée. Vos clics et ceux de la CLI s'entremêlent dans la même fenêtre, donc elle agit par petites étapes et relit la page entre chacune.
- **La gestion du navigateur.** Des commandes comme `space-list`, `bookmark-add`, `rules`, `pins` et `downloads` opèrent sur vos vraies données de navigateur à l'échelle de l'application, à l'image de ce que peut faire le skill phi-browser.

Les deux sont verrouillées derrière **Paramètres → Développeur → « Autoriser les agents à utiliser vos Espaces »**, une option désactivée par défaut, exactement comme pour les agents de codage. Tant que vous ne l'activez pas, la CLI est confinée à ses propres Espaces d'agent.

## Se connecter

La CLI ne vous demande jamais de coller un mot de passe dans un terminal. La connexion passe par le [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/) : avec `phi cred-fill`, Phi remplit un champ de connexion directement depuis votre coffre, le secret voyage donc de l'application à la page sans passer par la CLI, et chaque demande déclenche l'invite d'approbation de Phi, qui nomme qui demande et pour quoi. Les remplissages sont liés au site auquel appartient l'identifiant, les codes d'authentification à deux facteurs ne sont jamais communiqués à l'automatisation, et tout secret manipulé par une commande est effacé de sa sortie.

## Vous restez aux commandes

La CLI hérite des règles de co-pilotage du skill. Cliquez sur la pastille robot dans votre sélecteur d'Espaces pour regarder une session en direct, et prenez la main avec **Prendre la main** à tout moment. Pendant que vous tenez le volant, les commandes de la CLI qui modifient la page sont refusées jusqu'à ce que vous rendiez la main. Quand une étape vous revient (une connexion, un captcha, un code d'authentification à deux facteurs), le déroulé est `phi handoff "Sign in, then hand back"` : Phi vous sollicite, vous faites l'étape humaine, et le travail reprend quand vous rendez la main.

Une chose à savoir avant de pointer l'automatisation vers un compte auquel vous tenez : certains sites ne veulent pas d'agents, et ils agissent en conséquence. Reddit est l'exemple connu, et les comptes identifiés comme automatisés sont restreints ou bannis. Ce que la CLI fait sur votre instruction vous engage, et ce risque repose sur vous ; nous ne pouvons ni faire appel ni revenir en arrière à votre place.

## Installer le skill depuis le terminal

La CLI peut aussi mettre en place le [skill phi-browser](/fr/phi-browser-skill/) elle-même :

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

C'est la même chose que font les boutons **Installer le Skill phi-browser** dans **Paramètres → Développeur**, sans quitter le terminal : la commande lie le skill embarqué dans Phi au dossier de skills de chaque agent, pour qu'il reste à jour à chaque mise à jour de Phi.

::: tip À ne pas confondre avec les Browser Skills
Les [Browser Skills](/fr/skills/) sont les flux de travail que vous enseignez à l'assistant dans Phi. Ce que `phi install skill` installe, c'est le skill phi-browser, le paquet qui permet à un agent de codage extérieur de piloter Phi.
:::

## Et ensuite

- [Le skill phi-browser](/fr/phi-browser-skill/), les Espaces d'agent, regarder les agents en direct et comment l'accès est contenu. Tout s'applique à la CLI.
- [Gestionnaire de mots de passe pour les agents](/fr/agent-passwords/), comment l'automatisation se connecte avec votre coffre sans voir vos mots de passe.
- [Espaces et Profils](/fr/spaces/), les espaces de travail et identités de connexion sur lesquels reposent les Espaces d'agent.
