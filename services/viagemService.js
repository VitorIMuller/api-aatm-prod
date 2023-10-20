const { Viagem: ViagemModel } = require('../models/Viagem')
const { Frota: FrotaModel } = require('../models/Frota')
const { Cliente: ClienteModel } = require('../models/Cliente')

async function criarViagem(params) {
  const cliente = await ClienteModel.find({"cnpj": params.ctes[0].cnpj})
  const frota = await FrotaModel.findById(params.frota_id)

  console.log(params)

  const viagem = {
    frota: frota,
    tomador: cliente,
    rota: params.rota,
    data_inicio: params.data_inicio,
    despesas: params.despesas,
    valor_total_sj: params.valor_total_sj,
    valor_total_lp: params.valor_total_lp,
    ctes: params.ctes
  }

  const response = await ViagemModel.create(viagem)

  return response
}

async function editarViagem(params, viagem_id) {
  const cliente = await ClienteModel.findById(params.cliente_id)
  const frota = await FrotaModel.findById(params.frota_id)

  const viagem = {
    frota: frota,
    cliente: cliente,
    origem: params.origem,
    destino: params.destino,
    data_inicio: params.data_inicio,
    data_fim: params.data_fim,
    despesas: params.despesas,
    valor_lp_total: params.valor_lp_total,
    valor_sj_total: params.valor_sj_total,
    valor_total: params.valor_total,
  }
  const response = await ViagemModel.findByIdAndUpdate(viagem_id, viagem, {
    new: true,
  })

  return response
}

module.exports = {
  criarViagem,
  editarViagem,
}
