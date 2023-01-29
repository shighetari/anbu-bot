// Importing the required dependencies
const { Client, ClientOptions, PresenceData } = require('discord.js');
console.log(process.env.DISCORD_TOKEN);
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
//# sourceMappingURL=index.js.map