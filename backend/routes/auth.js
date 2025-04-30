import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'

const router = express.Router()
const usersPath = './users.json'
const JWT_SECRET = process.env.JWT_SECRET

router.post('/cadastro', async (req, res) => {
  const { nome, sobrenome, email, senha, cpf, papel } = req.body
  if (!email || !senha || !nome || !papel) return res.status(400).json({ error: 'Dados obrigatórios ausentes' })

  const users = JSON.parse(fs.readFileSync(usersPath))
  const userExists = users.find(u => u.email === email)
  if (userExists) return res.status(400).json({ error: 'Usuário já existe' })

  const hashed = await bcrypt.hash(senha, 10)
  const novoUsuario = {
    id: Date.now().toString(),
    nome,
    sobrenome,
    email,
    senha: hashed,
    cpf,
    papel
  }

  users.push(novoUsuario)
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2))

  const token = jwt.sign({ id: novoUsuario.id, papel }, JWT_SECRET, { expiresIn: '1d' })
  res.json({ ...novoUsuario, senha: undefined, token })
})

router.post('/login', async (req, res) => {
  const { email, senha } = req.body
  const users = JSON.parse(fs.readFileSync(usersPath))
  const user = users.find(u => u.email === email)
  if (!user) return res.status(401).json({ error: 'Usuário não encontrado' })

  const valid = await bcrypt.compare(senha, user.senha)
  if (!valid) return res.status(401).json({ error: 'Senha inválida' })

  const token = jwt.sign({ id: user.id, papel: user.papel }, JWT_SECRET, { expiresIn: '1d' })
  res.json({ nome: user.nome, email: user.email, id: user.id, papel: user.papel, token })
})

export default router