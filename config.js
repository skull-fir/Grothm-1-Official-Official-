module.exports = {
    app: {
        token: "u thought lol",
        playing: "Music | Grothm ",
        global: true,
        guild: "904186076330070087",
        extraMessages: true,
        loopMessage: true,
        lang: "en",
        enableEmojis: false,
    },

    emojis: {
        back: "⏪",
        skip: "⏩",
        ResumePause: "⏯️",
        savetrack: "💾",
        volumeUp: "🔊",
        volumeDown: "🔉",
        loop: "🔁",
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: "",
            commands: [],
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: "highestaudio",
                highWaterMark: 1 << 25,
            },
        },
    },
};
