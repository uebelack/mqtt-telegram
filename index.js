var config = require('./config');
var Log = require('log'), log = new Log(config.log.level);
var mqtt = require('mqtt');
var TelegramBot = require('node-telegram-bot-api');

var telegramBot = new TelegramBot(config.telegram.token, {polling: false});
var mqtt = mqtt.connect(config.mqtt);

mqtt.on('error', function (error) {
    log.error(error);
});

mqtt.on('connect', function () {
    log.info('Connected to mqtt broker!')
    mqtt.subscribe(config.mqtt.subscription);
});

mqtt.on('message', function (topic, message) {
    var payload = message.toString();
    var chatId = topic.substring(topic.lastIndexOf('/')+1);
    telegramBot.sendMessage(chatId, payload);
});