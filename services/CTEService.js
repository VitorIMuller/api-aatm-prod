const { CTE: CTEModel } = require('../models/CTE')

async function criarCTE(params) {
  const CTE = {
    valor_lp: params.valor_lp,
    valor_sj: params.valor_sj,
    peso: params.peso,
    viagem: params.viagem_id,
  }

  const response = await CTEModel.create(CTE)

  return response
}

async function editarCTE(params, CTE_id) {
  const CTE = {
    valor_lp: params.valor_lp,
    valor_sj: params.valor_sj,
    peso: params.peso,
  }

  const response = await CTEModel.findByIdAndUpdate(CTE_id, CTE)

  return response
}

module.exports = {
  criarCTE,
  editarCTE,
}
