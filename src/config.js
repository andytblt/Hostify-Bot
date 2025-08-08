module.exports = {
	// BOT VERSION //
	botVersion: "BETA-v1.7.0",

	// BOT INFO //
	prefix: "+", // Default prefix
	status: "dnd",
	eventListeners: 20,
	botName: "Hostify",
	dev: "Kkermit",
	devBy: "| Developed by kkermit",
	developers: "526853643962679323",
	noPerms: `Vous **n'avez pas** les autorisations requises pour utiliser cette commande !`,
	ownerOnlyCommand: `Cette commande est **uniquement** disponible pour le propriétaire du bot !`,
	filterMessage: "Votre message contient des grossièretés qui ne sont **pas** autorisées !",
	botInvite: "https://discord.com/oauth2/authorize?client_id=1403447293105148044&permissions=8&integration_type=0&scope=bot",
	botServerInvite: "https://discord.gg/rNehbr5f6X",

	noPerms: (missingPerms) => {
		const formattedPerms = missingPerms
			.map((perm) => `\`${perm.toString().split("_").join(" ").toLowerCase()}\``)
			.join(", ");
		return `Vous **n'avez pas** les autorisations requises pour utiliser cette commande !\nAutorisations manquantes: ${formattedPerms}`;
	},

	// EMBED COLORS //
	embedColor: "Blurple",
	embedAutomod: "Blue",
	embedCommunity: "Green",
	embedModLight: "Red",
	embedModHard: "DarkRed",
	embedInfo: "LuminousVividPink",
	embedMusic: "Gold",
	embedMiniGames: "Orange",
	embedFun: "Yellow",
	embedDev: "Aqua",
	embedProfile: "Navy",
	embedAuditLogs: "Purple",
	embedLevels: "Fuchsia",
	embedEconomy: "DarkOrange",
	embedVerify: "DarkGreen",
	embedAi: "DarkGrey",
	embedSpotify: "#1DB954",
	embedInsta: "LuminousVividPink",
	embedEconomyColor: "#00FF00",

	// EMOJIS //
	automodEmoji: "<:auto:1235660206856474704>",
	modEmojiHard: "<a:mod:1235642403986083840>",
	modEmojiLight: "<a:wompus:1235671799241510973>",
	pepeCoffeeEmoji: "<:pepe:1238878395303989309>",
	arrowEmoji: "⤵",
	errorEmoji: "❌",
	auditLogEmoji: "📋",
	verifyEmoji: "<a:ver:1244732033339494450>",
	countSuccessEmoji: "<a:tick:1235674049032486945>",
	confettiEmoji: "<a:confetti:1289370096959225857>",

	// MUSIC EMOJIS //
	musicEmojiPlay: "▶️",
	musicEmojiStop: "⏹️",
	musicEmojiQueue: "📄",
	musicEmojiSuccess: "☑️",
	musicEmojiRepeat: "🔁",
	musicEmojiError: "❌",

	// CHANNEL IDS //
	botLeaveChannel: "1139731092329480332", // Canal de journalisation pour les bots quittant les serveurs
	botJoinChannel: "1240480049681928203", // Canal de journalisation pour les robots rejoignant les serveurs
	commandErrorChannel: "1240912641719930970", // Canal de journalisation des erreurs de commande
	evalLogsChannel: "1273733451677306880", // Canal de journalisation pour la commande eval
	dmLoggingChannel: "1362140847210233917", // Canal de journalisation pour les DM (lorsque les utilisateurs envoient un message direct au bot)

	// Ticket Configuration //
	ticketName: "ticket-",
	ticketDescription: "🗳️ Le ticket a été ouvert par",
	ticketCreate: "✅ Votre ticket a été créé",
	ticketAlreadyExist: "Désolé, mais vous avez déjà un ticket ouvert. Pour en ouvrir un nouveau, veuillez fermer le ticket actuel.",
	ticketNoPermissions: "Désolé, mais vous n'avez **pas** la permission de faire cela.",
	ticketError: "Une erreur s'est produite, réessayez plus tard.",
	ticketMessageTitle: "Bienvenue, merci d'avoir ouvert un ticket. Veuillez décrire votre problème en détail.",
	ticketMessageDescription: "Un membre de notre équipe de modération prendra bientôt en charge votre demande.\nMerci de patienter.",
	ticketMissingPerms: "Désolé, il semble que je ne dispose pas des autorisations nécessaires. Essayez de m'accorder des autorisations plus élevées.",
	ticketClose: "Fermer",
	ticketCloseEmoji: "📪",
	ticketLock: "Verrouillage",
	ticketLockEmoji: "🔒",
	ticketUnlock: "Ouvrir",
	ticketUnlockEmoji: "🔓",
	ticketClaim: "Réclamer",
	ticketClaimEmoji: "👋",
	ticketManage: "Membres",
	ticketManageEmoji: "➕",
	ticketManageMenuTitle: "Choisissez un membre.",
	ticketManageMenuEmoji: "❔",
	ticketCloseTitle: "Ce ticket est en cours de fermeture...",
	ticketCloseDescription: "Le ticket sera fermé dans 5 secondes.",
	ticketSuccessLocked: "Le ticket a été verrouillé avec succès.",
	ticketAlreadyLocked: "Ce ticket est déjà verrouillé.",
	ticketSuccessUnlocked: "Le ticket a été déverrouillé avec succès.",
	ticketAlreadyUnlocked: "Ce ticket est déjà débloqué.",
	ticketSuccessClaim: "Le ticket a été réclamé avec succès par",
	ticketAlreadyClaim: "Le ticket est déjà réclamé par",
	ticketDescriptionClaim: ", il a été affirmé par",
	ticketTranscriptMember: "Membre:",
	ticketTranscriptTicket: "Ticket:",
	ticketTranscriptClaimed: "Réclamé:",
	ticketTranscriptModerator: "Modérateur",
	ticketTranscriptTime: "Heure:",
	ticketMemberAdd: "a été ajouté au ticket.",
	ticketMemberRemove: "a été supprimé du ticket.",

	// AI Chat Models //
	aiChatChannelModel: "mistral-large-latest",
	aiChatModel: "gpt-4o",
	aiImageGenModel: "flux-pro",

	// ValorantEmoji //
	valoRadianite: "<:ValoRadianite:1335281554942853271>",
	valoPoints: "<:ValoPoints:1335278703294550156>",
	valoKingdomCredits: "<:ValoKingdomCredits:1335281540107735172>",
	ultraEdition: "<:Ultra_Edition:1335281525100380313>",
	selectEdition: "<:Select_Edition:1335281506855288845>",
	premiumEdition: "<:Premium_Edition:1335281487645249567>",
	exclusiveEdition: "<:Exclusive_Edition:1335281472801869824>",
	deluxeEdition: "<:Deluxe_Edition:1335281457563701289>",
};
