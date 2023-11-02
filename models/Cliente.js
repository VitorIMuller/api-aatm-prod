const mongoose = require('mongoose')

const { Schema } = mongoose

const clienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: String,
    telefone: String,
    cpf_cnpj: {
      type: String,
      required: true,
    },
    endereco: String,
    valor_frete_subida: Number,
    valor_frete_descida: Number,
    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamps: true },
)

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = {
  Cliente,
  clienteSchema,
}
