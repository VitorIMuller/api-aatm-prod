const mongoose = require('mongoose')

const { Schema } = mongoose

const clienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefone: String,
    cpf_cnpj: {
      type: String,
      required: true,
    },
    endereco: String,
    valor_frete_sj: Number,
    valor_frete_lp: Number,
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
