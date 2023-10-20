const mongoose = require('mongoose')

const { Schema } = mongoose

const motoristaSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    telefone: String,
    cpf: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamps: true },
)

const Motorista = mongoose.model('Motorista', motoristaSchema)

module.exports = {
  Motorista,
  motoristaSchema,
}
