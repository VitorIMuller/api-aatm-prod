const { Motorista: MotoristaModel } = require('../models/Motorista')
const {
  criarMotorista,
  editarMotorista,
} = require('../services/motoristaService')

const motoristaController = {
  getAll: async (req, res) => {
    try {
      const motoristas = await MotoristaModel.find({ status: 1 })

      res.json(motoristas)
    } catch (error) {
      console.log(error)
    }
  },

  get: async (req, res) => {
    try {
      const motorista = await MotoristaModel.findById(req.params.id)

      if (!motorista) {
        res.status(404).json({ msg: 'Motorista não encontrado' })
      }

      res.json(motorista)
    } catch (error) {
      console.log(error)
    }
  },

  create: async (req, res) => {
    try {
      const motorista = await criarMotorista(req.body)

      res.status(201).json({
        motorista,
        msg: 'Motorista criado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
    try {
      const motorista = await editarMotorista(req.body, req.params.id)

      if (!motorista) {
        res.status(404).json({ msg: 'Motorista não encontrado' })
        return
      }

      res.status(200).json({
        motorista,
        msg: 'Motorista atualizado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  delete: async (req, res) => {
    try {
      const motorista = await MotoristaModel.findById(req.params.id)

      if (!motorista) {
        res.status(404).json({ msg: 'Motorista não encontrado' })
        return
      }

      await MotoristaModel.findByIdAndDelete(motorista.id)

      res.status(200).json({
        motorista,
        msg: 'Motorista excluido com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = motoristaController
