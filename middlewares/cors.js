module.exports = (req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","*")
//change this later
res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTIONS");
next();
}