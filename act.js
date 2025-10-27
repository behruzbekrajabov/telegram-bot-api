import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8474325094:AAG764eJWvrXDdHrarCZyLPGP8qASWeV5EE";
const bot = new TelegramBot(TOKEN, { polling: true });
bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firsname = msg.chat.first_name;

  if (msg.text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firsname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash" }][{ text: "Sozlamalar" }][{ text: "Menu" }],
        ],
        resize_keyboard: true,
      },
    });
  }else if(text == "Boshlash")
  {
    bot.sendMessage(chatId, "bOSHLANDI");
  }else if(text == "Menu")
  {
    bot.sendMessage(chatId, "mENU");
  }else if(text == "Sozlamalar")
  {
    bot.sendMessage(chatId, "Sozlamalar");
  }
});
