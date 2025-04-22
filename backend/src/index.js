require('dotenv').config()
const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const pontoRoutes = require('./routes/pontoRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/ponto', pontoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`))
