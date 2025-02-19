import { configDotenv } from "dotenv";
import Fastify from "fastify";
import TelegramBot from "node-telegram-bot-api";
import { getAIResponse } from "./ai";
import { devocionais } from "./data";

configDotenv();

if (!process.env.TELEGRAM_BOT_TOKEN) {
    throw new Error("Sem Token de bot!");
}

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN as string, { polling: true });
const fastify = Fastify({ logger: true });


bot.onText(/\/devocional/, (msg) => {
    const chatId = msg.chat.id;

    const dia = new Date().getDate() % devocionais.length;
    const { versiculo, reflexao, oracao } = devocionais[dia];

    const message = `📖 *Devocional do Dia* 📖\n\n` +
        `📜 *Versículo:* ${versiculo}\n\n` +
        `💡 *Reflexão:* ${reflexao}\n\n` +
        `🙏 *Oração:* ${oracao}`;

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
})

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text;

    if (!userMessage) {
        return;
    }

    if (!userMessage || userMessage.startsWith("/")) {
        return;
    }

    bot.sendChatAction(chatId, "typing");

    const aiResponse = await getAIResponse(userMessage);

    bot.sendMessage(chatId, aiResponse);
})



fastify.get("/", async () => {
    return { message: "Bot do Telegram está rodando!" };
});

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando em ${address}`);
});
