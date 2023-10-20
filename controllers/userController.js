const { User: UserModel } = require('../models/User')
const { criarUsuario, editarUsuario } = require('../services/userService')

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await UserModel.find({ status: 1 })

      res.json(users)
    } catch (error) {
      console.log(error)
    }
  },

  get: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id)

      if (!user) {
        res.status(404).json({ msg: 'Usuário não encontrado' })
      }

      res.json(user)
    } catch (error) {
      console.log(error)
    }
  },

  create: async (req, res) => {
    try {
      const user = await criarUsuario(req.body)

      res.status(201).json({
        user,
        msg: 'Usuário criado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  update: async (req, res) => {
    try {
      const user = await editarUsuario(req.body, req.params.id)

      if (!user) {
        res.status(404).json({ msg: 'Usuário não encontrado' })
        return
      }

      res.status(200).json({
        user,
        msg: 'Usuário atualizado com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },

  delete: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id)

      if (!user) {
        res.status(404).json({ msg: 'Usuário não encontrado' })
        return
      }

      const deleted = await UserModel.findByIdAndDelete(user.id)

      res.status(200).json({
        user,
        msg: 'Usuário excluido com sucesso',
      })
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = userController
