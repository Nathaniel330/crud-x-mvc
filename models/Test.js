const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const TestSchema = new mongoose.Schema({
    thing: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Test', TestSchema)