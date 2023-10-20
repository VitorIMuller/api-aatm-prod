const { Viagem: ViagemModel } = require('../models/Viagem')
const { criarViagem, editarViagem } = require('../services/viagemService')

const viagemController = {
  getAll: async (req, res) => {
    try {
      let viagens
      
      if (Object.keys(req.query).length !== 0) {
        let filtro = {
          data_inicio: {
            $gte: new Date(req.query.data_inicio), 
            $lte: new Date(req.query.data_fim)
          },
        };

        if (req.query.placa) {
          filtro = {
            ...filtro,
            "frota._id": req.query.placa
          }
        }

        if (req.query.cliente_id) {
          filtro = {
            ...filtro,
            "cliente._id": req.query.cliente_id
          }
        }

        console.log(filtro)

        viagens = await ViagemModel.find(filtro)
      } else {
        viagens = await ViagemModel.find({})
      }

      res.json(viagens)
    } catch (error) {
      console.log(error)
    }
  },

  get: async (req, res) => {
    try {
      const viagem = await ViagemModel.findById(req.params.id).populate({
        path: 'CTE',
        options: { strictPopulate: false },
      })

      if (!viagem) {
        res.status(404).json({ msg: 'Viagem não encontrado' })
      }

      res.json(viagem)
    } catch (error) {
      console.log(error)
    }
  },

  create: async (req, res) => {
    try {
      const viagem = await criarViagem(req.body)

      res.status(201).json({
        viagem,
        msg: 'Viagem criada com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
    try {
      const viagem = await editarViagem(req.body, req.params.id)

      if (!viagem) {
        res.status(404).json({ msg: 'Viagem não encontrada' })
        return
      }

      res.status(200).json({
        viagem,
        msg: 'Viagem atualizada com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  delete: async (req, res) => {
    try {
      const viagem = await ViagemModel.findById(req.params.id)

      if (!viagem) {
        res.status(404).json({ msg: 'Viagem não encontrada' })
        return
      }

      const deleted = await ViagemModel.findByIdAndDelete(viagem.id)

      res.status(200).json({
        viagem,
        msg: 'Viagem excluida com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = viagemController
