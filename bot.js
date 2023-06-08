const { ActivityHandler } = require('botbuilder');

class MyBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context, next) => {
      await context.sendActivity('Hello from your Skype Bot!');
      await next();
    });
  }
}

module.exports.MyBot = MyBot;
