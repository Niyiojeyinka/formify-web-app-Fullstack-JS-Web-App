const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const exampleRoutes = require('./routes/exampleRoute');
const userRoutes = require('./routes/userRoute');
const path = require('path');

mongoose.connect('url').then(function(){
console.log('DB connected Successfully');
}).catch(function(error){

    console.log('Error Connected '+error);
});


app.use(bodyParser.json());
app.use('/public',express.static(path.join(__dirname,'public')));
app.use("/api/example",exampleRoutes)
app.use("/api/user",userRoutes)


module.exports=app;