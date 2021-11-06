const {Client, Intents} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const prefix = process.env.PREFIX

//Stuff
const github = 'https://github.com/9TailsDev'
const Hug = require('./anime/cuddle.json')

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('messageCreate', (msg) =>{
    // Extreamlyy basic/Shit command handler
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    var HugGif = 0

    switch(command){
        
        case 'ping': msg.channel.send('pong'); break
        case 'avatar': msg.channel.send(msg.author.displayAvatarURL()); break
        case 'hug': {HugGif = Hug[Math.floor(Math.random() * Hug.length)]; msg.channel.send(HugGif); break
        }
    }
})

client.login(process.env.TOKEN)

///////////////////////////////////////////////////   Slash Commands
client.on('ready', () =>{
    console.log('The client is ready')

    const guildID = '834109877542322176'
    const guild = client.guilds.cache.get(guildID)
    const prefix = '!'
    let commands

    if(guild){
        commands = guild.commands    
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong',
    })
    commands?.create({
        name: 'github',
        description: 'Replies with github link',
    })
    commands?.create({
        name: 'prefix',
        description: 'Replies with bots prefix',
    })
    commands?.create({
        name: 'avatar',
        description: 'Replies with your avatar',
    })
    commands?.create({
        name: 'hug',
        description: 'Replies with a hug gif',
    })
})

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()){
        return
    }

    const {commandName} = interaction

    switch(commandName){
        case 'ping': interaction.reply('pong'); break
        case 'github': interaction.reply(github); break
        case 'prefix': interaction.reply(prefix); break
        case 'avatar': interaction.reply(interaction.author.displayAvatarURL()); break
        case 'hug': {const HugGif = Hug[Math.floor(Math.random() * Hug.length)]
            interaction.reply(HugGif)
                break
        }
    } 
})

///////////////////////////////////////////////////   Slash Commands