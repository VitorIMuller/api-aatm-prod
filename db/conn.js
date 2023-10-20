const mongoose = require('mongoose')

async function main() {
  try {
    await mongoose.connect(process.env.DB_HOST)
    console.log('conectado')
  } catch (error) {
    console.log(`Erro:${error}`)
  }
}

module.exports = main
