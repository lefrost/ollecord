require("dotenv").config();
const express = require(`express`);
const app = express();
const { Client, Intents } = require("discord.js");
const token = process.env.TOKEN;
// const clientId = process.env.CLIENT_ID;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
let port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Up on http://localhost:${port}`);
});

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
