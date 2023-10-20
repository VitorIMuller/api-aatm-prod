const mongoose = require('mongoose')

const { Schema } = mongoose
const { frotaSchema } = require('./Frota')
const { clienteSchema } = require('./Cliente')
const { CTESchema } = require('./CTE')

const viagemSchema = new Schema(
  {
    frota: {
      type: [frotaSchema],
    },
    cliente: {
      type: [clienteSchema],
    },
    rota: String,
    data_inicio: Date,
    despesas: String,
    valor_total_sj: String,
    valor_total_lp: String,
    ctes: Array
  },
  { timestamps: true },
)

const Viagem = mongoose.model('Viagem', viagemSchema)

module.exports = {
  Viagem,
  viagemSchema,
}
