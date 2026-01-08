# 📖 Liturgia Diária – Backend

Este projeto é um **backend em Node.js + TypeScript** responsável por consumir a API pública de **Liturgia Diária** e disponibilizar os dados de forma organizada para outras aplicações.

Esta é a **etapa inicial** de um projeto maior: a criação de um **bot do Discord da AJS (Articulação da Juventude Salesiana)** da **Inspetoria Salesiana São Pio X (BPA)**, com foco em evangelização, organização pastoral e auxílio à vivência litúrgica diária.

---

## ✝️ Objetivo Pastoral

Oferecer, de forma automatizada e acessível:

- 📆 A **liturgia do dia**
- 🎨 A **cor litúrgica**
- 📜 Leituras (1ª leitura, salmo, 2ª leitura quando houver)
- ✨ Evangelho

Inicialmente, os dados são expostos via **API REST**, mas futuramente serão:

- 🤖 Publicados automaticamente em canais do Discord
- 📱 Consumidos por um aplicativo (mobile ou web)

---

## 🧱 Arquitetura do Projeto

O projeto segue o princípio de **separação de responsabilidades**, permitindo reutilização da lógica em diferentes frentes (backend, bot, app).

```text
Backend-LiturgiaDiaria/
│
├── src/
│   ├── server.ts            # Servidor Express
│   ├── config/
│   │   └── index.ts
│   ├── formatters/
│   │   └── liturgy.formatter.ts
│   ├── middlewares/
│   │   └── RateLimiter.ts
│   ├── routes/
│   │   └── liturgy.routes.ts
│   ├── types/
│   │   └── liturgy.ts
│   └── services/
│       └── liturgy.service.ts
│
├── .env
├── .env.example
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔗 API Consumida

Este backend consome a API pública:

- **Liturgia Diária – v2**

A API funciona a partir de **dia e mês** via query params:

Este projeto abstrai esse consumo e fornece endpoints próprios, mais amigáveis para o app e para o bot do Discord.

Projeto de Danyel Dancrf - Disponível no [link](https://github.com/Dancrf/liturgia-diaria/tree/main)

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Axios**

Escolha pensada para:
- Fácil integração com **bots do Discord**
- Reaproveitamento de código
- Boa escalabilidade

---

## 📡 Endpoints Disponíveis

### 🔹 Liturgia de hoje

```http
GET /liturgy/today
```

Retorna a liturgia correspondente ao dia atual.

---

### 🔹 Liturgia por data (dia e mês)

```http
GET /liturgy/07/01
```

Parâmetros:
- `dia` (number) – dia do mês
- `mes` (number) – mês

---

## ▶️ Como executar o projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Rodar em modo desenvolvimento

```bash
npm run dev
```

O servidor ficará disponível em:

```
http://localhost:3000
```

---

## 🛠️ Scripts disponíveis

```json
"dev": "ts-node-dev --respawn --transpile-only src/server.ts",
"build": "tsc",
"start": "node dist/server.js"
```

---

## 🔮 Próximos Passos (Roadmap)

Este backend é apenas o começo. Os próximos passos planejados incluem:

- [X] Tipagem completa da resposta da API (interfaces TypeScript)
- [X] Pegar informações separadamente (orações, leituras, etc.)
- [X] Formatação da liturgia em texto e Markdown
- [ ] Cache diário para evitar múltiplas requisições
- [ ] Criação do **bot do Discord da AJS – BPA**
- [ ] Agendamento automático de mensagens diárias
- [ ] Deploy da aplicação e integração com algum serviço online (Firebase ou Supabase)

---

## 🤝 Contexto Salesiano

Este projeto nasce como uma iniciativa técnica a serviço da **missão salesiana**, buscando unir:

> 💻 Tecnologia
> ✝️ Fé
> 🔥 Juventude

Inspirado pelo carisma de **Dom Bosco**, o objetivo é usar os meios digitais como espaço de evangelização e acompanhamento juvenil.

---

## 📜 Licença

Projeto de uso pastoral e educativo.

---

**Inspetoria Salesiana São Pio X (BPA)**  
**Articulação da Juventude Salesiana – AJS**

## 🧠 Idealizado por:

* **Marcos Vinicius Schimaichel Boava**
* **PN. Rafael Kauã Bento**