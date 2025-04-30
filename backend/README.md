# 🧠 Sistema Popov Hórus - Backend & Frontend

## 📦 Backend (Node.js + Express + JWT)

### ▶️ Como executar:

```bash
cd backend_popov_horus
npm install
npm start
```

### 🔧 Ferramentas necessárias:
- Node.js 18+
- NPM
- Porta 3000 livre
- `.env` com chave JWT (já incluído)

### 🔐 Endpoints disponíveis:
- POST `/api/cadastro`
- POST `/api/login`

Usuários são salvos no arquivo `users.json`.

---

## 🖥️ Frontend (Vue + Vite + Tailwind + Pinia)

### ▶️ Como executar:

```bash
cd frontend
npm install
npm run dev
```

### 💡 Requisitos:
- Node.js 18+
- Vite
- Axios já configurado para `http://localhost:3000/api`
- `token` JWT armazenado no `localStorage`

Rotas protegidas com base no papel: `admin`, `motorista`, `escritorio`.

---