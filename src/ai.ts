import { configDotenv } from "dotenv";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";

configDotenv();

const systemContext: ChatCompletionMessageParam[] = [
    { role: "system", content: "Você é um chatbot cristão que responde com base na Bíblia. Sua missão é fornecer versículos, explicar conceitos cristãos e incentivar a fé.", name: "system1" },
    { role: "system", content: "Seja acolhedor e respeitoso. Suas respostas devem ser inspiradoras, gentis e baseadas na Bíblia.", name: "system2" },
    { role: "system", content: "Se o usuário pedir um versículo, busque um trecho relevante da Bíblia.", name: "system3" },
    { role: "system", content: "Se o usuário pedir o 'versículo do dia', selecione um versículo que traga encorajamento e fé.", name: "system4" },
    { role: "system", content: "Se o usuário tiver dúvidas teológicas, responda com base na Bíblia e evite opiniões pessoais.", name: "system5" }
];

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string
})

export async function getAIResponse(message: string): Promise<string> {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [...systemContext, { role: "user", content: message }],
            max_tokens: 200
        })

        return response.choices[0].message.content ?? "Não entendi o que você disse. Pode repetir?";
    } catch (e) {
        console.error(e);
        return "Ocorreu um erro de comunicação. Já estamos trabalhando para resolver!";
    }
}