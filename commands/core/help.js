const { EmbedBuilder } = require("discord.js");
const { Translate } = require("../../process_tools");

module.exports = {
    name: "help",
    description: "All the commands this bot has!",
    showHelp: false,

    async execute({ client, inter }) {
        const commands = client.commands.filter((x) => x.showHelp !== false);

        const embed = new EmbedBuilder()
            .setColor("#ff0000")
            .setAuthor({
                name: client.user.username,
                iconURL: client.user.displayAvatarURL({
                    size: 1024,
                    dynamic: true,
                }),
            })
            .setDescription(
                await Translate(
                    "Hello, and welcome to Grothm. Please enjoy your time using the bot, and as always, please [invite](https://discord.com/oauth2/authorize?client_id=895179433726582794&permissions=8&scope=applications.commands%20bot) it to the rest of your servers. As always, have a good time listening. Stay Groovy!",
                ),
            )
            .addFields([
                {
                    name: `Enabled - ${commands.size}`,
                    value: commands.map((x) => `\`${x.name}\``).join(" | "),
                },
            ])
            .setTimestamp()
            .setFooter({
                text: await Translate(
                    "Music comes first - Grothm",
                ),
                iconURL: inter.member.avatarURL({ dynamic: true }),
            });

        inter.editReply({ embeds: [embed] });
    },
};
