
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const config = require("../../../config.js");
const pool = require("../../../pool.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("verify")
		.setDescription(
			"ยืนยันบัญชีของคุณบน Server นี้"
		),

	async execute(interaction) {
        const domain = config.server.domain === 'localhost' ? `${config.server.domain}:${config.server.httpPort}` : `${config.server.domain}`; 

        if(interaction.member.roles.cache.some(r => r.id === config.Discord.verifiedRole)) {
            await interaction.reply("คุณยืนยันตัวตนไปแล้ว");
            return;
        }

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("rules")
                .setLabel('Agree')
                .setEmoji('✅')
                .setStyle(1)
            )

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Rules')
            .setDescription(config.Discord.rules);

        if(config.Discord.rulesEnabled) {
            await interaction.reply('โปรดดูข้อความส่วนตัว')

            const linkID = pool.createLink(interaction.user.id);

            const captchaEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('reCAPTCHA Verification')
            .setDescription(`โปรดทำการยืนยันผ่าน Website ในเวลา 15 นาที \n${config.server.https ? 'https://' : 'http://'}${domain}/verify/${linkID}`)

            await interaction.user.createDM().then(async (dm) => {
                await dm.send({ embeds: [captchaEmbed] }).catch(() => {
                    logger.error(`ระบบไม่สามารถส่งข้อความได้คุณได้ดปิด DM รึยัง`);
                });
            });

        } else {
            await interaction.reply('Please check your DMS!')

            const linkID = pool.createLink(interaction.user.id);

            const captchaEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('reCAPTCHA Verification')
            .setDescription(`โปรดทำการยืนยันผ่าน Website ในเวลา 15 นาที \n${config.server.https ? 'https://' : 'http://'}${domain}/verify/${linkID}`)

            await interaction.user.createDM().then(async (dm) => {
                await dm.send({ embeds: [captchaEmbed] }).catch(() => {
                    logger.error(`ระบบไม่สามารถส่งข้อความได้คุณได้ดปิด DM รึยัง`);
                })

            });
        }
    },
};