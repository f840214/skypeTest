const { BotFrameworkAdapter } = require('botbuilder');
const { MyBot } = require('./bot');
require('dotenv').config();

const adapter = new BotFrameworkAdapter({
  appId: process.env.MicrosoftAppId,
  appPassword: process.env.MicrosoftAppPassword,
});

const bot = new MyBot();

adapter.onTurnError = async (context, error) => {
  console.error(`\n [onTurnError]: ${error}`);
  await context.sendActivity('Oops! Something went wrong.');
};

const express = require('express');
const app = express();

app.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async (context) => {
    await bot.run(context);
  });
});

const port = process.env.PORT || 8887;
app.listen(port, () => {
  console.log(`\nBot is running on port ${port}`);
});
