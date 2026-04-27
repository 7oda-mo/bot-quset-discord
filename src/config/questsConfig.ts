import { CustomClient } from "../core/customClient.js";

export default {
    notification: {
        token: "MTA2MDg5MjE2OTM4MjEzNzg4Ng.GJ97c5.3TZZ1CNvryl-OB-2x9vvH6l4Gz3iTUjkgXjhl4" ,// self accouont token (not bot)
        channel: "1498086513035182190",
        role: "1270969423641182269",
        dm: {
            enabled: true,
            dmRoles: ["1270969423641182269"], // Roles to receive DMs
        }

    },
    bypassLimit: ["1498091741889433770"], // Bypass quest limits
    durationQuests: [
        "WATCH_VIDEO",
        "PLAY_ON_DESKTOP",
        "STREAM_ON_DESKTOP",
        "PLAY_ACTIVITY",
        "WATCH_VIDEO_ON_MOBILE",
        "PLAY_ON_XBOX",
        "PLAY_ON_PLAYSTATION"
    ],

    image: {
        channelId: "1498096088161452182", // channel where bot will upload images
        guildId: "1187612357808107562", // server where bot will upload images
    },
    serverId: "1187612357808107562", // Server where the bot operates
    completedQuestsChannel: "1498098880624070767",
    voice: {
        channel: "1412176704319000706", // Voice channel for quests
        role: "1270969423641182269" // Role required for voice channel access
    },


    logStrings: [],
    childProcessCount: 1,
    questsPerChildProcess: 15,
    useProxy: true,
    proxyType: "http", // http, socks5, socks4
    buttons: [
        {
            url: "https://youtu.be/eJoa4obHhng", // Tutorial or guide
            emoji: (e:CustomClient) => e.getEmoji("youtube",false) ?? "▶️",
        }
    ],






    customRewardsImage: {
        "1298745361602449479": "https://i.ibb.co/rRNztwKq/reward.webp",
        "1287881739531976815": "https://i.ibb.co/vxTHNqsS/eff35518172b971fa47c521ca21c7576d3a245433a669a6765f63b744b7b733a.png"
    },
    customRewardsEmoji: {
        "1287881739531976815": "orbIcon",
        "1298745361602449479": "nitro_level_stone"
    },
    inviteUrl: "https://discord.gg/MKwqee76dH",
    joinMessage: `## انت مو داخل السيرفر
    - **عشان تستعمل البوت لازم تدخل السيرفر ب الحساب الي تبي تسوي فيه المهمة**
    - **ملاحظة البوت مجاني 100%**
    
    ## You are not in the server
    - **To use the bot, you need to join the server with the account you want to complete the task with.**
    - **Note: The bot is 100% free.**
    
    - ** https://discord.gg/MKwqee76dH **`
}




