---
description: "Trouvez des réponses rapides sur les dispositions de Phi Browser, les Espaces, les Espaces de navigation privée, les favoris, la Split View, les fonctions d'IA, Phi Sentinel, Phi Link, les tarifs, la confidentialité et les Sauvegardes Time Machine."
---

# Questions fréquentes

Des réponses rapides aux questions courantes sur Phi Browser, regroupées par thème. Pour la vue d'ensemble et le « pourquoi » derrière la conception de Phi, lisez le [guide](/fr/what-is-phi-browser/). Vous découvrez Phi Browser ? Consultez [Premiers pas](/fr/get-started/).

## Dispositions et navigation

::: details Quels sont les trois modes de disposition ?
Phi propose trois modes qui arbitrent entre espace à l'écran et repères familiers. **Performance** donne le plus de place à la page et regroupe onglets et favoris dans la barre latérale verticale. **Équilibré** conserve la barre latérale mais ajoute une barre d'adresse au-dessus du contenu. **Confortable** est le plus proche d'un navigateur traditionnel, avec les onglets en haut et une barre d'adresse visible. Vous en choisissez un lors du premier démarrage et pouvez en changer à tout moment.
:::

::: details Par quel mode commencer ?
Si vous venez de Chrome ou de Safari, commencez par **Confortable** pour une transition en douceur. Si vous voulez un navigateur moderne à barre latérale avec une barre d'adresse visible, essayez **Équilibré**. Si vous voulez un maximum d'espace pour la page, utilisez **Performance**. Consultez [Passer à Phi](/fr/switching-to-phi/) pour le guide de migration complet.
:::

::: details Pourquoi une barre latérale verticale ?
La plupart des écrans modernes sont larges, pas hauts. L'espace vertical est le premier qui manque quand on lit, écrit ou fait des recherches ; une barre latérale verticale exploite donc mieux la forme des écrans actuels et laisse plus de place à la page elle-même.
:::

## Espaces et Profils

::: details Quelle est la différence entre un Espace et un Profil ?
Un **Espace** est un espace de travail dans la barre latérale, avec son nom, son icône, sa couleur et ses favoris. Un **Profil** est la couche d'isolation en dessous : chaque Profil a ses propres cookies, son historique, ses identifiants et ses extensions. Les Espaces organisent l'apparence et l'usage ; les Profils décident de ce qui reste séparé. Pour une vision complète, consultez [Espaces et Profils](/fr/spaces/) dans le guide.
:::

::: details Un même Profil peut-il porter plusieurs Espaces ?
Oui. Chaque Espace appartient à exactement un Profil, mais un Profil peut porter plusieurs Espaces. Les Espaces qui partagent un Profil partagent les mêmes identifiants. Le partage des onglets épinglés dépend de la portée d'épinglage que vous choisissez. Pour séparer complètement deux Espaces, cookies et comptes connectés compris, donnez-leur des Profils différents.
:::

::: details Comment créer un Espace ?
Créez un Espace depuis la bande des Espaces dans la barre latérale. Donnez-lui un nom et choisissez le Profil auquel il appartient, ou créez à cet endroit un **Nouveau profil** si l'Espace doit être entièrement séparé.
:::

::: details Que se passe-t-il quand je change d'Espace ?
Les onglets, les favoris et le thème de la barre latérale changent pour refléter l'Espace, et Phi met en avant la fenêtre de cet Espace (en en ouvrant une si nécessaire). Les onglets épinglés changent ou restent visibles selon la portée choisie dans **Paramètres → Espaces** : Espace, Profil ou application.
:::

::: details Chaque Espace a-t-il ses propres favoris et son propre thème ?
Oui. Chaque Espace dispose d'un ensemble de favoris indépendant et peut utiliser son propre thème de couleur ou **Suivre le thème global**. Vous pouvez aussi renommer un Espace et changer son icône depuis son menu.
:::

::: details Que sont les Règles d'URL ?
Les Règles d'URL ouvrent les sites correspondants dans un Espace normal, en Navigation privée ou dans Kiosk, quel que soit l'endroit où vous cliquez ou saisissez le lien. Gérez-les dans **Paramètres → Navigation**. Vous pouvez cibler un suffixe de domaine, un domaine exact, un « domaine contenant », ou un hôte plus un préfixe de chemin. Réglez une règle sur **Toujours demander** pour afficher une invite **Ouvrir dans quel Espace ?** au lieu d'un aiguillage silencieux. Quand plusieurs règles correspondent, la plus spécifique l'emporte.
:::

