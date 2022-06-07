const { SlashCommandBuilder } = require('@discordjs/builders');
const Database = require("easy-json-database")
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const clicks = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database/clicks.json`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('click')
		.setDescription('click'),
	async execute(interaction) {
		if (clicks.has('clicks')) {
			clicks.set('clicks', 1);
		} else {
			clicks.add('clicks', parseInt(1));
		}
		if (clicks.has(interaction.user.id)) {
			clicks.set(interaction.user.id, 1);
		} else {
			clicks.add(interaction.user.id, parseInt(1));
		}
		return interaction.reply("1 Click added.");
	},
};
