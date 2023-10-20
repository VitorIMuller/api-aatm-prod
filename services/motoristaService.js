const { Motorista: MotoristaModel } = require('../models/Motorista')

async function criarMotorista(params) {
  const motorista = {
    nome: params.nome,
    telefone: params.telefone,
    cpf: params.cpf,
  }

  const response = await MotoristaModel.create(motorista)

  return response
}

async function editarMotorista(params, motorista_id) {
  const motorista = {
    nome: params.nome,
    telefone: params.telefone,
    cpf: params.cpf,
    status: params.status,
  }

  const response = await MotoristaModel.findByIdAndUpdate(
    motorista_id,
    motorista,
    {new: true}
  )

  return response
}

module.exports = {
  criarMotorista,
  editarMotorista,
}
