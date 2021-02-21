module.exports = {
    name: 'ping',
    description: 'Get the ping of the bot.',
    execute(client, message, args) {
        message.channel.send(`Ping is ${Math.round(client.ws.ping)}ms`);
    }
};