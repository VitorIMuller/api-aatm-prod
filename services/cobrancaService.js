const { Cobranca: CobrancaModel } = require('../models/Cliente')
const { Cliente: ClienteModel } = require('../models/Cliente')


async function criarCobranca(params) {
    const cliente = await ClienteModel.findById(params.tomador)
    const cobranca = {
        numero: params.numero,
        tipo: params.tipo,
        ctes: params.tipo === 'cte' ? params.ctes : [],
        romaneios: params.tipo !== 'cte' ? params.romaneios : [],
        tem_viagem: params.tem_viagem,
        valor_romaneio: params.valor_romaneio,
        valor_cte: params.valor_cte,
        valor_total: params.valor_total,
        tomador: cliente,
    }

    const response = await CobrancaModel.create(cobranca)

    return response
}

async function editarCobranca(params, cobranca_id) {
    const cobranca = {
        numero: params.numero,
        tipo: params.tipo,
        ctes: params.tipo === 'cte' ? params.ctes : [],
        romaneios: params.tipo !== 'cte' ? params.romaneios : [],
        tem_viagem: params.tem_viagem,
        valor_romaneio: params.valor_romaneio,
        valor_cte: params.valor_cte,
        valor_total: params.valor_total,
        tomador: cliente,
    }

    const response = await CobrancaModel.findByIdAndUpdate(cobranca_id, cobranca, {
        new: true,
    })
    console.log(response)
    console.log(cobranca)

    return response
}

module.exports = {
    criarCobranca,
    editarCobranca,
}
