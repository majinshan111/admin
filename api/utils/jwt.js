var jwt = require('jsonwebtoken')
    //私钥
const screat ='ktkgkktkgekgfw'
module.exports={
    createToken(payload,expires){
        let token =jwt.sign(payload,screat,{expiresIn:expires})
        return token
    },
    verifyToken(token){
        return new Promise((resolve,reject)=>{
          jwt.verify(token,screat,(err,data)=>{
             if(err){
               reject(err)
             }else{
               resolve(data)
             }
          })
        })
       }
}

