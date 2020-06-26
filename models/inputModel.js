const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const inputSchema = mongoose.Schema({
  type: { type: String, unique: true },
})

exampleSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Input', inputSchema)
