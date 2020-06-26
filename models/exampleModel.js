const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const exampleSchema = mongoose.Schema({
  name: {type : String,unique:true}
  //...
});

exampleSchema.plugin(uniqueValidator);

module.exports= mongoose.model("Example",exampleSchema);