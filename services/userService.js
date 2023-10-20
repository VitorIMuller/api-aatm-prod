const { User: UserModel } = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function criarUsuario(params) {
  let userExists = await UserModel.findOne({ email: params.email })

  if (userExists) {
    res.status(401).json({ msg: 'Email já está sendo utilizado.' })
    return
  }

  const teste = await bcrypt.hash('aaa', 10)

  bcrypt.hash(params.password, 10, async (error, hash) => {
    if (error) throw new Error('Erro ao cadastrar a senha')

    const user = {
      nome: params.nome,
      email: params.email,
      password: hash,
    }

    return await UserModel.create(user)
  })
}

async function editarUsuario(params, user_id) {
  const user = {
    nome: params.nome,
    email: params.email,
    password: params.password,
    status: params.status,
  }

  const response = await UserModel.findByIdAndUpdate(user_id, user, {
    new: true,
  })

  return response
}

async function authentication(params, email) {
  try {
    // Extract email and password from the req.body object
    const { email, password } = params

    // Check if user exists in database
    let user = await UserModel.findOne({ email })

    if (!user) {
      return res
        .status(401)
        .json({ msg: 'Nenhum usuário com esse email encontrado' })
    }

    const { password: _, ...usuarioLogado } = user

    // Compare passwords
    bcrypt.compare(bcrypt.hash(password), user.password, (err, result) => {
      if (result) {
        return usuarioLogado
      }

      return new Error('Erro ao authenticar sessão')
    })
  } catch (error) {
    return new Error(message)
  }
}

module.exports = {
  criarUsuario,
  editarUsuario,
  authentication,
}
