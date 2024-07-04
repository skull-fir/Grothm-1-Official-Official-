const { EmbedBuilder } = require('discord.js');
const { Translate } = require('../../process_tools');

module.exports = (queue, track) => {
    if (!client.config.app.extraMessages) return;

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate(`<🎶> Track <${track.title}> added in the queue <✅>`), iconURL: track.thumbnail })
        .setColor('#191970');

        queue.metadata.channel.send({ embeds: [embed] });
    })()
}