::: details Que se passe-t-il si je supprime un Espace ?
Supprimer un Espace supprime aussi les favoris et les Règles d'URL qui lui appartiennent. Cette action est irréversible. Les onglets épinglés à l'échelle de cet Espace sont également supprimés ; ceux à l'échelle du Profil ou de l'application restent. Le Profil, avec ses cookies, son historique et ses identifiants, n'est pas supprimé quand on retire un Espace.
:::

::: details En quoi est-ce différent d'Arc et de Dia ?
Phi garde les **Espaces** comme couche visible d'espaces de travail et les **Profils** comme couche d'isolation en dessous. C'est proche du modèle à deux couches d'Arc, tandis que Dia utilise plus directement les profils comme espaces de travail dans des fenêtres séparées. Pour la comparaison complète, consultez [Passer à Phi](/fr/switching-to-phi/).
:::

## Espaces de navigation privée

::: details Qu'est-ce qu'un Espace de navigation privée ?
Un Espace privé dans la barre latérale. Il apparaît dans la bande des Espaces comme n'importe quel autre Espace, mais il repose sur une session en mémoire et rien à son sujet n'est écrit sur le disque. Ouvrez-en un avec **Fichier → Nouvel Espace de navigation privée** ; s'il n'y en a qu'un, il s'appelle **Navigation privée**, et plusieurs ouverts en même temps sont numérotés **Navigation privée 1**, **Navigation privée 2**, et ainsi de suite. Pour une vision complète, consultez [Espaces de navigation privée](/fr/incognito/) dans le guide.
:::

::: details Les Espaces de navigation privée partagent-ils une session entre eux ?
Oui. Tous les Espaces de navigation privée ouverts partagent une même session privée : connectez-vous à un site dans l'un et vous êtes connecté à ce site dans les autres. Cette session est distincte de vos Profils habituels, ainsi que de la classique **Nouvelle fenêtre de navigation privée**, dont la session ne se mélange jamais avec elle.
:::

::: details Qu'est-ce qui est indisponible dans un Espace de navigation privée ?
Les favoris et les onglets épinglés ne sont pas affichés et ne peuvent pas être créés, le chat de l'assistant et le bouton Mémoire sont indisponibles, l'importation de données de navigation est bloquée, et seules les extensions que vous avez autorisées en navigation privée sont actives. Le thème est fixé au style sombre Navigation privée de Phi ; l'icône peut être changée, mais ce choix disparaît avec l'Espace.
:::

::: details Que se passe-t-il quand je ferme un Espace de navigation privée ?
Phi demande **« Cela fermera aussi cet Espace de navigation privée, voulez-vous vraiment continuer ? »** (cochez **Ne plus demander** pour ne plus voir la question), ferme les fenêtres de l'Espace et le retire de la bande des Espaces. Quand la dernière fenêtre d'Espace de navigation privée se ferme, ou quand vous quittez Phi, la session privée partagée est détruite. Les fichiers que vous avez téléchargés restent sur votre Mac.
:::

::: details Les Règles d'URL peuvent-elles envoyer un site vers un Espace de navigation privée ?
Oui. L'éditeur de Règles d'URL propose une cible générique **Navigation privée** aux côtés de vos Espaces habituels et de Kiosk. Une règle ne vise jamais un Espace de navigation privée précis, puisque ceux-ci n'existent que tant qu'ils sont ouverts. Quand une telle règle correspond, Phi utilise un Espace de navigation privée déjà ouvert ou en ouvre un à la demande. L'aiguillage est à sens unique : les règles ne font jamais sortir une navigation d'une session privée vers un Espace normal.
:::

::: details Les extensions fonctionnent-elles dans un Espace de navigation privée ?
Non, sauf si vous les autorisez une par une, comme dans tout navigateur basé sur Chromium. La session privée repose toujours sur votre Profil par défaut ; seules les extensions de ce Profil peuvent donc y fonctionner. Dans une fenêtre du Profil par défaut, choisissez **Gérer les extensions** dans le menu Extensions (ou saisissez `phi://extensions`), ouvrez les **Détails** de l'extension et activez **Autoriser en mode navigation privée**. Les extensions installées sur d'autres Profils n'apparaissent jamais dans un Espace de navigation privée, et il est impossible d'installer de nouvelles extensions depuis une session privée.
:::

