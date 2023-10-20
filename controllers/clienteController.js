const { Cliente: ClienteModel } = require('../models/Cliente')
const { criarCliente, editarCliente } = require('../services/clienteService')

const clienteController = {
  getAll: async (req, res) => {
    try {
      const clientes = await ClienteModel.find({ status: 1 })

      res.json(clientes)
    } catch (error) {
      console.log(error)
    }
  },

  get: async (req, res) => {
    try {
      const cliente = await ClienteModel.findById(req.params.id)

      if (!cliente) {
        res.status(404).json({ msg: 'Cliente não encontrado' })
      }

      res.json(cliente)
    } catch (error) {
      console.log(error)
    }
  },

  create: async (req, res) => {
    try {
      const cliente = await criarCliente(req.body)

      res.status(201).json({
        cliente,
        msg: 'Cliente criado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
    try {
      const cliente = await editarCliente(req.body, req.params.id)

      if (!cliente) {
        res.status(404).json({ msg: 'Cliente não encontrado' })
        return
      }

      res.status(200).json({
        cliente,
        msg: 'Cliente atualizado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  delete: async (req, res) => {
    try {
      const cliente = await ClienteModel.findById(req.params.id)

      if (!cliente) {
        res.status(404).json({ msg: 'Cliente não encontrado' })
        return
      }

      const deleted = await ClienteModel.findByIdAndDelete(cliente.id)

      res.status(200).json({
        cliente,
        msg: 'Cliente excluido com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = clienteController
