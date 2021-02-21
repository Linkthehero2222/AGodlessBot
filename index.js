const Discord = require('discord.js');
const mcUtil = require('minecraft-server-util');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

setInterval(function() {
    mcUtil.status('144.217.199.3', {port: 25595})
    .then((response) => {
        console.log(response);
        var channel = client.channels.cache.get('804863290105790464');
        channel.setName(`SMP-member : ${response.onlinePlayers.toString()} online`);
    })
    .catch((error) => {
        console.log(error);
    });
}, 300000);

client.login('ODEyNzM5NDU5MzA0OTE0OTQ0.YDFImw.tm12hJYcacRFuf1iFCHSGX6-Bwk');