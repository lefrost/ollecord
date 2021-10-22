### Discord.js's [guide](https://discordjs.guide) is great, but I don't wanna read it everytime I make a new bot.
A lightweight boilerplate to start building a Discord bot with Node.js.

-----

###### Notables

- Start off with all the required dependencies
- Deploy instantly onto Heroku
- **Immediately start working on command interactions, not environment setup**

###### Architecture

- `index.js` for expandable logic
- `deploy-commands.js` for registering slash commands
- `dotenv` for token storage
- `express`-powered runtime
- Deployed with `heroku` CLI

###### `.env` variables

```
TOKEN = your-token
CLIENT_ID = your-client-id
```

###### Setup

```bash
npm install
npm run start
```

###### Register slash commands

```
npm run commando
```

###### Initial deployment

```bash
heroku login
heroku create app-name
heroku git:remote -a app-name
npm run deploy
```

###### Subsequent deployment

```bash
npm run deploy
```
