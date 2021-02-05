const Telegram = require('node-telegram-bot-api');

var token = process.env.TOKEN_TELEGRAM,
    opt = {
        polling: true
    };

var bot = new Telegram(token, opt);

bot.on('message', (msg) => {
    console.log(msg.text)
    if (msg.text) {
        bot.sendMessage(msg.chat.id, `Salut @${msg.from.username} ça va ?`)
    }
})