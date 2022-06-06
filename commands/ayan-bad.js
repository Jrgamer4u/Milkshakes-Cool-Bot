const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/ayan.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ayan-bad')
		.setDescription('says funny ayan image, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply({files: [file]});
	},
};