::: details Les Espaces de navigation privée sont-ils inclus dans les Sauvegardes Time Machine ?
Non. Les instantanés les excluent entièrement, parce que leurs sessions sont censées disparaître avec leurs fenêtres ; restaurer une sauvegarde ne ramène donc jamais un Espace de navigation privée.
:::

## Favoris et onglets

::: details Pourquoi les favoris sont-ils différents dans Phi ?
Phi traite les favoris comme une partie de votre espace de travail actif, pas comme une archive cachée que l'on ouvre deux fois par an. Les pages enregistrées restent visibles et accessibles dans la barre latérale au lieu d'être enfouies dans un menu.
:::

::: details Comment fonctionnent les favoris en mode Confortable ?
Le mode Confortable se comporte à peu près comme Chrome. Affichez la barre de favoris avec **Présentation → Toujours afficher la barre de favoris**. Il existe aussi un menu **Favoris** dans la barre des menus, disponible dans tous les modes de disposition.
:::

::: details Comment fonctionnent les favoris en modes Équilibré et Performance ?
Ces modes n'ont pas de barre de favoris traditionnelle. À la place, faites glisser un onglet dans la barre latérale pour l'ajouter aux favoris. La barre latérale devient l'endroit principal où vous organisez vos pages.
:::

::: details Pourquoi les onglets et les favoris partagent-ils la même barre latérale ?
Ce sont les deux facettes d'une même chose : les pages qui comptent pour vous. Les onglets sont ce que vous utilisez maintenant ; les favoris, ce que vous avez enregistré. Les garder ensemble reflète vos allers-retours constants entre ces deux états.
:::

::: details Quelle est la différence entre onglets épinglés et favoris ?
Les onglets épinglés occupent le haut de la barre latérale, pour les pages où vous vivez, comme vos outils préférés ou vos tableaux de bord. Les favoris se placent en dessous et conservent les pages à garder pour plus tard sans les laisser actives.
:::

::: details Que se passe-t-il quand je clique sur un favori ?
Il s'ouvre sur place : l'entrée du favori dans la barre latérale devient son onglet actif au lieu de créer un onglet jetable. Si le favori est déjà ouvert, cliquer dessus active cet onglet plutôt que d'en créer une seconde copie. Fermez la page, et le favori reste dans la barre latérale, prêt à rouvrir.
:::

