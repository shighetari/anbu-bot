import { Client, Message } from "discord.js";

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client: Client, message: Message) {
        message.channel.send("Pong!");
    }
}

