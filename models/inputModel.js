const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const inputSchema = mongoose.Schema({
  type: { type: String, unique: true },
  formId: { type: String },
  placeholder: { type: String },
  name: { type: String, require: true },
  required: { type: Boolean },
})

exampleSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Input', inputSchema)
