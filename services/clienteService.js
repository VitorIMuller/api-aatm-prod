const { Cliente: ClienteModel } = require('../models/Cliente')

async function criarCliente(params) {
  const cliente = {
    nome: params.nome,
    email: params.email,
    telefone: params.telefone,
    cpf_cnpj: params.cpf_cnpj,
    endereco: params.endereco,
    valor_frete_sj: params.valor_frete_sj,
    valor_frete_lp: params.valor_frete_lp,
  }

  const response = await ClienteModel.create(cliente)

  return response
}

async function editarCliente(params, cliente_id) {
  const cliente = {
    nome: params.nome,
    email: params.email,
    telefone: params.telefone,
    cpf_cnpj: params.cpf_cnpj,
    endereco: params.endereco,
    valor_frete_sj: params.valor_frete_sj,
    valor_frete_lp: params.valor_frete_lp,
    status: params.status,
  }

  const response = await ClienteModel.findByIdAndUpdate(cliente_id, cliente, {
    new: true,
  })
  console.log(response)
  console.log(cliente)

  return response
}

module.exports = {
  criarCliente,
  editarCliente,
}
