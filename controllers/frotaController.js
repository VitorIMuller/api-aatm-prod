const { Frota: FrotaModel } = require('../models/Frota')
const { criarFrota, editarFrota } = require('../services/frotaService')

const frotaController = {
  getAll: async (req, res) => {
    try {
      const frotas = await FrotaModel.find({ status: 1 })

      res.json(frotas)
    } catch (error) {
      console.log(error)
    }
  },

  get: async (req, res) => {
    try {
      const frota = await FrotaModel.findById(req.params.id)

      if (!frota) {
        res.status(404).json({ msg: 'Frota não encontrado' })
      }

      res.json(frota)
    } catch (error) {
      console.log(error)
    }
  },

  create: async (req, res) => {
    try {
      const frota = await criarFrota(req.body)

      res.status(201).json({
        frota,
        msg: 'Frota criada com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
    try {
      const frota = await editarFrota(req.body, req.params.id)

      if (!frota) {
        res.status(404).json({ msg: 'Frota não encontrada' })
        return
      }

      res.status(200).json({
        frota,
        msg: 'Frota atualizada com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  delete: async (req, res) => {
    try {
      const frota = await FrotaModel.findById(req.params.id)

      if (!frota) {
        res.status(404).json({ msg: 'Frota não encontrada' })
        return
      }

      const deleted = await FrotaModel.findByIdAndDelete(frota.id)

      res.status(200).json({
        frota,
        msg: 'Frota excluida com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = frotaController
