<!--     ██╗  ██╗  ██████╗  ███████╗ ████████╗ ██╗ ███████╗ ██╗   ██╗
         ██║  ██║ ██╔═████╗ ██╔════╝ ╚══██╔══╝ ██║ ██╔════╝ ╚██╗ ██╔╝
         ███████║ ██╔═████╗ ███████╗    ██║    ██║ █████╗    ╚████╔╝ 
         ██╔══██║ ██║██╔██║ ╚════██║    ██║    ██║ ██╔══╝     ╚██╔╝  
         ██║  ██║ ████╔╝██║ ███████║    ██║    ██║ ██║         ██║   
         ╚═╝  ╚═╝ ╚██████╔╝ ╚══════╝    ╚═╝    ╚═╝ ╚═╝         ╚═╝   -->


<p align="center"><strong>
Bot Discord avancé tout-en-un avec commandes préfixe et slash
</strong></p>

<p align="center">
Avec plus de 100 commandes slash et plus de 50 commandes préfixes, Hostify est un bot Discord open source facile à configurer et à utiliser et plein de fonctionnalités amusantes pour vos serveurs !
</p>

> Hostify ses pas seulement un bot mais aussi un service d'hergement complet rejoind le discord pour en savoir plus [Rejoindre le Discord ici](https://discord.gg/y8AtUhpyrNehbr5f6X)

> [!CAUTION]
> **Ne partagez et ne validez jamais votre fichier « .env » ni aucune de ses valeurs !** Ceux-ci contiennent des informations sensibles, comme votre jeton de bot, vos identifiants MongoDB et vos clés API, qui pourraient être utilisées pour compromettre vos systèmes ou engendrer des frais indésirables en cas de fuite. Ajoutez toujours « .env » à votre fichier « .gitignore »..

<h1 align="center"><strong>
⭐⭐
</strong></h1>


### Moderation Tools
- **Suite de modération complète** : fonctionnalités d'interdiction, d'expulsion, de temporisation, d'avertissement et de mise en sourdine
- **Auto-modération** : filtrez les grossièretés, les spams et les contenus inappropriés
- **Journalisation d'audit** : journalisation complète de toutes les actions de modération
- **Système de tickets** : créez et gérez des tickets d'assistance avec des transcriptions

### Divertissement et plaisir
- **Système musical** : Écoutez de la musique depuis YouTube, Spotify et SoundCloud avec gestion de file d'attente
- **Système de niveaux** : Système d'XP et de classement avec récompenses personnalisables
- **Mini-jeux** : Variété de jeux, dont RPS, pile ou face, 8ball, et plus encore
- **Commandes mèmes** : Mèmes aléatoires, blagues et interactions amusantes

### Informations et utilité
- **Informations utilisateur** : Informations utilisateur détaillées avec fiches de profil
- **Informations serveur** : Statistiques et informations du serveur
- **Informations rôle** : Informations détaillées sur les rôles, y compris les autorisations
- **Système de profils** : Création et personnalisation de profils utilisateur

### Intégration et fonctionnalités API
- **Intégration Valorant** : Affichage des skins, de la boutique et des informations sur les joueurs
- **Notifications Instagram** : Soyez informé des nouvelles publications des comptes Instagram
- **Intégration Spotify** : Suivi et intégration Spotify avancés
- **Informations météo** : Consultez les prévisions météo pour n'importe quel endroit

### Personnalisation
- **Préfixe personnalisé** : définissez un préfixe personnalisé pour votre serveur
- **Intégrations personnalisées** : créez et personnalisez des intégrations enrichies
- **Système d'annonces** : créez des annonces professionnelles
- **Gestion des fils de discussion** : créez et gérez les fils de discussion

## Compatibilité

### System Requirements

| Système d'exploitation | État du support | Notes |
|------------------|---------------|-------|
| Windows 11 | ✅ Support complet | Recommandé pour le développement |
| Windows 10 | ✅ Support complet | Recommandé pour le développement |
| macOS | ✅ Support complet | Testé sur macOS Ventura+ |
| Linux (Ubuntu) | ✅ Support complet | Testé sur Ubuntu 20.04 LTS+ |
| Linux (Debian) | ✅ Support complet | Testé sur Debian 11+ |
| Linux (CentOS) | ✅ Support complet | Testé sur CentOS 8+ |
| Linux (Fedora) | ✅ Support complet | Testé sur Fedora 34+ |

