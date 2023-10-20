const { CTE: CTEModel } = require('../models/CTE')
const { criarCTE, editarCTE } = require('../services/CTEService')

const CTEController = {
  getAll: async (req, res) => {
    try {
      const CTEs = await CTEModel.find()

      res.json(CTEs)
    } catch (error) {
      console.log(error)
    }
  },

  get: async (req, res) => {
    try {
      const CTE = await CTEModel.findById(req.params.id)

      if (!CTE) {
        res.status(404).json({ msg: 'CTE não encontrado' })
      }

      res.json(cliente)
    } catch (error) {
      console.log(error)
    }
  },

  create: async (req, res) => {
    try {
      const CTE = await criarCTE(req.body)

      res.status(201).json({
        CTE,
        msg: 'CTE criado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
    try {
      const CTE = await editarCTE(req.body, req.params.id)

      if (!CTE) {
        res.status(404).json({ msg: 'CTE não encontrado' })
        return
      }

      res.status(200).json({
        CTE,
        msg: 'CTE atualizado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  delete: async (req, res) => {
    try {
      const CTE = await CTEModel.findById(req.params.id)

      if (!CTE) {
        res.status(404).json({ msg: 'CTE não encontrado' })
        return
      }

      const deleted = await CTEModel.findByIdAndDelete(CTE.id)

      res.status(200).json({
        CTE,
        msg: 'CTE excluido com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = CTEController
