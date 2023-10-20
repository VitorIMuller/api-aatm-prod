const mongoose = require('mongoose')

const { Schema } = mongoose
const { motoristaSchema } = require('./Motorista')

const frotaSchema = new Schema(
  {
    placa: {
      type: String,
      required: true,
    },
    motorista: {
      type: [motoristaSchema],
    },
    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamps: true },
)

const Frota = mongoose.model('Frota', frotaSchema)

module.exports = {
  Frota,
  frotaSchema,
}
