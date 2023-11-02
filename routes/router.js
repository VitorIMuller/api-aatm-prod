const router = require('express').Router()

const authRouter = require('./auth')

router.use('/', authRouter)

// Usuarios router
const userRouter = require('./user')

router.use('/', userRouter)

//Clientes router
const clientesRouter = require('./clientes')

router.use('/', clientesRouter)

// Motorista Router
const motoristaRouter = require('./motoristas')

router.use('/', motoristaRouter)

// Frota Router
const frotaRouter = require('./frota')

router.use('/', frotaRouter)

// Viagem Router
const viagemRouter = require('./viagem')

router.use('/', viagemRouter)

module.exports = router
