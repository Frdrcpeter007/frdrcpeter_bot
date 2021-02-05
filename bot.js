const Telegram = require('node-telegram-bot-api');

var token = process.env.TOKEN_TELEGRAM || "1695330942:AAFc6PpP5tuwIBV1ewCtFU2xlxfr7G77K8w",
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