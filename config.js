module.exports = {
    server: {
        domain: "localhost",
        https: false,
        httpPort: 80,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        prefix: "!", // —— Deprecated lol.
        token: "MTE2MzgyNjM4OTI0NjU0MTkyOA.GS5Wm2.suxP4Zd7I09JhtK7TS_HVaA5hAGU2gKtBWbnRQ", // —— Your bot's token.
        botId: "1163826389246541928", // —— The bot's ID.
        guildId: "1163804884450156544", // —— The server ID on where the commands will be deployed.
        verifiedRole: "1164101395058790461", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 3, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "unverified users!",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: true,
        rules: "ข้อตกลงการอยู่ร่วมกัน \n 1.ไม่ใช้ถ้อยคำหยาบคาย \n 2.งดสแปมข้อความ \n 3.ไม่ขอข้อมูลส่วนตัวหรือส่งข้อมูลส่วนตัวลงในแชแนลแชท \n 4.ไม่พูดเรื่องที่ก่อให้เกิดปัญหาความขัดแย้งสูง เช่น การเมือง \n ไม่ปล่อยข่าวปลอม
           

    reCAPTCHA: {
        secretKey: "6LefMa4oAAAAAHp_OcGPa0YPjojuYZcTB2ZZPQ3b",
        publicKey: "6LefMa4oAAAAAGdYNae2wkokBsFJfPVhu_ay9-Xy"
    }
}

