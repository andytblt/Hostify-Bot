const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { color, getTimestamp } = require('../utils/loggingEffects.js');

function loadEnvironment() {
    const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env';
    const envPath = path.resolve(process.cwd(), envFile);

    console.log(`${color.green}[${getTimestamp()}]${color.reset} [PROCESS] Chargement des variables d'environnement depuis : ${envPath}${color.reset}`);
    if (process.env.NODE_ENV === 'development') { 
        console.log(`${color.green}[${getTimestamp()}]${color.reset} [PROCESS] ${process.env.NODE_ENV} le mode a été chargé !${color.reset}`);
    } else {
        console.log(`${color.green}[${getTimestamp()}]${color.reset} [PROCESS] Le mode non-développement a été chargé !${color.reset}`);
    }

    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
    } else {
        console.log(`${color.red}[${getTimestamp()}] [ERROR] Fichier d'environnement ${envFile} not found${color.reset}`);
        process.exit(1);
    }
}

module.exports = loadEnvironment;
