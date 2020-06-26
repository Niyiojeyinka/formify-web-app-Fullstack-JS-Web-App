const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  name: {type : String},
  email: {type : String,unique:true},
  password: {type : String}
 //...
});

userSchema.plugin(uniqueValidator);

module.exports= mongoose.model("User",userSchema);