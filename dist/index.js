"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const { Client, ClientOptions, PresenceData } = require('discord.js');
require('dotenv').config();
// Defining the options for the client
const clientOptions = {
    // This property specifies the intents that the client should subscribe to
    intents: [
        'GuildMessages',
    ],
    // This property specifies the status and activity of the client when it is online
    presence: {
        status: 'online',
        activity: {
            name: 'Example Activity',
            type: 'PLAYING',
        },
    },
};
// Initializing the client with the specified options
const client = new Client(clientOptions);
// Logging a message to the console when the client is ready
client.once('ready', () => {
    console.log('Client is ready!');
});
// Logging a message to the console when the client encounters an error
client.once('error', (error) => {
    console.error(error);
});
// Logging in the client with the Discord token specified as an environment variable
client.login(process.env.DISCORD_TOKEN);
console.log(process.env.DISCORD_TOKEN);
// Message event handler
client.on('message', (message) => {
    // Check if the message starts with the prefix
    if (!message.content.startsWith(config_1.prefix) || message.author.bot)
        return;
    // Split the message into command name and arguments
    const args = message.content.slice(config_1.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    // Check if the command exists
    if (!client.commands.has(commandName))
        return;
    // Get the command from the collection
    const command = client.commands.get(commandName);
    try {
        // Execute the command
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
const fs = require('fs');
const path = require('path');
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter((file) => file.endsWith('.ts'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//# sourceMappingURL=index.js.map