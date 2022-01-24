# pyxelbot
I'm currently relearning discord.js due to v13 being a pain in the ass so yeah a shitty bot to learn v13  

<h2>Installing</h2>

Anyway - Just start by typing npm i to download all the packages in the package file

![image](https://user-images.githubusercontent.com/53715423/140474723-46439c60-2f3d-4ad1-bf11-174e3806585d.png)

Make a new file called .env

put TOKEN=then the token (no spaces)

and bam you're done

<h2>Adding your own commands</h2>

pyxel bot isn't using a command handler yet it will be added soon so for now just put 

    if (message.content === 'the command') {
        message.channel.send('the output')
    }
    
<h2>Slash Commands</h2>

Slash commands aren't global it's per server so change the guildID to your serverid so asoon as you make a new command it will show. 
pyxel /command won't update to global as yet. 

First up you will need to tell the bot to add the /command to the server 
![image](https://user-images.githubusercontent.com/53715423/140475582-2cb41e74-2ee7-42b5-a028-37ceb33eafc0.png)

    commands?.create({
        name: 'idk',
        description: 'random des',
    })

Then you will need to make the actual command 

client.on('interactionCreate', async (interaction) =>{
    if(!interaction.isCommand()){
        return
    }

    const {commandName} = interaction

    if(commandName === 'idk'){
        interaction.reply({
            content: 'who knows',
            ephemeral: false,
        })
    }
