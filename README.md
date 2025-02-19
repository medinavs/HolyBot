# 📖 HolyBot – Chatbot Bíblico no Telegram

**HolyBot** é um chatbot para Telegram focado em Bíblia e Cristianismo. Ele permite que os usuários consultem versículos, recebam um versículo do dia e acessem devocionais diários com reflexão e oração.

## ✨ Funcionalidades

- ✅ **Modo Devocional** – Mensagens com versículo, reflexão e oração.
- ✅ **Integração com IA** – Respostas sobre temas bíblicos baseadas em IA.

- **Em Desenvolvimento...** - cron para envio de versiculos diários.

## 🚀 Tecnologias Utilizadas

- **TypeScript** – Linguagem principal do projeto.
- **Fastify** – Servidor rápido e eficiente para gerenciamento de requisições.
- **node-telegram-bot-api** – Integração com a API do Telegram.
- **OpenAI API** – Geração de respostas baseadas em IA.
- **Dotenv** – Gerenciamento de variáveis de ambiente.



## ⚙ Como Rodar o Projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/holybot.git
cd holybot
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Configure o arquivo .env**:

```bash
TELEGRAM_BOT_TOKEN=seu_token_aqui
OPENAI_API_KEY=sua_chave_aqui
```

4. **Inicie o bot**:

```bash
npm run dev
```

## 📌 Comandos Disponíveis

/devocional – Envia um devocional completo por dia (versículo, reflexão e oração).   obs: dados mockados no momento atual.

qualquer texto - Te responde baseado no contexto pré-definido.

projeto em desenvolvimento... logo mais comandos serão adicionados!

## 🤝 Contribuição

Sinta-se à vontade para abrir issues e pull requests! Qualquer sugestão para melhorar o HolyBot é bem-vinda.

**Feito com ❤️ por Murilo Alexandre Medina.**