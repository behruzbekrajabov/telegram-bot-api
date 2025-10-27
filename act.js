import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8474325094:AAG764eJWvrXDdHrarCZyLPGP8qASWeV5EE";
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", function (msg) {
  const chatId = msg.chat.id;

  // bot.sendMessage(chatId, "Salom");
  if (msg.text == "/start") {
    bot.sendMessage(chatId, ` Behruzbek ${bot.sendMessage(chatId, "Salom")}`);
  }
});
