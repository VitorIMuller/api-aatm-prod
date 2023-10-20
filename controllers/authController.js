const { User: UserModel } = require('../models/User')
const {
  criarUsuario,
  editarUsuario,
  authentication,
} = require('../services/userService')
const jwt = require('jsonwebtoken')

const authController = {
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
      const usuarioLogado = await authentication(req.body)

      if (usuarioLogado instanceof Error) {
        throw usuarioLogado
      }

      const jwtKey = process.env.JWT_KEY

      jwt.sign(usuarioLogado, jwtKey, (err, token) => {
        if (err) {
          return err, null
        }

        res.set('x-access-token', token)
        return res.send({ msg: 'Login efetuado com sucesso' })
      })
    } catch (error) {
      throw new Error(error.message)
    }
  },
}

module.exports = authController
