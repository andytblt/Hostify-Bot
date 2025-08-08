const { exec } = require("child_process");
const readline = require("readline");
const { color, getTimestamp } = require("../utils/loggingEffects");
const { asciiTextCommitRunner } = require("../lib/asciiText");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const askQuestion = (question) => {
	return new Promise((resolve) => rl.question(question, resolve));
};

asciiTextCommitRunner();

const gitLog = `${color.pink}[${getTimestamp()}]${color.reset} ${color.orange}[GIT]${color.reset}`;
const gitLogError = `${color.pink}[${getTimestamp()}]${color.reset} ${color.red}[GIT_ERROR]${color.reset}`;
const gitLogDescription = `${color.darkGrey}`;

const commit = async () => {
	const types = [
		{ type: "feat", description: "Une nouvelle fonctionnalité" },
		{ type: "fix", description: "Une correction de bug" },
		{ type: "docs", description: "Modifications de la documentation" },
		{ type: "style", description: "Modifications du style de code (formatage, etc.)" },
		{ type: "refactor", description: "Refactorisation de code sans modification des fonctionnalités" },
		{ type: "perf", description: "Améliorations des performances" },
		{ type: "test", description: "Ajout ou mise à jour de tests" },
		{ type: "chore", description: "Tâches de maintenance, mises à jour des dépendances, etc." },
		{ type: "add", description: "Ajout de nouvelles fonctionnalités ou de nouveaux fichiers" },
		{ type: "update", description: "Mise à jour des fonctionnalités ou des fichiers existants" },
		{ type: "remove", description: "Suppression de fonctionnalités ou de fichiers" }
	];

	let selectedType;
	while (!selectedType) {
		console.log(`${gitLog} ${color.green}\x1b[1mSélectionnez le type de changement\x1b[0m:${color.reset}`);
		types.forEach((item, index) => {
			console.log(
				`${gitLog} ${color.green}[${index + 1}]. \x1b[4m${item.type}\x1b[0m${color.reset} - ${gitLogDescription}*${
					item.description
				}*${color.reset}`,
			);
		});

		const typeIndex = await askQuestion(`${gitLog} Entrez le numéro correspondant au type de changement: `);
		selectedType = types[parseInt(typeIndex) - 1];

		if (!selectedType) {
			console.error(
				`${gitLogError} ${color.red}Sélection invalide. Veuillez choisir un type de modification valide..${color.reset}`,
			);
		}
	}

	let message = await askQuestion(`${gitLog} Entrez le message de validation: `);
	message = message.charAt(0).toUpperCase() + message.slice(1);

	const confirmation = await askQuestion(
		`${gitLog} Are you \x1b[1msure\x1b[0m vous souhaitez vous engager avec un message ${color.green}"\x1b[4m${selectedType.type}: ${message}\x1b[0m${color.green}"${color.reset}? (${color.green}YES${color.reset}/${color.torquise}no${color.reset}, default is ${color.green}OUI${color.reset}): `,
	);

	if (confirmation.toLowerCase() === "non") {
		console.log(`${gitLogError} ${color.red}Validation abandonnée.${color.reset}`);
		process.exit(0);
	} else {
		console.log(
			`${gitLog} S'engager avec un message ${color.green}"\x1b[4m\x1b[1m${selectedType.type}: ${message}\x1b[0m\x1b[0m${color.green}"${color.reset}...`,
		);
		exec(`git commit -m "${selectedType.type}: ${message}"`, (error, stdout, stderr) => {
			if (error) {
				console.error(
					`${gitLogError} ${color.red}Error: ${error.message} \n${gitLogError}${color.red} Cela peut être dû au fait que vos fichiers ne sont pas suivis. Pour ajouter votre fichier, utilisez « git add <fichier> » ou « git add ."${color.reset}`,
				);
				return;
			}
			if (stderr) {
				console.error(`${gitLogError} ${color.red}Stderr: ${stderr}${color.reset}`);
				return;
			}
			console.log(`${gitLog} ${color.green}Stdout:${color.reset} \n ${color.blue}${stdout}${color.reset}`);
		});
	}

	rl.close();
};

commit();
