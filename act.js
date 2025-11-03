import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8474325094:AAG764eJWvrXDdHrarCZyLPGP8qASWeV5EE";
const bot = new TelegramBot(TOKEN, { polling: true });
const lamboImageURL = "./img/rasm.jpeg";

bot.on("message", async function (msg) {

  const chatId = msg.chat.id;

  const text = msg.text;

  const firsname = msg.chat.first_name;

  if (msg.text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firsname}`, {
      reply_markup: {
        keyboard: [[{ text: "Boshlash" }]],

        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash") {
    const xabar = await bot.sendMessage(chatId, "Iltimos kuting ...");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);
      bot.sendPhoto(chatId, lamboImageURL, {
        caption:`
        Lamborghini Urus — bu “super-SUV” sifatida ishlab chiqilgan yuqori samarali yo‘lovchi avtomobili: sport avtomobilning dinamikasini va SUV’ning amaliyligini birlashtiradi. 
  Lamborghini.com
  
  Narx: bozorlarga va konfiguratsiyaga qarab katta farq qiladi; so nggi modellarning boshlang‘ich MSRPlari odatda $240k+ oralig‘idan boshlanadi va maxsus konfiguratsiyalar bilan sezilarli oshadi.
        `,
  
      });
    }, 1000);

  }
  });
