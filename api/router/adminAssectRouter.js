const express = require('express')
const router = express.Router()
const AssectModel = require('../db/model/AssectModel')
//添加
router.get('/addAssect',(req,res)=>{
    
     let {id,account,nickname,password, sex} = req.query
     AssectModel.insertMany({id,account,nickname,password, sex})
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'商品信息添加已完成'})
     })
 })
//商品查询
router.get('/getAssect',(req,res)=>{
    AssectModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取用信息成功',list:data})
    })
})
//商品删除
router.get('/delAssect',(req,res)=>{
    
     let {id} = req.query
     AssectModel.deleteOne({id})
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'用户信息已删除'})
     })
 })
module.exports = router