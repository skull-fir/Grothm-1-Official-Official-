const { Translate } = require('../process_tools');

module.exports = async ({ inter, queue }) => {
  if (!queue?.isPlaying())
    return inter.editReply({
      content: await Translate(`No music currently playing... try again ? <:1326_cross:908665425083109416>`),
    });
  if (!queue.history.previousTrack)
    return inter.editReply({
      content: await Translate(`There was no music played before <${inter.member}>... try again ? <:1326_cross:908665425083109416>`),
    });

  await queue.history.back();

  inter.editReply({
    content: await Translate(`Playing the <**previous**> track <:1779_check:908664839973502986>`),
  });
};
