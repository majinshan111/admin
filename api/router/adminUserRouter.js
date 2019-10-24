const express = require('express')
const router = express.Router()
const UserModel = require('../db/model/userModel')
const Jwt= require('../utils/jwt') 
//注册
/**
 * @api {post} /admin/user/reg 用户注册
 * @apiName reg
 * @apiGroup User
 *
 * @apiParam {Number}  us  用户名
 * @apiParam {Number}  ps  用户密码
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}   msg  msg
 * @apiSuccess {String}   token  token
 */
router.get('/reg',(req,res)=>{
    let {us,ps} = req.query
    UserModel.insertMany({us,ps})
    .then((data)=>{
        console.log(data,'ok')
    })
    .catch((err)=>{
        console.log(err,'no ok')
    })
})
//登录
/**
 * @api {get} /admin/user/login 用户登录
 * @apiName login
 * @apiGroup User
 * 
 * @apiParam {Number}  us  用户名
 * @apiParam {Number}  ps  用户密码
 * 
 * @apiSuccess {Number}   err 状态码
 * @apiSuccess {String}  msg  msg
 * @apiSuccess {String}  token  token
 */
router.get('/login',(req,res)=>{
    let {us,ps} = req.query
    // console.log({us,ps})
    UserModel.findOne({us,ps})
    .then((data)=>{
        if(data){
        let token = Jwt.createToken({uid:data._id},60)
            res.send({err:0,msg:'登录成功',token:token})
        }else{
            res.send({err:-2,msg:'登录失败'})   
        }
        // console.log('login',data)
    })
    .catch((err)=>{
       res.send({err:-1,msg:'内部读取错误'})
    })
})
module.exports = router