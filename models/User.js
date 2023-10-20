const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email é necessário para o cadastro de usuário'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamps: true },
)

const User = mongoose.model('User', userSchema)

module.exports = {
  User,
  userSchema,
}
