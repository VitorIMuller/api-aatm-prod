const { Frota: FrotaModel } = require('../models/Frota')
const { Motorista: MotoristaModel } = require('../models/Motorista')

async function criarFrota(params) {
  const motorista = await MotoristaModel.findById(params.motorista_id)

  const frota = {
    placa: params.placa,
    motorista: motorista,
  }

  const response = await FrotaModel.create(frota)

  return response
}

async function editarFrota(params, frota_id) {
  const motorista = await MotoristaModel.findById(params.motorista_id)

  const frota = {
    placa: params.placa,
    motorista: motorista,
    status: params.status,
  }

  const response = await FrotaModel.findByIdAndUpdate(frota_id, frota, {
    new: true,
  })

  return response
}

module.exports = {
  criarFrota,
  editarFrota,
}
