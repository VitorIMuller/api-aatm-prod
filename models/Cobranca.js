const mongoose = require('mongoose')
const { clienteSchema } = require('./Cliente')

const { Schema } = mongoose

const cobrancaSchema = new Schema(
    {
        numero: Number,
        ctes: Array,
        tem_viagem: Boolean,
        tipo: String,
        romaneios: Array,
        valor_romaneio: Number,
        valor_cte: Number,
        valor_total: Number,
        tomador: {
            type: [clienteSchema],
        },
    },
    { timestamps: true },
)

const Cobranca = mongoose.model('Cobranca', cobrancaSchema)

module.exports = {
    Cobranca,
    cobrancaSchema,
}