### Support Node.js

| Version Node.js | État du support | Notes |
|-----------------|---------------|-------|
| v18.13.0+ | ✅ Pris en charge | Version minimale requise |
| v19.x | ✅ Pris en charge | |
| v20.x | ✅ Pris en charge | Recommandé pour des performances optimales |
| v21.x | ✅ Pris en charge | Dernières fonctionnalités |

> [!IMPORTANT]
> **Si vous rencontrez des difficultés avec une version de Node, je vous suggère de la rétrograder ou de la mettre à niveau via NVM**
> Pour installer NVM, veuillez suivre ce [**lien**](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/).

## Installation
- Téléchargez [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- Téléchargez [Visual Studio Code](https://code.visualstudio.com/download).

## Utilisation
- **Configuration du projet**

1. Forker le projet Github :
1. Inscrivez-vous / Connectez-vous à [GitHub](https://github.com/).
2. Accédez à [Hostify](https://github.com/andytblt/hostify).
3. Cliquez sur « Star » pour soutenir le développement.
4. Cliquez sur « Fork » pour copier tout le code dans votre propre dépôt.

2. Cliquez sur le bouton « Code ». Dans le menu déroulant qui apparaît, cliquez sur « Télécharger le fichier ZIP » pour télécharger l'intégralité du dépôt sous forme de dossier ZIP.

3. Extrayez les fichiers dans un nouveau dossier et ouvrez-le avec [Visual Studio Code](https://code.visualstudio.com/download).


**Obtenir un jeton de bot Discord**

1. Connectez-vous au [Portail des développeurs Discord](https://discord.com/developers/applications).

2. Créer un bot :
1. Accédez à « Applications » à gauche.
2. Cliquez sur « Nouvelle application » en haut à droite et saisissez le nom du bot. Après confirmation, accédez à la nouvelle page.
3. Cliquez sur « Bot » à gauche.
4. Activez toutes les intentions répertoriées sous « Intentions de passerelle privilégiée » et cliquez sur « Enregistrer les modifications ».
5. Affichez et copiez le jeton en cliquant sur le bouton « Réinitialiser le jeton ».

3. Configurer OAuth2 :
1. Cliquez sur « OAuth2 » dans la colonne de gauche.
2. Cliquez sur « Générateur d'URL » dans la colonne de gauche. 3. Dans la colonne de droite, sélectionnez « bot » et « applications.commands » sous « SCOPES ».
4. Faites défiler vers le bas et sélectionnez « Administrateur » sous « AUTORISATIONS DU BOT ».
5. Copiez l'URL en bas et collez-la dans votre navigateur.
6. Choisissez le serveur auquel vous souhaitez ajouter le bot et cliquez sur « Continuer » > « Autoriser ».


- **Obtenir la chaîne de connexion MongoDB**

1. Inscrivez-vous / Connectez-vous à [MongoDB](https://www.mongodb.com).
2. Choisissez votre forfait de base de données cloud préféré.
3. Personnalisez les paramètres du cluster selon vos préférences et cliquez sur « Créer un cluster ».
4. Accédez à la page « Accès réseau », cliquez sur « Ajouter une adresse IP » et sélectionnez « Autoriser l'accès depuis n'importe quel emplacement ».
5. Revenez à la page « Base de données » et cliquez sur « Se connecter ».
6. Créez un « utilisateur de base de données », cliquez sur « Choisir une méthode de connexion » et sélectionnez « Connecter votre application ».
7. Copiez votre chaîne de connexion et remplacez « <password> » par le mot de passe de l'utilisateur de base de données que vous avez créé précédemment.


- **Configuration du fichier d'environnement**

*Si vous suivez cette procédure, vous pouvez ignorer les sections de l'Exécution du projet expliquant comment générer et renseigner le fichier `.env`*.

1. Pour configurer facilement les fichiers d'environnement (`.env` et `.development.env`), exécutez la commande `npm run setup-env:prod`.
2. Une fois la commande exécutée, un script est généré dans la console.
3. Vous devez ensuite renseigner les champs de la console. Les champs marqués **"Obligatoire"** sont obligatoires. Le script s'arrêtera si vous ignorez ces champs.
4. Une fois le champ renseigné, il écrira ces champs dans le fichier `.env` et générera le fichier `.env`.
5. Vous pouvez également ignorer cette étape et renseigner les champs vous-même en consultant le fichier `.example.env`. 6. Si vous souhaitez ensuite configurer le fichier `.env.development`, vous pouvez exécuter la commande `npm run setup-env:dev` et suivre à nouveau les étapes ci-dessus.


- **Exécution du projet**

1. Renommez le fichier « example.env » en « .env ».
2. Accédez à la page « Bot » du portail des développeurs Discord (https://discord.com/developers/applications) et cliquez sur « Réinitialiser le jeton ». Créez ensuite un fichier « .env » dans le répertoire racine.
3. Collez votre jeton de bot dans la variable « token » du fichier « .env ».
4. Collez votre chaîne de connexion [MongoDB] (https://www.mongodb.com) dans la variable « mongodb » du fichier « .env ».
5. Accédez à la page « OAuth2 » et copiez l'identifiant client (CLIENT ID).
6. Collez votre identifiant client dans la variable « clientid » du fichier « .env ». 7. Accédez à votre serveur Discord, activez le mode développeur et faites un clic droit sur le menu déroulant à côté du nom du serveur.
8. Cliquez sur « Copier l'ID du serveur » et collez-le dans la variable « guildid » du fichier « .env ».
9. Consultez la documentation de l'API web Spotify (https://developer.spotify.com/documentation/web-api) et connectez-vous. Une fois connecté, accédez au tableau de bord. Vous devrez ensuite créer une application. Suivez les étapes indiquées sur le site pour créer votre application. Une fois créée, vous devrez copier votre identifiant client et votre clé secrète client dans les champs « SPOTIFY_CLIENT_ID » et « SPOTIFY_CLIENT_SECRET » du fichier « .env ». Vous pouvez laisser « SPOTIFY_REDIRECT_URI » tel quel. Ne le modifiez que si vous mettez à jour le port du serveur Spotify.
10. Accédez au fichier « package.json » et prêtez attention aux commandes exécutables répertoriées sous « scripts ».
11. Ouvrez le terminal dans [Visual Studio Code](https://code.visualstudio.com/download) et installez tous les packages nécessaires avec « npm run setup ». Cela installera les dépendances et vous donnera un bref guide d'installation.
12. Ouvrez un nouveau terminal et saisissez « npm run prod » pour exécuter le fichier sans utiliser **nodemon** ou « npm run prod:nodemon » pour exécuter le bot avec nodemon.
13. Le bot devrait alors se connecter, comme le montrent les journaux de la console configurés au démarrage.
- **Runnable commands (scripts)**

**Effacer la base de données** - <br>
Pour effacer la base de données connectée via votre URL MongoDB, exécutez la commande « npm run wipe-data:prod ». Un menu s'affiche alors pour effacer toutes les données de la base de données ou celles des schémas individuels.

**Mettre à jour les packages** - <br>
Pour mettre à jour toutes vos dépendances, exécutez la commande « npm run update-packages ». Cette commande parcourt les dépendances et met à jour celles qui sont obsolètes.

**update-ytdl-core** - <br>
Pour mettre à jour la version du package « ytdl-core », exécutez la commande « npm run update-ytdl-core ». Cette commande met à jour le package vers la version la plus récente afin de garantir le bon fonctionnement du système musical.

**setup-env:prod** - <br>
Pour exécuter l'installation du fichier `.env`, exécutez la commande `npm run setup-env:prod`. Cela génère un script dans la console qui génère un fichier `.env`. Vous y renseignez les champs requis et l'enregistre dans le fichier.

**setup-env:dev** - <br>
Pour exécuter la configuration du fichier `.env.development`, exécutez la commande `npm run setup-env:dev`. Un script est alors généré dans la console. Ce script génère un fichier `.env.development`. Vous y renseignez les champs requis et l'enregistre.

**log-setup** - <br>
Pour exécuter la configuration des journaux colorés dans le module `discord-logs`, vous évitez d'utiliser manuellement la méthode ci-dessous [Setting-up-audit-logs](#setting-up-audit-logs).

**codebase-info** - <br>
Cette commande affiche des informations sur la base de code, comme le nombre de lignes de code présentes dans le répertoire src, le nombre de commentaires et le nombre de fichiers.

## Catégories de commandes

### Catégories de commandes Slash

| Nom de la catégorie | Description |
|--------------|-------------|
| AiCommands | Commandes basées sur l'IA pour les réponses au chat, la génération et l'analyse d'images |
| AuditLogging | Configuration de la journalisation d'audit du serveur |
| Automod | Outils de modération automatisés pour filtrer le contenu |
| Communauté | Commandes utilitaires générales pour la communauté |
| Développeurs | Outils et utilitaires spécifiques aux développeurs |
| Économie | Commandes de monnaie et de système économique |
| Divertissement | Commandes de divertissement |
| Concours | Outils pour organiser des concours sur le serveur |
| Aide | Commandes de documentation et d'assistance |
| InfoCommands | Outils de recherche d'informations |
| InstaNotification | Système de suivi des publications Instagram |
| LevelAndEconomy | Gestion de l'expérience et de l'économie |
| LevelSystem | Système de progression des niveaux utilisateur |
| MiniGames | Divers jeux interactifs |
| Autre | Commandes diverses |
| Propriétaire | Commandes d'administration du propriétaire du bot |
| Paramètres des préfixes | Configuration des préfixes personnalisés |
| Profil | Système de gestion des profils utilisateurs |
| Spotify | Intégration et suivi Spotify |
| Valorant | Informations et suivi du jeu Valorant |

### Catégories de commandes préfixes

| Nom de la catégorie | Description |
|--------------|-------------|
| Dev | Outils et commandes de débogage spécifiques aux développeurs |
| EconomyCommands | Commandes de gestion du système monétaire |
| FunCommands | Divertissement et interactions amusantes |
| InfoCommands | Commandes de recherche d'informations |
| LevelCommands | Progression de l'utilisateur et gestion des niveaux |
| ModerationCommands | Outils de modération et d'administration du serveur |
| Music | Commandes de lecture audio et de musique |
| OwnerCommands | Commandes d'administration réservées aux propriétaires de bots |
| TestCommands | Fonctionnalités de test et expérimentales |
| UtilityCommands | Commandes utilitaires et d'assistance générales |

## Configuration des journaux d'audit

Pour configurer le registre des journaux avancés pour les journaux d'audit de Testify (registres du gestionnaire d'événements), procédez comme suit :

1. Accédez à `node_modules` **=>** `discord-logs` **=>** `lib` **=>** `index.js`
2. Une fois dans le fichier `index.js` du package des journaux Discord, copiez et collez le code ci-dessous.

   ```js
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? P : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    const color = {
        red: '\x1b[31m',
        orange: '\x1b[38;5;202m',
        yellow: '\x1b[33m',
        green: '\x1b[32m',
        blue: '\x1b[34m',
        reset: '\x1b[0m',
        pink: '\x1b[38;5;213m'
    }

    function getTimestamp() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const discord_js_1 = require("discord.js");
    const handlers_1 = require("./handlers");
    let eventRegistered = false;
    module.exports = (client, options) => __awaiter(void 0, void 0, void 0, function* () {
        if (eventRegistered)
            return;
        eventRegistered = true;
        const intents = new discord_js_1.IntentsBitField(client.options.intents);
        /* HANDLE GUILDS EVENTS */
        if (intents.has(discord_js_1.IntentsBitField.Flags.Guilds)) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] ChannelUpdate event handler registered.`);
            client.on('channelUpdate', (oldChannel, newChannel) => {
                (0, handlers_1.handleChannelUpdateEvent)(client, oldChannel, newChannel);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] GuildUpdate event handler registered.`);
            client.on('guildUpdate', (oldGuild, newGuild) => {
                (0, handlers_1.handleGuildUpdateEvent)(client, oldGuild, newGuild);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] RoleUpdate event handler registered.`);
            client.on('roleUpdate', (oldRole, newRole) => {
                (0, handlers_1.handleRoleUpdateEvent)(client, oldRole, newRole);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] ThreadUpdate event handler registered.`);
            client.on('threadUpdate', (oldThread, newThread) => {
                (0, handlers_1.handleThreadChannelUpdateEvent)(client, oldThread, newThread);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`channelUpdate, guildUpdate, roleUpdate and threadUpdate event handlers not registered (missing Guilds intent).`);
        }
        /* HANDLE MEMBER EVENTS */
        if (intents.has(discord_js_1.IntentsBitField.Flags.GuildMembers)) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] GuildMemberUpdate event handler registered.`);
            client.on('guildMemberUpdate', (oldMember, newMember) => {
                (0, handlers_1.handleGuildMemberUpdateEvent)(client, oldMember, newMember);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] UserUpdate event handler registered.`);
            client.on('userUpdate', (oldUser, newUser) => {
                (0, handlers_1.handleUserUpdateEvent)(client, oldUser, newUser);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log('guildMemberUpdate, userUpdate event handlers not registered (missing GuildMembers intent).');
        }
        /* HANDLE MESSAGE UPDATE EVENTS */
        if (intents.has(discord_js_1.IntentsBitField.Flags.GuildMessages && discord_js_1.IntentsBitField.Flags.MessageContent)) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] MessageUpdate event handler registered.`);
            client.on('messageUpdate', (oldMessage, newMessage) => {
                (0, handlers_1.handleMessageUpdateEvent)(client, oldMessage, newMessage);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log('messageUpdate event handler not registered (missing GuildMessages or MessageContent intent).');
        }
        /* HANDLE PRESENCE UPDATE EVENTS */
        if (intents.has(discord_js_1.IntentsBitField.Flags.GuildPresences)) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] PresenceUpdate event handler registered.`);
            client.on('presenceUpdate', (oldPresence, newPresence) => {
                (0, handlers_1.handlePresenceUpdateEvent)(client, oldPresence, newPresence);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log('presenceUpdate event handler not registered (missing GuildPresences intent).');
        }
        /* HANDLE VOICE STATE UPDATE */
        if (intents.has(discord_js_1.IntentsBitField.Flags.GuildVoiceStates)) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log(`${color.pink}[${getTimestamp()}] ${color.reset}[AUDIT_LOGS] VoiceStateUpdate event handler registered.`);
            client.on('voiceStateUpdate', (oldState, newState) => {
                (0, handlers_1.handleVoiceStateUpdateEvent)(client, oldState, newState);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log('voiceStateUpdate event handler not registered (missing GuildVoiceStates intent).');
        }
    });
   ```
3. Ce code enregistre les journaux comme dans l'image ci-dessous <img align="center" alt="Audit-logs" src="https://i.postimg.cc/NMJfsy0V/Screenshot-2024-10-07-184919.png">
4. Pour mettre à jour la couleur des journaux, vous pouvez modifier la partie « ${color.pink} » avec la couleur souhaitée, définie dans la variable color.
5. Voilà ! Au démarrage du bot, il devrait être impeccable !

## Fonctionnalités techniques

### Journalisation de la console
- **Intégration du webhook Discord** : Toutes les sorties de la console sont envoyées à un webhook Discord pour une surveillance à distance
- **Limitation de débit** : Gestion intelligente des limites de débit de l'API Discord pour éviter les erreurs
- **Traitement par lots des messages** : Traitement efficace des messages par lots pour réduire les appels d'API
- **Gestion des erreurs** : Gestion robuste des erreurs avec journalisation appropriée

### Intégration de la base de données
- **Intégration MongoDB** : Intégration complète de la base de données pour un stockage persistant des données
- **Système de schéma** : Système de schéma bien organisé pour toutes les fonctionnalités du bot
- **Gestion des données** : Outils de gestion et de sauvegarde des données

### Intégrations API
- **API Valorant** : Intégration à l'API Valorant pour les données de jeu
- **API Spotify** : Intégration à l'API Spotify pour les données musicales
- **API Instagram** : Intégration pour le suivi des publications Instagram
- **API Météo** : Intégration pour les prévisions météo

### Optimisation des performances
- **Gestionnaire de commandes** : Gestion efficace des commandes avec préfixe et barre oblique
- **Gestionnaire d'événements** : Système complet de gestion des événements
- **Gestion des processus** : Gestion efficace des événements et de leur terminaison

## Support

Connectez-vous avec nous sur [Discord](https://discord.gg/rNehbr5f6X) pour obtenir de l'aide / toute demande connexe.

## License
Released under the terms of [MIT License](https://github.com/Kkkermit/Testify/blob/main/LICENSE) license.

**Thanks to [TheLegendDev](https://github.com/TheLegenDev) for the readme template from [Nub Bot](https://github.com/TheLegenDev/Nub-Bot)** 💛
