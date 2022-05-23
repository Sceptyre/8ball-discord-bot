require("dotenv").config()

const BOT_TOKEN = process.env.BOT_TOKEN
const { Client, Intents } = require("discord.js");
const EightBall = require("./lib/8ball")

// instantiate the discord client object
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ],
    partials: [
        'CHANNEL'
    ]
});

// Log readiness state
client.on("ready", async() => {
    // log client readiness
    console.log("I am ready!");
});


// Message Handler
client.on("messageCreate", async(message) => {
    // make sure request is for this bot
    if (!message.content.startsWith('!8ball')) {
        return
    }
    message.channel.sendTyping()

    // Sleep 3 seconds
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Query the magic conch
    message.reply(
        EightBall.ask(message.content.replace("!8ball", "").trim())
    )
});

//Init bot login
client.login(BOT_TOKEN)