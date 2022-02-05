const TelegramBot = require('node-telegram-bot-api');
const token = '5228161508:AAEDBP0EhlcSD6gqGy2DNXtT5OBw5yK_yAw';
const bot = new TelegramBot(token, {polling: true});

// Ele vai validar se a string é "/start"
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Olá. Como vai?');
});

// Ele vai validar se a string é "/indicadores ALGUMACOISA"
bot.onText(/\/indicadores (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const stockCode = match[1];
  bot.sendMessage(chatId, `Estamos buscando a informação para o ativo ${stockCode}`);
});

bot.onText(/\/comparar (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const firstStockCode = match[1];
  const secondStockCode = match[2];
  bot.sendMessage(chatId, `Estamos fazendo a comparação entre ${firstStockCode} e ${secondStockCode}. Aguarde.`);
});
