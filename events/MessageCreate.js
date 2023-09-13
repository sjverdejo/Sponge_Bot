//Event handler for messages
const { Events } = require('discord.js')

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return

    //lowercase msg 
    const _message = message.content.toLowerCase()
    
    if (_message.includes('hi')) {
      message.reply('Hi im sponge bab')
    }

    if (_message.includes('sponge')) {
      message.reply({content: 'You called?', ephemeral:true })
    }

    //change this eventually to ML
    if (_message.includes('swear word')) {
      message.author.send('Continue to be toxic and you will get more timeouts, you have been sponge-warned!')
      message.member.timeout(60_000)
    }
  }
}