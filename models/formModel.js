const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const formSchema = mongoose.Schema({
  title: { type: String, unique: true },
  predescription: { type: String },
  postdescription: { type: String },
})

exampleSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Form', formSchema)
