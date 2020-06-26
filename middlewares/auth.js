const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
try {
const token  = req.headers.authorization.split(' ')[1];
const decodeToken = jwt.verify(token,'RANDOM_KEY');
const userId = decodeToken.userId;
if(req.body.userId && req.body.userId != userId){
    throw 'Invalid User ID';
}else{
    next();
}

}catch{
    res.status(401).json({
        result:0,
        error: new Error('authentication Error')
    });
}

}