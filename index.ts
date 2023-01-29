import { Client, Message } from 'discord.js'; // import the Client and Message objects from the discord.js module
import dotenv from 'dotenv';

// const client = new Client(); 
// create a new Client object, which represents the bot
const client = new Client({ token: process.env.DISCORD_TOKEN });

// this event is triggered when the bot is successfully connected to Discord
client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`); // log the bot's username and discriminator to the console
});

// this event is triggered when the bot receives a message
client.on('message', (message: Message) => {
  if (message.content === 'ping') { // check if the message's content is 'ping'
    message.reply('pong'); // send 'pong' as a reply to the message
  }
});

const token = process.env.DISCORD_TOKEN; // get the Discord token from the environment variable
client.login(token); // use the token to log the bot in to Discord
