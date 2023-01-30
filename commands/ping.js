"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client, message) {
        message.channel.send("Pong!");
    }
};
//# sourceMappingURL=ping.js.map