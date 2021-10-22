require("dotenv").config();
const { Client, Intents } = require("discord.js");
const token = process.env.TOKEN;
// const clientId = process.env.CLIENT_ID;git
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  switch (commandName) {
    case "hi":
      await interaction.reply("sup");
      break;
  }
});

client.login(token);
