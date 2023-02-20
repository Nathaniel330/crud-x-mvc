const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const ObjectSchema = new mongoose.Schema({
  difficulty: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Object', ObjectSchema)