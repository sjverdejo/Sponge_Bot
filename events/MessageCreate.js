//Event handler for messages
const { Events } = require('discord.js')
const Filter = require('bad-words')
module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    const filter = new Filter() //filter for swear words

    if (message.author.bot) return

    //lowercase msg 
    const _message = message.content.toLowerCase()

    if (filter.isProfane(_message)) {
      message.delete()
      console.log(message)
      message.channel.send(`${message.author.globalName}, that is not very sponge-propriate of you! Time out for you, keep it spongey!`)
      message.member.timeout(60_000)
    }

    if (_message === 'hi') {
      message.reply('Hi im sponge bab')
    }

    if (_message.includes('sponge')) {
      message.reply({content: 'You called?', ephemeral: true })
    }
  }
}