const { SlashCommandBuilder } = require('discord.js')
const { facts } = require('../../utils/config.json')

//Sponge fact
module.exports = {
  data: new SlashCommandBuilder()
    .setName('sponge-fact')
    .setDescription('Learn a fact about sponges'),
  async execute(interaction) {
    await interaction.reply(facts[Math.floor((Math.random() * facts.length))])
  }
}