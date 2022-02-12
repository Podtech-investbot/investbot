const TelegramBot = require("node-telegram-bot-api");
const getCotacao = require("./webscraping/index");
const token = "5228161508:AAEDBP0EhlcSD6gqGy2DNXtT5OBw5yK_yAw";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Olá. Como vai?");
});

bot.onText(/\/indicadores (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const stockCode = match[1];

  bot.sendMessage(chatId, `Aguarde um instante...`);

  getCotacao(stockCode)
    .then(function (cotacao) {
      bot.sendMessage(
        chatId,
        `A cotação atual para ${stockCode}  é: ${cotacao}`
      );
    })
    .catch(function (err) {
      bot.sendMessage(chatId, `Oppss, não encontramos o ativo! :/`);
    });
});

bot.onText(/\/comparar (.+) (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const firstStockCode = match[1];
  const secondStockCode = match[2];
  bot.sendMessage(
    chatId,
    `Estamos fazendo a comparação entre ${firstStockCode} e ${secondStockCode}. Aguarde.`
  );
});
