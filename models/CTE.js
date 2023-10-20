const mongoose = require('mongoose')

const { Schema } = mongoose

const CTESchema = new Schema(
  {
    valor_lp: {
      type: Number,
      required: true,
    },
    valor_sj: {
      type: Number,
      required: true,
    },
    peso: Number,
    viagem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Viagem',
    },
  },
  { timestamps: true },
)

const CTE = mongoose.model('CTE', CTESchema)

module.exports = {
  CTE,
  CTESchema,
}
