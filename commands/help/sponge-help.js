const { SlashCommandBuilder } = require('discord.js')
const { help } = require('../../config.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sponge-help')
    .setDescription('Find out how Sponge-Bot works'),
  async execute(interaction) {
    await interaction.reply({content: help, ephemeral: true })
  }
}