//Event handler for slash commands
const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return
    
    const command = interaction.client.commands.get(interaction.commandName)

    if (!command) {
      console.log(`No command matching ${interaction.commandName}`)
      return
    }

    try {
      await command.execute(interaction)
    } catch (error) {
      console.log(`Error exexcuting command ${interaction.commandName}, Error: `, error )
    }
  }
}