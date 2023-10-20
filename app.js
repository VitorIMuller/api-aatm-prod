const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())

app.use(express.json())

//Db connection
const conn = require('./db/conn')
conn()

// Routes
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(process.env.PORT, function () {
  console.log(`Servidor funcionando na porta ${process.env.PORT}`)
})
