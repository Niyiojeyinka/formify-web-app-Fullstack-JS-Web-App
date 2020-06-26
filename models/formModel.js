const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const formSchema = mongoose.Schema({
  title: { type: String, unique: true },
  preDescription: { type: String },
  postDescription: { type: String },
  userId: { type: String },
  createdAt: { type: Date, default: Date.now() },
})

exampleSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Form', formSchema)
