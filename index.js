const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔥 Servidor web para que Render detecte puerto abierto
app.get('/', (req, res) => {
  res.send('Titan Bot activo 24/7 🔥');
});

app.listen(PORT, () => {
  console.log(`Servidor web activo en puerto ${PORT}`);
});

// 🤖 Cliente de Discord
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

// 🔐 Login seguro usando variable de entorno
client.login(process.env.TOKEN);