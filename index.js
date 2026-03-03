const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Bot activo como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Titan Performance activo 24/7 🔥');
  }
});

client.login(process.env.TOKEN);