const { Events } = require('discord.js')

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return

    if (message.content = 'hello') {
      message.reply('Hi')
      console.log(message.author)
    }
  }
}