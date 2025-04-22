const express = require('express')
const router = express.Router()
const { registrarPonto } = require('../controllers/pontoController')

router.post('/registrar', registrarPonto)

module.exports = router