::: details Les favoris et les onglets épinglés sont-ils propres à chaque Espace ?
Les favoris sont toujours propres à un Espace, et chaque Espace garde son propre ensemble. Les onglets épinglés peuvent être limités à un Espace, partagés entre les Espaces d'un même Profil, ou partagés dans toute l'application. Choisissez la portée dans **Paramètres → Espaces**. **Profil** est la valeur par défaut. Consultez [Favoris et onglets épinglés](/fr/bookmarks/#choose-a-pinned-tab-scope).
:::

::: details Comment épingler ou désépingler un onglet ?
Faites un clic droit sur un onglet et choisissez **Épingler**, ou faites-le glisser dans la grille d'onglets épinglés en haut de la barre latérale. **Désépingler** le renvoie dans la liste des onglets. Vous pouvez réordonner les onglets épinglés en les faisant glisser, et utiliser **Épingler la Split View** pour conserver une disposition à deux volets comme un seul élément épinglé.
:::

::: details Comment ramener un onglet épinglé ou un favori à sa page d'origine ?
Double-cliquez sur l'onglet épinglé, ou cliquez sur la favicon d'un favori ouvert dans un onglet. Pour conserver la page en cours, maintenez **Commande (⌘)** pendant le double-clic sur l'onglet épinglé ou le clic sur la favicon du favori. La page en cours passe dans la liste des onglets comme onglet séparé, et l'onglet épinglé ou le favori revient à son URL d'origine.
:::

::: details Est-ce comparable à Arc ou à Dia ?
Oui. Phi reprend la même grande idée de barre latérale vivante, où les pages enregistrées restent visibles et les pages épinglées occupent le haut, tout en gardant sa propre arborescence de favoris et son propre comportement. Consultez [Passer à Phi](/fr/switching-to-phi/) pour la comparaison de migration et [Favoris et onglets épinglés](/fr/bookmarks/) pour le détail des fonctionnalités.
:::

## Split View et Groupes d'onglets

::: details Comment articuler onglets, Split View et Groupes d'onglets ?
Les onglets sont vos pages du moment. La Split View place deux pages côte à côte. Les Groupes d'onglets rassemblent des pages liées par projet ou par sujet.
:::

::: details Qu'est-ce que la Split View ?
La Split View place deux pages l'une à côté de l'autre dans la même fenêtre Phi. C'est utile pour lire et écrire en même temps, comparer deux pages, ou garder une documentation à côté d'une application web.
:::

::: details Comment créer une Split View ?
Faites un clic droit sur un onglet, un favori ou un onglet épinglé et choisissez **Ouvrir en Split View**, ou faites glisser un onglet sur la page en cours. Vous pouvez aussi maintenir **Option (⌥)** et cliquer sur un onglet épinglé, un favori ou un lien d'une page web. Phi l'ouvre à côté de l'onglet actuel en Split View.
:::

::: details Que sont les Groupes d'onglets ?
Les Groupes d'onglets rassemblent des onglets liés dans un groupe nommé : pratique pour un projet, un voyage, un sujet de recherche ou une séance de shopping.
:::

::: details Comment la Split View et les Groupes d'onglets fonctionnent-ils ensemble ?
Ils sont conçus pour se compléter : vous pouvez utiliser la Split View au sein d'un groupe et déplacer des onglets en Split View vers un groupe ou hors d'un groupe, pour garder le travail lié organisé au lieu de le laisser flotter en onglets épars.
:::

::: details L'assistant peut-il comprendre une Split View ou un Groupe d'onglets entier ?
Oui. Quand vous discutez depuis une Split View, Phi peut utiliser le contexte des deux pages ; depuis un Groupe d'onglets, il peut utiliser le contexte du groupe entier. Vous pouvez donc poser des questions couvrant plusieurs pages liées sans expliquer votre organisation.
:::

::: details Les Groupes d'onglets sont-ils la même chose que les favoris ?
Non. Les Groupes d'onglets organisent les pages sur lesquelles vous travaillez activement ; les favoris conservent des pages pour un usage ultérieur.
:::

## Fonctions d'IA {#ai-features}

::: details L'IA est-elle activée par défaut ?
Oui. Phi est livré avec les fonctions d'IA activées par défaut, parce qu'elles font partie du cœur du produit. Vous pouvez les désactiver si vous préférez un navigateur classique.
:::

::: details Puis-je désactiver toutes les fonctions d'IA ?
Oui, dans **Paramètres → Phi AI**. Désactiver l'IA ferme vos conversations d'IA et déconnecte tout Connecteur de données externes. Votre Mémoire reste sur votre appareil ; pour l'effacer aussi, utilisez l'option d'effacement de la page Mémoire, et cette suppression est définitive.
:::

::: details Quels sont les principaux composants d'IA ?
Quatre parties, chacune avec un rôle distinct : la **Mémoire**, l'**assistant**, les capacités **agentiques** et les **Browser Skills**.
:::

::: details Qu'est-ce que la Mémoire de Phi ?
La Mémoire de Phi est le système qui construit du contexte à partir de votre navigation au fil du temps, automatiquement et sans configuration manuelle.
:::

::: details Dois-je enregistrer des souvenirs manuellement ?
Non. La Mémoire est automatique. Phi observe les comportements de navigation pertinents et construit le contexte pour vous en arrière-plan.
:::

::: details Où la Mémoire de Phi est-elle stockée ?
Localement, sur votre appareil. La priorité au stockage local est un principe de conception fondamental.
:::

::: details Puis-je voir ou gérer ce que Phi retient ?
Oui. Vous pouvez consulter, gérer et supprimer vos données de mémoire directement dans Phi.
:::

::: details Phi envoie-t-il ma mémoire sur ses serveurs ?
Non. Les données de mémoire restent locales. Des modèles de langage peuvent traiter des tâches, mais votre mémoire personnelle n'est pas envoyée ailleurs pour être stockée ou utilisée pour l'entraînement.
:::

::: details Phi utilise-t-il mes données pour entraîner des modèles d'IA ?
Non. Phi n'utilise ni vos données de mémoire, ni votre contexte de navigation, ni vos interactions avec l'IA pour entraîner des modèles.
:::

::: details Qu'est-ce que l'assistant ?
Le compagnon avec lequel vous interagissez directement dans le navigateur. Vous lui donnez un nom lors du premier démarrage, il génère un avatar assorti, et vous l'appelez ensuite par ce nom : il a ainsi sa propre identité au lieu de ressembler à un chatbot générique.
:::

::: details Comment parler à l'assistant ?
Cliquez sur le bouton **Chat**, situé en bas de la barre latérale en mode Performance et en haut à droite de l'en-tête de page en modes Équilibré et Confortable. Vous pouvez aussi sélectionner du texte sur une page, faire un clic droit et choisir **Demander à [votre assistant] à propos de…** pour l'interroger en contexte.
:::

::: details Que peut faire l'assistant ?
Il peut répondre à des questions, résumer du contenu, expliquer des pages et vous aider dans vos tâches, en s'appuyant sur le contexte de l'onglet actuel, sur votre Mémoire Phi et sur vos données externes connectées.
:::

::: details Que signifie « agentique » ?
Cela signifie que l'IA peut faire plus que répondre à des questions. Elle peut agir dans le navigateur et accomplir des tâches pour vous, de l'action ponctuelle à l'automatisation récurrente.
:::

::: details Que sont les actions à la demande ?
Des tâches que l'assistant effectue quand vous le demandez, comme naviguer entre des pages ou interagir avec des sites web à votre place.
:::

::: details Que sont les tâches planifiées ?
Des automatisations récurrentes qui s'exécutent selon le calendrier que vous définissez, par exemple surveiller le prix d'un produit ou guetter les changements d'une page.
:::

## Phi Sentinel

::: details Qu'est-ce que Phi Sentinel ?
Phi Sentinel est l'orchestrateur d'IA en arrière-plan de Phi Browser. Il exécute les tâches planifiées et conserve l'historique de vos tâches d'IA, depuis la barre des menus de macOS.
:::

::: details Pourquoi Phi Sentinel est-il séparé du navigateur ?
Pour que les tâches planifiées et les flux d'IA persistants continuent de s'exécuter même quand la fenêtre du navigateur est fermée.
:::

::: details Pourquoi ce choix de conception ?
Garder le navigateur léger tout en maintenant une couche d'automatisation persistante rend l'ensemble du système plus pratique.
:::

## Phi Link

::: details Qu'est-ce que Phi Link ?
Phi Link relie Phi Browser à Telegram, pour utiliser votre assistant depuis votre téléphone et recevoir des nouvelles de vos tâches quand vous êtes loin de votre Mac.
:::

::: details Comment configurer Phi Link ?
Deux possibilités : utiliser le bot Phi Link officiel, la voie la plus rapide puisque vous scannez un code QR et terminez en un clic, ou créer votre propre bot Telegram via BotFather et coller son jeton dans les paramètres de Phi.
:::

::: details Que peut faire Phi Link ?
Discuter avec votre assistant, être averti quand des tâches réussissent ou échouent, et poursuivre vos flux de travail loin du navigateur.
:::

::: details Phi Link utilise-t-il la même identité d'assistant ?
Oui. La même identité d'assistant vous suit, pour une expérience cohérente entre l'ordinateur et le téléphone, avec une personnalisation possible si vous utilisez votre propre bot.
:::

## Tarifs et disponibilité

::: details Phi est-il gratuit ?
Oui, pour le moment. Phi Browser est actuellement gratuit, utilisation de l'IA comprise.
:::

::: details Phi restera-t-il gratuit pour toujours ?
Probablement pas exactement sous cette forme. Une tarification pourra être introduite à l'avenir pour des fonctions avancées.
:::

## Confidentialité et données

::: details Quel est le modèle de confidentialité de Phi ?
Phi Browser repose sur une architecture qui privilégie le local : ce que Phi retient reste sur votre appareil et n'est pas utilisé pour l'entraînement.
:::

::: details Que Phi ne collecte-t-il jamais ?
Phi ne collecte jamais vos données de mémoire, vos interactions avec l'IA ni votre contexte de navigation, et il ne les utilise pas pour l'entraînement.

Phi envoie bien un petit comptage anonyme toujours actif (combien d'installations définissent Phi par défaut, utilisent les Espaces, utilisent les Profils, et le fait qu'un plantage s'est produit), et, seulement si vous l'activez, des statistiques d'utilisation détaillées et des rapports de plantage. Consultez [ce que Phi envoie](/fr/privacy/#what-phi-does-send).
:::

::: details Mes souvenirs sont-ils stockés localement ?
Oui. Vos données de mémoire vivent sur votre appareil, et vous pouvez les consulter, les gérer et les supprimer.
:::

::: details Phi vend-il mon historique de navigation ou s'en sert-il pour entraîner des modèles ?
Non. Phi n'utilise ni la mémoire issue de votre navigation ni vos interactions avec l'IA pour entraîner des modèles, et il ne vend pas les données issues de votre navigation.
:::

::: details Phi collecte-t-il des statistiques d'utilisation ?
Oui. Phi n'envoie des statistiques d'utilisation anonymes à Phinomenon que lorsque l'interrupteur **Contribuer à améliorer les fonctionnalités et performances de Phi** est activé, et cet interrupteur est activé par défaut. Ces statistiques portent sur le navigateur lui-même : quelles fonctions sont utilisées et comment l'application se comporte. Elles n'incluent jamais les pages que vous visitez, votre Mémoire ni vos conversations d'IA. Les rapports portent un identifiant d'installation aléatoire sans aucun lien avec votre compte Phi. Consultez [Confidentialité et vos données](/fr/privacy/#usage-statistics).
:::

::: details Comment désactiver les statistiques d'utilisation ?
Ouvrez `phi://settings` et désactivez **Contribuer à améliorer les fonctionnalités et performances de Phi** dans la section **Phi et vous**, puis cliquez sur le bouton **Relancer** qui apparaît pour appliquer le changement. Désactiver l'interrupteur supprime aussi l'identifiant aléatoire associé à vos rapports précédents ; si vous le réactivez plus tard, Phi en crée un nouveau.
:::

## Sauvegardes Time Machine

::: details Qu'est-ce que la Time Machine de Phi ?
C'est un filet de sécurité de **retour à une version antérieure**. Avant certaines mises à jour majeures, Phi enregistre automatiquement un instantané de la version en cours et de vos données, pour que vous puissiez y revenir si une nouvelle version ne vous convient pas. Pour une vision complète, consultez [Sauvegardes Time Machine](/fr/time-machine/) dans le guide.
:::

::: details Est-ce la fonctionnalité Time Machine d'Apple ?
Non. Elle ne sauvegarde pas votre Mac et n'a aucun lien avec la fonctionnalité macOS du même nom. Elle ne fait que ramener Phi à une version précédente.
:::

::: details Ma navigation est-elle sauvegardée en continu ?
Non. Il ne s'agit pas d'une sauvegarde continue ni planifiée. Un instantané est créé automatiquement et seulement de temps en temps, juste avant une mise à jour plus risquée que d'habitude, et une seule fois par mise à jour de ce type. Pour une sauvegarde que vous contrôlez, utilisez plutôt **Exporter les données utilisateur**.
:::

::: details Que contient un instantané ?
Les données Phi de la version précédente, c'est-à-dire les favoris, les Espaces, les onglets épinglés, les paramètres, la Mémoire et l'état de navigation, plus l'indication de la version de l'application à restaurer. L'application elle-même est téléchargée pendant la restauration ; un retour arrière rétablit donc une configuration cohérente.
:::

::: details Où les instantanés sont-ils stockés ?
Localement, sur votre Mac. Ils ne sont pas envoyés dans le cloud, ne sont pas liés à votre compte et ne peuvent pas être déplacés vers un autre Mac.
:::

::: details Comment revenir à une version précédente ?
Ouvrez le menu **Aide**, choisissez **Sauvegardes Time Machine**, puis choisissez un instantané (classé par version, build et date, comme _Phi 1.6 (590) du 2026.6.11_). Confirmez **Restaurer** ; Phi télécharge la version précédente, remplace l'application actuelle et les données correspondantes, puis se relance. Une connexion internet est nécessaire pendant la restauration. S'il n'y a aucun instantané, le menu affiche **Aucune sauvegarde disponible**.
:::

::: details Quelle différence avec l'exportation de mes données ?
La Time Machine gère automatiquement les retours de version après mise à jour. Pour créer et conserver votre propre sauvegarde, par exemple pour passer sur un nouveau Mac ou garder une copie personnelle, utilisez **Gérer les données utilisateur** dans le menu **Aide** (**Exporter les données utilisateur…** et **Importer les données utilisateur…**).
:::
