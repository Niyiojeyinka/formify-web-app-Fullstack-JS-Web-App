const User = require('../models/userModel');
const bcrypt = require('bcrypt');
exports.login=(req,res)=>{
User.findOne({email:req.body.email}).then((user)=>{
if(!user){
    return res.status(401).json({        result:0,
        error:new Error('User Not Found!')
    });
}
bcrypt.compare(req.body.password,user.password).then(
    (valid)=>{
if(!valid){
    return res.status(401).json({        result:0,
        error:new Error('Incorrect Password!')
    });
}

    const token = jwt.sign({userId:user._id},'RANDOM_KEY',{expiresIn:'24h'});
    return res.status(200).json({        result:1,
       data:{
           userId:user._id,
           token:token
       }
    }); 
}
)

}).catch((error)=>{
    return res.status(500).json({        result:0,
       error:error
     }); 

})

}


exports.register=(req,res)=>{
bcrypt.hash(req.body.password,10).then(
    (hash)=>{
          const user = new User({
              email:req.body.email,
              password:hash
          });
          user.save().then(()=>{
            return res.status(200).json({        result:1,
                data:{
                    message:"User Added Successfully!"
                }
             }); 
          }).catch((error)=>{
            return res.status(500).json({ 
                       result:0,
                error:error
             }); 
          })

    }
)

}