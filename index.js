const {Client, Intents} = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const github = 'https://github.com/9TailsDev'

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.channel.send('Pong!')
    }

    if (message.content === '!github') {
        message.channel.send(github)
    }
    if (message.content === 'avatar'){
        message.channel.send(message.author.avatarURL())
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
})

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()){
        return
    }

    const {commandName, options} = interaction

    if(commandName === 'ping'){
        interaction.reply({
            content: 'pong',
            ephemeral: false,
        })
    }
    if(commandName === 'github'){
        interaction.reply({
            content: (github),
            ephemeral: false,
        })
    }
    if(commandName === 'prefix'){
        interaction.reply({
            content: (`The prefix is \`!\``),
            ephemeral: false,
        })
    }
})

///////////////////////////////////////////////////   Slash Commands)//