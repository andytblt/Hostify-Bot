const { Events, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder, } = require("discord.js");
const guildSettingsSchema = require('../schemas/prefixSystem.js');
const SetupChannel = require('../schemas/aiChannelSystem.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message, client, interaction) {

        if (message.author.bot) return;
        if (message.content.toLowerCase().includes(`${client.config.botName}`)) {

            const setupChannel = await SetupChannel.findOne({ channelID: message.channel.id });
            if (setupChannel) return;

            const fetchGuildPrefix = await guildSettingsSchema.findOne({ Guild: message.guild.id });
            const guildPrefix = fetchGuildPrefix?.Prefix || client.config.prefix

            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);

            let uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            const embed = new EmbedBuilder()
            .setColor("Purple")
            .setTitle("Oh salut ! Quelqu'un m'a mentionné !")
            .setDescription(`Salut **${message.author.username}**! Je vois que vous m'avez mentionné ! Voici quelques informations utiles à mon sujet.\n ⁉️ • **Comment afficher toutes les commandes ?**\nSoit utiliser **/help-manual** ou faites / pour voir une liste de toutes les commandes !`)
            .addFields({ name: '**🌐 • Website:**', value: 'https://hostify-be.fr/'})
            .addFields({ name: `**🏡 • Servers:**`, value: `${client.guilds.cache.size}`, inline: true })
            .addFields({ name: `**👥 • Users:**`, value: `${client.guilds.cache.reduce((a,b) => a+b.memberCount, 0)}`, inline: true})
            .addFields({ name: `**💣 • Commands:**`, value: `\`\`${client.commands.size}\`\` **Slash** & \`\`${client.pcommands.size}\`\` **Prefix**`, inline: true})
            .addFields({ name: `**📡 • Latence:**`, value: `\`\`${Math.round(client.ws.ping)}ms\`\``, inline: true})
            .addFields({ name: `**🕒 • Uptime:**`, value: `\`\`${uptime}\`\``, inline: true})
            .addFields({ name: `**🛎️ • Prefix:**`, value: `Server prefix is \`\`${guildPrefix}\`\``, inline: true})
            .setTimestamp()
            .setThumbnail(client.user.avatarURL())
            .setFooter({text: `Requested by ${message.author.username}.`})

            const buttons = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setEmoji("➕")
                    .setLabel("Invite")
                    .setURL(client.config.botInvite)
                    .setStyle(ButtonStyle.Link)
            );
            const buttons1 = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                .setEmoji("➕")
                .setLabel("Join Support Server")
                .setURL(client.config.botServerInvite)
                .setStyle(ButtonStyle.Link)
            );

            return message.reply({ embeds: [embed], components: [buttons, buttons1] });
        }
    }
}
