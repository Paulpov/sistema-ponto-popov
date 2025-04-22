# 📌 Sistema de Ponto Popov

Sistema profissional de controle de ponto com foco em conformidade total com a legislação brasileira, incluindo **CLT** e **Lei do Motorista (Lei nº 13.103/2015)**.

---

## ⚙️ Tecnologias Utilizadas

### Frontend:
- Vue 3 + Vite
- TailwindCSS
- Pinia
- Vue Router
- Axios

### Backend:
- Node.js + Express
- PostgreSQL ou MongoDB
- JWT

---

## 📁 Estrutura do Projeto

```
/sistema-ponto-popov
├── frontend/    # Interface moderna e responsiva
├── backend/     # API Node.js
```

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o Projeto
```bash
git clone https://github.com/seuusuario/sistema-ponto-popov.git
cd sistema-ponto-popov
```

### 2. Rodar o Frontend (Vue 3 + Vite)
```bash
cd frontend
npm install
npm run dev
```

⚠️ **IMPORTANTE**: Certifique-se de que o arquivo `src/assets/main.css` existe com o conteúdo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Este arquivo é essencial para a estilização do sistema com TailwindCSS.

### 3. Rodar o Backend
```bash
cd backend
npm install
npm run dev
```

---

## ✅ Funcionalidades

### Funcionários (CLT)
- Registro de ponto com localização
- Cálculo de horas normais, extras 50% e 100%, e adicional noturno
- Controle de banco de horas (jornada compensatória)
- Exportação de relatório em PDF

### Motoristas (CLT)
- Interface com botões de status: Em Rota, Descanso, Chegada, etc.
- Monitoramento GPS da jornada
- Registro por data/hora/localização
- Resumo da jornada conforme Lei nº 13.103/2015
- Geração de relatório e PDF da rota

### Prestadores PJ
- Fechamento mensal com ou sem comissão
- Cálculo de valor bruto, comissão e valor líquido
- Exportação em PDF

---

## 📡 Deploy
- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Heroku](https://www.heroku.com/)

---

## 👨‍💻 Desenvolvido por
**Jhonatan Lucas Popov Paul**  
Engenheiro de Software formado e responsável pela Popov Transportes.

Projeto focado em **conformidade legal, usabilidade moderna e eficiência operacional**.

---
