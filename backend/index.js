import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('✅ Popov Hórus API está rodando...')
  })
  

app.use('/api', authRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`🚀 Backend rodando em http://localhost:${PORT}`))

