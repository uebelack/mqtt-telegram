var config = {};

config.log = {
    level: 'debug'
};

config.mqtt = {
    host: 'mosquitto',
    port: 1883,
    username: 'john',
    password: 'fdsa',
    subscription: 'telegram/#'
};

config.telegram = {
    token: 'THA TELEGRAM BOT TOKEN'
};

module.exports = config;