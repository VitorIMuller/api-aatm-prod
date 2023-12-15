const { Cobranca: cobrancaModel } = require('../models/Cobranca');
const { criarCobranca, editarCobranca } = require('../services/cobrancaService');

const cobrancaController = {
    getAll: async (req, res) => {
        try {
            // let viagens

            // if (Object.keys(req.query).length !== 0) {
            //     let filtro = {
            //         data_inicio: {
            //             $gte: new Date(req.query.data_inicio),
            //             $lte: new Date(req.query.data_fim)
            //         },
            //     };

            //     if (req.query.placa) {
            //         filtro = {
            //             ...filtro,
            //             "frota._id": req.query.placa
            //         }
            //     }

            //     if (req.query.cliente_id) {
            //         filtro = {
            //             ...filtro,
            //             "cliente._id": req.query.cliente_id
            //         }
            //     }

            //     console.log(filtro)

            //     viagens = await ViagemModel.find(filtro)
            // } else {
            //     viagens = await ViagemModel.find({})
            // }
            const cobrancas = await cobrancaModel.find({})


            res.json(cobrancas)
        } catch (error) {
            console.log(error)
        }
    },

    get: async (req, res) => {
        try {
            const cobranca = await cobrancaModel.findById(req.params.id)

            if (!cobranca) {
                res.status(404).json({ msg: 'cobranca não encontrado' })
            }

            res.json(cobranca)
        } catch (error) {
            console.log(error)
        }
    },

    create: async (req, res) => {
        try {
            const cobranca = await criarCobranca(req.body)

            res.status(201).json({
                cobranca,
                msg: 'Cobrança criada com sucesso',
            })
        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {
            const cobranca = await editarCobranca(req.body, req.params.id)

            if (!cobranca) {
                res.status(404).json({ msg: 'Cobranca não encontrada' })
                return
            }

            res.status(200).json({
                cobranca,
                msg: 'Cobranca atualizada com sucesso',
            })
        } catch (error) {
            console.log(error)
        }
    },

    delete: async (req, res) => {
        try {
            const cobranca = await cobrancaModel.findById(req.params.id)

            if (!cobranca) {
                res.status(404).json({ msg: 'cobranca não encontrada' })
                return
            }

            const deleted = await cobrancaModel.findByIdAndDelete(cobranca.id)

            res.status(200).json({
                cobranca,
                msg: 'Cobranca excluida com sucesso',
            })
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = cobrancaController
