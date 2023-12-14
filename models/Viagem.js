const mongoose = require('mongoose')

const { Schema } = mongoose
const { frotaSchema } = require('./Frota')

const viagemSchema = new Schema(
  {
    frota: {
      type: [frotaSchema],
    },
    rota: String,
    data_inicio: Date,
    valor_total_cte: Number,
    valor_total_romaneio: Number,
    valor_total: Number,
    despesas: String,
    cobrancas: Array
  },
  { timestamps: true },
)

const Viagem = mongoose.model('Viagem', viagemSchema)

module.exports = {
  Viagem,
  viagemSchema,
}
