module.exports = {
    name: 'help',
    description: 'Get commands lists',
    execute(client, message, args) {
        message.channel.send('This bot as a very few commands, ping, help and it displays a list of people online on AGodlessSMP.');
    }
};