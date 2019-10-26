const express = require('express')
const router = express.Router()
const TypeModel = require('../db/model/typeModel')
//添加
router.get('/addType',(req,res)=>{
    
     let {name,second} = req.query
     TypeModel.insertMany({name,second })
     .then((data)=>{
         console.log(data)
         res.send({err:0,msg:'分类添加已完成'})
     })
 })
//关健字查询
router.get('/getTypeByKw',(req,res)=>{
    let {kw} = req.query
    let reg = new RegExp(kw)
   TypeModel.find({$or:[{name:{$regex:reg}},{second:{$regex:reg}}]})
    .then((data)=>{
        res.send({err:0,msg:'获取分类信息成功',list:data})
    })
})
//商品查询
router.get('/getType',(req,res)=>{
    TypeModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取信息成功',list:data})
    })
})

module.exports = router