require('dotenv').config();

const Telegram = require('node-telegram-bot-api');
var fs = require('fs');
var read = fs.readFileSync(__dirname + '/test.json');
var json = JSON.parse(read);
var translate = require('@vitalets/google-translate-api');

var token = process.env.TOKEN_TELEGRAM,
    opt = {
        polling: true
    };

var bot = new Telegram(token, opt);

bot.on('message', (msg) => {
    let text = msg.text,
        userid = msg.from.id,
        chatid = msg.chat.id;

    if (text) {
        translate(text, { to: 'fr' }).then(textTrans => {
            bot.sendMessage(chatid, `🈵 ${textTrans.text}`);
        }).catch(err => {
            bot.sendMessage(chatid, "J'ai eu du mal à traduire ton texte...")
        });
    }
})