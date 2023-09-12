//Discord.js classes neccessary
const { Client, Events, GatewayIntentBits } = require('discord.js')
const { token } = require('./config.json')

//Client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds ]})

//When client is ready, run code one
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`)
})

//log in to discord with token
client.login(token)