//Event handler for messages
const { Events } = require('discord.js')

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return

    if (message.content === 'Hello') {
      message.reply('Hi')
      console.log(message.author)
    }

    if (message.content === 'sponge') {
      message.reply('You called?')
    }
  }
}