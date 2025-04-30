# 🧠 Sistema Popov Hórus

Este projeto é um sistema completo de ponto e controle de usuários com base em **permissões** (admin, motorista, funcionário). Possui frontend em Vue 3 + Vite + Tailwind + Pinia e backend em Node.js com autenticação JWT.

---

## 📦 BACKEND - Node.js + Express + JWT

### ▶️ Como executar:

```bash
cd backend_popov_horus
npm install
npm start
```

### 🔧 Ferramentas necessárias:
- Node.js **v18 ou superior**
- NPM
- Porta 3000 disponível
- `.env` com:
  ```
  JWT_SECRET=popovsegredo123
  PORT=3000
  ```

### 🔐 Endpoints disponíveis:

| Rota           | Método | Descrição                          |
|----------------|--------|------------------------------------|
| `/api/login`   | POST   | Login de usuário                   |
| `/api/cadastro`| POST   | Cadastro de novo usuário           |

Usuários são armazenados em `users.json` (simulando um banco de dados).

---

## 🖥️ FRONTEND - Vue 3 + Vite + Tailwind + Pinia

### ▶️ Como executar:

```bash
cd frontend
npm install
npm run dev
```

### 💡 Ferramentas necessárias:
- Node.js **v18 ou superior**
- Vite (já incluído nas dependências)
- Navegador moderno (recomenda-se Chrome ou Edge)

### 📲 Integração:
- O frontend se comunica via `axios` com `http://localhost:3000/api`
- O token JWT é salvo automaticamente no `localStorage`
- As rotas são protegidas com base no tipo de usuário:
  - `admin`
  - `motorista`
  - `escritorio`

---

## 🎯 Funcionalidades do sistema

- Autenticação com login e senha
- Cadastro com validação de CPF
- Controle por tipo de usuário
- Roteamento seguro com Vue Router
- Tema claro/escuro
- Layout responsivo e moderno com TailwindCSS

---

## 🧰 Estrutura

```
📁 backend_popov_horus
├── routes/
│   └── auth.js
├── users.json
├── index.js
├── package.json
├── .env
└── README.md

📁 frontend
├── src/
│   ├── pages/
│   │   └── Login.vue, Cadastro.vue
│   ├── store/
│   ├── router/
│   └── axios.js
└── vite.config.js
```

---

Desenvolvido com ❤️ por Popov Transportes.